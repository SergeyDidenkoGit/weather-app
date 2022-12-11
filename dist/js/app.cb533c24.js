(function(){"use strict";var e={3947:function(e,t,a){var r=a(9242),s=a(3396);const n={class:"content"};function i(e,t,a,r,i,c){const o=(0,s.up)("navbar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s._)("div",n,[(0,s.Wm)(l)])],64)}a(7658);var c=a.p+"img/logo.cfaed864.png";const o=e=>((0,s.dD)("data-v-79f6ba0d"),e=e(),(0,s.Cn)(),e),l={class:"navbar"},u={class:"navbar__wrapper"},h=o((()=>(0,s._)("img",{class:"navbar__logo",src:c,alt:"Logo"},null,-1))),d=[h],p={class:"navbar__buttons"};function m(e,t,a,r,n,i){const c=(0,s.up)("custom-button");return(0,s.wg)(),(0,s.iD)("section",l,[(0,s._)("div",u,[(0,s._)("figure",{class:"navbar__logo-wrapper",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},d),(0,s._)("div",p,[(0,s.Wm)(c,{class:"navbar__button-main",onClick:t[1]||(t[1]=t=>e.$router.push("/weather-app/"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Main")])),_:1}),(0,s.Wm)(c,{class:"navbar__button-favorites",onClick:t[2]||(t[2]=t=>e.$router.push("/weather-app/favorites"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Favorites")])),_:1})])])])}var w={name:"navbar"},_=a(89);const f=(0,_.Z)(w,[["render",m],["__scopeId","data-v-79f6ba0d"]]);var g=f,v={components:{Navbar:g}};const y=(0,_.Z)(v,[["render",i]]);var W=y,D=a(7139);const C=e=>((0,s.dD)("data-v-346aff7c"),e=e(),(0,s.Cn)(),e),k={class:"main"},b={class:"search"},I={class:"search__wrapper"},T=C((()=>(0,s._)("div",{class:"f-button"},null,-1))),O={class:"main__wrapper"},P={class:"main__header"},S={class:"weather"},L={class:"weather__buttons"};function U(e,t,a,n,i,c){const o=(0,s.up)("autocomplete-input"),l=(0,s.up)("custom-button"),u=(0,s.up)("weather-card"),h=(0,s.up)("weak-weather-card"),d=(0,s.up)("weather-cities"),p=(0,s.up)("weather-graph");return(0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",b,[(0,s._)("div",I,[(0,s.Wm)(o,{class:"search-input"}),T])]),(0,s._)("div",O,[(0,s._)("div",null,[(0,s._)("h1",P,"Weather in "+(0,D.zw)(e.city),1)]),(0,s._)("div",S,[(0,s._)("div",L,[(0,s.Wm)(l,{class:(0,D.C_)(["weather__button day",{weather__button_active:i.weatherRange[0].active}]),onClick:t[0]||(t[0]=e=>c.changeWeatherRange(0))},{default:(0,s.w5)((()=>[(0,s.Uk)("Day")])),_:1},8,["class"]),(0,s.Wm)(l,{class:(0,D.C_)(["weather__button weak",{weather__button_active:i.weatherRange[1].active}]),onClick:t[1]||(t[1]=e=>c.changeWeatherRange(1))},{default:(0,s.w5)((()=>[(0,s.Uk)("Weak")])),_:1},8,["class"])]),(0,s.Wm)(r.W3,{name:"weather-card"},{default:(0,s.w5)((()=>[i.weatherRange[0].active&&!e.isLoading?((0,s.wg)(),(0,s.j4)(u,{key:"weatherCard"})):(0,s.kq)("",!0),i.weatherRange[1].active&&!e.isLoading?((0,s.wg)(),(0,s.j4)(h,{key:"weakWeatherCard"})):(0,s.kq)("",!0)])),_:1})]),(0,s.Wm)(d),(0,s.Wm)(p)])])}const z=e=>((0,s.dD)("data-v-164be892"),e=e(),(0,s.Cn)(),e),F={class:"weather-card"},Z={class:"weather-card__wrapper"},B={class:"weather-card__date"},H={class:"weather-card__temperature"},j={key:0},q={class:"weather-card__feels"},x=z((()=>(0,s._)("span",null,"Feels ",-1))),M={key:0},K={class:"weather-card__clouds"},R={class:"weather-card__other-info"},$={class:"weather-card__wind"},G=z((()=>(0,s._)("span",{class:"name"},"Wind",-1))),V=z((()=>(0,s._)("span",{class:"symbol"},"m/s",-1))),Y={class:"weather-card__pressure"},E=z((()=>(0,s._)("span",{class:"name"},"Pressure",-1))),N=z((()=>(0,s._)("span",{class:"symbol"},"mm Hg",-1))),A={class:"weather-card__humidity"},J=z((()=>(0,s._)("span",{class:"name"},"Humidity",-1))),Q=z((()=>(0,s._)("span",{class:"symbol"},"%",-1)));function X(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("section",F,[(0,s._)("div",Z,[(0,s._)("div",B,[(0,s._)("span",null,(0,D.zw)(e.date),1)]),(0,s._)("div",H,[e.currentTemperature>0?((0,s.wg)(),(0,s.iD)("span",j,"+")):(0,s.kq)("",!0),(0,s._)("span",null,(0,D.zw)(e.currentTemperature),1)]),(0,s._)("div",q,[x,e.currentFeels>0?((0,s.wg)(),(0,s.iD)("span",M,"+")):(0,s.kq)("",!0),(0,s._)("span",null,(0,D.zw)(e.currentFeels),1)]),(0,s._)("div",K,[(0,s._)("span",null,(0,D.zw)(e.currentClouds),1)]),(0,s._)("div",R,[(0,s._)("div",$,[G,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(e.currentWind),1),V])]),(0,s._)("div",Y,[E,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(e.currentPressure),1),N])]),(0,s._)("div",A,[J,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(e.currentHumidity),1),Q])])])])])}var ee=a(65),te={name:"weather-card",data(){return{}},computed:{...(0,ee.Se)({city:"weather/city",date:"weather/date",currentTemperature:"weather/currentTemperature",currentFeels:"weather/currentFeels",currentClouds:"weather/currentClouds",currentWind:"weather/currentWind",currentPressure:"weather/currentPressure",currentHumidity:"weather/currentHumidity"})}};const ae=(0,_.Z)(te,[["render",X],["__scopeId","data-v-164be892"]]);var re=ae;const se=e=>((0,s.dD)("data-v-b77415ba"),e=e(),(0,s.Cn)(),e),ne={class:"weak-weather-card"},ie={class:"weather-card__date"},ce={class:"weather-card__temperature"},oe={key:0},le={class:"weather-card__feels"},ue=se((()=>(0,s._)("span",null,"Feels ",-1))),he={key:0},de={class:"weather-card__clouds"},pe={class:"weather-card__other-info"},me={class:"weather-card__wind"},we=se((()=>(0,s._)("span",{class:"name"},"Wind",-1))),_e=se((()=>(0,s._)("span",{class:"symbol"},"m/s",-1))),fe={class:"weather-card__pressure"},ge=se((()=>(0,s._)("span",{class:"name"},"Pressure",-1))),ve=se((()=>(0,s._)("span",{class:"symbol"},"mm Hg",-1))),ye={class:"weather-card__humidity"},We=se((()=>(0,s._)("span",{class:"name"},"Humidity",-1))),De=se((()=>(0,s._)("span",{class:"symbol"},"%",-1)));function Ce(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("section",ne,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.formattedWeakWeatherDate,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"weak-weather-card__element",key:e.dt},[(0,s._)("div",ie,[(0,s._)("span",null,(0,D.zw)(e.date),1)]),(0,s._)("div",ce,[e.temperature>0?((0,s.wg)(),(0,s.iD)("span",oe,"+")):(0,s.kq)("",!0),(0,s._)("span",null,(0,D.zw)(e.temperature),1)]),(0,s._)("div",le,[ue,e.feels>0?((0,s.wg)(),(0,s.iD)("span",he,"+")):(0,s.kq)("",!0),(0,s._)("span",null,(0,D.zw)(e.feels),1)]),(0,s._)("div",de,[(0,s._)("span",null,(0,D.zw)(e.clouds),1)]),(0,s._)("div",pe,[(0,s._)("div",me,[we,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(e.wind),1),_e])]),(0,s._)("div",fe,[ge,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(e.pressure),1),ve])]),(0,s._)("div",ye,[We,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(e.humidity),1),De])])])])))),128))])}var ke={name:"weak-weather-card",data(){return{}},computed:{...(0,ee.Se)({weakWeatherDate:"weather/weakWeatherDate",formattedWeakWeatherDate:"weather/formattedWeakWeatherDate"})}};const be=(0,_.Z)(ke,[["render",Ce],["__scopeId","data-v-b77415ba"]]);var Ie=be;const Te={class:"weather-cities"},Oe={class:"weather-cities__buttons"},Pe={class:"weather-cities__wrapper"};function Se(e,t,a,r,n,i){const c=(0,s.up)("custom-button"),o=(0,s.up)("city-weather-item");return(0,s.wg)(),(0,s.iD)("section",Te,[(0,s._)("div",Oe,[(0,s.Wm)(c,{class:"weather-cities__button",onClick:i.addCity},{default:(0,s.w5)((()=>[(0,s.Uk)("Add")])),_:1},8,["onClick"]),(0,s.Wm)(c,{class:"weather-cities__button",onClick:t[0]||(t[0]=t=>i.deleteCity(e.e))},{default:(0,s.w5)((()=>[(0,s.Uk)("Delete")])),_:1}),(0,s.Wm)(c,{class:"weather-cities__button",onClick:i.clearCities},{default:(0,s.w5)((()=>[(0,s.Uk)("Clear")])),_:1},8,["onClick"]),(0,s.Wm)(c,{class:"weather-cities__button favorites-button",onClick:i.addToFavorites},{default:(0,s.w5)((()=>[(0,s.Uk)("Add Favorites")])),_:1},8,["onClick"])]),(0,s._)("div",Pe,[((0,s.wg)(),(0,s.j4)(s.Ob,null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.formattedCitiesWeather,(e=>((0,s.wg)(),(0,s.j4)(o,{class:(0,D.C_)({selected:e.id===n.itemData?.id}),key:e.id,"weather-data":e,onClick:t=>i.getItemData(e)},null,8,["class","weather-data","onClick"])))),128))],1024))])])}const Le=e=>((0,s.dD)("data-v-6cef7136"),e=e(),(0,s.Cn)(),e),Ue={class:"city-weather-item"},ze={class:"city-weather-item__wrapper"},Fe={class:"city-weather-item__city"},Ze={class:"city-weather-item__temperature"},Be={key:0},He={class:"city-weather-item__feels"},je=Le((()=>(0,s._)("span",null,"Feels ",-1))),qe={key:0},xe={class:"city-weather-item__clouds"},Me={class:"city-weather-item__other-info"},Ke={class:"city-weather-item__wind"},Re=Le((()=>(0,s._)("span",{class:"name"},"Wind",-1))),$e=Le((()=>(0,s._)("span",{class:"symbol"},"m/s",-1))),Ge={class:"city-weather-item__pressure"},Ve=Le((()=>(0,s._)("span",{class:"name"},"Pressure",-1))),Ye=Le((()=>(0,s._)("span",{class:"symbol"},"mm Hg",-1))),Ee={class:"city-weather-item__humidity"},Ne=Le((()=>(0,s._)("span",{class:"name"},"Humidity",-1))),Ae=Le((()=>(0,s._)("span",{class:"symbol"},"%",-1)));function Je(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("section",Ue,[(0,s._)("div",ze,[(0,s._)("div",Fe,[(0,s._)("span",null,(0,D.zw)(a.weatherData.name),1)]),(0,s._)("div",Ze,[a.weatherData.temperature>0?((0,s.wg)(),(0,s.iD)("span",Be,"+")):(0,s.kq)("",!0),(0,s._)("span",null,(0,D.zw)(a.weatherData.temperature),1)]),(0,s._)("div",He,[je,a.weatherData.feels>0?((0,s.wg)(),(0,s.iD)("span",qe,"+")):(0,s.kq)("",!0),(0,s._)("span",null,(0,D.zw)(a.weatherData.feels),1)]),(0,s._)("div",xe,[(0,s._)("span",null,(0,D.zw)(a.weatherData.clouds),1)]),(0,s._)("div",Me,[(0,s._)("div",Ke,[Re,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(a.weatherData.wind),1),$e])]),(0,s._)("div",Ge,[Ve,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(a.weatherData.pressure),1),Ye])]),(0,s._)("div",Ee,[Ne,(0,s._)("span",null,[(0,s.Uk)((0,D.zw)(a.weatherData.humidity),1),Ae])])])])])}var Qe={name:"city-weather-item",props:{weatherData:{type:Object,default:{}}},data(){return{}}};const Xe=(0,_.Z)(Qe,[["render",Je],["__scopeId","data-v-6cef7136"]]);var et=Xe,tt={name:"weather-cities",components:{cityWeatherItem:et},data(){return{itemData:null}},computed:{...(0,ee.rn)({citiesWeather:e=>e.weather.citiesWeather,currentWeatherData:e=>e.weather.currentWeatherData}),...(0,ee.Se)({formattedCitiesWeather:"weather/formattedCitiesWeather"})},methods:{...(0,ee.OI)({setCitiesWeather:"weather/setCitiesWeather",deleteCitiesWeatherItem:"weather/deleteCitiesWeatherItem",clearCitiesWeather:"weather/clearCitiesWeather"}),...(0,ee.nv)({fetchWeatherByIP:"weather/fetchWeatherByIP"}),addCity(){this.setCitiesWeather(this.currentWeatherData)},deleteCity(){this.itemData&&(this.deleteCitiesWeatherItem(this.itemData),this.resetItemData())},clearCities(){this.clearCitiesWeather()},getLocalStorageItem(){return JSON.parse(localStorage.getItem("favoritesCitiesWeather"))},setLocalStorageData(e){e.push(this.itemData),localStorage.setItem("favoritesCitiesWeather",JSON.stringify(e))},checkLocalStorage(){return this.getLocalStorageItem().some((e=>e.id===this.itemData.id))},addToFavorites(){let e=[];this.getLocalStorageItem()?this.checkLocalStorage()?console.log("Element exist"):(e=this.getLocalStorageItem(),this.setLocalStorageData(e)):this.setLocalStorageData(e),this.resetItemData()},getItemData(e){console.log(e),this.itemData=e},resetItemData(){this.itemData=[]}}};const at=(0,_.Z)(tt,[["render",Se],["__scopeId","data-v-18748a3f"]]);var rt=at;const st={ref:"weatherGraph",class:"weather-graph__canvas"};function nt(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("section",{class:"weather-graph",key:n.componentKey},[(0,s._)("canvas",st,null,512)])}var it=a(8454),ct={name:"weather-graph",data(){return{graphInstance:null,componentKey:0}},computed:{...(0,ee.rn)({weatherData:e=>e.weather.weatherData}),...(0,ee.Se)({city:"weather/city"}),listForecast(){return this.weatherData?.list?.splice(0,10)},listTemperatures(){return this.listForecast?.map((e=>Math.round(e.main.temp)))},listTemperatureTimes(){const e={hour:"numeric",minute:"numeric"};return this.listForecast?.map((t=>{let a=new Date(1e3*t.dt).toLocaleString("en-US",e);return`${a}`}))},graphOptions(){return{type:"line",data:{labels:this.listTemperatureTimes,datasets:[{label:"Temperature",data:this.listTemperatures,backgroundColor:"#0099ff",borderColor:"#0099ff",borderWidth:2}]},options:{responsive:!0,lineTension:1,scales:{y:{type:"linear"}},plugins:{legend:{align:"end"}}}}}},methods:{initGraph(){setTimeout((()=>{const e=this.$refs.weatherGraph;this.graphInstance=new it.ZP(e,this.graphOptions)}),100)}},watch:{graphOptions:{handler(){this.componentKey+=1,this.initGraph()},deep:!0}},mounted(){this.initGraph()}};const ot=(0,_.Z)(ct,[["render",nt],["__scopeId","data-v-09b02c32"]]);var lt=ot;const ut={class:"autocomplete"},ht={key:0,class:"autocomplete__dropdown"},dt=["onClick"];function pt(e,t,a,r,n,i){const c=(0,s.up)("custom-input");return(0,s.wg)(),(0,s.iD)("section",ut,[(0,s.Wm)(c,{ref:"autocompleteInput",class:"autocomplete__input",modelValue:r.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchTerm=e),placeholder:"Type city name ..."},null,8,["modelValue"]),r.searchCities.length>0?((0,s.wg)(),(0,s.iD)("ul",ht,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.searchCities,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"autocomplete__option",key:e,onClick:t=>i.selectCity(e)},(0,D.zw)(e),9,dt)))),128))])):(0,s.kq)("",!0)])}var mt=a(4311),wt=a(4870);function _t(){const e=(0,wt.iH)([]);let t=(0,wt.iH)("");const a=async()=>{try{const t=await mt.Z.get("https://countriesnow.space/api/v0.1/countries/population/cities");e.value=t.data.data.map((e=>e.city))}catch(t){console.log(t)}},r=(0,s.Fl)((()=>""===t.value?[]:e.value.filter((e=>e.indexOf(t.value)>-1||e.toLowerCase().indexOf(t.value)>-1))));return(0,s.bv)(a),{searchTerm:t,searchCities:r}}var ft={name:"autocomplete-input",data(){return{}},methods:{...(0,ee.nv)({fetchCurrentWeatherByCity:"weather/fetchCurrentWeatherByCity",fetchWeatherByCity:"weather/fetchWeatherByCity"}),selectCity(e){this.fetchCurrentWeatherByCity(e),this.fetchWeatherByCity(e),this.searchTerm=""}},setup(){const{searchTerm:e,searchCities:t}=_t();return{searchTerm:e,searchCities:t}}};const gt=(0,_.Z)(ft,[["render",pt],["__scopeId","data-v-1cc774e0"]]);var vt=gt,yt={components:{WeatherCard:re,WeakWeatherCard:Ie,WeatherCities:rt,WeatherGraph:lt,AutocompleteInput:vt},data(){return{weatherRange:[{active:!0},{active:!1}]}},computed:{...(0,ee.rn)({ipData:e=>e.ip.ipData,weatherData:e=>e.weather.weatherData,isLoading:e=>e.weather.isLoading}),...(0,ee.Se)({city:"weather/city"})},methods:{...(0,ee.OI)({}),...(0,ee.nv)({fetchIP:"ip/fetchIP",fetchCurrentWeatherByIP:"weather/fetchCurrentWeatherByIP",fetchWeatherByIP:"weather/fetchWeatherByIP"}),changeWeatherRange(e){this.weatherRange.forEach(((t,a)=>{t.active=a===e}))}},async created(){await this.fetchIP(),await this.fetchCurrentWeatherByIP(this.ipData),await this.fetchWeatherByIP(this.ipData)}};const Wt=(0,_.Z)(yt,[["render",U],["__scopeId","data-v-346aff7c"]]);var Dt=Wt;function Ct(e,t,a,r,s,n){return null}var kt={};const bt=(0,_.Z)(kt,[["render",Ct]]);var It=bt,Tt=a(2483);const Ot=[{path:"/weather-app/",component:Dt},{path:"/weather-app/favorites",component:It}],Pt=(0,Tt.p7)({history:(0,Tt.PO)(),routes:Ot});var St=Pt;const Lt={state:()=>({ipData:null,apiKey:"bb691e293eec4a21a615c07be7216208"}),getters:{},mutations:{setIP(e,t){e.ipData=t}},actions:{async fetchIP({state:e,commit:t}){try{const a=await mt.Z.get("https://api.ipgeolocation.io/ipgeo",{params:{apiKey:e.apiKey}});t("setIP",a.data)}catch(a){console.log(a)}}},namespaced:!0},Ut={state:()=>({isLoading:!0,units:"metric",appid:"d8e5bc3db521d7a0cb06d99ce63610aa",limit:1,currentWeatherData:null,weatherData:null,dateOptions:{month:"long",day:"numeric"},citiesWeather:[]}),getters:{city(e){return`${e.weatherData?.city?.name}, ${e.weatherData?.city?.country}`},date(e){return new Date(1e3*e.currentWeatherData?.dt).toLocaleString("en-US",e.dateOptions)},currentTemperature(e){return Math.floor(e.currentWeatherData?.main?.temp)},currentFeels(e){return Math.round(e.currentWeatherData?.main?.feels_like)},currentClouds(e){return e.currentWeatherData?.weather[0]?.description[0].toUpperCase()+e.currentWeatherData?.weather[0]?.description?.slice(1)},currentWind(e){return e.currentWeatherData?.wind?.speed},currentPressure(e){return(.750063755419211*e.currentWeatherData?.main?.pressure).toFixed(0)},currentHumidity(e){return e.currentWeatherData?.main?.humidity},weakWeatherDate(e){const t=[],a=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate());let r=new Date(a.setDate(a.getDate()+1));for(let s=0;s<e.weatherData?.list.length;s++)e.weatherData?.list[s].dt>Date.parse(r)/1e3&&(t.push(e.weatherData?.list[s]),r.setDate(r.getDate()+1));return t},formattedWeakWeatherDate(e,t){return t.weakWeatherDate?.map((t=>({id:t?.dt,date:new Date(1e3*t?.dt).toLocaleString("en-US",e.dateOptions),temperature:Math.round(t?.main?.temp),feels:Math.round(t?.main?.feels_like),clouds:t?.weather[0]?.description[0].toUpperCase()+t?.weather[0]?.description?.slice(1),wind:t?.wind?.speed,pressure:(.750063755419211*t?.main?.pressure).toFixed(0),humidity:t?.main?.humidity})))},formattedCitiesWeather(e){return e.citiesWeather.map((t=>({id:t.id,name:t.name,coord:t.coord,date:new Date(1e3*t?.dt).toLocaleString("en-US",e.dateOptions),temperature:Math.round(t?.main?.temp),feels:Math.round(t?.main?.feels_like),clouds:t?.weather[0]?.description[0].toUpperCase()+t?.weather[0]?.description?.slice(1),wind:t?.wind?.speed,pressure:(.750063755419211*t?.main?.pressure).toFixed(0),humidity:t?.main?.humidity})))}},mutations:{setCurrentWeatherData(e,t){e.currentWeatherData=t},setWeatherData(e,t){e.weatherData=t},setLoading(e,t){e.isLoading=t},setCitiesWeather(e,t){0===e.citiesWeather.length?e.citiesWeather.push(t):e.citiesWeather.length<5?e.citiesWeather.some((e=>e.dt===t.dt))||e.citiesWeather.push(t):console.log("Can't add")},deleteCitiesWeatherItem(e,t){e.citiesWeather.length>0&&(e.citiesWeather=e.citiesWeather.filter((e=>e.id!==t.id)))},clearCitiesWeather(e){e.citiesWeather=[]}},actions:{async fetchCurrentWeatherByIP({state:e,commit:t},a){try{const r=await mt.Z.get("https://api.openweathermap.org/data/2.5/weather",{params:{lat:a.latitude,lon:a.longitude,units:e.units,appid:e.appid}});t("setCurrentWeatherData",r.data),t("setCitiesWeather",r.data)}catch(r){console.log(r)}finally{setTimeout((()=>{t("setLoading",!1)}),1e3)}},async fetchWeatherByIP({state:e,commit:t},a){try{const r=await mt.Z.get("https://api.openweathermap.org/data/2.5/forecast",{params:{lat:a.latitude,lon:a.longitude,units:e.units,appid:e.appid}});t("setWeatherData",r.data)}catch(r){console.log(r)}finally{setTimeout((()=>{t("setLoading",!1)}),1e3)}},async fetchCurrentWeatherByCity({state:e,commit:t},a){try{const r=await mt.Z.get("http://api.openweathermap.org/geo/1.0/direct",{params:{q:a,limit:e.limit,appid:e.appid}}).then((t=>mt.Z.get("https://api.openweathermap.org/data/2.5/weather",{params:{lat:t.data[0].lat,lon:t.data[0].lon,units:e.units,appid:e.appid}})));t("setCurrentWeatherData",r.data)}catch(r){console.log(r)}finally{t("setLoading",!1)}},async fetchWeatherByCity({state:e,commit:t},a){try{const r=await mt.Z.get("http://api.openweathermap.org/geo/1.0/direct",{params:{q:a,limit:e.limit,appid:e.appid}}).then((t=>mt.Z.get("https://api.openweathermap.org/data/2.5/forecast",{params:{lat:t.data[0].lat,lon:t.data[0].lon,units:e.units,appid:e.appid}})));t("setWeatherData",r.data)}catch(r){console.log(r)}finally{t("setLoading",!1)}}},namespaced:!0};var zt=(0,ee.MT)({modules:{ip:Lt,weather:Ut}});const Ft={class:"button"};function Zt(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("button",Ft,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var Bt={name:"custom-button"};const Ht=(0,_.Z)(Bt,[["render",Zt],["__scopeId","data-v-2409a554"]]);var jt=Ht;const qt=["value"];function xt(e,t,a,r,n,i){return(0,s.wg)(),(0,s.iD)("input",{value:a.modelValue,onInput:t[0]||(t[0]=(...e)=>i.updateInput&&i.updateInput(...e)),type:"text"},null,40,qt)}var Mt={name:"custom-input",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const Kt=(0,_.Z)(Mt,[["render",xt],["__scopeId","data-v-886738c0"]]);var Rt=Kt,$t=[jt,Rt];const Gt=(0,r.ri)(W);$t.forEach((e=>{Gt.component(e.name,e)})),Gt.use(zt).use(St).mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,n){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var c=!0,o=0;o<r.length;o++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(c=!1,n<i&&(i=n));if(c){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/weather-app/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,i=r[0],c=r[1],o=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(o)var u=o(a)}for(t&&t(r);l<i.length;l++)n=i[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3947)}));r=a.O(r)})();
//# sourceMappingURL=app.cb533c24.js.map