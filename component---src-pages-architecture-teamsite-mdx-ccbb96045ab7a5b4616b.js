(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return g});a(42);var n=a(43),o=a.n(n),r=a(3),m=a.n(r),s=a(2),i=a.n(s),c=a(4),p=a(311),l={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=p.a,a}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Teamsite Overview"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Updated from ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12779#issue-356005850"}},"TeamSite Technical Solution and Implementation")),i.a.createElement(c.MDXTag,{name:"p",components:t},"EWIS serves much of the existing content on www.va.gov (e.g. www.va.gov/health) and to accomodate this our systems serve that request from our version of the site on sites that exist on the same domain."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"https://user-images.githubusercontent.com/215266/45632257-195abc80-ba5a-11e8-9f7c-76c63fb14ac4.png",alt:"ewis"}})),i.a.createElement(c.MDXTag,{name:"p",components:t},"Requests to subdomain hosts such as www.benefits.va.gov are not proxied through our systems and are not under our control. Content for these sites exists on TeamSite: a content management system utilized by the VA to manage content across several properties at the VA. Each property in TeamSite consists of perl-based template files, which on publish rendered content to a file store. The rendered content contains server side includes, which reference content from a directory called ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"va_files"),", which has shared header and footer functionality."),i.a.createElement(c.MDXTag,{name:"p",components:t},"There are no consistent staging/production environments for TeamSite properties, and there are multiple variants of header and footer functionality in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"va_files")," (attached to this issue). For properties that do have staging and production variants, they reference the same version of header and footer content. A change to the header or footer will affect both the staging and production versions of a property."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Scripts and Teamsite Administration"),i.a.createElement(c.MDXTag,{name:"p",components:t},"The header injection markup is added to Teamsite templates by their administrator. Current point of contact for this is:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Josh Tuscher ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"mailto:Joshua.Tuscher@va.gov"}},"Joshua.Tuscher@va.gov"))),i.a.createElement(c.MDXTag,{name:"p",components:t},"Current markup added to Teamsite templates:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'<style type="text/css">.brand-consolidation-deprecated { display: none !important; } </style>\n<link rel="stylesheet" href="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/styleConsolidated.css" />\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/settings.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/polyfills.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/vendor.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/proxy-rewrite.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/vendor/uswds.min.js"><\/script>\n')),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Teamsite Behavior and Whitelisting Pages"),i.a.createElement(c.MDXTag,{name:"p",components:t},"There are an unknown number of Teamsite templates that drive the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<head>")," content on Teamsite pages and there are several pages that receive the above markup that ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"should not")," show the va.gov header. The proxy rewrite application uses a ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/b770f380270722228563e56629af440c64342157/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json"}},"whitelist")," to drive the activation of the header content. Example whitelist entry:"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'{\n  "hostname": "www.benefits.va.gov",\n  "pathnameBeginning": "/",\n  "cookieOnly": false\n},\n')),i.a.createElement(c.MDXTag,{name:"p",components:t},"Pages can be whitelisted in two ways:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"cookieOnly: false")," - the header will always activate"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"cookieOnly: true")," - the header will activate when ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"proxyRewrite")," cookie is set to true.")),i.a.createElement(c.MDXTag,{name:"p",components:t},"This cookie can be set in the console by running ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'document.cookie = "proxyRewrite=true;"')),i.a.createElement(c.MDXTag,{name:"h3",components:t},"Considerations when editing and testing the whitelist"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Some Teamsites redirect to both ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"subdomain.va.gov")," and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"www.subdomain.va.gov")," (sometimes alternating between the two). Always test the redirect behavior of the first level of links on the page and ensure that both hosts are whitelisted if necessary."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"New hostnames need to be added to our ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"allowed_origins")," ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L277"}},"here")," and ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L290"}},"here"),". Subdomains are considered separate hostnames by CORS and the browser performs CORS checks on all of the webfonts injected by the Teamsite header scripts. Terraform updates are not automatically deployed- work with a Devops engineer to deploy these changes."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"There are at least two behaviors provided by the Teamsite system for adding the inline scripts to the page:",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"as part of the initial document response, or"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"injected as part of a Teamsite sourced JavaScript.")))),i.a.createElement(c.MDXTag,{name:"h1",components:t},"Proxy Rewrite"),i.a.createElement(c.MDXTag,{name:"p",components:t},"The ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite"),' application is used to inject site-wide VA.gov components into pages that are outside of the www.va.gov build and publish process. The affected sites are generally referred to as "TeamSite", because TeamSite is the name of the CMS use for those pages.'),i.a.createElement(c.MDXTag,{name:"p",components:t},"This works by -"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"A request is sent to a VA.gov website"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"The content requested from the Teamsite servers and passed through the www.va.gov proxy"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"A code snippet included in the Teamsite page downloads the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"proxy-rewrite")," app which overwrites the Teamsite header and footer with VA.gov content")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Because the Teamsite template containing the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," snippet is used both on sites that should and shouldn't show the VA.gov header, the script is governed by an allow list contained in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite-whitelist.json"),"."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Local Dev"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Since Teamsite content is not run through the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website")," build process, testing changes on Teamsite requires running local or staging changes against the production pages. The ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," app supports targeting a specific environment for testing:"),i.a.createElement(c.MDXTag,{name:"p",components:t},"For example: ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://staging.va.gov/health/?targetEnvironment=vagovstaging"}},"https://staging.va.gov/health/?targetEnvironment=vagovstaging")),i.a.createElement(c.MDXTag,{name:"p",components:t},"The default behavior for ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://staging.va.gov/health"}},"https://staging.va.gov/health")," is to load the production assets. when the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"targetEnvironment")," is set, the loader well delete the production nodes from the DOM and add script and style nodes for the target environment."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The injection script will support any of ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/constants/environments.js"}},"these")," environment names set as the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"targetEnvironment"),"."),i.a.createElement(c.MDXTag,{name:"p",components:t},"Caveats:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Style node deletions will prompt a rebuilding of the CSSOM but removing script nodes doesn't undo any JS that was run before the JS node was removed. For most cases this should not impact testing as the application specific code doesn't run but JS that is executed before the application (e.g. polyfills) will always run the production code first.")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Charles Proxy"),i.a.createElement(c.MDXTag,{name:"p",components:t},"You can also use an application called Charles Proxy to map the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," bundles of TeamSite pages to your local machine. This way you can navigate directly to ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"https://www.va.gov/health/")," and when the request for the production bundle of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"proxy-rewrite")," is sent, Charles will have overridden that file to instead be served locally. Instructions to set this up are located here, ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"}},"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"),"."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Teamsite Visual Regression Testing"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Both scripts compare production Teamsite header and footer against images in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website")," repo"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm run vrt")," - test fails and generates diff images when images differ")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm run vrt:baseline")," - test always succeeds and replaces existing baseline images when images differ")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"If no baseline images exist for a test, both scripts will"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"succeed on each test that has no baseline image and"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"generate a new baseline image for it."))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Diff images are removed automatically when their associated test succeeds."))),i.a.createElement(c.MDXTag,{name:"h3",components:t},"Details"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"compares snapsshots of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"<header>")," and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".footerNav")," on current subdomain Teamsite pages"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/americanexpress/jest-image-snapshot"}},"jest-image-snapshot")," uses ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/mapbox/pixelmatch"}},"pixelmatch")," to detect failure"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Diff images show ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"left center right")," the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"baseline diff new")," images\n",i.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"li",props:{src:"./readme-assets/diff-image-example.png",alt:"Example Diff Image"}}))),i.a.createElement(c.MDXTag,{name:"h2",components:t},"What To Do When The Test Fails"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"If needed, run ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run vrt")," locally"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The test log will show a",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Summary of successes and failures\n",i.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"li",props:{src:"./readme-assets/vrt-test-summary-example.png",alt:"Test Summary Example"}})),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Failure details for each test with path to diff image for failure\n",i.a.createElement(c.MDXTag,{name:"img",components:t,parentName:"li",props:{src:"./readme-assets/cli-failure-example.png",alt:"Failure Detail Example"}})))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"If failure is caused by production issue"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Repair issue and publish to production"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Verify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:vrt")," succeeds"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"If failure is caused by an update"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Run ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:vrt:baseline")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Check in new baseline images to ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vets-website"))))))},t}(i.a.Component),g={}},306:function(e,t,a){var n;e.exports=(n=a(308))&&n.default||n},307:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},308:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),m=a.n(r),s=a(13),i=a.n(s),c=a(94),p=a(9),l=function(e){var t=e.location,a=p.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(c.a,o()({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},309:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}}]}}}},310:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},311:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(307),m=a(2),s=a.n(m),i=a(13),c=a.n(i),p=a(312),l=a.n(p),d=a(68),g=a.n(d),h=(a(306),s.a.createContext({})),u=function(e){return s.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};a(17),a(133),a(134),a(135);var f=a(309);function T(){return s.a.createElement(u,{query:"157057713",render:function(e){return s.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function E(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(T,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(g.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var v=a(310),w=a.n(v);function b(e){var t=e.location,a=w.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,a.name),s.a.createElement(g.a,{className:"home-link",to:""},"Home"),s.a.createElement(E,{items:a.items})),!a&&s.a.createElement("ul",{className:"menu-list"},w.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(g.a,{to:e.href},e.name))})))}a(313);var D=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return s.a.createElement(u,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(b,{location:a}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);D.propTypes={children:c.a.node.isRequired};t.a=D}}]);
//# sourceMappingURL=component---src-pages-architecture-teamsite-mdx-ccbb96045ab7a5b4616b.js.map