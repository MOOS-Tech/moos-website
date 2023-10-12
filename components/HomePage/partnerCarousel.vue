<template>
    <section class="pt-20 lg:max-w-7xl w-full sm:px-10 md:px-12 px-5 lg:px-10 flex mx-auto flex-col justify-center">
        <div class="mx-auto max-w-2xl lg:mx-0">
            <h3 class="font-bold text-small-title-heading text-black-100">OUR PARTNERS</h3>
        </div>
        <div class=" py-5 pb-10 ">
            <div class="mx-auto max-w-5xl px-6 lg:px-8 lg-flex-row">
                <!-- <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 " v-for="(item, index) in partners"
              :key="index" src="@/assets/images/VueJS.png" alt="Transistor" width="158" height="48" />
          </div> -->
            </div>
        </div>

    </section>

    <div
        class="w-full inline-flex flex-nowrap  overflow-hidden mask-container">
        <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li v-for="(item, index) in partners" :key="index">
                <img src="@/assets/images/VueJS.png" alt="Transistor" width="158" height="48" />
            </li>

        </ul>
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true">
            <li v-for="(item, index) in partners" :key="index">
                <img src="@/assets/images/VueJS.png" alt="Transistor" width="158" height="48" />
            </li>

        </ul>
    </div>
</template>
<script>
export default {

    name: "partner carousel",
    data() {
        return {

            partners: [
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
                },

            ],
        }
    }
}
</script>
<style scoped>



.mask-container {
    mask-image: linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%);
}

</style>
