(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.c82fe072.svg"},function(e,t,a){e.exports=a.p+"static/media/title.432b1606.svg"},function(e,t,a){e.exports=a.p+"static/media/plane.3e607416.svg"},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),r=a.n(c),i=(a(18),a(1)),o=a(2),l=a(4),p=a(3),u=a(5),m=a(9),v=a.n(m),d=(a(19),a(20),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"filters"},s.a.createElement("h2",null,"\u0412\u0430\u043b\u044e\u0442\u0430"),s.a.createElement("ul",{className:"lang"},this.props.curMenu.map(function(t){return s.a.createElement("li",{className:e.props.activeCurrency===t?"active":null,onClick:e.props.changeCur},t)})),s.a.createElement("h3",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),s.a.createElement("div",{className:"filters-container"},this.props.stops.map(function(t){return s.a.createElement("div",{className:"transplants-filter"},s.a.createElement("input",{type:"checkbox",id:t.id,className:"all"==e.props.stateStops.stop&&1==e.props.stateStops.active?"active":"",onClick:e.props.eventClick}),s.a.createElement("label",{htmlFor:t.id},t.stop))})))}}]),t}(n.Component)),h=a(6),f=a(10),E=a.n(f),g=a(11),k=a.n(g),N=(a(21),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).changeCur=function(e){return"RUB"===e?"\u20bd":"USD"===e?s.a.createElement("span",null,"$"):s.a.createElement("span",null,"\u20ac")},a.calcCur=function(e,t){switch(e){case"RUB":return t;case"USD":return(.016*t).toFixed(1);case"EUR":return(.014*t).toFixed(1);default:return t}},a.state={tickets:[]},a.newList=[],a.filterTickets=a.filterTickets.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"filterTickets",value:function(e){var t=this,a=e;return"all"==this.props.stops.stop&&this.props.stops.active?a:(a.map(function(e){e.stops==t.props.stops.stop&&t.props.stops.active?(a=a.filter(function(e){return e.stops==t.props.stops.stop&&t.props.stops.active}),t.newList.push(e)):e.stops!=t.props.stops.stop||t.props.stops.active||(t.newList=t.newList.filter(function(t){return t.stops!=e.stops}))}),this.newList)}},{key:"componentDidMount",value:function(){var e=this;fetch("tickets.json").then(function(e){return e.json()}).then(function(t){e.setState({tickets:t.tickets})}).catch(function(e){return console.log("error",e)})}},{key:"render",value:function(){var e=this,t=this.state.tickets;return 0==this.filterTickets(t).length?s.a.createElement("div",{className:"tickets"},s.a.createElement("h1",null,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e")):s.a.createElement("div",{className:"tickets"},this.filterTickets(t).map(function(t){var a=t.departure_time,n=t.arrival_date,c=t.departure_date,r=t.origin,i=t.origin_name,o=t.arrival_time,l=t.destination,p=t.destination_name,u=t.price,m=t.stops;return s.a.createElement("div",{className:"ticket"},s.a.createElement("div",{className:"side-buy"},s.a.createElement("img",{src:E.a,alt:"title"}),s.a.createElement("div",{className:"btn-buy"},s.a.createElement("span",{className:"price"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",e.calcCur(e.props.currency,u)," ",e.changeCur(e.props.currency)))),s.a.createElement("div",{className:"transp-side"},s.a.createElement("div",{className:"transp-from"},s.a.createElement("div",{className:"time"},a),s.a.createElement("div",{className:"sity"},r,",",i),s.a.createElement("div",{className:"date"},c)),s.a.createElement("div",{className:"amount-transp"},s.a.createElement("span",null," ",0===m?"\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===m?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043aa":m+" \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"),s.a.createElement("div",{className:"underline"},s.a.createElement("img",{className:"plane",src:k.a,alt:"plane"}))),s.a.createElement("div",{className:"transp-to"},s.a.createElement("div",{className:"time"},o),s.a.createElement("div",{className:"sity"},p,",",l),s.a.createElement("div",{className:"date"},n))))}))}}]),t}(n.Component)),b=["RUB","USD","EUR"],y=[{stop:"\u0412\u0441\u0435",id:"all",active:!0},{stop:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",id:"0",active:!1},{stop:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",id:"1",active:!1},{stop:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:"2",active:!1},{stop:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:"3",active:!1}],C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).changeCur=function(e){a.setState({activeCurrency:e.target.innerText})},a.changeStops=function(e){a.setState({stops:{stop:e.target.id,active:e.target.checked}})},a.state={activeCurrency:"RUB",stops:{stop:"all",active:!0}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"})),s.a.createElement("div",{className:"container"},s.a.createElement(d,{curMenu:b,stops:y,stateStops:this.state.stops,activeCurrency:this.state.activeCurrency,changeCur:this.changeCur,eventClick:this.changeStops}),s.a.createElement(N,{currency:this.state.activeCurrency,stops:this.state.stops})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.e6980eb0.chunk.js.map