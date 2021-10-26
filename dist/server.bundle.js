/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("const a = ctx => {\n  ctx.body = \"hello cherry\";\n};\n\nmodule.exports = a;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtbGVhcm4vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJhIiwiY3R4IiwiYm9keSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLENBQUMsR0FBR0MsR0FBRyxJQUFJO0FBQ2JBLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXLGNBQVg7QUFDSCxDQUZEOztBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYSA9IGN0eCA9PiB7XG4gICAgY3R4LmJvZHkgPSBcImhlbGxvIGNoZXJyeVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhOyJdLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/***/ ((module) => {

eval("const b = ctx => {\n  ctx.body = \"hello minyue\";\n};\n\nmodule.exports = b;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtbGVhcm4vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJiIiwiY3R4IiwiYm9keSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLENBQUMsR0FBR0MsR0FBRyxJQUFJO0FBQ2JBLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXLGNBQVg7QUFDSCxDQUZEOztBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYiA9IGN0eCA9PiB7XG4gICAgY3R4LmJvZHkgPSBcImhlbGxvIG1pbnl1ZVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiOyJdLCJmaWxlIjoiLi9zcmMvYXBpL2IuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"src\";\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst router = __webpack_require__(/*! ./routes/router */ \"./src/routes/router.js\");\n\nconst app = new Koa();\napp.use(helmet());\napp.use(statics(path.join(__dirname, './public')));\napp.use(router());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsa0JBQUQsQ0FBcEI7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixtQkFBTyxDQUFDLDhCQUFELENBQXZCOztBQUNBLE1BQU1HLE1BQU0sR0FBR0gsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxNQUFNSSxNQUFNLEdBQUdKLG1CQUFPLENBQUMsK0NBQUQsQ0FBdEI7O0FBRUEsTUFBTUssR0FBRyxHQUFHLElBQUlOLEdBQUosRUFBWjtBQUVBTSxHQUFHLENBQUNDLEdBQUosQ0FBUUgsTUFBTSxFQUFkO0FBQ0FFLEdBQUcsQ0FBQ0MsR0FBSixDQUFRSixPQUFPLENBQUNELElBQUksQ0FBQ00sSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFVBQXJCLENBQUQsQ0FBZjtBQUNBSCxHQUFHLENBQUNDLEdBQUosQ0FBUUYsTUFBTSxFQUFkO0FBRUFDLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLElBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtbGVhcm4vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLb2EgPSByZXF1aXJlKCdrb2EnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBzdGF0aWNzID0gcmVxdWlyZSgna29hLXN0YXRpYycpO1xuY29uc3QgaGVsbWV0ID0gcmVxdWlyZSgna29hLWhlbG1ldCcpO1xuY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcm91dGVyJyk7XG5cbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcblxuYXBwLnVzZShoZWxtZXQoKSk7XG5hcHAudXNlKHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4vcHVibGljJykpKTtcbmFwcC51c2Uocm91dGVyKCkpO1xuXG5hcHAubGlzdGVuKDMwMDApOyJdLCJuYW1lcyI6WyJLb2EiLCJyZXF1aXJlIiwicGF0aCIsInN0YXRpY3MiLCJoZWxtZXQiLCJyb3V0ZXIiLCJhcHAiLCJ1c2UiLCJqb2luIiwiX19kaXJuYW1lIiwibGlzdGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRoute.js":
/*!******************************!*\
  !*** ./src/routes/aRoute.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/aRoute', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2FSb3V0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLGdDQUFELENBQWpCOztBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLEVBQWY7QUFFQUcsTUFBTSxDQUFDQyxHQUFQLENBQVcsU0FBWCxFQUFzQkYsQ0FBdEI7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxNQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYS1sZWFybi8uL3NyYy9yb3V0ZXMvYVJvdXRlLmpzPzNmZDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xuY29uc3QgYSA9IHJlcXVpcmUoJy4uL2FwaS9hJyk7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVyLmdldCgnL2FSb3V0ZScsIGEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiXSwibmFtZXMiOlsiUm91dGVyIiwicmVxdWlyZSIsImEiLCJyb3V0ZXIiLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/aRoute.js\n");

/***/ }),

/***/ "./src/routes/bRoute.js":
/*!******************************!*\
  !*** ./src/routes/bRoute.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/bRoute', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2JSb3V0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLGdDQUFELENBQWpCOztBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJSCxNQUFKLEVBQWY7QUFFQUcsTUFBTSxDQUFDQyxHQUFQLENBQVcsU0FBWCxFQUFzQkYsQ0FBdEI7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxNQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYS1sZWFybi8uL3NyYy9yb3V0ZXMvYlJvdXRlLmpzPzU5ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xuY29uc3QgYiA9IHJlcXVpcmUoJy4uL2FwaS9iJyk7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVyLmdldCgnL2JSb3V0ZScsIGIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiXSwibmFtZXMiOlsiUm91dGVyIiwicmVxdWlyZSIsImIiLCJyb3V0ZXIiLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/bRoute.js\n");

/***/ }),

/***/ "./src/routes/router.js":
/*!******************************!*\
  !*** ./src/routes/router.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const combineRouter = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aRouter = __webpack_require__(/*! ./aRoute */ \"./src/routes/aRoute.js\");\n\nconst bRouter = __webpack_require__(/*! ./bRoute */ \"./src/routes/bRoute.js\");\n\nmodule.exports = combineRouter(aRouter, bRouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsZ0RBQUQsQ0FBN0I7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHdDQUFELENBQXZCOztBQUNBLE1BQU1FLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyx3Q0FBRCxDQUF2Qjs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxhQUFhLENBQzFCRSxPQUQwQixFQUUxQkMsT0FGMEIsQ0FBOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtbGVhcm4vLi9zcmMvcm91dGVzL3JvdXRlci5qcz9mYTRiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbWJpbmVSb3V0ZXIgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJyk7XG5jb25zdCBhUm91dGVyID0gcmVxdWlyZSgnLi9hUm91dGUnKTtcbmNvbnN0IGJSb3V0ZXIgPSByZXF1aXJlKCcuL2JSb3V0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXIoXG4gICAgYVJvdXRlcixcbiAgICBiUm91dGVyXG4pOyJdLCJuYW1lcyI6WyJjb21iaW5lUm91dGVyIiwicmVxdWlyZSIsImFSb3V0ZXIiLCJiUm91dGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/router.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;