exports.ids = [4];
exports.modules = {

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7eb5d0a9", content, true, context)
};

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_6f5d5c3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_6f5d5c3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_6f5d5c3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_6f5d5c3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_6f5d5c3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_6f5d5c3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-6f5d5c3e]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-6f5d5c3e]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-6f5d5c3e]{font-size:28px;line-height:44px}}.use-text-title2[data-v-6f5d5c3e]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-6f5d5c3e]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-6f5d5c3e]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-6f5d5c3e]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-6f5d5c3e]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-6f5d5c3e]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-6f5d5c3e]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-6f5d5c3e]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-6f5d5c3e]{font-size:16px;line-height:24px}}.use-text-caption[data-v-6f5d5c3e],.use-text-paragraph[data-v-6f5d5c3e]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-6f5d5c3e]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-6f5d5c3e]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-6f5d5c3e]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-6f5d5c3e]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-6f5d5c3e]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-6f5d5c3e]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-6f5d5c3e]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-6f5d5c3e]{display:none}}.notification[data-v-6f5d5c3e]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-6f5d5c3e]{width:80%}}.notification[data-v-6f5d5c3e]  .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;background:#000}@media(min-width:600px){.notification[data-v-6f5d5c3e]  .v-snack__wrapper{padding:4px 16px}}.notification[data-v-6f5d5c3e]  .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-6f5d5c3e]  .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-6f5d5c3e]  .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-6f5d5c3e]  .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-6f5d5c3e]  .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-6f5d5c3e]{width:100%;box-shadow:none}@media(min-width:600px){.notification .button.v-btn[data-v-6f5d5c3e]{width:150px}}@media(max-width:599px){.notification .button.v-btn[data-v-6f5d5c3e]{margin:16px 0}}@media(max-width:599px){.action[data-v-6f5d5c3e]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("58e8729e", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("af8e29be", content, true, context)
};

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4cbe0f2f", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1f48653c", content, true, context)
};

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("76edf5da", content, true, context)
};

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7ad96b37", content, true, context)
};

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fa50d49a", content, true, context)
};

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6e6e1c78", content, true, context)
};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("76e15576", content, true, context)
};

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0df92ec8", content, true, context)
};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7191606c", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("179b4787", content, true, context)
};

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(270);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("09816ac6", content, true, context)
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("33c8c922", content, true, context)
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("36480955", content, true, context)
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("08b84bae", content, true, context)
};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2e737764", content, true, context)
};

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=template&id=6f5d5c3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{staticClass:"notification",attrs:{"timeout":0},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n    "+_vm._s(_vm.msgNotif)+"\n  ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":"secondary"},on:{"click":function($event){_vm.snackbar = false}}},[_vm._v("\n    "+_vm._s(_vm.$t('common.accept'))+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=template&id=6f5d5c3e&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  data() {
    return {
      snackbar: true,
      msgNotif: brand["a" /* default */].profile.notifMsg
    };
  }

});
// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notification_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(216);

// CONCATENATED MODULE: ./components/Notification/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Notification_Notificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f5d5c3e",
  "d4f062be"
  
)

/* harmony default export */ var Notification = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})

// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_style_index_0_id_3b15d8dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_style_index_0_id_3b15d8dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_style_index_0_id_3b15d8dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_style_index_0_id_3b15d8dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_style_index_0_id_3b15d8dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_style_index_0_id_3b15d8dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-3b15d8dd]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-3b15d8dd]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3b15d8dd]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3b15d8dd]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-3b15d8dd]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3b15d8dd]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3b15d8dd]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-3b15d8dd]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3b15d8dd]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3b15d8dd]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3b15d8dd]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3b15d8dd]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3b15d8dd],.use-text-paragraph[data-v-3b15d8dd]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3b15d8dd]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3b15d8dd]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3b15d8dd]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3b15d8dd]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3b15d8dd]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3b15d8dd]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3b15d8dd]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3b15d8dd]{display:none}}.logo[data-v-3b15d8dd]{display:block;margin:24px 0 8px;position:relative;padding:0 16px}.logo img[data-v-3b15d8dd]{height:80px}.text[data-v-3b15d8dd]{font-size:18px;text-transform:capitalize;font-weight:var(--font-bold)}.menu[data-v-3b15d8dd]{background:none}.menu ul[data-v-3b15d8dd]{padding:0;margin:0}.menu .link[data-v-3b15d8dd]{margin:16px 0;padding-top:0;padding-bottom:0;background:none!important;min-height:0}.menu .link[data-v-3b15d8dd]:before{content:\"\";position:absolute;top:5px;opacity:.2px;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));height:75%;width:0;transition:all .2s cubic-bezier(0,0,.14,.97)}[dir=ltr] .menu .link[data-v-3b15d8dd]:before{left:-16px}[dir=rtl] .menu .link[data-v-3b15d8dd]:before{right:-16px}.menu .link[data-v-3b15d8dd]:hover:before{width:110%}.menu .link:hover .text[data-v-3b15d8dd]{color:var(--v-primary-base)}.menu .text[data-v-3b15d8dd]{transition:all .3s ease-in;position:relative;line-height:32px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerNav_vue_vue_type_style_index_0_id_2c8edc5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerNav_vue_vue_type_style_index_0_id_2c8edc5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerNav_vue_vue_type_style_index_0_id_2c8edc5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerNav_vue_vue_type_style_index_0_id_2c8edc5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerNav_vue_vue_type_style_index_0_id_2c8edc5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerNav_vue_vue_type_style_index_0_id_2c8edc5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-2c8edc5e]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-2c8edc5e]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2c8edc5e]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2c8edc5e]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-2c8edc5e]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2c8edc5e]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2c8edc5e]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-2c8edc5e]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2c8edc5e]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2c8edc5e]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2c8edc5e]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2c8edc5e]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2c8edc5e],.use-text-paragraph[data-v-2c8edc5e]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2c8edc5e]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2c8edc5e]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2c8edc5e]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2c8edc5e]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2c8edc5e]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2c8edc5e]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2c8edc5e]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2c8edc5e]{display:none}}.root[data-v-2c8edc5e]{display:block}@media(max-width:1279px){.root[data-v-2c8edc5e]{padding-top:80px}.root>.container[data-v-2c8edc5e]{padding:0!important}}.cover[data-v-2c8edc5e]{position:absolute;clip:rect(auto,auto,auto,auto);top:0;height:100%;width:1080px;overflow:hidden}[dir=ltr] .cover[data-v-2c8edc5e]{left:0}[dir=rtl] .cover[data-v-2c8edc5e]{right:0}.figure[data-v-2c8edc5e]{display:block;width:100%;height:100%}.figure img[data-v-2c8edc5e]{position:fixed}@media(max-width:599px){[dir=ltr] .figure img[data-v-2c8edc5e]{left:-50%}[dir=rtl] .figure img[data-v-2c8edc5e]{right:-50%}}.overlay[data-v-2c8edc5e]{opacity:.75;position:absolute;width:100%;height:100%;top:0;left:0}.theme--light .overlay[data-v-2c8edc5e]{background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.theme--dark .overlay[data-v-2c8edc5e]{background-image:linear-gradient(120deg,var(--v-secondarydark-base),var(--v-primarydark-base))}.banner[data-v-2c8edc5e]{position:relative;padding:80px 24px 0;color:#fff;height:500px}@media(max-width:959px){.banner[data-v-2c8edc5e]{height:420px}}@media(max-width:599px){.banner[data-v-2c8edc5e]{height:400px}}@media(min-width:600px){.banner[data-v-2c8edc5e]{padding:80px}}.banner h4[data-v-2c8edc5e]{font-family:Times New Roman}.text[data-v-2c8edc5e]{position:relative;max-width:720px}@media(max-width:959px){.text[data-v-2c8edc5e]{text-align:center;padding:0 16px}}.socmed[data-v-2c8edc5e],.text h2[data-v-2c8edc5e],.text h4[data-v-2c8edc5e],.text h5[data-v-2c8edc5e]{margin-bottom:24px}.socmed button[data-v-2c8edc5e]{margin:8px;color:var(--v-primarydark-base);width:36px;height:36px}.socmed button i[data-v-2c8edc5e]{color:hsla(0,0%,100%,.75)}.socmed i[data-v-2c8edc5e]{font-size:24px}.setting-icon[data-v-2c8edc5e]{position:absolute;top:80px}[dir=ltr] .setting-icon[data-v-2c8edc5e]{right:80px}[dir=rtl] .setting-icon[data-v-2c8edc5e]{left:80px}.setting-icon[data-v-2c8edc5e]  .v-icon{color:#fff!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_b1fe4e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_b1fe4e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_b1fe4e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_b1fe4e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_b1fe4e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_b1fe4e06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-b1fe4e06]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b1fe4e06]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b1fe4e06]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b1fe4e06]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b1fe4e06]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b1fe4e06]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b1fe4e06]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b1fe4e06]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b1fe4e06]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b1fe4e06]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b1fe4e06]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b1fe4e06]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b1fe4e06],.use-text-paragraph[data-v-b1fe4e06]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b1fe4e06]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b1fe4e06]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-b1fe4e06]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-b1fe4e06]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-b1fe4e06]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b1fe4e06]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-b1fe4e06]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-b1fe4e06]{display:none}}.root[data-v-b1fe4e06]{position:relative}@media(max-width:599px){.root>div[data-v-b1fe4e06]{padding:0}}.about[data-v-b1fe4e06]{display:flex;flex-direction:column-reverse}@media(min-width:960px){.about[data-v-b1fe4e06]{flex-direction:row;justify-content:space-between}}@media(max-width:959px){.about[data-v-b1fe4e06]{text-align:center}.about>div>h5[data-v-b1fe4e06]{font-weight:var(--font-regular);font-size:18px;line-height:28px;margin-top:56px}}.line[data-v-b1fe4e06]{border:2px solid;border-top:0;height:40px;width:calc(100% - 130px);border-image-source:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));border-image-slice:1;position:relative;margin-top:16px}[dir=ltr] .line[data-v-b1fe4e06]{border-left:0}[dir=rtl] .line[data-v-b1fe4e06]{border-right:0}@media(max-width:1279px){.line[data-v-b1fe4e06]{display:none}}.reward[data-v-b1fe4e06]{flex:1;display:flex;justify-content:space-between}@media(min-width:960px){.reward[data-v-b1fe4e06]{flex:1;display:flex;justify-content:space-between;padding-top:4px}[dir=ltr] .reward[data-v-b1fe4e06]{padding-right:56px}[dir=rtl] .reward[data-v-b1fe4e06]{padding-left:56px}}@media(max-width:599px){.reward[data-v-b1fe4e06]{flex:1;display:flex;justify-content:space-between;overflow:auto}}.item[data-v-b1fe4e06]{text-align:center;color:#d6bd96;margin:16px}@media(min-width:960px){.item[data-v-b1fe4e06]{margin:32px}}@media(max-width:599px){.item[data-v-b1fe4e06]{padding-left:24px;padding-right:24px}}.item figure[data-v-b1fe4e06]{height:70px;margin:0 0 16px}@media(max-width:959px){.item figure[data-v-b1fe4e06]{height:50px}}.item figure img[data-v-b1fe4e06]{height:100%}.item p[data-v-b1fe4e06]{font-family:Times New Roman;margin-bottom:0}@media(max-width:959px){.item p[data-v-b1fe4e06]{font-size:16px}}.item h5[data-v-b1fe4e06]{font-weight:var(--font-medium);text-transform:uppercase}@media(max-width:959px){.item h5[data-v-b1fe4e06]{font-size:16px}}.photo[data-v-b1fe4e06]{position:relative;margin-top:-140px;background:#fff;width:270px;height:345px}@media(max-width:959px){.photo[data-v-b1fe4e06]{width:200px;min-height:200px;height:auto;margin-left:auto;margin-right:auto}}.photo figure[data-v-b1fe4e06]{margin:0}.photo figure img[data-v-b1fe4e06]{width:100%;min-height:100%}.frame[data-v-b1fe4e06]{position:absolute;width:90%;top:16px;height:105%;border:2px solid;border-image-source:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));border-image-slice:1;z-index:5}[dir=ltr] .frame[data-v-b1fe4e06]{left:5%}[dir=rtl] .frame[data-v-b1fe4e06]{right:5%}.socmed[data-v-b1fe4e06]{margin:32px auto;max-width:600px}@media(min-width:960px){.socmed[data-v-b1fe4e06]{display:flex;justify-content:space-evenly}}.socmed button[data-v-b1fe4e06]{margin:8px 16px;width:36px;height:36px}.theme--light .socmed button i[data-v-b1fe4e06]{color:var(--v-primarydark-base)}.theme--dark .socmed button i[data-v-b1fe4e06]{color:var(--v-primarylight-base)}.socmed i[data-v-b1fe4e06]{font-size:22px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_3e5bc282_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_3e5bc282_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_3e5bc282_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_3e5bc282_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_3e5bc282_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_3e5bc282_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-3e5bc282]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-3e5bc282]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3e5bc282]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3e5bc282]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-3e5bc282]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3e5bc282]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3e5bc282]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-3e5bc282]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3e5bc282]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3e5bc282]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3e5bc282]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3e5bc282]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3e5bc282],.use-text-paragraph[data-v-3e5bc282]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3e5bc282]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3e5bc282]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3e5bc282]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3e5bc282]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3e5bc282]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3e5bc282]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3e5bc282]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3e5bc282]{display:none}}.root[data-v-3e5bc282]{position:relative}@media(min-width:600px){.root[data-v-3e5bc282]{background-repeat:no-repeat;background-position:100% 100%}.theme--light .root[data-v-3e5bc282]{background-image:url(/images/profile/pc.jpg)}.theme--dark .root[data-v-3e5bc282]{background-image:url(/images/profile/pc-dark.jpg)}}@media(max-width:1279px){.root[data-v-3e5bc282]{padding-top:40px}}.name-deco[data-v-3e5bc282]{margin:0;padding:0;transform:rotate(-90deg);transform-origin:top center;letter-spacing:-10px;position:absolute;font-weight:var(--font-regular);text-transform:uppercase;color:#000;top:240px;font-size:72px;opacity:.1;z-index:20}[dir=ltr] .name-deco[data-v-3e5bc282]{left:-40px}[dir=rtl] .name-deco[data-v-3e5bc282]{right:-40px}.title-timeline[data-v-3e5bc282]{text-transform:uppercase;margin-bottom:24px}.theme--light .title-timeline[data-v-3e5bc282]{color:var(--v-secondarydark-base)}.theme--dark .title-timeline[data-v-3e5bc282]{color:var(--v-secondarylight-base)}.history[data-v-3e5bc282]{position:relative;padding:40px 32px 80px;border-image-source:linear-gradient(190deg,var(--v-secondary-base),var(--v-primary-base));border-image-slice:1;border-top:0;border-bottom:0}[dir=ltr] .history[data-v-3e5bc282]{border-left:2px solid}[dir=rtl] .history[data-v-3e5bc282]{border-right:2px solid}[dir=ltr] .history[data-v-3e5bc282]{border-right:0}[dir=rtl] .history[data-v-3e5bc282]{border-left:0}@media(max-width:1279px){.history[data-v-3e5bc282]{border:none!important}}@media(max-width:599px){.history[data-v-3e5bc282]{padding:0 0 40px}}.history h3[data-v-3e5bc282]{font-weight:var(--font-bold)}@media(max-width:599px){.history h3[data-v-3e5bc282]{width:100%}}@media(max-width:599px){.history p[data-v-3e5bc282]{display:inline-block}[dir=ltr] .history p[data-v-3e5bc282]{margin-right:16px}[dir=rtl] .history p[data-v-3e5bc282]{margin-left:16px}}.history ul[data-v-3e5bc282]{margin:0;padding:0}.history ul li[data-v-3e5bc282]{list-style:none;margin-bottom:40px;position:relative}@media(max-width:959px){[dir=ltr] .history ul li[data-v-3e5bc282]{padding-left:45px}[dir=rtl] .history ul li[data-v-3e5bc282]{padding-right:45px}}.history ul li[data-v-3e5bc282]:last-child{margin-bottom:0}.history ul li[data-v-3e5bc282]:before{content:\"\";border-radius:50%;width:24px;height:24px;border:4px solid;position:absolute;top:4px}.theme--light .history ul li[data-v-3e5bc282]:before{background:var(--v-primarydark-base)}.theme--dark .history ul li[data-v-3e5bc282]:before{background:var(--v-primary-base)}.theme--light .history ul li[data-v-3e5bc282]:before{border-color:#fff}.theme--dark .history ul li[data-v-3e5bc282]:before{border-color:#303030}[dir=ltr] .history ul li[data-v-3e5bc282]:before{left:-45px}[dir=rtl] .history ul li[data-v-3e5bc282]:before{right:-45px}@media(max-width:959px){[dir=ltr] .history ul li[data-v-3e5bc282]:before{left:0}[dir=rtl] .history ul li[data-v-3e5bc282]:before{right:0}}.theme--light .history ul li .time[data-v-3e5bc282]{color:rgba(0,0,0,.54)}.theme--dark .history ul li .time[data-v-3e5bc282]{color:hsla(0,0%,100%,.7)}.progress-wrap[data-v-3e5bc282]{padding-bottom:64px}@media(min-width:600px){.progress-wrap[data-v-3e5bc282]{padding:40px 0 80px}}.progress-wrap ul[data-v-3e5bc282]{margin:0;padding:0}.progress-wrap ul li[data-v-3e5bc282]{list-style:none;margin-bottom:40px}.progress-wrap ul li[data-v-3e5bc282]:last-child{margin-bottom:0}.progress-wrap ul li h5[data-v-3e5bc282]{font-weight:var(--font-bold)}.text-icon[data-v-3e5bc282]{margin-bottom:8px;display:flex;align-items:center}.text-icon i[data-v-3e5bc282]{font-size:28px}.theme--light .text-icon i[data-v-3e5bc282]{color:rgba(0,0,0,.54)}.theme--dark .text-icon i[data-v-3e5bc282]{color:hsla(0,0%,100%,.7)}[dir=ltr] .text-icon h5[data-v-3e5bc282]{margin-left:8px}[dir=rtl] .text-icon h5[data-v-3e5bc282]{margin-right:8px}.progress[data-v-3e5bc282]{border-radius:10px}.theme--light .progress[data-v-3e5bc282]{background:rgba(0,0,0,.12)}.theme--dark .progress[data-v-3e5bc282]{background:hsla(0,0%,100%,.12)}.progress[data-v-3e5bc282]  .v-progress-linear__determinate{transition:all .5s cubic-bezier(0,0,0,.96);border-radius:10px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_b2f93d34_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_b2f93d34_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_b2f93d34_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_b2f93d34_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_b2f93d34_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_b2f93d34_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-b2f93d34]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b2f93d34]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b2f93d34]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b2f93d34]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b2f93d34]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b2f93d34]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b2f93d34]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b2f93d34]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b2f93d34]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b2f93d34]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b2f93d34]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b2f93d34]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b2f93d34],.use-text-paragraph[data-v-b2f93d34]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b2f93d34]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b2f93d34]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-b2f93d34]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-b2f93d34]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-b2f93d34]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b2f93d34]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-b2f93d34]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-b2f93d34]{display:none}}.parallax-wrap[data-v-b2f93d34]{position:absolute;width:100%;height:100%;overflow:hidden;left:0;z-index:0}@media(max-width:1279px){.parallax-wrap[data-v-b2f93d34]{display:none}}.inner-parallax[data-v-b2f93d34]{top:-400px}.inner-parallax[data-v-b2f93d34],.inner-parallax .figure[data-v-b2f93d34]{height:800px;width:100%;position:absolute;display:block}.inner-parallax .figure[data-v-b2f93d34]  .Masthead,.inner-parallax .figure[data-v-b2f93d34]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-b2f93d34]{height:800px;width:100%;display:block;position:absolute;top:0}.parallax-vertical[data-v-b2f93d34]{width:100%;height:100%;position:absolute}@media(min-width:1280px){.parallax-vertical[data-v-b2f93d34]{transform:scale(.5)}}@media(max-width:599px){.parallax-vertical[data-v-b2f93d34]{display:none}}.parallax-dot[data-v-b2f93d34]{top:-500px;width:845px;height:1099px;opacity:.2}.theme--light .parallax-dot[data-v-b2f93d34]{fill:rgba(0,0,0,.38)}.theme--dark .parallax-dot[data-v-b2f93d34]{fill:hsla(0,0%,100%,.5)}[dir=ltr] .parallax-dot[data-v-b2f93d34]{left:200px}[dir=rtl] .parallax-dot[data-v-b2f93d34]{right:200px}.parallax-triangle[data-v-b2f93d34]{top:300px;opacity:.1;width:902px;height:1042px;fill:transparent;stroke-width:50px}.theme--light .parallax-triangle[data-v-b2f93d34]{outline:rgba(0,0,0,.38)}.theme--dark .parallax-triangle[data-v-b2f93d34]{outline:hsla(0,0%,100%,.5)}.theme--light .parallax-triangle[data-v-b2f93d34]{stroke:rgba(0,0,0,.38)}.theme--dark .parallax-triangle[data-v-b2f93d34]{stroke:hsla(0,0%,100%,.5)}[dir=ltr] .parallax-triangle[data-v-b2f93d34]{right:-100px}[dir=rtl] .parallax-triangle[data-v-b2f93d34]{left:-100px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_005aa832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_005aa832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_005aa832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_005aa832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_005aa832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_005aa832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-005aa832]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-005aa832]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-005aa832]{font-size:28px;line-height:44px}}.use-text-title2[data-v-005aa832]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-005aa832]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-005aa832]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-005aa832]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-005aa832]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-005aa832]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-005aa832]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-005aa832]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-005aa832]{font-size:16px;line-height:24px}}.use-text-caption[data-v-005aa832],.use-text-paragraph[data-v-005aa832]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-005aa832]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-005aa832]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-005aa832]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-005aa832]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-005aa832]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-005aa832]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-005aa832]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-005aa832]{display:none}}.title[data-v-005aa832]{display:block;position:relative;margin-bottom:24px;text-align:center;height:64px;background-repeat:no-repeat;background-position:50%;background-size:72px;padding:16px 0}.theme--light .title[data-v-005aa832]{background-image:url(/images/profile/titleDecoLight.png)}.theme--dark .title[data-v-005aa832]{background-image:url(/images/profile/titleDecoDark.png)}.title h4[data-v-005aa832]{vertical-align:middle;font-weight:var(--font-regular);text-transform:capitalize;font-size:36px;line-height:56px}.theme--light .title h4[data-v-005aa832]{color:rgba(0,0,0,.87)}.theme--dark .title h4[data-v-005aa832]{color:#fff}@media(max-width:1279px){.title h4[data-v-005aa832]{font-size:32px;line-height:48px}}@media(max-width:599px){.title h4[data-v-005aa832]{font-size:24px;line-height:36px}}.title h4 strong[data-v-005aa832]{font-weight:var(--font-bold)}.title.dark h4[data-v-005aa832]{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconText_vue_vue_type_style_index_0_id_0c54da66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconText_vue_vue_type_style_index_0_id_0c54da66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconText_vue_vue_type_style_index_0_id_0c54da66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconText_vue_vue_type_style_index_0_id_0c54da66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconText_vue_vue_type_style_index_0_id_0c54da66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IconText_vue_vue_type_style_index_0_id_0c54da66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-0c54da66]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-0c54da66]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-0c54da66]{font-size:28px;line-height:44px}}.use-text-title2[data-v-0c54da66]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-0c54da66]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-0c54da66]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-0c54da66]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-0c54da66]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-0c54da66]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-0c54da66]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-0c54da66]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-0c54da66]{font-size:16px;line-height:24px}}.use-text-caption[data-v-0c54da66],.use-text-paragraph[data-v-0c54da66]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-0c54da66]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-0c54da66]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-0c54da66]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-0c54da66]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-0c54da66]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-0c54da66]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-0c54da66]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-0c54da66]{display:none}}.icon-text[data-v-0c54da66]{position:relative;text-align:center;padding:16px;width:240px;height:200px;transition:all .3s ease-out;overflow:hidden}.icon-text.v-card[data-v-0c54da66]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:0}@media(max-width:1500px){.icon-text[data-v-0c54da66]{width:200px}}.icon-text[data-v-0c54da66]:hover{background:var(--v-secondary-base)}.icon-text:hover .more[data-v-0c54da66]{bottom:0}.icon-text:hover .name[data-v-0c54da66]{color:#fff;top:0}.icon-text:hover .name[data-v-0c54da66]:after{width:30px}.icon-text:hover .desc[data-v-0c54da66]{top:0;opacity:1}.icon-text:hover .icon[data-v-0c54da66]{transform:scale(.5);opacity:0}.icon[data-v-0c54da66]{margin-bottom:16px;transition:all .3s ease-out}.icon span[data-v-0c54da66]:before{font-size:130px;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.more[data-v-0c54da66]{position:absolute;bottom:-90px;width:100%;padding:24px;height:200px;transition:all .3s ease-out;display:flex;flex-direction:column;justify-content:center}[dir=ltr] .more[data-v-0c54da66]{left:0}[dir=rtl] .more[data-v-0c54da66]{right:0}.name[data-v-0c54da66]{font-weight:var(--font-bold);transition:all .3s ease-out;margin-bottom:32px;top:30px;position:relative}.name[data-v-0c54da66]:after{content:\"\";width:0;transition:all .5s ease-out;display:block;position:relative;margin:0 auto;top:8px;border-top:2px solid #fff}.desc[data-v-0c54da66]{top:60px;opacity:0;transition:all .5s cubic-bezier(.25,.46,.45,.94);color:#fff}.desc[data-v-0c54da66],.img-thumb[data-v-0c54da66]{position:relative}.img-thumb[data-v-0c54da66]{border:8px solid}.theme--light .img-thumb[data-v-0c54da66]{border-color:#fff}.theme--dark .img-thumb[data-v-0c54da66]{border-color:#424242}.img-thumb.v-card[data-v-0c54da66]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:0}.img-thumb .figure[data-v-0c54da66]{height:100%;width:100%;position:relative;margin:0;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.img-thumb .figure[data-v-0c54da66]:after{content:\"\";position:absolute;bottom:-80px;opacity:.8;width:160px;height:160px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}[dir=ltr] .img-thumb .figure[data-v-0c54da66]:after{left:-100px}[dir=rtl] .img-thumb .figure[data-v-0c54da66]:after{right:-100px}.v-application--is-rtl .img-thumb .figure[data-v-0c54da66]:after{transform:rotate(35deg)}.v-application--is-ltr .img-thumb .figure[data-v-0c54da66]:after{transform:rotate(-35deg)}.img-thumb .img[data-v-0c54da66]{display:block;width:100%;height:100%;background-size:cover;transform:scale(1.2);transition:transform .7s ease-out}.img-thumb[data-v-0c54da66]:before{content:\"\";bottom:-12px;width:30%;height:100%;border:4px solid;border-image-source:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));border-image-slice:1;border-top:0;position:absolute}[dir=ltr] .img-thumb[data-v-0c54da66]:before{left:-13px}[dir=rtl] .img-thumb[data-v-0c54da66]:before{right:-13px}[dir=ltr] .img-thumb[data-v-0c54da66]:before{border-right:0}[dir=rtl] .img-thumb[data-v-0c54da66]:before{border-left:0}@media(max-width:599px){.img-thumb[data-v-0c54da66]:before{display:none}}.img-thumb:hover .img[data-v-0c54da66]{transform:scale(1.1) rotate(-5deg)}.img-thumb:hover .detail[data-v-0c54da66]{opacity:1;background-position:60% 0}.img-thumb:hover .detail a[data-v-0c54da66],.img-thumb:hover .detail h6[data-v-0c54da66]{transform:\"translate(0, 0)\"}.detail[data-v-0c54da66]{transition:opacity .3s ease-out,background-position 3s ease-out;bottom:0;opacity:0;padding:24px;color:#fff;display:flex;flex-direction:column;justify-content:center}.detail[data-v-0c54da66],.detail[data-v-0c54da66]:before{position:absolute;width:100%;height:100%}.detail[data-v-0c54da66]:before{content:\"\";top:0;left:0;opacity:.8;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));background-size:300%;background-position:0 0}.detail>*[data-v-0c54da66]{transition:all .4s ease-out}.detail h6[data-v-0c54da66]{position:relative;transform:translateY(10px);margin-bottom:24px;line-height:36px}.detail a[data-v-0c54da66]{font-size:18px;text-decoration:underline;color:#fff;position:relative;transform:translateY(30px)}.short[data-v-0c54da66]{height:240px}@media(max-width:1279px){.short[data-v-0c54da66]{height:210px}}.short .img[data-v-0c54da66]{width:100%}.short[data-v-0c54da66]:before{width:80px;height:80px}.medium[data-v-0c54da66]{height:320px}@media(max-width:599px){.medium[data-v-0c54da66]{height:210px}}.medium .img[data-v-0c54da66]{width:100%}.long[data-v-0c54da66]{height:480px}@media(max-width:599px){.long[data-v-0c54da66]{height:210px}}.long .img[data-v-0c54da66]{height:100%}.long[data-v-0c54da66]:before{width:190px;height:260px}.long .figure[data-v-0c54da66]:after{width:300px;height:300px;bottom:-120px}[dir=ltr] .long .figure[data-v-0c54da66]:after{left:-200px}[dir=rtl] .long .figure[data-v-0c54da66]:after{right:-200px}.post[data-v-0c54da66]{height:380px;width:256px;position:relative}@media(max-width:599px){.post[data-v-0c54da66]{margin-bottom:12px}}.post figure[data-v-0c54da66]{margin:0;width:100%;height:140px;overflow:hidden}.post figure img[data-v-0c54da66]{width:100%;min-height:100%}.text[data-v-0c54da66]{height:200px;padding:24px}.text h5[data-v-0c54da66]{font-weight:var(--font-bold);margin-bottom:8px}.text p[data-v-0c54da66]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.theme--light .text p[data-v-0c54da66]{color:rgba(0,0,0,.54)}.theme--dark .text p[data-v-0c54da66]{color:hsla(0,0%,100%,.7)}.readmore[data-v-0c54da66]{margin:0 24px;line-height:16px!important}[dir=ltr] .readmore[data-v-0c54da66]{border-left:3px solid var(--v-primary-base)}[dir=rtl] .readmore[data-v-0c54da66]{border-right:3px solid var(--v-primary-base)}.readmore.v-btn:not(.v-btn--round).v-size--default[data-v-0c54da66]{height:auto;padding:0 8px;ont-weight:var(--font-regular)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_d8820b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_d8820b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_d8820b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_d8820b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_d8820b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_d8820b12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-d8820b12]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-d8820b12]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-d8820b12]{font-size:28px;line-height:44px}}.use-text-title2[data-v-d8820b12]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-d8820b12]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-d8820b12]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-d8820b12]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-d8820b12]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-d8820b12]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-d8820b12]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-d8820b12]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-d8820b12]{font-size:16px;line-height:24px}}.use-text-caption[data-v-d8820b12],.use-text-paragraph[data-v-d8820b12]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-d8820b12]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-d8820b12]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-d8820b12]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-d8820b12]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-d8820b12]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-d8820b12]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-d8820b12]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-d8820b12]{display:none}}.root[data-v-d8820b12]{padding-bottom:16px;position:relative}@media(max-width:1279px){.root>div[data-v-d8820b12]{padding:0}}.props[data-v-d8820b12]{width:240px;height:240px}.props[data-v-d8820b12]:focus{outline:none}.floating-title[data-v-d8820b12]{text-align:center;padding:0 16px}@media(min-width:960px){.floating-title[data-v-d8820b12]{position:absolute;top:40px;width:240px}[dir=ltr] .floating-title[data-v-d8820b12]{left:64px}[dir=rtl] .floating-title[data-v-d8820b12]{right:64px}}.carousel[data-v-d8820b12]{position:relative}@media(max-width:959px){.carousel[data-v-d8820b12]{margin-top:24px}}.item[data-v-d8820b12]{padding:0 8px;margin-bottom:8px}.item[data-v-d8820b12]:focus{outline:none}.nav[data-v-d8820b12]{position:absolute;top:45%;width:36px;height:36px;padding:0;min-width:0;border:none;box-shadow:none;z-index:3}.theme--light .nav[data-v-d8820b12]{background-color:#fafafa}.theme--dark .nav[data-v-d8820b12]{background-color:#303030}.v-application--is-rtl .nav[data-v-d8820b12]{transform:scale(2.5) rotate(180deg)}.v-application--is-ltr .nav[data-v-d8820b12]{transform:scale(2.5) rotate(0deg)}@media(max-width:959px){.nav[data-v-d8820b12]{display:none}}.nav i[data-v-d8820b12]{transform:scale(1.6)}.theme--light .nav i[data-v-d8820b12]{color:rgba(0,0,0,.87)}.theme--dark .nav i[data-v-d8820b12]{color:hsla(0,0%,100%,.12)}[dir=ltr] .prev[data-v-d8820b12]{left:6px}[dir=ltr] .next[data-v-d8820b12],[dir=rtl] .prev[data-v-d8820b12]{right:6px}[dir=rtl] .next[data-v-d8820b12]{left:6px}.v-application--is-rtl .item-props-first div[data-v-d8820b12]{width:400px}.v-application--is-ltr .item-props-first div[data-v-d8820b12]{width:350px}@media(max-width:1500px){.v-application--is-rtl .item-props-first div[data-v-d8820b12]{width:500px}.v-application--is-ltr .item-props-first div[data-v-d8820b12]{width:350px}}@media(max-width:959px){.item-props-first[data-v-d8820b12]{display:none}}.v-application--is-rtl .item-props-last[data-v-d8820b12]{width:350px}.v-application--is-ltr .item-props-last[data-v-d8820b12]{width:400px}@media(max-width:1500px){.v-application--is-rtl .item-props-last div[data-v-d8820b12]{width:300px}.v-application--is-ltr .item-props-last div[data-v-d8820b12]{width:500px}}@media(max-width:1279px){.item-props-last[data-v-d8820b12]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageThumb_vue_vue_type_style_index_0_id_73b9edb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageThumb_vue_vue_type_style_index_0_id_73b9edb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageThumb_vue_vue_type_style_index_0_id_73b9edb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageThumb_vue_vue_type_style_index_0_id_73b9edb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageThumb_vue_vue_type_style_index_0_id_73b9edb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageThumb_vue_vue_type_style_index_0_id_73b9edb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-73b9edb7]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-73b9edb7]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-73b9edb7]{font-size:28px;line-height:44px}}.use-text-title2[data-v-73b9edb7]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-73b9edb7]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-73b9edb7]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-73b9edb7]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-73b9edb7]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-73b9edb7]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-73b9edb7]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-73b9edb7]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-73b9edb7]{font-size:16px;line-height:24px}}.use-text-caption[data-v-73b9edb7],.use-text-paragraph[data-v-73b9edb7]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-73b9edb7]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-73b9edb7]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-73b9edb7]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-73b9edb7]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-73b9edb7]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-73b9edb7]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-73b9edb7]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-73b9edb7]{display:none}}.icon-text[data-v-73b9edb7]{position:relative;text-align:center;padding:16px;width:240px;height:200px;transition:all .3s ease-out;overflow:hidden}.icon-text.v-card[data-v-73b9edb7]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:0}@media(max-width:1500px){.icon-text[data-v-73b9edb7]{width:200px}}.icon-text[data-v-73b9edb7]:hover{background:var(--v-secondary-base)}.icon-text:hover .more[data-v-73b9edb7]{bottom:0}.icon-text:hover .name[data-v-73b9edb7]{color:#fff;top:0}.icon-text:hover .name[data-v-73b9edb7]:after{width:30px}.icon-text:hover .desc[data-v-73b9edb7]{top:0;opacity:1}.icon-text:hover .icon[data-v-73b9edb7]{transform:scale(.5);opacity:0}.icon[data-v-73b9edb7]{margin-bottom:16px;transition:all .3s ease-out}.icon span[data-v-73b9edb7]:before{font-size:130px;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.more[data-v-73b9edb7]{position:absolute;bottom:-90px;width:100%;padding:24px;height:200px;transition:all .3s ease-out;display:flex;flex-direction:column;justify-content:center}[dir=ltr] .more[data-v-73b9edb7]{left:0}[dir=rtl] .more[data-v-73b9edb7]{right:0}.name[data-v-73b9edb7]{font-weight:var(--font-bold);transition:all .3s ease-out;margin-bottom:32px;top:30px;position:relative}.name[data-v-73b9edb7]:after{content:\"\";width:0;transition:all .5s ease-out;display:block;position:relative;margin:0 auto;top:8px;border-top:2px solid #fff}.desc[data-v-73b9edb7]{top:60px;opacity:0;transition:all .5s cubic-bezier(.25,.46,.45,.94);color:#fff}.desc[data-v-73b9edb7],.img-thumb[data-v-73b9edb7]{position:relative}.img-thumb[data-v-73b9edb7]{border:8px solid}.theme--light .img-thumb[data-v-73b9edb7]{border-color:#fff}.theme--dark .img-thumb[data-v-73b9edb7]{border-color:#424242}.img-thumb.v-card[data-v-73b9edb7]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:0}.img-thumb .figure[data-v-73b9edb7]{height:100%;width:100%;position:relative;margin:0;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.img-thumb .figure[data-v-73b9edb7]:after{content:\"\";position:absolute;bottom:-80px;opacity:.8;width:160px;height:160px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}[dir=ltr] .img-thumb .figure[data-v-73b9edb7]:after{left:-100px}[dir=rtl] .img-thumb .figure[data-v-73b9edb7]:after{right:-100px}.v-application--is-rtl .img-thumb .figure[data-v-73b9edb7]:after{transform:rotate(35deg)}.v-application--is-ltr .img-thumb .figure[data-v-73b9edb7]:after{transform:rotate(-35deg)}.img-thumb .img[data-v-73b9edb7]{display:block;width:100%;height:100%;background-size:cover;transform:scale(1.2);transition:transform .7s ease-out}.img-thumb[data-v-73b9edb7]:before{content:\"\";bottom:-12px;width:30%;height:100%;border:4px solid;border-image-source:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));border-image-slice:1;border-top:0;position:absolute}[dir=ltr] .img-thumb[data-v-73b9edb7]:before{left:-13px}[dir=rtl] .img-thumb[data-v-73b9edb7]:before{right:-13px}[dir=ltr] .img-thumb[data-v-73b9edb7]:before{border-right:0}[dir=rtl] .img-thumb[data-v-73b9edb7]:before{border-left:0}@media(max-width:599px){.img-thumb[data-v-73b9edb7]:before{display:none}}.img-thumb:hover .img[data-v-73b9edb7]{transform:scale(1.1) rotate(-5deg)}.img-thumb:hover .detail[data-v-73b9edb7]{opacity:1;background-position:60% 0}.img-thumb:hover .detail a[data-v-73b9edb7],.img-thumb:hover .detail h6[data-v-73b9edb7]{transform:\"translate(0, 0)\"}.detail[data-v-73b9edb7]{transition:opacity .3s ease-out,background-position 3s ease-out;bottom:0;opacity:0;padding:24px;color:#fff;display:flex;flex-direction:column;justify-content:center}.detail[data-v-73b9edb7],.detail[data-v-73b9edb7]:before{position:absolute;width:100%;height:100%}.detail[data-v-73b9edb7]:before{content:\"\";top:0;left:0;opacity:.8;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));background-size:300%;background-position:0 0}.detail>*[data-v-73b9edb7]{transition:all .4s ease-out}.detail h6[data-v-73b9edb7]{position:relative;transform:translateY(10px);margin-bottom:24px;line-height:36px}.detail a[data-v-73b9edb7]{font-size:18px;text-decoration:underline;color:#fff;position:relative;transform:translateY(30px)}.short[data-v-73b9edb7]{height:240px}@media(max-width:1279px){.short[data-v-73b9edb7]{height:210px}}.short .img[data-v-73b9edb7]{width:100%}.short[data-v-73b9edb7]:before{width:80px;height:80px}.medium[data-v-73b9edb7]{height:320px}@media(max-width:599px){.medium[data-v-73b9edb7]{height:210px}}.medium .img[data-v-73b9edb7]{width:100%}.long[data-v-73b9edb7]{height:480px}@media(max-width:599px){.long[data-v-73b9edb7]{height:210px}}.long .img[data-v-73b9edb7]{height:100%}.long[data-v-73b9edb7]:before{width:190px;height:260px}.long .figure[data-v-73b9edb7]:after{width:300px;height:300px;bottom:-120px}[dir=ltr] .long .figure[data-v-73b9edb7]:after{left:-200px}[dir=rtl] .long .figure[data-v-73b9edb7]:after{right:-200px}.post[data-v-73b9edb7]{height:380px;width:256px;position:relative}@media(max-width:599px){.post[data-v-73b9edb7]{margin-bottom:12px}}.post figure[data-v-73b9edb7]{margin:0;width:100%;height:140px;overflow:hidden}.post figure img[data-v-73b9edb7]{width:100%;min-height:100%}.text[data-v-73b9edb7]{height:200px;padding:24px}.text h5[data-v-73b9edb7]{font-weight:var(--font-bold);margin-bottom:8px}.text p[data-v-73b9edb7]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.theme--light .text p[data-v-73b9edb7]{color:rgba(0,0,0,.54)}.theme--dark .text p[data-v-73b9edb7]{color:hsla(0,0%,100%,.7)}.readmore[data-v-73b9edb7]{margin:0 24px;line-height:16px!important}[dir=ltr] .readmore[data-v-73b9edb7]{border-left:3px solid var(--v-primary-base)}[dir=rtl] .readmore[data-v-73b9edb7]{border-right:3px solid var(--v-primary-base)}.readmore.v-btn:not(.v-btn--round).v-size--default[data-v-73b9edb7]{height:auto;padding:0 8px;ont-weight:var(--font-regular)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4145b6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4145b6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4145b6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4145b6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4145b6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4145b6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-4145b6fa]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4145b6fa]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4145b6fa]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4145b6fa]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4145b6fa]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4145b6fa]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4145b6fa]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4145b6fa]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4145b6fa]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4145b6fa]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4145b6fa]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4145b6fa]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4145b6fa],.use-text-paragraph[data-v-4145b6fa]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4145b6fa]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4145b6fa]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4145b6fa]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4145b6fa]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4145b6fa]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4145b6fa]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4145b6fa]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4145b6fa]{display:none}}.root[data-v-4145b6fa]{position:relative}@media(max-width:599px){.root[data-v-4145b6fa] >.container{padding:0!important}}.filter[data-v-4145b6fa]{position:relative;z-index:20;display:flex;overflow:auto;width:100%;padding:24px 0}@media(max-width:959px){.filter[data-v-4145b6fa]{padding:0 8px 24px}}.filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{background:transparent;border-radius:40px;border:1px solid rgba(0,0,0,.87);white-space:nowrap;min-width:100px}[dir=ltr] .filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{margin-right:8px}[dir=rtl] .filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{margin-left:8px}.theme--light .filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{color:rgba(0,0,0,.87)}.theme--dark .filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{color:#fff}@media(min-width:600px){.filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{padding:8px 32px;box-shadow:none}[dir=ltr] .filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{margin-right:24px}[dir=rtl] .filter>.v-btn:not(.v-btn--round).v-size--default[data-v-4145b6fa]{margin-left:24px}}.filter>.v-btn:not(.v-btn--round).v-size--default.selected[data-v-4145b6fa]{background:rgba(0,0,0,.87);color:#fff}.massonry[data-v-4145b6fa]{-moz-columns:3 300px;columns:300px 3;grid-column-gap:32px;-moz-column-gap:32px;column-gap:32px}.item[data-v-4145b6fa]{margin-bottom:32px;page-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid;opacity:0;position:relative;padding-top:20px}.item.loaded[data-v-4145b6fa]{transition:all .3s ease-out;opacity:1;padding-top:0}.item-carousel[data-v-4145b6fa]{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_dd23b046_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_dd23b046_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_dd23b046_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_dd23b046_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_dd23b046_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_dd23b046_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-dd23b046]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-dd23b046]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-dd23b046]{font-size:28px;line-height:44px}}.use-text-title2[data-v-dd23b046]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-dd23b046]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-dd23b046]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-dd23b046]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-dd23b046]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-dd23b046]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-dd23b046]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-dd23b046]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-dd23b046]{font-size:16px;line-height:24px}}.use-text-caption[data-v-dd23b046],.use-text-paragraph[data-v-dd23b046]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-dd23b046]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-dd23b046]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-dd23b046]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-dd23b046]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-dd23b046]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-dd23b046]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-dd23b046]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-dd23b046]{display:none}}#watched_counter[data-v-dd23b046]{position:relative;top:-400px}.counter-wrap[data-v-dd23b046]{padding:80px 0}.theme--light .counter-wrap[data-v-dd23b046]{background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.theme--dark .counter-wrap[data-v-dd23b046]{background-image:linear-gradient(120deg,var(--v-secondarydark-base),var(--v-primarydark-base))}.text[data-v-dd23b046]{display:flex;align-items:center}@media(max-width:959px){.text[data-v-dd23b046]{justify-content:center}}.counter-item[data-v-dd23b046]{color:#fff}.counter-item h6[data-v-dd23b046]{white-space:nowrap}@media(min-width:600px){[dir=ltr] .counter-item[data-v-dd23b046]{padding-left:40px}[dir=rtl] .counter-item[data-v-dd23b046]{padding-right:40px}}@media(max-width:959px){.counter-item[data-v-dd23b046]{text-align:center}}.counter-item i[data-v-dd23b046]{color:#fff;font-size:40px;line-height:40px}[dir=ltr] .counter-item i[data-v-dd23b046]{margin-right:16px}[dir=rtl] .counter-item i[data-v-dd23b046]{margin-left:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarBuble_vue_vue_type_style_index_0_id_7b9aa1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarBuble_vue_vue_type_style_index_0_id_7b9aa1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarBuble_vue_vue_type_style_index_0_id_7b9aa1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarBuble_vue_vue_type_style_index_0_id_7b9aa1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarBuble_vue_vue_type_style_index_0_id_7b9aa1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarBuble_vue_vue_type_style_index_0_id_7b9aa1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-7b9aa1eb]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-7b9aa1eb]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7b9aa1eb]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7b9aa1eb]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7b9aa1eb]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7b9aa1eb]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7b9aa1eb]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-7b9aa1eb]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7b9aa1eb]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7b9aa1eb]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7b9aa1eb]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7b9aa1eb]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7b9aa1eb],.use-text-paragraph[data-v-7b9aa1eb]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7b9aa1eb]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7b9aa1eb]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7b9aa1eb]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7b9aa1eb]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7b9aa1eb]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7b9aa1eb]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7b9aa1eb]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7b9aa1eb]{display:none}}.root[data-v-7b9aa1eb]{padding:80px 0;color:#fff;position:relative;z-index:10}.theme--light .root[data-v-7b9aa1eb]{background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.theme--dark .root[data-v-7b9aa1eb]{background-image:linear-gradient(120deg,var(--v-secondarydark-base),var(--v-primarydark-base))}.avatar-wrap[data-v-7b9aa1eb]{width:100%;height:100%}.avatar-wrap[data-v-7b9aa1eb],.avatar-wrap .avatar-item[data-v-7b9aa1eb]{position:absolute}.text[data-v-7b9aa1eb]{padding-top:40px}.text h3[data-v-7b9aa1eb],.text p[data-v-7b9aa1eb]{margin-bottom:24px}.text p[data-v-7b9aa1eb]{font-size:18px;line-height:32px}.text .button[data-v-7b9aa1eb]{min-width:160px}@media(max-width:959px){.text[data-v-7b9aa1eb]{text-align:center}}.world-map[data-v-7b9aa1eb]{background:url(/images/profile/worldMap.svg) no-repeat 50%;background-size:100%;position:relative;margin:0 auto}@media(min-width:600px){.world-map[data-v-7b9aa1eb]{height:360px;width:580px}}.title-serif[data-v-7b9aa1eb]{font-family:\"Times New Roman\"}.person[data-v-7b9aa1eb]{position:absolute}.avatar[data-v-7b9aa1eb]{transition:all .3s ease-out}.avatar[data-v-7b9aa1eb]:hover{transform:scale(1.2)}.dot[data-v-7b9aa1eb]{border-radius:50%;display:block;width:12px;height:12px;background:var(--v-secondary-base);border:2px solid #fff;box-shadow:0 1.5px 24.5px 4.5px rgba(0,0,0,.06);transition:all .3s ease-out}.dot[data-v-7b9aa1eb]:hover{transform:scale(1.2)}.theme--light .title-main[data-v-7b9aa1eb]{color:rgba(0,0,0,.54)}.theme--dark .title-main[data-v-7b9aa1eb]{color:hsla(0,0%,100%,.7)}.popover[data-v-7b9aa1eb]{pointer-events:none}.paper[data-v-7b9aa1eb]{width:300px;border-radius:0!important;background:none;box-shadow:none}.paper[data-v-7b9aa1eb]:before{content:\"\";border-top:15px solid;border-left:25px solid transparent;border-right:25px solid transparent;position:absolute;bottom:15px}.theme--light .paper[data-v-7b9aa1eb]:before{border-top-color:#fff}.theme--dark .paper[data-v-7b9aa1eb]:before{border-top-color:#424242}[dir=ltr] .paper[data-v-7b9aa1eb]:before{left:calc(50% - 25px)}[dir=rtl] .paper[data-v-7b9aa1eb]:before{right:calc(50% - 25px)}.paper-block[data-v-7b9aa1eb]{padding:24px;margin-bottom:30px;border-radius:0!important;position:relative;box-shadow:none!important}.theme--light .paper-block[data-v-7b9aa1eb]{background-color:#fff}.theme--dark .paper-block[data-v-7b9aa1eb]{background-color:#424242}.paper-block h6[data-v-7b9aa1eb]{margin-top:16px;font-size:14px}.paper-block .title-main[data-v-7b9aa1eb]{font-style:italic;font-size:12px}.item-carousel[data-v-7b9aa1eb]{padding:16px}.card[data-v-7b9aa1eb]{padding:24px;border-radius:4px!important}.card .avatar[data-v-7b9aa1eb]{width:30px;height:30px}.name[data-v-7b9aa1eb]{display:flex;margin-top:8px;align-items:center}.name span[data-v-7b9aa1eb]{display:inline-block}[dir=ltr] .name span[data-v-7b9aa1eb]{margin-left:8px}[dir=rtl] .name span[data-v-7b9aa1eb]{margin-right:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_235ae948_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_235ae948_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_235ae948_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_235ae948_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_235ae948_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_235ae948_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-235ae948]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-235ae948]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-235ae948]{font-size:28px;line-height:44px}}.use-text-title2[data-v-235ae948]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-235ae948]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-235ae948]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-235ae948]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-235ae948]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-235ae948]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-235ae948]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-235ae948]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-235ae948]{font-size:16px;line-height:24px}}.use-text-caption[data-v-235ae948],.use-text-paragraph[data-v-235ae948]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-235ae948]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-235ae948]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-235ae948]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-235ae948]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-235ae948]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-235ae948]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-235ae948]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-235ae948]{display:none}}.root[data-v-235ae948]{padding:80px 0;color:#fff;position:relative;z-index:10}.theme--light .root[data-v-235ae948]{background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.theme--dark .root[data-v-235ae948]{background-image:linear-gradient(120deg,var(--v-secondarydark-base),var(--v-primarydark-base))}.avatar-wrap[data-v-235ae948]{width:100%;height:100%}.avatar-wrap[data-v-235ae948],.avatar-wrap .avatar-item[data-v-235ae948]{position:absolute}.text[data-v-235ae948]{padding-top:40px}.text h3[data-v-235ae948],.text p[data-v-235ae948]{margin-bottom:24px}.text p[data-v-235ae948]{font-size:18px;line-height:32px}.text .button[data-v-235ae948]{min-width:160px}@media(max-width:959px){.text[data-v-235ae948]{text-align:center}}.world-map[data-v-235ae948]{background:url(/images/profile/worldMap.svg) no-repeat 50%;background-size:100%;position:relative;margin:0 auto}@media(min-width:600px){.world-map[data-v-235ae948]{height:360px;width:580px}}.title-serif[data-v-235ae948]{font-family:\"Times New Roman\"}.person[data-v-235ae948]{position:absolute}.avatar[data-v-235ae948]{transition:all .3s ease-out}.avatar[data-v-235ae948]:hover{transform:scale(1.2)}.dot[data-v-235ae948]{border-radius:50%;display:block;width:12px;height:12px;background:var(--v-secondary-base);border:2px solid #fff;box-shadow:0 1.5px 24.5px 4.5px rgba(0,0,0,.06);transition:all .3s ease-out}.dot[data-v-235ae948]:hover{transform:scale(1.2)}.theme--light .title-main[data-v-235ae948]{color:rgba(0,0,0,.54)}.theme--dark .title-main[data-v-235ae948]{color:hsla(0,0%,100%,.7)}.popover[data-v-235ae948]{pointer-events:none}.paper[data-v-235ae948]{width:300px;border-radius:0!important;background:none;box-shadow:none}.paper[data-v-235ae948]:before{content:\"\";border-top:15px solid;border-left:25px solid transparent;border-right:25px solid transparent;position:absolute;bottom:15px}.theme--light .paper[data-v-235ae948]:before{border-top-color:#fff}.theme--dark .paper[data-v-235ae948]:before{border-top-color:#424242}[dir=ltr] .paper[data-v-235ae948]:before{left:calc(50% - 25px)}[dir=rtl] .paper[data-v-235ae948]:before{right:calc(50% - 25px)}.paper-block[data-v-235ae948]{padding:24px;margin-bottom:30px;border-radius:0!important;position:relative;box-shadow:none!important}.theme--light .paper-block[data-v-235ae948]{background-color:#fff}.theme--dark .paper-block[data-v-235ae948]{background-color:#424242}.paper-block h6[data-v-235ae948]{margin-top:16px;font-size:14px}.paper-block .title-main[data-v-235ae948]{font-style:italic;font-size:12px}.item-carousel[data-v-235ae948]{padding:16px}.card[data-v-235ae948]{padding:24px;border-radius:4px!important}.card .avatar[data-v-235ae948]{width:30px;height:30px}.name[data-v-235ae948]{display:flex;margin-top:8px;align-items:center}.name span[data-v-235ae948]{display:inline-block}[dir=ltr] .name span[data-v-235ae948]{margin-left:8px}[dir=rtl] .name span[data-v-235ae948]{margin-right:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_style_index_0_id_6f9b15c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_style_index_0_id_6f9b15c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_style_index_0_id_6f9b15c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_style_index_0_id_6f9b15c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_style_index_0_id_6f9b15c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_style_index_0_id_6f9b15c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-6f9b15c1]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-6f9b15c1]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-6f9b15c1]{font-size:28px;line-height:44px}}.use-text-title2[data-v-6f9b15c1]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-6f9b15c1]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-6f9b15c1]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-6f9b15c1]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-6f9b15c1]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-6f9b15c1]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-6f9b15c1]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-6f9b15c1]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-6f9b15c1]{font-size:16px;line-height:24px}}.use-text-caption[data-v-6f9b15c1],.use-text-paragraph[data-v-6f9b15c1]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-6f9b15c1]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-6f9b15c1]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-6f9b15c1]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-6f9b15c1]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-6f9b15c1]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-6f9b15c1]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-6f9b15c1]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-6f9b15c1]{display:none}}.icon-text[data-v-6f9b15c1]{position:relative;text-align:center;padding:16px;width:240px;height:200px;transition:all .3s ease-out;overflow:hidden}.icon-text.v-card[data-v-6f9b15c1]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:0}@media(max-width:1500px){.icon-text[data-v-6f9b15c1]{width:200px}}.icon-text[data-v-6f9b15c1]:hover{background:var(--v-secondary-base)}.icon-text:hover .more[data-v-6f9b15c1]{bottom:0}.icon-text:hover .name[data-v-6f9b15c1]{color:#fff;top:0}.icon-text:hover .name[data-v-6f9b15c1]:after{width:30px}.icon-text:hover .desc[data-v-6f9b15c1]{top:0;opacity:1}.icon-text:hover .icon[data-v-6f9b15c1]{transform:scale(.5);opacity:0}.icon[data-v-6f9b15c1]{margin-bottom:16px;transition:all .3s ease-out}.icon span[data-v-6f9b15c1]:before{font-size:130px;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.more[data-v-6f9b15c1]{position:absolute;bottom:-90px;width:100%;padding:24px;height:200px;transition:all .3s ease-out;display:flex;flex-direction:column;justify-content:center}[dir=ltr] .more[data-v-6f9b15c1]{left:0}[dir=rtl] .more[data-v-6f9b15c1]{right:0}.name[data-v-6f9b15c1]{font-weight:var(--font-bold);transition:all .3s ease-out;margin-bottom:32px;top:30px;position:relative}.name[data-v-6f9b15c1]:after{content:\"\";width:0;transition:all .5s ease-out;display:block;position:relative;margin:0 auto;top:8px;border-top:2px solid #fff}.desc[data-v-6f9b15c1]{top:60px;opacity:0;transition:all .5s cubic-bezier(.25,.46,.45,.94);color:#fff}.desc[data-v-6f9b15c1],.img-thumb[data-v-6f9b15c1]{position:relative}.img-thumb[data-v-6f9b15c1]{border:8px solid}.theme--light .img-thumb[data-v-6f9b15c1]{border-color:#fff}.theme--dark .img-thumb[data-v-6f9b15c1]{border-color:#424242}.img-thumb.v-card[data-v-6f9b15c1]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:0}.img-thumb .figure[data-v-6f9b15c1]{height:100%;width:100%;position:relative;margin:0;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.img-thumb .figure[data-v-6f9b15c1]:after{content:\"\";position:absolute;bottom:-80px;opacity:.8;width:160px;height:160px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}[dir=ltr] .img-thumb .figure[data-v-6f9b15c1]:after{left:-100px}[dir=rtl] .img-thumb .figure[data-v-6f9b15c1]:after{right:-100px}.v-application--is-rtl .img-thumb .figure[data-v-6f9b15c1]:after{transform:rotate(35deg)}.v-application--is-ltr .img-thumb .figure[data-v-6f9b15c1]:after{transform:rotate(-35deg)}.img-thumb .img[data-v-6f9b15c1]{display:block;width:100%;height:100%;background-size:cover;transform:scale(1.2);transition:transform .7s ease-out}.img-thumb[data-v-6f9b15c1]:before{content:\"\";bottom:-12px;width:30%;height:100%;border:4px solid;border-image-source:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));border-image-slice:1;border-top:0;position:absolute}[dir=ltr] .img-thumb[data-v-6f9b15c1]:before{left:-13px}[dir=rtl] .img-thumb[data-v-6f9b15c1]:before{right:-13px}[dir=ltr] .img-thumb[data-v-6f9b15c1]:before{border-right:0}[dir=rtl] .img-thumb[data-v-6f9b15c1]:before{border-left:0}@media(max-width:599px){.img-thumb[data-v-6f9b15c1]:before{display:none}}.img-thumb:hover .img[data-v-6f9b15c1]{transform:scale(1.1) rotate(-5deg)}.img-thumb:hover .detail[data-v-6f9b15c1]{opacity:1;background-position:60% 0}.img-thumb:hover .detail a[data-v-6f9b15c1],.img-thumb:hover .detail h6[data-v-6f9b15c1]{transform:\"translate(0, 0)\"}.detail[data-v-6f9b15c1]{transition:opacity .3s ease-out,background-position 3s ease-out;bottom:0;opacity:0;padding:24px;color:#fff;display:flex;flex-direction:column;justify-content:center}.detail[data-v-6f9b15c1],.detail[data-v-6f9b15c1]:before{position:absolute;width:100%;height:100%}.detail[data-v-6f9b15c1]:before{content:\"\";top:0;left:0;opacity:.8;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));background-size:300%;background-position:0 0}.detail>*[data-v-6f9b15c1]{transition:all .4s ease-out}.detail h6[data-v-6f9b15c1]{position:relative;transform:translateY(10px);margin-bottom:24px;line-height:36px}.detail a[data-v-6f9b15c1]{font-size:18px;text-decoration:underline;color:#fff;position:relative;transform:translateY(30px)}.short[data-v-6f9b15c1]{height:240px}@media(max-width:1279px){.short[data-v-6f9b15c1]{height:210px}}.short .img[data-v-6f9b15c1]{width:100%}.short[data-v-6f9b15c1]:before{width:80px;height:80px}.medium[data-v-6f9b15c1]{height:320px}@media(max-width:599px){.medium[data-v-6f9b15c1]{height:210px}}.medium .img[data-v-6f9b15c1]{width:100%}.long[data-v-6f9b15c1]{height:480px}@media(max-width:599px){.long[data-v-6f9b15c1]{height:210px}}.long .img[data-v-6f9b15c1]{height:100%}.long[data-v-6f9b15c1]:before{width:190px;height:260px}.long .figure[data-v-6f9b15c1]:after{width:300px;height:300px;bottom:-120px}[dir=ltr] .long .figure[data-v-6f9b15c1]:after{left:-200px}[dir=rtl] .long .figure[data-v-6f9b15c1]:after{right:-200px}.post[data-v-6f9b15c1]{height:380px;width:256px;position:relative}@media(max-width:599px){.post[data-v-6f9b15c1]{margin-bottom:12px}}.post figure[data-v-6f9b15c1]{margin:0;width:100%;height:140px;overflow:hidden}.post figure img[data-v-6f9b15c1]{width:100%;min-height:100%}.text[data-v-6f9b15c1]{height:200px;padding:24px}.text h5[data-v-6f9b15c1]{font-weight:var(--font-bold);margin-bottom:8px}.text p[data-v-6f9b15c1]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.theme--light .text p[data-v-6f9b15c1]{color:rgba(0,0,0,.54)}.theme--dark .text p[data-v-6f9b15c1]{color:hsla(0,0%,100%,.7)}.readmore[data-v-6f9b15c1]{margin:0 24px;line-height:16px!important}[dir=ltr] .readmore[data-v-6f9b15c1]{border-left:3px solid var(--v-primary-base)}[dir=rtl] .readmore[data-v-6f9b15c1]{border-right:3px solid var(--v-primary-base)}.readmore.v-btn:not(.v-btn--round).v-size--default[data-v-6f9b15c1]{height:auto;padding:0 8px;ont-weight:var(--font-regular)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_32c007a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_32c007a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_32c007a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_32c007a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_32c007a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_32c007a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-32c007a0]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-32c007a0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-32c007a0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-32c007a0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-32c007a0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-32c007a0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-32c007a0]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-32c007a0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-32c007a0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-32c007a0]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-32c007a0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-32c007a0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-32c007a0],.use-text-paragraph[data-v-32c007a0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-32c007a0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-32c007a0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-32c007a0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-32c007a0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-32c007a0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-32c007a0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-32c007a0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-32c007a0]{display:none}}.root[data-v-32c007a0]{position:relative}@media(max-width:1279px){.root>div[data-v-32c007a0]{padding:0}}.props[data-v-32c007a0]{width:240px;height:240px}.props[data-v-32c007a0]:focus{outline:none}.floating-title[data-v-32c007a0]{text-align:center;padding:0 16px}@media(min-width:960px){.floating-title[data-v-32c007a0]{position:absolute;top:96px;width:240px}[dir=ltr] .floating-title[data-v-32c007a0]{left:64px}[dir=rtl] .floating-title[data-v-32c007a0]{right:64px}}.carousel[data-v-32c007a0]{position:relative}.carousel[data-v-32c007a0]  .slick-list{overflow:visible}@media(max-width:959px){.carousel[data-v-32c007a0]{margin-top:24px}}.item[data-v-32c007a0]{padding:0 8px;direction:ltr}.item[data-v-32c007a0]:focus{outline:none}.link[data-v-32c007a0]{padding:0;text-transform:none;font-weight:var(--font-regular)}.nav[data-v-32c007a0]{position:absolute;top:42%;width:36px;height:36px;padding:0;min-width:0;z-index:3;border:none;box-shadow:none}.theme--light .nav[data-v-32c007a0]{background-color:#fff}.theme--dark .nav[data-v-32c007a0]{background-color:#424242}.v-application--is-rtl .nav[data-v-32c007a0]{transform:scale(2.5) rotate(180deg)}.v-application--is-ltr .nav[data-v-32c007a0]{transform:scale(2.5) rotate(0deg)}@media(max-width:959px){.nav[data-v-32c007a0]{display:none}}.nav i[data-v-32c007a0]{transform:scale(1.6)}.theme--light .nav i[data-v-32c007a0]{color:rgba(0,0,0,.87)}.theme--dark .nav i[data-v-32c007a0]{color:#fff}[dir=ltr] .prev[data-v-32c007a0]{left:6px}[dir=ltr] .next[data-v-32c007a0],[dir=rtl] .prev[data-v-32c007a0]{right:6px}[dir=rtl] .next[data-v-32c007a0]{left:6px}.v-application--is-rtl .item-props-first div[data-v-32c007a0]{width:350px}.v-application--is-ltr .item-props-first div[data-v-32c007a0]{width:400px}@media(max-width:1500px){.v-application--is-rtl .item-props-first div[data-v-32c007a0]{width:500px}.v-application--is-ltr .item-props-first div[data-v-32c007a0]{width:300px}}@media(max-width:1279px){.item-props-first[data-v-32c007a0]{display:none}}.v-application--is-rtl .item-props-last div[data-v-32c007a0]{width:350px}.v-application--is-ltr .item-props-last div[data-v-32c007a0]{width:400px}@media(max-width:1500px){.v-application--is-rtl .item-props-last div[data-v-32c007a0]{width:300px}.v-application--is-ltr .item-props-last div[data-v-32c007a0]{width:500px}}@media(max-width:1279px){.item-props-last[data-v-32c007a0]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_05c5838c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_05c5838c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_05c5838c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_05c5838c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_05c5838c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_05c5838c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-05c5838c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-05c5838c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-05c5838c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-05c5838c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-05c5838c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-05c5838c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-05c5838c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-05c5838c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-05c5838c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-05c5838c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-05c5838c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-05c5838c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-05c5838c],.use-text-paragraph[data-v-05c5838c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-05c5838c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-05c5838c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-05c5838c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-05c5838c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-05c5838c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-05c5838c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-05c5838c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-05c5838c]{display:none}}.fab.v-btn[data-v-05c5838c]{transform:scale(.5);transition:all .5s ease;opacity:0;position:absolute;bottom:0;right:0;border-radius:0;color:#fff;font-weight:var(--font-bold)}.fab.v-btn .icon[data-v-05c5838c]{font-size:40px}.fab.v-btn[data-v-05c5838c]:hover{background:var(--v-primarydark-base)!important}.page-nav[data-v-05c5838c]{z-index:200;position:fixed;bottom:40px;right:40px;width:56px}.page-nav nav[data-v-05c5838c]{height:0;overflow:hidden;transition:height .5s ease;transition-delay:.5s}.page-nav.show .fab[data-v-05c5838c]{opacity:1;transform:scale(1)}.page-nav .section-nav section[data-v-05c5838c]{margin:0 0 76px 22px;padding:0;position:relative}.page-nav .section-nav a[data-v-05c5838c]{margin-bottom:24px;opacity:0;position:relative;width:12px;height:12px;border:1px solid;display:block;transition:all .4s ease;color:transparent}.theme--dark .page-nav .section-nav a[data-v-05c5838c]{box-shadow:0 1px 3px 0 rgba(50,50,50,.2),0 1px 1px 0 rgba(50,50,50,.14),0 2px 1px -1px rgba(50,50,50,.12)}.theme--light .page-nav .section-nav a[data-v-05c5838c]{box-shadow:0 1px 3px 0 hsla(0,0%,50.2%,.2),0 1px 1px 0 hsla(0,0%,50.2%,.14),0 2px 1px -1px hsla(0,0%,50.2%,.12);background-color:#fff}.theme--dark .page-nav .section-nav a[data-v-05c5838c]{background-color:#424242}.theme--light .page-nav .section-nav a[data-v-05c5838c]{border-color:rgba(0,0,0,.54)}.theme--dark .page-nav .section-nav a[data-v-05c5838c]{border-color:hsla(0,0%,100%,.7)}.page-nav .section-nav a.active[data-v-05c5838c]{border:1px solid var(--v-primarylight-base)}.theme--light .page-nav .section-nav a.active[data-v-05c5838c]{background-color:rgba(0,0,0,.87)}.theme--dark .page-nav .section-nav a.active[data-v-05c5838c]{background-color:hsla(0,0%,100%,.7)}.page-nav:hover nav[data-v-05c5838c]{transition-delay:0s;height:100%}.page-nav:hover .section-nav a[data-v-05c5838c]{opacity:1;top:0!important}.tooltip[data-v-05c5838c]{text-transform:capitalize;font-size:14px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("dc0628f2", content, true)

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_393b0db2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_393b0db2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_393b0db2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_393b0db2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_393b0db2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_393b0db2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-393b0db2]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-393b0db2]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-393b0db2]{font-size:28px;line-height:44px}}.use-text-title2[data-v-393b0db2]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-393b0db2]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-393b0db2]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-393b0db2]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-393b0db2]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-393b0db2]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-393b0db2]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-393b0db2]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-393b0db2]{font-size:16px;line-height:24px}}.use-text-caption[data-v-393b0db2],.use-text-paragraph[data-v-393b0db2]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-393b0db2]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-393b0db2]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-393b0db2]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-393b0db2]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-393b0db2]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-393b0db2]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-393b0db2]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-393b0db2]{display:none}}.main-wrap[data-v-393b0db2]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-393b0db2]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-393b0db2]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-393b0db2]{background-color:#fff}.grey-bg[data-v-393b0db2]{padding-top:80px}.space-bottom[data-v-393b0db2]{margin-bottom:120px}@media(max-width:959px){.space-bottom[data-v-393b0db2]{margin-bottom:80px}}.space-bottom-short[data-v-393b0db2]{margin-bottom:80px}.space-top[data-v-393b0db2]{margin-top:120px}@media(max-width:959px){.space-top[data-v-393b0db2]{margin-top:60px}}.space-top-short[data-v-393b0db2]{margin-top:80px}.container-wrap[data-v-393b0db2]{margin-top:-40px}.container-wrap>section[data-v-393b0db2],.deco-wrap[data-v-393b0db2]{position:relative}.deco-wrap.bottom[data-v-393b0db2]  .inner-parallax{top:-1500px}.bottom-deco[data-v-393b0db2]{top:-200px;position:absolute;width:100%;height:calc(100% + 200px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=393b0db2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-wrap\" data-v-393b0db2>","</div>",[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"home\" data-v-393b0db2>","</section>",[_c('banner-nav')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"about\" data-v-393b0db2>","</section>",[_c('about'),_vm._ssrNode(" "),_c('timeline'),_vm._ssrNode(" "),_c('counter')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grey-bg\" data-v-393b0db2>","</div>",[_vm._ssrNode("<div class=\"deco-wrap\" data-v-393b0db2>","</div>",[_c('decoration'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"services\" data-v-393b0db2>","</section>",[_c('services')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"my-work\" class=\"space-top-short space-bottom-short\" data-v-393b0db2>","</section>",[_c('gallery')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"testimonials\" data-v-393b0db2>","</section>",[_c('testimonials')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"deco-wrap bottom\" data-v-393b0db2>","</div>",[_c('decoration'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"contact\" class=\"space-top\" data-v-393b0db2>","</section>",[_c('main-footer')],1)],2)],2),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('page-nav')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=393b0db2&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 13 modules
var Header = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BannerNav/BannerNav.vue?vue&type=template&id=2c8edc5e&scoped=true&
var BannerNavvue_type_template_id_2c8edc5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{class:{ fixed: _vm.isDesktop }},[_c('v-row',[_c('v-col',{staticClass:"pa-0",attrs:{"lg":"2","cols":"12"}},[_c('hidden',{attrs:{"point":"mdDown"}},[_c('side-navigation')],1)],1),_vm._v(" "),_c('v-col',{staticClass:"pa-0",attrs:{"lg":"10","cols":"12"}},[_c('div',{staticClass:"banner"},[_c('div',{staticClass:"cover"},[_c('div',{staticClass:"figure"},[_c('img',{attrs:{"src":_vm.brand.profile.cover,"alt":"cover"}}),_vm._v(" "),_c('div',{staticClass:"overlay"})])]),_vm._v(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('div',{staticClass:"setting-icon"},[_c('settings')],1)]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',{staticClass:"use-text-title2"},[_vm._v(_vm._s(_vm.$t('profileLanding.banner_greeting')))]),_vm._v(" "),_c('h2',{staticClass:"use-text-title"},[_vm._v("\n              "+_vm._s(_vm.$t('profileLanding.banner_me'))+"\n               Luis, FullStack Developer\n            ")]),_vm._v(" "),_c('hidden',{attrs:{"point":"smDown"}},[_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v(_vm._s(_vm.$t('profileLanding.banner_desc')))]),_vm._v(" "),_c('div',{staticClass:"socmed"},[_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-facebook"})]),_vm._v(" "),_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-twitter"})]),_vm._v(" "),_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-linkedin"})])],1)])],1)],1)])],1)],1)],1)}
var BannerNavvue_type_template_id_2c8edc5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/BannerNav/BannerNav.vue?vue&type=template&id=2c8edc5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNavigation/SideNavigation.vue?vue&type=template&id=3b15d8dd&scoped=true&
var SideNavigationvue_type_template_id_3b15d8dd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation"},[_c('v-container',{staticClass:"fixed-width"},[_c('nav',{staticClass:"nav-menu"},[(_vm.loaded)?_c('scrollactive',{attrs:{"tag":"span"}},[_c('a',{staticClass:"logo anchor-link scrollactive-item",attrs:{"href":"#home"}},[_c('img',{attrs:{"src":_vm.logo,"alt":"logo"}})])]):_vm._e(),_vm._v(" "),_c('v-list',{staticClass:"menu",attrs:{"nav":""}},[(_vm.loaded)?_c('scrollactive',{attrs:{"offset":_vm.navOffset,"active-class":"active","tag":"ul"}},[_c('v-list-item-group',_vm._l((_vm.menuList),function(item,index){return _c('v-list-item',{key:index,staticClass:"link anchor-link scrollactive-item",attrs:{"href":item.url},on:{"click":function($event){return _vm.setOffset(item.offset)}}},[_c('v-list-item-title',{staticClass:"text"},[_vm._v(_vm._s(_vm.$t('profileLanding.header_' + item.name)))])],1)}),1)],1):_vm._e()],1)],1)])],1)}
var SideNavigationvue_type_template_id_3b15d8dd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/SideNavigation/SideNavigation.vue?vue&type=template&id=3b15d8dd&scoped=true&

// EXTERNAL MODULE: ./static/images/profile-logo.svg
var profile_logo = __webpack_require__(42);
var profile_logo_default = /*#__PURE__*/__webpack_require__.n(profile_logo);

// EXTERNAL MODULE: ./components/SideNavigation/menu.js
var menu = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNavigation/SideNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var SideNavigationvue_type_script_lang_js_ = ({
  data() {
    return {
      logo: profile_logo_default.a,
      loaded: false,
      navOffset: 20,
      menuList: [createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1], -100), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3], -40), createData(menu["a" /* default */][4], '#' + menu["a" /* default */][4]), createData(menu["a" /* default */][5], '#' + menu["a" /* default */][5]) // createData(navMenu[6], '#' + navMenu[6])
      ]
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/SideNavigation/SideNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var SideNavigation_SideNavigationvue_type_script_lang_js_ = (SideNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js + 1 modules
var VListItemGroup = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(22);

// CONCATENATED MODULE: ./components/SideNavigation/SideNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(245)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideNavigation_SideNavigationvue_type_script_lang_js_,
  SideNavigationvue_type_template_id_3b15d8dd_scoped_true_render,
  SideNavigationvue_type_template_id_3b15d8dd_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3b15d8dd",
  "2d6e34a1"
  
)

/* harmony default export */ var SideNavigation = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VContainer: VContainer["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemGroup: VListItemGroup["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */]})

// CONCATENATED MODULE: ./components/SideNavigation/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&
var Hiddenvue_type_template_id_057339fd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mq-layout',{attrs:{"mq":_vm.breakpoints}},[_vm._t("default")],2)}
var Hiddenvue_type_template_id_057339fd_staticRenderFns = []


// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Hiddenvue_type_script_lang_js_ = ({
  props: {
    point: {
      type: String,
      required: true
    }
  },
  computed: {
    breakpoints() {
      switch (this.point) {
        case 'smUp':
          return ['xsDown'];

        case 'mdUp':
          return ['xsDown', 'smDown'];

        case 'lgUp':
          return ['xsDown', 'smDown', 'mdDown'];

        case 'xsDown':
          return ['smDown', 'mdDown', 'lgDown', 'xl'];

        case 'smDown':
          return ['mdDown', 'lgDown', 'xl'];

        case 'mdDown':
          return ['lgDown', 'xl'];

        case 'lgDown':
          return 'xl';

        default:
          return 'xl';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=script&lang=js&
 /* harmony default export */ var Hidden_Hiddenvue_type_script_lang_js_ = (Hiddenvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Hidden/Hidden.vue





/* normalize component */

var Hidden_component = Object(componentNormalizer["a" /* default */])(
  Hidden_Hiddenvue_type_script_lang_js_,
  Hiddenvue_type_template_id_057339fd_render,
  Hiddenvue_type_template_id_057339fd_staticRenderFns,
  false,
  null,
  null,
  "0f2cd87e"
  
)

/* harmony default export */ var Hidden = (Hidden_component.exports);
// CONCATENATED MODULE: ./components/Hidden/index.js

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(30);

// EXTERNAL MODULE: ./components/Settings/index.js + 12 modules
var Settings = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BannerNav/BannerNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BannerNavvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden,
    SideNavigation: SideNavigation,
    Settings: Settings["a" /* default */]
  },
  data: () => ({
    brand: brand["a" /* default */]
  }),
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/BannerNav/BannerNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var BannerNav_BannerNavvue_type_script_lang_js_ = (BannerNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(215);

// CONCATENATED MODULE: ./components/BannerNav/BannerNav.vue



function BannerNav_injectStyles (context) {
  
  var style0 = __webpack_require__(247)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BannerNav_component = Object(componentNormalizer["a" /* default */])(
  BannerNav_BannerNavvue_type_script_lang_js_,
  BannerNavvue_type_template_id_2c8edc5e_scoped_true_render,
  BannerNavvue_type_template_id_2c8edc5e_scoped_true_staticRenderFns,
  false,
  BannerNav_injectStyles,
  "2c8edc5e",
  "7e17021e"
  
)

/* harmony default export */ var BannerNav = (BannerNav_component.exports);

/* vuetify-loader */





installComponents_default()(BannerNav_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/BannerNav/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=template&id=b1fe4e06&scoped=true&
var Aboutvue_type_template_id_b1fe4e06_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{class:[_vm.isMobile ? 'max-sm' : 'max-lg']},[_c('v-row',[_c('v-col',{staticClass:"pa-0",attrs:{"lg":"2","cols":"12"}}),_vm._v(" "),_c('v-col',{staticClass:"pa-0",attrs:{"lg":"9","cols":"12"}},[_c('div',{staticClass:"about"},[_c('div',{staticClass:"reward"},[_c('div',{staticClass:"item"},[_c('figure',[_c('img',{attrs:{"src":"/images/profile/reward1.svg","alt":"badge"}})]),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("Special Mention")]),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle"},[_vm._v("Awards")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('figure',[_c('img',{attrs:{"src":"/images/profile/reward2.svg","alt":"badge"}})]),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("100k videos")]),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle"},[_vm._v("Subscriber")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('figure',[_c('img',{attrs:{"src":"/images/profile/reward3.svg","alt":"badge"}})]),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("Best Filmography")]),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle"},[_vm._v("Footage")])])]),_vm._v(" "),_c('hidden',{attrs:{"point":"mdUp"}},[_c('div',{staticClass:"socmed"},[_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-facebook"})]),_vm._v(" "),_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-twitter"})]),_vm._v(" "),_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-instagram"})]),_vm._v(" "),_c('v-btn',{staticClass:"margin",attrs:{"icon":"","small":""}},[_c('i',{staticClass:"ion-social-linkedin"})])],1)]),_vm._v(" "),_c('hidden',{attrs:{"point":"mdUp"}},[_c('h5',[_vm._v("\n              "+_vm._s(_vm.$t('profileLanding.banner_desc'))+"\n            ")])]),_vm._v(" "),_c('v-card',{staticClass:"photo"},[_c('figure',[_c('img',{attrs:{"src":_vm.brand.profile.avatar,"alt":"avatar"}})]),_vm._v(" "),_c('span',{staticClass:"frame"})])],1),_vm._v(" "),_c('div',{staticClass:"line"})])],1)],1)],1)}
var Aboutvue_type_template_id_b1fe4e06_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/About/About.vue?vue&type=template&id=b1fe4e06&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden
  },

  data() {
    return {
      brand: brand["a" /* default */]
    };
  },

  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/About/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(213);

// CONCATENATED MODULE: ./components/About/About.vue



function About_injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  About_Aboutvue_type_script_lang_js_,
  Aboutvue_type_template_id_b1fe4e06_scoped_true_render,
  Aboutvue_type_template_id_b1fe4e06_scoped_true_staticRenderFns,
  false,
  About_injectStyles,
  "b1fe4e06",
  "696b4e46"
  
)

/* harmony default export */ var About = (About_component.exports);

/* vuetify-loader */






installComponents_default()(About_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/About/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Timeline/Timeline.vue?vue&type=template&id=3e5bc282&scoped=true&
var Timelinevue_type_template_id_3e5bc282_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loaded)?_c('div',[_vm._ssrNode("<div id=\"timeline\" data-v-3e5bc282>","</div>",[_c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"root"},[_c('v-container',{class:{'fixed-width': _vm.isDesktop}},[_c('v-row',[_c('v-col',{staticClass:"pa-0",attrs:{"lg":"2","cols":"12"}},[_c('hidden',{attrs:{"point":"mdDown"}},[_c('h2',{staticClass:"name-deco"},[_vm._v(_vm._s(_vm.brand.profile.name))])])],1),_vm._v(" "),_c('v-col',{staticClass:"pa-0",attrs:{"lg":"10","cols":"12"}},[_c('v-row',{staticClass:"spacing3"},[_c('v-col',{staticClass:"px-sm-3 px-6 py-0",attrs:{"md":"5","sm":"6","cols":"12"}},[_c('div',{staticClass:"history"},[_c('h5',{staticClass:"title-timeline use-text-subtitle"},[_vm._v(_vm._s(_vm.$t('profileLanding.timeline_experience')))]),_vm._v(" "),_c('u-animate-container',[_c('ul',[_c('li',[_c('u-animate',{attrs:{"offset":100,"name":"fadeInLeftShort","duration":"0.3s"}},[_c('div',[_c('h3',{staticClass:"use-text-subtitle2 pb-2"},[_vm._v("Project Leader")]),_vm._v(" "),_c('p',{staticClass:"mb-2"},[_vm._v("Modul & Ngine projects")]),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v("2017 - Present")])])])],1),_vm._v(" "),_c('li',[_c('u-animate',{attrs:{"offset":100,"name":"fadeInLeftShort","duration":"0.3s"}},[_c('div',[_c('h3',{staticClass:"use-text-subtitle2 pb-2"},[_vm._v("Senior Developer")]),_vm._v(" "),_c('p',{staticClass:"mb-2"},[_vm._v("at Banco Promerica")]),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v("2012 - 2019")])])])],1),_vm._v(" "),_c('li',[_c('u-animate',{attrs:{"offset":100,"name":"fadeInLeftShort","duration":"0.3s"}},[_c('div',[_c('h3',{staticClass:"use-text-subtitle2 pb-2"},[_vm._v("IT Manager")]),_vm._v(" "),_c('p',{staticClass:"mb-2"},[_vm._v("at Maveco")]),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v("2011 - 2012")])])])],1)])])],1)]),_vm._v(" "),_c('v-col',{staticClass:"px-sm-3 px-6 py-0",attrs:{"sm":"6","cols":"12"}},[_c('div',{staticClass:"progress-wrap"},[_c('h5',{staticClass:"title-timeline use-text-subtitle"},[_vm._v(_vm._s(_vm.$t('profileLanding.timeline_skill')))]),_vm._v(" "),_c('ul',[_c('li',[_c('div',{staticClass:"text-icon"},[_c('i',{staticClass:"ion-social-javascript"}),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v("JavaScript (Node, Express, React, Vue, jQuery)")])]),_vm._v(" "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 90 : 0,"color":"none"}})],1),_vm._v(" "),_c('li',[_c('div',{staticClass:"text-icon"},[_c('i',{staticClass:"icon ion-code"}),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v("PHP")])]),_vm._v(" "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 90 : 0,"color":"none"}})],1),_vm._v(" "),_c('li',[_c('div',{staticClass:"text-icon"},[_c('i',{staticClass:"ion-ios-world-outline"}),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v("SQL (Oracle, MySQL, SQLServer, PostgreSQL)")])]),_vm._v(" "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 85 : 0,"color":"none"}})],1),_vm._v(" "),_c('li',[_c('div',{staticClass:"text-icon"},[_c('i',{staticClass:"ion-ios-camera-outline"}),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v(".NET (C#, VisualBasic)")])]),_vm._v(" "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 90 : 0,"color":"none"}})],1),_vm._v(" "),_c('li',[_c('div',{staticClass:"text-icon"},[_c('i',{staticClass:"ion-ios-snowy"}),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v("Java")])]),_vm._v(" "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 70 : 0,"color":"none"}})],1)])])])],1)],1)],1)],1)],1)])]):_vm._e()}
var Timelinevue_type_template_id_3e5bc282_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Timeline/Timeline.vue?vue&type=template&id=3e5bc282&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Timeline/Timeline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Timelinevue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden
  },

  data() {
    return {
      loaded: false,
      brand: brand["a" /* default */],
      play: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    handleScroll: function () {
      const top = this.offsetTop - window.innerHeight + 400;

      if (window.scrollY > top) {
        return this.play = true;
      }

      return false;
    }
  },
  computed: {
    offsetTop: function () {
      const elm = document.getElementById('timeline');
      return elm.getBoundingClientRect().y;
    },

    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp;
      return mdUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Timeline/Timeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var Timeline_Timelinevue_type_script_lang_js_ = (Timelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(74);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(41);

// CONCATENATED MODULE: ./components/Timeline/Timeline.vue



function Timeline_injectStyles (context) {
  
  var style0 = __webpack_require__(251)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Timeline_component = Object(componentNormalizer["a" /* default */])(
  Timeline_Timelinevue_type_script_lang_js_,
  Timelinevue_type_template_id_3e5bc282_scoped_true_render,
  Timelinevue_type_template_id_3e5bc282_scoped_true_staticRenderFns,
  false,
  Timeline_injectStyles,
  "3e5bc282",
  "113b4b61"
  
)

/* harmony default export */ var Timeline = (Timeline_component.exports);

/* vuetify-loader */





installComponents_default()(Timeline_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(Timeline_component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./components/Timeline/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Decoration.vue?vue&type=template&id=b2f93d34&scoped=true&
var Decorationvue_type_template_id_b2f93d34_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap dots-wrap"},[_vm._ssrNode("<div class=\"inner-parallax\" data-v-b2f93d34>","</div>",[_vm._ssrNode("<div class=\"figure\" data-v-b2f93d34>","</div>",[(_vm.loaded)?_vm._ssrNode("<div data-v-b2f93d34>","</div>",[_c('parallax',{attrs:{"speed-factor":0.5,"section-height":2500,"direction":"down"}},[_c('svg',{staticClass:"parallax-vertical parallax-dot",attrs:{"fill":"#cccccc","width":"845px","height":"1099px"}},[_c('use',{attrs:{"xlink:href":"/images/decoration/dot-deco.svg#dot"}})])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.3,"section-height":2000,"direction":"down"}},[_c('svg',{staticClass:"parallax-vertical parallax-triangle",attrs:{"fill":"#cccccc","width":"902px","height":"1042px"}},[_c('use',{attrs:{"xlink:href":"/images/decoration/triangle-deco.svg#triangle"}})])])],2):_vm._e()])])])}
var Decorationvue_type_template_id_b2f93d34_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Decoration.vue?vue&type=template&id=b2f93d34&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(200);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Decoration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Decorationvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Decoration.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Decorationvue_type_script_lang_js_ = (Decorationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Decoration.vue



function Decoration_injectStyles (context) {
  
  var style0 = __webpack_require__(253)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Decoration_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Decorationvue_type_script_lang_js_,
  Decorationvue_type_template_id_b2f93d34_scoped_true_render,
  Decorationvue_type_template_id_b2f93d34_scoped_true_staticRenderFns,
  false,
  Decoration_injectStyles,
  "b2f93d34",
  "5ae54e3a"
  
)

/* harmony default export */ var Decoration = (Decoration_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Services/Services.vue?vue&type=template&id=d8820b12&scoped=true&
var Servicesvue_type_template_id_d8820b12_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"floating-title\" data-v-d8820b12>","</div>",[_c('title-main',[_c('strong',[_vm._v(_vm._s(_vm.$t('profileLanding.services_title')))])]),_vm._ssrNode(" <p class=\"use-text-paragraph\" data-v-d8820b12>"+_vm._ssrEscape(_vm._s(_vm.$t('profileLanding.services_desc')))+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"slider-wrap\" data-v-d8820b12>","</div>",[(_vm.loaded)?_vm._ssrNode("<div class=\"carousel\" data-v-d8820b12>","</div>",[_c('v-btn',{staticClass:"nav prev",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.prev()}}},[_c('i',{staticClass:"ion-ios-arrow-back"})]),_vm._ssrNode(" "),_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},[(_vm.isDesktop)?_c('div',{staticClass:"item"},[_c('div',{staticClass:"item item-props-first"},[_c('div')])]):_vm._e(),_vm._v(" "),_vm._l((_vm.services),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('icon-text-card',{attrs:{"icon":item.icon,"text":item.name,"desc":item.desc}})],1)}),_vm._v(" "),(_vm.isDesktop)?_c('div',{staticClass:"item"},[_c('div',{staticClass:"item item-props-last"},[_c('div')])]):_vm._e()],2),_vm._ssrNode(" "),_c('v-btn',{staticClass:"nav next",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.next()}}},[_c('i',{staticClass:"ion-ios-arrow-forward"})])],2):_vm._e()])],2)}
var Servicesvue_type_template_id_d8820b12_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Services/Services.vue?vue&type=template&id=d8820b12&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=template&id=005aa832&scoped=true&
var Titlevue_type_template_id_005aa832_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title",class:{ dark: _vm.dark }},[_vm._ssrNode("<h4 data-v-005aa832>","</h4>",[_vm._t("default")],2)])}
var Titlevue_type_template_id_005aa832_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=template&id=005aa832&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Title/Title.vue



function Title_injectStyles (context) {
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Title_component = Object(componentNormalizer["a" /* default */])(
  Title_Titlevue_type_script_lang_js_,
  Titlevue_type_template_id_005aa832_scoped_true_render,
  Titlevue_type_template_id_005aa832_scoped_true_staticRenderFns,
  false,
  Title_injectStyles,
  "005aa832",
  "1e1a3733"
  
)

/* harmony default export */ var Title = (Title_component.exports);
// CONCATENATED MODULE: ./components/Title/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/IconText.vue?vue&type=template&id=0c54da66&scoped=true&
var IconTextvue_type_template_id_0c54da66_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"icon-text"},[_c('div',{staticClass:"icon"},[_c('span',{class:_vm.icon})]),_vm._v(" "),_c('div',{staticClass:"more"},[_c('h6',{staticClass:"name use-text-paragraph"},[_vm._v("\n      "+_vm._s(_vm.text)+"\n    ")]),_vm._v(" "),_c('p',{staticClass:"desc use-text-paragraph"},[_vm._v("\n      "+_vm._s(_vm.desc)+"\n    ")])])])}
var IconTextvue_type_template_id_0c54da66_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/IconText.vue?vue&type=template&id=0c54da66&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/IconText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var IconTextvue_type_script_lang_js_ = ({
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/IconText.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_IconTextvue_type_script_lang_js_ = (IconTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/IconText.vue



function IconText_injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var IconText_component = Object(componentNormalizer["a" /* default */])(
  Cards_IconTextvue_type_script_lang_js_,
  IconTextvue_type_template_id_0c54da66_scoped_true_render,
  IconTextvue_type_template_id_0c54da66_scoped_true_staticRenderFns,
  false,
  IconText_injectStyles,
  "0c54da66",
  "4dc31c90"
  
)

/* harmony default export */ var IconText = (IconText_component.exports);

/* vuetify-loader */


installComponents_default()(IconText_component, {VCard: VCard["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services/Services.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Servicesvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title,
    IconTextCard: IconText,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 217, 7))
  },

  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        arrows: false,
        variableWidth: true,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      },
      services: [{
        icon: 'ion-ios-color-wand',
        name: 'Frontend developer',
        desc: 'Using VueJS, React.'
      }, {
        icon: 'ion-social-dribbble-outline',
        name: 'Backend developer',
        desc: 'Pellentesque ac  vel blandit nulla.'
      }, {
        icon: 'ion-ios-world-outline',
        name: 'Databases',
        desc: 'Wide experience'
      } // {
      //   icon: 'ion-ios-camera-outline',
      //   name: 'Photo Editing',
      //   desc: 'Pellentesque ac  vel blandit nulla.'
      // },
      // {
      //   icon: 'ion-ios-snowy',
      //   name: 'Graphic Illustrations',
      //   desc: 'Pellentesque ac  vel blandit nulla.'
      // }
      ]
    };
  },

  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.services.length - 3);
        this.$refs.slick.goTo(lastSlide);
      }
    }, 200);
  },

  methods: {
    next: function () {
      this.$refs.slick.next();
    },
    prev: function () {
      this.$refs.slick.prev();
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp;
      return mdUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Services/Services.vue?vue&type=script&lang=js&
 /* harmony default export */ var Services_Servicesvue_type_script_lang_js_ = (Servicesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Services/Services.vue



function Services_injectStyles (context) {
  
  var style0 = __webpack_require__(259)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Services_component = Object(componentNormalizer["a" /* default */])(
  Services_Servicesvue_type_script_lang_js_,
  Servicesvue_type_template_id_d8820b12_scoped_true_render,
  Servicesvue_type_template_id_d8820b12_scoped_true_staticRenderFns,
  false,
  Services_injectStyles,
  "d8820b12",
  "2d374c01"
  
)

/* harmony default export */ var Services = (Services_component.exports);

/* vuetify-loader */


installComponents_default()(Services_component, {VBtn: VBtn["a" /* default */]})

// CONCATENATED MODULE: ./components/Services/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Gallery/Gallery.vue?vue&type=template&id=4145b6fa&scoped=true&
var Galleryvue_type_template_id_4145b6fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',[_c('title-main',[_vm._v("\n      "+_vm._s(_vm.$t('profileLanding.gallery_title'))+"\n      "),_c('strong',[_vm._v(_vm._s(_vm.$t('profileLanding.gallery_titleBold')))])]),_vm._v(" "),_c('div',{staticClass:"filter"},[_c('v-btn',{class:{ selected: _vm.filter === 'all' },on:{"click":function($event){return _vm.filterChildren('all')}}},[_vm._v("Todo")]),_vm._v(" "),_c('v-btn',{class:{ selected: _vm.filter === 'cat1' },on:{"click":function($event){return _vm.filterChildren('cat1')}}},[_vm._v("Category 1")]),_vm._v(" "),_c('v-btn',{class:{ selected: _vm.filter === 'cat2' },on:{"click":function($event){return _vm.filterChildren('cat2')}}},[_vm._v("Category 2")]),_vm._v(" "),_c('v-btn',{class:{ selected: _vm.filter === 'cat3' },on:{"click":function($event){return _vm.filterChildren('cat3')}}},[_vm._v("Category 3")])],1),_vm._v(" "),_c('hidden',{attrs:{"point":"xsDown"}},[_c('div',{staticClass:"massonry"},_vm._l((_vm.data),function(item,index){return _c('div',{key:index,staticClass:"item",class:{ loaded: _vm.isLoaded },style:({ 'transition-duration': index / 4 + 's' })},[_c('image-thumb-card',{attrs:{"img":item.img,"title":item.title,"link":item.link,"size":item.size}})],1)}),0),_vm._v(" "),(_vm.data.length < 1)?_c('p',{staticClass:"overline text-center"},[_vm._v(_vm._s(_vm.$t('profileLanding.gallery_nodata')))]):_vm._e()]),_vm._v(" "),(_vm.loaded)?_c('hidden',{attrs:{"point":"smUp"}},[_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},_vm._l((_vm.data),function(item,index){return _c('div',{key:index,staticClass:"item-carousel"},[_c('image-thumb-card',{attrs:{"img":item.img,"title":item.title,"link":item.link,"size":item.size}})],1)}),0)],1):_vm._e()],1)],1)}
var Galleryvue_type_template_id_4145b6fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Gallery/Gallery.vue?vue&type=template&id=4145b6fa&scoped=true&

// EXTERNAL MODULE: ./static/images/imgAPI.js
var imgAPI = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ImageThumb.vue?vue&type=template&id=73b9edb7&scoped=true&
var ImageThumbvue_type_template_id_73b9edb7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"img-thumb",class:_vm.size},[_c('div',{staticClass:"figure"},[_c('div',{staticClass:"img",style:('background-image: url(' + _vm.img + ')')})]),_vm._v(" "),_c('div',{staticClass:"detail"},[_c('h6',{staticClass:"use-text-subtitle"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.link))])])])}
var ImageThumbvue_type_template_id_73b9edb7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/ImageThumb.vue?vue&type=template&id=73b9edb7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ImageThumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImageThumbvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/ImageThumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_ImageThumbvue_type_script_lang_js_ = (ImageThumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/ImageThumb.vue



function ImageThumb_injectStyles (context) {
  
  var style0 = __webpack_require__(261)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ImageThumb_component = Object(componentNormalizer["a" /* default */])(
  Cards_ImageThumbvue_type_script_lang_js_,
  ImageThumbvue_type_template_id_73b9edb7_scoped_true_render,
  ImageThumbvue_type_template_id_73b9edb7_scoped_true_staticRenderFns,
  false,
  ImageThumb_injectStyles,
  "73b9edb7",
  "3e049d85"
  
)

/* harmony default export */ var ImageThumb = (ImageThumb_component.exports);

/* vuetify-loader */


installComponents_default()(ImageThumb_component, {VCard: VCard["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Gallery/Gallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const portfolio = [{
  img: imgAPI["a" /* default */].profile[3],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat1'
}, {
  img: imgAPI["a" /* default */].profile[4],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'long',
  category: 'cat2'
}, {
  img: imgAPI["a" /* default */].profile[5],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat2'
}, {
  img: imgAPI["a" /* default */].profile[4],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat1'
}, {
  img: imgAPI["a" /* default */].profile[3],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'long',
  category: 'cat2'
}, {
  img: imgAPI["a" /* default */].profile[5],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat3'
}, {
  img: imgAPI["a" /* default */].profile[6],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'long',
  category: 'cat1'
}, {
  img: imgAPI["a" /* default */].profile[8],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat2'
}, {
  img: imgAPI["a" /* default */].profile[7],
  title: 'Aenean facilisis vitae purus',
  link: 'linkofthisitem.com',
  size: 'short',
  category: 'cat3'
}];
/* harmony default export */ var Galleryvue_type_script_lang_js_ = ({
  components: {
    ImageThumbCard: ImageThumb,
    'title-main': Title,
    Hidden: Hidden,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 217, 7))
  },

  data() {
    return {
      data: [],
      isLoaded: true,
      loaded: false,
      filter: 'all',
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        arrows: false
      }
    };
  },

  mounted() {
    this.data = portfolio.sort(() => Math.random() - 0.5);
    this.loaded = true;
  },

  methods: {
    filterChildren(name) {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        this.data = filteredData;
        this.filter = name;
      } else {
        this.data = portfolio;
        this.filter = 'all';
      }

      this.isLoaded = false;
      setTimeout(() => {
        this.isLoaded = true;
      }, 700); // re-init slick carousel for mobile

      if (this.isMobile) {
        this.$nextTick(() => {
          this.$refs.slick.reSlick();
        });
      }
    }

  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Gallery/Gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var Gallery_Galleryvue_type_script_lang_js_ = (Galleryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Gallery/Gallery.vue



function Gallery_injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Gallery_component = Object(componentNormalizer["a" /* default */])(
  Gallery_Galleryvue_type_script_lang_js_,
  Galleryvue_type_template_id_4145b6fa_scoped_true_render,
  Galleryvue_type_template_id_4145b6fa_scoped_true_staticRenderFns,
  false,
  Gallery_injectStyles,
  "4145b6fa",
  "4b0159e7"
  
)

/* harmony default export */ var Gallery = (Gallery_component.exports);

/* vuetify-loader */



installComponents_default()(Gallery_component, {VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/Gallery/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=template&id=dd23b046&scoped=true&
var Countervue_type_template_id_dd23b046_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"counter-wrap"},[_vm._ssrNode("<div id=\"watched_counter\" data-v-dd23b046></div> "),_c('v-container',{staticClass:"max-md"},[_c('v-row',{staticClass:"root spacing6",attrs:{"align":"center","justify":"center"}},[_c('v-col',{staticClass:"pa-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[(_vm.loaded)?_c('div',{staticClass:"text"},[_c('i',{staticClass:"ion-ios-briefcase-outline"}),_vm._v(" "),_c('h4',{staticClass:"use-text-title2"},[_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 25,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 25,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}),_vm._v("+\n            ")])]):_vm._e(),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v(_vm._s(_vm.$t('profileLanding.counter_completed')))])])]),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[(_vm.loaded)?_c('div',{staticClass:"text"},[_c('i',{staticClass:"ion-ios-time-outline"}),_vm._v(" "),_c('h4',{staticClass:"use-text-title2"},[_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 15,
                  options: { duration: 2 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 15,\n                  options: { duration: 2 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}),_vm._v("+ years\n            ")])]):_vm._e(),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v(_vm._s(_vm.$t('profileLanding.counter_hour')))])])]),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[(_vm.loaded)?_c('div',{staticClass:"text"},[_c('i',{staticClass:"ion-ios-heart-outline"}),_vm._v(" "),_c('h4',{staticClass:"use-text-title2"},[_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 20,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 20,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]}),_vm._v("+\n            ")])]):_vm._e(),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v(_vm._s(_vm.$t('profileLanding.counter_happy')))])])])],1)],1)],2)}
var Countervue_type_template_id_dd23b046_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=template&id=dd23b046&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Countervue_type_script_lang_js_ = ({
  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Counter_Countervue_type_script_lang_js_ = (Countervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Counter/Counter.vue



function Counter_injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Counter_component = Object(componentNormalizer["a" /* default */])(
  Counter_Countervue_type_script_lang_js_,
  Countervue_type_template_id_dd23b046_scoped_true_render,
  Countervue_type_template_id_dd23b046_scoped_true_staticRenderFns,
  false,
  Counter_injectStyles,
  "dd23b046",
  "760df98a"
  
)

/* harmony default export */ var Counter = (Counter_component.exports);

/* vuetify-loader */




installComponents_default()(Counter_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Counter/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=template&id=235ae948&scoped=true&
var Testimonialsvue_type_template_id_235ae948_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',[_c('title-main',{attrs:{"dark":""}},[_vm._v("\n      "+_vm._s(_vm.$t('profileLanding.testi_title'))+"\n      "),_c('strong',[_vm._v("\n        "+_vm._s(_vm.$t('profileLanding.testi_titleBold'))+"\n      ")])]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"7","cols":"12"}},[_c('div',{staticClass:"world-map"},[_c('hidden',{attrs:{"point":"xsDown"}},[_c('div',{staticClass:"avatar-wrap"},_vm._l((_vm.testiData),function(item,index){return _c('div',{key:index,staticClass:"avatar-item",style:({ left: item.x + 'px', top: item.y + 'px'})},[_c('v-menu',{attrs:{"nudge-left":130,"open-on-hover":"","origin":"center center","transition":"scale-transition","top":"","offset-y":"","content-class":"paper"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-btn',_vm._g({attrs:{"icon":""}},on),[_c('avatar-buble',{attrs:{"avatar":item.avatar,"name":item.name}})],1)]}}],null,true)},[_vm._v(" "),_c('v-card',{staticClass:"paper-block"},[_c('p',{staticClass:"pb-2"},[_vm._v("\n                      "+_vm._s(item.text)+"\n                    ")]),_vm._v(" "),_c('h6',[_vm._v("\n                      "+_vm._s(item.name)+"\n                    ")]),_vm._v(" "),_c('p',{staticClass:"title-main"},[_vm._v("\n                      "+_vm._s(item.title)+"\n                    ")])])],1)],1)}),0)]),_vm._v(" "),(_vm.loaded)?_c('hidden',{attrs:{"point":"smUp"}},[_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},_vm._l((_vm.testiData),function(item,index){return _c('div',{key:index,staticClass:"item-carousel"},[_c('v-card',{staticClass:"card"},[_c('p',{staticClass:"body-1"},[_vm._v("\n                    "+_vm._s(item.text)+"\n                  ")]),_vm._v(" "),_c('div',{staticClass:"name"},[(item.avatar)?_c('v-avatar',{staticClass:"avatar"},[_c('img',{attrs:{"src":item.avatar,"alt":item.name}})]):_c('v-avatar',{staticClass:"avatar",attrs:{"color":"grey"}},[_c('strong',{staticClass:"white--text headline"},[_vm._v("\n                        "+_vm._s(_vm.firsthChar(item.name))+"\n                      ")])]),_vm._v(" "),_c('span',{staticClass:"caption"},[_vm._v("\n                      "+_vm._s(item.name)+"\n                    ")])],1)])],1)}),0)],1):_vm._e()],1)]),_vm._v(" "),_c('v-col',{attrs:{"md":"5","cols":"12"}},[_c('div',{staticClass:"text"},[_c('u-animate-container',[_c('u-animate',{attrs:{"offset":-200,"name":"fadeInUpShort","delay":"0.2s","duration":"0.3s"}},[_c('h3',{staticClass:"title-serif use-text-title2"},[_vm._v("\n                "+_vm._s(_vm.$t('profileLanding.testi_title2'))+"\n              ")])]),_vm._v(" "),_c('u-animate',{attrs:{"offset":-200,"name":"fadeInUpShort","delay":"0.3s","duration":"0.3s"}},[_c('div',[_c('p',{staticClass:"use-text-paragraph"},[_vm._v("\n                  "+_vm._s(_vm.$t('profileLanding.testi_desc'))+"\n                ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":"secondary","href":"#contact","large":""}},[_vm._v("\n                  "+_vm._s(_vm.$t('profileLanding.testi_button'))+"\n                ")])],1)])],1)],1)])],1)],1)],1)}
var Testimonialsvue_type_template_id_235ae948_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=template&id=235ae948&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/AvatarBuble.vue?vue&type=template&id=7b9aa1eb&scoped=true&
var AvatarBublevue_type_template_id_7b9aa1eb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person"},[(_vm.avatar)?_c('v-avatar',{staticClass:"avatar"},[_c('img',{attrs:{"src":_vm.avatar,"alt":_vm.name}})]):_c('span',{staticClass:"dot"})],1)}
var AvatarBublevue_type_template_id_7b9aa1eb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials/AvatarBuble.vue?vue&type=template&id=7b9aa1eb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/AvatarBuble.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AvatarBublevue_type_script_lang_js_ = ({
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Testimonials/AvatarBuble.vue?vue&type=script&lang=js&
 /* harmony default export */ var Testimonials_AvatarBublevue_type_script_lang_js_ = (AvatarBublevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(67);

// CONCATENATED MODULE: ./components/Testimonials/AvatarBuble.vue



function AvatarBuble_injectStyles (context) {
  
  var style0 = __webpack_require__(267)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AvatarBuble_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_AvatarBublevue_type_script_lang_js_,
  AvatarBublevue_type_template_id_7b9aa1eb_scoped_true_render,
  AvatarBublevue_type_template_id_7b9aa1eb_scoped_true_staticRenderFns,
  false,
  AvatarBuble_injectStyles,
  "7b9aa1eb",
  "d0faf45c"
  
)

/* harmony default export */ var AvatarBuble = (AvatarBuble_component.exports);

/* vuetify-loader */


installComponents_default()(AvatarBuble_component, {VAvatar: VAvatar["a" /* default */]})

// CONCATENATED MODULE: ./components/Testimonials/testimonialsData.js

const testimonialsData = [{
  avatar: imgAPI["a" /* default */].avatar[0],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 100,
  y: 150
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 120,
  y: 100
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 400,
  y: 40
}, {
  avatar: imgAPI["a" /* default */].avatar[3],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 500,
  y: 300
}, {
  avatar: imgAPI["a" /* default */].avatar[4],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 270,
  y: 220
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 100,
  y: 200
}, {
  avatar: imgAPI["a" /* default */].avatar[6],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 100,
  y: 40
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 330,
  y: 100
}, {
  avatar: imgAPI["a" /* default */].avatar[1],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 30,
  y: 50
}, {
  avatar: imgAPI["a" /* default */].avatar[9],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 400,
  y: 150
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 480,
  y: 100
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 250,
  y: 100
}, {
  avatar: imgAPI["a" /* default */].avatar[2],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 150,
  y: 300
}, {
  avatar: imgAPI["a" /* default */].avatar[7],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 300,
  y: 140
}, {
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 480,
  y: 280
}, {
  avatar: imgAPI["a" /* default */].avatar[5],
  name: 'John Doe',
  title: 'Company Dot Com',
  text: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula.',
  x: 300,
  y: 300
}];
/* harmony default export */ var Testimonials_testimonialsData = (testimonialsData);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title,
    AvatarBuble: AvatarBuble,
    Hidden: Hidden,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 217, 7))
  },

  data() {
    return {
      loaded: false,
      testiData: Testimonials_testimonialsData,
      popupData: {},
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        arrows: false
      }
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    firsthChar() {
      return txt => txt.charAt(0);
    }

  }
});
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var Testimonials_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 4 modules
var VMenu = __webpack_require__(218);

// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue



function Testimonials_injectStyles (context) {
  
  var style0 = __webpack_require__(269)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_Testimonialsvue_type_script_lang_js_,
  Testimonialsvue_type_template_id_235ae948_scoped_true_render,
  Testimonialsvue_type_template_id_235ae948_scoped_true_staticRenderFns,
  false,
  Testimonials_injectStyles,
  "235ae948",
  "4caee57e"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);

/* vuetify-loader */








installComponents_default()(Testimonials_component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VMenu: VMenu["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Testimonials/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Blog.vue?vue&type=template&id=32c007a0&scoped=true&
var Blogvue_type_template_id_32c007a0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"floating-title\" data-v-32c007a0>","</div>",[_c('title-main',[_vm._v("\n      "+_vm._s(_vm.$t('profileLanding.blog_title'))+"\n      "),_c('strong',[_vm._v("\n        "+_vm._s(_vm.$t('profileLanding.blog_titlebold'))+"\n      ")])]),_vm._ssrNode(" <p class=\"mb-0 use-text-paragraph\" data-v-32c007a0>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('profileLanding.blog_desc'))+"\n    ")+"</p> "),_c('v-btn',{staticClass:"link",attrs:{"text":"","color":"primary","href":"#"}},[_vm._v("luxi-theme.blog.com")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"slider-wrap\" data-v-32c007a0>","</div>",[(_vm.loaded)?_vm._ssrNode("<div class=\"carousel\" data-v-32c007a0>","</div>",[_c('v-btn',{staticClass:"nav prev",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.prev()}}},[_c('i',{staticClass:"ion-ios-arrow-back"})]),_vm._ssrNode(" "),_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},[(_vm.isDesktop)?_c('div',{staticClass:"item item-props-first"},[_c('div')]):_vm._e(),_vm._v(" "),_vm._l((_vm.blogData),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('blog-post-card',{attrs:{"img":item.img,"title":item.title,"desc":item.desc}})],1)}),_vm._v(" "),(_vm.isDesktop)?_c('div',{staticClass:"item item-props-last"},[_c('div')]):_vm._e()],2),_vm._ssrNode(" "),_c('v-btn',{staticClass:"nav next",attrs:{"icon":"","fab":""},on:{"click":function($event){return _vm.next()}}},[_c('i',{staticClass:"ion-ios-arrow-forward"})])],2):_vm._e()])],2)}
var Blogvue_type_template_id_32c007a0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Blog.vue?vue&type=template&id=32c007a0&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/BlogPost.vue?vue&type=template&id=6f9b15c1&scoped=true&
var BlogPostvue_type_template_id_6f9b15c1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"post"},[_c('figure',[_c('img',{attrs:{"src":_vm.img,"alt":"thumb"}})]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h5',{staticClass:"use-text-subtitle2"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("\n      "+_vm._s(_vm.desc)+"\n    ")])]),_vm._v(" "),_c('v-btn',{staticClass:"readmore",attrs:{"href":"#","text":"","color":"primary"}},[_vm._v("\n    "+_vm._s(_vm.$t('profileLanding.read_more'))+"\n  ")])],1)}
var BlogPostvue_type_template_id_6f9b15c1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/BlogPost.vue?vue&type=template&id=6f9b15c1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/BlogPost.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogPostvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/BlogPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_BlogPostvue_type_script_lang_js_ = (BlogPostvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/BlogPost.vue



function BlogPost_injectStyles (context) {
  
  var style0 = __webpack_require__(271)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BlogPost_component = Object(componentNormalizer["a" /* default */])(
  Cards_BlogPostvue_type_script_lang_js_,
  BlogPostvue_type_template_id_6f9b15c1_scoped_true_render,
  BlogPostvue_type_template_id_6f9b15c1_scoped_true_staticRenderFns,
  false,
  BlogPost_injectStyles,
  "6f9b15c1",
  "a1f78ea8"
  
)

/* harmony default export */ var BlogPost = (BlogPost_component.exports);

/* vuetify-loader */



installComponents_default()(BlogPost_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const blogData = [{
  img: imgAPI["a" /* default */].photo[0],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI["a" /* default */].photo[1],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI["a" /* default */].photo[2],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI["a" /* default */].photo[3],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI["a" /* default */].photo[4],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: imgAPI["a" /* default */].photo[5],
  title: 'Vivamus sit amet interdum elit',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}];
/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title,
    BlogPostCard: BlogPost,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 217, 7))
  },

  data() {
    return {
      loaded: false,
      blogData: blogData,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        pauseOnHover: true,
        variableWidth: true,
        responsive: [{
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.blogData.length - 2);
        this.$refs.slick.goTo(lastSlide);
      }
    }, 200);
  },

  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp;
      return mdUp.indexOf(this.$mq) > -1;
    }

  },
  methods: {
    next: function () {
      this.$refs.slick.next();
    },
    prev: function () {
      this.$refs.slick.prev();
    }
  }
});
// CONCATENATED MODULE: ./components/Blog/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blog_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Blog/Blog.vue



function Blog_injectStyles (context) {
  
  var style0 = __webpack_require__(273)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Blog_component = Object(componentNormalizer["a" /* default */])(
  Blog_Blogvue_type_script_lang_js_,
  Blogvue_type_template_id_32c007a0_scoped_true_render,
  Blogvue_type_template_id_32c007a0_scoped_true_staticRenderFns,
  false,
  Blog_injectStyles,
  "32c007a0",
  "4dff9dfe"
  
)

/* harmony default export */ var Blog = (Blog_component.exports);

/* vuetify-loader */


installComponents_default()(Blog_component, {VBtn: VBtn["a" /* default */]})

// CONCATENATED MODULE: ./components/Blog/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 16 modules
var Footer = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=template&id=05c5838c&scoped=true&
var PageNavvue_type_template_id_05c5838c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"page-nav",class:{ show: _vm.show }},[_vm._ssrNode("<nav class=\"section-nav\" data-v-05c5838c>","</nav>",[_c('scrollactive',{attrs:{"offset":_vm.navOffset,"active-class":"active","tag":"section"}},_vm._l((_vm.menuList),function(item,index){return _c('a',{key:index,staticClass:"anchor-link scrollactive-item",style:({ top: 50 * (_vm.menu.length - item.id) + 'px' }),attrs:{"href":item.url},on:{"click":function($event){return _vm.setOffset(item.offset)}}},[_c('v-tooltip',{staticClass:"tooltip-wrap",attrs:{"nudge-top":18,"color":"black","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('span',_vm._g({},on),[_vm._v(_vm._s(_vm.$t('profileLanding.header_'+item.name)))])]}}],null,true)},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('profileLanding.header_'+item.name)))])])],1)}),0)],1),_vm._ssrNode(" "),_c('v-tooltip',{attrs:{"nudge-top":25,"color":"black","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('scrollactive',{attrs:{"tag":"div"}},[_c('v-btn',_vm._g({staticClass:"fab anchor-link scrollactive-item",attrs:{"fab":"","color":"black","href":"#home"}},on),[_c('v-icon',{staticClass:"icon",attrs:{"dark":""}},[_vm._v("mdi-arrow-up")])],1)],1)]}}])},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('profileLanding.to_top')))])])],2)}
var PageNavvue_type_template_id_05c5838c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=template&id=05c5838c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let PageNavvue_type_script_lang_js_counter = 0;

function PageNavvue_type_script_lang_js_createData(name, url, offset) {
  PageNavvue_type_script_lang_js_counter += 1;
  return {
    id: PageNavvue_type_script_lang_js_counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var PageNavvue_type_script_lang_js_ = ({
  data: () => ({
    menu: menu["a" /* default */],
    navOffset: 20,
    show: false,
    menuList: [PageNavvue_type_script_lang_js_createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), PageNavvue_type_script_lang_js_createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), PageNavvue_type_script_lang_js_createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), PageNavvue_type_script_lang_js_createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3]), PageNavvue_type_script_lang_js_createData(menu["a" /* default */][4], '#' + menu["a" /* default */][4]), PageNavvue_type_script_lang_js_createData(menu["a" /* default */][5], '#' + menu["a" /* default */][5]) // createData(navMenu[6], '#' + navMenu[6])
    ]
  }),
  methods: {
    handleScroll: function () {
      if (window.scrollY > 500) {
        return this.show = true;
      }

      return this.show = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageNav_PageNavvue_type_script_lang_js_ = (PageNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js + 1 modules
var menuable = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins







 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], detachable["a" /* default */], menuable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String,
    zIndex: {
      default: null
    }
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return `${this.calcYOverflow(top + this.pageYOffset)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["d" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["d" /* convertToUnit */])(this.minWidth),
        opacity: this.isActive ? 0.9 : 0,
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["k" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      listeners.focus = e => {
        this.getActivator(e);
        this.runDelay('open');
      };

      listeners.blur = e => {
        this.getActivator(e);
        this.runDelay('close');
      };

      listeners.keydown = e => {
        if (e.keyCode === helpers["n" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue



function PageNav_injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PageNav_component = Object(componentNormalizer["a" /* default */])(
  PageNav_PageNavvue_type_script_lang_js_,
  PageNavvue_type_template_id_05c5838c_scoped_true_render,
  PageNavvue_type_template_id_05c5838c_scoped_true_staticRenderFns,
  false,
  PageNav_injectStyles,
  "05c5838c",
  "e933712a"
  
)

/* harmony default export */ var PageNav = (PageNav_component.exports);

/* vuetify-loader */




installComponents_default()(PageNav_component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VTooltip: VTooltip_VTooltip})


/* vuetify-loader */


installDirectives_default()(PageNav_component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(242);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    About: About,
    BannerNav: BannerNav,
    Timeline: Timeline,
    Counter: Counter,
    Decoration: Decoration,
    Services: Services,
    Gallery: Gallery,
    Testimonials: Testimonials,
    Blog: Blog,
    'main-footer': Footer["a" /* default */],
    PageNav: PageNav,
    Hidden: Hidden,
    Notification: Notification["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].profile.name + ' -  Luxi Theme Profile'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(279)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "393b0db2",
  "deb09d68"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map