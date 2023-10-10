<template>
    <div>
      <section class="relative py-10 lg:py-20 bg-white px-5 lg:px-20">
        <div
          class="mx-auto lg:max-w-7xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row  "
        >
          <div
            class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-2/3"
          >
            <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText"/>
            <P class="text-black-100 text-xl mt-8">{{ Para }}</P>
            <h2 class="text-4xl text-black-200 font-semibold py-8 ">
              {{ CardTitle }}
            </h2>
            <ul class="text-black-100 list-disc pl-5 text-xl text-left">
              <li v-for="(point, index) in CardBody" :key="index" class="pb-4">
               {{ point }}
              </li>
            </ul>
          </div>
  
          <div
            class="flex flex-1 lg:w-1/3 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl justify-end items-center"
          >
            <img
              :src="imageUrl"
              alt="Hero image"
              width="720"
              height="720"
              class="lg:absolute lg:w-full lg:h-full rounded-xl object-cover lg:max-h-none max-h-[550px] max-w-[250px]"
            />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  
  
  <script>
export default {
  name: "card",
  props: ["CardTitle", "CardBody", "imageUrl", "ComTitle", "Para","boldText"],
};
</script>
  
  <style scoped>
</style> 
  
  
  
  