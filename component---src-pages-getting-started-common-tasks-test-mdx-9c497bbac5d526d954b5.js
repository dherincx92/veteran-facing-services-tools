(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),i=n.n(a),r=n("Wbzz");function s(){return i.a.createElement(r.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,null)):i.a.createElement(l,{item:e,key:e.name})}))):null}var m=n("MEl4"),d=n.n(m);function o(e){var t=e.location,n=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(c,{items:n.items}))):null}function b(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var j=n("8FPV");function u(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(j.a,{location:n},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(o,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(b,{sourceUrl:a.sourceUrl}))))}},l9yS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),s={},l={_frontmatter:s},c=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"running-tests"},"Running tests"),Object(i.mdx)("p",null,"You can run the following types of tests when building on VA.gov."),Object(i.mdx)("h2",{id:"prerequisite"},"Prerequisite"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"/veteran-facing-services-tools/getting-started/common-tasks/run-build"}),"Run or build")," the application.")),Object(i.mdx)("h2",{id:"test-commands"},"Test commands"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Test type"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Test all"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Test one"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Requires local build to run"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Test target"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Modules used"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Unit"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn test:unit")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn test:unit ./PATH-TO-TEST-FILE")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"no"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"*.unit.spec.js(x)")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://mochajs.org/"}),"Mocha"),", ",Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"http://chaijs.com/"}),"Chai"),", ",Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://sinonjs.org/"}),"Sinon"),", ",Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://github.com/jsdom/jsdom"}),"JSDom"),", ",Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://airbnb.io/enzyme/"}),"Enzyme"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Lint"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn lint")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn lint:js")," or ",Object(i.mdx)("inlineCode",{parentName:"td"},"yarn lint:sass")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"no"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"*.js"),", ",Object(i.mdx)("inlineCode",{parentName:"td"},"*.scss")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://eslint.org/"}),"ESLint"),", ",Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://prettier.io/"}),"Prettier"),", ",Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"https://github.com/sasstools/sass-lint"}),"sass-lint"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"End to end"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn test:e2e")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn test:e2e ./PATH-TO-TEST-FILE")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"yes"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"*.e2e.spec.js")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"http://nightwatchjs.org/"}),"Nightwatch.js"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Accessibility"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"yarn test:accessibility")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"yes"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"all pages in ",Object(i.mdx)("inlineCode",{parentName:"td"},"sitemap.xml")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("a",Object.assign({parentName:"td"},{href:"http://nightwatchjs.org/"}),"Nightwatch.js"))))),Object(i.mdx)("h2",{id:"requires-local-build-or-run"},"Requires local build or run"),Object(i.mdx)("p",null,"Some tests require ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/getting-started/common-tasks/run-build"}),"running or building")," VA.gov:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Testing while running ",Object(i.mdx)("inlineCode",{parentName:"strong"},"watch")," task"),": Tests will automatically be run against the site running on that server."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Testing with a local build"),": If nothing is running at ",Object(i.mdx)("inlineCode",{parentName:"li"},"http://localhost:3001"),", tests start an Express server and serve the build output in ",Object(i.mdx)("inlineCode",{parentName:"li"},"build/localhost"),".")),Object(i.mdx)("h2",{id:"unit-tests"},"Unit tests"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Run all ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://mochajs.org/"}),"Mocha"),"/",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://chaijs.com/"}),"Chai"),"/",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://sinonjs.org/"}),"Sinon"),"-based unit tests with the file extension ",Object(i.mdx)("inlineCode",{parentName:"li"},".unit.spec.js(x)")),Object(i.mdx)("li",{parentName:"ul"},"Use ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/jsdom/jsdom"}),"JSDom")," and ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/enzyme/"}),"Enzyme")," to test browser and React behavior"),Object(i.mdx)("li",{parentName:"ul"},"Are located in ",Object(i.mdx)("inlineCode",{parentName:"li"},"test/")," directories near the code they're testing in ",Object(i.mdx)("inlineCode",{parentName:"li"},"src/"))),Object(i.mdx)("h2",{id:"linting"},"Linting"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Verify consistency of JavaScript"),Object(i.mdx)("li",{parentName:"ul"},"Enforce code formatting rules"),Object(i.mdx)("li",{parentName:"ul"},"Automatically run on ",Object(i.mdx)("inlineCode",{parentName:"li"},"git commit")," as a precommit hook")),Object(i.mdx)("p",null,"Set up your editor to show ESLint errors automatically as you're writing code. This makes the linter far less annoying in day to day use. ESLint has ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://eslint.org/docs/user-guide/integrations"}),"integrations")," for nearly all popular editors."),Object(i.mdx)("h2",{id:"end-to-end-tests"},"End to end tests"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Run all ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://nightwatchjs.org/"}),"Nightwatch.js")," tests in headless Chrome with the file extension ",Object(i.mdx)("inlineCode",{parentName:"li"},".e2e.spec.js")),Object(i.mdx)("li",{parentName:"ul"},"Simulate an actual user completing tasks in the tools and services"),Object(i.mdx)("li",{parentName:"ul"},"Are located in ",Object(i.mdx)("inlineCode",{parentName:"li"},"test/")," directories near the application they're testing in ",Object(i.mdx)("inlineCode",{parentName:"li"},"src/"))),Object(i.mdx)("p",null,"End to end tests will only pass if they are run against their mock API server. This server is started by the end to end test automatically when vets-api is ",Object(i.mdx)("strong",{parentName:"p"},"not")," running."),Object(i.mdx)("h2",{id:"accessibility-tests"},"Accessibility tests"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"A variation of e2e tests that run aXe against the content pages running in Chrome.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-test-mdx-9c497bbac5d526d954b5.js.map