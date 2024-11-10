const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  // Get the status code from the response, default to 500 if not set
  const statusCode = res.statusCode || constants.INTERNAL_SERVER_ERROR;

  // Define the structure for the error response
  const response = {
    message: err.message || "An unknown error occurred.",
    stackTrace: process.env.NODE_ENV === "development" ? err.stack : undefined, // Only show stack trace in dev mode
  };

  // Set the status code for the response
  res.status(statusCode);

  // Handle different status codes
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      response.title = "Validation Failed";
      break;

    case constants.UNAUTHORIZED:
      response.title = "Unauthorized Access";
      break;

    case constants.FORBIDDEN:
      response.title = "Forbidden";
      break;

    case constants.NOT_FOUND:
      response.title = "Not Found";
      break;

    case constants.INTERNAL_SERVER_ERROR:
      response.title = "Internal Server Error";
      break;

    case constants.BAD_GATEWAY:
      response.title = "Bad Gateway";
      break;

    case constants.SERVICE_UNAVAILABLE:
      response.title = "Service Unavailable";
      break;

    case constants.GATEWAY_TIMEOUT:
      response.title = "Gateway Timeout";
      break;

    case constants.CONFLICT:
      response.title = "Conflict";
      break;

    case constants.PRECONDITION_FAILED:
      response.title = "Precondition Failed";
      break;

    case constants.UNPROCESSABLE_ENTITY:
      response.title = "Unprocessable Entity";
      break;

    default:
      response.title = "Unknown Error";
      break;
  }

  // Optionally, log the error (for example, to a logging service)
  console.error(`[${statusCode}] ${err.message}`, err.stack);

  // Send the response to the client
  res.json(response);
};

module.exports = errorHandler;
