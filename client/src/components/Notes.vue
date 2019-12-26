<template>
  <div class="note">
    <p>Note: {{noteData.content}}</p>
    <p>By: {{noteData.reportedBy}}</p>
    <button class="btn btn-outline-dark btn-sm" @click.prevent="deleteNote">x</button>
  </div>
</template>

<script>
export default {
  name: "note",
  props: ["noteData"],
  methods: {
    deleteNote() {
      console.log(this.noteData.id);
      console.log(this.noteData.bug);
      this.$store.dispatch("deleteNote", [this.noteData.id, this.noteData.bug]);
    }
  },
  computed: {
    notes() {
      return this.$store.state.activeNotes;
    }
  }
};
</script>

<style>
</style>