(this["webpackJsonpface-detect"]=this["webpackJsonpface-detect"]||[]).push([[0],[,,,function(e,t,c){},,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),i=c.n(a),d=(c(13),c(5)),r=c(6),l=c(8),o=c(7),j=(c(14),c(0)),h=function(e){return Object(j.jsxs)("div",{className:"credit",children:[Object(j.jsx)("span",{className:"title",children:"Created by"}),Object(j.jsx)("b",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/pritammajumder/",children:" Pritam Majumder"})})]})},m=(c(16),function(e){var t=e.placeholder,c=e.handleChange;return Object(j.jsx)("input",{type:"search",placeholder:t,onChange:c})}),b=(c(3),function(e){return Object(j.jsxs)("div",{className:"card-list-india",children:[e.covid.slice(0,1).map((function(t){return Object(j.jsxs)("div",{className:"card-container-india",children:[Object(j.jsxs)("h3",{children:["Covid-19 Cases",Object(j.jsx)("img",{alt:"India",src:"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png",className:"flag"})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{children:["Confirmed  ",Object(j.jsxs)("div",{className:"total-num",children:[(1*t.confirmed).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"newcase",children:" (+"+(1*e.india.dailyconfirmed).toLocaleString("en-IN")+")"})]})]}),Object(j.jsxs)("div",{children:["Recovered  ",Object(j.jsxs)("div",{className:"total-num",children:[(1*t.recovered).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"newcase",children:" (+"+(1*e.india.dailyrecovered).toLocaleString("en-IN")+")"})]})]}),Object(j.jsxs)("div",{children:["Deaths  ",Object(j.jsxs)("div",{className:"total-num",children:[(1*t.deaths).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"newcase",children:" (+"+(1*e.india.dailydeceased).toLocaleString("en-IN")+")"})]})]}),Object(j.jsxs)("div",{children:["Active  ",Object(j.jsx)("div",{className:"total-num",children:(1*t.active).toLocaleString("en-IN")})]})]})]},t.statecode)})),Object(j.jsxs)("div",{className:"card-container-india",children:[Object(j.jsxs)("h3",{children:["Vaccination",Object(j.jsx)("img",{alt:"India",src:"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png",className:"flag"})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{children:["At least 1 dose  ",Object(j.jsxs)("div",{className:"total-num",children:[(1*e.vaccine.firstdoseadministered).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"newcase",children:" ("+(e.vaccine.firstdoseadministered/13955700).toPrecision(3)+"%)"})]})]}),Object(j.jsxs)("div",{children:["Fully vaccinated  ",Object(j.jsxs)("div",{className:"total-num",children:[(1*e.vaccine.seconddoseadministered).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"newcase",children:" ("+(e.vaccine.seconddoseadministered/13955700).toPrecision(3)+"%)"})]})]})]}),Object(j.jsxs)("div",{children:["Samples tested  ",Object(j.jsxs)("div",{className:"total-num",children:[(1*e.vaccine.totalsamplestested).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"newcase",children:" (+"+(1*e.vaccine.samplereportedtoday).toLocaleString("en-IN")+")"})]})]})]},e.vaccine.aefi)]})}),v=function(e){return Object(j.jsxs)("div",{className:"card-list",children:[Object(j.jsx)("div",{className:"card-container sticky",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"p1",children:"State"}),Object(j.jsx)("span",{className:"p1",children:"Confirmed"}),Object(j.jsx)("span",{className:"p1",children:"Recovered"}),Object(j.jsx)("span",{className:"p1",children:"Deaths"}),Object(j.jsx)("span",{className:"p1",children:"Active"})]})}),e.covid.map((function(e){if("0"!==e.confirmed)return Object(j.jsx)("div",{className:"card-container",children:Object(j.jsx)("div",{children:"0"!==e.deltaconfirmed?Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"state-name",children:e.state}),Object(j.jsxs)("p",{children:[(1*e.confirmed).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"new-r-case",children:" (+"+(1*e.deltaconfirmed).toLocaleString("en-IN")+")"})]}),Object(j.jsxs)("p",{children:[(1*e.recovered).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"new-g-case",children:" (+"+(1*e.deltarecovered).toLocaleString("en-IN")+")"})]}),Object(j.jsxs)("p",{children:[(1*e.deaths).toLocaleString("en-IN"),Object(j.jsx)("span",{className:"new-r-case",children:" (+"+(1*e.deltadeaths).toLocaleString("en-IN")+")"})]}),Object(j.jsx)("p",{children:(1*e.active).toLocaleString("en-IN")})]}):Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"state-name",children:e.state}),Object(j.jsx)("p",{children:(1*e.confirmed).toLocaleString("en-IN")}),Object(j.jsx)("p",{children:(1*e.recovered).toLocaleString("en-IN")}),Object(j.jsx)("p",{children:(1*e.deaths).toLocaleString("en-IN")}),Object(j.jsx)("p",{children:(1*e.active).toLocaleString("en-IN")})]})})},e.statecode)}))]})},x=(c(17),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).handleChange=function(t){e.setState({input:t.target.value})},e.state={covid:[],covidindia:[],length:0,india:[],vaccine:[],input:""},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.covid19india.org/data.json").then((function(e){return e.json()})).then((function(t){e.setState({length:t.cases_time_series.length}),e.setState({india:t.cases_time_series[t.cases_time_series.length-1]}),e.setState({covid:t.statewise.slice(1,t.statewise.length).sort((function(e,t){return t.confirmed-e.confirmed}))}),e.setState({vaccine:t.tested[t.tested.length-2]}),e.setState({covidindia:t.statewise}),e.setState({dailycases:t.cases_time_series[e.state.length-1].dailyconfirmed})}))}},{key:"render",value:function(){var e=this.state.covid,t=this.state.input,c=e.filter((function(e){return e.state.toLowerCase().includes(t.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(b,{covid:this.state.covidindia,india:this.state.india,vaccine:this.state.vaccine,length:this.state.length}),Object(j.jsxs)("div",{className:"list",children:[Object(j.jsx)(m,{placeholder:"Search by state",handleChange:this.handleChange}),Object(j.jsx)(v,{covid:c})]})]})}}]),c}(s.Component)),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.2461b693.chunk.js.map