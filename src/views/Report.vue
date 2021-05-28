<template>
  <main
    class="
      container
      flex flex-col
      justify-center
      align-middle
      w-100
      h-screen
      px-4 space-y-24
    "
  >
    <hero />
    <Form />
  </main>
</template>

<script>
import Hero from "../components/SetUp.vue/Hero.vue";
import Form from "../components/SetUp.vue/Form.vue";
export default {
  components: {
    Hero,
    Form,
  },
};
</script>

<style></style>
