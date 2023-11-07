<template>
  <div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">

      </div>
      <div class="ml-3">
        <p class="text-sm text-yellow-700">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  props: {
    message: "",
    type: ''
  },

  data() {
    return {

    };
  },
  methods: {
    hideSection() {
      this.isSectionVisible = false;
    },
  },
}
</script>
