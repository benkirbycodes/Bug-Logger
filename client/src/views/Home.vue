<template>
  <div class="home container-fluid">
    <top @clicked="showAddForm" />
    <add-bug v-if="showAdd" @clicked="hideAddForm" />

    <div class="row">
      <div class="col-6 pb-5 mx-auto"></div>

      <div class="col-12">
        <h3>Current Bugs:</h3>
        <label for="show-hide">Show/Hide Closed Bugs</label>
        <input type="checkbox" name="show-hide" v-on:click="showClosed = !showClosed" />
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Reported By</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody v-for="bug in bugs" :key="bug.id">
            <bugs :bugData="bug" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import modal from "@/components/Modal";
import top from "@/components/Top";
import bugs from "@/components/Bugs";
import addBug from "@/components/AddBug";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  data() {
    return {
      newBug: {
        closed: false,
        description: "",
        title: "",
        reportedBy: ""
      },
      showAdd: false,
      showClosed: true
    };
  },

  methods: {
    showAddForm() {
      return (this.showAdd = true);
    },
    hideAddForm() {
      return (this.showAdd = false);
    }
  },
  components: {
    top,
    bugs,
    modal,
    addBug
  },
  computed: {
    bugs() {
      return this.$store.state.bugs.filter(
        bug => this.showClosed || !bug.closed
      );
    }
  }
};
</script>
