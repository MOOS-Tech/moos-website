import { _ as _export_sfc, u as useRuntimeConfig } from "../server.mjs";
import { resolveComponent, withCtx, createTextVNode, useSSRContext, mergeProps } from "vue";
import "destr";
import "devalue";
import "defu";
import "klona";
import { F as FormButton } from "./FormButton-8c894c5f.js";
import { s as smallWhiteCardGetAll, M as MapAndContact, g as getTitle, a as getImages, b as getPatners, c as getQuotes, d as getCardViews } from "./mapAndContact-e3719273.js";
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./CommonTitle-4f82f831.js";
import { l as loading, t as toggleLoading } from "./store-c28a26c2.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "axios";
const _sfc_main$6 = {
  name: "smallWhiteCard",
  components: {
    FormButton
  },
  data() {
    return {
      items: [],
      itemCards: []
    };
  },
  async created() {
    try {
      const response = await smallWhiteCardGetAll();
      this.items = response.data.data;
      this.itemCards = this.items.map((item) => ({
        title: item.attributes.title,
        description: item.attributes.description,
        url: item.url,
        blogs: item.attributes.learn_more_card_arrays.data.map((blog) => blog.attributes.blogs)
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormButton = resolveComponent("FormButton");
  _push(`<!--[-->`);
  ssrRenderList($data.itemCards, (item, index2) => {
    _push(`<article class="relative isolate flex flex-col justify-end shadow-3xl bg-white rounded-md p-10"><div class="justify-between h-full"><div><h3><a${ssrRenderAttr("href", item.url)} class="text-black-200 mb-4 inline-block text-small-title-heading font-semibold">${ssrInterpolate(item.title)}</a></h3><p class="text-black-200 text-tiny-title-heading">${ssrInterpolate(item.description)}</p></div><div class="flex justify-left mt-3"><ul><!--[-->`);
    ssrRenderList(item.blogs, (blog, index3) => {
      _push(`<li class="flex items-center"><i class="fas fa-check-circle text-green-200"></i><span class="text-gray-700 text-lg ml-3">${ssrInterpolate(blog)}</span></li>`);
    });
    _push(`<!--]--></ul></div></div><div class="mt-10 flex flex-col items-center gap-4 lg:flex-row">`);
    _push(ssrRenderComponent(_component_FormButton, { class: "bg-white border-2 border-green-200 text-green-200 !important" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Learn More `);
        } else {
          return [
            createTextVNode(" Learn More ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></article>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/smallWhiteCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const WhiteCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const blogs_vue_vue_type_style_index_0_scoped_f678661e_lang = "";
const _sfc_main$5 = {
  name: "blogs",
  components: {
    WhiteCard
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WhiteCard = resolveComponent("WhiteCard");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "lg:pb-10 w-full px-5 lg:px-10 sm:px-10 md:px-12 mx-auto bg-green-100 background-triangle" }, _attrs))} data-v-f678661e><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-f678661e><div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 py-10" data-v-f678661e>`);
  _push(ssrRenderComponent(_component_WhiteCard, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/blogs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Blogs = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-f678661e"]]);
const heroSection_vue_vue_type_style_index_0_scoped_dd8c2d96_lang = "";
const _sfc_main$4 = {
  name: "index",
  props: {
    imageSrc1: String,
    imageSrc2: String,
    imageSrc3: String,
    ComTitle: String,
    boldText: String,
    para: String
  },
  components: {
    FormButton
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonTitle = __nuxt_component_0;
  const _component_FormButton = resolveComponent("FormButton");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-10 lg:py-20 px-5 lg:px-20" }, _attrs))} data-v-dd8c2d96><div class="overflow-hidden" data-v-dd8c2d96><div class="mx-auto max-w-7xl lg:flex w-full flex flex-col lg:flex-row" data-v-dd8c2d96><div class="mx-auto w-full lg:w-1/2 lg:max-w-lg" data-v-dd8c2d96><div class="mx-auto lg:max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-40 pb-5" data-v-dd8c2d96><div class="relative flex flex-col items-center text-center lg:text-left lg:items-start lg:py-7 lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1" data-v-dd8c2d96>`);
  if ($props.ComTitle) {
    _push(ssrRenderComponent(_component_CommonTitle, {
      CardTitle: $props.ComTitle,
      BoldText: $props.boldText
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="mt-8 text-black-200 text-regular-title-heading" data-v-dd8c2d96>${ssrInterpolate($props.para)}</p><div class="mt-10 flex flex-col items-center gap-4 lg:flex-row" data-v-dd8c2d96>`);
  _push(ssrRenderComponent(_component_FormButton, { class: "text-white" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Book a Meeting `);
      } else {
        return [
          createTextVNode(" Book a Meeting ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="absolute w-2/4 h-3/4 flex items-start justify-end" data-v-dd8c2d96><div class="absolute w-2/4 h-3/5 bg-transparent animated-rectangle" data-v-dd8c2d96><div class="small-rectangle" data-v-dd8c2d96></div><div class="small-rectangle-down" data-v-dd8c2d96></div></div></div></div><div class="mx-auto lg:w-1/2 justify-center relative" data-v-dd8c2d96><div class="absolute w-4/5 h-3/4 flex items-center justify-end lg:w-5/6" data-v-dd8c2d96><div class="absolute w-4/5 h-2/4 bg-transparent animated-rectangle" data-v-dd8c2d96><div class="small-rectangle-up" data-v-dd8c2d96></div></div></div><div class="mx-auto w-full flex flex-wrap items-center gap-6 sm:gap-8 lg:contents" data-v-dd8c2d96><div class="order-first mb-10 flex flex-auto lg:justify-end md:justify-center lg:w-auto lg:flex-none" data-v-dd8c2d96><img${ssrRenderAttr("src", $props.imageSrc1)} alt="" class="aspect-[5/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover relative" data-v-dd8c2d96></div><div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:items-start lg:justify-end md:justify-center lg:gap-x-8" data-v-dd8c2d96><div class="flex flex-none justify-end self-end lg:w-auto relative" data-v-dd8c2d96><img${ssrRenderAttr("src", $props.imageSrc2)} alt="" class="aspect-[5/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" data-v-dd8c2d96></div><div class="flex flex-auto justify-center lg:w-auto lg:flex-none relative" data-v-dd8c2d96><img${ssrRenderAttr("src", $props.imageSrc3)} alt="" class="aspect-[8/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" data-v-dd8c2d96></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/heroSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-dd8c2d96"]]);
const partnerCarousel_vue_vue_type_style_index_0_scoped_31d12caa_lang = "";
const _sfc_main$3 = {
  name: "partner carousel",
  props: {
    baseUrl: String,
    partners: [],
    partnerImages: []
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="pt-20 lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex mx-auto flex-col justify-center" data-v-31d12caa><div class="mx-auto max-w-2xl lg:mx-0" data-v-31d12caa><h3 class="font-bold text-small-title-heading text-black-100" data-v-31d12caa>OUR PARTNERS</h3></div><div class="py-5 pb-10" data-v-31d12caa><div class="mx-auto max-w-5xl px-6 lg:px-8 lg-flex-row" data-v-31d12caa></div></div></section><div class="w-full inline-flex flex-nowrap overflow-hidden mask-container" data-v-31d12caa><ul class="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll" data-v-31d12caa><!--[-->`);
  ssrRenderList($props.partnerImages, (item, index2) => {
    _push(`<li data-v-31d12caa><img${ssrRenderAttr("src", $props.baseUrl + item.avatar)} alt="Transistor" width="158" height="48" data-v-31d12caa></li>`);
  });
  _push(`<!--]--></ul><ul class="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll" aria-hidden="true" data-v-31d12caa><!--[-->`);
  ssrRenderList($props.partnerImages, (item, index2) => {
    _push(`<li data-v-31d12caa><img${ssrRenderAttr("src", $props.baseUrl + item.avatar)} alt="Transistor" width="158" height="48" data-v-31d12caa></li>`);
  });
  _push(`<!--]--></ul></div><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/partnerCarousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PartnerCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-31d12caa"]]);
const _imports_0 = "data:image/png;base64,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";
const _sfc_main$2 = {
  name: "quote",
  props: {
    Quote: "",
    Speaker: ""
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><div class="container py-10 mx-auto sm:flex sm:justify-center w-full sm:px-10 md:px-12 lg:px-48"><div class="flex flex-col text-center w-full items-center"><div class="justify-start items-start self-start"><img${ssrRenderAttr("src", _imports_0)} class="h-8 w-8"></div><h1 class="italic text-normal-title-heading mb-4 text-black-200">${ssrInterpolate($props.Quote)}</h1><p class="lg:w-2/3 mx-auto leading-relaxed text-base">${ssrInterpolate($props.Speaker)}</p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/quote.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Quote = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "card View",
  props: {
    baseUrl: "",
    cards: [],
    cardData: []
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "pt-20 pb-10 lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex mx-auto flex-col lg:flex-row py-10",
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, _attrs))}><div class="sm:flex sm:justify-center py-10 mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 rounded-lg bg-white shadow-3xl"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
  ssrRenderList($props.cardData, (card, index2) => {
    _push(`<div class="bg-white rounded-lg border-r"><a href="#!"><img${ssrRenderAttr("src", $props.baseUrl + card.url)} alt="Image Alt Text" class="h-12 w-15 mx-auto mt-4"></a><div class="p-6"><h5 class="mb-2 text-small-title-heading text-black-200 text-center">${ssrInterpolate(card.title)}</h5><p class="mb-4 text-regular-title-heading text-black-200">${ssrInterpolate(card.description)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/cardView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "index",
  components: {
    Blogs,
    MapAndContact,
    HeroSection,
    PartnerCarousel,
    Quote,
    CardView
  },
  computed: {
    loading() {
      return loading.value;
    }
  },
  data() {
    return {
      //hero
      ComTitle: "",
      imageSrc2: "",
      imageSrc3: "",
      imageSrc1: "",
      boldText: "",
      para: "",
      //partner
      baseUrl: "http://localhost:1337",
      partners: [],
      partnerImages: [],
      //quote
      Quote: "",
      Speaker: "",
      //cards
      cards: [],
      cardData: []
    };
  },
  async created() {
    toggleLoading(true);
    const config = /* @__PURE__ */ useRuntimeConfig();
    this.baseUrl = config.public.API_URL ? config.public.API_URL : "http://localhost:1337";
    await this.fetchHeroSection();
    await this.fetchPartnerSection();
    await this.fetchQuotesSection();
    await this.fetchCardViewsSection();
    toggleLoading(false);
  },
  methods: {
    async fetchHeroSection() {
      try {
        const response = await getTitle();
        this.ComTitle = response.data.data.attributes.CommonTitle;
        this.boldText = response.data.data.attributes.boldText;
        this.para = response.data.data.attributes.Paragraph;
        const response1 = await getImages("1");
        this.imageSrc1 = this.baseUrl + response1.data.data;
        const response2 = await getImages("2");
        this.imageSrc2 = this.baseUrl + response2.data.data;
        const response3 = await getImages("3");
        this.imageSrc3 = this.baseUrl + response3.data.data;
      } catch (error) {
        console.error("Error fetching hero data:");
      }
    },
    async fetchPartnerSection() {
      try {
        const response = await getPatners();
        this.partners = response.data.data;
        this.partnerImages = this.partners.map((item) => ({
          avatar: item.attributes.imageUrl.data.attributes.url
        }));
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    async fetchQuotesSection() {
      try {
        const response = await getQuotes();
        this.Quote = response.data.data[0].attributes.Quote;
        this.Speaker = response.data.data[0].attributes.Speaker;
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    async fetchCardViewsSection() {
      try {
        const response = await getCardViews();
        this.cards = response.data.data;
        this.cardData = this.cards.map((card) => ({
          title: card.attributes.title,
          description: card.attributes.description,
          url: card.attributes.ImageUrl.data.attributes.url
        }));
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = resolveComponent("HeroSection");
  const _component_Blogs = resolveComponent("Blogs");
  const _component_PartnerCarousel = resolveComponent("PartnerCarousel");
  const _component_Quote = resolveComponent("Quote");
  const _component_CardView = resolveComponent("CardView");
  const _component_MapAndContact = resolveComponent("MapAndContact");
  if (!$options.loading) {
    _push(`<div${ssrRenderAttrs(_attrs)}>`);
    _push(ssrRenderComponent(_component_HeroSection, {
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      imageSrc1: $data.imageSrc1,
      imageSrc2: $data.imageSrc2,
      imageSrc3: $data.imageSrc3,
      ComTitle: $data.ComTitle,
      boldText: $data.boldText,
      para: $data.para
    }, null, _parent));
    _push(ssrRenderComponent(_component_Blogs, {
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, null, _parent));
    _push(ssrRenderComponent(_component_PartnerCarousel, {
      baseUrl: $data.baseUrl,
      partners: $data.partners,
      partnerImages: $data.partnerImages
    }, null, _parent));
    _push(ssrRenderComponent(_component_Quote, {
      Quote: $data.Quote,
      Speaker: $data.Speaker
    }, null, _parent));
    _push(ssrRenderComponent(_component_CardView, {
      cards: $data.cards,
      cardData: $data.cardData
    }, null, _parent));
    _push(ssrRenderComponent(_component_MapAndContact, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-9dea9f67.js.map
