(this.webpackJsonpperfect_tic_tac_toe=this.webpackJsonpperfect_tic_tac_toe||[]).push([[0],{1:function(e,t,a){e.exports={playerSelectcontainer:"TicTacToe_playerSelectcontainer__20X7t",playerSelect:"TicTacToe_playerSelect__1HDGh",container:"TicTacToe_container__2RXvi",row:"TicTacToe_row__3s87j",box:"TicTacToe_box__1Z_i6",middleRow:"TicTacToe_middleRow__391ui",middleRow2:"TicTacToe_middleRow2__1aJE6",middleRow4:"TicTacToe_middleRow4__27PAI",middleRow6:"TicTacToe_middleRow6__1QohY",middleRow8:"TicTacToe_middleRow8__3-7v9",centerBox:"TicTacToe_centerBox__37TTl"}},14:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(7),i=a.n(o),r=a(2),l=a(4),u=function(e,t,a){return e===t&&t===a&&0!==e?e:0},s=function(e){return u(e[0],e[1],e[2])?e[0]:u(e[3],e[4],e[5])?e[3]:u(e[6],e[7],e[8])?e[6]:u(e[0],e[3],e[6])?e[0]:u(e[1],e[4],e[7])?e[1]:u(e[2],e[5],e[8])?e[2]:u(e[0],e[4],e[8])?e[0]:u(e[2],e[4],e[6])?e[2]:0},m=function e(t,a,c){var n=s(t);if(2===n)return 10-a;if(1===n)return a-10;if(!function(e){for(var t=0;t<9;t++)if(0===e[t])return!0;return!1}(t))return 0;if(c){for(var o=-1e8,i=0;i<9;i++)if(0===t[i]){t[i]=2;var l=e(Object(r.a)(t),a+1,!1);l>o&&(o=l),t[i]=0}return o}for(var u=1e7,m=0;m<9;m++)if(0===t[m]){t[m]=1;var d=e(Object(r.a)(t),a+1,!0);t[m]=0,d<u&&(u=d)}return u},d=function(e,t){if("O"===t)return function(e){for(var t=-1e7,a=-1,c=0;c<e.length;c++)if(0===e[c]){e[c]=2;var n=Object(r.a)(e),o=m(n,0,!1);console.log("for ----\x3e",c,"       ",o),e[c]=0,o>t&&(t=o,a=c)}return a}(Object(r.a)(e))},f=a(1),_=a.n(f),T=function(e){return 0===e?"":1===e?"X":"O"},v=function(){var e=Object(c.useState)([0,0,0,0,0,0,0,0,0]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),m=u[0],f=u[1],v=Object(c.useState)(0),w=Object(l.a)(v,2),b=w[0],E=w[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),x=p[0],N=p[1],j=function(e){""===m&&(f(e),console.log(e))},R=function(e){if(0===a[e]&&!0!==x&&""!==m){if("X"===m){var t=Object(r.a)(a);t[e]=1,o(t)}f("X"===m?"O":"X"),E(b+1);var c=s(a);if(0!==c)N(!0),alert("".concat(1===c?"You Win":"You Lost")),setTimeout((function(){window.location.reload()}),1e3);else b>=8&&(alert("Match Draw"),setTimeout((function(){window.location.reload()}),1e3))}};return Object(c.useEffect)((function(){"O"===m&&!1===x&&setTimeout((function(){var e=d(a,m),t=Object(r.a)(a);t[e]=2,o(t),f("X"===m?"O":"X"),E(b+1);var c=s(a);0!==c?(N(!0),alert("".concat(1===c?"You Win":"You Lost")),setTimeout((function(){window.location.reload()}),1500)):b>=8&&(alert("Match Draw"),setTimeout((function(){window.location.reload()}),1500))}),100)}),[m]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:_.a.container},""===m?n.a.createElement("div",{className:_.a.playerSelectcontainer},n.a.createElement("div",{className:_.a.playerSelect,onClick:function(){j("X")}},"I will start first"),n.a.createElement("div",{className:_.a.playerSelect,onClick:function(){j("O")}},"Pc will start first")):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:_.a.row},n.a.createElement("div",{className:_.a.box,onClick:function(){R(0)}},T(a[0])),n.a.createElement("div",{className:"".concat(_.a.middleRow2," ").concat(_.a.box),onClick:function(){R(1)}},T(a[1])),n.a.createElement("div",{className:_.a.box,onClick:function(){R(2)}},T(a[2]))),n.a.createElement("div",{className:_.a.row},n.a.createElement("div",{className:"".concat(_.a.middleRow4," ").concat(_.a.box),onClick:function(){R(3)}},T(a[3])),n.a.createElement("div",{className:"".concat(_.a.box," ").concat(_.a.centerBox),onClick:function(){R(4)}},T(a[4])),n.a.createElement("div",{className:"".concat(_.a.middleRow6," ").concat(_.a.box),onClick:function(){R(5)}},T(a[5]))),n.a.createElement("div",{className:_.a.row},n.a.createElement("div",{className:_.a.box,onClick:function(){R(6)}},T(a[6])),n.a.createElement("div",{className:"".concat(_.a.middleRow8," ").concat(_.a.box),onClick:function(){R(7)}},T(a[7])),n.a.createElement("div",{className:_.a.box,onClick:function(){R(8)}},T(a[8]))))))},w=a(8),b=a.n(w),E=function(){return n.a.createElement("div",{className:b.a.body},n.a.createElement(v,null))};i.a.render(n.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports={body:"App_body__ZTvxg"}},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.24998e02.chunk.js.map