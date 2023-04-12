"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[244],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},b="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(i),d=a,c=b["".concat(l,".").concat(d)]||b[d]||g[d]||o;return i?n.createElement(c,r(r({ref:t},p),{},{components:i})):n.createElement(c,r({ref:t},p))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[b]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9135:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:2},r="Deploy a GitBuilding Website",s={unversionedId:"tutorial-basics-github/deploy-website-github",id:"tutorial-basics-github/deploy-website-github",title:"Deploy a GitBuilding Website",description:"Creating a new website repository on GitHub",source:"@site/docs/tutorial-basics-github/deploy-website-github.md",sourceDirName:"tutorial-basics-github",slug:"/tutorial-basics-github/deploy-website-github",permalink:"/gitbuilding-for-begineers/docs/tutorial-basics-github/deploy-website-github",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a GitBuilding Project",permalink:"/gitbuilding-for-begineers/docs/tutorial-basics-github/create-a-project-windows"},next:{title:"GitBuilding - Extras",permalink:"/gitbuilding-for-begineers/docs/category/gitbuilding---extras"}},l={},u=[{value:"Creating a new website repository on GitHub",id:"creating-a-new-website-repository-on-github",level:2},{value:"Implementing and deploying a GitBuilding website on GitHub",id:"implementing-and-deploying-a-gitbuilding-website-on-github",level:2},{value:"Customizing GitBuilding website",id:"customizing-gitbuilding-website",level:2}],p={toc:u},b="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(b,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-a-gitbuilding-website"},"Deploy a GitBuilding Website"),(0,a.kt)("h2",{id:"creating-a-new-website-repository-on-github"},"Creating a new website repository on GitHub"),(0,a.kt)("p",null,"Go to your GitHub account and create a new repository where you will store the documentation files for your GitBuilding website."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(8072).Z,width:"600",height:"655"})),(0,a.kt)("p",null,"Then, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," to configure the repository and it can be identified as repo of a website. Select ",(0,a.kt)("strong",{parentName:"p"},"Pages")," and let GitHub Pages know which branch will be deployed as the website, in this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(6594).Z,width:"838",height:"495"})),(0,a.kt)("p",null,"After saving this configuration, GitHub will automatically read the README file and deploy the website. You can open a browser and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://username.github.io/name-repository/"),". Sometimes the deployment can take a few minutes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(9750).Z,width:"838",height:"273"})),(0,a.kt)("h2",{id:"implementing-and-deploying-a-gitbuilding-website-on-github"},"Implementing and deploying a GitBuilding website on GitHub"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," to update GitHub permissions, select ",(0,a.kt)("strong",{parentName:"p"},"Actions")," > ",(0,a.kt)("strong",{parentName:"p"},"General")," and allow ",(0,a.kt)("strong",{parentName:"p"},"Read and write permissions"),". This step is important to deploy any GitBuilding website."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(4085).Z,width:"777",height:"627"})),(0,a.kt)("p",null,"Once you have updated the permissions, you can import all documentation files from your laptop/PC using ",(0,a.kt)("strong",{parentName:"p"},"Add file")," option or ",(0,a.kt)("strong",{parentName:"p"},"GitHub Desktop"),". Finally, modify ",(0,a.kt)("inlineCode",{parentName:"p"},"gitbuidling.yml")," file to let GitBuilding know which branch stores documentation files that will be published."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(2873).Z,width:"715",height:"629"})),(0,a.kt)("p",null,"Push the changes on YML file and GitHub Pages will deploy your new GitBuilding website."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(4132).Z,width:"900",height:"515"})),(0,a.kt)("p",null,"Refresh the browser and navigate again to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://username.github.io/name-repository/"),". This will show your documentation on the GitBuilding framework. You can keep working on it using GitHub platform and invite others to collaborate and improve the hardware documentation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(5004).Z,width:"898",height:"499"})),(0,a.kt)("h2",{id:"customizing-gitbuilding-website"},"Customizing GitBuilding website"),(0,a.kt)("p",null,"Update your documentation modifying Markdown files. Let\u2019s try adding a rocket emoji on the main page!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(5745).Z,width:"896",height:"462"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub pic",src:i(6013).Z,width:"897",height:"497"})),(0,a.kt)("p",null,"Resources for this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Repo: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/biodotpe/gitbuilding-template"},"https://github.com/biodotpe/gitbuilding-template")),(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://biodotpe.github.io/gitbuilding-template/"},"https://biodotpe.github.io/gitbuilding-template/"))))}g.isMDXComponent=!0},4085:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_10-4b4c75fefb77bf00df2a3a0b0c7bc0da.jpg"},2873:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_11-277fcbf3f22258111848cbc3a7b183fa.jpg"},4132:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_12-57542cf687edc0bd0d624114ce469738.jpg"},5004:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_13-d29bd1cc76b1081f7512b7e1133ee2f7.jpg"},5745:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_14-94ed778a93a2cc61dd3d64a1fdf196ef.jpg"},6013:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_15-4e19dd62ba99d794e97a26d8c4644d97.jpg"},8072:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_7-c801fd3d796f26efb9038ffdea6bf0d2.jpg"},6594:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_8-aacee61ccfabc5d6fffb5b71a559b713.jpg"},9750:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github_web_9-21ff52973e446c1fe930034f0a5c68ed.jpg"}}]);