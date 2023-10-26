import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  name: "FormButton",
  props: {
    id: String,
    type: {
      default: "button",
      type: String
    },
    title: {
      default: "Button",
      type: String
    },
    size: {
      default: "md",
      type: String
    },
    to: {
      default: null,
      type: String
    },
    isDisabled: {
      default: false,
      type: Boolean
    },
    isLoading: {
      default: false,
      type: Boolean
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    id: $props.id,
    class: "flex items-center text-sm font-bold px-5 bg-green-200 border-2 border-green-200 transition duration-300 rounded-md h-12 w-45 hover:bg-green-300 hover:border hover:border-green-300 hover:text-white"
  }, _attrs))}>`);
  if ($props.isLoading) {
    _push(`<span class="text-small text-white">Loading...</span>`);
  } else {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Form/FormButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormButton as F
};
//# sourceMappingURL=FormButton-8c894c5f.js.map
