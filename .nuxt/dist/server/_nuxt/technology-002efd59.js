import { C as Card } from "./card-e2c161f2.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./CommonTitle-4f82f831.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const technolgyCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "technologyCard",
  components: {},
  data() {
    return {
      cards: [
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
          title: "MOOS sensors",
          description: "Cloud-connected sensors emitting signal in real-time"
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "MOOS sensors",
          description: "Cloud-connected sensors emitting signal in real-time"
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "MOOS sensors",
          description: "Cloud-connected sensors emitting signal in real-time"
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "MOOS sensors",
          description: "Cloud-connected sensors emitting signal in real-time,Cloud-connected sensors emitting signal in real-time"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-20" }, _attrs))}><!--[-->`);
  ssrRenderList($data.cards, (card, index) => {
    _push(`<section class="relative px-5 lg:px-20"><div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row"><div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-2/3"><h1 class="text-normal-title-heading pb-6 text-green-200 font-semibold py-2">${ssrInterpolate(card.title)}</h1><h2 class="text-black-200 font-semibold text-sub-title-heading pb-6">${ssrInterpolate(card.description)}</h2></div><div class="flex flex-1 lg:w-1/3 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl justify-end items-center technology-image"><img${ssrRenderAttr("src", card.imageUrl)} alt="Hero image" width="720" height="720" class="lg:absolute lg:w-full lg:h-full object-cover lg:max-h-none max-h-[550px] max-w-[250px]"></div></div></section>`);
  });
  _push(`<!--]--><div class="flex flex-1 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto items-center justify-center"><img src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp" alt="Hero image" width="720" height="720" class="lg:absolute lg:w-full lg:h-full object-cover lg:max-h-none max-h-[550px] max-w-[250px]"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technology/technolgyCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TechnologyCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "technology",
  components: { Card, TechnologyCard, TechnologyCard },
  data() {
    return {
      data: dummyData
    };
  }
};
const dummyData = [
  {
    boldtext: "MOOS",
    ComTitle: "the operating system for inventory management​​",
    Para: "Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",
    imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg"
  }
];
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  const _component_TechnologyCard = resolveComponent("TechnologyCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Card, {
    imageUrl: $data.data[0].imageUrl,
    ComTitle: $data.data[0].ComTitle,
    Para: $data.data[0].Para,
    boldText: $data.data[0].boldtext,
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, null, _parent));
  _push(`<div class="bg-green-400">`);
  _push(ssrRenderComponent(_component_TechnologyCard, {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/technology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const technology = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  technology as default
};
//# sourceMappingURL=technology-002efd59.js.map
