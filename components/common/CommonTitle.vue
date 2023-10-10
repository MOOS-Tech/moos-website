<template>
  
    <div class=" text-black-200 leading-title-heading-height ">
      <span class="font-bold text-title-heading">{{ BoldText }}</span> <span class="text-title-heading " v-html="CardTitle"></span>
   
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
