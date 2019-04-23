(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{323:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),m=a.n(r),s=a(2),c=a.n(s),i=a(4),l=a(338),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},c.a.createElement(i.MDXTag,{name:"h1",components:t},"Set up VA.gov locally"),c.a.createElement(i.MDXTag,{name:"p",components:t},"These instructions cover the installation of dependencies needed for running VA.gov locally."),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Node setup")," - steps for installing ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"node")," which is needed for building, testing, and running the local development server"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Get the source code")," - steps for cloning the various repos needed to run VA.gov"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Start up the front end")," - installing and running VA.gov locally"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Backend and local tools setup")," - links to other setup instructions for running ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vets-api")," and retrieving static content")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Prerequisites"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://brew.sh/"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"homebrew"))," is recommended for for installing ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"nvm")," but other installation approaches are on ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/creationix/nvm#installation-and-update"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"nvm")," Github page"))),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Node setup"),c.a.createElement(i.MDXTag,{name:"ol",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Install ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"nvm"),":")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"brew update && brew install nvm\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"Follow the post install instructions in the success message.")),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:2}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Install ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"node 8.10.0")," (this also installs ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm"),"):")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"nvm install 8.10.0\n")),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:3}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Configure ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"nvm")," to use ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"node 8.10.0")," by default:")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"nvm alias default 8.10.0\n")),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:4}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Install ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"yarn 1.12.3")," globally:")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"npm i -g yarn@1.12.3\n")),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:5}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Verify correct versions of ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"node")," and ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"yarn")," are installed:")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"node --version # 8.10.0\nyarn --version # 1.12.3\n")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Get the source code"),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:6}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Clone VA.gov git repos ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"as sibling directories"),":")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"git clone git@github.com:department-of-veterans-affairs/vets-website.git\ngit clone git@github.com:department-of-veterans-affairs/vagov-content.git\ngit clone git@github.com:department-of-veterans-affairs/vets-json-schema.git\ngit clone git@github.com:department-of-veterans-affairs/veteran-facing-services-tools.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"Front end repos")),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"vets-website"),": Core front end platform and application code"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"vagov-content"),": Markdown content used to generate static pages"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"veteran-facing-services-tools"),": Shared front end components (including non VA.gov users) and front end documentation site")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"Back end repos")),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"vets-api"),": Core Rails API server application code"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"vets-api-mockdata"),": Mock data used when running locally and on dev for the backend")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"Shared repos")),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"vets-json-schema"),": Shared JSON Schema definitions used by form applications and the APIs that they consume")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Start up the front end"),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:7}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Install ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vets-website")," dependencies")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yarn install\n")),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:8}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Start the local development server")),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"Build is complete when the CLI says")," ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Compiled successfully")),c.a.createElement(i.MDXTag,{name:"ol",components:t,props:{start:9}},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ol"},"Open ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://localhost:3001"}},"http://localhost:3001")," in a browser")),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Backend and internal tools set up"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Setting up the backend and internal tools allows local test account login and static content rendering."),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Backend set up")," instructions: ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),".")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"Follow the Docker instructions, which are in the README for the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"vets-api")," repo.")),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Local test account login")," instructions: ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Accessing-Staging.md"}},"Accessing Staging"))),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Internal tools setup")," instructions: ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"internal-tools"}},"Accessing internal tools"),".")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"This proxy setup is required to access static content locally and to access to our reporting and monitoring tools. Running the watch task with the SOCK proxy active will automatically pull and cache the static content for ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"vets-website"))))},t}(c.a.Component),u={}},331:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),m=a.n(r),s=a(68),c=a.n(s);a.d(t,"a",function(){return c.a});a(333);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},332:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"getting-started"},{name:"2. Access internal tools",href:"getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"getting-started/environments"},{name:"Bundles and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},333:function(e,t,a){var n;e.exports=(n=a(335))&&n.default||n},334:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},335:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),m=a.n(r),s=a(13),c=a.n(s),i=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?m.a.createElement(i.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},336:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(334),m=a(2),s=a.n(m),c=a(13),i=a.n(c),l=a(339),p=a.n(l),d=a(331),u=(a(17),a(133),a(134),a(332)),g=a.n(u),h=a(18),f=a.n(h),E=a(340),v=a.n(E),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=g.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return s.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),s.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(s.a.Component),M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(b,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(s.a.Component),T=(a(341),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(M,{location:a}),t)},data:r})},t}(s.a.Component));T.propTypes={children:i.a.node.isRequired};t.a=T},337:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},338:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),m=a.n(r),s=a(336),c=(a(17),a(133),a(134),a(135),a(331)),i=a(337);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var t=e.items;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(p,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(l,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var d=a(332),u=a.n(d);function g(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!a&&o.a.createElement(p,{items:a.items}),!a&&o.a.createElement("ul",{className:"site-c-sidenav-list"},u.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(c.a,{to:e.href},e.name))})))}function h(e){var t=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-15b5b77fdeb8c31759ed.js.map