<template>
  <div
    class="px-4 bg-white mb-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div
      class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row"
    >
      <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" />
        <P class="text-black-100 text-xl">{{ Para }}</P>
        <div class="max-w-xl mb-6">
          <h2 class="text-5xl pb-6 text-black-200">
            {{ CardTitle }}
          </h2>
          <ul class="text-black-100 list-none pl-5 text-xl">
            <li v-for="(point, index) in CardBody" :key="index" class="pb-4">
              <i class="fas fa-check text-green-500 mr-2"></i>{{ point }}
            </li>
          </ul>
        </div>
        <div className="space-x-4"></div>
      </div>
      <img
  class="p-2 max-h-[400px] max-w-[400px] h-auto w-auto"
  alt="logo"
  width="720"
  height="420"
  :src="imageUrl"
/>

    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["CardTitle", "CardBody", "imageUrl", "ComTitle", "Para"],
};
</script>

<style scoped>
</style> 



