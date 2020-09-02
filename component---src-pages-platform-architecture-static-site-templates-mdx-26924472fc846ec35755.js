(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function l(){return r.a.createElement(i.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(m,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,null)):r.a.createElement(m,{item:e,key:e.name})}))):null}var o=a("MEl4"),d=a.n(o);function s(e){var t=e.location,a=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(c,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function b(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(u.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(s,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},"8zTB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),l={},m={_frontmatter:l},c=i.a;function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"how-templates-work-for-markdown-pages"},"How templates work for Markdown pages"),Object(r.mdx)("p",null,"Templates use ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/leizongmin/tinyliquid/"}),"tinyliquid"),", a JavaScript implementation of ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://shopify.github.io/liquid/"}),"Liquid"),"."),Object(r.mdx)("p",null,'There are three "wrapper" templates currently in use for Markdown content. They\'re all in ',Object(r.mdx)("inlineCode",{parentName:"p"},"src/site/layouts"),"."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-react"),": Houses our React pages."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-react-sidebar"),": Houses our React pages that have a sidebar."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-breadcrumbs"),": Houses our non-React content pages."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"page-playbook"),": Houses Playbook pages."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"home"),": Template for the home page"),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"home"),": Template for the home page without search")),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"page-breadcrumbs")," is a container template that loads layouts for the content between the header and the footer. Those are in ",Object(r.mdx)("inlineCode",{parentName:"p"},"content/layouts/includes/"),"."),Object(r.mdx)("p",null,"Templates are loaded based on the value of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"template")," property in the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://yaml.org/"}),"YAML"),"/front-page data of each content file -- the text between the ",Object(r.mdx)("inlineCode",{parentName:"p"},"---"),". Content files can be found in ",Object(r.mdx)("inlineCode",{parentName:"p"},"content/pages/"),"."),Object(r.mdx)("h2",{id:"adding-a-new-template"},"Adding a new template"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Add a new HTML + Liquid template file to ",Object(r.mdx)("inlineCode",{parentName:"li"},"src/site/includes")),Object(r.mdx)("li",{parentName:"ul"},"Update ",Object(r.mdx)("inlineCode",{parentName:"li"},"page-breadcrumbs")," with a new case for the new layout."),Object(r.mdx)("li",{parentName:"ul"},"Update the ",Object(r.mdx)("inlineCode",{parentName:"li"},"template")," YAML property for whichever pages should load the new template.")),Object(r.mdx)("h2",{id:"content-meta-data"},"Content meta data"),Object(r.mdx)("p",null,"To date, we've used ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://yaml.org/"}),"YAML")," syntax in Markdown files as a way to structure data such as related links (majorlinks) and navigation cards."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-templates-mdx-26924472fc846ec35755.js.map