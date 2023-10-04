<template>
  <div>
    <CardImgRight
      :CardTitle="data[0].CardTitle"
      :CardBody="data[0].CardBody"
      :imageUrl="data[0].imageUrl"
      :ComTitle="data[0].ComTitle"
    />
    
    <div class="bg-green-50">
      <card :CardTitle="data[1].CardTitle" :CardBody="data[1].CardBody" :imageUrl="data[1].imageUrl" />
    </div>

    <CardImgRight
      :CardTitle="data[2].CardTitle"
      :CardBody="data[2].CardBody"
      :imageUrl="data[2].imageUrl"
    />
  </div>
</template>

<script>
import card from "~/components/common/services/cardImgLeft.vue";
import CardImgRight from "~/components/common/services/cardImgRight.vue";

const dummyData = [
  {
    ComTitle: 'E2E operating system',
    CardTitle: '',
    CardBody: [
      'Inventory management made worry free',
      'Transactions​',
      'Basis for new innovation roadmap',
    ],
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg',
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: 'Inventory management​',
    CardBody: [
      'Low stock triggers​',
      '​Auto reordering and replenishment',
      'Optimized replenishment schedule​',
    ],
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg',
  },
  {
    // ComTitle: 'E2E operating system 2',
    CardTitle: 'Transaction​',
    CardBody: [
      'Real time insights in what happens in store/warehouse​',
      'Basis for payments, order-checks, theft detection​',
      '(Re)supply detection & optimization ',
    ],
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg',
  },
  // Add more objects as needed
];

export default {
  components: { card, CardImgRight },
  name: "services",

  data() {
    return {
      data: dummyData, 
    };
  },
};
</script>


<style scoped>
</style>
