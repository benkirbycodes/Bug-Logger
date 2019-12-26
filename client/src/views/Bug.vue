<template>
  <div class="bug container-fluid">
    <top />
    <div class="row">
      <div class="col-12">
        <h1>Title: {{bug.title}}</h1>
        <h2>Reported By: {{bug.reportedBy}}</h2>
        <h3>Status: {{bug.closed}}</h3>
        <p>{{bug.description}}</p>
      </div>
      <div class="col-12" v-for="note in notes" :key="note.id">
        <notes :noteData="note" />
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/components/Top";
import notes from "@/components/Notes";
import addNote from "@/components/AddNote";

export default {
  name: "Bug",
  mounted() {
    this.$store.dispatch("setActiveBug", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.activeNotes;
    }
  },
  components: {
    top,
    notes,
    addNote
  }
};
</script>

<style></style>
