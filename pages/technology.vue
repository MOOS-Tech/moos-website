<template>
  <div v-if="!loading">
    <Card
    data-aos="fade-up"
    data-aos-duration="1000"
    :imageUrl="imageUrl"
    :ComTitle="ComTitle"
    :Para="Para"
    :boldText="boldText"
    :baseUrl="baseUrl"
    />
    <div class=" bg-green-50" >
     <TechnologyCard :cardData="cardData" data-aos="fade-up"  data-aos-duration="1000"/>
     <!-- <div class="w-full h-auto">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg" style="width: 100%; height: 100%;" />
    </div> -->
    </div>



  </div>
</template>

<script>
import Card from "~/components/business/card.vue";
import TechnologyCard from "~/components/Technology/technolgyCard.vue";
import {loading, toggleLoading} from '../store/store';
import {getTechnologyTitle,getTechProcess} from "@/services/technology.js";
export default {
  name: "technology",

  components: { Card,TechnologyCard },
  data() {
    return {
      baseUrl: 'http://localhost:1337',
      ComTitle: "",
      boldText: "",
      Para: "",
      imageUrl:"" ,
      cards: [],
      cardData: []
    };
  },
  computed: {
    loading() {
      return loading.value;
    },
  },
  async created() {
    toggleLoading(true);
    const config = useRuntimeConfig();
    this.baseUrl = config.public.API_URL?config.public.API_URL:'http://localhost:1337';
    await this.fetchTitleSection();
    await this.fetchProcessSection();
    toggleLoading(false);

  },
  methods: {
    async fetchTitleSection() {
      try {
        const response = await getTechnologyTitle();
        try {
          this.ComTitle = response.data.data.attributes.title.data.attributes.CommonTitle
        } catch (e) {
          this.ComTitle = "";
        }
        try {
          this.boldText = response.data.data.attributes.title.data.attributes.boldText
        } catch (e) {
          this.boldText = "";
        }
        try {
          this.Para = response.data.data.attributes.title.data.attributes.Paragraph
        } catch (e) {
          this.Para = "";
        }
        try {
          this.imageUrl = response.data.data.attributes.ImageUrl.data.attributes.formats.small.url
        } catch (e) {
          this.imageUrl = "";
        }
      } catch (error) {
        console.error("Error fetching  data:");
      }

    },
    async fetchProcessSection() {

     try {
       const response = await getTechProcess();
       this.cards = response.data.data
       // this.cardData = this.cards.map(card => ({
       //   title: card.attributes.title,
       //   description: card.attributes.sub_title,
       //   techText: card.attributes.tech_flow_text,
       //   imageUrl: card.attributes.imageUrl.data.attributes.formats.small.url,
       // }));
       for (let i = 0; i < this.cards.length; i++) {
         let tech = {};
         try {
           tech.title = this.cards[i].attributes.title;
         } catch (e) {
           tech.title = "";
         }
         try {
           tech.description = this.cards[i].attributes.sub_title;
         } catch (e) {
           tech.description = "";
         }
         try {
           tech.techText = this.cards[i].attributes.tech_flow_text;
         } catch (e) {
           tech.techText = "";
         }
         try {
           tech.imageUrl = this.cards[i].attributes.imageUrl.data.attributes.formats.small.url;
         } catch (e) {
           tech.imageUrl = "";
         }
         this.cardData.push(tech);
       }
     } catch (error) {
       console.error("Error fetching  data:");
     }

   },
  }


}

</script>


<style scoped>
/* .gradient{
  background: linear-gradient(31deg, #109888 0%, rgba(0, 0, 0, 0.00) 66.65%), linear-gradient(113deg, #109888 13.43%, rgba(0, 0, 0, 0.00) 60.88%), linear-gradient(159deg, #109888 0.86%, rgba(0, 0, 0, 0.00) 46.58%), linear-gradient(180deg, #109888 0%, rgba(16, 152, 136, 0.00) 100%), linear-gradient(233deg, #109888 32.46%, rgba(0, 0, 0, 0.00) 82.24%), #FFF;
} */
</style>
