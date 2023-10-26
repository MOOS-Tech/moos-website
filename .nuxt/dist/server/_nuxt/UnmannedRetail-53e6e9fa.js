import { C as Card } from "./card-e2c161f2.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { M as MapAndContact } from "./mapAndContact-e3719273.js";
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
import "./FormButton-8c894c5f.js";
import "axios";
const GetStart_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "GetStart",
  components: {},
  data() {
    return {
      cards: [
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
          title: "Card Title 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
          imageUrl: "https://tecdn.b-cdn.net/img/new/standard/city/042.webp",
          title: "Card Title 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row py-10" }, _attrs))}><section class="pt-20 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 py-10 mx-auto lg:max-w-7xl bg-white"><div class="mb-10"><h2 class="text-sub-title-heading font-semibold text-black-200">How To Get Started</h2></div><div class="flex flex-col sm:flex-row"><!--[-->`);
  ssrRenderList($data.cards, (card, index) => {
    _push(`<div class="flex flex-col sm:shrink-0 sm:grow sm:basis-0"><a href="#!"><div class="h-10 w-10 mr-2 mb-2 inline-flex items-center justify-center bg-green-200 rounded-full border text-white mx-2">${ssrInterpolate(index + 1)}</div></a><div class=""><h5 class="mb-2 text-small-title-heading font-medium leading-tight text-neutral-800 mt-2 mx-2">${ssrInterpolate(card.title)}</h5><p class="mb-4 text-regular-title-heading text-neutral-600 mx-2">${ssrInterpolate(card.description)}</p></div></div>`);
  });
  _push(`<!--]--></div></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/GetStart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const GetStart = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const DottedLine_vue_vue_type_style_index_0_scoped_2b1bc3c5_lang = "";
const _sfc_main$3 = {
  name: "DottedLine",
  props: {
    lineWidth: {
      type: Number,
      default: 280
    },
    rightLineUpLength: {
      type: Number,
      default: 40
    },
    rightLineDownLength: {
      type: Number,
      default: 40
    },
    leftLineUpLength: {
      type: Number,
      default: 40
    },
    leftLineDownLength: {
      type: Number,
      default: 40
    },
    showRightLineUp: {
      type: Boolean,
      default: false
    },
    showRightLineDown: {
      type: Boolean,
      default: false
    },
    showLeftLineUp: {
      type: Boolean,
      default: false
    },
    showLeftLineDown: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    svgWidth() {
      return this.lineWidth + 20;
    },
    svgHeight() {
      return Math.max(
        this.leftLineUpLength + this.leftLineDownLength,
        this.rightLineUpLength + this.rightLineDownLength
      ) + 20;
    },
    lineXStart() {
      return 10;
    },
    lineXEnd() {
      return this.lineWidth + 10;
    },
    lineY() {
      return this.svgHeight / 2;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-svg" }, _attrs))} data-v-2b1bc3c5><svg${ssrRenderAttr("width", $options.svgWidth)}${ssrRenderAttr("height", $options.svgHeight)} data-v-2b1bc3c5><path${ssrRenderAttr("d", `M${$options.lineXStart} ${$options.lineY} L${$options.lineXEnd} ${$options.lineY}`)} stroke="#109888" fill="transparent" stroke-dasharray="8" stroke-dashoffset="0" data-v-2b1bc3c5><animate attributeName="stroke-dashoffset" from="0" to="60" dur="2s" repeatCount="indefinite" data-v-2b1bc3c5></animate></path>`);
  if ($props.showRightLineUp) {
    _push(`<path${ssrRenderAttr("d", `M${$options.lineXEnd} ${$options.lineY} L${$options.lineXEnd} ${$options.lineY - $props.rightLineUpLength}`)} stroke="#109888" fill="transparent" stroke-dasharray="8" stroke-dashoffset="0" data-v-2b1bc3c5><animate attributeName="stroke-dashoffset" from="0" to="60" dur="2s" repeatCount="indefinite" data-v-2b1bc3c5></animate></path>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.showRightLineDown) {
    _push(`<path${ssrRenderAttr("d", `M${$options.lineXEnd} ${$options.lineY} L${$options.lineXEnd} ${$options.lineY + $props.rightLineDownLength}`)} stroke="#109888" fill="transparent" stroke-dasharray="8" stroke-dashoffset="0" data-v-2b1bc3c5><animate attributeName="stroke-dashoffset" from="0" to="60" dur="2s" repeatCount="indefinite" data-v-2b1bc3c5></animate></path>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.showLeftLineUp) {
    _push(`<path${ssrRenderAttr("d", `M${$options.lineXStart} ${$options.lineY} L${$options.lineXStart} ${$options.lineY - $props.leftLineUpLength}`)} stroke="#109888" fill="transparent" stroke-dasharray="8" stroke-dashoffset="0" data-v-2b1bc3c5><animate attributeName="stroke-dashoffset" from="0" to="60" dur="2s" repeatCount="indefinite" data-v-2b1bc3c5></animate></path>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.showLeftLineDown) {
    _push(`<path${ssrRenderAttr("d", `M${$options.lineXStart} ${$options.lineY} L${$options.lineXStart} ${$options.lineY + $props.leftLineDownLength}`)} stroke="#109888" fill="transparent" stroke-dasharray="8" stroke-dashoffset="0" data-v-2b1bc3c5><animate attributeName="stroke-dashoffset" from="0" to="60" dur="2s" repeatCount="indefinite" data-v-2b1bc3c5></animate></path>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</svg></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/DottedLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DottedLine = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-2b1bc3c5"]]);
const _imports_0 = "" + __buildAssetsURL("pillimage.6930b76f.png");
const _imports_1 = "" + __buildAssetsURL("VueJS.65db5630.png");
const moosValueLeft_vue_vue_type_style_index_0_scoped_825fafc0_lang = "";
const _sfc_main$2 = {
  name: "valueleft",
  components: { DottedLine },
  props: ["leftPill", "rightPill", "isVisible"],
  data() {
    return {
      pillTitle: "Pill Title",
      oldWays: [
        {
          oldWayValueText: "Count manually"
        },
        {
          oldWayValueText: "Estimated with 60-70% accurate ERP+POS data"
        }
      ],
      moosWays: [
        {
          moosWayValueText: "Count manually"
        },
        {
          moosWayValueText: "Estimated with 60-70% accurate ERP+POS data"
        }
      ]
    };
  },
  methods: {
    movePills() {
      const leftPill = document.getElementById(this.leftPill);
      const rightPill = document.getElementById(this.rightPill);
      leftPill.style.transform = "translateX(-10%)";
      rightPill.style.transform = "translateX(10%)";
    },
    resetPills() {
      const leftPill = document.getElementById(this.leftPill);
      const rightPill = document.getElementById(this.rightPill);
      leftPill.style.transform = "translateX(0)";
      rightPill.style.transform = "translateX(0)";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DottedLine = resolveComponent("DottedLine");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-825fafc0><div class="flex flex-col lg:flex-row" data-v-825fafc0><div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-20 mx-auto lg:flex-row" data-v-825fafc0><div class="flex flex-col items-center lg:px-10" data-v-825fafc0><div data-v-825fafc0><h2 class="text-normal-title-heading font-semibold text-center lg:w-3/4 self-center text-green-200 mb-4" data-v-825fafc0>${ssrInterpolate($data.pillTitle)}</h2><div class="flex items-center justify-center lg:w-4/5 transition-transform" id="pill-container" data-v-825fafc0><div class="pill left relative lg:rounded-l-full md:rounded-l-full border-2 border-r-0 border-black-100 h-auto py-1 round-pill expand-horizontal1"${ssrRenderAttr("id", $props.leftPill)} data-v-825fafc0><div class="flex flex-col items-start lg:w-full pl-10" data-v-825fafc0><h3 class="text-small-title-heading mb-2 text-left" data-v-825fafc0>Old Way</h3><ul class="text-sm list-disc text-left" data-v-825fafc0><!--[-->`);
  ssrRenderList($data.oldWays, (item, index) => {
    _push(`<li data-v-825fafc0>${ssrInterpolate(item.oldWayValueText)}</li>`);
  });
  _push(`<!--]--></ul></div></div><div class="flex items-center justify-center w-1/6 expand-horizontal-image" id="image" style="${ssrRenderStyle({ "margin-left": "-20px", "margin-right": "-20px" })}" data-v-825fafc0><img${ssrRenderAttr("src", _imports_0)} alt="Image" class="h-auto" data-v-825fafc0></div><div class="pill right relative lg:rounded-r-full md:rounded-r-full border-2 border-l-0 border-green-200 h-auto py-1 round-pill expand-horizontal"${ssrRenderAttr("id", $props.rightPill)} data-v-825fafc0><div class="flex flex-col items-start lg:w-full pl-10 text-green-200" data-v-825fafc0><h3 class="text-small-title-heading mb-2 text-left" data-v-825fafc0>MOOS Way</h3><ul class="text-sm list-disc text-left" data-v-825fafc0><!--[-->`);
  ssrRenderList($data.moosWays, (item, index) => {
    _push(`<li data-v-825fafc0>${ssrInterpolate(item.moosWayValueText)}</li>`);
  });
  _push(`<!--]--></ul></div></div></div></div>`);
  if ($props.isVisible) {
    _push(`<div class="${ssrRenderClass([{ "dotted-animation": $props.isVisible }, "justify-end px-10 self-end"])}" data-v-825fafc0>`);
    _push(ssrRenderComponent(_component_DottedLine, {
      "line-width": 500,
      "right-line-up-length": 0,
      "right-line-down-length": 100,
      "left-line-down-length": 0,
      "left-line-up-length": 100,
      "show-left-line-up": true,
      "show-right-line-down": true
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="w-full sm:w-1/5 md:w-1/5 lg:w-1/6 ml-auto justify-end items-end self-end" data-v-825fafc0></div></div><div class="justify-end items-end self-end" data-v-825fafc0><img${ssrRenderAttr("src", _imports_1)} alt="Additional Image" class="h-20 w-50" data-v-825fafc0></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/moosValueLeft.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MoosValueLeft = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-825fafc0"]]);
const moosValueRight_vue_vue_type_style_index_0_scoped_a01af6d1_lang = "";
const _sfc_main$1 = {
  name: "valueleft",
  props: ["left_Pill", "right_Pill", "isVisible"],
  components: { DottedLine },
  data() {
    return {
      pillTitle: "Pill Title",
      oldWays: [
        {
          oldWayValueText: "Count manually"
        },
        {
          oldWayValueText: "Estimated with 60-70% accurate ERP+POS data"
        }
      ],
      moosWays: [
        {
          moosWayValueText: "Count manually"
        },
        {
          moosWayValueText: "Estimated with 60-70% accurate ERP+POS data"
        }
      ]
    };
  },
  methods: {
    movePills() {
      const leftPill = document.getElementById(this.left_Pill);
      const rightPill = document.getElementById(this.right_Pill);
      leftPill.style.transform = "translateX(-10%)";
      rightPill.style.transform = "translateX(10%)";
    },
    resetPills() {
      const leftPill = document.getElementById(this.left_Pill);
      const rightPill = document.getElementById(this.right_Pill);
      leftPill.style.transform = "translateX(0)";
      rightPill.style.transform = "translateX(0)";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DottedLine = resolveComponent("DottedLine");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "direction": "rtl" } }, _attrs))} data-v-a01af6d1><div class="flex flex-col lg:flex-row" data-v-a01af6d1><div class="flex flex-col sm:flex-row lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-20 mx-auto lg:flex-row" data-v-a01af6d1><div class="flex flex-col items-start lg:px-10" data-v-a01af6d1><div data-v-a01af6d1><h2 class="text-normal-title-heading font-semibold text-center lg:w-3/4 self-center text-green-200 mb-4" data-v-a01af6d1>${ssrInterpolate($data.pillTitle)}</h2><div class="flex items-center justify-center lg:w-4/5 transition-transform" id="pill-container" dir="ltr" data-v-a01af6d1><div class="pill left relative lg:rounded-l-full md:rounded-l-full border-2 border-r-0 border-black-100 h-auto py-1 round-pill expand-horizontal1"${ssrRenderAttr("id", $props.left_Pill)} data-v-a01af6d1><div class="flex flex-col items-start lg:w-full pl-10" data-v-a01af6d1><h3 class="text-small-title-heading mb-2 text-left" data-v-a01af6d1>Old Way</h3><ul class="text-sm list-disc text-left" data-v-a01af6d1><!--[-->`);
  ssrRenderList($data.oldWays, (item, index) => {
    _push(`<li data-v-a01af6d1>${ssrInterpolate(item.oldWayValueText)}</li>`);
  });
  _push(`<!--]--></ul></div></div><div class="flex items-center justify-center w-1/6 expand-horizontal-image" id="image" style="${ssrRenderStyle({ "margin-left": "-20px", "margin-right": "-20px" })}" data-v-a01af6d1><img${ssrRenderAttr("src", _imports_0)} alt="Image" class="h-auto" data-v-a01af6d1></div><div class="pill right relative lg:rounded-r-full md:rounded-r-full border-2 border-l-0 border-green-200 h-auto py-1 round-pill expand-horizontal"${ssrRenderAttr("id", $props.right_Pill)} data-v-a01af6d1><div class="flex flex-col items-start lg:w-full pl-10 text-green-200" data-v-a01af6d1><h3 class="text-small-title-heading mb-2 text-left" data-v-a01af6d1>MOOS Way</h3><ul class="text-sm list-disc text-left" data-v-a01af6d1><!--[-->`);
  ssrRenderList($data.moosWays, (item, index) => {
    _push(`<li data-v-a01af6d1>${ssrInterpolate(item.moosWayValueText)}</li>`);
  });
  _push(`<!--]--></ul></div></div></div></div>`);
  if ($props.isVisible) {
    _push(`<div class="${ssrRenderClass([{ "dotted-animation": $props.isVisible }, "justify-end px-10 self-end"])}" data-v-a01af6d1>`);
    _push(ssrRenderComponent(_component_DottedLine, {
      "line-width": 500,
      "right-line-up-length": 100,
      "right-line-down-length": 0,
      "left-line-down-length": 100,
      "left-line-up-length": 0,
      "show-left-line-down": true,
      "show-right-line-up": true
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="w-full sm:w-1/5 md:w-1/5 lg:w-1/6 ml-auto justify-end items-end self-end" data-v-a01af6d1></div></div><div class="justify-end items-end self-end" data-v-a01af6d1><img${ssrRenderAttr("src", _imports_1)} alt="Additional Image" class="h-20 w-50" data-v-a01af6d1></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/moosValueRight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MoosValueRight = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a01af6d1"]]);
const dummyData = [
  {
    ComTitle: "<br/>for unmanned retail​",
    boldtext: "MOOS",
    CardTitle: "Typical challenges for unmanned retail companies​",
    Para: "​Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",
    CardBody: [
      "In lorem mi, hendrerit a malesuada in, eleifend.",
      "Maecenas volutpat tristique nibh.",
      "Nam sit amet diam in orci consequat placerat."
    ],
    imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg"
  }
];
const _sfc_main = {
  components: { Card, GetStart, MapAndContact, MoosValueLeft, MoosValueRight },
  name: "business_solutions",
  data() {
    return {
      data: dummyData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  const _component_MoosValueLeft = resolveComponent("MoosValueLeft");
  const _component_MoosValueRight = resolveComponent("MoosValueRight");
  const _component_GetStart = resolveComponent("GetStart");
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
  _push(`<div><div class="pt-10 lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex flex-col lg:flex-row"><section class="lg:max-w-10xl w-full sm:px-10 md:px-12 px-5 lg:px-10 py-10 mx-auto lg:max-w-7xl bg-white"><h2 class="text-sub-title-heading font-semibold text-black-200">Values of the MOOS Way</h2></section></div>`);
  _push(ssrRenderComponent(_component_MoosValueLeft, {
    rightPill: "oneleft",
    leftPill: "oneright",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    isVisible: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_MoosValueRight, {
    right_Pill: "one_left",
    left_Pill: "one_right",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    isVisible: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_MoosValueLeft, {
    rightPill: "twoleft",
    leftPill: "tworight",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    isVisible: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_MoosValueRight, {
    right_Pill: "two_left",
    left_Pill: "two_right",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    isVisible: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_MoosValueLeft, {
    rightPill: "threeleft",
    leftPill: "threeright",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    isVisible: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_MoosValueRight, {
    right_Pill: "three_left",
    left_Pill: "three_right",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    isVisible: false
  }, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_GetStart, {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_MapAndContact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/UnmannedRetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UnmannedRetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UnmannedRetail as default
};
//# sourceMappingURL=UnmannedRetail-53e6e9fa.js.map
