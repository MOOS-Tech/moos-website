<template>
    <div class="relative isolate pt-14">
        <div class="absolute inset-0 h-2/5 ">
            <div class="bg-green-100 h-2/3  w-full"></div>
        </div>
        <div class="py-24 sm:py-32 lg:pb-30 relative z-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div class="mx-auto text-center ">
                    <h1 class="text-4xl font-bold tracking-tight text-blaack-200 sm:text-7xl">MOOS at CES Las Vegas 2024
                    </h1>

                </div>
                <div class="mx-auto flex items-start flex-col sm:flex-row justify-between">
                    <div class="flex items-center space-x-2 ">
                        <a href="/" class="border border-black-200 text-black-200 rounded-full p-2 hover:bg-gray-400 sm:mt-40">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                    </a>
                    <a href="/" class="text-black-200 text-lg font-semibold sm:mt-40 ">Home</a>
                  </div>
                   
                    <div class="mt-16 flow-root sm:mt-40 ">
                        <div class=" rounded-xl  p-2  lg:-m-4 lg:rounded-2xl lg:p-4  ">
                            <img src="@/assets/images/Lasvegas.jpg" alt="App screenshot" width="1100" height="900"
                                class="mx-auto rounded-md shadow-2xl ring-1 ring-gray-900/10 rotate-3" />
                        </div>
                    </div>
                </div>
                <p class="mt-20 sm:px-20 text-lg leading-8 text-gray-600 font-semibold"> It is with great pride and enthusiasm that
                    we announce
                    that MOOS has been selected to be part of the Dutch mission to CES Las Vegas 2024, the largest
                    technology fair in the world!
                    MOOS introduces an innovative approach to digitize your shelves & racks for full visibility where it
                    happens: the MOOS effortless inventory operating system​.</p>
            </div>
        </div>
        <div class="">
            <div
                class="mx-auto max-w-7xl divide-y divide-black-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
                <div v-for="(goals, perkIdx) in Goals" :key="perkIdx" class="py-8 lg:w-1/3 lg:flex-none lg:py-0">
                    <div class="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                        <div class="ml-4 flex flex-auto flex-col">
                            <h3 class="text-5xl text-gray-900 pb-20 font-semibold">{{ goals.title }}</h3>
                            <p class="text-lg font-semibold text-gray-600 ">{{ goals.description }}</p>
                            <p class="text-lg text-gray-600 pt-10 font-semibold">
                                Click <a :href="'mailto:' + goals.mail" class="underline">here</a> to set an appointment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto max-w-7xl mt-16 flow-root sm:mt-40 ">
                <div class=" rounded-xl  p-2  lg:-m-4 lg:rounded-2xl lg:p-4  ">
                    <img src="@/assets/images/Lasvegas.jpg" alt="App screenshot" width="1100" height="900"
                        class="mx-auto rounded-md   " />
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    name: 'MyPage',
    data() {
        return {
            Goals: [
                {
                    title: "For Clients",
                    mail: "sales@moos.nu",
                    description: "Our main goal during CES is to meet potential partners to collaborate with. Specifically, organizations that offer complementary technologies like Learning Management Systems and Performance Tools."
                },
                {
                    title: "For Press",
                    mail: "press@moos.nu",
                    description: "We can't wait to show our product to the rest of the world! More information can be found in our press kit."
                }

            ]
        };
    },


}
</script>

<style>
.rotate-3 {
    transform: rotate(3deg);
}
</style>

  