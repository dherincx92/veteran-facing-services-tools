(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{308:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),i=t.n(r),m=t(2),s=t.n(m),c=t(4),l=t(337),d={},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,t),components:n},s.a.createElement(c.MDXTag,{name:"h1",components:n},"Advanced tutorial"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Previous: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Intermediate tutorial")),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Using Common Definitions"),s.a.createElement(c.MDXTag,{name:"p",components:n},"All of our forms share schemas with the back-end through ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-json-schema"),", the repository where we store JSON Schemas for validating data submitted to a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," API endpoint. Assuming you've created one of those schemas, the next step is to incorporate that into your form, along with other common definitions we've built."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Adding your schema"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Assuming you've created your form using our form scaffolding generator, you should have some commented out lines in your ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config/form.js")," file:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\n// const { } = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you uncomment those lines and update the import path to match your schema's file name, you can start pulling in individual definitions and properties to use in your form. We try to use the properties from the shared schema as much as possible, since it helps keep the front-end and back-end in sync and avoid validation errors in production. For example, if you want to import an ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," field from your schema, you can do something like this:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\nconst {\n  email\n} = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n   page1: {\n     path: 'first-page',\n     title: 'First Page',\n     uiSchema: {\n       email: {\n         'ui:title': 'My field label'\n       }\n     },\n     schema: {\n       type: 'object',\n       properties: {\n         email\n       }\n     }\n   }\n   // ...code omitted...\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Here we're using Javascript's object shorthand syntax to set the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," property to the object from the shared schema properties. That way we know we're using the same field name and using the same definition type as what will be used by the back-end. Note that we still need to be careful that we include all the fields we need from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),"."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Using a common front-end definition"),s.a.createElement(c.MDXTag,{name:"p",components:n},"We have a collection of common definitions and fields on the front-end for you to use in your form. Let's try using our common full name field:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n  // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        veteranFullName: fullNameUI\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"There are a few things going on here. One, we've pulled the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullName")," definition from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),". JSON Schema's method of code reuse has you put definitions in a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in the schema, then reference them with a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"$ref")," property, so we have to account for that on the front-end. We can do that by importing it from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema.definitions")," and adding it to the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in our form config object."),s.a.createElement(c.MDXTag,{name:"p",components:n},"Second, we've imported ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," from our common front-end definitions. For this field, we just have some ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," configuration that sets labels and widget types. Other fields are more complex, and may require you to call a function to generate the right configuration, and possibly import something for the regular ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," object as well."),s.a.createElement(c.MDXTag,{name:"p",components:n},"Finally, in the code you can see that we're using ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object, and we're using ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," like we used ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," previously."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Modifying common definitions"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Often you'll need to slightly modify common definitions on the front-end to change a label or some conditional logic. The way we typically do that is to use our data utilities to set values on the schema. For example, say we needed to make our ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," field expand underneath another field:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { set } from 'platform/utilities/data';\nimport fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        myField: {\n          'ui:title': 'My field',\n          'ui:widget': 'yesNo'\n        },\n        veteranFullName: set('ui:options.expandUnder', 'myField', fullNameUI)\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          myField: { type: 'boolean' },\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"We're using one of the available data utilities to set the expandUnder value for fullNameUI in a way that doesn't modify the existing fullNameUI object. All of the data functions in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"platform/utilities/data")," treat objects as immutable, not modifying anything you pass in to them, so you can reuse ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in another spot in your form without worrying about having to remove the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:options")," configuration we added."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Things to watch out for"),s.a.createElement(c.MDXTag,{name:"p",components:n},"The point of having these common definitions and sharing a schema between the front-end and back-end is to encourage consistency in our forms and to reduce errors when submitting a form to a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," endpoint. But following the guide above won't completely prevent those issues. Here are some things to keep in mind:"),s.a.createElement(c.MDXTag,{name:"ul",components:n},s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Since we're importing individual fields from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fullSchema"),", it can be easy to miss required field rules, since we often import those directly. Make sure you're marking all the necessary fields as required in your form config."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Importing individual fields makes it easy to group them in ways specific to the front-end, so make sure if you are grouping things, you're using property names prefixed with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"view:")," to remove that grouping before submitting.")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/save-in-progress"}},"Setting up Save in Progress")))},n}(s.a.Component),u={}},330:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(2),o=t.n(a),r=t(13),i=t.n(r),m=t(68),s=t.n(m);t.d(n,"a",function(){return s.a});t(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},331:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,n,t){var a;e.exports=(a=t(334))&&a.default||a},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},334:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),i=t.n(r),m=t(13),s=t.n(m),c=t(94),l=t(9),d=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?i.a.createElement(c.a,o()({location:n,pageResources:t},t.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=d},335:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(333),i=t(2),m=t.n(i),s=t(13),c=t.n(s),l=t(338),d=t.n(l),p=t(330),u=(t(17),t(133),t(134),t(331)),h=t.n(u),f=t(18),g=t.n(f),v=t(339),b=t.n(v),E=function(e){function n(n){var t;return(t=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var t;return g()(((t={})[n.id]=!1,t),e)},{}),t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,t=n.open,a=n.onClose,o=n.location;return m.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return m.a.createElement("div",{key:n.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[n.id]=!e.state[n.id],t))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),m.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(p.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(m.a.Component),y=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={navOpen:!1},t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(E,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(m.a.Component),N=(t(340),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return m.a.createElement(p.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(y,{location:t}),n)},data:r})},n}(m.a.Component));N.propTypes={children:c.a.node.isRequired};n.a=N},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),i=t.n(r),m=t(335),s=(t(133),t(134),t(135),t(17),t(336)),c=t(330);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=t(331),u=t.n(p);function h(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:i.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-advanced-mdx-2f33b5dcf8f2477b9f69.js.map