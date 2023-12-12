<template>
  <div v-if="!loading">
    <!-- hero section -->
    <HeroSection data-aos="fade-up" data-aos-duration="1000"
                 :imageSrc1="imageSrc1"
                 :imageSrc2="imageSrc2"
                 :imageSrc3="imageSrc3"
                 :ComTitle="ComTitle"
                 :boldText="boldText"
                 :para="para"
                 :baseUrl ="baseUrl"
    />

    <!-- ====== Blog Section Start -->
    <Blogs data-aos="fade-up" data-aos-duration="1000"/>

    <!-- ====== Partner Section-->
    <PartnerCarousel
    v-if = " this.partners.length !== 0  "
        :baseUrl="baseUrl"
        :partners="partners"
        :partnerImages="partnerImages"
        :partner_sub_topic="partner_sub_topic"
    />

    <!-- ====== Quote Section-->
    <Quote
    v-if="Quote.length > 0"
        :Quote="Quote"
        :Speaker="Speaker"
        :class="animate"/>

    <!-- ====== Card Sections-->
    <CardView
    v-if="cardData.length > 0"
        :baseUrl="baseUrl"
        :cards="cards"
        :cardData="cardData"/>

    <!-- ====== Map and the Contact Section-->
    <MapAndContact/>
    <FloatingButton/>
  </div>
</template>

<script>

import Blogs from "~/components/HomePage/blogs.vue";
import MapAndContact from "~/components/HomePage/mapAndContact.vue";
import HeroSection from "~/components/HomePage/heroSection.vue";
import PartnerCarousel from "~/components/HomePage/partnerCarousel.vue";
import Quote from "~/components/HomePage/quote.vue";
import CardView from '~/components/HomePage/cardView.vue';

import {loading, toggleLoading} from '../store/store';

import {getTitle, getImages,getSubTopics} from "@/services/home.js";
import {getPatners} from "@/services/home.js";
import {getQuotes} from "@/services/home.js";
import {getCardViews} from "@/services/home.js";
import FloatingButton from '~/components/common/FloatingButton.vue';

export default {
  name: "index",
  components: {
    Blogs,
    MapAndContact,
    HeroSection,
    PartnerCarousel,
    Quote,
    CardView,
    FloatingButton
  },
  computed: {
    loading() {
      return loading.value;
    },
  },
  data() {
    return {
      //hero
      ComTitle: "",
      imageSrc2: "",
      imageSrc3: "",
      imageSrc1: "",
      boldText: "",
      para: "",

      //partner
      baseUrl: 'http://localhost:1337',
      partners: [],
      partnerImages: [],
      partner_sub_topic:"",

      //quote
      Quote: '',
      Speaker: '',

      //cards
      cards: [],
      cardData: [],
      quoteList: [],
      interval: null,
      animate: 'transition-opacity',
    };
  },
  async created() {
    toggleLoading(true);
    const config = useRuntimeConfig();
    this.baseUrl = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
    await this.fetchHeroSection();
    await this.fetchPartnerSection();
    await this.fetchQuotesSection();
    await this.fetchCardViewsSection();
    await this.getSubTopics();
    toggleLoading(false);
    this.interval = setInterval(this.changeQuote, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    async fetchHeroSection() {
      try {
        const response = await getTitle();
        try {
          try {
            this.ComTitle = response.data.data.attributes.CommonTitle;
          } catch (e) {
            this.ComTitle = '';
          }

          try {
            this.boldText = response.data.data.attributes.boldText;
          } catch (e) {
            this.boldText = '';
          }

          try {
            this.para = response.data.data.attributes.Paragraph;
          } catch (e) {
            this.para = '';
          }

          try {
            const response1 = await getImages('1');
            this.imageSrc1 = response1.data.data.attributes.ImageUrl.data.attributes.formats.small.url;
          } catch (e) {
            this.imageSrc1 = '';
          }

          try {
            const response2 = await getImages('2');
            this.imageSrc2 = response2.data.data.attributes.ImageUrl.data.attributes.formats.small.url;
          } catch (e) {
            this.imageSrc2 = '';
          }

          try {
            const response3 = await getImages('3');
            this.imageSrc3 = response3.data.data.attributes.ImageUrl.data.attributes.formats.small.url;
          } catch (e) {
            this.imageSrc3 = '';
          }
        } catch (error) {
          // Handle or log the error as needed for the outer try block
          console.error('Error occurred while processing data', error);
        }
      } catch (error) {
        console.error("Error fetching hero data:");
      }
    },
    async fetchPartnerSection() {
      try {
        const response = await getPatners();
        this.partners = response.data.data;
        this.partnerImages = this.partners.map(item => {
          try {
            let avatar;
            try {
              avatar = item.attributes.imageUrl.data.attributes.url;
            } catch (e) {
              avatar = '';
            }
            return {avatar};
          } catch (e) {
            console.error('Error in mapping partners:', e);
            return {};
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchQuotesSection() {
      try {
        const response = await getQuotes();
        try {
          this.Quote = response.data.data[0].attributes.Quote;
        } catch (e) {
          this.Quote = "";
        }
        try {
          this.Speaker = response.data.data[0].attributes.Speaker;
        } catch (e) {
          this.Speaker = "";
        }
        try {
          this.quoteList = response.data.data;
        } catch (e) {
          this.quoteList = "";
        }
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    async fetchCardViewsSection() {
      try {
        const response = await getCardViews();
        this.cards = response.data.data;
        this.cardData = this.cards.map(card => {
          try {
            let title;
            try {
              title = card.attributes.title;
            } catch (e) {
              title = '';
            }

            let description;
            try {
              description = card.attributes.description;
            } catch (e) {
              description = '';
            }

            let url;
            try {
              url = card.attributes.ImageUrl.data.attributes.url;
            } catch (e) {
              url = '';
            }

            return {title, description, url};
          } catch (e) {
            console.error('Error in mapping card data:', e);
            return {};
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    changeQuote() {
      if (this.quoteList.length !== 0) {
        const randomIndex = Math.floor(Math.random() * this.quoteList.length);
        try {
          this.Quote = this.quoteList[randomIndex].attributes.Quote;
        } catch (e) {
          this.Quote = "N/A";
        }
        try {
          this.Speaker = this.quoteList[randomIndex].attributes.Speaker;
        } catch (e) {
          this.Speaker = "N/A";
        }
        setTimeout(() => {
        }, 3000);
      }
    },
    async getSubTopics() {
      const id = '1';
      try {
        const response = await getSubTopics(id);
        this.partner_sub_topic = response.data.data.attributes.topic
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
  }
};
</script>
<style scoped>

</style>
