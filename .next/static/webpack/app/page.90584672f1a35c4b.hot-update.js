"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chef-hat.js\");\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _app_services_opeai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/services/opeai */ \"(app-pages-browser)/./app/services/opeai.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [ingredients, setIngredients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIngredient, setCurrentIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddIngredient = (e)=>{\n        e.preventDefault();\n        if (currentIngredient.trim()) {\n            setIngredients([\n                ...ingredients,\n                currentIngredient.trim()\n            ]);\n            setCurrentIngredient(\"\");\n        }\n    };\n    const hadleRemoveIngredient = (index1)=>{\n        setIngredients(ingredients.filter((_, i)=>i !== index1));\n    };\n    const handleGenerateRecipe = async ()=>{\n        if (ingredients.length === 0) {\n            setError(\"Please add at least one ingredient\");\n            return;\n            setLoading(true);\n            setError(\"\");\n            try {\n                const generatedRecipe = await (0,_app_services_opeai__WEBPACK_IMPORTED_MODULE_2__.generateRecipe)(ingredients);\n                setRecipe(generatedRecipe);\n            } catch (error) {\n                setError(\"Failed to generate recipe. Please check your API key and try again.\");\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl mx-auto p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-12 h-12 text-indigo-600\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold text-gray-800 mb-2\",\n                            children: [\n                                \" \",\n                                \"AI Recipe Suggester\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Tell us what ingredients you have, and we'll suggest the perfect recipe1!\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-xl shadow-md p-6 mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleAddIngredient,\n                            className: \"mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: currentIngredient,\n                                        onChange: (e)=>setCurrentIngredient(e.target.value),\n                                        placeholder: \"Enter an ingredient\",\n                                        className: \"flex-1 px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-4 py-2 bg-indigo-600 text-white rounded-lg  hover:bg-indigo-700 transition-colors flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            \"Add\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        ingredients.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold text-gray-700 mb-3\",\n                                    children: \"Your ingredients:\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap gap-2\",\n                                    children: ingredients.map((ingredient, index))\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/genai/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/genai/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uG6y/SG2Oi6/ZDj00TBALC/vfvA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0M7QUFDaUI7QUFDSDtBQUd2QyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFDM0QsTUFBTSxDQUFDTyxtQkFBbUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQU07SUFDMUMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZSxzQkFBc0IsQ0FBQ0M7UUFDM0JBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSVYsa0JBQWtCVyxJQUFJLElBQUk7WUFDNUJaLGVBQWU7bUJBQUlEO2dCQUFhRSxrQkFBa0JXLElBQUk7YUFBRztZQUN6RFYscUJBQXFCO1FBQ3ZCO0lBQ0Y7SUFFQSxNQUFNVyx3QkFBd0IsQ0FBQ0M7UUFDN0JkLGVBQWVELFlBQVlnQixNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsTUFBTUg7SUFDcEQ7SUFFQSxNQUFNSSx1QkFBdUI7UUFDM0IsSUFBSW5CLFlBQVlvQixNQUFNLEtBQUssR0FBRztZQUM1QlgsU0FBUztZQUNUO1lBRUFGLFdBQVc7WUFDWEUsU0FBUztZQUVULElBQUk7Z0JBQ0YsTUFBTVksa0JBQWtCLE1BQU12QixtRUFBY0EsQ0FBQ0U7Z0JBQzdDSyxVQUFVZ0I7WUFDWixFQUFFLE9BQU9iLE9BQU87Z0JBQ2RDLFNBQ0U7WUFFSixTQUFVO2dCQUNSRixXQUFXO1lBQ2I7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBT0QsV0FBVTs7c0NBQ2hCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQzNCLHdGQUFPQTtnQ0FBQzJCLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVyQiw4REFBQ0U7NEJBQUdGLFdBQVU7O2dDQUNYO2dDQUFJOzs7Ozs7O3NDQUdQLDhEQUFDRzs0QkFBRUgsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs4QkFNL0IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0k7NEJBQUtDLFVBQVVsQjs0QkFBcUJhLFdBQVU7c0NBQzdDLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNNO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPN0I7d0NBQ1A4QixVQUFVLENBQUNyQixJQUFNUixxQkFBcUJRLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7d0NBQ3BERyxhQUFZO3dDQUNaWCxXQUFVOzs7Ozs7a0RBR1osOERBQUNZO3dDQUNDWixXQUFVOzswREFHViw4REFBQzFCLHdGQUFJQTs7Ozs7NENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFNYkcsWUFBWW9CLE1BQU0sR0FBRyxtQkFDcEIsOERBQUNFOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2E7b0NBQUdiLFdBQVU7OENBQTJDOzs7Ozs7OENBR3pELDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWnZCLFlBQVlxQyxHQUFHLENBQUVDLENBQUFBLFlBQVd2QixLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRDtHQTdGd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvZ2VuYWkvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWZIYXQsIFBsdXMsIFgsIExvYWRlcjIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJlY2lwZSB9IGZyb20gXCJAL2FwcC9zZXJ2aWNlcy9vcGVhaVwiO1xuaW1wb3J0IHsgUmVjaXBlQ2FyZCB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1JlY2lwZUNhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2luZ3JlZGllbnRzLCBzZXRJbmdyZWRpZW50c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbY3VycmVudEluZ3JlZGllbnQsIHNldEN1cnJlbnRJbmdyZWRpZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEluZ3JlZGllbnQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGN1cnJlbnRJbmdyZWRpZW50LnRyaW0oKSkge1xuICAgICAgc2V0SW5ncmVkaWVudHMoWy4uLmluZ3JlZGllbnRzLCBjdXJyZW50SW5ncmVkaWVudC50cmltKCldKTtcbiAgICAgIHNldEN1cnJlbnRJbmdyZWRpZW50KFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYWRsZVJlbW92ZUluZ3JlZGllbnQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldEluZ3JlZGllbnRzKGluZ3JlZGllbnRzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZVJlY2lwZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5ncmVkaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBhZGQgYXQgbGVhc3Qgb25lIGluZ3JlZGllbnRcIik7XG4gICAgICByZXR1cm47XG5cbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihcIlwiKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkUmVjaXBlID0gYXdhaXQgZ2VuZXJhdGVSZWNpcGUoaW5ncmVkaWVudHMpO1xuICAgICAgICBzZXRSZWNpcGUoZ2VuZXJhdGVkUmVjaXBlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKFxuICAgICAgICAgIFwiRmFpbGVkIHRvIGdlbmVyYXRlIHJlY2lwZS4gUGxlYXNlIGNoZWNrIHlvdXIgQVBJIGtleSBhbmQgdHJ5IGFnYWluLlwiXG4gICAgICAgICk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtMjAwIHRvLWluZGlnby0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC02XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgIDxDaGVmSGF0IGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LWluZGlnby02MDBcIj48L0NoZWZIYXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTJcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIEFJIFJlY2lwZSBTdWdnZXN0ZXJcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIFRlbGwgdXMgd2hhdCBpbmdyZWRpZW50cyB5b3UgaGF2ZSwgYW5kIHdlJ2xsIHN1Z2dlc3QgdGhlIHBlcmZlY3RcbiAgICAgICAgICAgIHJlY2lwZTEhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIHAtNiBtYi04XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUFkZEluZ3JlZGllbnR9IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRJbmdyZWRpZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudEluZ3JlZGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gaW5ncmVkaWVudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgXG4gICAgICAgICAgICBob3ZlcjpiZy1pbmRpZ28tNzAwIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQbHVzIC8+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAge2luZ3JlZGllbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgWW91ciBpbmdyZWRpZW50czpcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQsaW5kZXgpKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGVmSGF0IiwiUGx1cyIsImdlbmVyYXRlUmVjaXBlIiwiSG9tZSIsImluZ3JlZGllbnRzIiwic2V0SW5ncmVkaWVudHMiLCJjdXJyZW50SW5ncmVkaWVudCIsInNldEN1cnJlbnRJbmdyZWRpZW50IiwicmVjaXBlIiwic2V0UmVjaXBlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQWRkSW5ncmVkaWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJoYWRsZVJlbW92ZUluZ3JlZGllbnQiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlR2VuZXJhdGVSZWNpcGUiLCJsZW5ndGgiLCJnZW5lcmF0ZWRSZWNpcGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJoMyIsIm1hcCIsImluZ3JlZGllbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});