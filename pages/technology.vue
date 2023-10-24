<template>
  <div>
    <Card :imageUrl="data[0].imageUrl" :ComTitle="data[0].ComTitle" :Para="data[0].Para" :boldText="data[0].boldtext"  data-aos="fade-up"  data-aos-duration="1000"/>
    <div class="bg-green-400 " >
     <TechnologyCard  data-aos="fade-up"  data-aos-duration="1000"/>
     <!-- <div class="w-full h-auto">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/739/267/desktop-wallpaper-science-for-android-mobile-science-beautiful-landscape-android.jpg" style="width: 100%; height: 100%;" />
    </div> -->
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
