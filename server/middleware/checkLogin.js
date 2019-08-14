exports.checkLogin = async (ctx, next) => {
  const username = ctx.cookies.get('username');
  if (!username) {
    return ctx.body = {
      code: -1,
      errorMsg: '请先登录！',
      success: false,
      data: null,
    }
  }
  await next();
};
