"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[798],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89008:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},c="Fivetran vs Airbyte",l={unversionedId:"archive/faq/differences-with/fivetran-vs-airbyte",id:"archive/faq/differences-with/fivetran-vs-airbyte",title:"Fivetran vs Airbyte",description:"We wrote an article, \u201cOpen-source vs. Commercial Software",source:"@site/../docs/archive/faq/differences-with/fivetran-vs-airbyte.md",sourceDirName:"archive/faq/differences-with",slug:"/archive/faq/differences-with/fivetran-vs-airbyte",permalink:"/airbyte/archive/faq/differences-with/fivetran-vs-airbyte",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/archive/faq/differences-with/fivetran-vs-airbyte.md",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Fivetran:</strong>",id:"fivetran",level:2},{value:"<strong>Airbyte:</strong>",id:"airbyte",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fivetran-vs-airbyte"},"Fivetran vs Airbyte"),(0,o.kt)("p",null,"We wrote an article, \u201c",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.io/articles/data-engineering-thoughts/open-source-vs-commercial-software-how-to-better-solve-data-integration/"},"Open-source vs. Commercial Software: How to Solve the Data Integration Problem"),",\u201d in which we describe the pros and cons of Fivetran\u2019s commercial approach and Airbyte\u2019s open-source approach. Don\u2019t hesitate to check it out for more detailed arguments. As a summary, here are the differences:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://airbyte.io/wp-content/uploads/2021/01/Airbyte-vs-Fivetran.png",alt:null})),(0,o.kt)("h2",{id:"fivetran"},(0,o.kt)("strong",{parentName:"h2"},"Fivetran:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limited high-quality connectors:")," after 8 years in business, Fivetran supports 150 connectors. The more connectors, the more difficult it is for Fivetran to keep the same level of maintenance across all connectors. They will always have a ROI consideration to maintaining long-tailed connectors. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pricing indexed on usage:")," Fivetran\u2019s pricing is indexed on the number of active rows ","(","rows added or edited",")"," per month. Teams always need to keep that in mind and are not free to move data without thinking about cost, as the costs can grow fast. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security and privacy compliance:")," all companies are subject to privacy compliance laws, such as GDPR, CCPA, HIPAA, etc. As a matter of fact, above a certain stage ","(","about 100 employees",")"," in a company, all external products need to go through a security compliance process that can take several months. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No moving data between internal databases:")," Fivetran sits in the cloud, so if you have to replicate data from an internal database to another, it makes no sense to have the data move through them ","(","Fivetran",")"," for privacy and cost reasons. ")),(0,o.kt)("h2",{id:"airbyte"},(0,o.kt)("strong",{parentName:"h2"},"Airbyte:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Free, as open source, so no more pricing based on usage"),": learn more about our ",(0,o.kt)("a",{parentName:"li",href:"https://handbook.airbyte.io/strategy/business-model"},"future business model")," ","(","connectors will always remain open source",")",". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Supporting 60 connectors within 8 months from inception"),".  Our goal is to reach 200+ connectors by the end of 2021. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Building new connectors made trivial, in the language of your choice:")," Airbyte makes it a lot easier to create your own connector, vs. building them yourself in-house ","(","with Airflow or other tools",")",". Scheduling, orchestration, and monitoring comes out of the box with Airbyte."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Addressing the long tail of connectors:")," with the help of the community, Airbyte ambitions to support thousands of connectors. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Adapt existing connectors to your needs:")," you can adapt any existing connector to address your own unique edge case."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using data integration in a workflow:")," Airbyte\u2019s API lets engineering teams add data integration jobs into their workflow seamlessly. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integrates with your data stack and your needs:")," Airflow, Kubernetes, dbt, etc. Its normalization is optional, it gives you a basic version that works out of the box, but also allows you to use dbt to do more complicated things."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Debugging autonomy:")," if you experience any connector issue, you won\u2019t need to wait for Fivetran\u2019s customer support team to get back to you, if you can fix the issue fast yourself. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No more security and privacy compliance, as self-hosted, source-available and open-sourced ","(","MIT",")"),". Any team can directly address their integration needs.")),(0,o.kt)("p",null,"Your data stays in your cloud. Have full control over your data, and the costs of your data transfers."))}m.isMDXComponent=!0}}]);