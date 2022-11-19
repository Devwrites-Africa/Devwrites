class GenericError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ServiceError extends GenericError {
  constructor(message) {
    super(message);
  }
}

class NotFoundError extends GenericError {
  constructor(message) {
    super(message);
  }
}

class ValidationError extends GenericError {
  constructor(errors = [], message = "") {
    message = `${errors[0].message}`;
    super(message);
    this.errors = errors;
  }
}

class AuthenticationError extends GenericError {
  constructor(message) {
    super(message);
  }
}

class AuthorizationError extends GenericError {
  constructor(message = "you are not authorized to perform this action") {
    super(message);
  }
}

module.exports = {
  ServiceError,
  NotFoundError,
  ValidationError,
  AuthenticationError,
  AuthorizationError
};
