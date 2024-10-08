
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/pbudzko001/Documents/GitHub/open-site/src/templates/using-dsg.js"))
}

