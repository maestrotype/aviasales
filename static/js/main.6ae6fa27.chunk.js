(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.c82fe072.svg"},function(e,t,a){e.exports=a.p+"static/media/title.432b1606.svg"},function(e,t,a){e.exports=a.p+"static/media/plane.3e607416.svg"},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),i=(a(19),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),p=a(10),d=a.n(p),v=(a(20),a(21),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"filters"},s.a.createElement("h2",null,"\u0412\u0430\u043b\u044e\u0442\u0430"),s.a.createElement("ul",{className:"lang"},this.props.curMenu.map(function(t){return s.a.createElement("li",{className:e.props.activeCurrency===t?"active":null,onClick:e.props.changeCur},t)})),s.a.createElement("h3",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),s.a.createElement("div",{className:"filters-container"},this.props.stops.map(function(t){return s.a.createElement("div",{className:"transplants-filter"},s.a.createElement("input",{type:"checkbox",id:t.id,ref:t.id,className:"ckeckStops",onClick:e.props.eventClick}),s.a.createElement("label",{htmlFor:t.id},t.stop),s.a.createElement("a",{onClick:e.props.eventClick,"data-id":t.id,className:"hoverLink"},"\u0442\u043e\u043b\u044c\u043a\u043e"))})))}}]),t}(n.Component)),h=a(6),f=a(11),g=a.n(f),E=a(12),y=a.n(E),k=a(7),N=a.n(k),b=(a(22),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).changeCur=function(e){return"RUB"===e?"\u20bd":"USD"===e?s.a.createElement("span",null,"$"):s.a.createElement("span",null,"\u20ac")},a.calcCur=function(e,t){switch(e){case"RUB":return a.transformSum(t);case"USD":return(.016*t).toFixed(1);case"EUR":return(.014*t).toFixed(1);default:return t}},a.dateFormat=N.a.i18n={dayNames:["\u0412\u043e\u0441","\u041f\u043e\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0435\u0442","\u041f\u044f\u0442","\u0421\u0443\u0431","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["\u042f\u043d\u0432","\u0424\u0435\u0432","\u041c\u0430\u0440","\u0410\u043f\u0440","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433","\u0421\u0435\u043d","\u041e\u043a\u0442","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},a.state={tickets:[]},a.newList=[],a.filterTickets=a.filterTickets.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"filterTickets",value:function(e){var t=this,a=e;return"all"==this.props.stops.stop&&this.props.stops.active?a:(a.map(function(e){e.stops==t.props.stops.stop&&t.props.stops.active?(a=a.filter(function(e){return e.stops==t.props.stops.stop&&t.props.stops.active}),t.newList.push(e)):e.stops!=t.props.stops.stop||t.props.stops.active||(t.newList=t.newList.filter(function(t){return t.stops!=e.stops}))}),this.newList)}},{key:"componentDidMount",value:function(){var e=this;fetch("tickets.json").then(function(e){return e.json()}).then(function(t){e.setState({tickets:t.tickets})}).catch(function(e){return console.log("error",e)})}},{key:"transformSum",value:function(e){var t=e.toString();if(t.length>3)for(var a=t.length;t>=0;a--)if(a%3==0){var n=t.split("");n.splice(t.length-a,0," "),t=n.join("")}return t}},{key:"render",value:function(){var e=this,t=this.state.tickets;return this.updateList=this.filterTickets(t),0!==this.updateList.length?s.a.createElement("div",{className:"tickets"},this.updateList.map(function(t){var a=t.departure_time,n=t.arrival_date,r=t.departure_date,c=t.origin,i=t.origin_name,l=t.arrival_time,o=t.destination,m=t.destination_name,u=t.price,p=t.stops;return s.a.createElement("div",{className:"ticket"},s.a.createElement("div",{className:"side-buy"},s.a.createElement("img",{src:g.a,alt:"title"}),s.a.createElement("div",{className:"btn-buy"},s.a.createElement("span",{className:"price"},"\u041a\u0443\u043f\u0438\u0442\u044c")," ",s.a.createElement("br",null),s.a.createElement("span",{className:"price"}," \u0437\u0430 ",e.calcCur(e.props.currency,u)," ",e.changeCur(e.props.currency)))),s.a.createElement("div",{className:"transp-side"},s.a.createElement("div",{className:"transp-from"},s.a.createElement("div",{className:"time"},a),s.a.createElement("div",{className:"sity"},c,",",i),s.a.createElement("div",{className:"date"},N()(r,"d mmm, yyyy, ddd"))),s.a.createElement("div",{className:"amount-transp"},s.a.createElement("span",null," ",0===p?"\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===p?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043aa":p+" \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"),s.a.createElement("div",{className:"underline"},s.a.createElement("img",{className:"plane",src:y.a,alt:"plane"}))),s.a.createElement("div",{className:"transp-to"},s.a.createElement("div",{className:"time"},l),s.a.createElement("div",{className:"sity"},m,",",o),s.a.createElement("div",{className:"date"},N()(n,"d mmm, yyyy, ddd")))))})):s.a.createElement("div",{className:"tickets"},s.a.createElement("h1",null,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"))}}]),t}(n.Component)),C=["RUB","USD","EUR"],j=[{stop:"\u0412\u0441\u0435",id:"all",active:!0},{stop:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",id:"0",active:!1},{stop:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",id:"1",active:!1},{stop:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:"2",active:!1},{stop:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:"3",active:!1}],w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).changeCur=function(e){a.setState({activeCurrency:e.target.innerText})},a.changeStops=function(e){var t=document.getElementsByClassName("ckeckStops");if("hoverLink"==e.target.className){for(var n=0;n<t.length;n++)t[n].checked=!1;var s=e.target.getAttribute("data-id");document.getElementById(s).checked=!0,console.log("target",e.target.getAttribute("data-id"))}else if("all"!==e.target.id)document.getElementById("all").checked=!1;else if("all"==e.target.id)for(var r=0;r<t.length;r++)t[r].checked=!0;a.setState({stops:{stop:e.target.id,active:e.target.checked}})},a.state={activeCurrency:"RUB",stops:{stop:"all",active:!0}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"})),s.a.createElement("div",{className:"container"},s.a.createElement(v,{curMenu:C,stops:j,stateStops:this.state.stops,activeCurrency:this.state.activeCurrency,changeCur:this.changeCur,eventClick:this.changeStops,refId:this.ref}),s.a.createElement(b,{currency:this.state.activeCurrency,stops:this.state.stops})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.6ae6fa27.chunk.js.map