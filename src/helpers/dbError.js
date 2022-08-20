function dbError(error) {
  try {
    const messages = Object.values(error.errors).map(key => key.message);
    return messages;
  } catch(error) {
    return ["A wild error has appeared!"]
  }
}

module.exports = dbError;
