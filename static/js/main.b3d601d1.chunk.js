(this.webpackJsonpprojekt02=this.webpackJsonpprojekt02||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),l=n(6),o=(n(16),n(1)),i=n(5),u=function(e){var t=e.game,n=e.answer,a=e.select;return t.isChosen?n===t.chosen?n===t.correctAnswer?r.a.createElement("div",{className:"correctAnswer"},r.a.createElement("p",null,n)):r.a.createElement("div",{className:"incorrectAnswer"},r.a.createElement("p",null,n)):n===t.correctAnswer?r.a.createElement("div",{className:"correctAnswer"},r.a.createElement("p",null,n)):r.a.createElement("div",{className:"otherAnswer"},r.a.createElement("p",null,n)):r.a.createElement("div",{className:"Answer",onClick:function(e){a(n)}},r.a.createElement("p",null,n))},m=function(e){var t=e.game,n=e.setGame,a=function(e){e===t.correctAnswer?n({question:t.question,answers:t.answers,correctAnswer:t.correctAnswer,chosen:e,isChosen:!0,score:t.score+1,round:t.round,id:t.id}):n({question:t.question,answers:t.answers,correctAnswer:t.correctAnswer,chosen:e,isChosen:!0,score:t.score,round:t.round,id:t.id})};return r.a.createElement("div",{className:"AnswerList"},t.answers.map((function(e){return r.a.createElement(u,{game:t,key:e,answer:e,select:a})})))},d=function(e){var t=e.game;return r.a.createElement("div",{className:"Question"},r.a.createElement("p",null,t.question))},E=function(){return r.a.createElement("div",{id:"cube--background"},r.a.createElement("div",{id:"cube"},r.a.createElement("div",{className:"wall cube--front"},"M",r.a.createElement("sup",null,"H")),r.a.createElement("div",{className:"wall cube--back"},"M",r.a.createElement("sup",null,"H")),r.a.createElement("div",{className:"wall cube--top"}," ","M",r.a.createElement("sup",null,"H")),r.a.createElement("div",{className:"wall cube--bottom"},"M",r.a.createElement("sup",null,"H")),r.a.createElement("div",{className:"wall cube--left"},"M",r.a.createElement("sup",null,"H")),r.a.createElement("div",{className:"wall cube--right"},"M",r.a.createElement("sup",null,"H"))))},w=function(e){var t=e.category,n=e.game,c=e.setGame;Object(a.useEffect)((function(){switch(t){case"Football":fetch("https://my-json-server.typicode.com/wilk6/basketball/db").then((function(e){return e.json()})).then((function(e){c({question:e.quiz[n.id].question,correctAnswer:e.quiz[n.id].correctAnswer,answers:[].concat(Object(i.a)(e.quiz[n.id].incorrectAnswer),[e.quiz[n.id].correctAnswer]).sort(),chosen:n.chosen,isChosen:n.isChosen,score:n.score,round:e.quiz[n.id].round,id:n.id})}));break;case"Volleyball":fetch("https://my-json-server.typicode.com/wilk6/basketball/db").then((function(e){return e.json()})).then((function(e){c({question:e.quiz[n.id].question,correctAnswer:e.quiz[n.id].correctAnswer,answers:[].concat(Object(i.a)(e.quiz[n.id].incorrectAnswer),[e.quiz[n.id].correctAnswer]).sort(),chosen:n.chosen,isChosen:n.isChosen,score:n.score,round:e.quiz[n.id].round,id:n.id})}));break;case"Basketball":fetch("https://my-json-server.typicode.com/wilk6/basketball/db").then((function(e){return e.json()})).then((function(e){c({question:e.quiz[n.id].question,correctAnswer:e.quiz[n.id].correctAnswer,answers:[].concat(Object(i.a)(e.quiz[n.id].incorrectAnswer),[e.quiz[n.id].correctAnswer]).sort(),chosen:n.chosen,isChosen:n.isChosen,score:n.score,round:e.quiz[n.id].round,id:n.id})}))}}),[t,n.id]);return r.a.createElement("div",{className:"QuizPage"},r.a.createElement("div",{className:"Title"},r.a.createElement("article",null,r.a.createElement("p",null,"Round: "),r.a.createElement("span",null,r.a.createElement("p",null,n.round,"/10"))),r.a.createElement(E,null),r.a.createElement("article",null,r.a.createElement("p",null,"Score: "),r.a.createElement("span",null,r.a.createElement("p",null,n.score,"/10")))),r.a.createElement(d,{game:n}),r.a.createElement(m,{game:n,setGame:c}),10===n.round?r.a.createElement("button",null,r.a.createElement(o.a,{to:"/endPage"},"End game ")):r.a.createElement("button",{onClick:function(){!0===n.isChosen&&n.id<9&&c({question:n.question,answers:n.answers,correctAnswer:n.correctAnswer,chosen:"",isChosen:!1,score:n.score,round:n.round,id:n.id+1})}},"Next Question"))},h=function(e){e.category;var t=e.setCategory;return r.a.createElement("div",{className:"StartPage"},r.a.createElement("div",null,r.a.createElement("h1",null,"Quiz App"),r.a.createElement("button",null,r.a.createElement(o.a,{to:"/quiz"},"Play")),r.a.createElement("p",null,"Kategoria:"),r.a.createElement("select",{onChange:function(e){t(e.target.value)}},["Football","Volleyball","Basketball"].map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))))},p=function(e){var t=e.game,n=e.setGame;return r.a.createElement("div",{className:"EndPage"},r.a.createElement("div",null,r.a.createElement("h1",null,"Gratulacje ;)"),r.a.createElement("p",null,"Tw\xf3j wynik: ",t.score),r.a.createElement("button",null,r.a.createElement(o.a,{onClick:function(){n({question:t.question,answers:t.answers,correctAnswer:t.correctAnswer,chosen:t.chosen,isChosen:!1,score:0,round:1,id:0})},to:"/projekt02"},"Play again"))))},b=function(){var e=Object(a.useState)("Football"),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({question:"",answers:[],correctAnswer:"",chosen:"",isChosen:!1,score:0,round:"",id:0}),i=Object(l.a)(s,2),u=i[0],m=i[1];return r.a.createElement(o.b,{className:"container"},r.a.createElement(h,{path:"/projekt02",setCategory:c,category:n}),r.a.createElement(w,{path:"/quiz",category:n,game:u,setGame:m}),r.a.createElement(p,{game:u,setGame:m,path:"/endPage"}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b3d601d1.chunk.js.map