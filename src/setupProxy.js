const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc",
      changeOrigin: true,
      pathRewrite: { "^/api/": "" },
    })
  );
};
