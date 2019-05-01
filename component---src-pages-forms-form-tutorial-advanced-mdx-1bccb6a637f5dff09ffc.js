(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{293:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return p});t(42);var a=t(43),o=t.n(a),i=t(3),r=t.n(i),s=t(2),m=t.n(s),c=t(4),l=t(347),d={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,t),components:n},m.a.createElement("h1",{id:"advanced-tutorial"},"Advanced tutorial"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Previous: ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Intermediate tutorial")),m.a.createElement("h2",{id:"using-common-definitions"},"Using Common Definitions"),m.a.createElement(c.MDXTag,{name:"p",components:n},"All of our forms share schemas with the back-end through ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-json-schema"),", the repository where we store JSON Schemas for validating data submitted to a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," API endpoint. Assuming you've created one of those schemas, the next step is to incorporate that into your form, along with other common definitions we've built."),m.a.createElement("h2",{id:"adding-your-schema"},"Adding your schema"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Assuming you've created your form using our form scaffolding generator, you should have some commented out lines in your ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config/form.js")," file:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\n// const { } = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"If you uncomment those lines and update the import path to match your schema's file name, you can start pulling in individual definitions and properties to use in your form. We try to use the properties from the shared schema as much as possible, since it helps keep the front-end and back-end in sync and avoid validation errors in production. For example, if you want to import an ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," field from your schema, you can do something like this:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\nconst {\n  email\n} = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n   page1: {\n     path: 'first-page',\n     title: 'First Page',\n     uiSchema: {\n       email: {\n         'ui:title': 'My field label'\n       }\n     },\n     schema: {\n       type: 'object',\n       properties: {\n         email\n       }\n     }\n   }\n   // ...code omitted...\n};\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Here we're using Javascript's object shorthand syntax to set the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," property to the object from the shared schema properties. That way we know we're using the same field name and using the same definition type as what will be used by the back-end. Note that we still need to be careful that we include all the fields we need from ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),"."),m.a.createElement("h2",{id:"using-a-common-front-end-definition"},"Using a common front-end definition"),m.a.createElement(c.MDXTag,{name:"p",components:n},"We have a collection of common definitions and fields on the front-end for you to use in your form. Let's try using our common full name field:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n  // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        veteranFullName: fullNameUI\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"There are a few things going on here. One, we've pulled the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullName")," definition from ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),". JSON Schema's method of code reuse has you put definitions in a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in the schema, then reference them with a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"$ref")," property, so we have to account for that on the front-end. We can do that by importing it from ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema.definitions")," and adding it to the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in our form config object."),m.a.createElement(c.MDXTag,{name:"p",components:n},"Second, we've imported ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," from our common front-end definitions. For this field, we just have some ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," configuration that sets labels and widget types. Other fields are more complex, and may require you to call a function to generate the right configuration, and possibly import something for the regular ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," object as well."),m.a.createElement(c.MDXTag,{name:"p",components:n},"Finally, in the code you can see that we're using ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object, and we're using ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," like we used ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," previously."),m.a.createElement("h2",{id:"modifying-common-definitions"},"Modifying common definitions"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Often you'll need to slightly modify common definitions on the front-end to change a label or some conditional logic. The way we typically do that is to use our data utilities to set values on the schema. For example, say we needed to make our ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," field expand underneath another field:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { set } from 'platform/utilities/data';\nimport fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        myField: {\n          'ui:title': 'My field',\n          'ui:widget': 'yesNo'\n        },\n        veteranFullName: set('ui:options.expandUnder', 'myField', fullNameUI)\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          myField: { type: 'boolean' },\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"We're using one of the available data utilities to set the expandUnder value for fullNameUI in a way that doesn't modify the existing fullNameUI object. All of the data functions in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"platform/utilities/data")," treat objects as immutable, not modifying anything you pass in to them, so you can reuse ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in another spot in your form without worrying about having to remove the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:options")," configuration we added."),m.a.createElement("h2",{id:"things-to-watch-out-for"},"Things to watch out for"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The point of having these common definitions and sharing a schema between the front-end and back-end is to encourage consistency in our forms and to reduce errors when submitting a form to a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," endpoint. But following the guide above won't completely prevent those issues. Here are some things to keep in mind:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Since we're importing individual fields from ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fullSchema"),", it can be easy to miss required field rules, since we often import those directly. Make sure you're marking all the necessary fields as required in your form config."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Importing individual fields makes it easy to group them in ways specific to the front-end, so make sure if you are grouping things, you're using property names prefixed with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"view:")," to remove that grouping before submitting.")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/save-in-progress"}},"Setting up Save in Progress")))},n}(m.a.Component),p={}},340:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(2),o=t.n(a),i=t(13),r=t.n(i),s=t(68),m=t.n(s);t.d(n,"a",function(){return m.a});t(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,t){var a;e.exports=(a=t(344))&&a.default||a},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),i=t(2),r=t.n(i),s=t(13),m=t.n(s),c=t(94),l=t(9),d=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?r.a.createElement(c.a,o()({location:n,pageResources:t},t.json)):null};d.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},n.default=d},345:function(e,n,t){"use strict";var a=t(3),o=t.n(a),i=t(343),r=t(2),s=t.n(r),m=t(13),c=t.n(m),l=t(348),d=t.n(l),u=t(340),p=(t(17),t(133),t(134),t(341)),h=t.n(p),f=t(18),g=t.n(f),v=t(349),b=t.n(v),y=function(e){function n(n){var t;return(t=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var t;return g()(((t={})[n.id]=!1,t),e)},{}),t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,t=n.open,a=n.onClose,o=n.location;return s.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[n.id]=!e.state[n.id],t))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),s.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(u.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(s.a.Component),E=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={navOpen:!1},t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(y,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(s.a.Component),N=(t(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return s.a.createElement(u.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(E,{location:t}),n)},data:i})},n}(s.a.Component));N.propTypes={children:c.a.node.isRequired};n.a=N},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),i=t(13),r=t.n(i),s=t(345),m=(t(133),t(134),t(135),t(17),t(346)),c=t(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var u=t(341),p=t.n(u);function h(e){var n=e.location,t=p.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-advanced-mdx-1bccb6a637f5dff09ffc.js.map