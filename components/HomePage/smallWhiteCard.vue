<template>
  <div class="w-full px-4 mb-5 md:w-1/2  lg:w-1/4" v-for="(item, index) in items"
          :key="index">
     <div class="mx-auto p-10 bg-white shadow-3xl rounded-lg">
            <div>
              <h3>
                <a href="javascript:void(0)"
                  class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                  {{ item.title }}
                </a>
              </h3>
              <p class="text-body-color text-base">
                {{ item.description }}
              </p>
            </div>
            <div class="flex justify-left mt-3">
              <ul>
                <li class="flex items-center" v-for="(item, index) in blogs" :key="index">
                  <i class="fas fa-check-circle text-green-200"></i>
                  <span class="text-gray-700 text-lg ml-3">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-10  flex flex-col items-center gap-4 lg:flex-row">
              <FormButton class=" bg-white border-2 border-green-200 text-green-200 !important ">
                Learn More
              </FormButton>
            </div>
          </div>
          </div>
</template>
<script>
import FormButton from "@/components/common/Form/FormButton";

export default {
  name: "smallWhiteCard",
  components: {

    FormButton,
    
  },
  data() {
    return {
      items: [
        {
          date: 'Dec 22, 2023',
          title: 'Inventory Management',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          date: 'Jan 15, 2024',
          title: 'Inventory Management',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          date: 'Feb 10, 2024',
          title: 'Inventory Management',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
      ],
    blogs: ["Item 1", "Item 2", "Item 3"],
    }
  }
}
</script>
