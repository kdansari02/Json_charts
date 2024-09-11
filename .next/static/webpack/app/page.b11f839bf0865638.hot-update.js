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

/***/ "(app-pages-browser)/./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UploadSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadSection */ \"(app-pages-browser)/./src/components/UploadSection.js\");\n/* harmony import */ var _ChartDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartDisplay */ \"(app-pages-browser)/./src/components/ChartDisplay.js\");\n/* harmony import */ var _DownloadJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DownloadJson */ \"(app-pages-browser)/./src/components/DownloadJson.js\");\n/* harmony import */ var _charts_MuiChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/MuiChart */ \"(app-pages-browser)/./src/components/charts/MuiChart.js\");\n/* harmony import */ var _charts_MuiChart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_MuiChart__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _charts_RechartComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/RechartComponent */ \"(app-pages-browser)/./src/components/charts/RechartComponent.js\");\n/* harmony import */ var _charts_D3Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/D3Chart */ \"(app-pages-browser)/./src/components/charts/D3Chart.js\");\n/* harmony import */ var _charts_AgCharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/AgCharts */ \"(app-pages-browser)/./src/components/charts/AgCharts.js\");\n/* harmony import */ var _charts_AgCharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_charts_AgCharts__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"bar\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-4xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl font-bold mb-8\",\n                        children: \"Upload JSON Data to Display Chart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full gap-6 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md animate-fadeIn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col justify-center items-center md:items-start text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl font-bold mb-4\",\n                                        children: \"Prepare Your Data\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-white mb-4\",\n                                        children: \"Upload your JSON data to start. The data will be validated and processed as you upload it. Ensure that the data adheres to JSON specifications to properly display the charts.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center md:items-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UploadSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onFileUpload: setData,\n                                    chartType: chartType,\n                                    setChartType: setChartType\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8\",\n                        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChartDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                data: data,\n                                chartType: chartType\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-gray-600\",\n                            children: \"No data uploaded yet.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-4 right-4 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DownloadJson__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"wgeOCmq9C28r5Qso7NEkOg2dKew=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ1c7QUFDRjtBQUNBO0FBQ0Q7QUFDZ0I7QUFDbEI7QUFDQztBQUV4QyxNQUFNUSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFFM0MscUJBQ0UsOERBQUNhO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFzQzs7Ozs7O2tDQUdwRCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUEwQjs7Ozs7O2tEQUN4Qyw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQTBCOzs7Ozs7Ozs7Ozs7MENBTXpDLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ2Isc0RBQWFBO29DQUNaaUIsY0FBY1I7b0NBQ2RDLFdBQVdBO29DQUNYQyxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3BCLDhEQUFDRzt3QkFBSUQsV0FBVTtrQ0FDWkwscUJBQ0M7c0NBQ0UsNEVBQUNQLHFEQUFZQTtnQ0FBQ08sTUFBTUE7Z0NBQU1FLFdBQVdBOzs7Ozs7MERBT3ZDLDhEQUFDTTs0QkFBRUgsV0FBVTtzQ0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsvQyw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNYLHFEQUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQWhETUs7S0FBQUE7QUFrRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcz8yMmQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXBsb2FkU2VjdGlvbiBmcm9tIFwiLi9VcGxvYWRTZWN0aW9uXCI7XHJcbmltcG9ydCBDaGFydERpc3BsYXkgZnJvbSBcIi4vQ2hhcnREaXNwbGF5XCI7XHJcbmltcG9ydCBEb3dubG9hZEpzb24gZnJvbSBcIi4vRG93bmxvYWRKc29uXCI7XHJcbmltcG9ydCBNVUlDaGFydCBmcm9tIFwiLi9jaGFydHMvTXVpQ2hhcnRcIjtcclxuaW1wb3J0IFJlY2hhcnRDb21wb25lbnQgZnJvbSBcIi4vY2hhcnRzL1JlY2hhcnRDb21wb25lbnRcIjtcclxuaW1wb3J0IEQzQ2hhcnQgZnJvbSBcIi4vY2hhcnRzL0QzQ2hhcnRcIjtcclxuaW1wb3J0IEFHQ2hhcnQgZnJvbSBcIi4vY2hhcnRzL0FnQ2hhcnRzXCI7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaGFydFR5cGUsIHNldENoYXJ0VHlwZV0gPSB1c2VTdGF0ZShcImJhclwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCBtYi04XCI+XHJcbiAgICAgICAgICBVcGxvYWQgSlNPTiBEYXRhIHRvIERpc3BsYXkgQ2hhcnRcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdhcC02IGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgcm91bmRlZC1sZyBzaGFkb3ctbWQgYW5pbWF0ZS1mYWRlSW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5QcmVwYXJlIFlvdXIgRGF0YTwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC13aGl0ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgVXBsb2FkIHlvdXIgSlNPTiBkYXRhIHRvIHN0YXJ0LiBUaGUgZGF0YSB3aWxsIGJlIHZhbGlkYXRlZCBhbmRcclxuICAgICAgICAgICAgICBwcm9jZXNzZWQgYXMgeW91IHVwbG9hZCBpdC4gRW5zdXJlIHRoYXQgdGhlIGRhdGEgYWRoZXJlcyB0byBKU09OXHJcbiAgICAgICAgICAgICAgc3BlY2lmaWNhdGlvbnMgdG8gcHJvcGVybHkgZGlzcGxheSB0aGUgY2hhcnRzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgPFVwbG9hZFNlY3Rpb25cclxuICAgICAgICAgICAgICBvbkZpbGVVcGxvYWQ9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgY2hhcnRUeXBlPXtjaGFydFR5cGV9XHJcbiAgICAgICAgICAgICAgc2V0Q2hhcnRUeXBlPXtzZXRDaGFydFR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02IG10LThcIj5cclxuICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDaGFydERpc3BsYXkgZGF0YT17ZGF0YX0gY2hhcnRUeXBlPXtjaGFydFR5cGV9IC8+XHJcbiAgICAgICAgICAgICAgey8qIDxNVUlDaGFydCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICAgIDxSZWNoYXJ0Q29tcG9uZW50IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgICAgPEQzQ2hhcnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgICAgICA8QUdDaGFydCBkYXRhPXtkYXRhfSAvPiAqL31cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+Tm8gZGF0YSB1cGxvYWRlZCB5ZXQuPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IHJpZ2h0LTQgei01MFwiPlxyXG4gICAgICAgIDxEb3dubG9hZEpzb24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlVwbG9hZFNlY3Rpb24iLCJDaGFydERpc3BsYXkiLCJEb3dubG9hZEpzb24iLCJNVUlDaGFydCIsIlJlY2hhcnRDb21wb25lbnQiLCJEM0NoYXJ0IiwiQUdDaGFydCIsIk1haW4iLCJkYXRhIiwic2V0RGF0YSIsImNoYXJ0VHlwZSIsInNldENoYXJ0VHlwZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJvbkZpbGVVcGxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Main.js\n"));

/***/ })

});