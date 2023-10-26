import { C as Card } from "./card-e2c161f2.js";
import { M as MapAndContact } from "./mapAndContact-e3719273.js";
import { C as CardImgRight, c as card } from "./cardImgLeft-bc1fab24.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./CommonTitle-4f82f831.js";
import "./FormButton-8c894c5f.js";
import "destr";
import "devalue";
import "defu";
import "klona";
import "axios";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main = {
  components: { Card, MapAndContact, CardImgRight, card },
  name: "our_company",
  data() {
    return {
      data: dummyData
    };
  }
};
const dummyData = [
  {
    boldtext: "About",
    ComTitle: "<br/>our company​",
    CardTitle: "Our vision​​",
    Para: "Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",
    CardBody: [
      "In lorem mi, hendrerit a malesuada in, eleifend.",
      "Maecenas volutpat tristique nibh.",
      "Nam sit amet diam in orci consequat placerat."
    ],
    imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg"
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: "Meet our founder​",
    CardBody: [
      "Low stock triggers​",
      "​Auto reordering and replenishment",
      "Optimized replenishment schedule​"
    ],
    imageUrl: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg"
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: "Some faces behind MOOS​",
    CardBody: [
      "Real time insights in what happens in store/warehouse​",
      "Basis for payments, order-checks, theft detection​",
      "(Re)supply detection & optimization "
    ],
    imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg"
  }
];
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  const _component_MapAndContact = resolveComponent("MapAndContact");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Card, {
    CardTitle: $data.data[0].CardTitle,
    CardBody: $data.data[0].CardBody,
    imageUrl: $data.data[0].imageUrl,
    ComTitle: $data.data[0].ComTitle,
    Para: $data.data[0].Para,
    boldText: $data.data[0].boldtext,
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, null, _parent));
  _push(ssrRenderComponent(_component_MapAndContact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our_company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const our_company = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  our_company as default
};
//# sourceMappingURL=our_company-5f461dc5.js.map
