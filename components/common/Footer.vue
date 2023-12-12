<template>
  <footer v-if="!loading" class=" bg-black-200">
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
        <div class="sm:col-span  ">
          <a href="#" class=" mr-6  inline-flex items-center">
            <img :src="computeURL(image)" alt="Image Alt Text" class="h-25 w-30 mr-2"/>

          </a>

          <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row ">
            <div>
              <div class="flex flex-col items-start mt-5 space-y-2 ">
                <a class="text-white  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                   v-for="(item, index) in columnOne" :key="index" @click="openNewTab(item)"
                   target="_blank" rel="noopener noreferrer">
                  {{ item.attributes.name }}</a>
              </div>
            </div>
          </div>
        </div>

        <div class=" mt-auto flex lg:justify-center lg:items-center ">
          <div class="flex flex-col items-start mt-5 space-y-2">
            <a class="text-white   dark:hover:text-blue-400 hover:underline hover:text-blue-500"
               v-for="(item, index) in columnTwo" :key="index" :href="item.attributes.link">
              {{ item.attributes.page }}
            </a>
          </div>
        </div>

        <div class="mt-auto lg:px-20 ">
          <p class=" text-white dark:text-white">Contact Info</p>
          <div class="flex flex-col items-start mt-5 space-y-2   justify-center">
            <p class="text-white ">{{ columnThree.address }}</p>
            <p class="text-white text-sm "><i :class="`fas fa-${columnThree.fontawsome_phone_icon_name}`"></i>
              {{ columnThree.telephone_number }}
            </p>
            <p class="text-white text-sm "><i :class="`fas fa-${columnThree.fontawsome_email_icon_name}`"></i>
              {{ columnThree.email }}
            </p>
            <p class="text-white text-sm "><i :class="`fas fa-${columnThree.fontawsome_copyright_icon_name}`"></i>
              {{ columnThree.copyright }}
            </p>
            <p class="text-white  ">WE’RE MOOS.</p>
            <div class="flex items-center justify-between">
              <div class="flex -mx-2">
                <a v-for="(item, index) in social" :key="index" :href="item.attributes.link"
                   class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                   target="_blank" rel="noopener noreferrer">
                  <i :class="`${item.attributes.fontawsome_icon_name}`" style="color: #F0F9F8"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {loading} from '@/store/store';
import {getFooter} from "../../services/footer";

export default {
  name: "Footer",
  data() {
    return {
      image: '',
      columnOne: [],
      columnTwo: [],
      columnThree: [],
      social: []
    }
  },
  computed: {
    loading() {
      return loading.value;
    },
  },
  async mounted() {
    const res = await getFooter();
    this.image = res.image.data.attributes.url;
    this.columnOne = res.footer_term_and_conditions.data;
    this.columnTwo = res.footer_pages.data;
    this.columnThree = res.footer_contacts.data[0].attributes;
    this.social = res.footer_contacts.data[0].attributes.WEARE_MOOS.data;
    console.log(this.social)
  },
  methods: {
    openNewTab(item) {
      localStorage.setItem('block1_title', item.attributes.name);
      localStorage.setItem('block1_content', item.attributes.content);
      window.open('dev.moos.nu/' + item.attributes.url_links, '_blank')
    }
  }
}
</script>

<style scoped></style>
