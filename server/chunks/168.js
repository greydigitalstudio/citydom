exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 2716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
var e=__webpack_require__(8038);function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/t(e);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}const s=(e,t)=>{const n={};for(const o in e)-1===t.indexOf(o)&&(n[o]=e[o]);return n},r=/*#__PURE__*/n.default.createContext(null),a=/*#__PURE__*/n.default.createContext(null),c=e=>t=>/*#__PURE__*/n.default.createElement(a.Consumer,null,s=>/*#__PURE__*/n.default.createElement(e,o({parent:s},t))),i=(t=[])=>{const[n,o]=e.useState(!1),s=e.useRef(t),a=(()=>{const t=e.useContext(r);if(null===t)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return t})(),c=a.getApi();return e.useEffect(()=>{a.load().then(()=>Promise.all(s.current.map(a.loadModule))).then(()=>o(!0))},[]),n&&c?c:null},l=()=>{},u=["onLoad","onError","modules","apiLoader"];function p(t,r=!1,a=[]){return c=>{const{width:p,height:d,modules:f=[],onLoad:m=l}=c,h=i(a.concat(f)),y=!r||!!h,b=s(c,u);return e.useEffect(()=>h?m(h):void 0,[h]),y?/*#__PURE__*/n.default.createElement(t,o({ymaps:h},b)):/*#__PURE__*/n.default.createElement("div",{style:{width:p,height:d}})}}const d="undefined"!=typeof window,f={lang:"ru_RU",load:"",ns:"",mode:"release"},m=/^on(?=[A-Z])/;function h(e){return Object.keys(e).reduce((t,n)=>{if(m.test(n)){const o=n.replace(m,"").toLowerCase();t._events[o]=e[n]}else t[n]=e[n];return t},{_events:{}})}function y(e,t,n){"function"==typeof n&&e.events.add(t,n)}function b(e,t,n){"function"==typeof n&&e.events.remove(t,n)}function v(e,t,n){Object.keys(Object.assign({},t,n)).forEach(o=>{t[o]!==n[o]&&(b(e,o,t[o]),y(e,o,n[o]))})}const j=e=>"default"+e.charAt(0).toUpperCase()+e.slice(1);function O(e,t){return void 0!==e[t]||void 0===e[j(t)]}function E(e,t,n){return(O(e,t)?e[t]:e[j(t)])||n}function g(e,t,n=null){if(e!==t){if(e&&("current"in e?e.current=null:"function"==typeof e&&e(null)),!t)return;"current"in t?t.current=n:"function"==typeof t&&t(n)}}function C(e){const{width:t,height:n,style:o,className:s}=e;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:t,height:n}}}class R extends n.default.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){const{onError:n=(()=>{})}=this.props;n(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}const _=e=>({onError:t,...o})=>/*#__PURE__*/n.default.createElement(R,{onError:t},/*#__PURE__*/n.default.createElement(e,o));class x extends n.default.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=x.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){null!==this.instance&&x.updateObject(this.instance,e,this.props)}componentWillUnmount(){x.unmountObject(this.instance,this.props)}render(){const e=C(this.props),t=h(this.props),r=s(t,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);/*#__PURE__*/return n.default.createElement(a.Provider,{value:this.state.instance},/*#__PURE__*/n.default.createElement("div",o({ref:this._getRef},e,r),this.props.children))}static mountObject(e,t,n){const{instanceRef:o,_events:s}=h(n),r=new t(e,E(n,"state"),E(n,"options"));return Object.keys(s).forEach(e=>y(r,e,s[e])),g(null,o,r),r}static updateObject(e,t,n){const{_events:o,instanceRef:s}=h(n),{_events:r,instanceRef:a}=h(t);if(O(n,"state")){const o=E(t,"state",{}),s=E(n,"state",{});o.type!==s.type&&e.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&e.behaviors.disable(o.behaviors),s.behaviors&&e.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&e.setZoom(s.zoom),s.center&&o.center!==s.center&&e.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&e.setBounds(s.bounds)}if(O(n,"options")){const o=E(t,"options"),s=E(n,"options",{});o!==s&&e.options.set(s)}E(t,"width")===E(n,"width")&&E(t,"height")===E(n,"height")||e.container.fitToViewport(),v(e,r,o),g(a,s,e)}static unmountObject(e,t){const{instanceRef:n,_events:o}=h(t);null!==e&&(Object.keys(o).forEach(t=>b(e,t,o[t])),e.destroy(),g(n))}}const w=_(p(x,!0,["Map"]));w.defaultProps={width:320,height:240};class P extends n.default.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&P.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){null!==this.state.instance&&P.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,P.unmountObject(this.state.instance,this.props)}render(){const e=C(this.props);/*#__PURE__*/return n.default.createElement("div",o({ref:this._getRef},e))}static mountObject(e,t,n){const{instanceRef:o,_events:s}=h(n),r=E(n,"point"),a=E(n,"locateOptions"),c=E(n,"options");return new Promise((n,i)=>{t.locate(r,a).done(r=>{if(r.length>0){const a=new t.Player(e,r[0],c);g(null,o,a),Object.keys(s).forEach(e=>y(a,e,s[e])),n(a)}},i)})}static updateObject(e,t,n){const{_events:o,instanceRef:s}=h(n),{_events:r,instanceRef:a}=h(t);if(O(n,"options")){const o=E(t,"options"),s=E(n,"options");o!==s&&e.options.set(s)}if(O(n,"point")){const o=E(n,"point"),s=E(t,"point"),r=E(n,"locateOptions");o!==s&&e.moveTo(o,r)}v(e,r,o),g(a,s,e)}static unmountObject(e,t){const{instanceRef:n,_events:o}=h(t);null!==e&&(Object.keys(o).forEach(t=>b(e,t,o[t])),g(n))}}const M=_(p(P,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]));M.defaultProps={width:320,height:240};class k extends n.default.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=k.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&k.updateControl(this.instance,e,this.props)}componentWillUnmount(){k.unmountControl(this.instance,this.props)}render(){/*#__PURE__*/return n.default.createElement(a.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){const{instanceRef:n,parent:o,lazy:s,_events:r}=h(t),a=new e({data:E(t,"data"),options:E(t,"options"),state:E(t,"state"),mapTypes:E(t,"mapTypes"),lazy:s});if(Object.keys(r).forEach(e=>y(a,e,r[e])),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(a);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error(`No parent found to mount ${t.name}`);o.add(a)}return g(null,n,a),a}static updateControl(e,t,n){const{_events:o,instanceRef:s}=h(n),{_events:r,instanceRef:a}=h(t);if(O(n,"options")){const o=E(t,"options"),s=E(n,"options");o!==s&&e.options.set(s)}if(O(n,"data")){const o=E(t,"data"),s=E(n,"data");o!==s&&e.data.set(s)}if(O(n,"state")){const o=E(t,"state"),s=E(n,"state");o!==s&&e.state.set(s)}if(O(n,"mapTypes")){const o=E(t,"mapTypes"),s=E(n,"mapTypes");o!==s&&(e.removeAllMapTypes(),s.forEach(t=>e.addMapType(t)))}v(e,r,o),g(a,s,e)}static unmountControl(e,t){const{instanceRef:n,parent:o,_events:s}=h(t);null!==e&&(Object.keys(s).forEach(t=>b(e,t,s[t])),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),g(n))}}var S=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"Button"})),!0,["control.Button"]))),T=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"FullscreenControl"})),!0,["control.FullscreenControl"]))),U=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"GeolocationControl"})),!0,["control.GeolocationControl"]))),D=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"ListBox"})),!0,["control.ListBox"]))),B=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"ListBoxItem"})),!0,["control.ListBoxItem"]))),A=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"RouteButton"})),!0,["control.RouteButton"]))),L=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"RouteEditor"})),!0,["control.RouteEditor"]))),$=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"RoutePanel"})),!0,["control.RoutePanel"]))),N=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"RulerControl"})),!0,["control.RulerControl"]))),Z=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"SearchControl"})),!0,["control.SearchControl"]))),z=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"TrafficControl"})),!0,["control.TrafficControl"]))),G=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"TypeSelector"})),!0,["control.TypeSelector"]))),I=_(c(p(e=>/*#__PURE__*/n.default.createElement(k,o({},e,{name:"ZoomControl"})),!0,["control.ZoomControl"])));class W extends n.default.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=W.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.state.instance&&W.updateObject(this.instance,e,this.props)}componentWillUnmount(){W.unmountObject(this.instance,this.props)}render(){/*#__PURE__*/return n.default.createElement(a.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){const{instanceRef:n,parent:o,_events:s}=h(t),r=new e(E(t,"options"));if(Object.keys(s).forEach(e=>y(r,e,s[e])),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount Clusterer");o.add(r)}return g(null,n,r),r}static updateObject(e,t,n){const{_events:o,instanceRef:s}=h(n),{_events:r,instanceRef:a}=h(t);if(O(n,"options")){const o=E(t,"options"),s=E(n,"options");o!==s&&e.options.set(s)}v(e,r,o),g(a,s,e)}static unmountObject(e,t){const{instanceRef:n,parent:o,_events:s}=h(t);null!==e&&(Object.keys(s).forEach(t=>b(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),g(n))}}var Y=_(c(p(W,!0,["Clusterer"])));class q extends n.default.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const e=q.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&q.updateObject(this.instance,e,this.props)}componentWillUnmount(){q.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:n,parent:o,_events:s}=h(t),r=E(t,"options",{}),a=E(t,"features",{}),c=E(t,"filter",null),i=E(t,"objects",{}),l=E(t,"clusters",{}),u=new e(r);if(u.add(a||[]),u.setFilter(c),u.objects.options.set(i),u.clusters.options.set(l),Object.keys(s).forEach(e=>y(u,e,s[e])),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(u);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ObjectManager");o.add(u)}return g(null,n,u),u}static updateObject(e,t,n){const{_events:o,instanceRef:s}=h(n),{_events:r,instanceRef:a}=h(t);if(O(n,"options")){const o=E(t,"options"),s=E(n,"options");o!==s&&e.options.set(s)}if(O(n,"objects")){const o=E(t,"objects"),s=E(n,"objects");o!==s&&e.objects.options.set(s)}if(O(n,"clusters")){const o=E(t,"clusters"),s=E(n,"clusters");o!==s&&e.clusters.options.set(s)}if(O(n,"filter")){const o=E(t,"filter"),s=E(n,"filter");o!==s&&e.setFilter(s)}if(O(n,"features")){const o=E(t,"features"),s=E(n,"features");o!==s&&(e.remove(o),e.add(s))}v(e,r,o),g(a,s,e)}static unmountObject(e,t){const{instanceRef:n,parent:o,_events:s}=h(t);null!==e&&(Object.keys(s).forEach(t=>b(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),g(n))}}var F=_(c(p(q,!0,["ObjectManager"])));class V extends n.default.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:e,ymaps:t,dangerZone:n}=this.props,o=V.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(t[e]):t[e],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(e){null!==this.instance&&V.updateObject(this.instance,e,this.props)}componentWillUnmount(){V.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:n,parent:o,_events:s}=h(t),r=new e(E(t,"geometry"),E(t,"properties"),E(t,"options"));if(Object.keys(s).forEach(e=>y(r,e,s[e])),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error(`No parent found to mount ${t.name}`);o.add(r)}return g(null,n,r),r}static updateObject(e,t,n){const{_events:o,instanceRef:s}=h(n),{_events:r,instanceRef:a}=h(t);if(O(n,"geometry")){const o=E(t,"geometry",{}),s=E(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(e.geometry.setCoordinates(s[0]),e.geometry.setRadius(s[1])):e.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&e.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&e.geometry.setRadius(s.radius))}if(O(n,"properties")){const o=E(t,"properties"),s=E(n,"properties");o!==s&&e.properties.set(s)}if(O(n,"options")){const o=E(t,"options"),s=E(n,"options");o!==s&&e.options.set(s)}v(e,r,o),g(a,s,e)}static unmountObject(e,t){const{instanceRef:n,parent:o,_events:s}=h(t);null!==e&&(Object.keys(s).forEach(t=>b(e,t,s[t])),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),g(n))}}const H={modifyConstructor(e){function t(t,n,o){e.call(this,{geometry:t,properties:n},o)}return t.prototype=e.prototype,t}};var J=_(c(p(e=>/*#__PURE__*/n.default.createElement(V,o({},e,{name:"GeoObject",dangerZone:H})),!0,["GeoObject"]))),K=_(c(p(e=>/*#__PURE__*/n.default.createElement(V,o({},e,{name:"Circle"})),!0,["Circle"]))),Q=_(c(p(e=>/*#__PURE__*/n.default.createElement(V,o({},e,{name:"Placemark"})),!0,["Placemark"]))),X=_(c(p(e=>/*#__PURE__*/n.default.createElement(V,o({},e,{name:"Polygon"})),!0,["Polygon"]))),ee=_(c(p(e=>/*#__PURE__*/n.default.createElement(V,o({},e,{name:"Polyline"})),!0,["Polyline"]))),te=_(c(p(e=>/*#__PURE__*/n.default.createElement(V,o({},e,{name:"Rectangle"})),!0,["Rectangle"])));__webpack_unused_export__=S,__webpack_unused_export__=K,exports.LA=Y,__webpack_unused_export__=T,__webpack_unused_export__=J,__webpack_unused_export__=U,__webpack_unused_export__=D,__webpack_unused_export__=B,exports.D5=w,__webpack_unused_export__=F,__webpack_unused_export__=M,exports.ah=Q,__webpack_unused_export__=X,__webpack_unused_export__=ee,__webpack_unused_export__=te,__webpack_unused_export__=A,__webpack_unused_export__=L,__webpack_unused_export__=$,__webpack_unused_export__=N,__webpack_unused_export__=Z,__webpack_unused_export__=z,__webpack_unused_export__=G,exports.Yy=t=>{const{version:o="2.1",enterprise:s=!1,query:a={lang:"ru_RU",load:"",ns:""},preload:c=!1,children:i}=t,l=e.useRef((e=>{const{query:t=f}=e,n=Date.now().toString(32),o=t.ns||"",s="__yandex-maps-api-onload__$$"+n,r="__yandex-maps-api-onerror__$$"+n,a=d?window:{},c={};let i;const l=()=>o?a[o]:i,u=()=>{delete a[s],delete a[r]};return{load:()=>{if(l())return Promise.resolve(i);if(c[o])return c[o];const n={onload:s,onerror:r,...f,...t},p=Object.keys(n).map(e=>`${e}=${n[e]}`).join("&"),d=[`https://${e.enterprise?"enterprise.":""}api-maps.yandex.ru`,e.version,"?"+p].join("/");return c[o]=new Promise((e,t)=>{a[s]=t=>{u(),t.ready(()=>{i=t,e(t)})},a[r]=e=>{u(),t(e)},(e=>new Promise((t,n)=>{const o=document.createElement("script");o.type="text/javascript",o.onload=t,o.onerror=n,o.src=e,o.async=!0,document.head.appendChild(o)}))(d).catch(a[r])}),c[o]},getApi:l,loadModule:e=>new Promise((t,n)=>{i.modules.require(e).done(n=>{n.forEach(t=>{((e,t,n,o=!1)=>{const s="string"==typeof t?t.split("."):t.slice();let r,a=e;for(;s.length>1;)r=s.shift(),a[r]||(a[r]={}),a=a[r];const c=s[0];a[c]=!0===o&&a[c]||n})(i,e,t,!0)}),t(i)},n)})}})({version:o,enterprise:s,query:a,preload:c}));return e.useEffect(()=>{c&&l.current.load()},[l.current]),/*#__PURE__*/n.default.createElement(r.Provider,{value:l.current},i)},__webpack_unused_export__=I,__webpack_unused_export__=i,__webpack_unused_export__=p;
//# sourceMappingURL=react-yandex-maps.js.map


/***/ }),

/***/ 1590:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7574);

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(5162));

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

module.exports = exports["default"];

/***/ }),

/***/ 5162:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ 8123:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = removeClass;

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

module.exports = exports["default"];

/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5284);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 7071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5830)();
}


/***/ }),

/***/ 5284:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 3894:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(7071));

var _addClass2 = _interopRequireDefault(__webpack_require__(1590));

var _removeClass = _interopRequireDefault(__webpack_require__(8123));

var _react = _interopRequireDefault(__webpack_require__(8038));

var _Transition = _interopRequireDefault(__webpack_require__(4079));

var _PropTypes = __webpack_require__(4367);

var _reflow = __webpack_require__(1832);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass2.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0, _reflow.forceReflow)(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/_react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
var _default = CSSTransition;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 2609:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(7071));

var _react = _interopRequireDefault(__webpack_require__(8038));

var _reactDom = _interopRequireDefault(__webpack_require__(8704));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(5033));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : _reactDom.default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/_react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? 0 : {};
var _default = ReplaceTransition;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 9039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = exports.modes = void 0;

var _react = _interopRequireDefault(__webpack_require__(8038));

var _propTypes = _interopRequireDefault(__webpack_require__(7071));

var _Transition = __webpack_require__(4079);

var _TransitionGroupContext = _interopRequireDefault(__webpack_require__(7949));

var _leaveRenders, _enterRenders;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (_react.default.isValidElement(oldChildren) && _react.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};
exports.modes = modes;

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return _react.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition.ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, _react.default.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition.ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return _react.default.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition.ENTERED, _react.default.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [_react.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition.ENTERED, _react.default.cloneElement(children, {
        in: true
      }));
    })
  }), _react.default.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition.ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition.ENTERING && props.mode === modes.in) {
      return {
        status: _Transition.ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition.EXITING
      };
    }

    return {
      current: _react.default.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition.ENTERING:
        component = enterRenders[mode](data);
        break;

      case _Transition.EXITING:
        component = leaveRenders[mode](data);
        break;

      case _Transition.ENTERED:
        component = current;
    }

    return /*#__PURE__*/_react.default.createElement(_TransitionGroupContext.default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(_react.default.Component);

SwitchTransition.propTypes =  false ? 0 : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};
var _default = SwitchTransition;
exports["default"] = _default;

/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(7071));

var _react = _interopRequireDefault(__webpack_require__(8038));

var _reactDom = _interopRequireDefault(__webpack_require__(8704));

var _config = _interopRequireDefault(__webpack_require__(9445));

var _PropTypes = __webpack_require__(4367);

var _TransitionGroupContext = _interopRequireDefault(__webpack_require__(7949));

var _reflow = __webpack_require__(1832);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0, _reflow.forceReflow)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [_reactDom.default.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config.default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : _reactDom.default.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config.default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : _react.default.cloneElement(_react.default.Children.only(children), childProps))
    );
  };

  return Transition;
}(_react.default.Component);

Transition.contextType = _TransitionGroupContext.default;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var _default = Transition;
exports["default"] = _default;

/***/ }),

/***/ 5033:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(7071));

var _react = _interopRequireDefault(__webpack_require__(8038));

var _TransitionGroupContext = _interopRequireDefault(__webpack_require__(7949));

var _ChildMapping = __webpack_require__(2200);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/_react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/_react.default.createElement(_TransitionGroupContext.default.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
var _default = TransitionGroup;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 7949:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(8038));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react.default.createContext(null);

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 9445:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _default = {
  disabled: false
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 5701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.Kv = void 0;

var _CSSTransition = _interopRequireDefault(__webpack_require__(3894));

exports.Kv = _CSSTransition.default;

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(2609));

__webpack_unused_export__ = _ReplaceTransition.default;

var _SwitchTransition = _interopRequireDefault(__webpack_require__(9039));

__webpack_unused_export__ = _SwitchTransition.default;

var _TransitionGroup = _interopRequireDefault(__webpack_require__(5033));

__webpack_unused_export__ = _TransitionGroup.default;

var _Transition = _interopRequireDefault(__webpack_require__(4079));

__webpack_unused_export__ = _Transition.default;

var _config = _interopRequireDefault(__webpack_require__(9445));

__webpack_unused_export__ = _config.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 2200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(8038);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ 4367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(7071));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? 0 : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? 0 : null;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ 1832:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.forceReflow = void 0;

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

exports.forceReflow = forceReflow;

/***/ }),

/***/ 7574:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;