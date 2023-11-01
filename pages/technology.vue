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
    <div class="bg-green-400 " >
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

  components: { Card,TechnologyCard, TechnologyCard },
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
        this.ComTitle = response.data.data.attributes.title.data.attributes.CommonTitle
        this.boldText = response.data.data.attributes.title.data.attributes.boldText
        this.Para = response.data.data.attributes.title.data.attributes.Paragraph
        this.imageUrl = response.data.data.attributes.ImageUrl.data.attributes.formats.small.url 
      } catch (error) {
        console.error("Error fetching  data:");
      }
     
    },
    async fetchProcessSection() {
     
     try {
       const response = await getTechProcess();
       this.cards = response.data.data
        this.cardData = this.cards.map(card => ({
          title: card.attributes.title,
          description: card.attributes.sub_title,
          imageUrl: card.attributes.ImageUrl.data.attributes.url,
        }));
      
     
     } catch (error) {
       console.error("Error fetching  data:");
     }
    
   },
  }


}

</script>

<style scoped></style>
