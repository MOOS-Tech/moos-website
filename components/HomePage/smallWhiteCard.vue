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
            href="javascript:void(0)"
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
          <li class="flex items-center" v-for="(item, index) in item.attributes.learn_more_card_arrays.data" :key="index">
            <i class="fas fa-check-circle text-green-200"></i>
            <span class="text-gray-700 text-lg ml-3">{{ item.attributes.blogs }}</span>
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
import axios from "axios";
export default {
  name: "smallWhiteCard",
  components: {
    FormButton,
  },
  data() {
    return {
      items:[
  {
    id: 1,
    attributes: {
      title: "Inventory Management 1",
      description: "Lorem Ipsum has been the industry's standard dummy text ever.",
      learn_more_card_arrays: {
        data: [
          {
            id: 1,
            attributes: {
              blogs: "Item 1",
            },
          },
          {
            id: 2,
            attributes: {
              blogs: "Item 2",
            },
          },
          {
            id: 3,
            attributes: {
              blogs: "Item 3",
             
            },
          },
        ],
      },
    },
  },
  {
    id: 1,
    attributes: {
      title: "Inventory Management 2",
      description: "Lorem Ipsum has been the industry's standard dummy text ever.",
      learn_more_card_arrays: {
        data: [
          {
            id: 1,
            attributes: {
              blogs: "Item 4",
            },
          },
          {
            id: 2,
            attributes: {
              blogs: "Item 5",
            },
          },
          {
            id: 3,
            attributes: {
              blogs: "Item 6",
             
            },
          },
        ],
      },
    },
  },
],
      // items: [
      //   {
      //     attributes: {
      //       date: "Dec 22, 2023",
      //       title: "Inventory Management 1",
      //       description:
      //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      //       blogs: ["Item 1", "Item 2", "Item 3"],
      //     },
      //   },
      //   {
      //     attributes: {
      //       date: "Jan 15, 2024",
      //       title: "Inventory Management 2",
      //       description:
      //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      //       blogs: ["Item 4", "Item 5", "Item 6"],
      //     },
      //   },
      //   {
      //     attributes: {
      //       date: "Feb 10, 2024",
      //       title: "Inventory Management 3",
      //       description:
      //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      //       blogs: ["Item 7", "Item 8", "Item 9"],
      //     },
      //   },
      // ],
    };
  },

  async mounted() {
    await axios
      .get("http://localhost:1337/api/learn-more-cards?populate=*")
      .then((response) => {
        console.log(response.data.data);
        this.items = response.data.data.reverse();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>
