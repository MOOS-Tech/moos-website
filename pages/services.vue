<template>
  <div v-if="!loading">
    <div v-for="(item, index) in cardDetails" :key="index" :id="'section-' + index" ref="sections">

      <div v-if="index % 2 === 0">

        <!-- <CardImgRight
            :CardTitle="item.CardTitle"
            :CardBody="item.CardBody "
            :imageUrl="item.imageUrl"
            :ComTitle="item.ComTitle"
            :boldText="item.boldText"
            :Para="item.Para"
            :baseUrl="this.baseUrl"
            data-aos="fade-up" data-aos-duration="1000"
        /> -->
        <ServiceCardRight :CardTitle="item.CardTitle" :CardBody="item.CardBody" :imageUrl="item.imageUrl"
          :ComTitle="item.ComTitle" :boldText="item.boldText" :Para="item.Para" :baseUrl="this.baseUrl" data-aos="fade-up"
          data-aos-duration="1000" />
      </div>
      <div v-else>
        <card :CardTitle="item.CardTitle" :CardBody="item.CardBody" :imageUrl="item.imageUrl" :Para="item.Para"
          :baseUrl="this.baseUrl" data-aos="fade-up" data-aos-duration="1000" />
      </div>
    </div>
  </div>
</template>

<script>
import card from "~/components/services/cardImgLeft.vue";
import CardImgRight from "~/components/services/cardImgRight.vue";
import { getAllServices } from "@/services/service"
import { loading, toggleLoading } from '../store/store';
import ServiceCardRight from '~/components/services/serviceCardRight.vue';

export default {
  components: { card, CardImgRight, ServiceCardRight },
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
      Para: "",
      indexFromUrl: null,
      sectionRefs: [],
    };
  },
  computed: {
    loading() {
      return loading.value;
    },
  },
  // mounted() {
  //   const shouldScroll = this.$route.query.scrollToTarget === 'true';

  //   if (shouldScroll) {
  //     this.scrollToTargetSection();
  //     console.log("scroll")
  //   }
  // },
  updated() {
    const shouldScroll = this.$route.query.scrollToTarget === 'true';

    if (shouldScroll) {
      this.scrollToTargetSection();
      console.log("scroll")
    }
  },
  async created() {
    toggleLoading(true);
    const config = useRuntimeConfig();
    this.baseUrl = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
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

    },
    scrollToTargetSection() {
      this.indexFromUrl = parseInt(this.$route.query.index, 10);

      if (this.indexFromUrl === 0) {
       
          const targetSection = this.$refs.sections[1];
          console.log("targetSection:", targetSection);

          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
       
      }else if (this.indexFromUrl === 1) {
      
          const targetSection = this.$refs.sections[2];
          console.log("targetSection:", targetSection);

          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      
    } else if (this.indexFromUrl === 2) {
     
          const targetSection = this.$refs.sections[3];
          console.log("targetSection:", targetSection);

          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
       
    }
    },






  }
};
</script>


<style scoped></style>
