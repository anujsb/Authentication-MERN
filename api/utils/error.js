export const errorHandler = (statusCode, Message) => {
    const error = new Error(Message);
    error.statusCode = statusCode;
    error.message = message;
    return error;
};