import { _ as __nuxt_component_0 } from "./CommonTitle-4f82f831.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  name: "card",
  props: {
    CardTitle: "",
    CardBody: [],
    imageUrl: "",
    ComTitle: "",
    Para: "",
    boldText: "",
    baseUrl: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonTitle = __nuxt_component_0;
  const _component_P = resolveComponent("P");
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-10 lg:py-20 bg-white px-5 lg:px-20"><div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row"><div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-2/3">`);
  if ($props.ComTitle) {
    _push(ssrRenderComponent(_component_CommonTitle, {
      CardTitle: $props.ComTitle,
      BoldText: $props.boldText
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_P, { class: "text-black-200 text-regular-title-heading mt-8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.Para)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.Para), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="text-normal-title-heading text-black-200 font-semibold py-8">${ssrInterpolate($props.CardTitle)}</h2><ul class="text-black-200 list-disc text-small-title-heading pl-5 text-left"><!--[-->`);
  ssrRenderList($props.CardBody, (point, index) => {
    _push(`<li class="pb-2">${ssrInterpolate(point)}</li>`);
  });
  _push(`<!--]--></ul></div><div class="flex flex-1 lg:w-1/3 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl justify-end items-center"><img${ssrRenderAttr("src", $props.baseUrl + $props.imageUrl)} alt="Hero image" width="720" height="720" class="lg:absolute lg:w-full lg:h-full rounded-xl object-cover lg:max-h-none max-h-[550px] max-w-[250px]"></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Card as C
};
//# sourceMappingURL=card-e2c161f2.js.map
