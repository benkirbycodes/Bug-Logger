<template>
  <div class="home container-fluid">
    <top />
    <div class="row">
      <div class="col-6 pb-5 mx-auto">
        <add-bug />
      </div>

      <div class="col-12">
        <h3>Current Bugs:</h3>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Completed</th>
              <th>Reported By</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody v-for="bug in bugs" :key="bug.id">
            <bugs :bugData="bug" />
          </tbody>
        </table>
      </div>
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

  methods: {},
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
