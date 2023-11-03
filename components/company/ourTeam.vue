<template>
    <div class=" py-10 sm:py-10" data-aos="fade-up" data-aos-duration="1000">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold  text-black-200  sm:text-3xl flex flex-col lg:flex-row">Meet our team</h2>
            </div>
            <ul role="list" class="text-center mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none">
                <li v-for="(person) in people" :key="person.name" class="mb-10 lg:inline-block lg:w-1/3">
                    <div class="flex flex-col items-center">
                        <img class="mx-auto h-52 w-52" :src="baseUrl + person.imageUrl" alt="" />
                        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}
                        </h3>
                        <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
                        <ul role="list" class="mt-6 flex justify-center gap-x-6">
                            <li>
                                <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">LinkedIn</span>
                                    <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                     
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>


export default {
    name: "ourTeam",
props:{
people:[],
baseUrl: String,
},
    data() {
        return {
            people: [
                {
                    name: 'Whitney Francis',
                    role: 'Copywriter',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                {
                    name: 'Whitney Francis',
                    role: 'Copywriter',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                {
                    name: 'Whitney Francis',
                    role: 'Copywriter',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                {
                    name: 'Whitney Francis',
                    role: 'Copywriter',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                {
                    name: 'Whitney Francis',
                    role: 'Copywriter',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                

            ]

        }
    },
}
</script>
