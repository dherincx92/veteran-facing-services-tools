(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{324:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u}),a.d(n,"_frontmatter",function(){return d});a(43);var t=a(44),o=a.n(t),r=a(3),s=a.n(r),c=a(2),m=a.n(c),i=a(4),l=a(363),p={},u=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return m.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},m.a.createElement("h1",{id:"accessibility-standards"},"Accessibility standards"),m.a.createElement("h2",{id:"three-rules-for-link-and-button-success-sup-idheading33sup"},"Three rules for link and button success ",m.a.createElement("sup",{id:"heading3"},"3")),m.a.createElement(i.MDXTag,{name:"ol",components:n},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Links go to to another page OR jump to an anchor ID in the current page",m.a.createElement(i.MDXTag,{name:"ol",components:n,parentName:"li"},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"SUCCESS CRITERIA:"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Respond to ENTER keypress"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"The browser URL changes"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"HTML5 history object changes. (Not applicable if using React Router.)"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Avoid hash route URLs if possible. These interfere with in-page anchor links, and were common with early SPA libraries like Backbone. (Not applicable if using React Router.)"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Append anchor links to URL when a link points to an in-page anchor ID (skip nav, tabs)"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Do not add role=“button” to links. Screen readers announce the link as “button”, and changes user"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Recommended to underline links when in paragraphs or blocks of text"))),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Buttons perform a UI action",m.a.createElement(i.MDXTag,{name:"ol",components:n,parentName:"li"},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"SUCCESS CRITERIA:"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Respond to ENTER, SPACEBAR keypresses"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Perform UI actions that do not change the URL or load a new page"))),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Call to action links can look like buttons as long as:",m.a.createElement(i.MDXTag,{name:"ol",components:n,parentName:"li"},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"SUCCESS CRITERIA:"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Load another page URL (see rule #1 success criteria)"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Announce themselves as “links” to screen readers and assistive devices")))),m.a.createElement("h2",{id:"common-link-and-button-scenarios-sup-idheading44sup"},"Common link and button scenarios ",m.a.createElement("sup",{id:"heading4"},"4")),m.a.createElement(i.MDXTag,{name:"ul",components:n},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Imagine copy/pasting a URL into a new browser window, sight unseen. Good scenarios for a LINK:",m.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You expect the page to load scrolled down somewhere"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You have a call to action that navigates to another page"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You are loading a second or third tab, pre-selected"))),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Imagine you are presenting users with an action that does not load a new page. Good scenarios for a BUTTON:",m.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You have a conditional message that the user should trigger or dismiss"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You are adding or removing something like a receipt, prescription, appeal"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Show/hide accordions"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Submit a form asynchronously"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Submit an asynchronous request, then redirect users based on the server response. This is a middle ground, but feels like a good case for using a button, considering the original function was asynchronous and might keep users on the same page depending on the response."),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Open and close a modal dialog"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Alert boxes or confirmations"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Do not underline button text. Better to have a halo, background color, or border with plenty of hit space."),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Underline link text"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Calls to action links can omit the underline, but would be well served with a design that distinguishes them from buttons. Use these sparingly, maybe one per page.")))))},n}(m.a.Component),d={}},362:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}}]}}}},363:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(14),s=a.n(r),c=a(366),m=(a(141),a(142),a(143),a(21),a(362)),i=a(364);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var d=a(365),g=a.n(d);function h(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-accessibility-mdx-717d1ad14aec6daba13f.js.map