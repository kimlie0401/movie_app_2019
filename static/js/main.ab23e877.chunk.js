(window.webpackJsonpmovie_app_2019=window.webpackJsonpmovie_app_2019||[]).push([[0],{21:function(e,t,a){e.exports=a(46)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(15),v=a(19),d=a(16),p=a(20),y=a(17),_=a.n(y);a(44);var g=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},i.map(function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)})),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))},f=a(18),E=(a(45),{exit:{opacity:0,y:20},enter:{opacity:1,y:0,delay:function(e){return 150*e.charIndex}}}),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement(f.a,{className:"loader__text",initialPose:"exit",pose:"enter",charPoses:E},"Loading..........")):r.a.createElement("div",{className:"movies"},a.map(function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ab23e877.chunk.js.map