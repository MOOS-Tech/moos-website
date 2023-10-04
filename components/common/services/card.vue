<template>
  <div class="flex flex-col p-1">
    <div
      class="relative flex h-[220px] items-start gap-2 overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
        class="h-full w-[300px] object-cover transition-all duration-300 group-hover:opacity-90"
      />
      <div class="flex flex-col items-start justify-center gap-4 p-4">
        <h2 class="text-2xl font-semibold"> {{ CardTitle }}</h2>
        <!-- <p class="text-base"> -->
            <li v-for="(point, index) in CardBody" :key="index">{{ point }}</li>
        <!-- </p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: ['CardTitle','CardBody'],
};
</script>

<style scoped>
</style>