"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3207],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="MeiliSearch",c={unversionedId:"integrations/destinations/meilisearch",id:"integrations/destinations/meilisearch",title:"MeiliSearch",description:"Overview",source:"@site/../docs/integrations/destinations/meilisearch.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/meilisearch",permalink:"/airbyte/integrations/destinations/meilisearch",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/destinations/meilisearch.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Mariadb Columnstore",permalink:"/airbyte/integrations/destinations/mariadb-columnstore"},next:{title:"MongoDB",permalink:"/airbyte/integrations/destinations/mongodb"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meilisearch"},"MeiliSearch"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Airbyte MeilSearch destination allows you to sync data to MeiliSearch. MeiliSearch is a search engine that makes it easy for a non-developer to search through data. It does not require any SQL."),(0,i.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each stream will be output into its own index in MeiliSearch. Each table will be named after the stream with all non-alpha numeric characters removed. Each table will contain one column per top-levelfield in a stream. In addition, it will contain a table called ",(0,i.kt)("inlineCode",{parentName:"p"},"_ab_pk"),". This column is used internally by Airbyte to prevent records from getting overwritten and can be ignored."),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the MeiliSearch destination, you'll need an existing MeiliSearch instance. You can learn about how to create one in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/installation.html#download-and-launch"},"MeiliSearch docs"),"."),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"The setup only requires two fields. First is the ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," which is the address at which MeiliSearch can be reached. If running on a localhost by default it will be on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:7700"),". Note that you must include the protocol. The second piece of information is the API key. If no API key is set for your MeiliSearch instance, then this field can be left blank. If it is set, you can find the value for your API by following these ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/authentication.html#master-key"},"instructions"),". in the MeiliSearch docs."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9156"},"9156")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")))))}m.isMDXComponent=!0}}]);