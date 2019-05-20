(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{308:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return g}),n.d(a,"_frontmatter",function(){return d});n(42);var t=n(43),o=n.n(t),r=n(3),s=n.n(r),m=n(2),c=n.n(m),p=n(4),i=n(347),l={},g=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=i.a,n}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:a},c.a.createElement("h1",{id:"internal-tools"},"Internal Tools"),c.a.createElement(p.MDXTag,{name:"p",components:a},"These instructions cover the configuration of a SOCKS proxy necessary for access to:"),c.a.createElement(p.MDXTag,{name:"ul",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"Static ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")," content"),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"Remote build logs for pull requests and deployments (Jenkins)"),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"System metrics for diagnostic/troubleshooting purposes"),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"Exception reports and tracebacks")),c.a.createElement("h2",{id:"prerequisites-and-assumptions"},"Prerequisites and assumptions"),c.a.createElement(p.MDXTag,{name:"ul",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"These steps assume you're running on Linux or OSX."),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"That you have a Github account that's ",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account"}},"configured")," to use ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},".ssh")," authentication with one of your computer's public keys.")),c.a.createElement("h2",{id:"create-an-ssh-public-key"},"Create an SSH public key"),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"You can skip to")," ",c.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"p"},"Configure the SOCKS proxy")," ",c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"if you have a public ssh key you want to use. These instructions refer to the public key as ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"id_rsa_vagov.pub"))),c.a.createElement(p.MDXTag,{name:"ol",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Open a terminal and create an ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"~/.ssh")," directory")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"mkdir ~/.ssh\n")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"It's safe to ignore the error if this directory already exists")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:2}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Set the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"~/.ssh")," directory to read only.")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"chmod 700 ~/.ssh\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:3}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Change to the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"~/.ssh")," directory")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"cd ~/.ssh\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:4}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Generate the ssh keys. You will be prompted to enter a secure passphrase to protect your private key.")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh-keygen -f id_rsa_vagov\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:5}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Confirm that the keys were generated.")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ls ~/.ssh\n")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"The list of files should include ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"id_rsa_vagov")," and ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"id_rsa_vagov.pub"),". Only share keys with ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},".pub")," (public) extension; Private keys should never leave your computer.")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"Once the keys are verified, continue with")," ",c.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"p"},"Configure the SOCKS proxy")),c.a.createElement("h2",{id:"configure-the-socks-proxy"},"Configure the SOCKS proxy"),c.a.createElement(p.MDXTag,{name:"p",components:a},"Below are configuration instructions for internal or external developers."),c.a.createElement("h3",{id:"for-internal-developers"},"For internal developers"),c.a.createElement(p.MDXTag,{name:"ol",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Change to your working directory, clone and change to the devops repository")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"cd ~/YOUR-WORKING-DIRECTORY\ngit clone git@github.com:department-of-veterans-affairs/devops.git\ncd devops\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:2}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Checkout a branch using your lowercase first and last name")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"git checkout -b add-key-first-last\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:3}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Copy your public key into the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"authorized_keys")," folder renaming the file with your email address")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"cp ~/.ssh/id_rsa_vagov.pub ./ansible/roles/dsva-config/files/authorized_keys/YOUR@EMAIL.COM\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:4}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Edit the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"./ansible/global/config.yml")," in the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"devops")," repo by adding your email address to the list of emails under the appropriate group (",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"developers:"),", ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"devops:"),", etc.)")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"Please try to keep this list alphebetized.")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:5}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Commit and push your changes to the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"devops")," repo")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"git add .\ngit commit -m 'add ssh keys for first-name last-name'\ngit push origin add-key-first-last\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:6}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Create a PR for this branch on Github. In the #vetsgov-devops channel on the DSVA Slack, share a link to the PR and indicate that you need your ssh keys added to the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"devops")," repo.")),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Copy the SSH config from the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"devops")," repo to ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"~/.ssh")))),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"cp ./ssh/config ~/.ssh/config\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:8}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Add your SSH key to your local agent")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh-add -K ~/.ssh/id_rsa_vagov\n")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"If you're on OSX you can configure the ssh client to automatically add your keys with the by adding the following to the top of ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"~/.ssh/config"))),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"  Host *\n    AddKeysToAgent yes\n    UseKeychain yes\n    IdentityFile ~/.ssh/id_rsa_vagov\n")),c.a.createElement(p.MDXTag,{name:"ol",components:a,props:{start:9}},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Wait for ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"devops")," team to review, approve, and merge your pull request")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"Once your pull request is merged, an update job should automatically run to update the jumpboxes and SOCKS proxy endpoints. This job takes about 5 minutes to run. Wait five minutes, then continue with")," ",c.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"p"},"Starting the SOCKS proxy"),"."),c.a.createElement("h3",{id:"for-external-developers"},"For external developers"),c.a.createElement(p.MDXTag,{name:"ol",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"As part of onboarding, you should have provided your ",c.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"li"},"public SSH key")," to DSVA. If you haven't, do that now."),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"DSVA will add your public SSH key to the list of authorized keys."),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"When that process is completed (24 hours), you will receive a Github notification that your key has been added.")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"Once you receive the notification, continue with")," ",c.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"p"},"Starting the SOCKS proxy"),"."),c.a.createElement("h2",{id:"starting-the-socks-proxy"},"Starting the SOCKS proxy"),c.a.createElement(p.MDXTag,{name:"p",components:a},"There are slightly different commands to connect to the proxy depending on whether you are connected to the VA network or not. The ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"~/.ssh/config")," file on your local system contains configuration to access the SOCKS proxy both from the VA network and the internet."),c.a.createElement(p.MDXTag,{name:"ul",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"If you're on the VA network, run:")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh socks-va -D 2001 -N &\n")),c.a.createElement(p.MDXTag,{name:"ul",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},"If you're on the internet (outside the VA network), run:")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh socks -D 2001 -N &\n")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},'The first time you connect to the jumpbox, ssh will prompt to ask if you are sure you want to connect to a new host. You will be unable to respond "yes" if ssh is in the background, so either bring it to the foreground with ',c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"fg")," or omit the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"&")," character from the above command.")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"After running the command below, continue to")," ",c.a.createElement(p.MDXTag,{name:"strong",components:a,parentName:"p"},"Testing and Using thje SOCKS proxy")),c.a.createElement("h2",{id:"test-the-socks-proxy-conneciton-is-working"},"Test the SOCKS proxy conneciton is working"),c.a.createElement(p.MDXTag,{name:"ul",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"curl")," sentry, a tool available only on through the SOCKS proxy")),c.a.createElement(p.MDXTag,{name:"pre",components:a},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"$ curl -v --proxy socks5h://127.0.0.1:2001 sentry.vetsgov-internal\n")),c.a.createElement(p.MDXTag,{name:"p",components:a},c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"Verify that the output includes ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"HTTP/1.1 302 FOUND"),". If not, check that the\nSOCKS proxy server is running. You can ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"$ nc -z 127.0.0.1 2001")," as a first step.")),c.a.createElement("h2",{id:"install-browser-extensions"},"Install browser extensions"),c.a.createElement(p.MDXTag,{name:"p",components:a},"These instructions cover installing and configuring browser extensions used to connect to ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vetsgov-internal")," via the SOCKS proxy."),c.a.createElement("h3",{id:"chrome"},"Chrome"),c.a.createElement(p.MDXTag,{name:"ol",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Install Proxy SwitchyOmega"),c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"}},"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Configure the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy")," profile like this:"),c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/27aa4/switchy-omega-config-1.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.17857142857143%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"switchy omega config 1",title:"",src:"/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/17fa4/switchy-omega-config-1.png",srcSet:"/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/f4a45/switchy-omega-config-1.png 259w,\n/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/ef0f6/switchy-omega-config-1.png 518w,\n/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/17fa4/switchy-omega-config-1.png 1035w,\n/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/d6f0c/switchy-omega-config-1.png 1553w,\n/veteran-facing-services-tools/static/e1e2ff69a2f38f19a2af28739bf21ed0/27aa4/switchy-omega-config-1.png 1680w",sizes:"(max-width: 1035px) 100vw, 1035px"}))))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Configure the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"auto switch")," profile like this:"),c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/9a042/switchy-omega-config-2.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.058823529411764%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"switchy omega config 2",title:"",src:"/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/17fa4/switchy-omega-config-2.png",srcSet:"/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/f4a45/switchy-omega-config-2.png 259w,\n/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/ef0f6/switchy-omega-config-2.png 518w,\n/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/17fa4/switchy-omega-config-2.png 1035w,\n/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/d6f0c/switchy-omega-config-2.png 1553w,\n/veteran-facing-services-tools/static/60af0631adeab52415d26ccc49f73b3f/9a042/switchy-omega-config-2.png 2040w",sizes:"(max-width: 1035px) 100vw, 1035px"}))))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"In Chrome's menu bar, click on the proxy app and change the setting to 'auto switch':"),c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/4f7c9/switch-omega-auto-switch.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"440px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.72727272727272%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"switch omega auto switch",title:"",src:"/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/4f7c9/switch-omega-auto-switch.png",srcSet:"/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/f4a45/switch-omega-auto-switch.png 259w,\n/veteran-facing-services-tools/static/602026a7c01ed5959d9d965b285bd4d4/4f7c9/switch-omega-auto-switch.png 440w",sizes:"(max-width: 440px) 100vw, 440px"}))))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Be sure to hit the Apply Changes button to save your changes!"),c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/0c722/switchy-omega-config-3.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"322px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.037267080745345%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"switchy omega config 3",title:"",src:"/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/0c722/switchy-omega-config-3.png",srcSet:"/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/f4a45/switchy-omega-config-3.png 259w,\n/veteran-facing-services-tools/static/520b8f7aad273651ae173cf6a3332574/0c722/switchy-omega-config-3.png 322w",sizes:"(max-width: 322px) 100vw, 322px"}))))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"NOTE: You may have to uncheck a settings flag in Chrome, see"),c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy"}},"https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy"))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},c.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"Check your connection by navigating to Sentry at\n",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://sentry.vetsgov-internal"}},"http://sentry.vetsgov-internal"),"."))),c.a.createElement("h3",{id:"firefox"},"Firefox"),c.a.createElement(p.MDXTag,{name:"ol",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Install Proxy Switcher\n",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://addons.mozilla.org/en-US/firefox/addon/proxy-switcher/"}},"https://addons.mozilla.org/en-US/firefox/addon/proxy-switcher/")),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"create a file on your system with the following contents",c.a.createElement(p.MDXTag,{name:"pre",components:a,parentName:"li"},c.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"function FindProxyForURL(url, host) {\n         if( /.*.vetsgov-internal$/.test(host) ) {\n             return 'SOCKS5 localhost:2001';\n         }\n         return 'DIRECT';\n}\n"))),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Configure the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"automatic")," tab by setting the path to be the file created above"),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Press the reload button in the proxy switcher configuration dialog"),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"Check your connection by navigating to Sentry at\n",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://sentry.vetsgov-internal"}},"http://sentry.vetsgov-internal"),".")),c.a.createElement("h2",{id:"issues"},"Issues"),c.a.createElement(p.MDXTag,{name:"p",components:a},"If your key doesn't seem to be working, contact the Platform team in the ",c.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"#vetsgov-devops")," Slack channel."),c.a.createElement("h2",{id:"tools"},"Tools"),c.a.createElement("h3",{id:"jenkins"},"Jenkins"),c.a.createElement(p.MDXTag,{name:"p",components:a},"With the Socks proxy set up and running, go to ",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://jenkins.vetsgov-internal"}},"http://jenkins.vetsgov-internal"),". You can see the builds without logging in, but will need to authenticate (with GitHub) to re-run failed builds."),c.a.createElement("h3",{id:"sentry"},"Sentry"),c.a.createElement(p.MDXTag,{name:"p",components:a},"With the Socks proxy set up and running, go to ",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://sentry.vetsgov-internal"}},"http://sentry.vetsgov-internal"),". You will need to register for Sentry, but after creating any username/password, you will have access. We do not really use Sentry teams except to separate production, staging, and dev errors. To view the most recent production errors, which is the most common thing to do while on call, go to ",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://sentry.vetsgov-internal/vets-gov/platform-api-production/"}},"http://sentry.vetsgov-internal/vets-gov/platform-api-production/")),c.a.createElement("h3",{id:"grafana"},"Grafana"),c.a.createElement(p.MDXTag,{name:"p",components:a},"With the Socks proxy set up and running, go to ",c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://grafana.vetsgov-internal"}},"http://grafana.vetsgov-internal"),". You will need to register for Grafana, but after creating any username/password, you will have access."),c.a.createElement(p.MDXTag,{name:"p",components:a},"There are many dashboards and you should click around to get familiar with the variety of metrics being collected and visualized (make sure Data Source is set to Production). A few highlights are:"),c.a.createElement(p.MDXTag,{name:"ul",components:a},c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/site"}},"Site")," to see overall metrics about the health of the site"),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/external-service-status"}},"External Service Status")," to see the availability of the services vets.gov depends on."),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/rds"}},"RDS")," to see the database statistics."),c.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/revproxy"}},"Rev Proxy")," to see metrics on the reverse proxies.")))},a}(c.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,a,n){"use strict";var t=n(2),o=n.n(t),r=n(13),s=n.n(r),m=n(350),c=(n(133),n(134),n(135),n(17),n(346)),p=n(348);function i(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var a=e.item;return a.href?o.a.createElement("li",{key:a.name},o.a.createElement(p.a,{to:a.href},a.name)):o.a.createElement("li",{key:a.name},a.name," (future)")}function g(e){var a=e.items,n=e.isSublist,t=void 0!==n&&n;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(g,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=n(349),h=n.n(d);function u(e){var a=e.location,n=h.a.sections.find(function(e){return a.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(g,{items:n.items}))):null}function f(e){var a=e.children,n=e.location;return o.a.createElement(m.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}n.d(a,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-internal-tools-mdx-5bd24ab46d8e66302056.js.map