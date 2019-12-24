<template>
  <div class="home container-fluid">
    <top />
    <div class="row">
      <add-bug />

      <bugs />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import top from "@/components/Top";
import addBug from "@/components/AddBug";
import bugs from "@/components/Bugs";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },

  components: {
    top,
    addBug,
    bugs
  },
  computed: {
    bugs() {
      console.log(this.$store.state.bugs);
      return this.$store.state.bugs;
    }
  }
};
</script>
