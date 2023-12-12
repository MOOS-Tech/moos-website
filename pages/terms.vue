<template>
  <div style="height: 80vh;padding-top: 50px;padding-left: 50px">{{ title }}</div>
  <div style="height: 80vh;padding-top: 50px;padding-left: 50px">{{ content }}</div>
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
    this.title = localStorage.getItem('block1_title');
    this.content = localStorage.getItem('block1_content');
  }
};
</script>
<style scoped>

</style>
