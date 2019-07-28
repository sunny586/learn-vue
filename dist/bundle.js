/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./my-vue/index.js":
/*!*************************!*\
  !*** ./my-vue/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./my-vue/init.js\");\n\n\nfunction MyVue(options) {\n  this.$options = options;\n\n  this._init(options);\n} // init\n\n\nObject(_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(MyVue);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyVue);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9teS12dWUvaW5kZXguanM/OGFkNCJdLCJuYW1lcyI6WyJNeVZ1ZSIsIm9wdGlvbnMiLCIkb3B0aW9ucyIsIl9pbml0IiwiaW5pdE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxPQUFmLEVBQXVCO0FBQ3JCLE9BQUtDLFFBQUwsR0FBZ0JELE9BQWhCOztBQUNBLE9BQUtFLEtBQUwsQ0FBV0YsT0FBWDtBQUNELEMsQ0FFRDs7O0FBQ0FHLHFEQUFTLENBQUNKLEtBQUQsQ0FBVDtBQUVlQSxvRUFBZiIsImZpbGUiOiIuL215LXZ1ZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbml0TWl4aW4gZnJvbSAnLi9pbml0J1xuXG5mdW5jdGlvbiBNeVZ1ZShvcHRpb25zKXtcbiAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5faW5pdChvcHRpb25zKVxufVxuXG4vLyBpbml0XG5pbml0TWl4aW4oTXlWdWUpXG5cbmV4cG9ydCBkZWZhdWx0IE15VnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./my-vue/index.js\n");

/***/ }),

/***/ "./my-vue/init.js":
/*!************************!*\
  !*** ./my-vue/init.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./my-vue/state.js\");\n\nfunction init(MyVue) {\n  MyVue.prototype._init = function (options) {\n    var vm = this;\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"initState\"])(vm);\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9teS12dWUvaW5pdC5qcz82ODlhIl0sIm5hbWVzIjpbImluaXQiLCJNeVZ1ZSIsInByb3RvdHlwZSIsIl9pbml0Iiwib3B0aW9ucyIsInZtIiwiaW5pdFN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQ0EsT0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixHQUF3QixVQUFVQyxPQUFWLEVBQW1CO0FBQ3pDLFFBQU1DLEVBQUUsR0FBRyxJQUFYO0FBQ0FDLDREQUFTLENBQUNELEVBQUQsQ0FBVDtBQUNELEdBSEQ7QUFJRCIsImZpbGUiOiIuL215LXZ1ZS9pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdChNeVZ1ZSkge1xuICBNeVZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGNvbnN0IHZtID0gdGhpc1xuICAgIGluaXRTdGF0ZSh2bSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./my-vue/init.js\n");

/***/ }),

/***/ "./my-vue/state.js":
/*!*************************!*\
  !*** ./my-vue/state.js ***!
  \*************************/
/*! exports provided: initState, proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initState\", function() { return initState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proxy\", function() { return proxy; });\nfunction initState(vm) {\n  var opts = vm.$options;\n\n  if (opts.data) {\n    initData(vm);\n  }\n}\n\nfunction initData(vm) {\n  var data = vm.$options.data;\n  data = vm._data = typeof data === 'function' ? data.call(vm, vm) : data || {};\n  var keys = Object.keys(data);\n  var props = vm.$options.props;\n  var methods = vm.$options.methods;\n  var i = keys.length;\n\n  while (i--) {\n    var key = keys[i];\n\n    if (methods && hasOwn(methods, key)) {\n      console.warn(\"Method \\\"\".concat(key, \"\\\" has already been defined as a data property.\"), vm);\n    } else if (props && hasOwn(props, key)) {\n      console.warn(\"The data property \\\"\".concat(key, \"\\\" is already declared as a prop. \") + \"Use prop default value instead.\", vm);\n    } else {\n      proxy(vm, \"_data\", key);\n    }\n  }\n}\n\nfunction hasOwn(obj, key) {\n  return obj.hasOwnProperty(key);\n}\n\nfunction proxy(target, sourceKey, key) {\n  Object.defineProperty(target, key, {\n    enumerable: true,\n    configurable: true,\n    get: function proxyGetter() {\n      return this[sourceKey][key];\n    },\n    set: function proxySetter(val) {\n      this[sourceKey][key] = val;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9teS12dWUvc3RhdGUuanM/MDFjZSJdLCJuYW1lcyI6WyJpbml0U3RhdGUiLCJ2bSIsIm9wdHMiLCIkb3B0aW9ucyIsImRhdGEiLCJpbml0RGF0YSIsIl9kYXRhIiwiY2FsbCIsImtleXMiLCJPYmplY3QiLCJwcm9wcyIsIm1ldGhvZHMiLCJpIiwibGVuZ3RoIiwia2V5IiwiaGFzT3duIiwiY29uc29sZSIsIndhcm4iLCJwcm94eSIsIm9iaiIsImhhc093blByb3BlcnR5IiwidGFyZ2V0Iiwic291cmNlS2V5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwicHJveHlHZXR0ZXIiLCJzZXQiLCJwcm94eVNldHRlciIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7QUFDNUIsTUFBTUMsSUFBSSxHQUFHRCxFQUFFLENBQUNFLFFBQWhCOztBQUNBLE1BQUlELElBQUksQ0FBQ0UsSUFBVCxFQUFlO0FBQ2JDLFlBQVEsQ0FBQ0osRUFBRCxDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTSSxRQUFULENBQWtCSixFQUFsQixFQUFzQjtBQUNwQixNQUFJRyxJQUFJLEdBQUdILEVBQUUsQ0FBQ0UsUUFBSCxDQUFZQyxJQUF2QjtBQUNBQSxNQUFJLEdBQUdILEVBQUUsQ0FBQ0ssS0FBSCxHQUFXLE9BQU9GLElBQVAsS0FBZ0IsVUFBaEIsR0FDaEJBLElBQUksQ0FBQ0csSUFBTCxDQUFVTixFQUFWLEVBQWNBLEVBQWQsQ0FEZ0IsR0FFaEJHLElBQUksSUFBSSxFQUZWO0FBSUEsTUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUosSUFBWixDQUFiO0FBQ0EsTUFBTU0sS0FBSyxHQUFHVCxFQUFFLENBQUNFLFFBQUgsQ0FBWU8sS0FBMUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdWLEVBQUUsQ0FBQ0UsUUFBSCxDQUFZUSxPQUE1QjtBQUNBLE1BQUlDLENBQUMsR0FBR0osSUFBSSxDQUFDSyxNQUFiOztBQUNBLFNBQU9ELENBQUMsRUFBUixFQUFZO0FBQ1YsUUFBTUUsR0FBRyxHQUFHTixJQUFJLENBQUNJLENBQUQsQ0FBaEI7O0FBQ0EsUUFBSUQsT0FBTyxJQUFJSSxNQUFNLENBQUNKLE9BQUQsRUFBVUcsR0FBVixDQUFyQixFQUFxQztBQUNuQ0UsYUFBTyxDQUFDQyxJQUFSLG9CQUNhSCxHQURiLHNEQUVFYixFQUZGO0FBSUQsS0FMRCxNQUtPLElBQUlTLEtBQUssSUFBSUssTUFBTSxDQUFDTCxLQUFELEVBQVFJLEdBQVIsQ0FBbkIsRUFBaUM7QUFDdENFLGFBQU8sQ0FBQ0MsSUFBUixDQUNFLDhCQUFzQkgsR0FBdEIsMkVBREYsRUFHRWIsRUFIRjtBQUtELEtBTk0sTUFNQTtBQUNMaUIsV0FBSyxDQUFDakIsRUFBRCxXQUFjYSxHQUFkLENBQUw7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQkksR0FBaEIsRUFBcUJMLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQU9LLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQk4sR0FBbkIsQ0FBUDtBQUNEOztBQUdNLFNBQVNJLEtBQVQsQ0FBZUcsTUFBZixFQUF1QkMsU0FBdkIsRUFBa0NSLEdBQWxDLEVBQXVDO0FBQzVDTCxRQUFNLENBQUNjLGNBQVAsQ0FBc0JGLE1BQXRCLEVBQThCUCxHQUE5QixFQUFtQztBQUNqQ1UsY0FBVSxFQUFFLElBRHFCO0FBRWpDQyxnQkFBWSxFQUFFLElBRm1CO0FBR2pDQyxPQUFHLEVBQUUsU0FBU0MsV0FBVCxHQUF1QjtBQUMxQixhQUFPLEtBQUtMLFNBQUwsRUFBZ0JSLEdBQWhCLENBQVA7QUFDRCxLQUxnQztBQU1qQ2MsT0FBRyxFQUFFLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQzdCLFdBQUtSLFNBQUwsRUFBZ0JSLEdBQWhCLElBQXVCZ0IsR0FBdkI7QUFDRDtBQVJnQyxHQUFuQztBQVVEIiwiZmlsZSI6Ii4vbXktdnVlL3N0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXRTdGF0ZSh2bSkge1xuICBjb25zdCBvcHRzID0gdm0uJG9wdGlvbnNcbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YVxuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgZGF0YS5jYWxsKHZtLCB2bSkgOlxuICAgIGRhdGEgfHwge31cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgY29uc3QgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wc1xuICBjb25zdCBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kc1xuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1ldGhvZCBcIiR7a2V5fVwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuYCxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVGhlIGRhdGEgcHJvcGVydHkgXCIke2tleX1cIiBpcyBhbHJlYWR5IGRlY2xhcmVkIGFzIGEgcHJvcC4gYCArXG4gICAgICAgIGBVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuYCxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcHJveHkodm0sIGBfZGF0YWAsIGtleSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkoa2V5KVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcHJveHlHZXR0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIodmFsKSB7XG4gICAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbFxuICAgIH1cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./my-vue/state.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my-vue */ \"./my-vue/index.js\");\n\nvar vm = new _my_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  data: function data() {\n    return {\n      test: 'hello MyVue'\n    };\n  }\n});\nconsole.log(vm, 'hahaha22....');\nvm.test2 = 'aaaa';\nconsole.log(vm, 'hahaha333....');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJ2bSIsIk15VnVlIiwiZGF0YSIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwidGVzdDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLEVBQUUsR0FBRyxJQUFJQywrQ0FBSixDQUFVO0FBQ25CQyxNQURtQixrQkFDYjtBQUNKLFdBQU87QUFDTEMsVUFBSSxFQUFFO0FBREQsS0FBUDtBQUdEO0FBTGtCLENBQVYsQ0FBWDtBQVVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWixFQUFnQixjQUFoQjtBQUVBQSxFQUFFLENBQUNNLEtBQUgsR0FBVyxNQUFYO0FBRUFGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxFQUFaLEVBQWdCLGVBQWhCIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15VnVlIGZyb20gJy4uL215LXZ1ZSdcblxuY29uc3Qgdm0gPSBuZXcgTXlWdWUoe1xuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3Q6ICdoZWxsbyBNeVZ1ZSdcbiAgICB9XG4gIH1cbn0pXG5cblxuXG5jb25zb2xlLmxvZyh2bSwgJ2hhaGFoYTIyLi4uLicpXG5cbnZtLnRlc3QyID0gJ2FhYWEnXG5cbmNvbnNvbGUubG9nKHZtLCAnaGFoYWhhMzMzLi4uLicpXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });