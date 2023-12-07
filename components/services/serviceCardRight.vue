<template>
 
    <div >
    <section class="relative  "  >
      <div class="w-full flex flex-col lg:flex-row">
      <div class="mx-auto lg:max-w-4xl w-full pt-10 lg:pt-20 sm:px-10 md:px-12 lg:px-30 flex flex-col lg:flex-row " >
  
        <!-- Switched the order of these two divs -->
        <div class="relative flex flex-col items-center text-left lg:text-left lg:py-7 xl:py-8  px-5
          lg:items-start lg:max-w-none  mx-auto lg:mx-0  ">
  
          <CommonTitle v-if="ComTitle" :CardTitle="ComTitle" :BoldText="boldText" />
         
          <h2 class="text-3xl pb-6 text-black-200 font-semibold py-2">
            {{ CardTitle }}
          </h2>
          <P class="text-black-100 text-md pb-6">{{ Para }}</P>
          <div class="flex justify-left mt-3 ">
              <ul class="text-black-100 list-none   text-md">
              <li class="flex item-start pb-4" v-for="(point, index) in CardBody" :key="index" >
                <i class="fas fa-check text-green-500 mr-2 mt-1 "></i>{{ point.attributes.ListItems }}
              </li>
            </ul>
            </div>
        </div>
  
       
  
      </div>
      <div class=" lg:flex lg:w-1/4 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-full justify-end">
              <img :src="baseUrl + imageUrl" alt="Hero image"  class="lg:absolute lg:w-full lg:h-full object-cover  lg:max-w-[400px] min-h-[300px]">
            </div>
      </div>
     
    </section>
   
  </div>
  
  </template>
 
  
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
  
  
  
  