module.exports = {
  files: ["public/src/**/*.html", "public/src/**/*.css", "public/src/**/*.js"],
  exclude: false,
  server: {
    baseDir: "public",
    routes: { "/": "./" }
  },
  proxy: false,
  ghostMode: {
    clicks: true,
    links: true,
    forms: true,
    scroll: true
  },
  open: true,
  timestamps: true,
  fileTimeout: 1000,
  injectChanges: true,
  scrollThrottle: 0,
  notify: false,
  host: null,
  excludedFileTypes: [],
  reloadDelay: 0
};
