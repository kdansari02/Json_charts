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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UploadSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadSection */ \"(app-pages-browser)/./src/components/UploadSection.js\");\n/* harmony import */ var _ChartDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartDisplay */ \"(app-pages-browser)/./src/components/ChartDisplay.js\");\n/* harmony import */ var _DownloadJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DownloadJson */ \"(app-pages-browser)/./src/components/DownloadJson.js\");\n/* harmony import */ var _charts_AgCharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/AgCharts */ \"(app-pages-browser)/./src/components/charts/AgCharts.js\");\n/* harmony import */ var _charts_AgCharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_AgCharts__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import MUIChart from \"./charts/MuiChart\";\n// import RechartComponent from \"./charts/RechartComponent\";\n// import D3Chart from \"./charts/D3Chart\";\n\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"bar\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-4xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl font-bold mb-8\",\n                        children: \"Upload JSON Data to Display Chart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full gap-6 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md animate-fadeIn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col justify-center items-center md:items-start text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl font-bold mb-4\",\n                                        children: \"Prepare Your Data\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-white mb-4\",\n                                        children: \"Upload your JSON data to start. The data will be validated and processed as you upload it. Ensure that the data adheres to JSON specifications to properly display the charts.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center md:items-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UploadSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onFileUpload: setData,\n                                    chartType: chartType,\n                                    setChartType: setChartType\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8\",\n                        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChartDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                data: data,\n                                chartType: chartType\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-gray-600\",\n                            children: \"No data uploaded yet.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-4 right-4 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DownloadJson__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\Main.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"wgeOCmq9C28r5Qso7NEkOg2dKew=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDVztBQUNGO0FBQ0E7QUFDMUMsNENBQTRDO0FBQzVDLDREQUE0RDtBQUM1RCwwQ0FBMEM7QUFDRjtBQUV4QyxNQUFNSyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MscUJBQ0UsOERBQUNVO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFzQzs7Ozs7O2tDQUdwRCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUEwQjs7Ozs7O2tEQUN4Qyw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQTBCOzs7Ozs7Ozs7Ozs7MENBTXpDLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ1Ysc0RBQWFBO29DQUNaYyxjQUFjUjtvQ0FDZEMsV0FBV0E7b0NBQ1hDLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLcEIsOERBQUNHO3dCQUFJRCxXQUFVO2tDQUNaTCxxQkFDQztzQ0FDRSw0RUFBQ0oscURBQVlBO2dDQUFDSSxNQUFNQTtnQ0FBTUUsV0FBV0E7Ozs7OzswREFPdkMsOERBQUNNOzRCQUFFSCxXQUFVO3NDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSy9DLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ1IscURBQVlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCO0dBaERNRTtLQUFBQTtBQWtETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzIyZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVcGxvYWRTZWN0aW9uIGZyb20gXCIuL1VwbG9hZFNlY3Rpb25cIjtcclxuaW1wb3J0IENoYXJ0RGlzcGxheSBmcm9tIFwiLi9DaGFydERpc3BsYXlcIjtcclxuaW1wb3J0IERvd25sb2FkSnNvbiBmcm9tIFwiLi9Eb3dubG9hZEpzb25cIjtcclxuLy8gaW1wb3J0IE1VSUNoYXJ0IGZyb20gXCIuL2NoYXJ0cy9NdWlDaGFydFwiO1xyXG4vLyBpbXBvcnQgUmVjaGFydENvbXBvbmVudCBmcm9tIFwiLi9jaGFydHMvUmVjaGFydENvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgRDNDaGFydCBmcm9tIFwiLi9jaGFydHMvRDNDaGFydFwiO1xyXG5pbXBvcnQgQUdDaGFydCBmcm9tIFwiLi9jaGFydHMvQWdDaGFydHNcIjtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NoYXJ0VHlwZSwgc2V0Q2hhcnRUeXBlXSA9IHVzZVN0YXRlKFwiYmFyXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNHhsIG14LWF1dG9cIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIG1iLThcIj5cclxuICAgICAgICAgIFVwbG9hZCBKU09OIERhdGEgdG8gRGlzcGxheSBDaGFydFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ2FwLTYgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiByb3VuZGVkLWxnIHNoYWRvdy1tZCBhbmltYXRlLWZhZGVJblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlByZXBhcmUgWW91ciBEYXRhPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LXdoaXRlIG1iLTRcIj5cclxuICAgICAgICAgICAgICBVcGxvYWQgeW91ciBKU09OIGRhdGEgdG8gc3RhcnQuIFRoZSBkYXRhIHdpbGwgYmUgdmFsaWRhdGVkIGFuZFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NlZCBhcyB5b3UgdXBsb2FkIGl0LiBFbnN1cmUgdGhhdCB0aGUgZGF0YSBhZGhlcmVzIHRvIEpTT05cclxuICAgICAgICAgICAgICBzcGVjaWZpY2F0aW9ucyB0byBwcm9wZXJseSBkaXNwbGF5IHRoZSBjaGFydHMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICA8VXBsb2FkU2VjdGlvblxyXG4gICAgICAgICAgICAgIG9uRmlsZVVwbG9hZD17c2V0RGF0YX1cclxuICAgICAgICAgICAgICBjaGFydFR5cGU9e2NoYXJ0VHlwZX1cclxuICAgICAgICAgICAgICBzZXRDaGFydFR5cGU9e3NldENoYXJ0VHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgbXQtOFwiPlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENoYXJ0RGlzcGxheSBkYXRhPXtkYXRhfSBjaGFydFR5cGU9e2NoYXJ0VHlwZX0gLz5cclxuICAgICAgICAgICAgICB7LyogPE1VSUNoYXJ0IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgICAgPFJlY2hhcnRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgICAgICA8RDNDaGFydCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICAgIDxBR0NoYXJ0IGRhdGE9e2RhdGF9IC8+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDBcIj5ObyBkYXRhIHVwbG9hZGVkIHlldC48L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCB6LTUwXCI+XHJcbiAgICAgICAgPERvd25sb2FkSnNvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVXBsb2FkU2VjdGlvbiIsIkNoYXJ0RGlzcGxheSIsIkRvd25sb2FkSnNvbiIsIkFHQ2hhcnQiLCJNYWluIiwiZGF0YSIsInNldERhdGEiLCJjaGFydFR5cGUiLCJzZXRDaGFydFR5cGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJwIiwib25GaWxlVXBsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Main.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/charts/AgCharts.js":
/*!*******************************************!*\
  !*** ./src/components/charts/AgCharts.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});