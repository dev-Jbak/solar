import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JBStat",
  __ssrInlineRender: true,
  props: {
    value: Number,
    title: String,
    unit: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-1 text-xl py-4 px-16 bg-primary bg-opacity-10 rounded-lg" }, _attrs))}><p></p><p class="font-semibold text-white text-7xl">${ssrInterpolate(__props.value)}<span class="ml-1 text-xl text-white font-light">${ssrInterpolate(__props.unit)}</span></p><p class="text-gray text-center font-semibold text-xl"><span>${ssrInterpolate(__props.title)}</span></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/JBStat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=JBStat-fce5206b.mjs.map
