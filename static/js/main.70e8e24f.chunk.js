(this.webpackJsonpmaxfarseer2=this.webpackJsonpmaxfarseer2||[]).push([[0],{12:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__gyeIQ",link:"Sidebar_link__2c7Rb",activeLink:"Sidebar_activeLink__1xtoS"}},14:function(e,t,a){e.exports={login:"Login_login__1JH6N",row:"Login_row__2dRoc",error:"Login_error__1RL5u"}},25:function(e,t,a){e.exports={header:"Header_header__1TDsJ",login:"Header_login__3r_XY"}},39:function(e,t,a){e.exports={app:"App_app__1MDTS"}},40:function(e,t,a){e.exports={main:"Main_main__ti6oL"}},41:function(e,t,a){e.exports={social:"Profile_social__3sqkT"}},42:function(e,t,a){e.exports={preloader:"Preloader_preloader__2Pcd2"}},43:function(e,t,a){e.exports=a.p+"static/media/circles.1181204b.svg"},44:function(e,t,a){e.exports={new:"New_new__3hy3N"}},45:function(e,t,a){e.exports=a(74)},50:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(18),c=a.n(u),s=(a(50),a(7)),l=a(11),i=a(16),o=a(37),m=a(8),f=a.n(m),d=a(13),E=a(10),p=a(38).create({baseURL:"https://mysterious-reef-29460.herokuapp.com/api/v1/"}),h=function(){return Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("news");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},b=function(e,t){return Object(d.a)(f.a.mark((function a(){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.post("validate",{email:e,password:t});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},g=function(e){return Object(d.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("user-info/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},v={isAuth:!1,email:null,password:null,userId:null,loginStatus:null,errorText:null,userInfo:null,userInfoStatus:null,isLoading:!1},S=function(e){return{type:"auth/SET-USER-INFO-STATUS",userInfoStatus:e}},w=function(e){return{type:"auth/TOGGLE_LOADING",isLoading:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-IS-AUTH":return Object(E.a)({},e,{isAuth:t.isAuth});case"auth/SET-USER-ID":return Object(E.a)({},e,{userId:t.userId});case"auth/LOGOUT":return Object(E.a)({},e,{isAuth:!1,userId:null});case"auth/SET-LOGIN-STATUS":return Object(E.a)({},e,{loginStatus:t.loginStatus});case"auth/SET-ERROR-TEXT":switch(t.errorText){case"wrong_email_or_password":return Object(E.a)({},e,{errorText:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"});default:return e}case"auth/SET-USER-INFO":return Object(E.a)({},e,{userInfo:t.userInfo});case"auth/SET-USER-INFO-STATUS":return Object(E.a)({},e,{userInfoStatus:t.userInfoStatus});case"auth/TOGGLE_LOADING":return Object(E.a)({},e,{isLoading:t.isLoading});default:return e}},I={isLoading:!1,news:[]},T=function(e){return{type:"TOGGLE-LOADING",isLoading:e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-NEWS":return Object(E.a)({},e,{news:t.news});case"TOGGLE-LOADING":return Object(E.a)({},e,{isLoading:t.isLoading});default:return e}},x=Object(i.c)({auth:O,news:_}),L=Object(i.d)(x,Object(i.a)(o.a));window.store=L;var N=L,j=a(39),k=a.n(j),y=a(12),A=a.n(y),R=function(e){return r.a.createElement("nav",{className:A.a.sidebar},r.a.createElement(l.b,{to:"/about",className:A.a.link,activeClassName:A.a.activeLink},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement(l.b,{to:"/profile",className:A.a.link,activeClassName:A.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(l.b,{to:"/news",className:A.a.link,activeClassName:A.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"))},U=a(25),G=a.n(U),D=function(e){var t=e.isAuth?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438";return r.a.createElement("header",{className:G.a.header},r.a.createElement("div",{onClick:function(){e.isAuth&&e.logout()},className:G.a.login},r.a.createElement(l.b,{to:"/login"},t)))},F=Object(s.b)((function(e){return{isAuth:e.auth.isAuth}}),{logout:function(){return{type:"auth/LOGOUT"}}})(D),C=a(2),H=a(40),P=a.n(H),J=a(20),X=a(14),z=a.n(X),M=function(e){var t=Object(n.useState)(""),a=Object(J.a)(t,2),u=a[0],c=a[1],s=Object(n.useState)(""),l=Object(J.a)(s,2),i=l[0],o=l[1],m=Object(n.useState)(!0),f=Object(J.a)(m,2),d=f[0],E=f[1];Object(n.useEffect)((function(){"err"===e.status&&o("")}),[e.status]);var p=function(t){t.preventDefault(),u.length>0&&i.length>0?(E(!0),e.login(u,i)):E(!1)};return r.a.createElement("form",{className:z.a.login,onSubmit:p,onKeyPress:function(e){"enter"===e.key&&p(e)}},r.a.createElement("div",{className:z.a.row},r.a.createElement("label",{htmlFor:"email"},"Email (max@test.com):"),r.a.createElement("input",{id:"email",type:"text",value:u,onChange:function(e){c(e.currentTarget.value)}})),r.a.createElement("div",{className:z.a.row},r.a.createElement("label",{htmlFor:"password"},"Password (12345):"),r.a.createElement("input",{id:"password",type:"text",value:i,onChange:function(e){o(e.currentTarget.value)}})),r.a.createElement("div",{className:z.a.row},r.a.createElement("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})),"err"===e.loginStatus&&r.a.createElement("div",{className:z.a.error},e.errorText),!d&&r.a.createElement("div",{className:z.a.error},"\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email \u0438\u043b\u0438 password"))},W=Object(s.b)((function(e){return{loginStatus:e.auth.loginStatus,errorText:e.auth.errorText}}),{login:function(e,t){return function(){var a=Object(d.a)(f.a.mark((function a(n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b(e,t);case 2:r=a.sent,n({type:"auth/SET-LOGIN-STATUS",loginStatus:r.status}),"ok"===r.status?(n({type:"auth/SET-IS-AUTH",isAuth:!0}),n({type:"auth/SET-USER-ID",userId:r.data.id})):n({type:"auth/SET-ERROR-TEXT",errorText:r.message});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(M),q=a(41),B=a.n(q),K=a(42),Q=a.n(K),Y=a(43),V=a.n(Y),Z=function(){return r.a.createElement("div",{className:Q.a.preloader},r.a.createElement("img",{src:V.a,alt:""}))},$=function(e){return Object(n.useEffect)((function(){e.userId&&e.getUserInfo(e.userId)}),[e.userId]),e.isLoading?r.a.createElement(Z,null):r.a.createElement(r.a.Fragment,null,e.userInfo&&"ok"===e.userInfoStatus&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"\u0413\u043e\u0440\u043e\u0434: "),r.a.createElement("span",null,e.userInfo.city)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",null,"\u0417\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u043e\u0432:"),r.a.createElement("div",null,e.userInfo.languages.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement("br",null),r.a.createElement("div",{className:B.a.social},e.userInfo.social.sort((function(e,t){return"web"===e.label?-1:"web"===t.label?1:0})).map((function(e,t){return r.a.createElement("a",{key:t,href:e.link,target:"_blank"},r.a.createElement("img",{src:"".concat("/maxfarseer2","/").concat(e.label,".png"),alt:""}))})))),"err"===e.userInfoStatus&&r.a.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"))},ee=Object(s.b)((function(e){return{userInfo:e.auth.userInfo,userId:e.auth.userId,userInfoStatus:e.auth.userInfoStatus,isLoading:e.auth.isLoading}}),{getUserInfo:function(e){return function(){var t=Object(d.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(w(!0)),t.next=3,g(e);case 3:"ok"===(n=t.sent).status?(a({type:"auth/SET-USER-INFO",userInfo:n.data}),a(S("ok")),a(w(!1))):(a(S("err")),a(w(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})($),te=a(44),ae=a.n(te),ne=function(e){return r.a.createElement("div",{className:ae.a.new},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.text))},re=function(e){var t=e.news.map((function(e){return r.a.createElement(ne,{key:e.id,title:e.title,text:e.text})}));return e.isLoading?r.a.createElement(Z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t),r.a.createElement("div",null,"\u0412\u0441\u0435\u0433\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 ",e.news.length))},ue=Object(s.b)((function(e){return{news:e.news.news,isLoading:e.news.isLoading}}),{})(re),ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u0412\u043e\u0442 ",r.a.createElement("a",{href:"https://github.com/maxfarseer/tz-webinars/tree/tz-2-react-redux-router-async"},"\u044d\u0442\u043e")," \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),r.a.createElement("p",null,"React/Redux/React-Router. \u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440, \u043b\u043e\u0433\u0438\u043d\u0438\u0437\u0430\u0446\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a"))},se=function(e){return Object(n.useEffect)((function(){e.getNews()}),[]),r.a.createElement("main",{className:P.a.main},r.a.createElement(C.d,null,r.a.createElement(C.b,{path:"/about",component:ce}),r.a.createElement(C.b,{path:"/news",component:ue}),r.a.createElement(C.b,{path:"/profile"},e.isAuth?r.a.createElement(ee,null):r.a.createElement(C.a,{to:"/login"})),r.a.createElement(C.b,{path:"/login"},e.isAuth?r.a.createElement(C.a,{to:"/profile"}):r.a.createElement(W,null))))},le=Object(s.b)((function(e){return{isAuth:e.auth.isAuth}}),{getNews:function(){return function(e){e(T(!0)),h().then((function(t){"ok"===t.status&&(e(T(!1)),e({type:"SET-NEWS",news:t.data}))}))}}})(se);var ie=function(){return r.a.createElement("div",{className:k.a.app},r.a.createElement(F,null),r.a.createElement(R,null),r.a.createElement(le,null))};c.a.render(r.a.createElement(l.a,null,r.a.createElement(s.a,{store:N},r.a.createElement(ie,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.70e8e24f.chunk.js.map