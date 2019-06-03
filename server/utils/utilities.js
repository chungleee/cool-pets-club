const omitPassword = (object, field) => {
  delete object[field]
  return object
}

module.exports.omitPassword = omitPassword
