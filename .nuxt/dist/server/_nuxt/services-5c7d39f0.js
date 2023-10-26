import { c as card, C as CardImgRight } from "./cardImgLeft-bc1fab24.js";
import { u as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { resolveComponent, useSSRContext } from "vue";
import "destr";
import "devalue";
import "defu";
import "klona";
import axios from "axios";
import { l as loading, t as toggleLoading } from "./store-c28a26c2.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "./CommonTitle-4f82f831.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
let API_URL;
function initEndpoint() {
  const config = /* @__PURE__ */ useRuntimeConfig();
  API_URL = config.public.API_URL ? config.public.API_URL : "http://localhost:1337";
}
const getAllServices = async () => {
  await initEndpoint();
  try {
    return await axios.get(API_URL + `/api/services?populate=*`);
  } catch (error) {
    return error;
  }
};
const _sfc_main = {
  components: { card, CardImgRight },
  name: "services",
  data() {
    return {
      baseUrl: "http://localhost:1337",
      cards: [],
      cardDetails: [],
      CardTitle: "",
      CardBody: [],
      imageUrl: "",
      ComTitle: "",
      boldText: "",
      Para: ""
    };
  },
  computed: {
    loading() {
      return loading.value;
    }
  },
  async created() {
    toggleLoading(true);
    await this.fetchAllServices();
  },
  methods: {
    async fetchAllServices() {
      try {
        const response = await getAllServices();
        this.cards = response.data.data;
        this.cardDetails = this.cards.map((item) => ({
          CardTitle: item.attributes.CardTitle,
          CardBody: item.attributes.service_card_bodies.data,
          ComTitle: item.attributes.ComTitle,
          imageUrl: item.attributes.imageUrl.data.attributes.formats.small.url,
          boldText: item.attributes.boldtext,
          Para: item.attributes.Paragraph
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      toggleLoading(false);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardImgRight = resolveComponent("CardImgRight");
  const _component_card = resolveComponent("card");
  _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
  ssrRenderList($data.cardDetails, (item, index) => {
    _push(`<div>`);
    if (index % 2 === 0) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_CardImgRight, {
        CardTitle: item.CardTitle,
        CardBody: item.CardBody,
        imageUrl: item.imageUrl,
        ComTitle: item.ComTitle,
        boldText: item.boldText,
        Para: item.Para,
        baseUrl: this.baseUrl,
        "data-aos": "fade-up",
        "data-aos-duration": "1000"
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_card, {
        CardTitle: item.CardTitle,
        CardBody: item.CardBody,
        imageUrl: item.imageUrl,
        Para: item.Para,
        baseUrl: this.baseUrl,
        "data-aos": "fade-up",
        "data-aos-duration": "1000"
      }, null, _parent));
      _push(`</div>`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  services as default
};
//# sourceMappingURL=services-5c7d39f0.js.map
