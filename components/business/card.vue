<template>
    <section class="relative bg-white" style="padding-left: 12%">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1 p-4">
          <div class="mx-auto lg:max-w-4xl xl w-full sm:px-10 md:px-12 flex flex-col lg:flex-row  ">
            <div
                class="relative flex flex-col items-center text-center lg:text-left lg:py-8 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-2/3"
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
        </div>
        <div class="col-span-1">
          <div class="mx-auto max-w-full flex justify-end">
            <img
                :src="imageUrl.includes('https')?imageUrl:baseUrl + imageUrl"
                alt="Hero image"
                class="lg:absolute lg:w-full lg:h-full object-cover  lg:max-w-[400px] min-h-full"
            />
          </div>
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



