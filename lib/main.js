"use strict";

require("@vueform/multiselect/themes/default.css");

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vCalendar = _interopRequireDefault(require("v-calendar"));

require("@/assets/scss/base.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _vue.createApp)(_App.default);
app.use(_vCalendar.default, {});
app.use(_router.default);
app.mount('#app');