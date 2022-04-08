"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1129],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return N}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),N=n,f=k["".concat(m,".").concat(N)]||k[N]||s[N]||l;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55937:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={},m="Amazon Seller Partner",o={unversionedId:"integrations/sources/amazon-seller-partner",id:"integrations/sources/amazon-seller-partner",title:"Amazon Seller Partner",description:"Features",source:"@site/../docs/integrations/sources/amazon-seller-partner.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/amazon-seller-partner",permalink:"/airbyte/integrations/sources/amazon-seller-partner",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/amazon-seller-partner.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Amazon SQS",permalink:"/airbyte/integrations/sources/amazon-sqs"},next:{title:"Amazon Ads",permalink:"/airbyte/integrations/sources/amazon-ads"}},d={},s=[{value:"Features",id:"features",level:2},{value:"Supported Tables",id:"supported-tables",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance Considerations (Airbyte Open-Source)",id:"performance-considerations-airbyte-open-source",level:3},{value:"CHANGELOG",id:"changelog",level:2}],k={toc:s};function N(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"amazon-seller-partner"},"Amazon Seller Partner"),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,"This source syncs data from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md"},"Amazon Seller Partner API"),"."),(0,l.kt)("h2",{id:"supported-tables"},"Supported Tables"),(0,l.kt)("p",null,"This source is capable of syncing the following streams:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=201648780"},"Order Report (by order date and by last update)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#inventory-reports"},"All Listings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/200740930"},"FBA Inventory Reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/200453300"},"FBA Replacements Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200453120"},"Amazon-Fulfilled Shipments Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#inventory-reports"},"Open Listings Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110"},"Removal Order Detail Report (overview)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100"},"Removal Shipment Detail Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#vendor-retail-analytics-reports"},"Inventory Health & Planning Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/orders-api/ordersV0.md"},"Orders")," ","(","incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/vendor-direct-fulfillment-shipping-api/vendorDirectFulfillmentShippingV1.md"},"VendorDirectFulfillmentShipping")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#performance-reports"},"Seller Feedback Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#brand-analytics-reports"},"Brand Analytics Alternate Purchase Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#brand-analytics-reports"},"Brand Analytics Item Comparison Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#brand-analytics-reports"},"Brand Analytics Market Basket Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#brand-analytics-reports"},"Brand Analytics Repeat Purchase Report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#brand-analytics-reports"},"Brand Analytics Search Terms Report"))),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requirements")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"replication_start_date"),(0,l.kt)("li",{parentName:"ul"},"refresh_token"),(0,l.kt)("li",{parentName:"ul"},"lwa_app_id"),(0,l.kt)("li",{parentName:"ul"},"lwa_client_secret"),(0,l.kt)("li",{parentName:"ul"},"aws_access_key"),(0,l.kt)("li",{parentName:"ul"},"aws_secret_key"),(0,l.kt)("li",{parentName:"ul"},"role_arn"),(0,l.kt)("li",{parentName:"ul"},"aws_environment"),(0,l.kt)("li",{parentName:"ul"},"region")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Setup guide")),(0,l.kt)("p",null,"Information about how to get credentials you may find ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md"},"here"),"."),(0,l.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datetime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datetime")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"performance-considerations-airbyte-open-source"},"Performance Considerations (Airbyte Open-Source)"),(0,l.kt)("p",null,"Information about rate limits you may find ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md"},"here"),"."),(0,l.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.15")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9789"},"#","9789")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add stream FbaReplacementsReports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.14")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9621"},"#","9621")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.13")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-18"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9581"},"#","9581")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change createdSince parameter to dataStartTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.12")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9312"},"#","9312")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add all remaining brand analytics report streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.11")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9115"},"#","9115")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix reading only 100 orders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.10")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-31"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9236"},"#","9236")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix NoAuth deprecation warning")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.9")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9212"},"#","9212")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Normalize GET_SELLER_FEEDBACK_DATA header field names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.8")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8810"},"#","8810")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix GET_SELLER_FEEDBACK_DATA Date cursor field format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.7")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9002"},"#","9002")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Extract REPORTS_MAX_WAIT_SECONDS to configurable parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.6")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8179"},"#","8179")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.5")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"#","8425")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.4")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8021"},"#","8021")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added GET_SELLER_FEEDBACK_DATA report with incremental sync capability")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7828"},"#","7828")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Remove datetime format from all streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7752"},"#","7752")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change ",(0,l.kt)("inlineCode",{parentName:"td"},"check_connection")," function to use stream Orders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5248"},"#","5248")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Added extra stream support. Updated reports streams logics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-08-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4863"},"#","4863")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Rebuild source with airbyte-cdk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-23"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4288"},"#","4288")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Bugfix failing connection check"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-15"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4108"},"#","4108")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Fixed: Sync fails with timeout when create report is CANCELLED"))))))}N.isMDXComponent=!0}}]);