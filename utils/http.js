module.exports = {
  returnSuccess: (res, data = null) => {
    res.json({
      success: true,
      data,
      errorMsg: null,
    });
  },
  returnFail: (res, errorMsg = "服务器错误") => {
    res.json({
      success: false,
      data: null,
      errorMsg: errorMsg,
    });
  },
};
