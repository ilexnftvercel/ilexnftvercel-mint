(this.webpackJsonpthe_stripes_nft_dapp=this.webpackJsonpthe_stripes_nft_dapp||[]).push([[0],{381:function(t,e){},389:function(t,e){},406:function(t,e){},408:function(t,e){},427:function(t,e){},428:function(t,e){},488:function(t,e){},490:function(t,e){},523:function(t,e){},525:function(t,e){},526:function(t,e){},531:function(t,e){},533:function(t,e){},539:function(t,e){},541:function(t,e){},554:function(t,e){},566:function(t,e){},569:function(t,e){},574:function(t,e){},582:function(t,e){},590:function(t,e){},592:function(t,e){},660:function(t,e){},688:function(t,e){},693:function(t,e){},765:function(t,e){},771:function(t,e){},784:function(t,e){},790:function(t,e,n){},791:function(t,e,n){"use strict";n.r(e);var a,r,i,o,c,s,u,p,l,d,y,b,f,m,x,j,h,g,O=n(1),v=n.n(O),w=n(136),T=n.n(w),A=n(5),C=n(9),S=n(13),M=n(12),E=n(359),_=n(17),k=n(0),N=n.n(k),I=n(4),D=n(41),R=n(26),F=n(94),L=n(74),K=n.n(L),P=n(137),U=n.n(P),z=n(119),W=n(347),B=n(38),Y={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(B.a)(Object(B.a)({},Y),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(B.a)(Object(B.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(B.a)(Object(B.a)({},Y),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(B.a)(Object(B.a)({},t),{},{account:e.payload.account});default:return t}},G={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(B.a)(Object(B.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(B.a)(Object(B.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(B.a)(Object(B.a)({},G),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},Q=Object(z.b)({blockchain:H,data:X}),q=[W.a],J=Object(z.c)(z.a.apply(void 0,q)),V=Object(z.d)(Q,J),Z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},$=function(){return function(){var t=Object(I.a)(N.a.mark((function t(e){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,V.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(Z("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},tt=function(t){return{type:"CONNECTION_FAILED",payload:t}},et=function(t){return function(){var e=Object(I.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n($());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},nt=n(27),at=nt.a.div(a||(a=Object(R.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transform: scale(0.7);\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),rt=(nt.a.div(r||(r=Object(R.a)(["\n  height: 8px;\n  width: 8px;\n"]))),nt.a.div(i||(i=Object(R.a)(["\n  height: 16px;\n  width: 16px;\n"])))),it=nt.a.div(o||(o=Object(R.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ot=nt.a.div(c||(c=Object(R.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ct=nt.a.div(s||(s=Object(R.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),st=nt.a.p(u||(u=Object(R.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ut=(nt.a.p(p||(p=Object(R.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),nt.a.p(l||(l=Object(R.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  \n  background-image: ",";\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"}))),pt=nt.a.p(d||(d=Object(R.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  \n  width: 343px;\n  height: 95px;\n  background-image: ",";\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),lt=(nt.a.div(y||(y=Object(R.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),function(){var t=Object(I.a)(N.a.mark((function t(){var e,n,a,r,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 5:return n=t.sent,t.next=8,e.json();case 8:return a=t.sent,t.next=11,n.json();case 11:return r=t.sent,i=new K.a(a,r.CONTRACT_ADDRESS),t.next=15,i;case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),dt={1:{address:"0xCee9d8dc50cF2746dd38A018E634d98Da2DCF364",abi:[{inputs:[],name:"activateFullRelease",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"activatePresale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddr",type:"address"}],name:"changeWithdrawAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"}],name:"setPresaleUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"fullRelease",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"isWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_TOKENS_MINTED_BY_ADDRESS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_TOKENS_MINTED_BY_ADDRESS_PRESALE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"presaleActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"presaleAddresses",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}]}},yt=n(351),bt=n.n(yt),ft=n(358),mt=n(6),xt=(nt.a.button(b||(b=Object(R.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: 520;\n  color: var(--secondary-text);\n  width: 220px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),nt.a.button(f||(f=Object(R.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: var(--secondary);\n  font-weight: 520;\n  color: var(--secondary-text);\n  width: 497px;\n  height: 104px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  background-image: ",";\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"}))),jt=nt.a.button(m||(m=Object(R.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: #D0AED3;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ht=nt.a.div(x||(x=Object(R.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),gt=(nt.a.img(j||(j=Object(R.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),nt.a.img(h||(h=Object(R.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),nt.a.a(g||(g=Object(R.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var Ot=function(){var t=Object(F.b)(),e=Object(F.c)((function(t){return t.blockchain})),n=Object(F.c)((function(t){return t.data})),a=Object(O.useState)(!1),r=Object(D.a)(a,2),i=r[0],o=r[1],c=Object(O.useState)("Click buy to mint your NFT."),s=Object(D.a)(c,2),u=(s[0],s[1]),p=Object(O.useState)(!1),l=Object(D.a)(p,2),d=l[0],y=l[1],b=Object(O.useState)(1),f=Object(D.a)(b,2),m=f[0],x=f[1],j=Object(O.useState)(null),h=Object(D.a)(j,2),g=h[0],v=h[1],w=function(t){var e=new U.a(t);return e.eth.extend({methods:[{name:"chainId",call:"eth_chainId",outputFormatter:e.utils.hexToNumber}]}),e},T=function(){var t=Object(I.a)(N.a.mark((function t(){var e,n,a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new bt.a({network:"rinkeby",cacheProvider:!0,providerOptions:{walletconnect:{package:ft.a,options:{infuraId:"4f74ca0a75724feab56cc6b5710481ee"}}}}),t.prev=1,t.next=4,e.connect();case 4:n=t.sent,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.warn(t.t0),alert("Walletconnect connection failed.");case 11:return a=w(n),t.next=14,a.eth.getAccounts();case 14:return r=t.sent,r[0],t.next=18,a.eth.net.getId();case 18:return t.sent,t.next=21,a.eth.chainId();case 21:return t.sent,v(a),t.abrupt("return",[r,a]);case 24:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),A=function(t,e){return new e.eth.Contract(dt[t].abi,dt[t].address)};function C(n,a,r,i){return new Promise(function(){var c=Object(I.a)(N.a.mark((function c(s,p){var l;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l=A(a,i),c.next=3,l.methods.mint(n,r).send({gasLimit:String(5e5),from:n,value:String(69e15*r)},(function(t,e){t&&p(t),s(e)})).once("error",(function(t){console.log(t),u("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),u("WOW, the ".concat(_.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),t($(e.account))}));case 3:case"end":return c.stop()}}),c)})));return function(t,e){return c.apply(this,arguments)}}())}var S=function(){var t=Object(I.a)(N.a.mark((function t(e,n){var a,r,i,c,s,p;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=null,o(!0),a=C){t.next=5;break}throw new Error("No matching contract calls for functionSig=".concat(e));case 5:return t.next=7,n.eth.getAccounts();case 7:return r=t.sent,i=r[0],t.next=11,n.eth.chainId();case 11:return c=t.sent,t.prev=12,o(!0),t.next=16,a(i,c,e,n);case 16:return s=t.sent,p={action:"Mint",result:s},u("WOW, the ".concat(_.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),t.abrupt("return",p);case 23:t.prev=23,t.t0=t.catch(12),u("Sorry, something went wrong please try again later."),o(!1),console.log(t.t0);case 28:case"end":return t.stop()}}),t,null,[[12,23]])})));return function(e,n){return t.apply(this,arguments)}}(),M=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),E=Object(D.a)(M,2),_=E[0],k=E[1],R=function(){""!==e.account&&null!==e.smartContract&&t($(e.account))},L=function(){var t=Object(I.a)(N.a.mark((function t(){var e,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,k(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.useEffect)((function(){L()}),[]),Object(O.useEffect)((function(){R()}),[e.account]),Object(mt.jsx)(at,{children:Object(mt.jsxs)(ct,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:_.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(mt.jsx)("a",{href:_.MARKETPLACE_LINK}),Object(mt.jsx)(rt,{}),Object(mt.jsxs)(ht,{flex:1,style:{padding:24},test:!0,children:[Object(mt.jsx)(ct,{flex:1,jc:"center",ai:"center"}),Object(mt.jsx)(ot,{}),Object(mt.jsxs)(ct,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:0},children:[Object(mt.jsxs)(st,{style:{textAlign:"center",fontSize:28,fontWeight:"bold",color:"var(--accent-text)"},children:["Remaining: ",n.totalSupply," / ",_.MAX_SUPPLY]}),Object(mt.jsx)(ut,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(mt.jsx)("span",{style:{textAlign:"center"}}),Object(mt.jsx)(rt,{}),Number(n.totalSupply)>=_.MAX_SUPPLY?Object(mt.jsxs)(mt.Fragment,{children:[Object(mt.jsx)(st,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(mt.jsxs)(ut,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",_.NFT_NAME," on"]}),Object(mt.jsx)(rt,{}),Object(mt.jsx)(gt,{target:"_blank",href:_.MARKETPLACE_LINK,children:_.MARKETPLACE})]}):Object(mt.jsxs)(mt.Fragment,{children:[Object(mt.jsx)(rt,{}),""===e.account||null===e.smartContract?Object(mt.jsxs)(ct,{ai:"center",jc:"center",children:[Object(mt.jsxs)(ut,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:30},children:["Connect to the ",_.NETWORK.NAME," network"]}),Object(mt.jsx)(rt,{}),Object(mt.jsx)(xt,{onClick:function(e){e.preventDefault(),t(function(){var t=Object(I.a)(N.a.mark((function t(e){var n,a,r,i,o,c,s,u,p;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),console.log("trying to connect"),t.next=4,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,t.next=10,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 10:return r=t.sent,t.next=13,r.json();case 13:if(i=t.sent,o=window,!(c=o.ethereum)||!c.isMetaMask){t.next=34;break}return K.a.setProvider(c),s=new U.a(c),t.prev=19,t.next=22,c.request({method:"eth_requestAccounts"});case 22:return u=t.sent,t.next=25,c.request({method:"net_version"});case 25:t.sent==i.NETWORK.ID?(p=new K.a(a,i.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:u[0],smartContract:p,web3:s}}),c.on("accountsChanged",(function(t){e(et(t[0]))})),c.on("chainChanged",(function(){window.location.reload()}))):e(tt("Change network to ".concat(i.NETWORK.NAME,"."))),t.next=32;break;case 29:t.prev=29,t.t0=t.catch(19),e(tt("Something went wrong."));case 32:t.next=35;break;case 34:e(tt("Install Metamask."));case 35:case"end":return t.stop()}}),t,null,[[19,29]])})));return function(e){return t.apply(this,arguments)}}()),R()},style:{fontSize:40,margin:"5px",paddingBottom:"25px"},image:"button.png",children:"MetaMask"}),Object(mt.jsx)(xt,{image:"button.png",onClick:function(t){t.preventDefault();var n=T();e.account=n[0],e.smartContract=lt(),y(!0),R(),v(n[1])},style:{fontSize:40,margin:"5px",paddingBottom:"25px"},children:"WalletConnect"}),""!==e.errorMsg?Object(mt.jsxs)(mt.Fragment,{children:[Object(mt.jsx)(rt,{}),Object(mt.jsx)(ut,{style:{textAlign:"center",color:"var(--accent-text)"},children:e.errorMsg})]}):null]}):Object(mt.jsxs)(mt.Fragment,{children:[Object(mt.jsx)(it,{}),Object(mt.jsxs)(ct,{ai:"center",jc:"center",fd:"row",children:[Object(mt.jsx)(jt,{style:{lineHeight:.4,fontSize:40},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=m-1;t<1&&(t=1),x(t)}()},children:Object(mt.jsx)("img",{src:"minus.png"})}),Object(mt.jsx)(it,{}),Object(mt.jsx)(pt,{image:"numberdisplay.png",style:{textAlign:"center",color:"var(--accent-text)",fontSize:40,paddingTop:"35px"},children:m}),Object(mt.jsx)(it,{}),Object(mt.jsx)(jt,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=m+1;t>4&&(t=4),x(t)}()},style:{fontSize:40},children:Object(mt.jsx)("img",{src:"plus.png"})})]}),Object(mt.jsx)(rt,{}),Object(mt.jsx)(ct,{ai:"center",jc:"center",fd:"row",children:Object(mt.jsx)(xt,{disabled:i?1:0,onClick:function(n){if(n.preventDefault(),d){var a=S(m,g);console.log(a)}else!function(){var n=_.WEI_COST,a=_.GAS_LIMIT,r=String(n*m),i=String(a);console.log("Cost: ",r),console.log("Gas limit: ",i),u("Minting your ".concat(_.NFT_NAME,"...")),o(!0),e.smartContract.methods.mint(e.account,m).send({gasLimit:String(i),to:_.CONTRACT_ADDRESS,from:e.account,value:r}).once("error",(function(t){console.log(t),u("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),u("WOW, the ".concat(_.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),t($(e.account))}))}();R()},style:{fontSize:40,paddingBottom:"25px"},image:"button.png",children:i?"BUSY":"Mint"})})]})]}),Object(mt.jsx)(rt,{}),Object(mt.jsx)(st,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:25,width:"550px"},children:"Each address can only mint up to 3 pieces at a time"}),Object(mt.jsx)(it,{})]}),Object(mt.jsx)(ot,{}),Object(mt.jsx)(ct,{flex:1,jc:"center",ai:"center"})]}),Object(mt.jsx)(it,{}),Object(mt.jsx)(ct,{jc:"center",ai:"center",style:{width:"70%"},children:Object(mt.jsx)(rt,{})})]})})},vt=function(t){Object(S.a)(n,t);var e=Object(M.a)(n);function n(){return Object(A.a)(this,n),e.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(mt.jsx)("div",{children:Object(mt.jsx)(E.a,{children:Object(mt.jsx)(_.c,{children:Object(mt.jsx)(_.a,{exact:!0,path:"/",element:Object(mt.jsx)(Ot,{})})})})})}}]),n}(v.a.Component),wt=vt,Tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,797)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),i(t),o(t)}))};n(790);T.a.render(Object(mt.jsx)(F.a,{store:V,children:Object(mt.jsx)(wt,{})}),document.getElementById("root")),Tt()}},[[791,1,2]]]);
//# sourceMappingURL=main.558aecd6.chunk.js.map