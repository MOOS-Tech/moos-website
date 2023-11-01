<template>
  <div v-if="!loading">
    <div v-for="(item, index) in cardDetails" :key="index">

      <div v-if="index % 2 === 0">

        <CardImgRight
            :CardTitle="item.CardTitle"
            :CardBody="item.CardBody "
            :imageUrl="item.imageUrl"
            :ComTitle="item.ComTitle"
            :boldText="item.boldText"
            :Para="item.Para"
            :baseUrl="this.baseUrl"
            data-aos="fade-up" data-aos-duration="1000"
        />
      </div>
      <div v-else>
        <card
            :CardTitle="item.CardTitle"
            :CardBody="item.CardBody"
            :imageUrl="item.imageUrl"
            :Para="item.Para"
            :baseUrl="this.baseUrl"
            data-aos="fade-up" data-aos-duration="1000"
        />
      </div>
    </div>
  </div>
</template>

<script>
import card from "~/components/services/cardImgLeft.vue";
import CardImgRight from "~/components/services/cardImgRight.vue";
import {getAllServices} from "@/services/service"
import {loading, toggleLoading} from '../store/store';

export default {
  components: {card, CardImgRight},
  name: "services",

  data() {
    return {
      baseUrl: 'http://localhost:1337',
      cards: [],
      cardDetails: [],
      CardTitle: "",
      CardBody: [],
      imageUrl: "",
      ComTitle: "",
      boldText: "",
      Para: ""
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
    await this.fetchAllServices();
    toggleLoading(false);
  },

  methods: {
    async fetchAllServices() {
  
      try {
        const response = await getAllServices();
        this.cards = response.data.data
        console.log(this.cards);
        this.cardDetails = this.cards.map(item => ({
          CardTitle: item.attributes.CardTitle,
          CardBody: item.attributes.service_card_bodies.data,
          ComTitle: item.attributes.ComTitle,
          imageUrl: item.attributes.imageUrl.data.attributes.url,
          boldText: item.attributes.boldtext,
          Para: item.attributes.Paragraph,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
    }
  }
};
</script>


<style scoped>
</style>
