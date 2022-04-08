"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2183],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16972:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="ClickHouse",d={unversionedId:"integrations/sources/clickhouse",id:"integrations/sources/clickhouse",title:"ClickHouse",description:"Overview",source:"@site/../docs/integrations/sources/clickhouse.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/clickhouse",permalink:"/airbyte/integrations/sources/clickhouse",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Chartmogul",permalink:"/airbyte/integrations/sources/chartmogul"},next:{title:"Close.com",permalink:"/airbyte/integrations/sources/close-com"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:4},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"1. Make sure your database is accessible from the machine running Airbyte",id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte",level:4},{value:"2. Create a dedicated read-only user with access to the relevant tables (Recommended but optional)",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional",level:4},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"Changelog",id:"changelog",level:2},{value:"CHANGELOG source-clickhouse-strict-encrypt",id:"changelog-source-clickhouse-strict-encrypt",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse"},"ClickHouse"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ClickHouse source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This Clickhouse source connector is built on top of the source-jdbc code base and is configured to rely on JDBC v0.3.1 standard drivers provided by ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"here")," as described in ClickHouse documentation ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/interfaces/jdbc/"},"here"),"."),(0,i.kt)("h4",{id:"resulting-schema"},"Resulting schema"),(0,i.kt)("p",null,"The ClickHouse source does not alter the schema present in your warehouse. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Logical Replication ","(","WAL",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enabled by default")))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ClickHouse Server ",(0,i.kt)("inlineCode",{parentName:"li"},"21.3.10.1")," or later."),(0,i.kt)("li",{parentName:"ol"},"Create a dedicated read-only Airbyte user with access to all tables needed for replication")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte"},"1. Make sure your database is accessible from the machine running Airbyte"),(0,i.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Airbyte is able to connect to your ClickHouse instance is via the check connection tool in the UI."),(0,i.kt)("h4",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional"},"2. Create a dedicated read-only user with access to the relevant tables ","(","Recommended but optional",")"),(0,i.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Airbyte with an existing user in your database."),(0,i.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'airbyte'@'%' IDENTIFIED BY 'your_password_here';\n")),(0,i.kt)("p",null,"Then give it access to the relevant schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON <database name>.* TO 'airbyte'@'%';\n")),(0,i.kt)("p",null,"You can limit this grant down to specific tables instead of the whole database. Note that to replicate data from multiple ClickHouse databases, you can re-run the command above to grant access to all the relevant schemas, but you'll need to set up multiple sources connecting to the same db on multiple schemas."),(0,i.kt)("p",null,"Your database user should now be ready for use with Airbyte."),(0,i.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,i.kt)("p",null,"Airbyte has the ability to connect to a Clickhouse instance via an SSH Tunnel. The reason you might want to do this because it is not possible ","(","or against security policy",")"," to connect to the database directly ","(","e.g. it does not have a public IP address",")","."),(0,i.kt)("p",null,"When using an SSH tunnel, you are configuring Airbyte to connect to an intermediate server ","(","a.k.a. a bastion sever",")"," that ",(0,i.kt)("em",{parentName:"p"},"does")," have direct access to the database. Airbyte connects to the bastion and then asks the bastion to connect directly to the server."),(0,i.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure all fields for the source as you normally would, except ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method")," defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"No Tunnel")," ","(","meaning a direct connection",")",". If you want to use an SSH Tunnel choose ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Password Authentication"),".",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel ","(","see below for more information on generating this key",")","."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Jump Server Host")," refers to the intermediate ","(","bastion",")"," server that Airbyte will connect to. This should be a hostname or an IP Address."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,i.kt)("inlineCode",{parentName:"li"},"22"),", so unless you have explicitly changed something, go with the default."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," is the username that Airbyte should use when connection to the bastion server. This is NOT the Clickhouse username."),(0,i.kt)("li",{parentName:"ol"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"Password Authentication"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," leave this blank. Again, this is not the Clickhouse password, but the password for the OS-user that Airbyte is using to perform commands on the bastion."),(0,i.kt)("li",{parentName:"ol"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,i.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----"),".")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10214"},"#","10214")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix exception in case ",(0,i.kt)("inlineCode",{parentName:"td"},"password")," field is not provided")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"#","8958")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-15"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"#","8429")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"#","8371")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7327"},"#","7327")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added support for connection via SSH tunnel(aka Bastion server).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7127"},"#","7127")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added SSL connections support.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"13.08.2021"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"#","4699")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added json config validator.")))),(0,i.kt)("h2",{id:"changelog-source-clickhouse-strict-encrypt"},"CHANGELOG source-clickhouse-strict-encrypt"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10214"},"#","10214")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix exception in case ",(0,i.kt)("inlineCode",{parentName:"td"},"password")," field is not provided")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-29"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9182"},"#","9182")," ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"#","8958")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY. Fixed tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"#","8371")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7327"},"#","7327")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added support for connection via SSH tunnel(aka Bastion server).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7127"},"#","7127")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added source-clickhouse-strict-encrypt that supports SSL connections only.")))))}m.isMDXComponent=!0}}]);