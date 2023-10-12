/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card),\n/* harmony export */   \"epProperties\": () => (/* binding */ epProperties)\n/* harmony export */ });\nvar epProperties;\n(function (epProperties) {\n    epProperties[\"episode\"] = \"episode\";\n    epProperties[\"name\"] = \"name\";\n    epProperties[\"imgCharac\"] = \"imgCharac\";\n})(epProperties || (epProperties = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            episode: null,\n            name: null,\n            imgCharac: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            case epProperties.episode:\n                this.properties.episode = newValue;\n                break;\n            case epProperties.name:\n                this.properties.name = newValue;\n                break;\n            case epProperties.imgCharac:\n                this.properties.imgCharac = newValue;\n                break;\n            default:\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.properties = {\n            episode: \"\",\n            name: \"\",\n            imgCharac: \"\"\n        };\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    mount() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n\t\t\t<h1>${this.properties.episode}</h1>\n\t\t\t<h3>${this.properties.name}</h3>\n\t\t\t<img src=\"${this.properties.imgCharac}\">\n\t\t\t`;\n        const imgElement = this.shadowRoot.querySelector('img');\n        if (imgElement) {\n            imgElement.src = this.properties.imgCharac;\n        }\n        else {\n            console.error(\"Elemento <img> no encontrado en el shadow DOM.\");\n        }\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://dca_template/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n\n\n\n//# sourceURL=webpack://dca_template/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const dashboard = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(dashboard);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_template/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getApi */ \"./src/services/getApi.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/card */ \"./src/components/card/card.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                const data = yield (0,_services_getApi__WEBPACK_IMPORTED_MODULE_0__.getApi)();\n                console.log(data.results);\n                data.results.forEach((e) => {\n                    var _a;\n                    const card = this.ownerDocument.createElement('app-card');\n                    card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.epProperties.episode, e.episode);\n                    card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.epProperties.name, e.name);\n                    e.characters.forEach((characterUrl) => {\n                        fetch(characterUrl)\n                            .then(response => response.json())\n                            .then(characterData => {\n                            const characterImage = characterData.image;\n                            card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.epProperties.imgCharac, characterImage);\n                            console.log(`img:${characterImage}`);\n                        })\n                            .catch(error => console.error(error));\n                    });\n                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n                });\n            }\n            /* this.shadowRoot.innerHTML = '';\n            const card = this.ownerDocument.createElement('app-card');\n            card.setAttribute('text_button', 'Cambiar background');\n            card.setAttribute('description', 'holisssssss');\n            this.shadowRoot?.appendChild(card); */\n        });\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_template/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getApi.ts":
/*!********************************!*\
  !*** ./src/services/getApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApi\": () => (/* binding */ getApi)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getApi() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://rickandmortyapi.com/api/episode').then(res => res.json());\n            /* console.log(data); */\n            return data;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_template/./src/services/getApi.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;