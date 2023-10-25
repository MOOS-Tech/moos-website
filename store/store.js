// store.js
import { ref } from 'vue';

export const loading = ref(true);

export const toggleLoading = () => {
    loading.value = !loading.value;
};
