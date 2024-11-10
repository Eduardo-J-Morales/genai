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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chef-hat.js\");\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_ChefHat_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat,Plus,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _app_services_opeai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/services/opeai */ \"(app-pages-browser)/./app/services/opeai.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [ingredients, setIngredients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIngredient, setCurrentIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddIngredient = (e)=>{\n        e.preventDefault();\n        if (currentIngredient.trim()) {\n            setIngredients([\n                ...ingredients,\n                currentIngredient.trim()\n            ]);\n            setCurrentIngredient(\"\");\n        }\n    };\n    const handleRemoveIngredient = (index)=>{\n        setIngredients(ingredients.filter((_, i)=>i !== index));\n    };\n    const handleGenerateRecipe = async ()=>{\n        if (ingredients.length === 0) {\n            setError(\"Please add at least one ingredient\");\n            return;\n            setLoading(true);\n            setError(\"\");\n            try {\n                const generatedRecipe = await (0,_app_services_opeai__WEBPACK_IMPORTED_MODULE_2__.generateRecipe)(ingredients);\n                setRecipe(generatedRecipe);\n            } catch (error) {\n                setError(\"Failed to generate recipe. Please check your API key and try again.\");\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl mx-auto p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-12 h-12 text-indigo-600\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold text-gray-800 mb-2\",\n                            children: [\n                                \" \",\n                                \"AI Recipe Suggester\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Tell us what ingredients you have, and we'll suggest the perfect recipe1!\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-xl shadow-md p-6 mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleAddIngredient,\n                            className: \"mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: currentIngredient,\n                                        onChange: (e)=>setCurrentIngredient(e.target.value),\n                                        placeholder: \"Enter an ingredient\",\n                                        className: \"flex-1 px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-4 py-2 bg-indigo-600 text-white rounded-lg  hover:bg-indigo-700 transition-colors flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            \"Add\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        ingredients.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold text-gray-700 mb-3\",\n                                    children: \"Your ingredients:\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap gap-2\",\n                                    children: ingredients.map((ingredient, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-flex items-center gap-1 px-3 py-1  bg-indigo-100 text-indigo-800 rounded-full\",\n                                            children: [\n                                                ingredient,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: handleRemoveIngredient(index),\n                                                    className: \"hover:text-indigo-600\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_Plus_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        cl: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/genai/app/page.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 103\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/genai/app/page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/genai/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/genai/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uG6y/SG2Oi6/ZDj00TBALC/vfvA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ2lCO0FBQ0g7QUFHdkMsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQzNELE1BQU0sQ0FBQ1EsbUJBQW1CQyxxQkFBcUIsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFNO0lBQzFDLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWdCLHNCQUFzQixDQUFDQztRQUMzQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJVixrQkFBa0JXLElBQUksSUFBSTtZQUM1QlosZUFBZTttQkFBSUQ7Z0JBQWFFLGtCQUFrQlcsSUFBSTthQUFHO1lBQ3pEVixxQkFBcUI7UUFDdkI7SUFDRjtJQUVBLE1BQU1XLHlCQUF5QixDQUFDQztRQUM5QmQsZUFBZUQsWUFBWWdCLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxNQUFNSDtJQUNwRDtJQUVBLE1BQU1JLHVCQUF1QjtRQUMzQixJQUFJbkIsWUFBWW9CLE1BQU0sS0FBSyxHQUFHO1lBQzVCWCxTQUFTO1lBQ1Q7WUFFQUYsV0FBVztZQUNYRSxTQUFTO1lBRVQsSUFBSTtnQkFDRixNQUFNWSxrQkFBa0IsTUFBTXZCLG1FQUFjQSxDQUFDRTtnQkFDN0NLLFVBQVVnQjtZQUNaLEVBQUUsT0FBT2IsT0FBTztnQkFDZEMsU0FDRTtZQUVKLFNBQVU7Z0JBQ1JGLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPRCxXQUFVOztzQ0FDaEIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDNUIsMEZBQU9BO2dDQUFDNEIsV0FBVTs7Ozs7Ozs7Ozs7c0NBRXJCLDhEQUFDRTs0QkFBR0YsV0FBVTs7Z0NBQ1g7Z0NBQUk7Ozs7Ozs7c0NBR1AsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7OzhCQU0vQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSTs0QkFBS0MsVUFBVWxCOzRCQUFxQmEsV0FBVTtzQ0FDN0MsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ007d0NBQ0NDLE1BQUs7d0NBQ0xDLE9BQU83Qjt3Q0FDUDhCLFVBQVUsQ0FBQ3JCLElBQU1SLHFCQUFxQlEsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDcERHLGFBQVk7d0NBQ1pYLFdBQVU7Ozs7OztrREFHWiw4REFBQ1k7d0NBQ0NaLFdBQVU7OzBEQUdWLDhEQUFDM0IsMEZBQUlBOzs7Ozs0Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU1iSSxZQUFZb0IsTUFBTSxHQUFHLG1CQUNwQiw4REFBQ0U7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDYTtvQ0FBR2IsV0FBVTs4Q0FBMkM7Ozs7Ozs4Q0FHekQsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNadkIsWUFBWXFDLEdBQUcsQ0FBQyxDQUFDQyxZQUFZdkIsc0JBQzVCLDhEQUFDd0I7NENBQUtoQixXQUFVOztnREFFYmU7OERBQ0QsOERBQUNIO29EQUFPSyxTQUFTMUIsdUJBQXVCQztvREFBUVEsV0FBVTs4REFBd0IsNEVBQUMxQiwwRkFBQ0E7d0RBQUM0QyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVM0c7R0FuR3dCMUM7S0FBQUEiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2dlbmFpL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGVmSGF0LCBQbHVzLCBYLCBMb2FkZXIyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZWNpcGUgfSBmcm9tIFwiQC9hcHAvc2VydmljZXMvb3BlYWlcIjtcbmltcG9ydCB7IFJlY2lwZUNhcmQgfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9SZWNpcGVDYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbmdyZWRpZW50cywgc2V0SW5ncmVkaWVudHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW2N1cnJlbnRJbmdyZWRpZW50LCBzZXRDdXJyZW50SW5ncmVkaWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY2lwZSwgc2V0UmVjaXBlXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVBZGRJbmdyZWRpZW50ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChjdXJyZW50SW5ncmVkaWVudC50cmltKCkpIHtcbiAgICAgIHNldEluZ3JlZGllbnRzKFsuLi5pbmdyZWRpZW50cywgY3VycmVudEluZ3JlZGllbnQudHJpbSgpXSk7XG4gICAgICBzZXRDdXJyZW50SW5ncmVkaWVudChcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSW5ncmVkaWVudCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0SW5ncmVkaWVudHMoaW5ncmVkaWVudHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlUmVjaXBlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbmdyZWRpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGFkZCBhdCBsZWFzdCBvbmUgaW5ncmVkaWVudFwiKTtcbiAgICAgIHJldHVybjtcblxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKFwiXCIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBnZW5lcmF0ZWRSZWNpcGUgPSBhd2FpdCBnZW5lcmF0ZVJlY2lwZShpbmdyZWRpZW50cyk7XG4gICAgICAgIHNldFJlY2lwZShnZW5lcmF0ZWRSZWNpcGUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoXG4gICAgICAgICAgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgcmVjaXBlLiBQbGVhc2UgY2hlY2sgeW91ciBBUEkga2V5IGFuZCB0cnkgYWdhaW4uXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS0yMDAgdG8taW5kaWdvLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTZcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgPENoZWZIYXQgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtaW5kaWdvLTYwMFwiPjwvQ2hlZkhhdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItMlwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgQUkgUmVjaXBlIFN1Z2dlc3RlclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgVGVsbCB1cyB3aGF0IGluZ3JlZGllbnRzIHlvdSBoYXZlLCBhbmQgd2UnbGwgc3VnZ2VzdCB0aGUgcGVyZmVjdFxuICAgICAgICAgICAgcmVjaXBlMSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgcC02IG1iLThcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkSW5ncmVkaWVudH0gY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEluZ3JlZGllbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50SW5ncmVkaWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBpbmdyZWRpZW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBcbiAgICAgICAgICAgIGhvdmVyOmJnLWluZGlnby03MDAgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBsdXMgLz5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICB7aW5ncmVkaWVudHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICBZb3VyIGluZ3JlZGllbnRzOlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAge2luZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBweC0zIHB5LTEgXG4gICAgICAgICAgICAgICAgICBiZy1pbmRpZ28tMTAwIHRleHQtaW5kaWdvLTgwMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge2luZ3JlZGllbnR9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVtb3ZlSW5ncmVkaWVudChpbmRleCl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtaW5kaWdvLTYwMFwiPjxYIGNsLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hlZkhhdCIsIlBsdXMiLCJYIiwiZ2VuZXJhdGVSZWNpcGUiLCJIb21lIiwiaW5ncmVkaWVudHMiLCJzZXRJbmdyZWRpZW50cyIsImN1cnJlbnRJbmdyZWRpZW50Iiwic2V0Q3VycmVudEluZ3JlZGllbnQiLCJyZWNpcGUiLCJzZXRSZWNpcGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVBZGRJbmdyZWRpZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImhhbmRsZVJlbW92ZUluZ3JlZGllbnQiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlR2VuZXJhdGVSZWNpcGUiLCJsZW5ndGgiLCJnZW5lcmF0ZWRSZWNpcGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJoMyIsIm1hcCIsImluZ3JlZGllbnQiLCJzcGFuIiwib25DbGljayIsImNsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});