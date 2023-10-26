import { ref } from "vue";
const loading = ref(false);
const toggleLoading = (val) => {
  loading.value = val;
};
export {
  loading as l,
  toggleLoading as t
};
//# sourceMappingURL=store-c28a26c2.js.map
