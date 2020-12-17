(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t("q1tI"),o=t.n(a),s=t("Wbzz");function r(){return o.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return o.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(s.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function c(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(r,null)):o.a.createElement(i,{item:e,key:e.name})}))):null}var d=t("MEl4"),m=t.n(d);function l(e){var n=e.location,t=m.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(c,{items:t.items}))):null}function p(e){var n=e.sourceUrl;return n?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:n},"Edit this page on GitHub")):null}var u=t("8FPV");function b(e){var n=e.children,t=e.location,a=e.pageContext;return o.a.createElement(u.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(l,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,o.a.createElement(p,{sourceUrl:a.sourceUrl}))))}},ZTFj:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return d}));var a=t("zLVn"),o=(t("q1tI"),t("7ljp")),s=t("3dLD"),r={},i={_frontmatter:r},c=s.a;function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)(c,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h2",{id:"gatsby-configurations"},"Gatsby Configurations"),Object(o.mdx)("h3",{id:"why-we-chose-gatsby"},"Why we chose Gatsby"),Object(o.mdx)("p",null,"Gatsby was effectively chosen because it gave us the flexibility to create\ndocumentation for React Components and also regular documentation for developers.\nWe wanted to be able to generate documentation that lived inside of the code and\nalso generate information on propTypes. We also wanted the flexibility of creating\nmarkdown files for our normal documentation. Gatsby's plugin eco-system gave us a\nlot of flexibilities to customize it how we want it."),Object(o.mdx)("h3",{id:"what-is-gatsby"},"What is Gatsby"),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},'"Gatsby is a blazing fast modern site generator for React."')),Object(o.mdx)("p",null,"Gatsby utilizes React, Node, and GraphQL to generate a blazing fast static websites.\nYou can find more information at ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org"}),"https://www.gatsbyjs.org"),"."),Object(o.mdx)("h3",{id:"our-custom-configurations"},"Our Custom Configurations"),Object(o.mdx)("p",null,"There are a few things that we wanted that Gatsby did not have out of the box.\nWe wanted to be able to document all our React components and generate PropType\ndocumentation. We also wanted to be able to transfer over all our markdown documentatation\nfrom ",Object(o.mdx)("inlineCode",{parentName:"p"},"vets.gov-team")," repo. Using Gatsby plugin eco-system. Below are the plugins\nand directions on how we inplemented them."),Object(o.mdx)("h3",{id:"plugins"},"Plugins"),Object(o.mdx)("p",null,"All the plugins we use can be found in ",Object(o.mdx)("inlineCode",{parentName:"p"},"gatsby-configs.js"),"."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx/?=gatsby-mdx"}),"gatsby-mdx")),Object(o.mdx)("blockquote",{parentName:"li"},Object(o.mdx)("p",{parentName:"blockquote"},"MDX is a new templating format which uses both JSX(React templating) and markdown.\nThis gaves us the best of both worlds. Being able to write markdown to generate\nquick documentation and use React components within that page."))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass"}),"gatsby-plugin-sass")),Object(o.mdx)("blockquote",{parentName:"li"},Object(o.mdx)("p",{parentName:"blockquote"},"Be able to use Sass/Scss in our project."))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}),"gatsby-transformer-react-docgen")),Object(o.mdx)("blockquote",{parentName:"li"},Object(o.mdx)("p",{parentName:"blockquote"},"Helps extracting information from React components, and generate documentation\nfrom it. This is created by Facebook. This is what is used for\n",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/styleguidist/react-styleguidist"}),"react-styleguidist"),"."))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-source-filesystem/"}),"gatsby-source-filesystem")),Object(o.mdx)("blockquote",{parentName:"li"},Object(o.mdx)("p",{parentName:"blockquote"},"A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem."))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-remark-images/"}),"https://www.gatsbyjs.org/packages/gatsby-remark-images/")),Object(o.mdx)("blockquote",{parentName:"li"},Object(o.mdx)("p",{parentName:"blockquote"},"We are using this to add images to our .mdx pages. This allows us to add\nimages to the folder and use it directly into our .mdx pages.")))),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"how-we-setup-gatsby-mdx"},"How we setup gatsby-mdx"),Object(o.mdx)("p",null,"Plugin: ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"}),"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"),"\nGuide: ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://gatsby-mdx.netlify.com/guides"}),"https://gatsby-mdx.netlify.com/guides")),Object(o.mdx)("h4",{id:"installation"},"Installation"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add gatsby-mdx\n")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),Object(o.mdx)("p",null,"Once this is setup, you will be able to use both markdown and jsx on the page.\nMore information can be found on ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://mdxjs.com/"}),"https://mdxjs.com/")),Object(o.mdx)("h4",{id:"adding-a-specific-layout-for-your-pages"},"Adding a Specific layout for your pages"),Object(o.mdx)("p",null,"To add a specific layout to be used for the default pages. You need to change\nthe plugin to an Object with options like so."),Object(o.mdx)("p",null,"Change this code:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),Object(o.mdx)("p",null,"To this code:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),'// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [\n    {\n      resolve: `gatsby-mdx`,\n      options: {\n        defaultLayouts: {\n          default: require.resolve("./src/layouts/SidebarLayout.jsx"),\n        }\n      }\n    },\n  ]\n};\n')),Object(o.mdx)("h4",{id:"adding-your-own-folders"},"Adding Your Own Folders"),Object(o.mdx)("p",null,"By default gatsby-mdx will only look in the src/pages folder.\nIn this project we needed a special folder for all our components.\nThis folder lives in ",Object(o.mdx)("inlineCode",{parentName:"p"},"formation-react/src/components"),".\nWe need to add some configurations to be able to do this."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Add the ",Object(o.mdx)("inlineCode",{parentName:"strong"},"gatsby-source-filesystem")," plugin:")),Object(o.mdx)("p",null,"This plugin can be added multiple times in the plugins object.\nThis plugin is used for sourcing data into your Gatsby application\nfrom your local filesystem. Here we add a name and path to the\nformation-react/src/components folder. This will now be added to our GraphQL\ndatabase so we can use it in our project."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-configs.js\n\nplugins: [\n  {\n    resolve: `gatsby-source-filesystem`,\n    options: {\n      path: `../formation-react/src/components`,\n      name: 'components'\n    }\n  },\n]\n")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Creating Pages from GraphQL data:")),Object(o.mdx)("p",null,"Now that we have this data in GraphQL, we need to tell Gatsby to make some\npages out of them. To do this we need to add some code to the gatsby-node.js\nfile. This is were you create pages or customize things before it get built."),Object(o.mdx)("p",null,"first we export createPages and then do a query to GraphQL. You can test it\nout at http://localhost:8000/___graphql. This is an interactive interface\nfor GraphQL. Here we are getting all the mdx pages and then we are checking if the\ndocument has a name property in the frontmatter. If it doesn't we won't create\na page for it."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// gatsby-node.js\n\nexports.createPages = ({ graphql, actions }) => {\n  const { createPage } = actions;\n  return new Promise((resolve, reject) => {\n    resolve(\n      graphql(\n        `\n          {\n            allMdx {\n              edges {\n                node {\n                  id\n                  frontmatter {\n                    title\n                    name\n                  }\n                  parent {\n                    ... on File {\n                      name\n                      sourceInstanceName\n                    }\n                  }\n                  code {\n                    scope\n                  }\n                }\n              }\n            }\n          }\n        `\n      ).then(result => {\n        if (result.errors) {\n          console.log(result.errors)\n          reject(result.errors)\n        }\n\n        result.data.allMdx.edges.forEach(async ({ node }) => {\n          if (node.frontmatter.name) { <--- checking for frontmatter name property\n            createPage({\n              path: `/${node.parent.name.toLowerCase()}/`,\n              component: path.resolve('./src/layouts/module-components.js'),\n              context: {\n                id: node.id,\n                name: node.frontmatter.name,\n              },\n            })\n          }\n        })\n      })\n    )\n  })\n}\n")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Sample of Query Results from Above Query:")),Object(o.mdx)("p",null,"Here is a sample of what the output would be for the Query above. You'll notice\nthat we get more then just the MDX files in the project. Not sure why this is\nbut that is what we get back when doing the Query."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),'{\n  "data": {\n    "allMdx": {\n      "edges": [\n        {\n          "node": {\n            "id": "db665b4f-22a1-5485-8ef9-4f66f0da7e1b",\n            "frontmatter": {\n              "title": "AcceptTermsPrompt",\n              "name": "AcceptTermsPrompt"\n            },\n            "parent": {\n              "name": "AcceptTermsPrompt",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "fdaeaef8-da4f-53d8-a981-0ef2e4a9acf0",\n            "frontmatter": {\n              "title": "AdditionalInfo",\n              "name": "AdditionalInfo"\n            },\n            "parent": {\n              "name": "AdditionalInfo",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "17c10940-f231-560f-a391-e3a3173f1ed2",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "3121c909-74b5-5ccc-9884-bd72709d7885",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "6d019eeb-8db4-56ce-8bd7-bf14e618d096",\n            "frontmatter": {\n              "title": "How to Add Documents and Components",\n              "name": null\n            },\n            "parent": {\n              "name": "how-to",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "2503f180-5b43-5470-9665-cff9f512d7cd",\n            "frontmatter": {\n              "title": "This is the index",\n              "name": null\n            },\n            "parent": {\n              "name": "index",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "51b7ecd7-76e7-5ceb-ac57-d2a9c92494de",\n            "frontmatter": {\n              "title": "Internal Tools",\n              "name": null\n            },\n            "parent": {\n              "name": "internal-tools",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "b683ccc8-0ddd-5b23-8b5c-0cc8e2889aa9",\n            "frontmatter": {\n              "title": "Notes on Writing MDX with Gatsby",\n              "name": null\n            },\n            "parent": {\n              "name": "new-component",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(o.mdx)("p",null,"You will need to create a path for the pages. This is done with the path property"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`, <------- Create path here\n  component: path.resolve('./src/layouts/module-components.js'),\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),Object(o.mdx)("p",null,"Set your component page layout"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  component: path.resolve('./src/layouts/module-components.js'), <------- default layout\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),Object(o.mdx)("p",null,"In our createPage you will see a context property. This will be available on\nyour page for quering with GraphQL."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  context: {\n    id: node.id, <--- available on your page for GraphQL queries\n    name: node.frontmatter.name, <--- available on your page for GraphQL queries\n  },\n})\n")),Object(o.mdx)("p",null,"Now that we have that setup we need to add the layout for our components pages.\nIf you go to ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/layouts/module-components.js")," you can see how we setup our pages\nto be able to render MDX. Here is a sample of the JSX."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),"  <MDXProvider components={{ code: MyCodeComponent }}>\n    <Layout>\n      <div className=\"content\">\n        {children}\n        <h2>{data.componentMetadata.displayName}</h2>\n        <p>{data.componentMetadata.docblock}</p>\n        <MDXRenderer tableOfContents={tableOfContents}>\n          {data.mdx.code.body}\n        </MDXRenderer>\n        <h2 style={{ marginTop: '2rem' }}>Props:</h2>\n        <PropsTable\n          propMetaData={data.componentMetadata.childrenComponentProp}/>\n      </div>\n    </Layout>\n  </MDXProvider>\n")),Object(o.mdx)("h3",{id:"how-do-we-automatically-generate-our-proptypes"},"How do we automatically generate our propTypes"),Object(o.mdx)("p",null,"Since one of the big requirements for our component documents is PropType\ndefinitions, we had to make sure we can populate the propTypes dynamically.\nTo do this we are going to a module called\n",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/reactjs/react-docgen"}),Object(o.mdx)("inlineCode",{parentName:"a"},"react-docgen")),". This was created by\nFacebook to handle documentation. What it does is parse component files and\ngenerates data from your components into a json file. We will be using the\n",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}),Object(o.mdx)("inlineCode",{parentName:"a"},"gatsby-transformer-react-docgen")),"\nplugin to do this for us in gatsby. This will add the data into GraphQL so we\ncan query it in our pages."),Object(o.mdx)("p",null,"This is what the query looks like in our layout page. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"childrenComponentProp"),"\nis were we get our propType definitions."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"export const pageQuery = graphql`\n  query($id: String!, $name: String!) {\n    mdx(id: { eq: $id }) {\n      id\n      code {\n        body\n      }\n      tableOfContents\n    }\n    componentMetadata(displayName: { eq: $name }) {\n      id\n      displayName\n      docblock\n      doclets\n      childrenComponentProp {\n        name\n        docblock\n        required\n        parentType {\n          name\n        }\n        type {\n          value\n        }\n        defaultValue {\n          value\n          computed\n        }\n      }\n      composes\n    }\n  }\n`;\n")),Object(o.mdx)("h3",{id:"adding-live-code"},"Adding Live Code"),Object(o.mdx)("p",null,"Here is an example of how you add live editable code onto your page.\nNote: This has not been fully implemented on our pages yet. This is something\nwe need to explore further if we really want to have this feature."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{}),'import React, {Component} from "react";\nimport { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";\nimport { MDXProvider } from \'@mdx-js/tag\'\n\nconst MyCodeComponent = ({ children, ...props }) => (\n  <LiveProvider code={children}>\n    <LiveEditor />\n    <LiveError />\n    <LivePreview />\n  </LiveProvider>\n);\n\nexport default class MyPageLayout extends Component {\n  render() {\n    return <MDXProvider components={{code: MyCodeComponent}}>\n      <div>{this.props.children}</div>\n    </MDXProvider>\n  }\n}\n')),Object(o.mdx)("h3",{id:"image-plugin-for-mdx-files"},"Image plugin for MDX files"),Object(o.mdx)("p",null,"We are using a plugin to be able to use images in .mdx pages. This allows us\nto access the images with relative paths."),Object(o.mdx)("p",null,Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images"}),"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gatsby-configurations-mdx-578a885580dc236a6693.js.map