(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{301:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),s=a.n(r),m=a(2),c=a.n(m),i=a(4),l=a(346),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},c.a.createElement("h2",{id:"gatsby-configurations"},"Gatsby Configurations"),c.a.createElement("h3",{id:"why-we-chose-gatsby"},"Why we chose Gatsby"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Gatsby was effectively chosen because it gave us the flexibility to create\ndocumentation for React Components and also regular documentation for developers.\nWe wanted to be able to generate documentation that lived inside of the code and\nalso generate information on propTypes. We also wanted the flexibility of creating\nmarkdown files for our normal documentation. Gatsby's plugin eco-system gave us a\nlot of flexibilities to customize it how we want it."),c.a.createElement("h3",{id:"what-is-gatsby"},"What is Gatsby"),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"Gatsby is a blazing fast modern site generator for React."')),c.a.createElement(i.MDXTag,{name:"p",components:n},"Gatsby utilizes React, Node, and GraphQL to generate a blazing fast static websites.\nYou can find more information at ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org"}},"https://www.gatsbyjs.org"),"."),c.a.createElement("h3",{id:"our-custom-configurations"},"Our Custom Configurations"),c.a.createElement(i.MDXTag,{name:"p",components:n},"There are a few things that we wanted that Gatsby did not have out of the box.\nWe wanted to be able to document all our React components and generate PropType\ndocumentation. We also wanted to be able to transfer over all our markdown documentatation\nfrom ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets.gov-team")," repo. Using Gatsby plugin eco-system. Below are the plugins\nand directions on how we inplemented them."),c.a.createElement("h3",{id:"plugins"},"Plugins"),c.a.createElement(i.MDXTag,{name:"p",components:n},"All the plugins we use can be found in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-configs.js"),"."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx/?=gatsby-mdx"}},"gatsby-mdx")),c.a.createElement(i.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"MDX is a new templating format which uses both JSX(React templating) and markdown.\nThis gaves us the best of both worlds. Being able to write markdown to generate\nquick documentation and use React components within that page."))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass"}},"gatsby-plugin-sass")),c.a.createElement(i.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Be able to use Sass/Scss in our project."))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}},"gatsby-transformer-react-docgen")),c.a.createElement(i.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Helps extracting information from React components, and generate documentation\nfrom it. This is created by Facebook. This is what is used for\n",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/styleguidist/react-styleguidist"}},"react-styleguidist"),"."))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-source-filesystem/"}},"gatsby-source-filesystem")),c.a.createElement(i.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem."))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-remark-images/"}},"https://www.gatsbyjs.org/packages/gatsby-remark-images/")),c.a.createElement(i.MDXTag,{name:"blockquote",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"We are using this to add images to our .mdx pages. This allows us to add\nimages to the folder and use it directly into our .mdx pages.")))),c.a.createElement(i.MDXTag,{name:"hr",components:n}),c.a.createElement("h3",{id:"how-we-setup-gatsby-mdx"},"How we setup gatsby-mdx"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Plugin: ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"}},"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"),"\nGuide: ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/guides"}},"https://gatsby-mdx.netlify.com/guides")),c.a.createElement("h4",{id:"installation"},"Installation"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"yarn add gatsby-mdx\n")),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Once this is setup, you will be able to use both markdown and jsx on the page.\nMore information can be found on ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),c.a.createElement("h4",{id:"adding-a-specific-layout-for-your-pages"},"Adding a Specific layout for your pages"),c.a.createElement(i.MDXTag,{name:"p",components:n},"To add a specific layout to be used for the default pages. You need to change\nthe plugin to an Object with options like so."),c.a.createElement(i.MDXTag,{name:"p",components:n},"Change this code:"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},"To this code:"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [\n    {\n      resolve: `gatsby-mdx`,\n      options: {\n        defaultLayouts: {\n          default: require.resolve("./src/layouts/SidebarLayout.jsx"),\n        }\n      }\n    },\n  ]\n};\n')),c.a.createElement("h4",{id:"adding-your-own-folders"},"Adding Your Own Folders"),c.a.createElement(i.MDXTag,{name:"p",components:n},"By default gatsby-mdx will only look in the src/pages folder.\nIn this project we needed a special folder for all our components.\nThis folder lives in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react/src/components"),".\nWe need to add some configurations to be able to do this."),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"gatsby-source-filesystem")," plugin:")),c.a.createElement(i.MDXTag,{name:"p",components:n},"This plugin can be added multiple times in the plugins object.\nThis plugin is used for sourcing data into your Gatsby application\nfrom your local filesystem. Here we add a name and path to the\nformation-react/src/components folder. This will now be added to our GraphQL\ndatabase so we can use it in our project."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\nplugins: [\n  {\n    resolve: `gatsby-source-filesystem`,\n    options: {\n      path: `../formation-react/src/components`,\n      name: 'components'\n    }\n  },\n]\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Creating Pages from GraphQL data:")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Now that we have this data in GraphQL, we need to tell Gatsby to make some\npages out of them. To do this we need to add some code to the gatsby-node.js\nfile. This is were you create pages or customize things before it get built."),c.a.createElement(i.MDXTag,{name:"p",components:n},"first we export createPages and then do a query to GraphQL. You can test it\nout at ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:8000/___graphql"}},"http://localhost:8000/___graphql"),". This is an interactive interface\nfor GraphQL. Here we are getting all the mdx pages and then we are checking if the\ndocument has a name property in the frontmatter. If it doesn't we won't create\na page for it."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nexports.createPages = ({ graphql, actions }) => {\n  const { createPage } = actions;\n  return new Promise((resolve, reject) => {\n    resolve(\n      graphql(\n        `\n          {\n            allMdx {\n              edges {\n                node {\n                  id\n                  frontmatter {\n                    title\n                    name\n                  }\n                  parent {\n                    ... on File {\n                      name\n                      sourceInstanceName\n                    }\n                  }\n                  code {\n                    scope\n                  }\n                }\n              }\n            }\n          }\n        `\n      ).then(result => {\n        if (result.errors) {\n          console.log(result.errors)\n          reject(result.errors)\n        }\n\n        result.data.allMdx.edges.forEach(async ({ node }) => {\n          if (node.frontmatter.name) { <--- checking for frontmatter name property\n            createPage({\n              path: `/${node.parent.name.toLowerCase()}/`,\n              component: path.resolve('./src/layouts/module-components.js'),\n              context: {\n                id: node.id,\n                name: node.frontmatter.name,\n              },\n            })\n          }\n        })\n      })\n    )\n  })\n}\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Sample of Query Results from Above Query:")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Here is a sample of what the output would be for the Query above. You'll notice\nthat we get more then just the MDX files in the project. Not sure why this is\nbut that is what we get back when doing the Query."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'{\n  "data": {\n    "allMdx": {\n      "edges": [\n        {\n          "node": {\n            "id": "db665b4f-22a1-5485-8ef9-4f66f0da7e1b",\n            "frontmatter": {\n              "title": "AcceptTermsPrompt",\n              "name": "AcceptTermsPrompt"\n            },\n            "parent": {\n              "name": "AcceptTermsPrompt",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "fdaeaef8-da4f-53d8-a981-0ef2e4a9acf0",\n            "frontmatter": {\n              "title": "AdditionalInfo",\n              "name": "AdditionalInfo"\n            },\n            "parent": {\n              "name": "AdditionalInfo",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "17c10940-f231-560f-a391-e3a3173f1ed2",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "3121c909-74b5-5ccc-9884-bd72709d7885",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "6d019eeb-8db4-56ce-8bd7-bf14e618d096",\n            "frontmatter": {\n              "title": "How to Add Documents and Components",\n              "name": null\n            },\n            "parent": {\n              "name": "how-to",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "2503f180-5b43-5470-9665-cff9f512d7cd",\n            "frontmatter": {\n              "title": "This is the index",\n              "name": null\n            },\n            "parent": {\n              "name": "index",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "51b7ecd7-76e7-5ceb-ac57-d2a9c92494de",\n            "frontmatter": {\n              "title": "Internal Tools",\n              "name": null\n            },\n            "parent": {\n              "name": "internal-tools",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "b683ccc8-0ddd-5b23-8b5c-0cc8e2889aa9",\n            "frontmatter": {\n              "title": "Notes on Writing MDX with Gatsby",\n              "name": null\n            },\n            "parent": {\n              "name": "new-component",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),c.a.createElement(i.MDXTag,{name:"p",components:n},"You will need to create a path for the pages. This is done with the path property"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`, <------- Create path here\n  component: path.resolve('./src/layouts/module-components.js'),\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Set your component page layout"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  component: path.resolve('./src/layouts/module-components.js'), <------- default layout\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},"In our createPage you will see a context property. This will be available on\nyour page for quering with GraphQL."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  context: {\n    id: node.id, <--- available on your page for GraphQL queries\n    name: node.frontmatter.name, <--- available on your page for GraphQL queries\n  },\n})\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Now that we have that setup we need to add the layout for our components pages.\nIf you go to ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/layouts/module-components.js")," you can seee how we setu our pages\nto be able to render MDX. Here is a sample of the JSX."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  <MDXProvider components={{ code: MyCodeComponent }}>\n    <Layout>\n      <div className=\"content\">\n        {children}\n        <h2>{data.componentMetadata.displayName}</h2>\n        <p>{data.componentMetadata.docblock}</p>\n        <MDXRenderer tableOfContents={tableOfContents}>\n          {data.mdx.code.body}\n        </MDXRenderer>\n        <h2 style={{ marginTop: '2rem' }}>Props:</h2>\n        <PropsTable\n          propMetaData={data.componentMetadata.childrenComponentProp}/>\n      </div>\n    </Layout>\n  </MDXProvider>\n")),c.a.createElement("h3",{id:"how-do-we-automatically-generate-our-proptypes"},"How do we automatically generate our propTypes"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Since one of the big requirements for our component documents is PropType\ndefinitions, we had to make sure we can populate the propTypes dynamically.\nTo do this we are going to a module called\n",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/reactjs/react-docgen"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"react-docgen")),". This was created by\nFacebook to handle documentation. What it does is parse component files and\ngenerates data from your components into a json file. We will be using the\n",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"gatsby-transformer-react-docgen")),"\nplugin to do this for us in gatsby. This will add the data into GraphQL so we\ncan query it in our pages."),c.a.createElement(i.MDXTag,{name:"p",components:n},"This is what the query looks like in our layout page. The ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"childrenComponentProp"),"\nis were we get our propType definitions."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"export const pageQuery = graphql`\n  query($id: String!, $name: String!) {\n    mdx(id: { eq: $id }) {\n      id\n      code {\n        body\n      }\n      tableOfContents\n    }\n    componentMetadata(displayName: { eq: $name }) {\n      id\n      displayName\n      docblock\n      doclets\n      childrenComponentProp {\n        name\n        docblock\n        required\n        parentType {\n          name\n        }\n        type {\n          value\n        }\n        defaultValue {\n          value\n          computed\n        }\n      }\n      composes\n    }\n  }\n`;\n")),c.a.createElement("h3",{id:"adding-live-code"},"Adding Live Code"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Here is an example of how you add live editable code onto your page.\nNote: This has not been fully implemented on our pages yet. This is something\nwe need to explore further if we really wants to have this feature."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'import React, {Component} from "react";\nimport { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";\nimport { MDXProvider } from \'@mdx-js/tag\'\n\nconst MyCodeComponent = ({ children, ...props }) => (\n  <LiveProvider code={children}>\n    <LiveEditor />\n    <LiveError />\n    <LivePreview />\n  </LiveProvider>\n);\n\nexport default class MyPageLayout extends Component {\n  render() {\n    return <MDXProvider components={{code: MyCodeComponent}}>\n      <div>{this.props.children}</div>\n    </MDXProvider>\n  }\n}\n')),c.a.createElement("h3",{id:"image-plugin-for-mdx-files"},"Image plugin for MDX files"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We are using a plugin to be able to use images in .mdx pages. This allows us\nto access the images with relative paths."),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images"}},"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images")))},n}(c.a.Component),u={}},339:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),r=a(13),s=a.n(r),m=a(68),c=a.n(m);a.d(n,"a",function(){return c.a});a(341);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},340:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},341:function(e,n,a){var t;e.exports=(t=a(343))&&t.default||t},342:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},343:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),r=a(2),s=a.n(r),m=a(13),c=a.n(m),i=a(94),l=a(9),p=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?s.a.createElement(i.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},344:function(e,n,a){"use strict";var t=a(3),o=a.n(t),r=a(342),s=a(2),m=a.n(s),c=a(13),i=a.n(c),l=a(347),p=a.n(l),d=a(339),u=(a(17),a(133),a(134),a(340)),g=a.n(u),h=a(18),f=a.n(h),b=a(348),y=a.n(b),v=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=g.a.sections.reduce(function(e,n){var a;return f()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return m.a.createElement("div",{className:y()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(n){return m.a.createElement("div",{key:n.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),m.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:y()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(m.a.Component),E=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(v,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(m.a.Component),w=(a(349),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(E,{location:a}),n)},data:r})},n}(m.a.Component));w.propTypes={children:i.a.node.isRequired};n.a=w},345:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},346:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),s=a.n(r),m=a(344),c=(a(133),a(134),a(135),a(17),a(345)),i=a(339);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(i.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(340),u=a.n(d);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-gatsby-configurations-mdx-a3f31fee16f6b246070c.js.map