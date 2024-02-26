(function(){"use strict";var e={8779:function(e,t,n){var o=n(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("main",[t("LoadingAnimation",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isLoading,expression:"this.$store.state.isLoading"}]}),t("HomeView",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isLoading,expression:"!this.$store.state.isLoading"}]})],1)],1)},s=[],r=function(){var e=this,t=e._self._c;return t("nav",[t("div",{staticClass:"navigation-container"},[t("div",{staticClass:"main-container"},[t("img",{staticClass:"pokeball",attrs:{src:n(9905),alt:"Pokeball"},on:{click:e.firstGeneration}}),e._m(0),t("div",{staticClass:"generation-dropdown"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.selectedGeneration,expression:"$store.state.selectedGeneration"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$store.state,"selectedGeneration",t.target.multiple?n:n[0])},e.updateSelectedGeneration]}},e._l(e.generations,(function(n){return t("option",{key:n.value,domProps:{value:n.value}},[e._v(" "+e._s(n.label)+" ")])})),0)])])])])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"logo-container"},[t("img",{staticClass:"logo",attrs:{src:n(1853),alt:"Pokemon"}})])}],l=n(3822),c={data(){return{generations:[{label:"Gen 1",value:1,start:1,end:151},{label:"Gen 2",value:2,start:152,end:251},{label:"Gen 3",value:3,start:252,end:386},{label:"Gen 4",value:4,start:387,end:493},{label:"Gen 5",value:5,start:494,end:649},{label:"Gen 6",value:6,start:650,end:721},{label:"Gen 7",value:7,start:722,end:809},{label:"Gen 8",value:8,start:810,end:905},{label:"Gen 9",value:9,start:906,end:1025},{label:"All",value:10,start:1,end:1025}]}},computed:{selectedGeneration(){return this.$store.state.selectedGeneration}},methods:{...(0,l.OI)(["setSelectedGeneration"]),loadPokemonByGeneration(){this.$store.state.isLoading=!0,this.setSelectedGeneration(this.selectedGeneration)},updateSelectedGeneration(){this.loadPokemonByGeneration()},firstGeneration(){1!=this.$store.state.selectedGeneration&&(this.$store.state.isLoading=!0,this.$store.state.selectedGeneration=1)}}},u=c,d=n(1001),p=(0,d.Z)(u,r,i,!1,null,"65948426",null),m=p.exports,h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"search-bar"},[t("div",{staticClass:"search-input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search by Pokémon or type"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),t("span",{staticClass:"search-icon"},[e._v("🔍")])]),e.searchQuery?t("span",{staticClass:"clear-button",on:{click:e.clearSearch}},[e._v("X ")]):e._e()]),t("div",{staticClass:"pokemon-cards"},e._l(e.filteredPokemonList,(function(n){return t("PokemonCard",{key:n.name,attrs:{pokemon:n},on:{cardClick:e.showPokemonDetailOverlay}})})),1),e.showOverlay?t("DetailedPokemonOverlay",{attrs:{pokemon:e.selectedPokemon,pokemonList:e.filteredPokemonList,index:e.selectedPokemon.id},on:{closeOverlay:e.closeOverlay,updatePokemon:e.updateSelectedPokemon}}):e._e()],1)},v=[],f=n(1076);const k="https://pokeapi.co/api/v2/",g=async(e,t)=>{try{const n=await f.Z.get(`${k}pokemon?limit=${t-e+1}&offset=${e-1}`),o=n.data.results,a=await Promise.all(o.map((async e=>{const t=await f.Z.get(e.url);return t.data})));return a}catch(n){throw console.error("Error fetching Pokemon list:",n),n}};var y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pokemon-card",style:{backgroundColor:e.getBackgroundColor()},on:{click:e.handleCardClick}},[t("img",{attrs:{src:e.pokemon.sprites.front_default,alt:e.pokemon.name}}),t("h3",[e._v(e._s(e.capitalizeFirstLetter(e.pokemon.name)))]),t("div",{staticClass:"types"},[t("strong",[e._v("Types:")]),e._l(e.pokemon.types,(function(n){return t("span",{key:n.slot},[e._v(" "+e._s(e.capitalizeFirstLetter(n.type.name))+" ")])}))],2),t("div",{staticClass:"stats"},e._l(e.pokemon.stats,(function(n){return t("div",{key:n.stat.name,staticClass:"stat"},[t("strong",[e._v(e._s(e.formatStatName(n.stat.name))+":")]),e._v(" "+e._s(n.base_stat)+" ")])})),0)])},_=[],b={props:{pokemon:{type:Object,required:!0}},methods:{getBackgroundColor(){const e={normal:"#a8a878",fire:"#f08030",water:"#6890F0",grass:"#78C850",electric:"#F8D030",ice:"#98D8D8",fighting:"#C03028",poison:"#A040A0",ground:"#E0C068",flying:"#A890F0",psychic:"#F85888",bug:"#A8B820",rock:"#B8A038",ghost:"#705898",dragon:"#7038F8",dark:"#705848",steel:"#B8B8D0",fairy:"#EE99AC"},t=this.pokemon.types[0]?.type.name||"normal",n=this.pokemon.types[1]?.type.name,o=e[t.toLowerCase()]||e[n?.toLowerCase()]||"";return o},handleCardClick(){this.$emit("cardClick",this.pokemon)},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)},formatStatName(e){return"hp"===e.toLowerCase()?e.toUpperCase():this.capitalizeFirstLetter(e)}}},w=b,C=(0,d.Z)(w,y,_,!1,null,"fb7ba206",null),P=C.exports,L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detailed-pokemon-overlay",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeOverlay.apply(null,arguments)}}},[t("div",{staticClass:"overlay-content",style:{backgroundColor:e.getTypeColor()}},[e.pokemon.sprites.other["official-artwork"].front_default?t("img",{staticClass:"pokemon-image",attrs:{src:e.pokemon.sprites.other["official-artwork"].front_default,alt:e.pokemon.name}}):t("img",{staticClass:"pokemon-image",attrs:{src:e.pokemon.sprites.front_default,alt:e.pokemon.name}}),t("h2",[e._v(e._s(e.capitalizeFirstLetter(e.pokemon.name)))]),t("div",{staticClass:"sections"},[t("div",{staticClass:"section"},[t("h3",[e._v("Basic Info")]),t("p",[t("strong",[e._v("Height:")]),e._v(" "+e._s(e.pokemon.height/10)+" meters")]),t("p",[t("strong",[e._v("Weight:")]),e._v(" "+e._s(e.pokemon.weight/10)+" kilograms")]),t("p",[t("strong",[e._v("Base Experience:")]),e._v(" "+e._s(e.pokemon.base_experience))]),t("p",[t("strong",[e._v("Abilities:")]),e._v(" "+e._s(e.getAbilities(e.pokemon.abilities))+" ")]),t("p",[t("strong",[e._v("Types:")]),e._v(" "+e._s(e.getTypes(e.pokemon.types)))])]),t("br"),t("div",{staticClass:"section"},[t("h3",[e._v("Stats")]),t("ul",e._l(e.pokemon.stats,(function(n){return t("li",{key:n.stat.name},[t("strong",[e._v(e._s(e.formatStatName(n.stat.name))+":")]),e._v(" "+e._s(n.base_stat)+" ")])})),0)])]),e.pokemonList.length>1?t("button",{staticClass:"arrow-button left",on:{click:function(t){return e.navigatePokemon(-1)}}},[e._v(" ‹ ")]):e._e(),e.pokemonList.length>1?t("button",{staticClass:"arrow-button right",on:{click:function(t){return e.navigatePokemon(1)}}},[e._v(" › ")]):e._e(),t("button",{staticClass:"close-button",on:{click:e.closeOverlay}},[e._v("X")])])])},G=[],O={props:{pokemon:{type:Object,required:!0},pokemonList:{type:Array,required:!0},index:{type:Number,required:!0}},mounted(){window.addEventListener("keydown",this.handleKeyDown)},beforeDestroy(){window.removeEventListener("keydown",this.handleKeyDown)},data(){return{currentIndex:0}},methods:{handleKeyDown(e){"ArrowLeft"===e.key&&this.pokemonList.length>1?this.navigatePokemon(-1):"ArrowRight"===e.key&&this.pokemonList.length>1?this.navigatePokemon(1):"Escape"===e.key&&this.closeOverlay()},closeOverlay(){this.$emit("closeOverlay")},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)},getAbilities(e){return e.map((e=>this.capitalizeFirstLetter(e.ability.name))).join(", ")},getTypes(e){return e.map((e=>this.capitalizeFirstLetter(e.type.name))).join(", ")},getTypeColor(){const e={normal:"#A8A878",fire:"#F08030",water:"#6890F0",grass:"#78C850",electric:"#F8D030",ice:"#98D8D8",fighting:"#C03028",poison:"#A040A0",ground:"#E0C068",flying:"#A890F0",psychic:"#F85888",bug:"#A8B820",rock:"#B8A038",ghost:"#705898",dragon:"#7038F8",dark:"#705848",steel:"#B8B8D0",fairy:"#EE99AC"},t=this.pokemon.types[0]?.type.name||"normal";return e[t.toLowerCase()]||"#fff"},formatStatName(e){return"hp"===e.toLowerCase()?"HP":this.capitalizeFirstLetter(e)},navigatePokemon(e){if(this.pokemonList&&this.pokemonList.length>0){const t=this.pokemonList.find((e=>e.id===this.index));if(t){const n=this.pokemonList.indexOf(t),o=(n+e+this.pokemonList.length)%this.pokemonList.length;this.currentIndex=o,this.$emit("updatePokemon",this.pokemonList[o])}}}}},x=O,A=(0,d.Z)(x,L,G,!1,null,"b8c79316",null),$=A.exports,F={data(){return{detailedPokemonList:[],searchQuery:"",selectedGeneration:1,showOverlay:!1,selectedPokemon:null,pokemonList:[]}},components:{PokemonCard:P,DetailedPokemonOverlay:$},mounted(){this.loadPokemonData()},methods:{clearSearch(){this.searchQuery=""},async loadPokemonData(){this.$store.state.isLoading=!0;try{await this.loadPokemonByGeneration(),await this.preloadImages(),this.$nextTick((()=>{this.$store.state.isLoading=!1}))}catch(e){console.error("Error loading Pokémon data:",e),this.$store.state.isLoading=!1}},async preloadImages(){const e=this.detailedPokemonList.map((e=>new Promise(((t,n)=>{const o=new Image;o.src=e.sprites.front_default,o.onload=t,o.onerror=n}))));await Promise.all(e)},async loadPokemonByGeneration(){const e=this.$store.state.selectedGeneration,t=this.getGenerationInfo(e);try{const e=await g(t.start,t.end);this.detailedPokemonList=e}catch(n){console.error("Error fetching Pokémon list:",n)}},getGenerationInfo(e){return this.$store.state.generations.find((t=>t.value===e))},filterPokemonList(){const e=this.searchQuery.toLowerCase();return e?this.detailedPokemonList.filter((t=>t.name.toLowerCase().includes(e)||t.types.some((t=>t.type.name.toLowerCase().includes(e))))):this.detailedPokemonList},updateSelectedPokemon(e){this.selectedPokemon=e},showPokemonDetailOverlay(e){this.showOverlay=!0,this.selectedPokemon=e},closeOverlay(){this.showOverlay=!1,this.selectedPokemon=null}},watch:{"$store.state.selectedGeneration":"loadPokemonData"},computed:{filteredPokemonList(){return this.filterPokemonList()}}},S=F,D=(0,d.Z)(S,h,v,!1,null,"ab680eba",null),B=D.exports,E=function(){var e=this;e._self._c;return e._m(0)},T=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"pokeball"})])}],Z={},j=(0,d.Z)(Z,E,T,!1,null,"1d80d039",null),N=j.exports,z={components:{NavBar:m,HomeView:B,LoadingAnimation:N}},I=z,Q=(0,d.Z)(I,a,s,!1,null,null,null),q=Q.exports;o.ZP.use(l.ZP);var H=new l.ZP.Store({state:{isLoading:!0,selectedGeneration:1,generations:[{label:"Gen 1",value:1,start:1,end:151},{label:"Gen 2",value:2,start:152,end:251},{label:"Gen 3",value:3,start:252,end:386},{label:"Gen 4",value:4,start:387,end:493},{label:"Gen 5",value:5,start:494,end:649},{label:"Gen 6",value:6,start:650,end:721},{label:"Gen 7",value:7,start:722,end:809},{label:"Gen 8",value:8,start:810,end:905},{label:"Gen 9",value:9,start:906,end:1025},{label:"All",value:10,start:1,end:1025}]},mutations:{setSelectedGeneration(e,t){e.selectedGeneration=t}}});o.ZP.config.productionTip=!1,new o.ZP({render:e=>e(q),store:H}).$mount("#app")},1853:function(e,t,n){e.exports=n.p+"img/Pokemon.5241303c.png"},9905:function(e,t,n){e.exports=n.p+"img/pokeball.206f7bb6.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,s){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,r=o[0],i=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(t&&t(o);c<r.length;c++)s=r[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},o=self["webpackChunkpokedex"]=self["webpackChunkpokedex"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8779)}));o=n.O(o)})();
//# sourceMappingURL=app.f10cec03.js.map