<template>
  <tr class="note">
    <td>{{noteData.reportedBy}}</td>
    <td>{{noteData.content}}</td>
    <td>
      <i class="fa fa-times-circle" @click.prevent="deleteNote"></i>
    </td>
  </tr>
</template>









<script>
export default {
  name: "note",
  props: ["noteData"],
  methods: {
    deleteNote() {
      if (confirm("Are You Sure You Want To Delete This Note?")) {
        this.$store.dispatch("deleteNote", [
          this.noteData.id,
          this.noteData.bug
        ]);
      }
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