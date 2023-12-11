<template>
    <div class=" py-10 sm:py-10" data-aos="fade-up" data-aos-duration="1000">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold  text-black-200  sm:text-3xl flex flex-col lg:flex-row">{{ team_sub_topic }}</h2>
            </div>
            <ul role="list" class="text-center mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none">
                <li v-for="(person) in people" :key="person.name" class="mb-10 lg:inline-block lg:w-1/3">
                    <div class="flex flex-col items-center">
                        <img class="mx-auto h-52 w-52" :src="person.imageUrl" alt="" />
                        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}
                        </h3>
                        <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
                        <div class="mt-2 flex justify-center gap-x-6">
                           
                                <a :href="person.linkedinUrl" target="_blank" class="text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">LinkedIn</span>
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            
                            </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>

import { getOurteam } from "@/services/about.js";
import { getSubTopics } from "../../services/home.js";
export default {
    name: "ourTeam",
    props: {
        people: [],
        baseUrl: String,
    },
    data() {
        return {
            people: [

            ],
            peopleData: [],
            team_sub_topic:""

        }
    },
    async created() {
        await this.fetchOurTeam();
        await this.getSubTopics();

    },
    methods: {
        async fetchOurTeam() {

            try {
                const response = await getOurteam();
                this.peopleData = response.data.data
                this.people = this.peopleData.map(person => ({
                    name: person.attributes.name,
                    imageUrl: person.attributes.image.data.attributes.url,
                    role: person.attributes.position,
                    linkedinUrl: person.attributes.LinkedIn
                }));

            } catch (error) {
                console.error("Error fetching  data:");
            }

        },
        async getSubTopics() {
      const id = '6';
     
      try {
        const response = await getSubTopics(id);
        this.team_sub_topic = response.data.data.attributes.topic

      
      } catch (error) {
        console.error("Error fetching data:");
      }
    },
    }
}
</script>
