<template>
  <div class="pb-10">
    <div class=" text-black-200 leading-tight text-4xl sm:text-4xl md:text-4xl xl:text-5xl ">
      <span class="font-bold">MOOS</span> <span v-html="CardTitle"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonTitle",
  props: ["CardTitle"],
};
</script>

<style >
</style> 
