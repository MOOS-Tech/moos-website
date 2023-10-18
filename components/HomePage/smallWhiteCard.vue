<!-- <template>
  <article v-for="(item, index) in items" :key="index" class="relative isolate flex flex-col justify-end  shadow-3xl" > 
    <div class="p-10 bg-white  rounded-md">
      <div>
        <h3>
          <a href="javascript:void(0)"
            class=" text-black-200  mb-4 inline-block text-small-title-heading font-semibold ">
            {{ item.title }}
          </a>
        </h3>
        <p class="text-black-200 text-tiny-title-heading ">
          {{ item.description }}
        </p>
      </div>
      <div class="flex justify-left mt-3">
        <ul>
          <li class="flex items-center" v-for="(item, index) in item.blogs" :key="index">
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
  </article>
</template> -->
<template>
  <article
    v-for="(item, index) in items"
    :key="index"
    class="relative isolate flex flex-col justify-end shadow-3xl"
  >
    <div class="p-10 bg-white rounded-md">
      <div>
        <h3>
          <a
            :href="item.url"
            class="text-black-200 mb-4 inline-block text-small-title-heading font-semibold"
          >
            {{ item.attributes.title }}
          </a>
        </h3>
        <p class="text-black-200 text-tiny-title-heading">
          {{ item.attributes.description }}
        </p>
      </div>
      <div class="flex justify-left mt-3">
        <ul>
          <li
            class="flex items-center"
            v-for="(blog, index) in item.attributes.learn_more_card_arrays.data"
            :key="index"
          >
            <i class="fas fa-check-circle text-green-200"></i>
            <span class="text-gray-700 text-lg ml-3">{{
              blog.attributes.blogs
            }}</span>
          </li>
        </ul>
      </div>
      <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row">
        <FormButton
          class="bg-white border-2 border-green-200 text-green-200 !important"
        >
          Learn More
        </FormButton>
      </div>
    </div>
  </article>
</template>

<script>
import FormButton from "@/components/common/Form/FormButton";
import { smallWhiteCardGetAll } from "@/services/home.js";

export default {
  name: "smallWhiteCard",
  components: {
    FormButton,
  },
  data() {
    return {
      items: [
        //   {
        //     date: 'Dec 22, 2023',
        //     title: 'Inventory Management',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //     blogs: [
        //   "Item 1", "Item 2", "Item 3"
        // ],
        //   },
        //   {
        //     date: 'Jan 15, 2024',
        //     title: 'Inventory Management',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //     blogs: [
        //   "Item 1",
        // ],
        //   },
        //   {
        //     date: 'Feb 10, 2024',
        //     title: 'Inventory Management',
        //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //     blogs: [
        //   "Item 1", "Item 2", "Item 3"
        // ],
        //   },
      ],
    };
  },
  async created() {
    try {
      const response = await smallWhiteCardGetAll();
      this.items = response.data.data.reverse();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
