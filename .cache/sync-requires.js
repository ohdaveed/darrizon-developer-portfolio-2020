const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ohdaveed/projects/darrizon-developer-portfolio-2020/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ohdaveed/projects/darrizon-developer-portfolio-2020/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/home/ohdaveed/projects/darrizon-developer-portfolio-2020/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/home/ohdaveed/projects/darrizon-developer-portfolio-2020/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ohdaveed/projects/darrizon-developer-portfolio-2020/src/pages/index.js")))
}

