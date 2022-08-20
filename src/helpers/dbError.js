function dbError(error) {
  const messages = Object.values(error.errors).map(key => key.message);
  return messages;
}

module.exports = dbError;
