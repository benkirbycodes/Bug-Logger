<template>
  <div class="bug container-fluid">
    <top />
    <div class="row">
      <div class="col-12">
        <h1>Title: {{bug.title}}</h1>
        <h2>Reported By: {{bug.reportedBy}}</h2>
        <h3>Status: {{status}}</h3>
        <p>{{bug.description}}</p>
        <button class="btn btn-outline-dark btn-sm" @click.prevent="closeBug">Close Bug</button>
      </div>
      <div class="col-12" v-for="note in notes" :key="note.id">
        <notes :noteData="note" />
      </div>
      <add-note />
    </div>
  </div>
</template>

<script>
import top from "@/components/Top";
import notes from "@/components/Notes";
import addNote from "@/components/AddNote";

export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("setActiveBug", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  methods: {
    closeBug() {
      if (confirm("Are You Sure You Want To Close This Bug?")) {
        this.$store.dispatch("closeBug", this.$route.params.id);
      }
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.activeNotes;
    },
    status() {
      if (this.bug.closed) {
        return "Closed";
      } else return "Open";
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
