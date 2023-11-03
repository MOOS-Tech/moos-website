<template>
    <section class="flex mb-16  justify-center bg-green-and-black" data-aos="fade-up" data-aos-duration="1000">
        <div class=" mx-auto w-full lg:max-w-7xl ">
            <div class="grid md:grid-cols-2 md:gap-12 lg:gap-48 pt-12 pb-12">

                <div class="flex justify-center md:justify-end w-full self-center">
                    <div class="overflow-y-auto w-full   " style="max-height: 400px;">
                        <div class="flex flex-col space-y-4 p-4">
                            <div v-for="card in cardData" :key="card.id" class="bg-white p-4 rounded-lg shadow-md">
                                <h2 class="text-regular-title-heading font-semibold">{{ card.title }}</h2>
                                <ul>
                                    <li v-for="description in card.qualifications" :key="description.id" class="sm:text-sm">
                                        <span class="text-green-500 mr-2">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        {{ description.text }}
                                    </li>
                                </ul>
                                <button class="bg-green-200 text-white px-4 py-1 rounded-lg mt-4">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="mt-6 mb-4 place-content-center ">
                    <div class="mb-6 text-center">
                        <h1 class="text-normal-title-heading font-bold text-black-200 ">Join with us</h1>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <FormSelectField v-model="PositionOptions" placeholder="Position" />
                        <FormInput v-model="customerName" type="text" name="name" id="name" placeholder="Name" />
                        <FormInput v-model="customerEmail" type="email" name="email" id="email" placeholder="Email" />
                        <FormInput v-model="customerLinkedin" type="text" name="linkedin" id="linkedin"
                            placeholder="LinkedIn Profile" />
                        <FormInput v-model="customerResume" name="Resume" id="Resume" placeholder="Upload Resume" />
                        <FormButton class="text-white" @click="Submitfn">Submit</FormButton>
                    </div>
                </section>
            </div>
        </div>

    </section>
</template>
<script>
import FormInput from "@/components/common/Form/FormInputField";
import FormButton from "@/components/common/Form/FormButton";
import FormSelectField from "@/components/common/Form/FormSelectField";
import FormLargeTextBox from "@/components/common/Form/FormLargeTextBox";
import { joinWithUs } from "@/services/about.js";

export default {
    name: "careers",
    props: {
        cards: [],
        cardData: [],
       

    },
    components: {
        FormInput,
        FormButton,
        FormSelectField,
        FormLargeTextBox


    },
    data() {
        return {
            customerName: "",
            customerEmail: "",
            PositionOptions: "Test",
            customerLinkedin: "",
            customerResume: "",
            cardData: [
                {
                    id: 1,
                    title: 'Card 1',
                    qualifications: [
                        { id: 1, text: 'Ability to liaise with stakeholders such as project personnel.' },
                        { id: 2, text: 'Description 2' },
                        { id: 3, text: 'Description 3' },
                    ],
                },
                {
                    id: 1,
                    title: 'Card 1',
                    qualifications: [
                        { id: 1, text: 'Description 1' },
                        { id: 2, text: 'Description 2' },
                        { id: 3, text: 'Description 3' },
                    ],
                },
                {
                    id: 1,
                    title: 'Card 1',
                    qualifications: [
                        { id: 1, text: 'Description 1' },
                        { id: 2, text: 'Description 2' },
                        { id: 3, text: 'Description 3' },
                    ],
                },
                {
                    id: 1,
                    title: 'Card 1',
                    qualifications: [
                        { id: 1, text: 'Description 1' },
                        { id: 2, text: 'Description 2' },
                        { id: 3, text: 'Description 3' },
                    ],
                },



            ],
        }
    },

    methods: {
        Submitfn() {
            let payload = {
                data: {
                    name: this.customerName,
                    email: this.customerEmail,
                    position: this.PositionOptions,
                    linkedIn_profile: this.customerLinkedin,
                    upload_resume: this.customerResume
                }

            }
            try {
                const response = joinWithUs(payload);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }
}
</script>
<style scoped>
.bg-green-and-black {
    background: linear-gradient(105deg, rgb(56, 150, 162) 50%, #CCEAE6 50%);
    /* Other styling properties for the div */
}

@media (max-width: 640px) {
    .bg-green-and-black {
        background: #CCEAE6;
    }
}
</style>