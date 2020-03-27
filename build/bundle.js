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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_partie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
//TODO

var partie = new _classes_partie__WEBPACK_IMPORTED_MODULE_0__["Partie"](5, 4);
partie.initialiser();
partie.lancer();
partie.afficher_gagnant();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _joueur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _gobelet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
//TODO


var Partie = /** @class */ (function () {
    function Partie(nb_tours, nb_des) {
        var _this = this;
        this.initialiser = function () {
            var player = new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]('Nicole');
            var player1 = new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]('Michel');
            var player2 = new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]('Jean');
            var player3 = new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]('Mireille');
            _this.tabPlayers.push(player);
            _this.tabPlayers.push(player1);
        };
        this.lancer = function () {
            for (var i = 0; i < _this._nb_tours; i++) {
                console.log("Tour " + i);
                for (var j = 0; j < _this.tabPlayers.length; j++) {
                    _this.tabPlayers[j].jouer(_this.gobelet);
                    console.log(_this.tabPlayers[j].name + " : " + _this.tabPlayers[j].score);
                }
            }
        };
        this.afficher_gagnant = function () {
            var winner = new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]('Toto');
            for (var i = 0; i < _this.tabPlayers.length; i++) {
                for (var j = 0; j < _this.tabPlayers.length; j++) {
                    if (_this.tabPlayers[i].score > _this.tabPlayers[j].score) {
                        winner = _this.tabPlayers[i];
                    }
                }
            }
            console.log("Le vainqueur est : " + winner.name);
        };
        this._nb_tours = nb_tours;
        this.gobelet = new _gobelet__WEBPACK_IMPORTED_MODULE_1__["Gobelet"](nb_des);
        this.tabPlayers = Array();
    }
    return Partie;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joueur", function() { return Joueur; });
var Joueur = /** @class */ (function () {
    function Joueur(name) {
        var _this = this;
        this.jouer = function (gobelet) {
            gobelet.lancer();
            _this._score += gobelet.getValeur();
        };
        this._nom = name;
        this._score = 0;
    }
    Object.defineProperty(Joueur.prototype, "name", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Joueur.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Joueur;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gobelet", function() { return Gobelet; });
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
//TODO

var Gobelet = /** @class */ (function () {
    function Gobelet(nb_des) {
        var _this = this;
        this.lancer = function () {
            _this._val = 0;
            for (var i = 0; i < _this._des.length; i++) {
                var dice = new _de__WEBPACK_IMPORTED_MODULE_0__["de"]();
                _this._val += dice.lancer();
            }
        };
        this.afficher_score = function () {
            console.log("Score du gobelet : " + _this.getValeur());
        };
        this._val = 0;
        this._des = Array();
        for (var i = 0; i < nb_des; i++) {
            this._des.push(0);
        }
    }
    Gobelet.prototype.getValeur = function () {
        return this._val;
    };
    return Gobelet;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "de", function() { return de; });
//TODO
var de = /** @class */ (function () {
    function de() {
        var _this = this;
        //------
        this.Min = 1;
        this.Max = 6;
        this.lancer = function () {
            return _this.Min + Math.floor((Math.random() * (_this.Max - _this.Min)));
        };
        this._valeur = 0;
    }
    Object.defineProperty(de.prototype, "value", {
        get: function () {
            return this._valeur;
        },
        enumerable: true,
        configurable: true
    });
    return de;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3BhcnRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9qb3VldXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZ29iZWxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsTUFBTTtBQUVvQztBQUUxQyxJQUFNLE1BQU0sR0FBWSxJQUFJLHNEQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsTUFBTSxD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RCxDQUFDOzs7Ozs7Ozs7QUNyQ0Q7QUFBQTtBQUFBLE1BQU07QUFFTjtJQU9JO1FBQUEsaUJBRUM7UUFORCxRQUFRO1FBQ0EsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBVWpCLFdBQU0sR0FBRztZQUNaLE9BQU8sS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFURyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQVcscUJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFLTCxTQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL1RPRE9cclxuXHJcbmltcG9ydCB7IFBhcnRpZSB9IGZyb20gXCIuL2NsYXNzZXMvcGFydGllXCI7XHJcblxyXG5jb25zdCBwYXJ0aWUgOiBQYXJ0aWUgPSBuZXcgUGFydGllKDUsNCk7XHJcblxyXG5wYXJ0aWUuaW5pdGlhbGlzZXIoKTtcclxucGFydGllLmxhbmNlcigpO1xyXG5wYXJ0aWUuYWZmaWNoZXJfZ2FnbmFudCgpOyIsIi8vVE9ET1xyXG5pbXBvcnQgeyBKb3VldXIgfSBmcm9tIFwiLi9qb3VldXJcIjtcclxuaW1wb3J0IHsgR29iZWxldCB9IGZyb20gXCIuL2dvYmVsZXRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJQbGF5ZXJzOiBKb3VldXJbXTtcclxuICAgIHByaXZhdGUgX25iX3RvdXJzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGdvYmVsZXQ6IEdvYmVsZXQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5iX3RvdXJzOiBudW1iZXIsIG5iX2RlczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbmJfdG91cnMgPSBuYl90b3VycztcclxuICAgICAgICB0aGlzLmdvYmVsZXQgPSBuZXcgR29iZWxldChuYl9kZXMpO1xyXG4gICAgICAgIHRoaXMudGFiUGxheWVycyA9IEFycmF5PEpvdWV1cj4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGlzZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYXllcjogSm91ZXVyID0gbmV3IEpvdWV1cignTmljb2xlJyk7XHJcbiAgICAgICAgbGV0IHBsYXllcjE6IEpvdWV1ciA9IG5ldyBKb3VldXIoJ01pY2hlbCcpO1xyXG4gICAgICAgIGxldCBwbGF5ZXIyOiBKb3VldXIgPSBuZXcgSm91ZXVyKCdKZWFuJyk7XHJcbiAgICAgICAgbGV0IHBsYXllcjM6IEpvdWV1ciA9IG5ldyBKb3VldXIoJ01pcmVpbGxlJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiUGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy50YWJQbGF5ZXJzLnB1c2gocGxheWVyMSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYW5jZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uYl90b3VyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG91ciBcIiArIGkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGFiUGxheWVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJQbGF5ZXJzW2pdLmpvdWVyKHRoaXMuZ29iZWxldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYlBsYXllcnNbal0ubmFtZSArIFwiIDogXCIgKyB0aGlzLnRhYlBsYXllcnNbal0uc2NvcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZmZpY2hlcl9nYWduYW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB3aW5uZXIgPSBuZXcgSm91ZXVyKCdUb3RvJyk7IFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiUGxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGFiUGxheWVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiUGxheWVyc1tpXS5zY29yZSA+IHRoaXMudGFiUGxheWVyc1tqXS5zY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbm5lciA9IHRoaXMudGFiUGxheWVyc1tpXTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGUgdmFpbnF1ZXVyIGVzdCA6IFwiICsgd2lubmVyLm5hbWUpO1xyXG4gICAgfVxyXG59IiwiLy9UT0RPXHJcbmltcG9ydCB7IEdvYmVsZXQgfSBmcm9tICcuL2dvYmVsZXQnO1xyXG5pbXBvcnQgeyBkZSB9IGZyb20gJy4vZGUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBKb3VldXIge1xyXG5cclxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGpvdWVyID0gKGdvYmVsZXQ6IEdvYmVsZXQpID0+IHtcclxuICAgICAgICBnb2JlbGV0LmxhbmNlcigpOyBcclxuICAgICAgICB0aGlzLl9zY29yZSArPSBnb2JlbGV0LmdldFZhbGV1cigpOyBcclxuICAgIH1cclxuXHJcbn0iLCIvL1RPRE9cclxuaW1wb3J0IHsgZGUgfSBmcm9tICcuL2RlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdvYmVsZXQge1xyXG5cclxuICAgIHByaXZhdGUgX3ZhbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGVzOiBBcnJheTxudW1iZXI+O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYl9kZXM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3ZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZGVzID0gQXJyYXk8bnVtYmVyPigpOyBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iX2RlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rlcy5wdXNoKDApOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbGV1cigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhbmNlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLl92YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWNlOiBkZSA9IG5ldyBkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl92YWwgKz0gZGljZS5sYW5jZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFmZmljaGVyX3Njb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY29yZSBkdSBnb2JlbGV0IDogJHt0aGlzLmdldFZhbGV1cigpfWApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiLy9UT0RPXHJcblxyXG5leHBvcnQgY2xhc3MgZGUge1xyXG5cclxuICAgIHByaXZhdGUgX3ZhbGV1cjogbnVtYmVyO1xyXG4gICAgLy8tLS0tLS1cclxuICAgIHByaXZhdGUgTWluOiBudW1iZXIgPSAxOyBcclxuICAgIHByaXZhdGUgTWF4OiBudW1iZXIgPSA2OyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl92YWxldXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsZXVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsYW5jZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuTWluICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICh0aGlzLk1heCAtIHRoaXMuTWluKSkpOyBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=