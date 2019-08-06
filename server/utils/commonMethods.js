class Common {
  verifyCookies(ctx) {
    const username = ctx.cookies.get('username');
    return new Promise(resolve => {
      if (!username) {
        resolve(false);
      }
      resolve(true);
    })
  }
  
  returnRes (data, code = 0, errorMsg = '') {
    return {
      success: !code,
      code,
      data,
      errorMsg,
    }
  }
}

module.exports = new Common;
