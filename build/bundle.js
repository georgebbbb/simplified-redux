/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createStore = __webpack_require__(1);

	var _createStore2 = _interopRequireDefault(_createStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This is a reducer, a pure function with (state, action) => state signature.
	 * It describes how an action transforms the state into the next state.
	 *
	 * The shape of the state is up to you: it can be a primitive, an array, an object,
	 * or even an Immutable.js data structure. The only important part is that you should
	 * not mutate the state object, but return a new object if the state changes.
	 *
	 * In this example, we use a `switch` statement and strings, but you can use a helper that
	 * follows a different convention (such as function maps) if it makes sense for your project.
	 */
	function counter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'INCREMENT':
	      return state + 1;
	    case 'DECREMENT':
	      return state - 1;
	    default:
	      return state;
	  }
	}

	// Create a Redux store holding the state of your app.
	// Its API is { subscribe, dispatch, getState }.
	var store = (0, _createStore2.default)(counter);
	console.log(store);
	// You can subscribe to the updates manually, or use bindings to your view layer.
	store.subscribe(function () {
	  return console.log(store.getState());
	});

	// The only way to mutate the internal state is to dispatch an action.
	// The actions can be serialized, logged or stored and later replayed.
	store.dispatch({ type: 'INCREMENT' });
	// 1
	store.dispatch({ type: 'INCREMENT' });
	// 2
	store.dispatch({ type: 'DECREMENT' });
	// 1

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (reducer, initialState) {
	  var currentState = initialState;
	  var currentReducer = reducer;
	  var listeners = [];
	  function getState() {
	    return currentState;
	  }
	  function dispatch(action) {
	    currentState = currentReducer(action);
	    listeners.forEach(function (listener) {
	      return listener();
	    });
	  }
	  function subscribe(listener) {
	    listeners.push(listener);
	  }
	  return {
	    dispatch: dispatch,
	    getState: getState,
	    subscribe: subscribe
	  };
	};

/***/ }
/******/ ]);