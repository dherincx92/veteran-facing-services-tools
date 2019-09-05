(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{379:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i}),t.d(n,"_frontmatter",function(){return c});t(10),t(9),t(5),t(19),t(8);var a=t(1),o=t.n(a),r=t(2),s=t(397);var m={},i=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:n},o.a.createElement("h1",{id:"vagov-application-generator"},"VA.gov application generator"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We have a Yeoman generator for starting up new React applications in vets-website. This page will guide you through setting up the generator and explaining the questions that are asked as part of the setup process."),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You can find more information about creating forms in the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms"}},"forms section"),".")),o.a.createElement("h2",{id:"getting-started"},"Getting Started"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To install the generator, you'll need to do the following:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm install -g yo\nnpm install -g @department-of-veterans-affairs/generator-vets-website\n")),o.a.createElement("h2",{id:"usage"},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you have the generator installed, navigate to the root of the vets-website repository and run:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yo @department-of-veterans-affairs/vets-website\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"After running the above command, the generator will start up and ask you a series of questions:"),o.a.createElement("h3",{id:"whats-the-name-of-your-application"},"What's the name of your application?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This will be the default page title. Examples: '21P-530 Burials benefits form' or 'GI Bill School Feedback Tool'")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This value will be used as the page title. If you're creating a form, it will also be used as the header for the introduction page and as a header on the confirmation page."),o.a.createElement("h3",{id:"what-folder-in-srcapplications-should-your-app-live-in"},"What folder in src/applications/ should your app live in?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This can be a subfolder. Examples: 'burials' or 'edu-benefits/0993'")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Most of our React applications have their own folder in src/applications, so normally you want to pick a new folder. However, if you're building an application that's related to other applications, there may be a folder that your app should go in. An example would be if you were creating a new education form, you would probably create your app in edu-benefits/newform."),o.a.createElement("h3",{id:"what-should-be-the-name-of-your-apps-entry-bundle"},"What should be the name of your app's entry bundle?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Examples: '0993-edu-benefits' or 'feedback-tool'")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is the name of the bundle that Webpack builds for your application. They're normally lower case with dashes separating words. This is primarily used to link your bundle to the content page that is created as a base for your application. It doesn't show up in your code anywhere. It's also separate from the entry file."),o.a.createElement("h3",{id:"whats-the-root-url-for-this-app"},"What's the root url for this app?"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Examples: '/gi-bill-comparison-tool/' or 'education/opt-out-information-sharing/opt-out-form-0993'")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is the url your application will live at. In your React apps you will likely have multiple pages and the urls for those pages will have this as the base. This value also gets translated into the page for the content page, which lives in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"content/pages"),"."),o.a.createElement("h3",{id:"is-this-a-form-app"},"Is this a form app?"),o.a.createElement(r.MDXTag,{name:"p",components:n},"If this is a form, there are some more questions after this step. If not, you're done!"),o.a.createElement("h3",{id:"whats-your-form-number-examples-22-0993-or-21p-530"},"What's your form number? Examples: '22-0993' or '21P-530'"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is the form number for the paper form you're converting. Normally it's something like 22-1990 or 21-22. This is used in a couple places in the UI and also as a key for the save in progress functionality of our forms."),o.a.createElement("h3",{id:"whats-the-google-analytics-event-prefix-that-you-want-to-use-examples-burials-530--or-edu-0993-"},"What's the Google Analytics event prefix that you want to use? Examples: 'burials-530-' or 'edu-0993-'"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Our shared form code sends events to Google Analytics and we need a unique prefix to be able to categorize the events by form. It's normally a dash separated value like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hca-")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"edu-1990-")," and is made up by developers."),o.a.createElement("h3",{id:"whats-the-respondent-burden-of-this-form-in-minutes"},"What's the respondent burden of this form in minutes?"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Each paper form has OMB information that lives in the margins of each page (usually in the top right):"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../../images/omb_form_info.png",alt:"Form page with OMB info"}})),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is the respondent burden value from that information. All the information from this question and the next two can be found in the props for the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"OMBInfo")," component in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"containers/IntroductionPage.jsx"),", if you need to change it later."),o.a.createElement("h3",{id:"whats-the-omb-control-number-for-this-form"},"What's the OMB control number for this form?"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),o.a.createElement("h3",{id:"whats-the-omb-expiration-date-in-mdyyyy-format-for-this-form-example-1312019"},"What's the OMB expiration date (in M/D/YYYY format) for this form? Example: '1/31/2019'"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Again similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),o.a.createElement("h3",{id:"whats-the-benefit-description-for-this-form-examples-education-benefits-or-disability-claims-increase"},"What's the benefit description for this form? Examples: 'education benefits' or 'disability claims increase'"),o.a.createElement(r.MDXTag,{name:"p",components:n},'This question is a bit more nebulous. We have a description of the type of benefits that you would be getting by using this form. Other examples are "health care benefits" and "veteran id card."'),o.a.createElement("h3",{id:"what-kind-of-form-template-would-you-like-to-start-with"},"What kind of form template would you like to start with?"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Choose from the following options:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"BLANK: A form without any fields"),"\nThis option gives you a bare bones form config object in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js")," pre-filled with basic boilerplate data based on the answers to the generator's questions.")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"SIMPLE: A single-chapter form with a single field"),"\nThis option gives you a simple form config object in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js")," that renders a simple form composed of a single input field on a single page chapter.")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"COMPLEX: A complex, multi-chapter form with multiple fields"),"\nThis option gives you a complex form config object in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js"),' that renders a "playground" form composed of multiple chapters, including both single page and multi-page chapters, and a variety of form components to inspect and experiment with.'))),o.a.createElement("h2",{id:"youre-done"},"You're done!"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you've answered all those questions, you're done and the generator will create the files for you. To see them in your local development environment, you'll need to build again or restart the watch task you have running."),o.a.createElement(r.MDXTag,{name:"p",components:n},"To learn more about using the generator and working with the generated code, see our ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms"}},"forms documentation"),"."))},a}(o.a.Component),c={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var a=t(1),o=t.n(a),r=t(400),s=(t(130),t(131),t(184),t(6),t(396)),m=t(398);function i(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function c(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(c,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(c,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(c,{item:e,key:e.name})})):null}var l=t(399),u=t.n(l);function h(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function d(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return d})}}]);
//# sourceMappingURL=component---src-pages-platform-tools-generator-mdx-236ec19b67957f1fad77.js.map