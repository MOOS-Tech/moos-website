<template>
  <!-- <div
    class="px-4 bg-white  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div
      class="flex flex-col items-center justify-around w-full mb-10 lg:flex-row"
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
  </div> -->
  <div>
  <section class="relative py-10 lg:py-20 bg-white px-5 lg:px-20">
    <div class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-40">

      <!-- Switched the order of these two divs -->
      <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

        <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" />
        <P class="text-black-100 text-xl">{{ Para }}</P>
        <h2 class="text-3xl pb-6 text-black-200 font-semibold py-2">
          {{ CardTitle }}
        </h2>
        <ul class="text-black-100 list-none pl-5 text-xl">
          <li v-for="(point, index) in CardBody" :key="index" class="pb-4">
            <i class="fas fa-check text-green-500 mr-2"></i>{{ point }}
          </li>
        </ul>
      </div>

      <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl justify-end">
        <img :src="imageUrl" alt="Hero image" width="720" height="720"
          class="lg:absolute lg:w-full lg:h-full rounded-xl object-cover lg:max-h-none max-h-[550px] max-w-[250px]">
      </div>

    </div>
  </section>
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



