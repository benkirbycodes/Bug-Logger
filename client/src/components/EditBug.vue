<template>
  <div class="edit-bug">
    <form @submit.prevent="editBug">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" name="title" v-model="editedBug.title" />
        <label for="description">Description</label>
        <input type="text" class="form-control" name="description" v-model="editedBug.description" />
      </div>
      <button class="btn btn-outline-dark btn-sm">Submit Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "editBug",
  props: ["editData"],
  data() {
    return {
      editedBug: {
        title: "",
        description: ""
      },
      activeBug: this.$store.state.activeBug
    };
  },
  methods: {
    editBug() {
      let bug = { ...this.editedBug };
      this.$store.dispatch("editBug", [bug, this.$route.params.id]);
      console.log([bug, this.$route.params.id]);
      this.editedBug = {
        title: "",
        description: ""
      };
      this.closeEdit();
    },
    closeEdit() {
      this.$emit("clicked");
    }
  }
};
</script>

<style>
</style>