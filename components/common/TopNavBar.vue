<template>
  <nav class="flex items-center bg-green-200 p-2 flex-wrap">
    <NuxtLink to="/" class="mr-6 ml-3 inline-flex items-center">
      <img
        src="@/assets/images/navbarLogo.png"
        alt="Image Alt Text"
        class="h-12 w-15 mr-2"
      />
    </NuxtLink>
    <button
      class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      data-target="#navigation"
      @click="toggleNav"
    >
      <i class="material-icons">menu</i>
    </button>
    <div
      class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
      id="navigation"
      :class="{ block: isNavOpen, hidden: !isNavOpen }"
    >
      <div
        class="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
      >
        <NuxtLink
          to="/services"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
        >
          <span>Services</span>
        </NuxtLink>
        <NuxtLink
          to="/business_solutions"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
        >
          <span>Business Solution</span>
        </NuxtLink>
        <NuxtLink
          to="/technology"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
        >
          <span>Technology</span>
        </NuxtLink>
        <NuxtLink
          to="/our_company"
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white"
        >
          <span>Our Company</span>
        </NuxtLink>
      </div>
      <div
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
      >
        <a
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center underline"
          href="#"
        >
          <span>Login</span>
        </a>
        <a
          class="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white items-center justify-center"
          href="#"
        >
          <span>Book a Meeting</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavBar",

  data() {
    return {
      isNavOpen: false, // Add a data property to track the navigation state
    };
  },

  methods: {
    toggleNav() {
      console.log("clciked");
      // Toggle the navigation state when the button is clicked
      this.isNavOpen = !this.isNavOpen;
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
