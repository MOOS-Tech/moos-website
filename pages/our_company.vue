<template>
  <div>
    <Card
      :CardTitle="data[0].CardTitle"
      :CardBody="data[0].CardBody"
      :imageUrl="data[0].imageUrl"
      :ComTitle="data[0].ComTitle"
      :Para="data[0].Para"
    />
    
      <div class="bg-green-50">
      
        <card
        :CardTitle="data[1].CardTitle"
        :CardBody="data[1].CardBody"
        :imageUrl="data[1].imageUrl"
      />
    
    </div>
      <!-- ====== Map and the Contact Section-->
      <MapAndContact/>
  </div>
</template>

<script>
import Card from "~/components/business/card.vue";
import MapAndContact from '~/components/HomePage/mapAndContact.vue';
import CardImgRight from "~/components/services/cardImgRight.vue";

export default {
  components: { Card, MapAndContact,CardImgRight },
  name: "our_company",

  data() {
    return {
      data: dummyData,
    };
  },
};
const dummyData = [
  {
    ComTitle: "<br/>for unmanned retail​",
    CardTitle: "Typical challenges for unmanned retail companies​",
    Para: "​Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",
    CardBody: [
      "In lorem mi, hendrerit a malesuada in, eleifend.",
      "Maecenas volutpat tristique nibh.",
      "Nam sit amet diam in orci consequat placerat.",
    ],
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: "Inventory management​",
    CardBody: [
      "Low stock triggers​",
      "​Auto reordering and replenishment",
      "Optimized replenishment schedule​",
    ],
    imageUrl:
      "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg",
  },
];
</script>

<style scoped>

</style>
