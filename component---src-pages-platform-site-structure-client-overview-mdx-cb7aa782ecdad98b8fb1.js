(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{348:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(45);var a=n(46),o=n.n(a),s=n(3),r=n.n(s),c=n(2),i=n.n(c),p=n(4),m=n(370),l={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},i.a.createElement("h1",{id:"vagov-client-overview"},"VA.gov client overview"),i.a.createElement(p.MDXTag,{name:"p",components:t},"Welcome to the VA digital services platform front-end overview. The goal of this article is to provide a high level overview of our front end architecture to get you oriented with the ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website")," repository."),i.a.createElement(p.MDXTag,{name:"p",components:t},"The overall architecture for VA.gov is comprised of an API backend written in Ruby on Rails (",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),") and a static front-end, written in HTML, CSS, and Javascript (",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),"). There's no server-side rendering or processing for the front-end; the build process compiles everything into static resources which are served to users."),i.a.createElement("h2",{id:"build-process"},"Build process"),i.a.createElement(p.MDXTag,{name:"p",components:t},"The build process for this is controlled by a tool called ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.metalsmith.io/"}},"Metalsmith"),", which is a pluggable Node.js static site generator. In general, everything in Metalsmith is a plugin, so if you're looking for specific parts of the build process, expect to check out a plugin or two. We use Metalsmith because it's flexible and because it's Javascript based, it's easy to integrate with the rest of our tools."),i.a.createElement(p.MDXTag,{name:"p",components:t},"The build process has two primary kinds of functionality that it processes: static content pages and Javascript applications. Most of VA.gov consists of content that lives in Markdown files and is converted into HTML by a Metalsmith plugin. There are shared templates and other enhancements to make this content easier to structure. This content lives in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),", which also provides the basic URL structure of the site."),i.a.createElement("h2",{id:"javascript-applications"},"Javascript applications"),i.a.createElement(p.MDXTag,{name:"p",components:t},"Javascript applications are the other type of functionality in vets-website. These applications are written in ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React")," and ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://redux.js.org/"}},"Redux")," and live in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/")," in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),". For each app you'll find a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"manifest.json")," file that contains application information. You'll find the root url of the application, which you can use to navigate to that application on the site. These applications also usually have client-side routes, so opening that root url may allow you to click to other pages that are fully client-side, and not based on pages in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),"."),i.a.createElement(p.MDXTag,{name:"p",components:t},"If you're a developer, most of your time will likely be spent working on a React application. We use React because it's widely used by front end developers and provides a good balance of performance and approachability. We also use Redux to manage application state, also because it's commonly used with React and fits most of the applications on VA.gov well. We use ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reacttraining.com/react-router/"}},"React Router")," for client-side routing and ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://webpack.js.org/"}},"Webpack")," as a build tool, both of which are the ",i.a.createElement(p.MDXTag,{name:"em",components:t,parentName:"p"},"de facto")," standards in the Javascript world. For styles we use ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://sass-lang.com/"}},"Sass")," and for dependency management we use ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/en/"}},"Yarn"),"."),i.a.createElement("h2",{id:"design-system"},"Design system"),i.a.createElement(p.MDXTag,{name:"p",components:t},"You will also find that our visual components and site-wide styles live in an external ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://department-of-veterans-affairs.github.io/design-system/"}},"design system"),". This design system is based on the ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://designsystem.digital.gov/"}},"US Web Design System"),", with some additional modifications by our team. As part of that design system, we provide a set of React components covering common patterns, which is ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmjs.com/package/@department-of-veterans-affairs/formation"}},"published to npm"),". You'll likely use these components to make your apps accessible and consistent with the rest of VA.gov."),i.a.createElement("h2",{id:"routing-for-react-apps"},"Routing for React apps"),i.a.createElement("h3",{id:"production"},"Production"),i.a.createElement(p.MDXTag,{name:"p",components:t},"The production deployment of the vet-website front end consists of static HTML, CSS, and JS assets deployed to an Amazon S3 bucket. We have an nginx server that serves those static assets and does some extra route handling for our single page React apps."),i.a.createElement(p.MDXTag,{name:"p",components:t},"React applications have a single entry page in the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages")," folder and a special nginx ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vetsgov/vars/react_routes.yml"}},"config entry"),". Each of the React applications listed in that config are standalone single page apps, and for each of the urls listed in that section of the config, the nginx server routes anything that starts with that url to the static page at that url, instead of trying to find a content page at that spot in the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages")," folder structure. See the example below for a step by step view of that process."),i.a.createElement(p.MDXTag,{name:"p",components:t},"When that page is loaded and the JS bundle is downloaded and parsed, React Router sees the original route, removes the base url specified in the entry page from it, and routes to the page configured in the routes for the React app."),i.a.createElement(p.MDXTag,{name:"p",components:t},"In summary, nginx routes a variety of different urls to the same static entry page, and React Router renders the correct component based on the route configuration client side."),i.a.createElement("h4",{id:"example"},"Example"),i.a.createElement(p.MDXTag,{name:"p",components:t},"Here's an example using the claim status application:"),i.a.createElement(p.MDXTag,{name:"ol",components:t},i.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"User opens ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"va.gov/track-claims/your-claims/2344/detail")),i.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"Nginx serves ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"va.gov/track-claims/index.html"),", because ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims")," is configured as a React application"),i.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"In the browser, the JS bundle loads and React Router sees a url of ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims/your-claims/2344/detail")),i.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"Since React Router has a base url of ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims"),", it runs its routing logic on ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/your-claims/2344/detail"),", and renders the appropriate component for that url.")),i.a.createElement(p.MDXTag,{name:"p",components:t},"One other thing to note is that links that use the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Link")," component or the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"router")," object in the React app use the history api to change the url without reloading the page. React Router listens for these url changes and renders the right component for you. This is why you have to use ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Link")," and not a regular ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"a")," element, which results in a page refresh for the url you're trying to link to."),i.a.createElement("h3",{id:"development"},"Development"),i.a.createElement(p.MDXTag,{name:"p",components:t},"Locally, we've configured the webpack dev server to do the same redirects as nginx, however they are duplicated in a couple places:"),i.a.createElement(p.MDXTag,{name:"ul",components:t},i.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/build.js"}},"script/build.js")),i.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/test-server.js"}},"src/platform/testing/e2e/test-server.js")," (for e2e tests)")),i.a.createElement(p.MDXTag,{name:"p",components:t},"You will need to update these locations as well as the nginx config when creating a new React application."))},t}(i.a.Component),u={}},369:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}}]}}}},370:function(e,t,n){"use strict";var a=n(2),o=n.n(a),s=n(15),r=n.n(s),c=n(373),i=(n(150),n(151),n(374),n(21),n(369)),p=n(371);function m(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function l(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(p.a,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var u=n(372),h=n.n(u);function g(e){var t=e.location,n=h.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function f(e){var t=e.children,n=e.location;return o.a.createElement(c.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return f}),f.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-client-overview-mdx-cb7aa782ecdad98b8fb1.js.map