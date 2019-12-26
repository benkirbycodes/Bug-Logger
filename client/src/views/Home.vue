<template>
  <div class="home container-fluid">
    <top />
    <div class="row">
      <div class="col-6 pb-5 mx-auto">
        <form @submit.prevent="addBug">
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
      </div>

      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Completed</th>
              <th>Reported By</th>
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
//import addBug from "@/components/AddBug";
import bugs from "@/components/Bugs";

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
      }
    };
  },
  methods: {
    addBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("addBug", bug);
      this.newBug = {
        closed: false,
        description: "",
        title: "",
        reportedBy: ""
      };
    }
  },
  components: {
    top,
    //addBug,
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
