<template>
  <div class="add-note col-6 mx-auto">
    <form @submit.prevent="addNote">
      <h4>Add A New Note</h4>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          required
          class="form-control"
          placeholder="Enter your name..."
          v-model="newNote.reportedBy"
        />
        <label for="comment">Comment:</label>
        <input
          type="text"
          name="comment"
          class="form-control"
          required
          placeholder="Enter your comment..."
          v-model="newNote.content"
        />
      </div>
      <button class="btn btn-outline-dark btn-sm">Submit Note</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-name",
  data() {
    return {
      newNote: {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      }
    };
  },
  methods: {
    addNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("addNote", note);
      this.newNote = {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      };
      this.hideAddNote();
    },
    hideAddNote() {
      this.$emit("clicked");
    }
  }
};
</script>

<style>
</style>