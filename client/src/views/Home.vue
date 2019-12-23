<template>
  <div class="home container-fluid">
    <top />
    <div class="row">
      <add-bug />
      <div class="col-12">{{ bugs }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import top from "@/components/Top";
import addBug from "@/components/AddBug";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },

  components: {
    top,
    addBug
  },
  computed: {
    bugs() {
      console.log(this.$store.state.bugs);
      return this.$store.state.bugs;
    }
  }
};
</script>
