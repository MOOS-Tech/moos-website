<template>
  <nav class="flex items-center bg-green-200 p-2 flex-wrap">
    <NuxtLink to="/" class="mr-6 ml-3 inline-flex items-center">
      <img src="@/assets/images/navbarLogo.png" alt="Image Alt Text" class="h-12 w-15 mr-2" />
    </NuxtLink>
    <button
      class="text-white inline-flex p-3 bg-opacity-25 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      data-target="#navigation" @click="toggleNav">
      <i class="fa-solid fa-bars text-white"></i>
    </button>
    <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation"
      :class="{ block: isNavOpen, hidden: !isNavOpen }">

      <div class="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <NuxtLink to="/services"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white">
          <span>Services</span>
        </NuxtLink>

        <div class="relative lg:w-auto w-full ">
          <button
            class="lg:inline-flex lg:w-auto w-full flex-grow px-5 py-2 rounded text-white items-center justify-between hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white text-left"
            @click="toggleDropdown">
            <div class="flex items-center group">
              <span class="flex-grow">Business Solution</span>
              <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
            </div>
          </button>
          <div v-if="isDropdownOpen"
            class="absolute top-12 w-full lg:w-80  bg-white border border-gray-300 rounded shadow-md z-10">
            <NuxtLink to="/business_solutions" class="block px-4 py-2  hover:bg-green-200 hover:border hover:border-green-200  hover:text-white !important"  @click="closeDropdown">
              <i class="fa fa-archive mr-2" aria-hidden="true"></i>
              Unmanned Retail
            </NuxtLink>
            <NuxtLink to="/business_solutions" class="block px-4 py-2  hover:bg-green-200 hover:border hover:border-green-200  hover:text-white !important"  @click="closeDropdown">
              <i class="fa fa-university mr-2" aria-hidden="true"></i>
              Warehousing Ops
            </NuxtLink>
            <NuxtLink to="/business_solutions" class="block px-4 py-2  hover:bg-green-200 hover:border hover:border-green-200  hover:text-white !important"  @click="closeDropdown">
              <i class="fa fa-home mr-2" aria-hidden="true"></i>
              Multiple Stock-keeping Locations
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/technology"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5  rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white">
          <span>Technology</span>
        </NuxtLink>

        <NuxtLink to="/our_company"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 mr-5  rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white">
          <span>Our Company</span>
        </NuxtLink>
      </div>

      <div
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <a class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center underline"
          href="#">
          <span>Login</span>
        </a>
        <a class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center" href="#">

          <FormButton
            class=" bg-white bg-opacity-25  border-white text-white rounded-md h-9 hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white">
            Book a Meeting
          </FormButton>

        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import FormButton from "@/components/common/Form/FormButton";
export default {
  name: "TopNavBar",
  components: {

    FormButton,

  },
  data() {
    return {
      isNavOpen: false, // Add a data property to track the navigation state
      isDropdownOpen: false, // added to track the dropdown state
    };
  },

  methods: {
    toggleNav() {
      // Toggle the navigation state when the button is clicked
      this.isNavOpen = !this.isNavOpen;

    },
    // Toggle the dropdown state when the button is clicked
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Rubik", sans-serif;
}

/* navigation
 - show navigation always on the large screen devices with (min-width:1024)
*/

@media (min-width: 1024px) {
  .top-navbar {
    display: inline-flex !important;
  }
}
</style>
