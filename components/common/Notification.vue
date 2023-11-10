<template>
  <!-- <div class="border-l-4 border-yellow-400 bg-green-200 p-4">
    <div class="flex">
    
      <div class="ml-3">
        <p class="text-sm text-yellow-700">
          {{ message }}
        </p>
      </div>
    </div>
  </div> -->
  <div  class="fixed bottom-5 right-5 bg-green-100 text-white p-3 rounded shadow text-md h-30 w-80 ">
      {{ message }}
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
