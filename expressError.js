/*************************************************************
 * Class for handling errors - adds custom message and status
 *************************************************************/

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

module.exports = ExpressError;