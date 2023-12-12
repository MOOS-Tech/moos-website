<template>
  <div style="height: 90vh;" class="scrollable-div">
    <div class="text-normal-title-heading text-black-200 font-semibold" style="padding-top: 50px;padding-left: 50px;padding-bottom: 20px;">{{ title }}</div>
    <p class="text-md text-black-200" v-for="(item, index) in content" :key="index"
       style="padding-left: 50px;padding-right: 50px;padding-top: 25px;">{{ item }}</p>
    <div style="height: 50px"></div>
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
.scrollable-div {
  height: 90vh;
  overflow-y: scroll; /* Enable vertical scrollbar */
}

/* Hide scrollbar for Chrome, Safari, and Edge */
.scrollable-div::-webkit-scrollbar {
  display: none;
}

</style>
