(this["webpackJsonpcalc-vacation-and-health-sub"]=this["webpackJsonpcalc-vacation-and-health-sub"]||[]).push([[0],{66:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(12),i=t.n(n),l=t(26),c=t(27),u=t(13),h=t(30),o=t(29),d=t(28),D=t.n(d),b=t(4),f=function(e){Object(h.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={startDate:null,dayOfYear:null,healtCareSubThisYear:0,vacationDaysNextPeriod:0,vacationDaysThisPeriod:0,message:null},s.onDateChange=s.onDateChange.bind(Object(u.a)(s)),s.defaultNumberOfPaidVacationDays=25,s}return Object(c.a)(t,[{key:"isLeapYear",value:function(e){return e%400===0||e%100!==0&&e%4===0}},{key:"daysOfAYear",value:function(e){return this.isLeapYear(e)?366:365}},{key:"calculateDayOfYear",value:function(e){return Math.ceil((e-new Date(e.getFullYear(),0,1))/864e5)}},{key:"calculateHealthCareSub",value:function(e){var a=this.calculateDayOfYear(e);this.setState({dayOfYear:a});var t=this.daysOfAYear(e)-a;this.setState({healtCareSubThisYear:Math.round(t/this.daysOfAYear(e)*5e3),message:"Baserat p\xe5 antal dagar du kommer att jobba i \xe5r."})}},{key:"calculateNumberOfVacationDays",value:function(e,a){var t=Math.ceil((e-a)/864e5),s=this.daysOfAYear(a.getFullYear()+1),r=s-t+1,n=Math.ceil(r*this.defaultNumberOfPaidVacationDays/s);return n<=0?0:n}},{key:"calculateNumberOfVacationDaysNextPeriod",value:function(e){var a=new Date((new Date).getFullYear()-1,3,1);(new Date).getMonth()>=3&&(a=new Date((new Date).getFullYear(),3,1)),e<a?this.setState({vacationDaysNextPeriod:25}):this.setState({vacationDaysNextPeriod:this.calculateNumberOfVacationDays(e,a)})}},{key:"calculateNumberOfVacationDaysThisPeriod",value:function(e){var a=new Date((new Date).getFullYear()-2,3,1);(new Date).getMonth()>=3&&(a=new Date((new Date).getFullYear()-1,3,1)),e<a?this.setState({vacationDaysThisPeriod:25}):this.setState({vacationDaysThisPeriod:this.calculateNumberOfVacationDays(e,a)})}},{key:"onDateChange",value:function(e){this.setState({startDate:e}),e&&(e.getFullYear()<(new Date).getFullYear()?this.setState({healtCareSubThisYear:5e3,message:"Eftersom du b\xf6rjade f\xf6rra \xe5ret s\xe5 har du fullt friskv\xe5rdsbidrag i \xe5r."}):(this.calculateHealthCareSub(e),this.setState({message:null})),this.calculateNumberOfVacationDaysNextPeriod(e),this.calculateNumberOfVacationDaysThisPeriod(e))}},{key:"renderMessage",value:function(){if(this.state.message)return Object(b.jsx)("h5",{className:"ui info message",children:this.state.message})}},{key:"render",value:function(){function e(){var e=new Date((new Date).getFullYear(),3,1);return(new Date).getMonth()>=3&&(e=new Date((new Date).getFullYear()+1,3,1)),e.getFullYear()}function a(){var e=new Date((new Date).getFullYear()-1,3,1);return(new Date).getMonth()>=3&&(e=new Date((new Date).getFullYear(),3,1)),e.getFullYear()}return Object(b.jsxs)("div",{className:"ui container",children:[Object(b.jsx)("h1",{className:"ui header",children:"Friskv\xe5rdsbidragsutr\xe4knare"}),Object(b.jsx)("div",{className:"sub header",children:"V\xe4lj ett startdatum f\xf6r att r\xe4kna ut hur mycket Friskv\xe5rdsbidrag du \xe4r ber\xe4ttigad till i \xe5r."}),Object(b.jsx)("div",{style:{paddingTop:"30px"},children:Object(b.jsx)(D.a,{onChange:this.onDateChange,value:this.state.startDate})}),Object(b.jsxs)("h2",{className:"ui icon header",children:[Object(b.jsxs)("div",{className:"content",children:["Friskv\xe5rdsbidrag: ",this.state.healtCareSubThisYear]}),Object(b.jsxs)("div",{className:"content",children:["Semester period 1/4/",a(),"-31/3/",a()+1,": ",this.state.vacationDaysThisPeriod]}),Object(b.jsxs)("div",{className:"content",children:["Semester period 1/4/",e(),"-31/3/",e()+1,": ",this.state.vacationDaysNextPeriod]})]}),this.renderMessage()]})}}]),t}(r.a.Component);i.a.render(Object(b.jsx)(f,{}),document.querySelector("#root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f50f40bd.chunk.js.map