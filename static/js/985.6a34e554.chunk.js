"use strict";(self.webpackChunksky=self.webpackChunksky||[]).push([[985],{1239:function(e,s,t){t(2791);s.Z=t.p+"static/media/Op2mizev0.6-for-light-bg.e0c38a8d01710c2e60517d585f896769.svg"},6985:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var n=t(885),a=t(2791),o=t(3504),r=t(6871),c=t(1467),i=t(173),d="PasswordReset_body__FGg68",l="PasswordReset_panel__HobJE",u="PasswordReset_virtualAiLogo__04yDZ",p="PasswordReset_title__N8+7f",w="PasswordReset_description__JwWdI",h="PasswordReset_errorAlertMessage__o1pf4",m="PasswordReset_passwordInput__ZoT64",f="PasswordReset_eyeIcon__io+Nw",g="PasswordReset_button__+XP+z",x="PasswordReset_passworthStrengthBarDiv__AAoe6",_=t(1239),v=t(5339),j=t(608),y=t(5861),N=t(7757),P=t.n(N),S=t(4569),Z=t.n(S),b={changePassword:function(e){var s="".concat("https://localhost:44357/api/","auth/ressetPassword");return Z().post(s,e)},validateResetPasswordToken:function(e){var s="".concat("https://localhost:44357/api/","auth/validateResetPasswordToken?requestId=").concat(e);return Z().get(s)},getLocation:function(){return(0,y.Z)(P().mark((function e(){var s;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z().get("https://ipapi.co/json");case 2:return s=e.sent,e.abrupt("return",void 0===s?s:s.data);case 4:case"end":return e.stop()}}),e)})))()}},E=t(251),R=t(184);var k=function(){var e=(0,r.UO)().urlParamId,s=(0,a.useState)("password"),t=(0,n.Z)(s,2),y=t[0],N=t[1],P=(0,a.useState)("password"),S=(0,n.Z)(P,2),Z=S[0],k=S[1],C=(0,a.useState)(""),T=(0,n.Z)(C,2),A=T[0],F=T[1],L=(0,a.useState)(),O=(0,n.Z)(L,2),I=O[0],D=O[1],K=(0,a.useState)(!1),H=(0,n.Z)(K,2),U=H[0],B=H[1],W=(0,a.useState)(!1),V=(0,n.Z)(W,2),z=V[0],G=V[1],Y=(0,a.useState)(!1),J=(0,n.Z)(Y,2),$=J[0],q=J[1],M=(0,a.useState)(!1),X=(0,n.Z)(M,2),Q=X[0],ee=X[1],se=(0,a.useState)(!1),te=(0,n.Z)(se,2),ne=te[0],ae=te[1],oe=(0,a.useState)(""),re=(0,n.Z)(oe,2),ce=re[0],ie=re[1],de=(0,a.useState)(),le=(0,n.Z)(de,2),ue=le[0],pe=le[1],we=(0,a.useState)("too short"),he=(0,n.Z)(we,2),me=(he[0],he[1]),fe=(0,a.useState)(!0),ge=(0,n.Z)(fe,2),xe=ge[0],_e=ge[1],ve=(0,a.useState)(""),je=(0,n.Z)(ve,2),ye=je[0],Ne=je[1],Pe=(0,a.useState)(!1),Se=(0,n.Z)(Pe,2),Ze=Se[0],be=Se[1],Ee=(0,a.useState)(!1),Re=(0,n.Z)(Ee,2),ke=Re[0],Ce=Re[1],Te=function(e){"password"===e?N("password"===y?"text":"password"):k("password"===Z?"text":"password")};return(0,a.useEffect)((function(){_e(!0),b.validateResetPasswordToken(e).then((function(e){G(e.data.isExpired),q(e.data.isNewAccount)})).finally((function(){_e(!1)}))}),[e]),(0,a.useEffect)((function(){ke&&(I===A?(ae(!1),ee(!0),b.changePassword({resetPasswordId:e,newPassword:A,location:ye,device:i.KC}).then((function(){B(!0)})).finally((function(){ee(!1),Ce(!1)}))):(Ce(!1),ae(!0),ie("New password and Confirm new password does not match")))}),[ke]),(0,R.jsx)("div",{className:d,children:!xe&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:l,children:(0,R.jsx)("div",{className:"container",children:(0,R.jsx)("div",{className:"row py-3 text-center",children:z?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("p",{className:p,children:[(0,R.jsx)("img",{className:"".concat(u," my-4"),src:_.Z,alt:"op2miseLogo"}),(0,R.jsx)("br",{}),"Invalid password reset link"]}),(0,R.jsx)("p",{className:w,children:"The password reset link you followed is no longer valid. This is probably because the link is already expired."}),(0,R.jsx)(o.OL,{className:"text-white text-decoration-none mb-5",to:"".concat("","/login"),children:(0,R.jsx)("button",{className:g,type:"button",children:"Back to sign in"})})]}):(0,R.jsx)("div",{children:U?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("p",{className:p,children:[(0,R.jsx)("img",{className:"".concat(u," my-4"),src:_.Z,alt:"op2miseLogo"}),(0,R.jsx)("br",{}),$?"New password successfully set!":"Password successfully changed!"]}),(0,R.jsx)("p",{className:w,children:"You can now use your new password to sign in to your account."}),(0,R.jsx)(o.OL,{className:"text-white text-decoration-none mt-4 mb-2",to:"".concat("","/login"),children:(0,R.jsx)("button",{className:g,type:"button",children:"Sign In"})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("p",{className:p,children:[(0,R.jsx)("img",{className:"".concat(u," my-4"),src:_.Z,alt:"op2miseLogo"}),(0,R.jsx)("br",{}),"Set your new password"]}),(0,R.jsx)("p",{className:w,children:"Your password needs to contain at least 8 characters in length including at least 1 number, 1 special character, 1 uppercase letter and 1 lowercase letter."}),(0,R.jsxs)("div",{className:"input-group position-relative",children:[(0,R.jsx)("input",{className:m,type:y,placeholder:"New password",value:A,onChange:function(e){return F(e.target.value)}}),(0,R.jsx)("div",{className:"".concat(f," input-group-append"),children:"password"===y?(0,R.jsx)("img",{style:{cursor:"pointer"},src:v,alt:"EyeIcon",onClick:function(){return Te("password")},onKeyDown:function(){return Te("password")},role:"presentation"}):(0,R.jsx)("img",{style:{cursor:"pointer",height:"12.03px",width:"15.03px"},src:j,alt:"EyeOnIcon",onClick:function(){return Te("password")},onKeyDown:function(){return Te("password")},role:"presentation"})})]}),(0,R.jsx)("div",{className:x,children:(0,R.jsx)(c.Z,{className:"".concat(1===ue&&"password-reset-password-meter-strength-1"," ").concat(2===ue&&"password-reset-password-meter-strength-2"," ").concat(3===ue&&"password-reset-password-meter-strength-3"," ").concat(4===ue&&"password-reset-password-meter-strength-4"),password:A,barColors:["#ddd","#ff5571","#ffd083","#2178f1","#00d583"],scoreWords:[],shortScoreWord:"",onChangeScore:function(){0===A.length&&(pe(),me("too short")),A.length>=8&&(pe(1),me("weak")),A.length>=8&&/\d/.test(A)&&(pe(2),me("okay")),A.length>=8&&/\d/.test(A)&&/[A-Z]/.test(A)&&(pe(3),me("good")),A.length>=8&&/\d/.test(A)&&/[A-Z]/.test(A)&&/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!@#$%^&*()_+={}[\]:;<>,.?~/\\`|'"]).{8,}$/.test(A)&&(pe(4),me("strong"))}})}),(0,R.jsxs)("div",{className:"input-group position-relative",style:{pointerEvents:A.length<8&&"none"},children:[(0,R.jsx)("input",{className:m,type:Z,placeholder:"Confirm new password",value:I,onChange:function(e){return D(e.target.value)},disabled:A.length<8}),(0,R.jsx)("div",{className:"".concat(f," input-group-append"),children:"password"===Z?(0,R.jsx)("img",{style:{cursor:"pointer"},src:v,alt:"EyeIcon",onClick:function(){return Te("confirmPassword")},onKeyDown:function(){return Te("confirmPassword")},role:"presentation"}):(0,R.jsx)("img",{style:{cursor:"pointer",height:"12.03px",width:"15.03px"},src:j,alt:"EyeOnIcon",onClick:function(){return Te("confirmPassword")},onKeyDown:function(){return Te("confirmPassword")},role:"presentation"})})]}),ne&&(0,R.jsx)("p",{className:h,children:ce}),(0,R.jsxs)("button",{className:g,style:{pointerEvents:(Q||Ze)&&"none",opacity:(Q||Ze)&&"0.8",cursor:(Q||Ze)&&"default",marginTop:ne?"0px":"40px"},onClick:function(){be(!0),b.getLocation().then((function(e){var s=e?"".concat(e.city,", ").concat(e.country_name):"Unknown";Ne(s),Ce(!0)})).finally((function(){return be(!1)}))},disabled:4!==ue,type:"button",children:[$?"Set new password":"Change Password",(Q||Ze)&&(0,R.jsx)("i",{className:"fas fa-circle-notch fa-spin mx-2"})]})]})})})})}),(0,R.jsx)(E.Z,{})]})})}},251:function(e,s,t){t.d(s,{Z:function(){return i}});t(2791);var n=t(6871),a="footer_vaiFooter__NGKVU",o="footer_vaiFooterText__PL00u",r="footer_vaiFooterTextGray__a44Hr",c=t(184);var i=function(){var e=(0,n.TH)();return(0,c.jsx)("div",{className:a,children:(0,c.jsxs)("p",{className:"".concat(e.pathname==="/".concat({NODE_ENV:"production",PUBLIC_URL:"/dennismadrid11/VerodaFrontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_HREF:"'https://localhost:3000/'",REACT_APP_HOST_URL:"https://localhost:44357/api/",REACT_APP_SUBFOLDER:""}.SUBFOLDER,"/login")?r:null," ").concat(o),children:["Virtual AI Ltd. \xa9 ",(new Date).getFullYear()]})})}}}]);
//# sourceMappingURL=985.6a34e554.chunk.js.map