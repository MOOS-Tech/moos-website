// store.js
import { ref } from 'vue';

export const loading = ref(false);

export const toggleLoading = (val) => {
    loading.value = val;
};
