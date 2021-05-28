<template>
  <nav class="w-full h-full bg-green-700 navigation">
    <ul class="flex flex-row">
      <router-link
        to="#"
        class="py-5 text-sm text-gray-100 leading-4 nav__link text-center"
        >Report</router-link
      >
      <router-link
        to="#"
        class="py-5 text-sm text-gray-100 leading-4 nav__link text-center"
        >Notification</router-link
      >
      <router-link
        to="#"
        class="py-5 text-sm text-gray-100 leading-4 nav__link text-center"
        >History</router-link
      >
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav__link {
  width: 9rem;
}
.nav__link:hover {
  border-bottom: 2px solid #ffffff;
}
.navigation {
  background-color: #004d17;
}
</style>
