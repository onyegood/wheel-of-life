(window.webpackJsonpwheeloflife=window.webpackJsonpwheeloflife||[]).push([[7],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(23),r=function(){return{type:n.a}}},453:function(e,t,a){"use strict";a.r(t);var n=a(41),r=a(36),s=a(37),i=a(39),o=a(38),l=a(40),c=a(0),m=a.n(c),u=a(17),p=a(22),d=a(11),g=a(26),f=a(21),b=a(101);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={data:{email:""},error:{},isLoading:!0,isProcessing:!1,message:""},a.componentWillReceiveProps=function(e){void 0!==e.message&&a.setState({message:e.message}),setTimeout((function(){Object(g.b)(a.state.error.message,{type:g.b.TYPE.ERROR}),a.setState({isProcessing:!1})}),500)},a.componentDidMount=function(){setTimeout((function(){return a.setState({isLoading:!1})}),2e3)},a.onChange=function(e){return a.setState({data:w({},a.state.data,Object(n.a)({},e.target.name,e.target.value))})},a.onSubmit=function(e){e.preventDefault(),a.setState({isProcessing:!0});var t=a.validate(a.state.data);if(a.setState({error:t}),0===Object.keys(t).length){var n={email:a.state.data.email};a.props.submit(n),setTimeout((function(){a.props.message.success?(Object(g.b)(a.props.message.payload,{type:g.b.TYPE.SUCCESS}),a.setState({isProcessing:!1}),p.a.push("/login")):(Object(g.b)(a.props.message.payload,{type:g.b.TYPE.ERROR}),a.setState({isProcessing:!1}))}),3e3),setTimeout((function(){a.props.clearMessage()}),4e3)}else a.setState({isProcessing:!1})},a.validate=function(e){var t={};return e.email||(t.email="Invalid email"),t},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.error,n=(e.isLoading,e.isProcessing),r=m.a.createElement("div",{className:"bg-white is-sign-in"},m.a.createElement("main",{className:"main",id:"mainContent"},m.a.createElement("div",{className:"major-bg maxwidth-xxl mx-auto"},m.a.createElement("section",{className:"centered-box sign-in-wrapper auth-container"},m.a.createElement("header",{className:"logo-container mb-2h"},m.a.createElement("img",{src:"/assets/img/npower-logo.png",alt:"npower-logo"})),m.a.createElement("br",null),m.a.createElement("form",{onSubmit:this.onSubmit,id:"sign-in-form",className:"aut sign-in-form box-shad-padded bg-white"},m.a.createElement("label",{class:"form-label tx-c fw-bold mb-3 capitalize",for:"sign-up-form"},"Forgot Password"),m.a.createElement("p",{class:"instruction"},"Please enter the same email address you used upon signup."),m.a.createElement("div",{className:"email input"},m.a.createElement("label",{for:""},"email address"),m.a.createElement("svg",{width:"20",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#999",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M4.8 5H19.2C20.19 5 21 5.81 21 6.8V17.6C21 18.59 20.19 19.4 19.2 19.4H4.8C3.81 19.4 3 18.59 3 17.6V6.8C3 5.81 3.81 5 4.8 5Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),m.a.createElement("path",{d:"M21 6.80005L12 13.1L3 6.80005","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),m.a.createElement("input",{type:"email",id:"email",name:"email",pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",value:t.email,onChange:this.onChange}),a&&a.email?m.a.createElement("p",{className:"warning"},m.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7 7.9996H9V3.9996H7V7.9996ZM7 11.9996H9V9.9996H7V11.9996Z",fill:"#E7040F"})),m.a.createElement("span",{className:"co-warning nanotext"},a.email)):""),n?m.a.createElement("span",{onClick:function(){return alert("Processing please wait...")},className:"submit mb-1 mt-3 d-flx al-i-c j-c-c"},m.a.createElement("span",{className:"ml-h"},m.a.createElement("i",{className:"fa fa-spinner fa-spin"})," please wait...")):m.a.createElement("button",{className:"submit mb-1 mt-3 d-flx al-i-c j-c-c"},m.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M4.16667 9.16667H15.8333C16.7538 9.16667 17.5 9.91286 17.5 10.8333V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V10.8333C2.5 9.91286 3.24619 9.16667 4.16667 9.16667Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),m.a.createElement("path",{d:"M14.1666 9.16667V5.83334C14.1677 4.80005 13.7847 3.80323 13.0921 3.03639C12.3996 2.26956 11.4468 1.78742 10.4187 1.68358C9.39064 1.57974 8.36067 1.86159 7.52873 2.47443C6.69679 3.08728 6.12224 3.98738 5.91662 5.00001","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),m.a.createElement("span",{className:"ml-h"},"Reset Password")),m.a.createElement("p",{class:"option"},"Have an account? ",m.a.createElement(f.b,{className:"capitalize tx-r nanofont mt-h",to:"/"},"Sign In")))),m.a.createElement("footer",{className:"aut-footer d-flx al-i-c"},m.a.createElement("p",{className:"co-lightgray"},"\xa9 Copyright 2019 Softcom Limited. All rights reserved")))));return m.a.createElement("div",null,r)}}]),t}(c.Component);var v={fetchCurrentUserRequest:d.c,submit:d.e,clearMessage:b.a};t.default=Object(u.b)((function(e){return{error:e.auth.error,message:e.message}}),v)(E)}}]);
//# sourceMappingURL=7.312d0880.chunk.js.map