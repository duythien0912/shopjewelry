webpackJsonp([7],{1007:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l});var n=a(342),r=function(e){n.q.success(e||"Add to cart success")},l=function(e){n.q.warning(e||"Warning")}},1026:function(e,t,a){e.exports=a.p+"static/media/x.875ebac6.svg"},962:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),l=a(342),o=a(193),c=a(1007),i=a(970),s=a(1026),m=a.n(s),u=l.j.Content,p=r.a.createElement(l.l,{type:"flex",justify:"center",align:"middle",style:{marginBottom:"3px"}},r.a.createElement(l.e,{span:24,style:{border:"1px solid #000"}},r.a.createElement("div",{style:{margin:"9px",display:"block",textAlign:"center",borderBottom:"1px solid #000"}},r.a.createElement("img",{style:{width:"12vmax",display:"inline-block"},alt:"imageItem",src:"http://res.cloudinary.com/dilijjjnt/image/upload/v1527306593/zboezqs0xborp8t9yqaj.jpg"}),r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle",padding:"4vmax",letterSpacing:".4px",fontSize:"11px",textTransform:"none",textAlign:"left",minWidth:"36vmax"}},r.a.createElement("div",{class:"title-pre"},"Ring 1"),r.a.createElement("div",{class:"price-pre"},"1.799.000 vn\u0111 "),r.a.createElement("div",{class:"content-pre"},"M\xc0U:\xa0Pink"),r.a.createElement("div",null,"Size: Free size"),r.a.createElement("div",{style:{color:"red"}}," x1")),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("img",{src:m.a,alt:m.a,onClick:function(){return Object(c.a)("Remove item success")}}))))),d=function(){return r.a.createElement("div",null,r.a.createElement(l.j,{style:{minHeight:"100vh"}},r.a.createElement(i.a,null),r.a.createElement(l.j,{style:{padding:"2vw"}},r.a.createElement(u,{style:{padding:"1em",background:"#ffffff",borderRadius:"3px",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}},p,p,p,r.a.createElement(l.l,{type:"flex",justify:"center",align:"bottom",style:{marginBottom:"3vmax"}},r.a.createElement(l.e,{span:12},r.a.createElement(o.b,{to:"/shop"},r.a.createElement(l.b,{className:"btnCheckOut btnPrimaryCart"},"Continue Shopping"))),r.a.createElement(l.e,{span:12,style:{marginTop:"3vmax"}},r.a.createElement("table",{style:{width:"100%"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{class:"oderToalTh order-items-total"},"T\u1ed5ng s\u1ed1 s\u1ea3n ph\u1ea9m:"),r.a.createElement("td",{class:"oderToal order-items-total"},r.a.createElement("p",{style:{margin:0},class:"item-text-total"},"1,799,000 VND"))),r.a.createElement("tr",null,r.a.createElement("th",{class:"oderToalTh order-delivery-costs"},"Chi ph\xed giao h\xe0ng \u01b0\u1edbc t\xednh:"),r.a.createElement("td",{class:"oderToal order-delivery-costs"},"* VND")),r.a.createElement("tr",null,r.a.createElement("th",{class:"oderToalTh order-total"},"T\u1ed5ng:"),r.a.createElement("td",{class:"order-total order-total-text Floatright"},"1,799,000 VND")),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2",class:"oderToal order-vat-costs"},r.a.createElement("div",null,"* Bao g\u1ed3m thu\u1ebf VAT"))))),r.a.createElement(o.b,{to:"/login"},r.a.createElement(l.b,{className:"btnPrimaryB Floatright btnCheckOut",onClick:function(){return Object(c.b)("You need login fist to buy")}},"Next"))))))))};t.default=d},970:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(0),c=a.n(o),i=a(342),s=a(193),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=function(e){function t(){var e,a,l,o;n(this,t);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return a=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l.state={current:"mail",token:!1,tokenRole:""},l.componentDidMount=function(){var e=localStorage.getItem("token");e&&l.setState({token:!0,tokenRole:e.split(" ")[1]})},l.handleClick=function(e){console.log("click ",e),l.setState({current:e.key})},l.onClickLogOut=function(){localStorage.removeItem("token")},o=a,r(l,o)}return l(t,e),m(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{position:"relative",width:"100%",zIndex:"10",backgroundColor:"white"}},c.a.createElement(i.l,{type:"flex",justify:"center",align:"middle"},c.a.createElement("h1",{className:"textLogo"},"JELERY SHOP")),c.a.createElement(i.k,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",style:{width:"fit-content",margin:"auto"}},c.a.createElement(i.k.Item,{key:"home"},c.a.createElement(s.b,{to:"/"},c.a.createElement(i.h,{type:"home"}),"Home")),c.a.createElement(i.k.Item,{key:"shop"},c.a.createElement(s.b,{to:"/shop"},c.a.createElement(i.h,{type:"shop"}),"SHOP")),!0===this.state.token?c.a.createElement(i.k.Item,{key:"app"},"user"===this.state.tokenRole?c.a.createElement(s.b,{to:"/user"},c.a.createElement(i.h,{type:"user"}),"My Cart"):null,"admin"===this.state.tokenRole?c.a.createElement(s.b,{to:"/dashboard"},c.a.createElement(i.h,{type:"dashboard"}),"Dash Board"):null):"",!0===this.state.token?"":c.a.createElement(i.k.Item,{key:"Sign_In",style:{}},c.a.createElement(s.b,{to:"/login"},c.a.createElement(i.b,null,c.a.createElement(i.h,{type:"login"})," Login"))),!0===this.state.token?c.a.createElement(i.k.Item,{key:"Log_out",style:{}},c.a.createElement("a",{href:"/",onClick:this.onClickLogOut},c.a.createElement(i.b,{type:"primary"},"Logout"))):c.a.createElement(i.k.Item,{key:"Sign_up",style:{}},c.a.createElement(s.b,{to:"/signup"},c.a.createElement(i.b,{type:"primary"},"Sign up"))),c.a.createElement(i.k.Item,{key:"shopping-cart"},c.a.createElement(s.b,{to:"/cart"},c.a.createElement(i.h,{type:"shopping-cart"}),"Shopping Cart"))))}}]),t}(c.a.Component);t.a=u}});
//# sourceMappingURL=7.a05f53a4.chunk.js.map