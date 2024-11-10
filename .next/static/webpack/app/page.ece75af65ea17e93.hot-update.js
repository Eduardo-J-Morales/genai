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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChefHat_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChefHat!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chef-hat.js\");\n/* harmony import */ var _app_services_opeai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/services/opeai */ \"(app-pages-browser)/./app/services/opeai.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [ingredients, setIngredients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIngredient, setCurrentIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipe, setRecipe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddIngredient = (e)=>{\n        e.preventDefault();\n        if (currentIngredient.trim()) {\n            setIngredients([\n                ...ingredients,\n                currentIngredient.trim()\n            ]);\n            setCurrentIngredient(\"\");\n        }\n    };\n    const hadleRemoveIngredient = (index)=>{\n        setIngredients(ingredients.filter((_, i)=>i !== index));\n    };\n    const handleGenerateRecipe = async ()=>{\n        if (ingredients.length === 0) {\n            setError(\"Please add at least one ingredient\");\n            return;\n            setLoading(true);\n            setError(\"\");\n            try {\n                const generatedRecipe = await (0,_app_services_opeai__WEBPACK_IMPORTED_MODULE_2__.generateRecipe)(ingredients);\n                setRecipe(generatedRecipe);\n            } catch (error) {\n                setError(\"Failed to generate recipe. Please check your API key and try again.\");\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl mx-auto p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChefHat_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"w-12 h-12 text-indigo-600\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/genai/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold text-gray-800 mb-2\",\n                            children: \" AI Recipe Suggester\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Tell us what ingredients you have, and we'll suggest the perfect recipe1!\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-xl shadow-md p-6 mb-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleAddIngredient,\n                        className: \"mb-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: currentIngredient,\n                                    onChange: (e)=>setCurrentIngredient(e.target.value),\n                                    placeholder: \"Enter an ingredient\",\n                                    className: \"flex-1 px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-indigo-600 text-white rounded-lg \",\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/genai/app/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/genai/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/genai/app/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/genai/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/genai/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/genai/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uG6y/SG2Oi6/ZDj00TBALC/vfvA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3QztBQUNpQjtBQUNIO0FBR3ZDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQVcsRUFBRTtJQUMzRCxNQUFNLENBQUNNLG1CQUFtQkMscUJBQXFCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBTTtJQUMxQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1jLHNCQUFzQixDQUFDQztRQUMzQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJVixrQkFBa0JXLElBQUksSUFBSTtZQUM1QlosZUFBZTttQkFBSUQ7Z0JBQWFFLGtCQUFrQlcsSUFBSTthQUFHO1lBQ3pEVixxQkFBcUI7UUFDdkI7SUFDRjtJQUVBLE1BQU1XLHdCQUF3QixDQUFDQztRQUM3QmQsZUFBZUQsWUFBWWdCLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxNQUFNSDtJQUNwRDtJQUVBLE1BQU1JLHVCQUF1QjtRQUMzQixJQUFJbkIsWUFBWW9CLE1BQU0sS0FBSyxHQUFHO1lBQzVCWCxTQUFTO1lBQ1Q7WUFFQUYsV0FBVztZQUNYRSxTQUFTO1lBRVQsSUFBSTtnQkFDRixNQUFNWSxrQkFBa0IsTUFBTXZCLG1FQUFjQSxDQUFDRTtnQkFDN0NLLFVBQVVnQjtZQUNaLEVBQUUsT0FBT2IsT0FBTztnQkFDZEMsU0FDRTtZQUVKLFNBQVU7Z0JBQ1JGLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPRCxXQUFVOztzQ0FDaEIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDMUIsbUZBQU9BO2dDQUFDMEIsV0FBVTs7Ozs7Ozs7Ozs7c0NBRXJCLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBd0M7Ozs7OztzQ0FDdEQsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7OzhCQUlqQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNJO3dCQUFLQyxVQUFVbEI7d0JBQXFCYSxXQUFVO2tDQUM3Qyw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FDREMsTUFBSztvQ0FDTEMsT0FBTzdCO29DQUNQOEIsVUFBVSxDQUFDckIsSUFBTVIscUJBQXFCUSxFQUFFc0IsTUFBTSxDQUFDRixLQUFLO29DQUNwREcsYUFBWTtvQ0FFWlgsV0FBVTs7Ozs7OzhDQUVWLDhEQUFDWTtvQ0FBT1osV0FBVTs4Q0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMvRTtHQXpFd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvZ2VuYWkvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWZIYXQsIFBsdXMsIFgsIExvYWRlcjIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJlY2lwZSB9IGZyb20gXCJAL2FwcC9zZXJ2aWNlcy9vcGVhaVwiO1xuaW1wb3J0IHsgUmVjaXBlQ2FyZCB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1JlY2lwZUNhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2luZ3JlZGllbnRzLCBzZXRJbmdyZWRpZW50c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbY3VycmVudEluZ3JlZGllbnQsIHNldEN1cnJlbnRJbmdyZWRpZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVjaXBlLCBzZXRSZWNpcGVdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEluZ3JlZGllbnQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGN1cnJlbnRJbmdyZWRpZW50LnRyaW0oKSkge1xuICAgICAgc2V0SW5ncmVkaWVudHMoWy4uLmluZ3JlZGllbnRzLCBjdXJyZW50SW5ncmVkaWVudC50cmltKCldKTtcbiAgICAgIHNldEN1cnJlbnRJbmdyZWRpZW50KFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYWRsZVJlbW92ZUluZ3JlZGllbnQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldEluZ3JlZGllbnRzKGluZ3JlZGllbnRzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZVJlY2lwZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5ncmVkaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBhZGQgYXQgbGVhc3Qgb25lIGluZ3JlZGllbnRcIik7XG4gICAgICByZXR1cm47XG5cbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihcIlwiKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkUmVjaXBlID0gYXdhaXQgZ2VuZXJhdGVSZWNpcGUoaW5ncmVkaWVudHMpO1xuICAgICAgICBzZXRSZWNpcGUoZ2VuZXJhdGVkUmVjaXBlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKFxuICAgICAgICAgIFwiRmFpbGVkIHRvIGdlbmVyYXRlIHJlY2lwZS4gUGxlYXNlIGNoZWNrIHlvdXIgQVBJIGtleSBhbmQgdHJ5IGFnYWluLlwiXG4gICAgICAgICk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtMjAwIHRvLWluZGlnby0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC02XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgIDxDaGVmSGF0IGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LWluZGlnby02MDBcIj48L0NoZWZIYXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTJcIj4gQUkgUmVjaXBlIFN1Z2dlc3RlcjwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlRlbGwgdXMgd2hhdCBpbmdyZWRpZW50cyB5b3UgaGF2ZSwgYW5kIHdlJ2xsIHN1Z2dlc3QgdGhlIHBlcmZlY3QgcmVjaXBlMSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIHAtNiBtYi04XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRJbmdyZWRpZW50fSBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50SW5ncmVkaWVudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudEluZ3JlZGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBpbmdyZWRpZW50XCJcblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWluZGlnby02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIFwiPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGVmSGF0IiwiZ2VuZXJhdGVSZWNpcGUiLCJIb21lIiwiaW5ncmVkaWVudHMiLCJzZXRJbmdyZWRpZW50cyIsImN1cnJlbnRJbmdyZWRpZW50Iiwic2V0Q3VycmVudEluZ3JlZGllbnQiLCJyZWNpcGUiLCJzZXRSZWNpcGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVBZGRJbmdyZWRpZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImhhZGxlUmVtb3ZlSW5ncmVkaWVudCIsImluZGV4IiwiZmlsdGVyIiwiXyIsImkiLCJoYW5kbGVHZW5lcmF0ZVJlY2lwZSIsImxlbmd0aCIsImdlbmVyYXRlZFJlY2lwZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});