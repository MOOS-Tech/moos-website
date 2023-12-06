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
    />

    <!-- ====== Blog Section Start -->
    <Blogs data-aos="fade-up" data-aos-duration="1000"/>

    <!-- ====== Partner Section-->
    <PartnerCarousel
        :baseUrl="baseUrl"
        :partners="partners"
        :partnerImages="partnerImages"
    />

    <!-- ====== Quote Section-->
    <Quote
        :Quote="Quote"
        :Speaker="Speaker"
        :class="animate"/>

    <!-- ====== Card Sections-->
    <CardView
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

import {getTitle, getImages} from "@/services/home.js";
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
        this.ComTitle = response.data.data.attributes.CommonTitle
        this.boldText = response.data.data.attributes.boldText
        this.para = response.data.data.attributes.Paragraph

        const response1 = await getImages('1');
        this.imageSrc1 = this.baseUrl + response1.data.data.attributes.ImageUrl.data.attributes.formats.small.url;
        const response2 = await getImages('2');
        this.imageSrc2 = this.baseUrl + response2.data.data.attributes.ImageUrl.data.attributes.formats.small.url;
        const response3 = await getImages('3');
        this.imageSrc3 = this.baseUrl + response3.data.data.attributes.ImageUrl.data.attributes.formats.small.url;
      } catch (error) {
        console.error("Error fetching hero data:");
      }
    },
    async fetchPartnerSection() {
      try {
        const response = await getPatners();
        this.partners = response.data.data;
        this.partnerImages = this.partners.map(item => ({
          avatar: item.attributes.imageUrl.data.attributes.url,
        }));
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    async fetchQuotesSection() {
      try {
        const response = await getQuotes();
        this.Quote = response.data.data[0].attributes.Quote;
        this.Speaker = response.data.data[0].attributes.Speaker;
        this.quoteList = response.data.data;
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    async fetchCardViewsSection() {
      try {
        const response = await getCardViews();
        this.cards = response.data.data
        this.cardData = this.cards.map(card => ({
          title: card.attributes.title,
          description: card.attributes.description,
          url: card.attributes.ImageUrl.data.attributes.url,
        }));
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    changeQuote() {
      if (this.quoteList.length !== 0) {
        const randomIndex = Math.floor(Math.random() * this.quoteList.length);
        this.Quote = this.quoteList[randomIndex].attributes.Quote;
        this.Speaker = this.quoteList[randomIndex].attributes.Speaker;
        setTimeout(() => {

        }, 3000);
      }
    }
  }
};
</script>
<style scoped>

</style>
