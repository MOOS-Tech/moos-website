// store.js
import { ref } from 'vue';

export const loading = ref(true);

export const toggleLoading = (val) => {
    loading.value = val;
};
