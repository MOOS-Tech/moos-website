import { _ as __nuxt_component_0 } from "./nuxt-link-99c863e4.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, resolveComponent } from "vue";
import { F as FormButton } from "./FormButton-8c894c5f.js";
import { l as loading } from "./store-c28a26c2.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
const _imports_0$1 = "data:image/png;base64,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";
const TopNavBar_vue_vue_type_style_index_0_scoped_77a429b9_lang = "";
const _sfc_main$2 = {
  name: "TopNavBar",
  components: {
    FormButton
  },
  computed: {
    loading() {
      return loading.value;
    }
  },
  data() {
    return {
      isNavOpen: false,
      // Add a data property to track the navigation state
      isDropdownOpen: false
      // added to track the dropdown state
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    // Toggle the dropdown state when the button is clicked
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  if ($options.loading) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-77a429b9><img${ssrRenderAttr("src", _imports_0$1)} alt="Loading" data-v-77a429b9></div>`);
  } else {
    _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex items-center bg-green-200 p-2 flex-wrap flex-no-wrap sticky top-0 z-10 w-full" }, _attrs))} data-v-77a429b9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/",
      class: "mr-6 ml-3 inline-flex items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Image Alt Text" class="h-12 w-15 mr-2" data-v-77a429b9${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: _imports_0$1,
              alt: "Image Alt Text",
              class: "h-12 w-15 mr-2"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<button class="text-white inline-flex p-3 bg-opacity-25 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation" data-v-77a429b9><i class="fa-solid fa-bars text-white" data-v-77a429b9></i></button><div id="navigation" class="${ssrRenderClass([{ block: $data.isNavOpen, hidden: !$data.isNavOpen }, "top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"])}" data-v-77a429b9><div class="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto" data-v-77a429b9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/services",
      class: "lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-77a429b9${_scopeId}>Services</span>`);
        } else {
          return [
            createVNode("span", null, "Services")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="relative lg:w-auto w-full" data-v-77a429b9><button class="lg:inline-flex lg:w-auto w-full flex-grow px-5 py-2 rounded text-white items-center justify-between hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white text-left" data-v-77a429b9><div class="flex items-center group" data-v-77a429b9><span class="flex-grow" data-v-77a429b9>Business Solution</span><i class="fa fa-angle-down ml-2" aria-hidden="true" data-v-77a429b9></i></div></button>`);
    if ($data.isDropdownOpen) {
      _push(`<div class="absolute top-12 w-full lg:w-80 bg-white border border-gray-300 rounded shadow-md z-10" data-v-77a429b9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/UnmannedRetail",
        class: "block px-4 py-2 hover:bg-green-200 hover:border hover:border-green-200 hover:text-white !important",
        onClick: $options.closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa fa-archive mr-2" aria-hidden="true" data-v-77a429b9${_scopeId}></i> Unmanned Retail `);
          } else {
            return [
              createVNode("i", {
                class: "fa fa-archive mr-2",
                "aria-hidden": "true"
              }),
              createTextVNode(" Unmanned Retail ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/UnmannedRetail",
        class: "block px-4 py-2 hover:bg-green-200 hover:border hover:border-green-200 hover:text-white !important",
        onClick: $options.closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa fa-university mr-2" aria-hidden="true" data-v-77a429b9${_scopeId}></i> Warehousing Ops `);
          } else {
            return [
              createVNode("i", {
                class: "fa fa-university mr-2",
                "aria-hidden": "true"
              }),
              createTextVNode(" Warehousing Ops ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/UnmannedRetail",
        class: "block px-4 py-2 hover:bg-green-200 hover:border hover:border-green-200 hover:text-white !important",
        onClick: $options.closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa fa-home mr-2" aria-hidden="true" data-v-77a429b9${_scopeId}></i> Multiple Stock-keeping Locations `);
          } else {
            return [
              createVNode("i", {
                class: "fa fa-home mr-2",
                "aria-hidden": "true"
              }),
              createTextVNode(" Multiple Stock-keeping Locations ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/technology",
      class: "lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-77a429b9${_scopeId}>Technology</span>`);
        } else {
          return [
            createVNode("span", null, "Technology")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/our_company",
      class: "lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-77a429b9${_scopeId}>Our Company</span>`);
        } else {
          return [
            createVNode("span", null, "Our Company")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto" data-v-77a429b9><a class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center underline" href="#" data-v-77a429b9><span data-v-77a429b9>Login</span></a><a class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center" href="#" data-v-77a429b9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "",
      class: "lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5 rounded text-white items-center justify-center bg-white bg-opacity-25 border border-white hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-77a429b9${_scopeId}> Book a Meeting</span>`);
        } else {
          return [
            createVNode("span", null, " Book a Meeting")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</a></div></div></nav>`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/TopNavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TopNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-77a429b9"]]);
const _imports_0 = "" + __buildAssetsURL("Logo-footer.54713071.png");
const _sfc_main$1 = {
  name: "Footer",
  computed: {
    loading() {
      return loading.value;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!$options.loading) {
    _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black-200" }, _attrs))}><div class="container px-6 py-12 mx-auto"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"><div class="sm:col-span"><a href="#" class="mr-6 inline-flex items-center"><img${ssrRenderAttr("src", _imports_0)} alt="Image Alt Text" class="h-25 w-30 mr-2"></a><div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"><div><div class="flex flex-col items-start mt-5 space-y-2"><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Terms and Conditions</a><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Privacy Policye</a><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Cookie Policy</a></div></div></div></div><div class="sm:col-span-2 mt-auto"><div class="flex flex-col items-start mt-5 space-y-2"><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About</a><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Carrer</a><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Docs</a><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Partner</a><a href="#" class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Product</a></div></div><div class="mt-auto"><p class="font-semibold text-gray-800 dark:text-white">Contact Info</p><div class="flex flex-col items-start mt-5 space-y-2"><p class="text-white">Spaklerweg 14 B4 1096 BA , Amsterdam The Netherlands</p><a href="#" class="text-white">Information Technology</a><p class="text-white">WE’RE MOOS.</p><div class="flex items-center justify-between"><div class="flex -mx-2"><a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path></svg></a><a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path></svg></a><a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path></svg></a></div></div></div></div></div></div></footer>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { Footer, TopNavBar }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopNavBar = resolveComponent("TopNavBar");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TopNavBar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-24d84a9b.js.map