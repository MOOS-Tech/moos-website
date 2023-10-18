<template>
  <div class="">
    <div class=" text-black-200 leading-tight text-title-heading sm:text-title-heading md:text-title-heading lg:text-5xl xl:text-5xl ">
      <span class="font-bold">{{BoldText}}</span> <span v-html="CardTitle"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonTitle",
  props: ["CardTitle","BoldText"],
};
</script>

<style >
</style> 
