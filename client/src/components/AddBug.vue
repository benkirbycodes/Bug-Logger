<template>
  <div class="add-bug pb-5 col-6 mx-auto">
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
      <button type="button" @click="hideAdd" class="btn btn-outline-dark btn-lg">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-bug",
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
      console.log(this.$store.state.activeBug.id);
      this.$router.push({
        name: "bug",
        params: { id: this.$store.state.activeBug.id }
      });
      this.newBug = {
        closed: false,
        description: "",
        title: "",
        reportedBy: ""
      };
    },
    hideAdd() {
      this.$emit("clicked");
    }
  }
};
</script>

<style></style>
