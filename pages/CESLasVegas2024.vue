<template>
    <div class="relative isolate pt-14">
        <div class="absolute inset-0 h-2/5 ">
            <div class="bg-green-100 h-2/3  w-full"></div>
        </div>

        <div class=" lg:pb-30 relative z-10">
            <div class="flex items-center space-x-2 pl-10">
                <a href="/" class="border border-black-200 text-black-200 rounded-full p-2 hover:bg-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </a>
                <a href="/" class="text-black-200 text-lg font-semibold">Home</a>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div class="mx-auto text-center ">
                    <h1 class="text-4xl font-bold tracking-tight text-black-200 sm:text-7xl">MOOS at CES Las Vegas 2024
                    </h1>

                </div>
                <div class="mx-auto flex items-center flex-col sm:flex-row justify-center">


                    <div class="mt-16 flow-root sm:mt-40 ">
                        <div class=" rounded-xl  p-2  lg:-m-4 lg:rounded-2xl lg:p-4  ">
                            <img src="@/assets/images/Lasvegas.jpg" alt="App screenshot" width="1100" height="900"
                                class="mx-auto rounded-md shadow-2xl ring-1 ring-gray-900/10 rotate-3" />
                        </div>
                    </div>
                </div>
                <p class="mt-20 sm:px-20 text-center text-lg leading-8 text-gray-600 font-semibold"> It is with great pride
                    and enthusiasm that
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
                            <h3 class="text-5xl text-black-200 pb-20 font-semibold">{{ goals.title }}</h3>
                            <p class="text-lg font-semibold text-gray-600 ">{{ goals.description }}</p>
                            <ul class="text-lg font-semibold text-gray-600 list-disc pl-5 text-left">
                                <li v-for="(point, index) in goals.CardBody" :key="index" >
                                    {{ point.point }}
                                </li>
                            </ul>
                            <p class="text-lg text-gray-600 pt-10 font-semibold">
                                Click <a :href="'mailto:' + goals.mail" class="underline">here</a> to set an appointment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto max-w-7xl mt-16 flow-root sm:mt-40 ">
                <div class=" rounded-xl  p-2  lg:-m-4 lg:rounded-2xl lg:p-4  ">
                    <img src="@/assets/images/CESImage.png" alt="App screenshot" width="1000" height="900"
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
                    description: "Meet us at CES to explore groundbreaking opportunities for businesses across Europe and the US. We're dedicated to enhancing inventory operations for visionary organizations in key industries: ",
                    CardBody:[
                        {
                            point:"(Autonomous) retail"
                        },
                        {
                            point:"Manufacturing and semiconductor"
                        },
                        {
                            point:"Logistics & e-Commerce operators"
                        }

                    ]
                },
                {
                    title: "For Partners",
                    mail: "sales@moos.nu",
                    description: "We are eager to connect with fellow tech visionaries at CES and forge new alliances. Our focus is on innovative game-changers in: ",
                    CardBody:[
                        {
                            point:"Inventory management software"
                        },
                        {
                            point:"Warehouse digitization"
                        },
                        {
                            point:"Facility management for large corporates & clean rooms"
                        },
                        {
                            point:"Distributors & field operators"
                        }

                    ]


                },
                {
                    title: "For Press",
                    mail: "press@moos.nu",
                    description: "At CES, we're thrilled to show our groundbreaking product to the world. We're excited to engage with tech- as well as industry-focused press outlets to showcase how we're revolutionizing inventory operations for global pioneers. Let's collaborate and shine the spotlight on this innovation together!"

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

  