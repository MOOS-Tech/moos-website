<template>
  <!-- <div
    class="px-4  py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="flex flex-col items-center w-full justify-around lg:flex-row">
      <img
        class="p-2 max-h-[400px] max-w-[400px] h-auto w-auto"
        alt="logo"
        width="720"
        height="420"
        :src="imageUrl"
      />

      <div class="mx-auto">
        <div class="max-w-xl mb-1">
          <h2 class="text-5xl pb-6 text-black-200">
            {{ CardTitle }}
          </h2>
          <P class="text-black-100 text-xl">{{ Para }}</P>
          <ul class="text-black-100 list-none pl-5 pb-4 text-xl">
            <li v-for="(point, index) in CardBody" :key="index" class="pb-4">
              <i class="fas fa-check text-green-500 mr-2"></i>{{ point }}
            </li>
          </ul>
        </div>
        <div className="space-x-4"></div>
      </div>
    </div>
  </div> -->
  <div>
    <section class="relative  gradient min-h-[300px]">
      <div class="w-full flex flex-col lg:flex-row">
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl ">
          <img :src="baseUrl + imageUrl" alt="Hero image"
            class="lg:absolute lg:w-full lg:h-full object-cover  lg:max-w-[400px] min-h-[300px]">
        </div>
        <div class="mx-auto lg:max-w-6xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-40 px-10 py-10">
          <div class="relative flex flex-col items-center text-left lg:text-left lg:py-7 xl:py-8
    lg:items-start lg:max-w-none lg:mx-0 lg:flex-1 lg:w-1/2 ">

            <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText" />
            <h2 class="text-sub-title-heading pb-6 text-black-200">
              {{ CardTitle }}
            </h2>
            <P class="text-black-100  text-md mb-6">{{ Para }}</P>

            

            <div class="flex justify-left mt-3 item-start ">
              <ul class="text-black-100 list-none   text-md">
              <li class="flex pb-4 " v-for="(point, index) in CardBody" :key="index" >
                <i class="fas fa-check text-green-500 mr-2 mt-1"></i>{{ point.attributes.ListItems }}
              </li>
            </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["CardTitle", "CardBody", "imageUrl", "Para", "boldText", "baseUrl"],
};
</script>

<style scoped>
.gradient {
  /* background: linear-gradient(90deg, #A9DAD4 37.62%, rgba(255, 255, 255, 0.00) 141.9%); */
  background: #CCEAE6;
}
</style>



