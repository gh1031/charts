class Common {
  returnRes (data, errorCode = 0, errorMsg = '') {
    return {
      success: !errorCode,
      errorCode,
      data,
      errorMsg,
    }
  }
}

module.exports = new Common;