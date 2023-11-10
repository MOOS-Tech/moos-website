<template>
 
  <div >
  <section class="relative  "  >
    <div class="w-full flex flex-col lg:flex-row">
    <div class="mx-auto lg:max-w-4xl w-full pt-10 lg:pt-20 sm:px-10 md:px-12 lg:px-30 flex flex-col lg:flex-row " >

      <!-- Switched the order of these two divs -->
      <div class="relative flex flex-col items-center text-left lg:text-left lg:py-7 xl:py-8  px-5
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0  lg:w-2/3">

        <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText" />
        <P class="text-black-100 text-regular-title-heading mt-8">{{ Para }}</P>
        <h2 class="text-3xl pb-6 text-black-200 font-semibold py-2">
          {{ CardTitle }}
        </h2>
        <ul class="text-black-100 list-none  text-regular-title-heading">
          <li v-for="(point, index) in CardBody" :key="index" class="pb-4">
            <i class="fas fa-check text-green-500 mr-2"></i>{{ point.attributes.ListItems }}
          </li>
        </ul>
      </div>

     

    </div>
    <div class=" lg:flex lg:w-1/4 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-full justify-end">
            <img :src="baseUrl + imageUrl" alt="Hero image"  class="lg:absolute lg:w-full lg:h-full object-cover  lg:max-w-[400px] min-h-[300px]">
          </div>
    </div>
   
  </section>
 
</div>

</template>
<!-- <template>
  <div>
    <section class="relative bg-green-100">
      <div class="w-full flex flex-col lg:flex-row">
        <div class="mx-auto lg:max-w-7xl w-full sm:px-4 md:px-6 lg:px-8 xl:px-12 px-3 py-6 lg:py-12">
        
          <div class="relative flex flex-col items-center text-left lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-full mx-auto lg:flex-1">

            <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText" />
            <P class="text-black-100 text-regular-title-heading mt-4 lg:mt-8">{{ Para }}</P>
            <h2 class="text-2xl lg:text-3xl pb-4 lg:pb-6 text-black-200 font-semibold py-2">
              {{ CardTitle }}
            </h2>
            <ul class="text-black-100 list-none text-regular-title-heading">
              <li v-for="(point, index) in CardBody" :key="index" class="pb-2 lg:pb-4">
                <i class="fas fa-check text-green-500 mr-2"></i>{{ point.attributes.ListItems }}
              </li>
            </ul>
          </div>

          <div class="hidden lg:flex lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-full justify-end">
            <img :src="baseUrl + imageUrl" alt="Hero image" width="720" height="720" class="lg:absolute lg:w-full lg:h-full object-cover max-h-[550px] max-w-[250px]">
          </div>
        </div>
      
        <div class=" lg:flex lg:w-1/4 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-full justify-end">
            <img :src="baseUrl + imageUrl" alt="Hero image" width="720" height="720" class="lg:absolute lg:w-full lg:h-full object-cover max-h-[550px] max-w-[250px]">
          </div>
      </div>
    </section>
  </div>
</template> -->
<script>
export default {
  name: "card",
  props: {
  CardTitle: "", 
  CardBody: [], 
  imageUrl:"", 
  ComTitle:"", 
  Para:"",
  boldText:"",
  baseUrl: String,
  }

};
</script>

<style scoped>
</style> 



