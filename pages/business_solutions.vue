<template>
  <div>
    <Card
    :CardTitle="data[0].CardTitle"
      :CardBody="data[0].CardBody"
      :imageUrl="data[0].imageUrl"
      :ComTitle="data[0].ComTitle"
      :Para="data[0].Para"
      />
      <div>
      <GetStart/>
      </div>
     
  </div>
    
</template>

<script>
import Card from '~/components/common/business/card.vue';
import GetStart from '~/components/common/business/GetStart.vue';

const dummyData = [
  {
    ComTitle: '<br/>for unmanned retail​',
    CardTitle: 'Typical challenges for unmanned retail companies​',
    Para:'​Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.',
    CardBody: [
      'In lorem mi, hendrerit a malesuada in, eleifend.',
      'Maecenas volutpat tristique nibh.',
      'Nam sit amet diam in orci consequat placerat.',
    ],
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg',
  },
  ];

export default {
  components: {Card , GetStart},
  name: "business_solutions",

  data() {
    return {
      data: dummyData, 
    };
  },
}


</script>

<style >

</style>
