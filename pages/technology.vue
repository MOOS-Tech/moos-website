<template>
  <div>
    <Card :imageUrl="data[0].imageUrl" :ComTitle="data[0].ComTitle" :Para="data[0].Para" :boldText="data[0].boldtext"/>
    <div class="bg-green-400 ">
     <TechnologyCard/>
    </div>
    


  </div>
</template>

<script>
import Card from "~/components/business/card.vue";
import TechnologyCard from "~/components/Technology/technolgyCard.vue";
export default {
  name: "technology",

  components: { Card,TechnologyCard, TechnologyCard },
  data() {
    return {
      data: dummyData,
    };
  },



}
const dummyData = [
  {
    boldtext : "MOOS",
    ComTitle: "the operating system for inventory management​​",
    Para: "Donec sit amet leo quis lectus malesuada viverra eu in libero. Donec purus ligula, ultrices at metus sed, porta semper libero. Cras consequat felis vel.",

    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg",
  },
]
</script>

<style scoped></style>
