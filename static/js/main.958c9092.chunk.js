(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},108:function(e,t,a){},128:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(74),r=a.n(o),l=(a(100),a(101),a(0)),s=a.n(l),i=a(15),c=a(75),m=a(91),p=a(43),u=a(27),d=(a(102),function(){return s.a.createElement(p.a,{expand:"lg"},s.a.createElement(c.a,null,s.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(m.a,{className:"me-auto"},s.a.createElement(i.b,{to:"/",className:"nav-link"},"Hlavn\xed str\xe1nka"),s.a.createElement(i.b,{to:"/about",className:"nav-link"},"O mn\u011b"),s.a.createElement(i.b,{to:"/portfolio",className:"nav-link"},"Portfolio"))),s.a.createElement(p.a.Brand,null,"Petr Ond\u0159\xed\u0161ek",s.a.createElement(p.a.Text,{className:"d-block text-small pt-0 pb-0"}," Junior Developer")),s.a.createElement("div",{className:"navbar-aside"},s.a.createElement(i.b,{to:"/kontakt",className:"nav-link"},s.a.createElement("button",{className:"btn btn-secondary float-right"},s.a.createElement(u.e,null)," Kontaktuj m\u011b")))))}),v=function(){return s.a.createElement("header",null,s.a.createElement("section",{className:"header__address"},s.a.createElement("div",{className:"header__address__container container"},s.a.createElement("div",{className:"header__address__about"},s.a.createElement(u.d,null)," ",s.a.createElement("a",{href:"mailto:petrondrisek@seznam.cz"},"petrondrisek@seznam.cz")),s.a.createElement("div",{className:"header__address__social"},s.a.createElement("a",{href:"mailto:petrondrisek@seznam.cz"},s.a.createElement(u.d,null)),s.a.createElement("a",{href:"https://steamcommunity.com/id/_DSC_/"},s.a.createElement(u.f,null)),s.a.createElement("a",{href:"https://discord.com/users/212190945452621824"},s.a.createElement(u.a,null)),s.a.createElement("a",{href:"https://facebook.com/pondrisek"},s.a.createElement(u.b,null)),s.a.createElement("a",{href:"https://cz.linkedin.com/in/petr-ond%C5%99%C3%AD%C5%A1ek-47046421b"},s.a.createElement(u.c,null))))),s.a.createElement(d,null))},k=function(){return s.a.createElement("footer",{className:"text-center pt-3 pb-1 text-small"},s.a.createElement("p",null,"Copyright \xa9 DSC \u2022 ",(new Date).getFullYear()))},b=a(58),y=a.n(b),h=a(59),z=a.n(h),j=a(60),E=a.n(j),f=a(138),g=a(135),S=function(e){var t=e.items,a=e.ModalItem,n=e.ModalShow,o=e.setModalShow;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{fullscreen:!0,show:n,onHide:function(){return o(!1)}},s.a.createElement(f.a.Header,{closeButton:!0,onClick:function(){o(!1)}},s.a.createElement(f.a.Title,null,t[a].title)),s.a.createElement(f.a.Body,null,s.a.createElement("p",null,t[a].desc),"web"===t[a].type||"others"===t[a].type?s.a.createElement("p",null,s.a.createElement("strong",null,"GIT: ")," ",t[a].git.length>0?s.a.createElement("a",{href:t[a].git,target:"_blank",rel:"noopener noreferrer"},t[a].git):"Nezad\xe1no, aktivn\xed projekt"):s.a.createElement(s.a.Fragment,null),"images"===t[a].type?s.a.createElement(s.a.Fragment,null,t[a].images.map(function(e,t){return s.a.createElement("img",{src:e,key:t,className:"d-block mb-2",alt:"Obr\xe1zek"})})):"","video"===t[a].type?s.a.createElement(s.a.Fragment,null,t[a].url.map(function(e,t){return s.a.createElement("iframe",{title:"v"+t,width:"100%",key:t,allowfullscreen:"allowfullscreen",height:"500px",src:"https://youtube.com/embed/"+e})})):"","web"===t[a].type?"web"===t[a].type&&t[a].url.startsWith("http:")?s.a.createElement("a",{href:t[a].url},s.a.createElement("button",{class:"btn btn-primary"},"P\u0159ejit na webovou str\xe1nku")):s.a.createElement("iframe",{src:t[a].url,width:"100%",title:t[a],height:"500px",seamless:!0}):""),s.a.createElement(f.a.Footer,null,s.a.createElement(g.a,{variant:"secondary",onClick:function(){o(!1)}},"Close"))))},P=a(136),C=a(137),w=function(e){var t=e.items,a=e.setModalItem,n=e.setModalShow;return s.a.createElement(P.a,null,t.map(function(e,t){return s.a.createElement(C.a,{className:"portfolio-items mb-3",md:4,key:t},s.a.createElement("div",{className:"portfolio-item",onClick:function(){a(t),n(!0)}},s.a.createElement("div",{className:"portfolio-item__type"},e.type),s.a.createElement("img",{src:"video"===e.type?"https://img.youtube.com/vi/"+e.url[0]+"/0.jpg":e.thumbnail,alt:"Obr\xe1zek"}),s.a.createElement("div",{className:"portfolio-item__stack"},e.stack.map(function(e,t){return s.a.createElement("div",{className:"portfolio-item__stack__tech"},e)})),s.a.createElement("div",{className:"portfolio-item__title"},e.title)))}))},M=a(20),x=(a(108),a(76)),N=a.n(x),O=a(77),H=a.n(O),V=a(78),L=a.n(V),T=a(139),A=function(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],o=t[1],r=Object(l.useState)([{title:"HTML & CSS",desc:"Ovl\xe1d\xe1m HTML5 a CSS3 na dobr\xe9 \xfarovni. S CSS vyu\u017e\xedv\xe1m Bootstrapu, MaterializeCSS, FontAwesome ikony nebo SCSS."},{title:"PHP",desc:"OOP na vlastn\xed MVC, pozd\u011bji Nette, Laravel, vlastn\xed pluginy ve WordPressu. S PHP vyu\u017eiv\xe1m MySQL datab\xe1zi."},{title:"JavaScript",desc:"JavaScript ovl\xe1d\xe1m Vanila, p\u0159i projektech hodn\u011b vyu\u017e\xedv\xe1m sp\xed\u0161e jQuery. Nyn\xed jsem se za\u010dal v\xedce zaj\xedmat o React a Vue.js"},{title:"Ostatn\xed",desc:"Ovl\xe1d\xe1m C na z\xe1kladn\xed \xfarovni, Python vyu\u017e\xedv\xe1m p\u0159i tvorb\u011b dvou Discord bot\u016f nebo se mu pr\xe1v\u011b v\u011bnuji na V\u0160. Vyzkou\u0161el jsem si pr\xe1ci v Jav\u011b nebo C#."}]),c=Object(n.a)(r,1)[0];return s.a.createElement(s.a.Fragment,null,s.a.createElement(T.a,{activeIndex:a,onSelect:function(e,t){o(e)}},s.a.createElement(T.a.Item,null,s.a.createElement("img",{src:N.a,className:"carousel-img",alt:"Banner"}),s.a.createElement(T.a.Caption,null,s.a.createElement("div",null,s.a.createElement("h3",null,"HTML & CSS"),s.a.createElement("span",{className:"banner-smaller-text"},"V\u016fbec prvn\xed technologie, kterou ovl\xe1d\xe1m. Pou\u017e\xedv\xe1m j\xed ve sv\xfdch projektech t\xe9m\u011b\u0159 u v\u0161ech.")))),s.a.createElement(T.a.Item,null,s.a.createElement("img",{src:L.a,className:"carousel-img",alt:"Banner"}),s.a.createElement(T.a.Caption,null,s.a.createElement("div",null,s.a.createElement("h3",null,"PHP"),s.a.createElement("span",{className:"banner-smaller-text"},"V\u011bnuji se mu pov\u011bt\u0161inou na vlastn\xed MVC OOP architektu\u0159e, vyzkou\u0161el jsem u\u017e ale i Nette framework.")))),s.a.createElement(T.a.Item,null,s.a.createElement("img",{src:H.a,className:"carousel-img",alt:"Banner"}),s.a.createElement(T.a.Caption,null,s.a.createElement("div",null,s.a.createElement("h3",null,"Javascript"),s.a.createElement("span",{className:"banner-smaller-text"},"Posledn\xed technologie, kterou jsem se za\u010dal zab\xfdvat. Vyu\u017e\xedv\xe1m jQuery nebo Vanila, pomalu se u\u010d\xedm React a Vue."))))),s.a.createElement("section",{id:"stack",className:"container"},s.a.createElement(P.a,{className:"stack"},c.map(function(e,t){return s.a.createElement(C.a,{key:t,className:"text-center"},s.a.createElement("p",{className:"text-bigger font-weight-bold mb-3"},e.title),s.a.createElement("p",null,e.desc))}))),s.a.createElement("section",{id:"about",className:"container"},s.a.createElement("div",{className:"about row"},s.a.createElement("div",{className:"col"},"Chce\u0161 zjistit v\xedc o m\xe9m p\u0159\xedb\u011bhu? ",s.a.createElement(i.b,{to:"/about"},"P\u0159e\u010dti si o mn\u011b zde"),"."))))},B=function(){document.title=ke+"Hlavn\xed str\xe1nka";var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],o=t[1],r=Object(l.useState)(!1),c=Object(n.a)(r,2),m=c[0],p=c[1],u=Object(l.useState)([{title:"Vue.js \u2022 Learning project",git:"https://github.com/petrondrisek/vue-js-learn",desc:"U\u010debn\xed projekt na Vue.js framework",type:"web",url:"https://dsc-vue-js.vercel.app",thumbnail:E.a,stack:["Vue.js","Boostrap","CSS"]},{title:"Mineleague.cz \u2022 pouze backend + \u010dast JS",git:"",desc:"Webov\xe1 str\xe1nka pro Minecraft ligov\xfd turnaje. Naps\xe1no v PHP s vyu\u017eit\xedm OOP a vlastn\xed MVC architektury, jQuery, MySQL datab\xe1ze, vyu\u017eit\xed Discord Auth, PayPal platebn\xed br\xe1na s JavaScriptem pro dob\xedjen\xed kredit\u016f. Frontend nen\xed sou\u010d\xe1st\xed m\xe9 pr\xe1ce, nicm\xe9n\u011b n\u011bkde byl upraven pro lep\u0161\xed zobrazen\xed.",type:"web",url:"https://mineleague.cz",thumbnail:z.a,stack:["PHP","OOP","Custom MVC","jQuery"]},{title:"SFK Kozel",git:"",desc:"Webov\xe1 str\xe1nka pro flobralov\xfd klub SFK Kozel, vzniklo v r\xe1mci \u0161koln\xed praxe. Vyu\u017eit\xed Wordpressu, vlastn\xed \u0161ablona v HTML, CSS a jQuery. Vlastn\xed plugin pro z\xe1pasy se str\xe1nkov\xe1n\xedm, hr\xe1\u010di + kategorie. P\u0159i editaci z\xe1pasu lze hr\xe1\u010d\u016fm p\u0159id\xe1vat statistiky, kter\xe9 se prop\xed\u0161\xed do profilu, to nakonec ale z\u016fstalo nevyu\u017eito.",type:"web",url:"https://sfkkozel.cz",thumbnail:y.a,stack:["WordPress","Procedur\xe1ln\xed PHP","CSS","jQuery"]}]),d=Object(n.a)(u,1)[0];return s.a.createElement(M.motion.div,{intial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0,y:100}},s.a.createElement(A,null),s.a.createElement("section",{id:"page",className:"container page"},s.a.createElement("p",null,"Jmenuji se Petr Ond\u0159\xed\u0161ek, pod p\u0159ezd\xedvkou DSC vystupuji od roku 2020. M\xe1m vystudovanou st\u0159edn\xed \u0161kolu se zam\u011b\u0159en\xedm na Informa\u010dn\xed technologie, nicm\xe9n\u011b se v\u011bnuji samotn\xe9mu programov\xe1n\xed od 13 let \u2013 je\u0161t\u011b v amat\xe9rsk\xfdch podm\xednk\xe1ch a metodou pokusu omylu. P\u016fvodn\u011b jsem se za\u010dal v\xedce hrabat ve zdrojov\xfdch k\xf3dech webov\xfdch str\xe1nk\xe1ch a\u017e jsem pochopil z\xe1kladn\xed principy fungovan\xed HTML a pokou\u0161el si str\xe1nky s\xe1m upravovat p\u0159es Pr\u016fzkumn\xedka prvk\u016f v prohl\xed\u017ee\u010di Google Chrome, pozd\u011bji jsem se dostal k tvorb\u011b samotn\xe9 webov\xe9 str\xe1nky pouze zalo\u017een\xe9 na ",s.a.createElement("strong",null,"HTML a CSS"),", kdy jsem objevil pr\xe1v\u011b existenci kask\xe1dov\xfdch styl\u016f CSS a za\u010dal se v\xedce zam\u011b\u0159ovat i pr\xe1v\u011b na CSS."),s.a.createElement("p",null,"Po n\u011bjak\xe9 dob\u011b se mi naskytly prvn\xed mo\u017enosti, jak vyu\u017eit sv\xe9 z\xedskan\xe9 dovednosti v t\u011bchto dvou z\xe1kladn\xedch front-endov\xfdch jazyc\xedch a zakl\xe1dal jsem prvn\xed str\xe1nky, hlavn\u011b pro hern\xed servery her, kter\xe9 jsem tenkr\xe1t hr\xe1l. Prvn\xed str\xe1nka, kter\xe1 kdy vznikla, byla prim\xe1rn\u011b vytvo\u0159ena z obr\xe1zk\u016f, text\u016f a odkaz\u016f na ostatn\xed str\xe1nky pro hern\xed server na Counter-Strike 1.6. Pozd\u011bji jsem tvo\u0159il webovou str\xe1nku i pro Minecraft server, kde jsem se za\u010dal v\xedce dozv\xeddat i o existenci back-endov\xfdch programovac\xedch \u010di skriptovac\xedch jazyc\xedch, kv\u016fli v\u011bt\u0161\xed propojenosti a zv\xeddavosti. ",s.a.createElement("strong",null,"Narazil jsem tak na PHP.")),s.a.createElement("p",{className:"text-center"},s.a.createElement(i.b,{to:"/about"},s.a.createElement("button",{className:"btn btn-success"},"P\u0159e\u010dti si o mn\u011b v\xedce zde"))),s.a.createElement("h1",{className:"mt-4 pb-2 text-center"},"Rychl\xe9 portfolio"),s.a.createElement(w,{items:d,setModalItem:o,setModalShow:p}),s.a.createElement(S,{items:d,ModalItem:a,ModalShow:m,setModalShow:p}),s.a.createElement("p",{className:"text-center"},s.a.createElement(i.b,{to:"/portfolio"},s.a.createElement("button",{className:"btn btn-success"},"Zobrazit v\xedce z portfolia")))))},_=a(80),W=a(79),D=a.n(W),I=function(){document.title=ke+"O mn\u011b";var e=Object(l.useState)([{year:"konec \xfanora 2023 - sou\u010dasnost",post:"K\xf3der ve spole\u010dnosti Reprezza",place:"X",type:"HTML, CSS, JS s p\u0159esahem do PHP v jednotliv\xfdch projektech p\u0159i custom \u0159e\u0161en\xed."},{year:"leden 2022",post:"Tvorba webov\xe9 str\xe1nky Mineleague.cz",place:"X",type:"Jednor\xe1zov\xfd p\u0159iv\xfdd\u011blek"},{year:"\u010dervenec/srpen 2021",post:"Tvorba webov\xe9 str\xe1nky uveryhypoteky.eu",place:"X",type:"Jednor\xe1zov\xfd p\u0159iv\xfdd\u011blek"},{year:"podzim 2020",post:"Tvorba webov\xe9 str\xe1nky SFK Kozel",place:"X",type:"\u0160koln\xed praxe"},{year:"kv\u011bten 2020",post:"Tvorba propaga\u010dn\xedch vide\xed pro SWIETELSKY, vyu\u017eit\xed dronu a st\u0159ihov\xfdch program\u016f (After Effects, Premiere)",place:"SWIETELSKY s.r.o.",type:"\u0160koln\xed praxe"},{year:"prosinec 2019",post:"\xda\u010dast na projektu DotaceEU - tvorba videa (v\xfdhra 3. m\xedsto), vyu\u017eit\xed dronu a st\u0159ihov\xfdch program\u016f (After Effects, Premiere)",place:"X",type:"\u0160koln\xed projekt"}]),t=Object(n.a)(e,1)[0];return s.a.createElement(M.motion.section,{id:"page",className:"container page",intial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:100}},s.a.createElement("p",null,"Jmenuji se Petr Ond\u0159\xed\u0161ek, pod p\u0159ezd\xedvkou DSC vystupuji od roku 2020. M\xe1m vystudovanou st\u0159edn\xed \u0161kolu se zam\u011b\u0159en\xedm na Informa\u010dn\xed technologie, nicm\xe9n\u011b se v\u011bnuji samotn\xe9mu programov\xe1n\xed od 13 let \u2013 je\u0161t\u011b v amat\xe9rsk\xfdch podm\xednk\xe1ch a metodou pokusu omylu. P\u016fvodn\u011b jsem se za\u010dal v\xedce hrabat ve zdrojov\xfdch k\xf3dech webov\xfdch str\xe1nk\xe1ch a\u017e jsem pochopil z\xe1kladn\xed principy fungovan\xed HTML a pokou\u0161el si str\xe1nky s\xe1m upravovat p\u0159es Pr\u016fzkumn\xedka prvk\u016f v prohl\xed\u017ee\u010di Google Chrome, pozd\u011bji jsem se dostal k tvorb\u011b samotn\xe9 webov\xe9 str\xe1nky pouze zalo\u017een\xe9 na ",s.a.createElement("strong",null,"HTML a CSS"),", kdy jsem objevil pr\xe1v\u011b existenci kask\xe1dov\xfdch styl\u016f CSS a za\u010dal se v\xedce zam\u011b\u0159ovat i pr\xe1v\u011b na CSS."),s.a.createElement("p",null,"Po n\u011bjak\xe9 dob\u011b se mi naskytly prvn\xed mo\u017enosti, jak vyu\u017eit sv\xe9 z\xedskan\xe9 dovednosti v t\u011bchto dvou z\xe1kladn\xedch front-endov\xfdch jazyc\xedch a zakl\xe1dal jsem prvn\xed str\xe1nky, hlavn\u011b pro hern\xed servery her, kter\xe9 jsem tenkr\xe1t hr\xe1l. Prvn\xed str\xe1nka, kter\xe1 kdy vznikla, byla prim\xe1rn\u011b vytvo\u0159ena z obr\xe1zk\u016f, text\u016f a odkaz\u016f na ostatn\xed str\xe1nky pro hern\xed server na Counter-Strike 1.6. Pozd\u011bji jsem tvo\u0159il webovou str\xe1nku i pro Minecraft server, kde jsem se za\u010dal v\xedce dozv\xeddat i o existenci back-endov\xfdch programovac\xedch \u010di skriptovac\xedch jazyc\xedch, kv\u016fli v\u011bt\u0161\xed propojenosti a zv\xeddavosti. ",s.a.createElement("strong",null,"Narazil jsem tak na PHP.")),s.a.createElement("p",null,"PHP jsem se p\u016fvodn\u011b za\u010dal v\u011bnovat na funkcion\xe1ln\xed / procedur\xe1ln\xed \xfarovni, hodn\u011b k\xf3du bylo z po\u010d\xe1tku sp\xed\u0161e p\u0159evzato a sna\u017eil jsem se hlavn\u011b o to, aby webov\xe1 str\xe1nka fungovala bez ohledu na to, jestli k\xf3du rozum\xedm nebo jestli je dostate\u010dn\u011b efektivn\xed \u010di \u010diteln\xfd. A\u017e pozd\u011bji \u010dasem, kdy m\u011b za\u010dala zaj\xedmat n\u011bjak\xe1 modifikace k\xf3du, kter\xfd na webov\xe9 str\xe1nce byl, tak jsem za\u010dal pob\xedrat existenci cykl\u016f, prom\u011bnn\xfdch, a\u017e jsem se dozv\u011bd\u011bl o existenci datab\xe1z\xed, tj. ",s.a.createElement("strong",null,"MySQL a webov\xe9 prost\u0159ed\xed PHPMyAdmin"),"."),s.a.createElement("p",null,"Webov\xfd projekt pro Minecraft server pro\u0161el n\u011bkolika verzemi, \xfaprav, a\u017e byl stav\u011bn\xfd od z\xe1kladu na vlastn\xedm k\xf3du, nicm\xe9n\u011b se nejednalo o \u017e\xe1dn\xfd velik\xfd back-endov\xfd z\xe1zrak. Celkov\u011b server fungoval mezi 2 \u2013 3 lety. Mezit\xedm jsem si vyzkou\u0161el tvorbu plugin\u016f v ",s.a.createElement("strong",null,"Jav\u011b pro Minecraft")," a objevil r\u016fzn\xe9 syntaxy p\u0159i programov\xe1n\xed v Jav\u011b i PHP, nicm\xe9n\u011b u\u017e tenkr\xe1t jsem si v\u0161iml toho, jak jsou si vlastn\u011b programovac\xed jazyky hodn\u011b podobn\xe9. \xdarove\u0148 programov\xe1n\xed v Jav\u011b je pro m\u011b ka\u017edop\xe1dn\u011b velice n\xedzk\xe1 a nem\xe1m v n\xed dle m\xe9ho n\xe1zoru v\u016fbec juniorn\xed znalosti. Pot\xe9 p\u0159i\u0161la pauza, kdy jsem se programov\xe1n\xed v PHP ani Jav\u011b t\xe9m\u011b\u0159 nev\u011bnoval a zabrousil jsem t\u0159eba do ",s.a.createElement("strong",null,"Pawna")," pro GTA San Andreas v r\xe1mci z\xe1bavy a op\u011bt zv\u011bdavosti, ani tam jsem ka\u017edop\xe1dn\u011b dlouho nevydr\u017eel a nev\u011bnoval se tomu."),s.a.createElement("p",null,"Pot\xe9 p\u0159i\u0161el n\xe1stup na st\u0159edn\xed \u0161kolu, kdy jsem se tomu za\u010dal op\u011bt trochu v\xedce v\u011bnovat, zde jsme se v\u011bnovali jak \xfapln\xfdm ",s.a.createElement("strong",null,"z\xe1klad\u016fm tvorby webu \u2013 co u\u017e jsem um\u011bl (HTML, CSS), ale i C a pozd\u011bji i C# v \xfapln\xfdch z\xe1kladech"),". D\xedky p\u0159edchoz\xedm zku\u0161enostem pro m\u011b nebylo ani jedno z t\u011bchto odv\u011btv\xed v\u016fbec slo\u017eit\xe1 z\xe1le\u017eitost, akor\xe1t m\u011b to posunulo v tom, \u017ee jsem zjistil, kter\xe9 kroky d\u011bl\xe1m kv\u016fli samostudiu \u0161patn\u011b. Mezit\xedm jsem objevil existenci ",s.a.createElement("strong",null,"redak\u010dn\xedch syst\xe9m\u016f, nap\u0159. Wordpress"),", d\xe1le pak jsem op\u011bt se v\u011bnoval hern\xedmu projektu webov\xe9 str\xe1nky, tentokr\xe1t pro hru Counter-Strike: Global Offensive, kde jsem tvo\u0159il web ji\u017e s p\u0159ihla\u0161ov\xe1n\xedm a vyu\u017eil tak v\u011bt\u0161\xed potenci\xe1l PHP a troufnu si \u0159\xedci, \u017ee m\u011b tento projekt posunul v PHP o hodn\u011b velk\xfd kus. Vyu\u017eil jsem zde ji\u017e i objektov\u011b orientovan\xe9 programov\xe1n\xed, vytvo\u0159il si vlastn\xed MVC architekturu, proto\u017ee jsem se v\u017edy sna\u017eil pochopit co nejv\xedce do detailu, jak\xfdm zp\u016fsobem funguj\xed nap\u0159\xedklad frameworky. Za\u010dal jsem vyu\u017e\xedvat r\u016fzn\xfdch API \u2013 nap\u0159. Steam Auth pro p\u0159ihla\u0161ov\xe1n\xed, pozd\u011bji pak i pro propojen\xed Discord \xfa\u010dtu Discord Auth, atp. Vyzkou\u0161el jsem si i napojen\xed PayPal platebn\xed br\xe1ny a automatizaci n\xe1kupu s p\u0159i\u0159azen\xedm dat do datab\xe1ze. Krom\u011b toho jsem pak i v r\xe1mci \u0161koln\xedch projekt\u016f tvo\u0159il webovou str\xe1nku ve WordPressu, kde jsem tvo\u0159il jak vlastn\xed \u0161ablonu \u2013 tzn. Vyu\u017eit\xed HTML a CSS a tvo\u0159il jsem pro tuhle webovou str\xe1nku i vlastn\xed WordPress plugin. (O tomto v\xedce pak v ",s.a.createElement(i.b,{to:"/portfolio"},"portfoliu"),") V obou projektech jsem pak z\xedskal i zku\u0161enosti s ",s.a.createElement("strong",null,"JavaScriptem"),", jak s vanila, tak i s vyu\u017eit\xedm n\u011bjak\xe9ho zjednodu\u0161en\xe9ho JS \u2013 ",s.a.createElement("strong",null,"jQuery"),". Nyn\xed se sna\u017e\xedm zabrousit v\xedce do JavaScriptu a front-endu, nap\u0159\xedklad ",s.a.createElement("strong",null,"tato str\xe1nka je ps\xe1na v Reactu"),"."),s.a.createElement("img",{src:D.a,alt:"Programator",align:"right",className:"m-3 mt-0",height:"300px"}),s.a.createElement("p",null,"B\u011bhem projektu s hern\xedm serverem jsem se pak v\u011bnoval i ",s.a.createElement("strong",null,"Pythonu a tvorb\u011b Discord bot\u016f"),", kte\u0159\xed prim\xe1rn\u011b komunikovali bu\u010f s webem a back-endem nebo p\u0159\xedmo s datab\xe1z\xed. M\xfdm posledn\xedm projektem je Minecraft ligov\xfd port\xe1l, kde jsem tvo\u0159il vlastn\u011b cel\xfd syst\xe9m fungov\xe1n\xed ligy, t\xfdm\u016f, u\u017eivatel\u016f a propojen\xed s hern\xedm serverov\xfdm \xfa\u010dtem. Tam jsem vyu\u017eil tak\xe9 ",s.a.createElement("strong",null,"OOP s vlastn\xed architekturou"),"."),s.a.createElement("p",null,"Snaha o to z\xedskat v\xedce praxe v komer\u010dn\xedm sv\u011bt\u011b u m\u011b byla v\u017edy. Sna\u017eil jsem se probojovat i do v\u011bt\u0161\xedch spole\u010dnost\xed, kde by si m\u011b n\u011bjak\xfdm zp\u016fsobem zau\u010dili, nicm\xe9n\u011b jsem pak dal p\u0159ednost sp\xed\u0161e je\u0161t\u011b samostudiu. B\u011bhem zad\xe1n\xed, kter\xe9 mi firmy daly jsem si vyzkou\u0161el pr\xe1ci s ",s.a.createElement("strong",null,"Nette nebo Laravelem"),", je\u0161t\u011b v\xedce jsem si prohloubil zku\u0161enosti s ",s.a.createElement("strong",null,"Bootstrapem")," nebo jsem si vyzkou\u0161el ",s.a.createElement("strong",null,"MaterializeCSS"),". V\u0161echny podrobnosti lze naj\xedt na str\xe1nce s portfoliem."),s.a.createElement("p",null,"Z profesn\xedho \u017eivota by to bylo o mn\u011b v\u0161e, mezit\xedm jsem pracoval r\u016fzn\u011b, kde se dalo. Nem\xe1m tak jen IT zku\u0161enosti, ale i zku\u0161enosti mimo IT. Nyn\xed se v\u011bnuji i ",s.a.createElement("strong",null,"studiu vysok\xe9 \u0161koly Univerzity Palack\xe9ho v Olomouci na oboru Informa\u010dn\xed technologie")," v kombinovan\xe9 form\u011b."),s.a.createElement("p",{className:"text-bigger"},"Tabulkov\xfd p\u0159ehled vyu\u017eit\xed v praxi s klientem"),s.a.createElement("div",{className:"w-100 overflow-auto"},s.a.createElement(_.a,{striped:"row",bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Rok"),s.a.createElement("th",null,"Pozice"),s.a.createElement("th",null,"M\xedsto")),t.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.year),s.a.createElement("td",null,e.post),s.a.createElement("td",null,e.place))})))))},J=(a(128),a(81)),Q=a.n(J),K=a(82),F=a.n(K),G=a(83),R=a.n(G),U=a(84),Z=a.n(U),X=a(85),Y=a.n(X),q=a(86),$=a.n(q),ee=a(69),te=a.n(ee),ae=a(87),ne=a.n(ae),oe=a(88),re=a.n(oe),le=a(89),se=a.n(le),ie=function(){document.title=ke+"Portfolio";var e=Object(l.useState)([{title:"SP Bets",git:"",desc:"\xdaprava hern\xedho projektu Bets, jedn\xe1 se o projekt s\xe1zen\xed, kdy d\u0159\xedve existoval k\xf3d, kter\xfd ale nebyl p\u0159\xedli\u0161 ide\xe1ln\xed a tak pot\u0159eboval n\u011bkolik \xfaprav, mimo jin\xe9 byl z 90% mnou p\u0159estylov\xe1n. Mezi hlavn\xed v\u011bci, co tam byly doprogramov\xe1ny / dostylov\xe1no bylo: zm\u011bna hesla u\u017eivatele, omezen\xed registrac\xed na vybran\xfd email slu\u017eby, proto\u017ee neexistovala v\u016fbec \u017e\xe1dn\xe1 ochrana proti \xfatok\u016fm (obej\xedt\xed captcha implementace), p\u0159id\xe1no do administrace p\u0159id\xe1v\xe1n\xed kategori\xed i s nahr\xe1n\xedm obr\xe1zku, d\u0159\xedve bylo \u0159e\u0161eno velice problematicky. Jedin\xfd design, kter\xfd z\u016fstal byl v TOP p\u0159\xed\u010dk\xe1ch, zbytek byl upraven.",type:"web",url:"https://bets.superparba.eu",thumbnail:Q.a,stack:["Laravel","PHP","Bootstrap","HTML","CSS"]},{title:"SP Doky",git:"https://github.com/petrondrisek/spdoky",desc:"Hern\xed projekt zobrazen\xed lokac\xed vozidel ve h\u0159e",type:"web",url:"https://spdoky.maweb.eu/www",thumbnail:F.a,stack:["Nette","PHP","Bootstrap","jQuery"]},{title:"M\xe9 portfolio",git:"https://github.com/petrondrisek/personal",desc:"M\xe9 portfolio vytvo\u0159en\xe9 v Reactu a za pomoc\xed Bootstrapu.",type:"web",url:"https://petrondrisek.github.io/personal",thumbnail:se.a,stack:["React","CSS","Bootstrap CSS"]},{title:"Vue.js \u2022 Learning project",git:"https://github.com/petrondrisek/vue-js-learn",desc:"U\u010debn\xed projekt na Vue.js framework. Jednalo se hlavn\u011b o z\xe1kladn\xed sezn\xe1men\xed se s prost\u0159ed\xedm, nejedn\xe1 se o velk\xfd projekt.",type:"web",url:"https://dsc-vue-js.vercel.app",thumbnail:E.a,stack:["Vue.js","CSS","Bootstrap CSS"]},{title:"SRP",git:"https://github.com/petrondrisek/srp-test",desc:"Informa\u010dn\xed syst\xe9m - zku\u0161ebn\xed zad\xe1n\xed, vyu\u017eit\xed Nette, MySQL, MaterializeCSS, jQuery, HTML, CSS. U\u017eivatel: admin, heslo: test1234",type:"web",url:"http://personal-dsc.infinityfreeapp.com/srp",thumbnail:$.a,stack:["Nette","PHP","CSS","MaterializeCSS"]},{title:"Nekuracka spolecnost \u2022 Plugin",git:"https://github.com/petrondrisek/certificates",desc:"Plugin pro \u017e\xe1dost o certifik\xe1t (vyu\u017eiv\xe1 ARES rejst\u0159\xedku, odkud vyhled\xe1v\xe1 podle I\u010cO), administrace ve WordPressu \u2192 nach\xe1z\xed se zde schv\xe1len\xed a editace certifik\xe1t\u016f, p\u0159id\u011blen\xed certifik\xe1tu - zlat\xfd, st\u0159\xedbrn\xfd, bronzov\xfd. Seznam certifik\xe1t\u016f na podstr\xe1nce Certifikovan\xe9 firmy je rozd\u011blen\xfd na str\xe1nkov\xe1n\xed. Vyu\u017eit\xed WordPressu a vlastn\xedho pluginu.",type:"web",url:"https://nekurackaspolecnost.cz",thumbnail:R.a,stack:["WordPress","OOP","PHP","jQuery"]},{title:"Mineleague.cz \u2022 Bot",git:"",desc:"Discord bot \u2022 Python a vyu\u017eit\xed knihovny discord.py, discord_slash.py. Komunikuje s MySQL datab\xe1z\xed. Funkce: p\u0159id\u011blov\xe1n\xed rol\xed pokud si hr\xe1\u010d propoj\xed \xfa\u010det s webov\xfdm, vytvo\u0159en\xed textov\xe9 m\xedstnosti pro z\xe1pas s automatick\xfdm p\u0159id\xe1n\xedm u\u017eivatel\u016f s propojen\xfdm \xfa\u010dtem, zobrazen\xed hr\xe1\u010dsk\xfdch nebo t\xfdmov\xfdch statistik - /profile, p\u0159id\u011blen\xed TOP \u017eeb\u0159\xed\u010dkov\xfdch rol\xed u\u017eivatel\u016fm s propojen\xfdm \xfa\u010dtem, p\u0159\xedkaz na zobrazen\xed n\xe1pov\u011bdy na zadan\xe9 t\xe9ma - /guide",type:"others",thumbnail:te.a,stack:["Python"]},{title:"Mineleague.cz \u2022 pouze backend + \u010dast JS",git:"",desc:"Webov\xe1 str\xe1nka pro Minecraft ligov\xfd turnaje. Naps\xe1no v PHP s vyu\u017eit\xedm OOP a vlastn\xed MVC architektury, jQuery, MySQL datab\xe1ze, vyu\u017eit\xed Discord Auth, PayPal platebn\xed br\xe1na s JavaScriptem pro dob\xedjen\xed kredit\u016f. Frontend nen\xed sou\u010d\xe1st\xed m\xe9 pr\xe1ce, nicm\xe9n\u011b n\u011bkde byl upraven pro lep\u0161\xed zobrazen\xed. V administraci se pak nach\xe1z\xed \u0159\xedzen\xed z\xe1pasu pomoc\xed jednoduch\xfdch p\u0159\xedkaz\u016f ze strany backendu k serveru.",type:"web",url:"https://mineleague.cz",thumbnail:z.a,stack:["PHP","OOP","Custom MVC","jQuery"]},{title:"Uveryhypoteky.eu",git:"",desc:"Webov\xe1 str\xe1nka pro \xdav\u011bry a Hypot\xe9ky. Vyu\u017eit\xed WordPressu, vlastn\xed \u0161ablona napsan\xe1 v HTML, CSS, jQuery a s vyu\u017eit\xedm Bootstrapu. Zde jsem pomohl i s celkovou administrativou ohledn\u011b hosting\u016f - nap\u0159. zalo\u017een\xed email\u016f a p\u0159esm\u011brov\xe1n\xed na soukrom\xe9, pop\u0159. propojen\xed email\u016f do Gmail schr\xe1nek. Pou\u017eit\xe9 pluginy: Contact Form 7, Genesis Blocks, SVG Support. Pro z\xe1klad byl vyu\u017eit https://underscores.me/, kter\xfd neobsahuje stylov\xe1n\xed str\xe1nky, tud\xed\u017e design byl d\u011bl\xe1n od za\u010d\xe1tku.",type:"web",url:"https://uveryhypoteky.eu",thumbnail:Z.a,stack:["WordPress","jQuery","Bootstrap","CSS"]},{title:"TAGBroker",git:"https://github.com/petrondrisek/tagbroker",desc:"Webov\xe1 str\xe1nka p\u016fvodn\u011b pro TAG Broker, nicm\xe9n\u011b si to firma rozmyslela je\u0161t\u011b p\u0159ed dod\xe1n\xedm projektu, tud\xed\u017e v\xfdsledek nen\xed 100%, ale je t\xe9m\u011b\u0159 dokon\u010den\xfd. Naps\xe1no v HTML, CSS s vyu\u017eit\xedm Bootstrapu. Pou\u017eit\xe9 pluginy: Carousel Slider Block, Genesis Blocks, SVG Support. Pro z\xe1klad byl vyu\u017eit https://underscores.me/, kter\xfd neobsahuje stylov\xe1n\xed str\xe1nky, tud\xed\u017e design byl d\u011bl\xe1n od za\u010d\xe1tku.",type:"web",url:"http://personal-dsc.infinityfreeapp.com/wordpress",thumbnail:ne.a,stack:["WordPress","Bootstrap","CSS"]},{title:"Lednicka",git:"https://github.com/petrondrisek/lednicka",desc:"Aplikace v r\xe1mci zku\u0161ebn\xedho zad\xe1n\xed. Naps\xe1no v Laravelu - jazyk PHP, HTML, CSS, jQuery. P\u0159id\xe1n\xed potravin, bl\xed\u017e\xedci se expirace a ozna\u010den\xed na frontendu zv\xfdrazn\u011bn\xedm.",type:"web",url:"http://personal-dsc.infinityfreeapp.com/lednicka/public/main",thumbnail:re.a,stack:["PHP","Laravel","HTML","CSS"]},{title:"Den otev\u0159en\xfdch dv\u011b\u0159\xed na OAKM.cz",git:"",desc:"Nahr\xe1v\xe1n\xed videa pro Obchodn\xed akademii Krom\u011b\u0159\xed\u017e v r\xe1mci dnu otev\u0159en\xfdch dve\u0159\xed v dob\u011b covidu, kdy nebylo mo\u017en\xe9 osobn\xed prohl\xeddka. Zde jsem m\u011bl s kolegou na starost kameru, sc\xe9na\u0159 a re\u017eii. Pom\xe1hali jsme pak alespo\u0148 n\u011bjak komunika\u010dn\u011b se st\u0159ihem.",type:"video",url:["QC52cGDdHRU"],stack:["Dron"]},{title:"Lexten.cz bot \u2022 Lexik",git:"https://github.com/petrondrisek/lexten_lexik",desc:"Discord bot \u2022 Python a discord.py + discord_slash.py. Komunikuje s webovou str\xe1nkou Lexten.cz pomoc\xed \u010dten\xed JSON form\xe1t\u016f. Zobrazen\xed hr\xe1\u010dsk\xfdch statistik, p\u0159id\u011blen\xed VIP (premium) rol\xed. Na serveru mo\u017enost vytvo\u0159en\xed si vlastn\xedho voice kan\xe1lu na omezen\xfd \u010das \u2192 kan\xe1l se nezru\u0161\xed dokud by tam n\u011bkdo byl i po vypr\u0161en\xed \u010dasu. Odm\u011bn\u011bn\xed hr\xe1\u010d\u016f p\u0159es /boostkarma pokud podpo\u0159ili Discord server s Nitrem. (Karma = body ve h\u0159e, p\u0159id\xe1 do datab\xe1ze k hr\xe1\u010di +100). Seznam v\u0161ech VIP hr\xe1\u010d\u016f \u2192 /vip. Bylo \u0159e\u0161eno p\u0159es repl.it, kde datab\xe1ze byla formou pole, kter\xe9 dr\u017eelo ve\u0161ker\xe1 data pod ur\u010dit\xfdm kl\xed\u010dem. (z\xe1klad je main.py)",type:"others",thumbnail:te.a,stack:["Python"]},{title:"Lexten.cz",git:"https://github.com/petrondrisek/lexten",desc:"Webov\xe1 str\xe1nka pro hern\xed server CS:GO Jailbreak. Naps\xe1no v PHP s vyu\u017eit\xedm OOP a vlastn\xed MVC architektury, kterou jsem zde vyu\u017eil poprv\xe9, k\xf3d je tak proto kolikr\xe1t velmi zmaten\xfd a n\u011bkter\xe9 \u010d\xe1sti bych dnes ud\u011blal jinak a p\u0159ehledn\u011bji. Oprava ji\u017e nyn\xed p\u0159i nefunk\u010dn\xedm projektu postr\xe1d\xe1 smysl, nep\u0159\xedstupn\xe1 data serveru tak tvo\u0159\xed z webu hlavn\u011b ilustraci, nicm\xe9n\u011b funk\u010dn\xed z v\u011bt\u0161iny je d\xedky zachovan\xfdm dat\u016fm. HTML / SASS CSS s Bootstrapem, FontAwesome ikony, jQuery. Napojeno SteamAPI auth, Discord auth API, d\u0159\xedve se zde objevovalo i platebn\xed br\xe1na PayPal. Web obsahuje \u010dl\xe1nky, vlastn\xed diskuzn\xed f\xf3rum s reakcemi u\u017eivatel\u016f, statistiky hr\xe1\u010d\u016f v\u010detn\u011b jejich historie a chatlogu, admin t\xfdm. V administraci lze konfigurovat VIP \xfa\u010dty na serveru \u2192 napojeno ob\u011b na datab\xe1zi i serverovou. ",type:"web",url:"http://personal-dsc.infinityfreeapp.com/lexten",thumbnail:Y.a,stack:["PHP","Custom MVC","Bootstrap","CSS","jQuery"]},{title:"Z\xe1v\u011bre\u010dn\xe9 video studia OAKM",git:"",desc:"Vzpom\xednkov\xe9 video, sest\u0159\xedh\xe1no v Adobe After Effects a Premiere, publikov\xe1no jako jedno z nejlep\u0161\xedch \u2192 zad\xe1no cel\xe9mu ro\u010dn\xedku.",type:"video",url:["6Iw-URFWVY0"],stack:["After Effects","Premiere"]},{title:"DotaceEU \u2022 video - 3. m\xedsto",git:"",desc:"\u0160koln\xed projekt, zad\xe1n\xed bylo jak\xfdkoliv projekt podpo\u0159en\xfd dotac\xed EU. Vyu\u017eit\xed dronu a st\u0159ihov\xfdch program\u016f Adobe After Effects a Premiere.",type:"video",url:["kqlA4V3kEZA"],stack:["Dron","After Effects","Premiere"]},{title:"SFK Kozel",git:"",desc:"Webov\xe1 str\xe1nka pro flobralov\xfd klub SFK Kozel, vzniklo v r\xe1mci \u0161koln\xed praxe. Vyu\u017eit\xed Wordpressu, vlastn\xed \u0161ablona v HTML, CSS a jQuery. Vlastn\xed plugin pro z\xe1pasy se str\xe1nkov\xe1n\xedm, hr\xe1\u010di + kategorie. P\u0159i editaci z\xe1pasu lze hr\xe1\u010d\u016fm p\u0159id\xe1vat statistiky, kter\xe9 se prop\xed\u0161\xed do profilu, to nakonec ale z\u016fstalo nevyu\u017eito. V\u011bt\u0161ina v\u011bc\xed \u0159e\u0161ena p\u0159es vlastn\xed widgety, v\u010detn\u011b \u010dl\xe1nk\u016f dole na hlavn\xed str\xe1nce. Vyu\u017eito procedur\xe1ln\xed programov\xe1n\xed za pomoc\xed n\u011bkter\xfdch funkc\xed WP.",type:"web",url:"https://sfkkozel.cz",thumbnail:y.a,stack:["WordPress","Procedur\xe1ln\xed PHP","HTML","CSS","jQuery"]}]),t=Object(n.a)(e,1)[0],a=Object(l.useState)(0),o=Object(n.a)(a,2),r=o[0],i=o[1],c=Object(l.useState)(!1),m=Object(n.a)(c,2),p=m[0],u=m[1];return s.a.createElement(M.motion.section,{id:"page",className:"container page",intial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:100}},s.a.createElement(S,{items:t,ModalItem:r,ModalShow:p,setModalShow:u}),s.a.createElement("h1",null,"Portfolio"),s.a.createElement(w,{items:t,setModalItem:i,setModalShow:u}))},ce=function(){return document.title=ke+"Kontakt",s.a.createElement(M.motion.section,{id:"page",className:"container page",intial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:100}},s.a.createElement("h1",null,"Kontakt"),s.a.createElement("p",null,"Kontaktovat m\u011b m\u016f\u017eete zde:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Prost\u0159ednictv\xedm emailov\xe9 adresy ",s.a.createElement("a",{href:"mailto:petrondrisek@seznam.cz"},"petrondrisek@seznam.cz")),s.a.createElement("li",null,"Facebook \xfa\u010det - ",s.a.createElement("a",{href:"https://facebook.com/pondrisek"},"Petr Ond\u0159\xed\u0161ek")),s.a.createElement("li",null,"Discord \xfa\u010det - ",s.a.createElement("a",{href:"https://discord.com/users/212190945452621824"},"DSC#2619"))))},me=function(){return document.title=ke+"Str\xe1nka nenalezena",s.a.createElement(M.motion.section,{id:"page",className:"container page",intial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:100}},s.a.createElement("article",null,s.a.createElement("section",{class:"page container mt-3 mb-3 pt-3 pb-3"},s.a.createElement("h1",null,"Str\xe1nka nenalezena"),s.a.createElement("p",null,"Zkuste vyhled\xe1v\xe1n\xed pozd\u011bji nebo kontaktujte administr\xe1tora str\xe1nky."))))},pe=a(90),ue=a.n(pe),de=a(2),ve=r.a.createRoot(document.querySelector("#root")),ke=t.default="Petr Ond\u0159\xed\u0161ek \u2022 ",be=function(){var e=Object(de.k)();return s.a.createElement(M.AnimatePresence,null,s.a.createElement(de.c,{location:e,key:e.pathname},s.a.createElement(de.a,{exact:!0,path:"/",element:s.a.createElement(B,null)}),s.a.createElement(de.a,{path:"/about",element:s.a.createElement(I,null)}),s.a.createElement(de.a,{path:"/portfolio",element:s.a.createElement(ie,null)}),s.a.createElement(de.a,{path:"/kontakt",element:s.a.createElement(ce,null)}),s.a.createElement(de.a,{path:"*",element:s.a.createElement(me,null)})))},ye=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(l.useEffect)(function(){o(!0),setTimeout(function(){o(!1)},3e3)},[]),a?s.a.createElement("main",{className:"d-flex justify-content-center align-items-center"},s.a.createElement(ue.a,{color:"#36d7b7",size:"150px",loading:!0})):s.a.createElement(s.a.Fragment,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(i.a,{basename:"/personal"},s.a.createElement(v,null),s.a.createElement("main",null,s.a.createElement("article",null,s.a.createElement(be,null))),s.a.createElement(k,null))))};ve.render(s.a.createElement(ye,null))},58:function(e,t,a){e.exports=a.p+"static/media/sfkkozel.a4778218.png"},59:function(e,t,a){e.exports=a.p+"static/media/mineleague.92c5c0ef.png"},60:function(e,t,a){e.exports=a.p+"static/media/vue.5eefd001.png"},69:function(e,t,a){e.exports=a.p+"static/media/discord.5d2fa346.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/html.97ddc0cb.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/js.17ea81a7.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/php.569b5a5e.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/programator.dfaff328.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/spbets.ede553e6.png"},82:function(e,t,a){e.exports=a.p+"static/media/spdoky.bba921ce.png"},83:function(e,t,a){e.exports=a.p+"static/media/nekurackaspolecnost.8af7f620.png"},84:function(e,t,a){e.exports=a.p+"static/media/uveryhypoteky.48a955f7.png"},85:function(e,t,a){e.exports=a.p+"static/media/lexten.887d6cb7.png"},86:function(e,t,a){e.exports=a.p+"static/media/srp.314ee319.png"},87:function(e,t,a){e.exports=a.p+"static/media/tagbroker.9282a387.png"},88:function(e,t,a){e.exports=a.p+"static/media/lednice.a352fa0e.png"},89:function(e,t,a){e.exports=a.p+"static/media/personal.869d72ec.png"},92:function(e,t,a){e.exports=a(132)}},[[92,1,2]]]);
//# sourceMappingURL=main.958c9092.chunk.js.map