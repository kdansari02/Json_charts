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

/***/ "(app-pages-browser)/./src/components/charts/AgCharts.js":
/*!*******************************************!*\
  !*** ./src/components/charts/AgCharts.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ag_charts_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-charts-react */ \"(app-pages-browser)/./node_modules/ag-charts-react/dist/package/index.esm.mjs\");\n\n\nconst AGChart = (param)=>{\n    let { data, chartType } = param;\n    const options = {\n        data: data,\n        series: [\n            {\n                type: chartType || \"bar\",\n                xKey: \"label\",\n                yKey: \"value\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-6 rounded-lg shadow-lg border border-gray-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_charts_react__WEBPACK_IMPORTED_MODULE_1__.AgChartsReact, {\n            options: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\charts\\\\AgCharts.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91999\\\\Projects\\\\chart_maker\\\\src\\\\components\\\\charts\\\\AgCharts.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AGChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AGChart);\nvar _c;\n$RefreshReg$(_c, \"AGChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9BZ0NoYXJ0cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWdEO0FBRWhELE1BQU1DLFVBQVU7UUFBQyxFQUFFQyxJQUFJLEVBQUNDLFNBQVMsRUFBQztJQUNoQyxNQUFNQyxVQUFVO1FBQ2RGLE1BQU1BO1FBQ05HLFFBQVE7WUFBQztnQkFBRUMsTUFBS0gsYUFBYTtnQkFDNUJJLE1BQU07Z0JBQVNDLE1BQU07WUFBUTtTQUFFO0lBQ2xDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNWLDBEQUFhQTtZQUFDSSxTQUFTQTs7Ozs7Ozs7Ozs7QUFHOUI7S0FaTUg7QUFjTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvQWdDaGFydHMuanM/NGJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ0NoYXJ0c1JlYWN0IH0gZnJvbSAnYWctY2hhcnRzLXJlYWN0JztcclxuXHJcbmNvbnN0IEFHQ2hhcnQgPSAoeyBkYXRhLGNoYXJ0VHlwZX0pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHNlcmllczogW3sgdHlwZTpjaGFydFR5cGUgfHwgJ2JhcicsXHJcbiAgICAgeEtleTogJ2xhYmVsJywgeUtleTogJ3ZhbHVlJyB9XSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICA8QWdDaGFydHNSZWFjdCBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFHQ2hhcnQ7XHJcbiJdLCJuYW1lcyI6WyJBZ0NoYXJ0c1JlYWN0IiwiQUdDaGFydCIsImRhdGEiLCJjaGFydFR5cGUiLCJvcHRpb25zIiwic2VyaWVzIiwidHlwZSIsInhLZXkiLCJ5S2V5IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/charts/AgCharts.js\n"));

/***/ })

});