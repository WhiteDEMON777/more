"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueRouter = require("vue-router");

var _index = _interopRequireDefault(require("../views/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "home",
    component: _index.default
  } // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
  ]
});
var _default = router;
exports.default = _default;