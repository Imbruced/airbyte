"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6292],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={description:"Common issues when trying to set up a new connection (source/destination)"},c="On Setting up a New Connection",l={unversionedId:"troubleshooting/new-connection",id:"troubleshooting/new-connection",title:"On Setting up a New Connection",description:"Common issues when trying to set up a new connection (source/destination)",source:"@site/../docs/troubleshooting/new-connection.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/new-connection",permalink:"/airbyte/troubleshooting/new-connection",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/troubleshooting/new-connection.md",tags:[],version:"current",frontMatter:{description:"Common issues when trying to set up a new connection (source/destination)"},sidebar:"mySidebar",previous:{title:"On Deploying",permalink:"/airbyte/troubleshooting/on-deploying"},next:{title:"On Running a Sync",permalink:"/airbyte/troubleshooting/running-sync"}},u={},p=[{value:"Airbyte is stuck while loading required configuration parameters for my connector",id:"airbyte-is-stuck-while-loading-required-configuration-parameters-for-my-connector",level:2},{value:"Connection refused errors when connecting to a local db",id:"connection-refused-errors-when-connecting-to-a-local-db",level:2},{value:"I don\u2019t see a form when selecting a connector",id:"i-dont-see-a-form-when-selecting-a-connector",level:2},{value:"Connection hangs when trying to run the discovery step",id:"connection-hangs-when-trying-to-run-the-discovery-step",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-setting-up-a-new-connection"},"On Setting up a New Connection"),(0,i.kt)("h2",{id:"airbyte-is-stuck-while-loading-required-configuration-parameters-for-my-connector"},"Airbyte is stuck while loading required configuration parameters for my connector"),(0,i.kt)("p",null,"Example of the issue:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68983).Z,width:"2959",height:"1788"})),(0,i.kt)("p",null,"To load configuration parameters, Airbyte must first ",(0,i.kt)("inlineCode",{parentName:"p"},"docker pull")," the connector's image, which may be many hundreds of megabytes. Under poor connectivity conditions, the request to pull the image may take a very long time or time out. More context on this issue can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1462"},"here"),". If your Internet speed is less than 30Mbps down or are running bandwidth-consuming workloads concurrently with Airbyte, you may encounter this issue. Run a ",(0,i.kt)("a",{parentName:"p",href:"https://fast.com/"},"speed test")," to verify your internet speed."),(0,i.kt)("p",null,"One workaround is to manually pull the latest version of every connector you'll use then resetting Airbyte. Note that this will remove any configured connections, sources, or destinations you currently have in Airbyte. To do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Decide which connectors you'd like to use. For this example let's say you want the Postgres source and the Snowflake destination."),(0,i.kt)("li",{parentName:"ol"},"Find the Docker image name of those connectors. Look ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config/init/src/main/resources/seed/source_definitions.yaml"},"here")," for sources and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config/init/src/main/resources/seed/destination_definitions.yaml"},"here")," for destinations. For each of the connectors you'd like to use, copy the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"dockerRepository")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dockerImageTag")," fields. For example, for the Postgres source this would be ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte/source-postgres")," and e.g ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1.6"),"."),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"each of the connectors")," you'd like to use, from your shell run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker pull <repository>:<tag>"),", replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"<repository>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<tag>")," with the values copied from the step above e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"docker pull airbyte/source-postgres:0.1.6"),"."),(0,i.kt)("li",{parentName:"ol"},"Once you've finished downloading all the images, from the Airbyte repository root run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose down -v")," followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up"),"."),(0,i.kt)("li",{parentName:"ol"},"The issue should be resolved.")),(0,i.kt)("p",null,"If the above workaround does not fix your problem, please report it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1462"},"here")," or in our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"."),(0,i.kt)("h2",{id:"connection-refused-errors-when-connecting-to-a-local-db"},"Connection refused errors when connecting to a local db"),(0,i.kt)("p",null,"Depending on your Docker network configuration, you may not be able to connect to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," directly."),(0,i.kt)("p",null,"If you are running into connection refused errors when running Airbyte via Docker Compose on Mac, try using ",(0,i.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," as the host. On Linux, you may have to modify ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and add a host that maps to your local machine using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v3/#extra_hosts"},(0,i.kt)("inlineCode",{parentName:"a"},"extra_hosts")),"."),(0,i.kt)("h2",{id:"i-dont-see-a-form-when-selecting-a-connector"},"I don\u2019t see a form when selecting a connector"),(0,i.kt)("p",null,"We\u2019ve had that issue once. ","(","no spinner & 500 http error",")",". We don\u2019t know why. Resolution: try to stop airbyte ","(",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down"),")"," & restart ","(",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up"),")"),(0,i.kt)("h2",{id:"connection-hangs-when-trying-to-run-the-discovery-step"},"Connection hangs when trying to run the discovery step"),(0,i.kt)("p",null,"You receive the error below when you tried to sync a database with a lot of tables ","(","6000 or more",")","."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"airbyte-scheduler   | io.grpc.StatusRuntimeException: RESOURCE_EXHAUSTED: grpc: received message larger than max (<NUMBER> vs. 4194304)\n")),(0,i.kt)("p",null,"There are two Github issues tracking this problem: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3942"},"Issue ","#","3942")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3943"},"Issue ","#","3943")),(0,i.kt)("p",null,"The workaround for this is trying to transfer the tables you really want to use to another namespace. If you need all tables you should split them into separate namespaces and try to use two connections."))}h.isMDXComponent=!0},68983:function(e,t,n){t.Z=n.p+"assets/images/faq_stuck_onboarding-a7f704b7e4d63fa92ea5435f13e0407c.png"}}]);