<template>
  <div style="height: 90vh;">
    <div class="text-normal-title-heading text-black-200 font-semibold" style="padding-top: 50px;padding-left: 50px;padding-bottom: 20px;">{{ title }}</div>

  <p  class="text-md text-black-200" v-for="(item, index) in content" :key="index" style="padding-left: 50px;padding-right: 50px;margin-top: 15px;">{{ item }}</p>
  </div>
</template>

<script>

export default {
  name: "privacy_policy",
  components: {
  },
  computed: {

  },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  mounted() {
    this.title = localStorage.getItem('block1_title');
    this.content = localStorage.getItem('block1_content');
    this.content = this.content.split("\n");
  }
};
</script>
<style scoped>

</style>
