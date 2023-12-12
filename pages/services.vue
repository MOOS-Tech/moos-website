<template>
  <div v-if="!loading">
    <div>
      <ServiceHeroSection  :CardBody="heroCardbody" :imageUrl="heroimageUrl" :ComTitle="heroTitle"
        :boldText="heroBold" :Para="heroPara" :baseUrl="this.baseUrl" data-aos="fade-up" data-aos-duration="1000" />
    </div>
    <div v-for="(item, index) in cardDetails" :key="index" :id="'section-' + index " ref="sections">

      <div v-if="index % 2 === 0">
        <card :CardTitle="item.CardTitle" :CardBody="item.CardBody" :imageUrl="item.imageUrl" :Para="item.Para"
          :baseUrl="this.baseUrl" data-aos="fade-up" data-aos-duration="1000" />
        
      </div>
      <div v-else>
       
          <ServiceCardRight :CardTitle="item.CardTitle" :CardBody="item.CardBody" :imageUrl="item.imageUrl"
          :ComTitle="item.ComTitle" :boldText="item.boldText" :Para="item.Para" :baseUrl="this.baseUrl" data-aos="fade-up"
          data-aos-duration="1000" />
      </div>
    </div>
  </div>
</template>

<script>
import card from "~/components/services/cardImgLeft.vue";
import CardImgRight from "~/components/services/cardImgRight.vue";
import { getAllServices, getServiceTitle } from "@/services/service"
import { loading, toggleLoading } from '../store/store';
import ServiceCardRight from '~/components/services/serviceCardRight.vue';
import ServiceHeroSection from '~/components/services/serviceHeroSection.vue';

export default {
  components: { card, CardImgRight, ServiceCardRight, ServiceHeroSection },
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
      heroTitle: "",
      heroPara: "",
      heroimageUrl: "",
      heroCardbody: [],
      heroBold: "",
      ID:""


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
    await this.fetchTitlesection();
    toggleLoading(false);
  },

  methods: {
    async fetchTitlesection() {
      try {
        const response = await getServiceTitle();
        try {
          this.heroTitle = response.data.data[0].attributes.common_title.data.attributes.CommonTitle
        } catch (e) {
          this.heroTitle = "";
        }
        try {
          this.heroBold = response.data.data[0].attributes.common_title.data.attributes.boldText
        } catch (e) {
          this.heroBold = "";
        }
        try {
          this.heroPara = response.data.data[0].attributes.common_title.data.attributes.Paragraph
        } catch (e) {
          this.heroPara = "";
        }
        try {
          this.heroimageUrl = response.data.data[0].attributes.ImageUrl.data.attributes.formats.small.url
        } catch (e) {
          this.heroimageUrl = "";
        }
        try {
          this.heroCardbody = response.data.data[0].attributes.points.data.map(data => (data.attributes.bullet_point));
        } catch (e) {
          this.heroCardbody = "";
        }
      } catch (error) {
        console.error("Error fetching  data:");
      }
    },

    async fetchAllServices() {
      try {
        const response = await getAllServices();
        this.cards = response.data.data
        console.log(this.cards);
        // this.cardDetails = this.cards.map(item => ({
        //   CardTitle: item.attributes.CardTitle,
        //   CardBody: item.attributes.service_card_bodies.data,
        //   ComTitle: item.attributes.ComTitle,
        //   imageUrl: item.attributes.imageUrl.data.attributes.url,
        //   boldText: item.attributes.boldtext,
        //   Para: item.attributes.Paragraph,
        // }));
        for (let i = 0; i < this.cards.length; i++) {
          let card = {};
          try {
            card.CardTitle = this.cards[i].attributes.CardTitle
          } catch (e) {
            card.CardTitle = "";
          }
          try {
            card.CardBody = this.cards[i].attributes.service_card_bodies.data
          } catch (e) {
            card.CardBody = "";
          }
          try {
            card.ComTitle = this.cards[i].attributes.ComTitle
          } catch (e) {
            card.ComTitle = "";
          }
          try {
            card.imageUrl = this.cards[i].attributes.imageUrl.data.attributes.url
          } catch (e) {
            card.imageUrl = "";
          }
          try {
            card.boldText = this.cards[i].attributes.boldtext
          } catch (e) {
            card.boldText = "";
          }
          try {
            card.Para = this.cards[i].attributes.Paragraph
          } catch (e) {
            card.Para = "";
          }
          this.cardDetails.push(card);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    scrollToTargetSection() {
      this.indexFromUrl = parseInt(this.$route.query.index, 10);
      if (this.indexFromUrl === 1) {
        const targetSection = this.$refs.sections[0];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (this.indexFromUrl === 2) {
        const targetSection = this.$refs.sections[1];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (this.indexFromUrl === 3) {
        const targetSection = this.$refs.sections[2];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
};
</script>


<style scoped></style>
