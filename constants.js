exports.constants = {
    VALIDATION_ERROR: 400,    // Bad Request: Invalid input or parameters
    UNAUTHORIZED: 401,        // Unauthorized: No valid authentication
    FORBIDDEN: 403,           // Forbidden: User authenticated but does not have permission
    NOT_FOUND: 404,           // Not Found: Requested resource does not exist
    INTERNAL_SERVER_ERROR: 500, // Internal Server Error: A generic error when the server fails
    BAD_GATEWAY: 502,          // Bad Gateway: The server is acting as a gateway and received an invalid response
    SERVICE_UNAVAILABLE: 503,  // Service Unavailable: The server is temporarily unavailable (e.g., maintenance)
    GATEWAY_TIMEOUT: 504,      // Gateway Timeout: The server acted as a gateway but did not get a timely response
    CONFLICT: 409,             // Conflict: Request conflicts with the current state of the server (e.g., duplicate data)
    PRECONDITION_FAILED: 412,  // Precondition Failed: One of the conditions specified in the request header failed
    UNPROCESSABLE_ENTITY: 422, // Unprocessable Entity: The request is well-formed but could not be followed due to semantic errors
  };
  