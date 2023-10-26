import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { u as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { F as FormButton } from "./FormButton-8c894c5f.js";
import "destr";
import "devalue";
import "defu";
import "klona";
import axios from "axios";
let API_URL;
function initEndpoint() {
  const config = /* @__PURE__ */ useRuntimeConfig();
  API_URL = config.public.API_URL ? config.public.API_URL : "http://localhost:1337";
}
const smallWhiteCardGetAll = async () => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/learn-more-cards?populate=*`);
  } catch (error) {
    return error;
  }
};
const getTitle = async () => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/titles/HomePage`);
  } catch (error) {
    return error;
  }
};
const getQuotes = async () => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/quotes`);
  } catch (error) {
    return error;
  }
};
const getCardViews = async () => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/card-views?populate=*`);
  } catch (error) {
    return error;
  }
};
const getImages = async (params) => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/images/${params}?populate=*`);
  } catch (error) {
    return error;
  }
};
const getPatners = async () => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/partners?populate=*`);
  } catch (error) {
    return error;
  }
};
const bookMeeting = async (payload) => {
  await initEndpoint();
  try {
    return await axios.post(API_URL + `/api/book-meetings`, payload);
  } catch (error) {
    return error;
  }
};
const _sfc_main$3 = {
  name: "FormInput",
  props: {
    id: String,
    groupId: String,
    type: String,
    label: String,
    description: {
      default: "",
      type: String
    },
    isRequired: Boolean,
    placeholder: String,
    invalidFeedback: {
      default: "",
      type: String
    },
    isTextArea: {
      default: false,
      type: Boolean
    },
    isDisabled: {
      default: false,
      type: Boolean
    },
    value: { type: String, required: false, default: "" },
    modelValue: String
  },
  model: {
    prop: "value",
    event: "update"
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<input${ssrRenderAttrs(mergeProps({
    class: "mb-3 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-green-200 h-10 w-72 sm:text-sm",
    type: $props.type,
    placeholder: $props.placeholder,
    value: $props.modelValue
  }, _attrs))}>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Form/FormInputField.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FormInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "FormInput",
  props: {
    id: String,
    name: String,
    autocomplete: String,
    type: String,
    isRequired: Boolean,
    placeholder: String,
    options: ["Request demonstration", "Request demonstration"]
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: "id",
    name: "name",
    autocomplete: "autocomplete",
    class: "mb-3 py-2 px-3 h-10 sm:text-sm focus:border-green-200 focus:outline-none block w-72 rounded-md border-0 text-black-100 shadow-sm",
    placeholder: $props.placeholder
  }, _attrs))}><option>Request demonstration</option></select>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Form/FormSelectField.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FormSelectField = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "FormInput",
  props: {
    id: String,
    rows: Number,
    type: String,
    placeholder: String,
    description: {
      default: "",
      type: String
    },
    isRequired: Boolean,
    placeholder: String,
    invalidFeedback: {
      default: "",
      type: String
    },
    isTextArea: {
      default: false,
      type: Boolean
    },
    isDisabled: {
      default: false,
      type: Boolean
    },
    value: { type: String, required: false, default: "" },
    modelValue: String
  },
  model: {
    prop: "value",
    event: "update"
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: "id",
    rows: "rows",
    class: "block rounded-md border-0 mb-3 py-3 px-3 text-gray-900 shadow-sm w-72 h-36 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none",
    placeholder: $props.placeholder,
    value: $props.modelValue
  }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Form/FormLargeTextBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FormLargeTextBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const mapAndContact_vue_vue_type_style_index_0_scoped_2531e06c_lang = "";
const _sfc_main = {
  name: "index",
  components: {
    FormInput,
    FormButton,
    FormSelectField,
    FormLargeTextBox
  },
  data() {
    return {
      customerName: "",
      customerEmail: "",
      requestOption: "Test",
      customerMessage: ""
    };
  },
  watch: {
    customerName(newVal) {
      console.log("customerName changed to:", newVal);
    },
    customerEmail(newVal) {
      console.log("customerEmail changed to:", newVal);
    },
    requestOption(newVal) {
      console.log("requestOption changed to:", newVal);
    },
    customerMessage(newVal) {
      console.log("customerMessage changed to:", newVal);
    }
  },
  methods: {
    Submitfn() {
      console.log("Form Data", this.customerName);
      let payload = {
        data: {
          name: this.customerName,
          email: this.customerEmail,
          request_demonstration: this.requestOption,
          message: this.customerMessage
        }
      };
      try {
        const response = bookMeeting(payload);
        console.log("Form Data", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormSelectField = resolveComponent("FormSelectField");
  const _component_FormLargeTextBox = resolveComponent("FormLargeTextBox");
  const _component_FormButton = resolveComponent("FormButton");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "flex mb-16 mt-20 justify-center bg-green-and-black",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))} data-v-2531e06c><div class="mx-auto w-full lg:max-w-7xl" data-v-2531e06c><div class="grid md:grid-cols-2 md:gap-12 lg:gap-48" data-v-2531e06c><section class="mt-6 mb-4 place-content-center" data-v-2531e06c><div class="mb-6 text-center" data-v-2531e06c><h1 class="text-normal-title-heading font-bold text-black-200" data-v-2531e06c>Ready to dive in?</h1></div><div class="flex flex-col items-center justify-center" data-v-2531e06c>`);
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.customerName,
    "onUpdate:modelValue": ($event) => $data.customerName = $event,
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    modelValue: $data.customerEmail,
    "onUpdate:modelValue": ($event) => $data.customerEmail = $event,
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormSelectField, {
    modelValue: $data.requestOption,
    "onUpdate:modelValue": ($event) => $data.requestOption = $event,
    placeholder: "Request demonstration"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormLargeTextBox, {
    modelValue: $data.customerMessage,
    "onUpdate:modelValue": ($event) => $data.customerMessage = $event,
    placeholder: "Your message"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormButton, {
    class: "text-white",
    onClick: $options.Submitfn
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Book a Meeting`);
      } else {
        return [
          createTextVNode("Book a Meeting")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section><div class="flex justify-center md:justify-end" data-v-2531e06c><iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?q=MOOS%20International,%20Spaklerweg%2014,%20B4,%201096%20BA%20Amsterdam,%20Netherlands&amp;output=embed" style="${ssrRenderStyle({})}" data-v-2531e06c></iframe></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/mapAndContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MapAndContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2531e06c"]]);
export {
  MapAndContact as M,
  getImages as a,
  getPatners as b,
  getQuotes as c,
  getCardViews as d,
  getTitle as g,
  smallWhiteCardGetAll as s
};
//# sourceMappingURL=mapAndContact-e3719273.js.map
