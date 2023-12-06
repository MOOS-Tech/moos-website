<template>
  <article v-for="(item, index) in itemCards" :key="index"
    class="relative isolate flex flex-col justify-end shadow-3xl bg-white rounded-md p-10 ">
    <div class=" justify-between h-full">
      <div>
        <h3>
          <a :href="item.url" class="text-black-200 mb-4 inline-block text-small-title-heading font-semibold">
            {{ item.title }}
          </a>
        </h3>
        <p class="text-black-200 text-tiny-title-heading">
          {{ item.description }}
        </p>
      </div>
      <div class="flex justify-left mt-3 ">
        <ul>
          <li class="flex items-start" v-for="(blog, index) in item.blogs" :key="index">
            <i class="fas fa-check-circle text-green-200 mt-2"></i>
            <span class="text-gray-700 text-lg ml-3 ">{{
              blog
            }}</span>
          </li>
        </ul>
      </div>

    </div>
    <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row ">
      <FormButton class="bg-white border-2 border-green-200 text-green-200 !important">
        Learn More
      </FormButton>
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
      items: [],
      itemCards: []
    };
  },
  async created() {
    try {
      const response = await smallWhiteCardGetAll();
      this.items = response.data.data;

      this.itemCards = this.items.map(item => ({
        title: item.attributes.title,
        description: item.attributes.description,
        url: item.url,
        blogs: item.attributes.learn_more_card_arrays.data.map(blog => blog.attributes.blogs),
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
