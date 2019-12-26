<template>
  <div class="add-note col-12">
    <form @submit.prevent="addNote">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name..."
          v-model="newNote.reportedBy"
        />
        <label for="comment">Comment</label>
        <input
          type="text"
          name="comment"
          required
          placeholder="Enter your comment..."
          v-model="newNote.content"
        />
      </div>
      <button class="btn btn-outline-dark btn-lg">Submit Note</button>
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
      console.log(note);
      this.$store.dispatch("addNote", note);
      this.newNote = {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      };
    }
  }
};
</script>

<style>
</style>