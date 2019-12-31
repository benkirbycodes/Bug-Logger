<template>
  <div class="home container-fluid">
    <top @clicked="showAddForm" />
    <add-bug v-if="showAdd" @clicked="hideAddForm" />
    <!-- <modal id="add-bug">
      <div slot="modal-headline">Report A Bug</div>
      <form @submit.prevent="addBug" slot="input">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            required
            placeholder="What's the name of this issue?"
            name="title"
            class="form-control"
            type="text"
            v-model="newBug.title"
          />
          <label for="reported-by">Reported By</label>
          <input
            required
            placeholder="Who are you?"
            class="form-control"
            name="reported-by"
            type="text"
            v-model="newBug.reportedBy"
          />
          <label for="description">Description</label>
          <input
            required
            placeholder="What's the issue?"
            name="description"
            class="form-control"
            type="text"
            v-model="newBug.description"
          />
        </div>
        <button class="btn btn-outline-dark btn-lg">Submit Bug</button>
      </form>
    </modal>-->
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
              <th>Completed</th>
              <th>Reported By</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody v-show="showClosed" v-for="bug in bugs" :key="bug.id">
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
    addBug() {
      let bug = { ...this.newBug };
      console.log(this.$store.state.activeBug.id);
      this.$store.dispatch("addBug", bug); //.then(this.changeRoute);
      console.log(this.$store.state.activeBug.id);
      this.newBug = {
        closed: false,
        description: "",
        title: "",
        reportedBy: ""
      };
      this.changeRoute();
    },
    changeRoute() {
      this.$router.push({
        name: "bug",
        params: { id: this.$store.state.activeBug.id }
      });
    },
    showAddForm() {
      return (this.showAdd = true);
    },
    hideAddForm() {
      return (this.showAdd = false);
    },
    toggleShowHide() {}
  },
  components: {
    top,
    bugs,
    modal,
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
