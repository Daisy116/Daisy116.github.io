"use strict";(self["webpackChunkvue_cli_demo"]=self["webpackChunkvue_cli_demo"]||[]).push([[734],{734:function(e,r,a){a.r(r),a.d(r,{default:function(){return k}});var s=a(252),t=a(577);const c={key:0},u=["src"],o={key:0},i=["src"],l={key:1};function n(e,r,a,n,d,p){return(0,s.wg)(),(0,s.iD)("div",null,[n.isError?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("h1",null,(0,t.zw)(n.course.data.headline),1),(0,s._)("h2",null,"NTD:"+(0,t.zw)(n.course.data.price),1),(0,s._)("img",{src:n.course.data.image,alt:""},null,8,u),0!==Object.keys(n.course.data).length?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("img",{src:n.course.data.blur,alt:""},null,8,i),(0,s._)("p",null,(0,t.zw)(n.course.data.lecturers[0].description),1)])):(0,s.kq)("",!0)])),n.isError?((0,s.wg)(),(0,s.iD)("h1",l,(0,t.zw)(n.course.data.error_message),1)):(0,s.kq)("",!0)])}var d=a(262),p=a(201),_=a(154),g={setup(){const e=(0,p.yj)(),r=(0,p.tv)(),a=(0,d.qj)({data:{}}),t=(0,d.iH)(!1);let c=null;return(0,s.bv)((()=>{_.Z.get(`https://api.hiskio.com/v2/courses/${e.params.id}?coupon_code=&p=`).then((e=>{a.data=e.data})).catch((e=>{t.value=!0,a.data["error_message"]=e.response.data.message,c=setTimeout((()=>{r.go(-1)}),2e3)}))})),(0,s.Ah)((()=>{clearTimeout(c)})),{course:a,isError:t}}},h=a(744);const v=(0,h.Z)(g,[["render",n],["__scopeId","data-v-c6c9c3e6"]]);var k=v}}]);
//# sourceMappingURL=734.50d05168.js.map