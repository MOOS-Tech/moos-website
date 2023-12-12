<template>
  <div style="height: 90vh;">
    <div class="text-normal-title-heading text-black-200 font-semibold" style="padding-top: 50px;padding-left: 50px;padding-bottom: 20px;">{{ title }}</div>

  <p class="text-md text-black-200"   v-for="(item, index) in content" :key="index" style="padding-left: 50px;padding-right: 50px;margin-top: 15px;">{{ item }}</p>
  </div>
 
</template>

<script>

export default {
  name: "terms",
  components: {},
  computed: {},
  data() {
    return {
      title: '',
      content: ''
    };
  },
  mounted() {
    try {
      this.title = localStorage.getItem('block1_title');
    } catch (e) {
      this.title = "Title Not Defined!"
    }
    try {
      this.content = localStorage.getItem('block1_content');
      this.content = this.content.split("\n");
    } catch (e) {
      this.content = "Content not defined!"
    }
  }
};
</script>
<style scoped>

</style>
