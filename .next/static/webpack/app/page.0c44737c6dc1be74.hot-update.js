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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chef-hat.js\");\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _app_services_opeai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/services/opeai */ \"(app-pages-browser)/./app/services/opeai.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [ingredients, setIngredients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIngredient, setCurrentIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddIngredient = (e)=>{\n        e.preventDefault();\n        if (currentIngredient.trim()) {\n            setIngredients([\n                ...ingredients,\n                currentIngredient.trim()\n            ]);\n            setCurrentIngredient(\"\");\n        }\n    };\n    const hadleRemoveIngredient = (index)=>{\n        setIngredients(ingredients.filter((_, i)=>i !== index));\n    };\n    const handleGenerateRecipe = async ()=>{\n        if (ingredients.length === 0) {\n            setError(\"Please add at least one ingredient\");\n            return;\n            setLoading(true);\n            setError(\"\");\n            try {\n                const generatedRecipe = await (0,_app_services_opeai__WEBPACK_IMPORTED_MODULE_2__.generateRecipe)(ingredients);\n                setRecipe(generatedRecipe);\n            } catch (error) {\n                setError(\"Failed to generate recipe. Please check your API key and try again.\");\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl mx-auto p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-12 h-12 text-indigo-600\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold text-gray-800 mb-2\",\n                            children: [\n                                \" \",\n                                \"AI Recipe Suggester\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Tell us what ingredients you have, and we'll suggest the perfect recipe1!\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-xl shadow-md p-6 mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleAddIngredient,\n                            className: \"mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: currentIngredient,\n                                        onChange: (e)=>setCurrentIngredient(e.target.value),\n                                        placeholder: \"Enter an ingredient\",\n                                        className: \"flex-1 px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-4 py-2 bg-indigo-600 text-white rounded-lg  hover:bg-indigo-700 transition-colors flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            \"Add\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        ingredients.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold text-gray-700 mb-3\",\n                                    children: \"Your ingredients:\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap gap-2\",\n                                    children: ingredients.map((ingredient, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-flex items-center gap\",\n                                            children: ingredient\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/genai/app/page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/genai/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/genai/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uG6y/SG2Oi6/ZDj00TBALC/vfvA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0M7QUFDaUI7QUFDSDtBQUd2QyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFDM0QsTUFBTSxDQUFDTyxtQkFBbUJDLHFCQUFxQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQU07SUFDMUMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZSxzQkFBc0IsQ0FBQ0M7UUFDM0JBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSVYsa0JBQWtCVyxJQUFJLElBQUk7WUFDNUJaLGVBQWU7bUJBQUlEO2dCQUFhRSxrQkFBa0JXLElBQUk7YUFBRztZQUN6RFYscUJBQXFCO1FBQ3ZCO0lBQ0Y7SUFFQSxNQUFNVyx3QkFBd0IsQ0FBQ0M7UUFDN0JkLGVBQWVELFlBQVlnQixNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsTUFBTUg7SUFDcEQ7SUFFQSxNQUFNSSx1QkFBdUI7UUFDM0IsSUFBSW5CLFlBQVlvQixNQUFNLEtBQUssR0FBRztZQUM1QlgsU0FBUztZQUNUO1lBRUFGLFdBQVc7WUFDWEUsU0FBUztZQUVULElBQUk7Z0JBQ0YsTUFBTVksa0JBQWtCLE1BQU12QixtRUFBY0EsQ0FBQ0U7Z0JBQzdDSyxVQUFVZ0I7WUFDWixFQUFFLE9BQU9iLE9BQU87Z0JBQ2RDLFNBQ0U7WUFFSixTQUFVO2dCQUNSRixXQUFXO1lBQ2I7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBT0QsV0FBVTs7c0NBQ2hCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQzNCLHdGQUFPQTtnQ0FBQzJCLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVyQiw4REFBQ0U7NEJBQUdGLFdBQVU7O2dDQUNYO2dDQUFJOzs7Ozs7O3NDQUdQLDhEQUFDRzs0QkFBRUgsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs4QkFNL0IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0k7NEJBQUtDLFVBQVVsQjs0QkFBcUJhLFdBQVU7c0NBQzdDLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNNO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPN0I7d0NBQ1A4QixVQUFVLENBQUNyQixJQUFNUixxQkFBcUJRLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7d0NBQ3BERyxhQUFZO3dDQUNaWCxXQUFVOzs7Ozs7a0RBR1osOERBQUNZO3dDQUNDWixXQUFVOzswREFHViw4REFBQzFCLHdGQUFJQTs7Ozs7NENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFNYkcsWUFBWW9CLE1BQU0sR0FBRyxtQkFDcEIsOERBQUNFOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2E7b0NBQUdiLFdBQVU7OENBQTJDOzs7Ozs7OENBR3pELDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWnZCLFlBQVlxQyxHQUFHLENBQUMsQ0FBQ0MsWUFBWXZCLHNCQUM1Qiw4REFBQ3dCOzRDQUFLaEIsV0FBVTtzREFBZ0NlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xFO0dBL0Z3QnZDO0tBQUFBIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9nZW5haS9hcHAvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlZkhhdCwgUGx1cywgWCwgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGdlbmVyYXRlUmVjaXBlIH0gZnJvbSBcIkAvYXBwL3NlcnZpY2VzL29wZWFpXCI7XG5pbXBvcnQgeyBSZWNpcGVDYXJkIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUmVjaXBlQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5ncmVkaWVudHMsIHNldEluZ3JlZGllbnRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50SW5ncmVkaWVudCwgc2V0Q3VycmVudEluZ3JlZGllbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZWNpcGUsIHNldFJlY2lwZV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQWRkSW5ncmVkaWVudCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoY3VycmVudEluZ3JlZGllbnQudHJpbSgpKSB7XG4gICAgICBzZXRJbmdyZWRpZW50cyhbLi4uaW5ncmVkaWVudHMsIGN1cnJlbnRJbmdyZWRpZW50LnRyaW0oKV0pO1xuICAgICAgc2V0Q3VycmVudEluZ3JlZGllbnQoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhZGxlUmVtb3ZlSW5ncmVkaWVudCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0SW5ncmVkaWVudHMoaW5ncmVkaWVudHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlUmVjaXBlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbmdyZWRpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGFkZCBhdCBsZWFzdCBvbmUgaW5ncmVkaWVudFwiKTtcbiAgICAgIHJldHVybjtcblxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKFwiXCIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBnZW5lcmF0ZWRSZWNpcGUgPSBhd2FpdCBnZW5lcmF0ZVJlY2lwZShpbmdyZWRpZW50cyk7XG4gICAgICAgIHNldFJlY2lwZShnZW5lcmF0ZWRSZWNpcGUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoXG4gICAgICAgICAgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgcmVjaXBlLiBQbGVhc2UgY2hlY2sgeW91ciBBUEkga2V5IGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS0yMDAgdG8taW5kaWdvLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTZcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgPENoZWZIYXQgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtaW5kaWdvLTYwMFwiPjwvQ2hlZkhhdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMlwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgQUkgUmVjaXBlIFN1Z2dlc3RlclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgVGVsbCB1cyB3aGF0IGluZ3JlZGllbnRzIHlvdSBoYXZlLCBhbmQgd2UnbGwgc3VnZ2VzdCB0aGUgcGVyZmVjdFxuICAgICAgICAgICAgcmVjaXBlMSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgcC02IG1iLThcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkSW5ncmVkaWVudH0gY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEluZ3JlZGllbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50SW5ncmVkaWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBpbmdyZWRpZW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBcbiAgICAgICAgICAgIGhvdmVyOmJnLWluZGlnby03MDAgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBsdXMgLz5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICB7aW5ncmVkaWVudHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICBZb3VyIGluZ3JlZGllbnRzOlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAge2luZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXBcIj57aW5ncmVkaWVudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hlZkhhdCIsIlBsdXMiLCJnZW5lcmF0ZVJlY2lwZSIsIkhvbWUiLCJpbmdyZWRpZW50cyIsInNldEluZ3JlZGllbnRzIiwiY3VycmVudEluZ3JlZGllbnQiLCJzZXRDdXJyZW50SW5ncmVkaWVudCIsInJlY2lwZSIsInNldFJlY2lwZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUFkZEluZ3JlZGllbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiaGFkbGVSZW1vdmVJbmdyZWRpZW50IiwiaW5kZXgiLCJmaWx0ZXIiLCJfIiwiaSIsImhhbmRsZUdlbmVyYXRlUmVjaXBlIiwibGVuZ3RoIiwiZ2VuZXJhdGVkUmVjaXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaDMiLCJtYXAiLCJpbmdyZWRpZW50Iiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});