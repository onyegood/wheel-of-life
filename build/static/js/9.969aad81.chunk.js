(window.webpackJsonpwheeloflife=window.webpackJsonpwheeloflife||[]).push([[9],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(23),s=function(){return{type:r.a}}},454:function(e,t,a){"use strict";a.r(t);var r=a(41),s=a(36),n=a(37),o=a(39),i=a(38),c=a(40),l=a(0),m=a.n(l),d=a(17),p=a(27),u=a.n(p),f=a(22),w=a(11),g=a(26),h=a(21),b=a(101);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={data:{password:"",confirm_password:""},error:{},isLoading:!0,isProcessing:!1,message:"",_id:null},a.componentWillReceiveProps=function(e){void 0!==e.message&&a.setState({message:e.message}),setTimeout((function(){Object(g.b)(a.state.error.message,{type:g.b.TYPE.ERROR})}),500)},a.componentDidMount=function(){var e=a.props.match.params.token,t=u()(e);setTimeout((function(){return a.setState({isLoading:!1,_id:t.id})}),2e3)},a.onChange=function(e){return a.setState({data:E({},a.state.data,Object(r.a)({},e.target.name,e.target.value))})},a.onSubmit=function(e){e.preventDefault(),a.setState({isProcessing:!0});var t=a.validate(a.state.data);if(a.setState({error:t}),0===Object.keys(t).length){a.props.match.params.id;var r=a.state,s=r.data,n={admin_id:r._id,new_password:s.password};a.props.submit(n),setTimeout((function(){a.props.message.success?(Object(g.b)(a.props.message.payload,{type:g.b.TYPE.SUCCESS}),a.setState({isProcessing:!1}),f.a.push("/login")):(Object(g.b)(a.props.message.payload,{type:g.b.TYPE.ERROR}),a.setState({isProcessing:!1}))}),3e3),setTimeout((function(){a.props.clearMessage()}),4e3)}else a.setState({isProcessing:!1})},a.validate=function(e){var t={};return e.password||(t.password="Password is required"),e.confirm_password?e.password!==e.confirm_password&&(t.confirm_password="Password not match"):t.confirm_password="Confirm password is required",t},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.error,r=(e.isLoading,e.isProcessing),s=m.a.createElement("div",{className:"bg-white is-sign-in"},m.a.createElement("main",{className:"main",id:"mainContent"},m.a.createElement("div",{className:"major-bg maxwidth-xxl mx-auto"},m.a.createElement("section",{className:"centered-box sign-in-wrapper auth-container"},m.a.createElement("header",{className:"logo-container mb-2h"},m.a.createElement("img",{src:"/assets/img/npower-logo.png",alt:"npower-logo"})),m.a.createElement("br",null),m.a.createElement("form",{onSubmit:this.onSubmit,className:"aut sign-in-form box-shad-padded bg-white"},m.a.createElement("label",{className:"form-label tx-c fw-bold mb-3 capitalize",for:"sign-up-form"},"Reset Password"),m.a.createElement("div",{className:"email input"},m.a.createElement("label",{for:"password"}," New Password "),m.a.createElement("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",stroke:"#999",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M15.2222 9H2.77778C1.79594 9 1 9.79594 1 10.7778V17C1 17.9818 1.79594 18.7778 2.77778 18.7778H15.2222C16.2041 18.7778 17 17.9818 17 17V10.7778C17 9.79594 16.2041 9 15.2222 9Z",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"}),m.a.createElement("path",{d:"M4.55566 9V5.44444C4.55566 4.2657 5.02392 3.13524 5.85741 2.30175C6.69091 1.46825 7.82137 1 9.00011 1C10.1788 1 11.3093 1.46825 12.1428 2.30175C12.9763 3.13524 13.4446 4.2657 13.4446 5.44444V9",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"})),m.a.createElement("input",{type:"password",id:"password",name:"password",value:t.password,onChange:this.onChange,className:a.password?"form-control is-invalid":"form-control"}),m.a.createElement("div",{className:"invalid-feedback"},a.password)),m.a.createElement("div",{className:"password input my-0"},m.a.createElement("label",{for:"password"}," Confirm Password "),m.a.createElement("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",stroke:"#999",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M15.2222 9H2.77778C1.79594 9 1 9.79594 1 10.7778V17C1 17.9818 1.79594 18.7778 2.77778 18.7778H15.2222C16.2041 18.7778 17 17.9818 17 17V10.7778C17 9.79594 16.2041 9 15.2222 9Z",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"}),m.a.createElement("path",{d:"M4.55566 9V5.44444C4.55566 4.2657 5.02392 3.13524 5.85741 2.30175C6.69091 1.46825 7.82137 1 9.00011 1C10.1788 1 11.3093 1.46825 12.1428 2.30175C12.9763 3.13524 13.4446 4.2657 13.4446 5.44444V9",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"})),m.a.createElement("input",{type:"password",id:"confirm_password",name:"confirm_password",value:t.confirm_password,onChange:this.onChange,className:a.confirm_password?"form-control is-invalid":"form-control"}),m.a.createElement("div",{className:"invalid-feedback"},a.confirm_password)),r?m.a.createElement("span",{className:"submit mb-1 mt-3 d-flx al-i-c j-c-c"},m.a.createElement("i",{className:"fa fa-spinner fa-spin"}),m.a.createElement("span",{className:"ml-h"},"Processing...")):m.a.createElement("button",{className:"submit mb-1 mt-3 d-flx al-i-c j-c-c"},m.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M4.16667 9.16667H15.8333C16.7538 9.16667 17.5 9.91286 17.5 10.8333V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V10.8333C2.5 9.91286 3.24619 9.16667 4.16667 9.16667Z",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"}),m.a.createElement("path",{d:"M14.1666 9.16667V5.83334C14.1677 4.80005 13.7847 3.80323 13.0921 3.03639C12.3996 2.26956 11.4468 1.78742 10.4187 1.68358C9.39064 1.57974 8.36067 1.86159 7.52873 2.47443C6.69679 3.08728 6.12224 3.98738 5.91662 5.00001",strokeWidth:"2",strokeLnecap:"round",strokeLinejoin:"round"})),m.a.createElement("span",{className:"ml-h"},"Submit")),m.a.createElement("p",{class:"option"},"Have an account? ",m.a.createElement(h.b,{className:"capitalize tx-r nanofont mt-h",to:"/"},"Sign In")))),m.a.createElement("footer",{className:"aut-footer d-flx al-i-c"},m.a.createElement("p",{className:"co-lightgray"},"\xa9 Copyright 2019 Softcom Limited. All rights reserved")))));return m.a.createElement("div",null,s)}}]),t}(l.Component);var j={submit:w.a,clearMessage:b.a};t.default=Object(d.b)((function(e){return{error:e.auth.error,message:e.message}}),j)(C)}}]);
//# sourceMappingURL=9.969aad81.chunk.js.map