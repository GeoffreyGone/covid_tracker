(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(12),a(1)),i=a(2),s=a(4),u=a(3),m=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{class:"title"},l.a.createElement("span",null,"P"),"aSE ",l.a.createElement("br",null),"covid tracker")}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gtla6-covidtracker.herokuapp.com/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:t})}))}},{key:"render",value:function(){var e=this.state.data;return console.log(typeof e),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"global-data-div"},l.a.createElement("ul",{className:"global-data"},l.a.createElement("li",null,"Total Cases",l.a.createElement("p",null,e.cases)),l.a.createElement("li",null,"Total Active",l.a.createElement("p",null,e.active)),l.a.createElement("li",null,"Recoveries",l.a.createElement("p",null,e.recovered)),l.a.createElement("li",null,"Deaths",l.a.createElement("p",null,e.deaths)))))}}]),a}(n.Component);function p(){return fetch("https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true").then((function(e){return e.json()})).then((function(e){console.log(e),function(e){for(var t=document.getElementById("tdata"),a=0;a<e.length;a++){var n="<tr>\n                <td>".concat(e[a].country,"</td>\n                <td>").concat(e[a].cases,"</td>\n                <td>").concat(e[a].active,"</td>\n                <td>").concat(e[a].recovered,"</td>\n                <td>").concat(e[a].deaths,"</td>\n              </tr>");t.innerHTML+=n}}(e)})),l.a.createElement("div",{class:"country-table"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Countries"),l.a.createElement("th",null,"Total Cases"),l.a.createElement("th",null,"Active Cases"),l.a.createElement("th",null,"Recoveries"),l.a.createElement("th",null,"Deaths")),l.a.createElement("tbody",{id:"tdata",class:"stripped-table"})))}function h(){return l.a.createElement("div",{class:"aside-here"},l.a.createElement("aside",{class:"sidenotes"},l.a.createElement("ul",null,l.a.createElement("li",{class:"healthtips"},l.a.createElement("h2",null,"Health Tips"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consequuntur expedita totam quidem unde molestias sapiente qui quos consequatur velit facilis repellat exercitationem obcaecati suscipit ex delectus nemo sit inventore, non aperiam voluptatem neque fuga? Corporis pariatur facere illum aperiam ullam ad inventore, ex dolor mollitia esse non corrupti minima!")),l.a.createElement("li",{class:"news-update"},l.a.createElement("h2",null,"News Updates"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consequuntur expedita totam quidem unde molestias sapiente qui quos consequatur velit facilis repellat exercitationem obcaecati suscipit ex delectus nemo sit inventore, non aperiam voluptatem neque fuga? Corporis pariatur facere illum aperiam ullam ad inventore, ex dolor mollitia esse non corrupti minima!")))))}var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e311510b.chunk.js.map