"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7353],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="Cassandra",d={unversionedId:"integrations/destinations/cassandra",id:"integrations/destinations/cassandra",title:"Cassandra",description:"Sync overview",source:"@site/../docs/integrations/destinations/cassandra.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/cassandra",permalink:"/airbyte/integrations/destinations/cassandra",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/destinations/cassandra.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Snowflake",permalink:"/airbyte/integrations/destinations/snowflake"},next:{title:"Scylla",permalink:"/airbyte/integrations/destinations/scylla"}},c={},u=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cassandra"},"Cassandra"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"The incoming airbyte data is structured in keyspaces and tables and is partitioned and replicated across different nodes\nin the cluster. This connector maps an incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," to a Cassandra ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," to a\nCassandra",(0,i.kt)("inlineCode",{parentName:"p"},"keyspace"),". Fields in the airbyte message become different columns in the Cassandra tables. Each table will\ncontain the following columns."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": A random uuid generator to be used as a partition key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was received from the data source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json text representing the extracted data.")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured DynamoDB table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespace will be used as part of the table name.")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"Cassandra is designed to handle large amounts of data by using different nodes in the cluster in order to perform write\noperations. As long as you have enough nodes in the cluster the database can scale infinitely and handle any amount of\ndata from the connector."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The driver is compatible with ",(0,i.kt)("em",{parentName:"li"},"Cassandra >= 2.1")),(0,i.kt)("li",{parentName:"ul"},"Configuration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Keyspace ","[default keyspace to use when writing data]"),(0,i.kt)("li",{parentName:"ul"},"Username ","[authentication username]"),(0,i.kt)("li",{parentName:"ul"},"Password ","[authentication password]"),(0,i.kt)("li",{parentName:"ul"},"Address ","[cluster address]"),(0,i.kt)("li",{parentName:"ul"},"Port ","[default: 9042]"),(0,i.kt)("li",{parentName:"ul"},"Datacenter ","[optional][default: datacenter1]"),(0,i.kt)("li",{parentName:"ul"},"Replication ","[optional][default: 1]")))),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"######TODO: more info, screenshots?, etc..."))}m.isMDXComponent=!0}}]);