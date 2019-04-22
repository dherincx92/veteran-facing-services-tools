(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),i=t(2),s=t.n(i),c=t(4),l=t(311),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},s.a.createElement(c.MDXTag,{name:"h2",components:n},"Form Tutorial - Advanced"),s.a.createElement(c.MDXTag,{name:"h4",components:n},"Using Common Definitions"),s.a.createElement(c.MDXTag,{name:"p",components:n},"All of our forms share schemas with the back-end through ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-json-schema"),", the repository where we store JSON Schemas for validating data submitted to a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," API endpoint. Assuming you've created one of those schemas, the next step is to incorporate that into your form, along with other common definitions we've built."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Adding your schema"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Assuming you've created your form using our form scaffolding generator, you should have some commented out lines in your ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config/form.js")," file:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\n// const { } = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you uncomment those lines and update the import path to match your schema's file name, you can start pulling in individual definitions and properties to use in your form. We try to use the properties from the shared schema as much as possible, since it helps keep the front-end and back-end in sync and avoid validation errors in production. For example, if you want to import an ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," field from your schema, you can do something like this:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\nconst {\n  email\n} = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n   page1: {\n     path: 'first-page',\n     title: 'First Page',\n     uiSchema: {\n       email: {\n         'ui:title': 'My field label'\n       }\n     },\n     schema: {\n       type: 'object',\n       properties: {\n         email\n       }\n     }\n   }\n   // ...code omitted...\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Here we're using Javascript's object shorthand syntax to set the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," property to the object from the shared schema properties. That way we know we're using the same field name and using the same definition type as what will be used by the back-end. Note that we still need to be careful that we include all the fields we need from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),"."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Using a common front-end definition"),s.a.createElement(c.MDXTag,{name:"p",components:n},"We have a collection of common definitions and fields on the front-end for you to use in your form. Let's try using our common full name field:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n  // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        veteranFullName: fullNameUI\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"There are a few things going on here. One, we've pulled the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullName")," definition from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),". JSON Schema's method of code reuse has you put definitions in a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in the schema, then reference them with a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"$ref")," property, so we have to account for that on the front-end. We can do that by importing it from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema.definitions")," and adding it to the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in our form config object."),s.a.createElement(c.MDXTag,{name:"p",components:n},"Second, we've imported ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," from our common front-end definitions. For this field, we just have some ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," configuration that sets labels and widget types. Other fields are more complex, and may require you to call a function to generate the right configuration, and possibly import something for the regular ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," object as well."),s.a.createElement(c.MDXTag,{name:"p",components:n},"Finally, in the code you can see that we're using ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object, and we're using ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," like we used ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," previously."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Modifying common definitions"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Often you'll need to slightly modify common definitions on the front-end to change a label or some conditional logic. The way we typically do that is to use our data utilities to set values on the schema. For example, say we needed to make our ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," field expand underneath another field:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import _ from 'lodash/fp';\nimport fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        myField: {\n          'ui:title': 'My field',\n          'ui:widget': 'yesNo'\n        },\n        veteranFullName: _.merge(fullNameUI, {\n          'ui:options': {\n            expandUnder: 'myField'\n          }\n        })\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          myField: { type: 'boolean' },\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"We've imported the ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/lodash/lodash/wiki/FP-Guide"}},"Lodash FP (functional programming) library")," and using its ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"merge")," function to merge our ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:options")," into the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," object, so that we don't have to redefine all of the configuration in there. All of the Lodash FP methods treat objects as immutable, not modifying anything you pass in to them, so you can reuse ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in another spot in your form without worrying about having to remove the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:options")," configuration we added."),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Things to watch out for"),s.a.createElement(c.MDXTag,{name:"p",components:n},"The point of having these common definitions and sharing a schema between the front-end and back-end is to encourage consistency in our forms and to reduce errors when submitting a form to a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," endpoint. But following the guide above won't completely prevent those issues. Here are some things to keep in mind:"),s.a.createElement(c.MDXTag,{name:"ul",components:n},s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Since we're importing individual fields from ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fullSchema"),", it can be easy to miss required field rules, since we often import those directly. Make sure you're marking all the necessary fields as required in your form config."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Importing individual fields makes it easy to group them in ways specific to the front-end, so make sure if you are grouping things, you're using property names prefixed with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"view:")," to remove that grouping before submitting.")),s.a.createElement("hr",null),s.a.createElement(c.MDXTag,{name:"p",components:n},"Back: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Vets Website Form Tutorial - Intermediate")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./save-in-progress"}},"Setting up Save in Progress")))},n}(s.a.Component),u={}},306:function(e,n,t){var a;e.exports=(a=t(308))&&a.default||a},307:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},308:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),i=t(13),s=t.n(i),c=t(94),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(c.a,o()({location:n,pageResources:t},t.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=p},309:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}}]}}}},310:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},311:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(307),m=t(2),i=t.n(m),s=t(13),c=t.n(s),l=t(312),p=t.n(l),d=t(68),u=t.n(d),h=(t(306),i.a.createContext({})),f=function(e){return i.a.createElement(h.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};t(17),t(133),t(134),t(135);var g=t(309);function y(){return i.a.createElement(f,{query:"157057713",render:function(e){return i.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:g})}function E(e){var n=e.items;return n.length?i.a.createElement("ul",{className:"menu-list"},n.map(function(e){return i.a.createElement("li",{key:e.name},!!e.items&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(E,{items:e.items})),"componentList"===e.query&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(y,null)),!!e.href&&i.a.createElement("li",{key:e.name},i.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&i.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var b=t(310),T=t.n(b);function v(e){var n=e.location,t=T.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,t.name),i.a.createElement(u.a,{className:"home-link",to:""},"Home"),i.a.createElement(E,{items:t.items})),!t&&i.a.createElement("ul",{className:"menu-list"},T.a.sections.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.a,{to:e.href},e.name))})))}t(313);var w=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return i.a.createElement(f,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(v,{location:t}),i.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(i.a.Component);w.propTypes={children:c.a.node.isRequired};n.a=w}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-advanced-mdx-8cf3580c2762e730f9cf.js.map