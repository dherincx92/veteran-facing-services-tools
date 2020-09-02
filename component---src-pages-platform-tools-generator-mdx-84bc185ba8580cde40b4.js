(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),o=a.n(n),i=a("Wbzz");function r(){return o.a.createElement(i.StaticQuery,{query:"68798663",render:function(e){return o.a.createElement(s,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(i.Link,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?o.a.createElement("li",{key:e.name},n&&o.a.createElement(l,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&o.a.createElement(l,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(r,null)):o.a.createElement(l,{item:e,key:e.name})}))):null}var m=a("MEl4"),c=a.n(m);function p(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(s,{items:a.items}))):null}function d(e){var t=e.sourceUrl;return t?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function h(e){var t=e.children,a=e.location,n=e.pageContext;return o.a.createElement(u.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(p,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,o.a.createElement(d,{sourceUrl:n.sourceUrl}))))}},bW0g:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("3dLD"),r={},l={_frontmatter:r},s=i.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.mdx)(s,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"vagov-application-generator"},"VA.gov application generator"),Object(o.mdx)("p",null,"We have a Yeoman generator for starting up new React applications in vets-website. This page will guide you through setting up the generator and explaining the questions that are asked as part of the setup process."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"You can find more information about creating forms in the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms"}),"forms section"),".")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("p",null,"Navigate to the root of the vets-website repository and run:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ yarn new:app\n")),Object(o.mdx)("p",null,"After running the above command, the generator will start up and ask you a series of questions:"),Object(o.mdx)("h3",{id:"whats-the-name-of-your-application"},"What's the name of your application?"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"This will be the default page title. Examples: ",Object(o.mdx)("inlineCode",{parentName:"p"},"21P-530 Burials benefits form")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"GI Bill School Feedback Tool"))),Object(o.mdx)("p",null,"This value will be used as the page title. If you're creating a form, it will also be used as the header for the introduction page and as a header on the confirmation page."),Object(o.mdx)("h3",{id:"what-folder-in-srcapplications-should-your-app-live-in"},"What folder in src/applications/ should your app live in?"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"This can be a subfolder. Examples: ",Object(o.mdx)("inlineCode",{parentName:"p"},"burials")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"edu-benefits/0993"))),Object(o.mdx)("p",null,"Most of our React applications have their own folder in src/applications, so normally you want to pick a new folder. However, if you're building an application that's related to other applications, there may be a folder that your app should go in. An example would be if you were creating a new education form, you would probably create your app in edu-benefits/newform."),Object(o.mdx)("h3",{id:"what-should-be-the-name-of-your-apps-entry-bundle"},"What should be the name of your app's entry bundle?"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Examples: ",Object(o.mdx)("inlineCode",{parentName:"p"},"0993-edu-benefits")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"feedback-tool"))),Object(o.mdx)("p",null,"This is the name of the bundle that Webpack builds for your application. They're normally lower case with dashes separating words. This is primarily used to link your bundle to the content page that is created as a base for your application. It doesn't show up in your code anywhere. It's also separate from the entry file."),Object(o.mdx)("h3",{id:"whats-the-root-url-for-this-app"},"What's the root URL for this app?"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Examples: ",Object(o.mdx)("inlineCode",{parentName:"p"},"/gi-bill-comparison-tool/")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"/education/opt-out-information-sharing/opt-out-form-0993"))),Object(o.mdx)("p",null,"This is the URL your application will live at, starting with a leading slash. In your React apps you will likely have multiple pages and the URLs for those pages will have this as the base. This value also gets translated into the page for the content page, which lives in ",Object(o.mdx)("inlineCode",{parentName:"p"},"content/pages"),"."),Object(o.mdx)("h3",{id:"is-this-a-form-app"},"Is this a form app?"),Object(o.mdx)("p",null,"If this is a form, there are some more questions after this step. If not, you're done!"),Object(o.mdx)("h3",{id:"whats-your-form-number"},"What's your form number?"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Examples: ",Object(o.mdx)("inlineCode",{parentName:"p"},"22-0993")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"21P-530"))),Object(o.mdx)("p",null,"This is the form number for the paper form you're converting. This is used in a couple places in the UI and also as a key for the save in progress functionality of our forms."),Object(o.mdx)("h3",{id:"whats-the-google-analytics-event-prefix-that-you-want-to-use"},"What's the Google Analytics event prefix that you want to use?"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Examples: ",Object(o.mdx)("inlineCode",{parentName:"p"},"burials-530-")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"edu-0993-"))),Object(o.mdx)("p",null,"Our shared form code sends events to Google Analytics and we need a unique prefix to be able to categorize the events by form. It's normally a dash separated value like ",Object(o.mdx)("inlineCode",{parentName:"p"},"hca-")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"edu-1990-")," and is made up by developers."),Object(o.mdx)("h3",{id:"whats-the-respondent-burden-of-this-form-in-minutes"},"What's the respondent burden of this form in minutes?"),Object(o.mdx)("p",null,"Each paper form has OMB information that lives in the margins of each page (usually in the top right):"),Object(o.mdx)("p",null,Object(o.mdx)("img",Object.assign({parentName:"p"},{src:"../../images/omb_form_info.png",alt:"Form page with OMB info"}))),Object(o.mdx)("p",null,"This is the respondent burden value from that information. All the information from this question and the next two can be found in the props for the ",Object(o.mdx)("inlineCode",{parentName:"p"},"OMBInfo")," component in ",Object(o.mdx)("inlineCode",{parentName:"p"},"containers/IntroductionPage.jsx"),", if you need to change it later."),Object(o.mdx)("h3",{id:"whats-the-omb-control-number-for-this-form"},"What's the OMB control number for this form?"),Object(o.mdx)("p",null,"Similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),Object(o.mdx)("h3",{id:"whats-the-omb-expiration-date-in-mdyyyy-format-for-this-form-example-1312019"},"What's the OMB expiration date (in M/D/YYYY format) for this form? Example: 1/31/2019"),Object(o.mdx)("p",null,"Again similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),Object(o.mdx)("h3",{id:"whats-the-benefit-description-for-this-form-examples-education-benefits-or-disability-claims-increase"},"What's the benefit description for this form? Examples: education benefits or disability claims increase"),Object(o.mdx)("p",null,"This question is a bit more nebulous. We have a description of the type of benefits that you would be getting by using this form. Other examples are ",Object(o.mdx)("inlineCode",{parentName:"p"},"health care benefits")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"veteran id card"),"."),Object(o.mdx)("h3",{id:"what-kind-of-form-template-would-you-like-to-start-with"},"What kind of form template would you like to start with?"),Object(o.mdx)("p",null,"Choose from the following options:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("strong",{parentName:"p"},"BLANK: A form without any fields"),"\nThis option gives you a bare bones form config object in ",Object(o.mdx)("inlineCode",{parentName:"p"},"form.js")," pre-filled with basic boilerplate data based on the answers to the generator's questions.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("strong",{parentName:"p"},"SIMPLE: A single-chapter form with a single field"),"\nThis option gives you a simple form config object in ",Object(o.mdx)("inlineCode",{parentName:"p"},"form.js")," that renders a simple form composed of a single input field on a single page chapter.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("strong",{parentName:"p"},"COMPLEX: A complex, multi-chapter form with multiple fields"),"\nThis option gives you a complex form config object in ",Object(o.mdx)("inlineCode",{parentName:"p"},"form.js"),' that renders a "playground" form composed of multiple chapters, including both single page and multi-page chapters, and a variety of form components to inspect and experiment with.'))),Object(o.mdx)("h2",{id:"youre-done"},"You're done!"),Object(o.mdx)("p",null,"Once you've answered all those questions, you're done and the generator will create the files for you. To see them in your local development environment, you'll need to build again or restart the watch task you have running."),Object(o.mdx)("p",null,"Once you've done that, you can access the URL at ",Object(o.mdx)("inlineCode",{parentName:"p"},"http://localhost:3001/APP_ROOT_URL"),". Replace ",Object(o.mdx)("inlineCode",{parentName:"p"},"APP_ROOT_URL")," with the root URL for your application."),Object(o.mdx)("p",null,"To learn more about using the generator and working with the generated code, see our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms"}),"forms documentation"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-tools-generator-mdx-84bc185ba8580cde40b4.js.map