<template>
  
    <section class="relative  bg-white">
      <div class="w-full flex flex-col lg:flex-row">
      <div
          class="mx-auto lg:max-w-4xl w-full pt-10 lg:pt-20 sm:px-10 md:px-12 lg:px-30 flex flex-col lg:flex-row"
      >
        <div
            class="relative flex flex-col items-center text-left lg:text-left lg:py-7 xl:py-8 
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0  lg:w-2/3"
        >
          <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText"/>
          <P class="text-black-200 text-regular-title-heading mt-8">{{ Para }}</P>
          <h2 class="text-normal-title-heading text-black-200 font-semibold py-8 ">
            {{ CardTitle }}
          </h2>
          <ul class="text-black-200 list-disc text-small-title-heading pl-5 text-left">
            <li v-for="(point, index) in CardBody" :key="index" class="pb-2">
              {{ point }}
            </li>
          </ul>
        </div>

        
      </div>
      <div
            class="flex  lg:w-1/4 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl justify-end "
        >
          <img
              :src="baseUrl + imageUrl"
              alt="Hero image"
             
              class="lg:absolute lg:w-full lg:h-full rounded-xl object-cover lg:max-h-none max-h-[550px] max-w-[250px]"
          />
        </div>
      </div>
    </section>
  
</template>


<script>
export default {
  name: "card",
  props: {
    CardTitle: "",
    CardBody: [],
    imageUrl: "",
    ComTitle: "",
    Para: "",
    boldText: "",
    baseUrl: String,
  }
};
</script>

<style scoped>
</style>



