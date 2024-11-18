/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import config from "../config";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";
import handleZodError from "../errors/handleZodError";
import AppError from "../errors/appError";

/**
 * Global error handler for Express.js applications using Prisma.
 * Handles errors that occur during the request-response cycle.
 *
 * @param {Error} error - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @return {Response} The JSON response containing the error message and status code.
 */
const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res: Response<TGenericErrorResponse>,
  next
) => {
  // Set default values for status code, message, and error sources.
  let statusCode = 500;
  let stack = null;
  let message = "Something Went Wrong";
  let errorSources: TErrorSources = [
    {
      path: " ",
      message: "Something Went Wrong",
    },
  ];

  // Handle Zod schema validation errors
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message as any;
    errorSources = simplifiedError?.errorSources;
    stack = config.node_env === "development" && error.stack;

    // Handle Prisma errors
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Example: Handle unique constraint violations
    if (error.code === "P2002") {
      statusCode = 400;
      message = "Unique constraint failed";
      errorSources = [
        {
          path: error.meta?.target ? error.meta.target.toString() : "unknown",
          message: "A record with this value already exists.",
        },
      ];
    }
    stack = config.node_env === "development" && error.stack;
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    message = extractMeaningfulMessage(error.message);
    errorSources = [
      {
        path: " ",
        message: extractMeaningfulMessage(error.message),
      },
    ];
    stack = config.node_env === "development" && error.stack;
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = 500;
    message = "Unknown Database Error";
    errorSources = [
      {
        path: " ",
        message: error.message,
      },
    ];
    stack = config.node_env === "development" && error.stack;
  } else if (error instanceof AppError) {
    // Handle application-specific errors
    statusCode = error?.statusCode;
    message = error?.message;
    errorSources = [
      {
        path: " ",
        message: error.message,
      },
    ];
    stack = config.node_env === "development" && error.stack;
  } else if (error instanceof Error) {
    // Handle generic errors
    message = error?.message;
    errorSources = [
      {
        path: " ",
        message: error.message,
      },
    ];
    stack = config.node_env === "development" && error.stack;
  }

  // Return a JSON response with the error message and status code.
  res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    errorSources,
    ...(stack && { stack }),
  });
};

export default globalErrorHandler;

/**
 * Extract meaningful error message from Prisma validation error.
 * @param {string} fullMessage - Full error message from Prisma.
 * @returns {string} Simplified error message.
 */
const extractMeaningfulMessage = (fullMessage: string): string => {
  const match = fullMessage.match(/Argument `(.+?)` is missing/);
  return match ? `The '${match[1]}' field is required.` : "Invalid input.";
};
