(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(74)},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),r=a.n(o),i=(a(30),a(31),a(3)),l=a.n(i),s=a(7),u=a(4),m=(a(33),a(20)),d=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"});d.get("/movie/top_rated");var v=d,f="f34794f099b698eddd79195fa13eecab",p={fetchTrending:"/trending/all/week?api_key=".concat(f,"&language=en-US"),fetchNetflixOriginals:"discover/tv?api_key=".concat(f,"&with_networks=213"),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(f,"&language=en-US}"),fetchActionMovies:"/discover/movie?api_key=".concat(f,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(f,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(f,"&with_genres=27"),fetchRomanMovies:"/discover/movie?api_key=".concat(f,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(f,"&with_genres=99")};function h(){var e,t,a=Object(n.useState)([]),o=Object(u.a)(a,2),r=o[0],i=o[1];return Object(n.useEffect)(function(){function e(){return(e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(p.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||r.original_name),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My list")),c.a.createElement("h1",{className:"banner__description"},(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner__fadeBottom"}))}a(51);function g(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){return window.addEventListener("scroll",function(){window.scrollY>100?o(!0):o(!1)}),function(){window.addEventListener("scroll")}},[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},c.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",alt:"Netflix logo"}),c.a.createElement("img",{className:"nav__avater",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Avater logo"}))}var b=a(21),_=a(24),w=a.n(_),E=(a(73),"https://image.tmdb.org/t/p/original");function k(e){var t=e.title,a=e.fetchURL,o=e.isLargeRow,r=Object(n.useState)([]),i=Object(u.a)(r,2),m=i[0],d=i[1],f=Object(n.useState)(""),p=Object(u.a)(f,2),h=p[0],g=p[1];Object(n.useEffect)(function(){function e(){return(e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(a);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[a]);return c.a.createElement("div",{className:"row"},c.a.createElement("h1",null,t),c.a.createElement("div",{className:"row_posters"},m.map(function(e){return c.a.createElement("img",{onClick:function(){return function(e){h?g(""):w()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)).then(function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))}).catch(function(e){return console.log(e)})}(e)},className:"row_poster ".concat(o&&"row__posterLarge"),src:"".concat(E).concat(o?e.poster_path:e.backdrop_path),alt:e.name})})),c.a.createElement("div",{style:{padding:"40px"}},h&&c.a.createElement(b.a,{videoId:h,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})))}var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(h,null),c.a.createElement(k,{title:"NETFLIX ORGINALS",fetchURL:p.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(k,{title:"Trending Now",fetchURL:p.fetchTrending}),c.a.createElement(k,{title:"Top Rated",fetchURL:p.fetchTopRatedMovies}),c.a.createElement(k,{title:"Action Movies",fetchURL:p.fetchActionMovies}),c.a.createElement(k,{title:"Comedy Movies",fetchURL:p.fetchComedyMovies}),c.a.createElement(k,{title:"Horror Movies",fetchURL:p.fetchHorrorMovies}),c.a.createElement(k,{title:"Romance Movies",fetchURL:p.fetchRomanMovies}),c.a.createElement(k,{title:"Documantaries",fetchURL:p.fetchDocumentaries}))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.2762ffcb.chunk.js.map