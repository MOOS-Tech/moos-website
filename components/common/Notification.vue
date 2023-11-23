<template>
  <div v-if="show" :class="[getTypeClass(), 'notification']">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false,
      type: 'success', // 'success' or 'error'
      message: '',
    };
  },
  methods: {
    showNotification(type, message) {
      this.type = type;
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.hideNotification();
      }, 5000);
    },
    hideNotification() {
      this.show = false;
    },
    getTypeClass() {
      return {
        'bg-green-100 text-white': this.type === 'success',
        'bg-red-200': this.type === 'error',
        // 'text-white': true,
        'p-4': true,
        'mb-4': true,
        'rounded-md': true,
        'shadow-md': true,
      };
    },
  }
}
</script>
<style scoped>
.notification {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 999;
}
</style>
