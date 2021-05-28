<template>
  <main>
    <Header />
    <Nav />
    <SearchBar />
    <p class="px-4 text-xs ">Showing only sent reports for the last 6 months</p>
    <report-list v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>

<script>
import Header from "../components/History/Header";
import Nav from "../components/History/Nav.vue";
import ReportList from "../components/History/ReportList.vue";
import SearchBar from "../components/History/Search";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Nav,
    SearchBar,
    ReportList,
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
  computed: mapState(["events"]),
};
</script>

<style></style>
