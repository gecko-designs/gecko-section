/*! For license information please see editor.bundle.js.LICENSE */
!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wp-content/plugins/gecko-section/dist/",o(o.s=31)}([function(e,t){e.exports=React},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){var r=n(22),o=n(2);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){var r=n(23);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){e.exports=window.wp.editor},function(e,t){e.exports=window.wp.element},function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return m}),n.d(t,"combineReducers",function(){return o}),n.d(t,"bindActionCreators",function(){return i}),n.d(t,"applyMiddleware",function(){return s}),n.d(t,"compose",function(){return a}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return v});function r(){return Math.random().toString(36).substring(7).split("").join(".")}var d=n(17),v={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function h(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function m(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(m)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,a=[],c=a,s=!1;function u(){c===a&&(c=a.slice())}function l(){if(s)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function p(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(s)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var n=!0;return u(),c.push(t),function(){if(n){if(s)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");n=!1,u();var e=c.indexOf(t);c.splice(e,1)}}}function f(e){if(!h(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(s)throw new Error("Reducers may not dispatch actions.");try{s=!0,i=o(i,e)}finally{s=!1}for(var t=a=c,n=0;n<t.length;n++){(0,t[n])()}return e}return f({type:v.INIT}),(r={dispatch:f,subscribe:p,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,f({type:v.REPLACE})}})[d.a]=function(){var e,n=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(l())}return t(),{unsubscribe:n(t)}}})[d.a]=function(){return this},e},r}function o(e){for(var t=Object.keys(e),d={},n=0;n<t.length;n++){var r=t[n];0,"function"==typeof e[r]&&(d[r]=e[r])}var h,m=Object.keys(d);try{!function(n){Object.keys(n).forEach(function(e){var t=n[e];if(void 0===t(void 0,{type:v.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{type:v.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+v.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(d)}catch(e){h=e}return function(e,t){if(void 0===e&&(e={}),h)throw h;for(var n,r,o,i=!1,a={},c=0;c<m.length;c++){var s=m[c],u=d[s],l=e[s],p=u(l,t);if(void 0===p){var f=(n=s,void 0,"Given "+((o=(r=t)&&r.type)&&'action "'+String(o)+'"'||"an action")+', reducer "'+n+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');throw new Error(f)}a[s]=p,i=i||p!==l}return i?a:e}}function c(e,t){return function(){return t(e.apply(this,arguments))}}function i(e,t){if("function"==typeof e)return c(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=c(a,t))}return r}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function s(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(o){return function(){var e=o.apply(void 0,arguments),t=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},n={getState:e.getState,dispatch:function(){return t.apply(void 0,arguments)}},r=i.map(function(e){return e(n)});return function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({},e,{dispatch:t=a.apply(void 0,r)(e.dispatch)})}}}},function(e,t,n){e.exports=n(24)()},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],l=0;(s=new Error(t.replace(/%s/g,function(){return u[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";e.exports=n(26)},function(e,t,n){"use strict";var r=n(15),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function f(e){return r.isMemo(e)?i:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var d=Object.defineProperty,h=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,n,r){if("string"==typeof n)return t;if(g){var o=y(n);o&&o!==g&&e(t,o,r)}var i=h(n);m&&(i=i.concat(m(n)));for(var a=f(t),c=f(n),s=0;s<i.length;++s){var u=i[s];if(!(p[u]||r&&r[u]||c&&c[u]||a&&a[u])){var l=v(n,u);try{d(t,u,l)}catch(e){}}}return t}},function(e,i,a){"use strict";(function(e,t){var n,r=a(20);n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:t;var o=Object(r.a)(n);i.a=o}).call(this,a(27),a(28)(e))},function(e,t,n){var o=n(1);e.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";var r=n(12).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},function(e,t,n){"use strict";var c=n(25);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==c){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case f:case a:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case u:return e;default:return t}}case v:case m:case i:return t}}}function g(e){return y(e)===f}t.typeOf=y,t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===c||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d)},t.isAsyncMode=function(e){return g(e)||y(e)===p},t.isConcurrentMode=g,t.isContextConsumer=function(e){return y(e)===l},t.isContextProvider=function(e){return y(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return y(e)===d},t.isFragment=function(e){return y(e)===a},t.isLazy=function(e){return y(e)===v},t.isMemo=function(e){return y(e)===m},t.isPortal=function(e){return y(e)===i},t.isProfiler=function(e){return y(e)===s},t.isStrictMode=function(e){return y(e)===c},t.isSuspense=function(e){return y(e)===h}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},,,function(e,t,n){"use strict";n.r(t);var r=n(19),o=n(1),a=n.n(o),O=(n(11),n(0)),E=n.n(O),p=n(4),f=n(3),d=n(10),i=n(5),s=n.n(i),c=n(6),u=n.n(c),l=n(7),h=n.n(l),m=n(8),v=n.n(m),y=n(9),g=n.n(y);function C(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}var b=n(13),S=n.n(b),P=E.a.createContext(null),w=function(r){function e(e){var t;t=r.call(this,e)||this;var n=e.store;return t.state={storeState:n.getState(),store:n},t}C(e,r);var t=e.prototype;return t.componentDidMount=function(){this._isMounted=!0,this.subscribe()},t.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},t.componentDidUpdate=function(e){this.props.store!==e.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},t.subscribe=function(){var e=this,n=this.props.store;this.unsubscribe=n.subscribe(function(){var t=n.getState();e._isMounted&&e.setState(function(e){return e.storeState===t?null:{storeState:t}})});var t=n.getState();t!==this.state.storeState&&this.setState({storeState:t})},t.render=function(){var e=this.props.context||P;return E.a.createElement(e.Provider,{value:this.state},this.props.children)},e}(O.Component);w.propTypes={store:S.a.shape({subscribe:S.a.func.isRequired,dispatch:S.a.func.isRequired,getState:S.a.func.isRequired}),context:S.a.object,children:S.a.any};var x=w;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}var k=n(16),T=n.n(k),N=n(14),R=n.n(N),M=n(15);function D(f,e){void 0===e&&(e={});var t=e,n=t.getDisplayName,o=void 0===n?function(e){return"ConnectAdvanced("+e+")"}:n,r=t.methodName,i=void 0===r?"connectAdvanced":r,a=t.renderCountProp,u=void 0===a?void 0:a,c=t.shouldHandleStateChanges,l=void 0===c||c,s=t.storeKey,d=void 0===s?"store":s,p=t.withRef,h=void 0!==p&&p,m=t.forwardRef,v=void 0!==m&&m,y=t.context,g=void 0===y?P:y,b=j(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);R()(void 0===u,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),R()(!h,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var S="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";R()("store"===d,"storeKey has been removed and does not do anything. "+S);var w=g;return function(a){var e=a.displayName||a.name||"Component",c=o(e),s=_({},b,{getDisplayName:o,methodName:i,renderCountProp:u,shouldHandleStateChanges:l,storeKey:d,displayName:c,wrappedComponentName:e,WrappedComponent:a}),p=b.pure,t=O.Component;p&&(t=O.PureComponent);var n=function(n){function e(e){var t;return t=n.call(this,e)||this,R()(v?!e.wrapperProps[d]:!e[d],"Passing redux store in props has been removed and does not do anything. "+S),t.selectDerivedProps=function(){var i,a,c,s,u,l;return function(e,t,n,r){if(p&&i===t&&a===e)return c;n===s&&u===r||(u=r,l=f((s=n).dispatch,r));var o=l(a=e,i=t);return c=o}}(),t.selectChildElement=function(){var r,o,i,a;return function(e,t,n){return t===r&&n===o&&a===e||(r=t,o=n,a=e,i=E.a.createElement(e,_({},t,{ref:n}))),i}}(),t.indirectRenderWrappedComponent=t.indirectRenderWrappedComponent.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}C(e,n);var t=e.prototype;return t.indirectRenderWrappedComponent=function(e){return this.renderWrappedComponent(e)},t.renderWrappedComponent=function(e){R()(e,'Could not find "store" in the context of "'+c+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+c+" in connect options.");var t,n=e.storeState,r=e.store,o=this.props;v&&(o=this.props.wrapperProps,t=this.props.forwardedRef);var i=this.selectDerivedProps(n,o,r,s);return this.selectChildElement(a,i,t)},t.render=function(){var e=this.props.context&&this.props.context.Consumer&&Object(M.isContextConsumer)(E.a.createElement(this.props.context.Consumer,null))?this.props.context:w;return E.a.createElement(e.Consumer,null,this.indirectRenderWrappedComponent)},e}(t);if(n.WrappedComponent=a,n.displayName=c,v){var r=E.a.forwardRef(function(e,t){return E.a.createElement(n,{wrapperProps:e,forwardedRef:t})});return r.displayName=c,r.WrappedComponent=a,T()(r,a)}return T()(n,a)}}var I=Object.prototype.hasOwnProperty;function L(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function A(e,t){if(L(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!I.call(t,n[o])||!L(e[n[o]],t[n[o]]))return!1;return!0}var F=n(12);function U(o){return function(e,t){var n=o(e,t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function $(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function B(o){return function(e,t){t.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,t){r.mapToProps=o,r.dependsOnOwnProps=$(o);var n=r(e,t);return"function"==typeof n&&(r.mapToProps=n,r.dependsOnOwnProps=$(n),n=r(e,t)),n},r}}var J=[function(e){return"function"==typeof e?B(e):void 0},function(e){return e?void 0:U(function(e){return{dispatch:e}})},function(t){return t&&"object"==typeof t?U(function(e){return Object(F.bindActionCreators)(t,e)}):void 0}];var W=[function(e){return"function"==typeof e?B(e):void 0},function(e){return e?void 0:U(function(){return{}})}];function q(e,t,n){return _({},n,e,t)}var z=[function(e){return"function"==typeof e?function(s){return function(e,t){t.displayName;var o,i=t.pure,a=t.areMergedPropsEqual,c=!1;return function(e,t,n){var r=s(e,t,n);return c?i&&a(r,o)||(o=r):(c=!0,o=r),o}}}(e):void 0},function(e){return e?void 0:function(){return q}}];function H(n,r,o,i){return function(e,t){return o(n(e,t),r(i,t),t)}}function X(o,i,a,c,e){var s,u,l,p,f,d=e.areStatesEqual,h=e.areOwnPropsEqual,m=e.areStatePropsEqual,n=!1;function r(e,t){var n=!h(t,u),r=!d(e,s);return s=e,u=t,n&&r?(l=o(s,u),i.dependsOnOwnProps&&(p=i(c,u)),f=a(l,p,u)):n?(o.dependsOnOwnProps&&(l=o(s,u)),i.dependsOnOwnProps&&(p=i(c,u)),f=a(l,p,u)):r?function(){var e=o(s,u),t=!m(e,l);return l=e,t&&(f=a(l,p,u)),f}():f}return function(e,t){return n?r(e,t):function(e,t){return l=o(s=e,u=t),p=i(c,u),f=a(l,p,u),n=!0,f}(e,t)}}function V(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=j(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),c=r(e,i),s=o(e,i);return(i.pure?X:H)(a,c,s,e,i)}function G(n,e,r){for(var t=e.length-1;0<=t;t--){var o=e[t](n);if(o)return o}return function(e,t){throw new Error("Invalid value of type "+typeof n+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function K(e,t){return e===t}var Y,Z,Q,ee,te,ne,re,oe,ie,ae,ce,se,ue=(Q=(Z=void 0===Y?{}:Y).connectHOC,ee=void 0===Q?D:Q,te=Z.mapStateToPropsFactories,ne=void 0===te?W:te,re=Z.mapDispatchToPropsFactories,oe=void 0===re?J:re,ie=Z.mergePropsFactories,ae=void 0===ie?z:ie,ce=Z.selectorFactory,se=void 0===ce?V:ce,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,a=void 0===i||i,c=o.areStatesEqual,s=void 0===c?K:c,u=o.areOwnPropsEqual,l=void 0===u?A:u,p=o.areStatePropsEqual,f=void 0===p?A:p,d=o.areMergedPropsEqual,h=void 0===d?A:d,m=j(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),v=G(e,ne,"mapStateToProps"),y=G(t,oe,"mapDispatchToProps"),g=G(n,ae,"mergeProps");return ee(se,_({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:v,initMapDispatchToProps:y,initMergeProps:g,pure:a,areStatesEqual:s,areOwnPropsEqual:l,areStatePropsEqual:f,areMergedPropsEqual:h},m))}),le={loading:{SUCCESS:"APP_HAS_SUCCESSFULLY_LOADED",FAILURE:"APP_IS_LOADING"},fills:{SET:"FILLS_SET",UPDATE:"FILLS_UPDATED"}};var pe=Object(F.combineReducers)({fills:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case le.fills.SET:return t.fills;default:return e}}}),fe=n(21),de=Object(fe.composeWithDevTools)({name:"component/fills"}),he=Object(F.createStore)(pe,de()),me=n(18),ve=n.n(me),ye=n(2),ge=n.n(ye),be=function(e){return{type:le.fills.SET,fills:e}},Se=function(e){function t(e){var n;return s()(this,t),n=h()(this,v()(t).call(this,e)),a()(ge()(n),"onChange",function(e){var t=JSON.parse(JSON.stringify(n.props.fills));t[n.props.root].color=e,n.props.dispatch(be(t))}),n}return g()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.root,n=e.fills;return E.a.createElement("div",null,"Color:",E.a.createElement(d.ColorPalette,{label:"Background Color",value:n[t].color,onChange:this.onChange}))}}]),t}(E.a.Component);var we=ue(function(e){return{fills:e.fills}})(Se),Oe=function(e){function t(e){var n;return s()(this,t),n=h()(this,v()(t).call(this,e)),a()(ge()(n),"onChange",function(e){var t=JSON.parse(JSON.stringify(n.props.fills));t[n.props.root][e.target.name]=e.target.value,n.props.dispatch(be(t))}),n.state={value:{repeatStyle:null,position:null,bgSize:null,bgImage:null}},n}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"isSelected",value:function(e,t){return e===t}},{key:"render",value:function(){var n=this,e=this.props,t=e.root,r=e.fills[t],o=r.repeatStyle,i=r.position,a=r.bgSize,c=r.bgImage;return E.a.createElement("div",null,E.a.createElement("label",null,"Attachment"),E.a.createElement("div",{style:{display:"flex"}},E.a.createElement(d.MediaUpload,{onSelect:function(e){var t=JSON.parse(JSON.stringify(n.props.fills));t[n.props.root].bgImage=e.url,n.props.dispatch(be(t))},type:["image"],value:null,render:function(e){var t=e.open,n={display:"inline-block",width:"50px",height:"2rem",borderRadius:"5px",backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"grey",cursor:"pointer"};return E.a.createElement("div",{onClick:t,style:n})}}),E.a.createElement("select",{type:"text",name:"repeatStyle",value:o,onChange:this.onChange},E.a.createElement("option",{value:"no-repeat",selected:this.isSelected("no-repeat",o)},"No Repeat"),E.a.createElement("option",{value:"repeat",selected:this.isSelected("repeat",o)},"Repeat"),E.a.createElement("option",{value:"repeat-x",selected:this.isSelected("repeat-x",o)},"Repeat X"),E.a.createElement("option",{value:"repeat-y",selected:this.isSelected("repeat-y",o)},"Repeat Y")),E.a.createElement("select",{type:"text",name:"position",value:i,onChange:this.onChange},E.a.createElement("option",{value:"center",selected:this.isSelected("center",i)},"Center"),E.a.createElement("option",{value:"top",selected:this.isSelected("top",i)},"Top"),E.a.createElement("option",{value:"right",selected:this.isSelected("right",i)},"Right"),E.a.createElement("option",{value:"bottom",selected:this.isSelected("bottom",i)},"Bottom"),E.a.createElement("option",{value:"left",selected:this.isSelected("left",i)},"Left")),E.a.createElement("select",{type:"text",name:"bgSize",value:a,onChange:this.onChange},E.a.createElement("option",{value:"auto",selected:this.isSelected("auto",i)},"Auto"),E.a.createElement("option",{value:"contain",selected:this.isSelected("contain",i)},"Contain"),E.a.createElement("option",{value:"cover",selected:this.isSelected("cover",i)},"Cover"))))}}]),t}(E.a.Component);var Ee=ue(function(e){return{fills:e.fills}})(Oe),Ce=function(e){function t(e){var i;return s()(this,t),i=h()(this,v()(t).call(this,e)),a()(ge()(i),"move",function(e){i.setState({dragging:!0,rel:{x:e.pageX,l:parseInt(i.ref.current.style.left)}})}),a()(ge()(i),"onMouseUp",function(e){if(i.state.dragging){var t=JSON.parse(JSON.stringify(i.props.value)).split(" "),n=i.ref.current.style.left;t[1]=n;var r=t.join(" ");console.log(r),i.props.onChange(i.props.index,r),i.setState({dragging:!1,x:null})}}),a()(ge()(i),"onMouseMove",function(e){if(i.props.canMove&&i.state.dragging){i.setState({x:e.pageX-i.state.rel.x});var t=i.ref.current.parentElement.offsetWidth,n=(e.pageX-i.state.rel.x)/t*100,r=i.state.rel.l+n,o=Math.floor(r);r<0&&(o=0),100<r&&(o=100),i.ref.current.style.left="".concat(o,"%"),e.stopPropagation(),e.preventDefault()}}),a()(ge()(i),"onClick",function(){var e=i.props.value.split(" ");i.props.onClick(i.props.index,e[0])}),i.state={value:null,dragging:!1,showColor:!1},i.ref=E.a.createRef(),i}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.value})}},{key:"componentDidUpdate",value:function(e,t){this.state.dragging&&!t.dragging?(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp)):!this.state.dragging&&t.dragging&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))}},{key:"render",value:function(){var e={height:"10px",width:"10px",top:"-5px",left:"0px",display:"block",position:"absolute",border:"1px solid grey",transform:"translateX(-50%)",background:"white",borderRadius:"99px",cursor:"pointer"},t=this.props.value.split(" ");return e.left=t[1],E.a.createElement("div",{style:e,onMouseDown:this.move,onClick:this.onClick,ref:this.ref})}}]),t}(E.a.Component),Pe=function(e){function t(e){var c;return s()(this,t),c=h()(this,v()(t).call(this,e)),a()(ge()(c),"toString",function(e){return"linear-gradient(".concat(e.angle,",").concat(e.colorStopList.join(", "),")")}),a()(ge()(c),"onChange",function(e){var t=JSON.parse(JSON.stringify(c.props.fills));t[c.props.root][e.target.name]=e.target.value,c.props.dispatch(be(t))}),a()(ge()(c),"onColorStopChange",function(e,t){var n=JSON.parse(JSON.stringify(c.props.fills));n[c.props.root].colorStopList[e]=t,c.props.dispatch(be(n))}),a()(ge()(c),"sortStops",function(e,t){var n=e.split(" "),r=t.split(" "),o=parseInt(n[1]),i=parseInt(r[1]);return o<i?-1:i<o?1:0}),a()(ge()(c),"deleteStop",function(e){var t=JSON.parse(JSON.stringify(c.props.fills));t[c.props.root].colorStopList.splice(e,1),t[c.props.root].colorStopList.sort(c.sortStops),c.props.dispatch(be(t))}),a()(ge()(c),"addStop",function(e){var t=e.target.getBoundingClientRect(),n=e.pageX-t.x,r=Math.floor(n/t.width*100),o="rgba(0,0,0,1) ".concat(r,"%"),i=JSON.parse(JSON.stringify(c.props.fills));i[c.props.root].colorStopList.push(o),i[c.props.root].colorStopList.sort(c.sortStops),c.props.dispatch(be(i))}),a()(ge()(c),"parseRGB",function(e){var t=e.replace("rgba(","").replace(/\)$/g,"").split(",");return{r:parseInt(t[0]),g:parseInt(t[1]),b:parseInt(t[2]),a:parseInt(t[3])}}),a()(ge()(c),"selectedStop",function(e,t){c.setState({selectedStop:e,selectedStopColor:c.parseRGB(c.props.fills[c.props.root].colorStopList[e])})}),a()(ge()(c),"colorPicker",function(){var e=c.props,i=e.root,a=e.fills;return E.a.createElement(f.ColorPicker,{color:c.state.selectedStopColor,onChangeComplete:function(e){var t=JSON.parse(JSON.stringify(a)),n=t[i].colorStopList[c.state.selectedStop].split(" "),r="rgba(".concat(e.rgb.r,",").concat(e.rgb.g,",").concat(e.rgb.b,",").concat(e.rgb.a,")");n[0]=r;var o=n.join(" ");t[i].colorStopList[c.state.selectedStop]=o,c.props.dispatch(be(t))}})}),c.state={selectedStop:null,selectedStopColor:{r:0,g:0,b:0,a:0}},c}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var r=this,e=this.props,t=e.root,n=e.fills[t],o=n.angle,i=n.colorStopList,a={background:"".concat(this.toString({angle:o,colorStopList:i}),", center/5% repeat url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'><rect x='0' y='0' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /><rect x='1' y='1' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /></svg>\")"),height:"25px",width:"100%",display:"block",position:"relative",margin:"0.5rem 0"};return E.a.createElement("div",null,"Linear Gradient:",E.a.createElement("input",{type:"text",name:"angle",value:o,onChange:this.onChange}),E.a.createElement("div",{style:a},E.a.createElement("div",{style:{position:"absolute",top:"-3px",height:"6px",width:"100%",cursor:"copy"},onClick:this.addStop}),i&&i.map(function(e,t){var n=!0;return 0===t&&(n=!1),t===i.length-1&&(n=!1),E.a.createElement(Ce,{value:e,canMove:n,onChange:r.onColorStopChange,index:t,onClick:r.selectedStop})})),i&&i.map(function(e,t){var n=!0;return 0===t&&(n=!1),t===i.length-1&&(n=!1),E.a.createElement("div",null,r.state.selectedStop===t&&n&&E.a.createElement("div",{onClick:function(){return r.deleteStop(t)}},"Delete Stop"),r.state.selectedStop===t&&r.colorPicker())}))}}]),t}(E.a.Component);var xe=ue(function(e){return{fills:e.fills}})(Pe),_e=function(e){function t(e){var r;return s()(this,t),r=h()(this,v()(t).call(this,e)),a()(ge()(r),"removeFill",function(e){var t=JSON.parse(JSON.stringify(r.props.fills));t.splice(e,1),r.props.dispatch(be(t))}),a()(ge()(r),"addFill",function(e){var t=JSON.parse(JSON.stringify(r.props.fills)),n={};"color"===(n.type=e)&&(n.color=""),"url"===e&&(n.repeatStyle="no-repeat",n.position="center",n.bgSize="cover",n.bgImage=""),"linear-gradient"===e&&(n.angle="0deg",n.colorStopList=["rgba(0,0,0,0.75) 0%","rgba(0,0,0,0) 100%"]),t.unshift(n),r.props.dispatch(be(t))}),a()(ge()(r),"onChange",function(e,t){var n=JSON.parse(JSON.stringify(r.state.value));n[e]=t,r.setState({value:n}),r.props.onChange(r.toString(n))}),a()(ge()(r),"toString",function(e){var t=[];return e.map(function(e){"color"===e.type&&t.push(e.color),"url"===e.type&&t.push("".concat(e.position,"/").concat(e.bgSize," ").concat(e.repeatStyle," url(").concat(e.bgImage,")")),"linear-gradient"===e.type&&t.push("linear-gradient(".concat(e.angle,", ").concat(e.colorStopList.join(", "),")"))}),t.join(", ")}),a()(ge()(r),"parseValue",function(e){function n(e){var t=[],n="",r=0,o=0;function i(){t.push(n.trim()),n=""}for(var a=0;a<e.length;a++)switch(e[a]){case",":r===o?(i(),r=o=0):n+=e[a];break;case"(":r++,n+=e[a];break;case")":o++,n+=e[a];break;default:n+=e[a]}return i(),t}var t=n(e),o=[];t.map(function(e){var r={};if(e.includes("linear-gradient")){r.type="linear-gradient";var t=n(e.replace("linear-gradient(","").replace(/\)$/g,""));r.colorStopList=[],t.map(function(e){return e.includes("deg")?r.angle=e:r.colorStopList.push(e)})}else if(e.includes("url")){r.type="url",e.split(" ").map(function(e){if(e.includes("url")){var t=e.replace("url(","");return r.bgImage=t.replace(/\)$/g,"")}if(e.includes("repeat"))return r.repeatStyle=e;if(e.includes("/")){var n=e.split("/");return r.position=n[0],void(r.bgSize=n[1])}})}else r.type="color",r.color=e;o.push(r)}),r.props.dispatch(be(o)),r.setState({value:o})}),r.state={value:[]},r}return g()(t,e),u()(t,[{key:"componentDidUpdate",value:function(e,t,n){this.props.fills!==e.fills&&this.props.onChange(this.toString(this.props.fills))}},{key:"componentDidMount",value:function(){var e=this.props.value;if(e)return this.parseValue(e);this.props.dispatch(be([]))}},{key:"render",value:function(){var n=this,e=(this.props.label,this.props.fills),t={display:"inline-block",borderRadius:"999px",height:"1.5rem",width:"1.5rem",margin:"0rem 0.25rem",background:"#DDD",cursor:"pointer",border:"1px solid #999"},r=ve()({},t,{background:"center/50% repeat url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'><rect x='0' y='0' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /><rect x='1' y='1' width='1' height='1' style='fill:rgba(0,0,0,0.5)' /></svg>\")"}),o=ve()({},t,{background:"linear-gradient(0deg, #999 0%, #DDD 100%)"});return E.a.createElement("div",null,E.a.createElement("label",null,"Add Fill:"),E.a.createElement("p",null,E.a.createElement("div",{onClick:function(){return n.addFill("linear-gradient")},style:o}),E.a.createElement("div",{onClick:function(){return n.addFill("url")},style:r}),E.a.createElement("div",{onClick:function(){return n.addFill("color")},style:t})),E.a.createElement("hr",null),e.map(function(e,t){return E.a.createElement("div",null,E.a.createElement("p",{onClick:function(){return n.removeFill(t)}},"Remove Fill"),"color"===e.type&&E.a.createElement(we,{key:t,root:t}),"url"===e.type&&E.a.createElement(Ee,{key:t,root:t}),"linear-gradient"===e.type&&E.a.createElement(xe,{key:t,root:t}),E.a.createElement("hr",null))}))}}]),t}(E.a.Component);var je,ke=ue(function(e){return{fills:e.fills}})(_e),Te=function(e){function t(){return s()(this,t),h()(this,v()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){return E.a.createElement(x,{store:he},E.a.createElement(ke,this.props))}}]),t}(E.a.Component),Ne=(je={title:Object(p.__)("Section"),icon:E.a.createElement(f.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},E.a.createElement(f.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),E.a.createElement(f.G,null,E.a.createElement(f.Path,{d:"M4,18 L20,18 L20,7 L4,7 L4,16 L20,16 L20,18 L4,18 Z M2,5.125 C2,3.95139491 2.8954305,3 4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.93492401,20 2.06429899,19.1154224 2.00340277,18 L2,5.125 Z"}))),category:"layout",description:Object(p.__)("Full width sections wrappers for themes that support them."),supports:{align:["wide","full"],html:!1},deprecated:[],attributes:{size:{type:"string"},align:{type:"string",default:"top"},minHeight:{type:"string",default:""},background:{type:"string"},contrast:{type:"boolean",default:!1}},styles:[{name:"default",label:Object(p.__)("Default"),isDefault:!0}]},a()(je,"deprecated",[{migrate:function(){},save:function(){return E.a.createElement(d.InnerBlocks.Content,null)}}]),a()(je,"edit",function(e){var t=e.attributes,n=e.setAttributes,r=e.insertBlocksAfter,o=e.className,i=t.size,a=t.background,c=t.minHeight,s=t.align,u=t.contrast,l={background:a,minHeight:c};return[E.a.createElement(d.InspectorControls,null,E.a.createElement(f.PanelBody,{title:Object(p.__)("Settings")},E.a.createElement(f.SelectControl,{label:Object(p.__)("Row Width"),value:i,options:[{value:"full",label:"Full"},{value:"lg",label:"Large"},{value:"md",label:"Medium"},{value:"sm",label:"Small"}],onChange:function(e){n({size:e})}}),E.a.createElement(f.SelectControl,{label:"Vertical Align",value:s,options:[{value:"top",label:"Top"},{value:"center",label:"Center"},{value:"bottom",label:"Bottom"}],onChange:function(e){n({align:e})}}),E.a.createElement("label",{for:"min-height"},"Minimum Height"),E.a.createElement("input",{type:"text",name:"min-height",value:c,onChange:function(e){n({minHeight:e.target.value})}})),E.a.createElement(f.PanelBody,{title:"Fills"},E.a.createElement(f.ToggleControl,{label:Object(p.__)("Add Contrast?"),help:Object(p.__)("Some themes may support contrasting backgrounds."),checked:u,onChange:function(e){return n({contrast:e})}}),E.a.createElement(Te,{label:Object(p.__)("Background"),value:a,onChange:function(e){return n({background:e})}}))),E.a.createElement(d.BlockControls,null,E.a.createElement(f.Toolbar,{controls:[{icon:"align-full-width",title:Object(p.__)("Full Width"),isActive:"full"===i,onClick:function(){return n({size:"full"})}},{icon:"align-wide",title:Object(p.__)("Wide"),isActive:"lg"===i,onClick:function(){return n({size:"lg"})}},{icon:"align-center",title:Object(p.__)("Medium"),isActive:"md"===i,onClick:function(){return n({size:"md"})}},{icon:"align-center",title:Object(p.__)("Narrow"),isActive:"sm"===i,onClick:function(){return n({size:"sm"})}}]})),E.a.createElement("div",{className:"gecko-section ".concat(o," is-size-").concat(i," is-align-").concat(s," ").concat(u?"add-contrast":""),style:l},E.a.createElement("div",{className:"gecko-section__inner"},void 0!==r&&E.a.createElement(d.InnerBlocks,null)))]}),a()(je,"save",function(){return E.a.createElement("div",null,E.a.createElement(d.InnerBlocks.Content,null))}),je);Object(r.registerBlockType)("gecko/section",Ne)}]);