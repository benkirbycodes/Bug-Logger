<template>
  <div class="bug container-fluid">
    <top />
    <div class="row">
      <div class="col-8 p-2 mx-auto text-left">
        <h5>Title:</h5>
        <h1>{{bug.title}}</h1>
        <h5>Reported By:</h5>
        <h2>{{bug.reportedBy}}</h2>
        <h5>Status:</h5>
        <h3 v-bind:class="getClass()">{{status}}</h3>
        <h5>Last Modified:</h5>
        <h3>{{lastModified}}</h3>
        <p class="rounded border p-3">{{bug.description}}</p>
        <edit-bug v-if="edit" :editData="edit" @clicked="hideEditBug" />
        <button class="btn btn-outline-dark btn-sm" @click.prevent="showEditBug">Edit Bug</button>
        <button class="btn btn-outline-dark btn-sm" @click.prevent="closeBug">Close Bug</button>
      </div>
      <div class="col-12">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th>Name</th>
              <th>Note</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody class="col-12" v-for="note in notes" :key="note.id">
            <notes :noteData="note" />
          </tbody>
        </table>
        <add-note />
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/components/Top";
import notes from "@/components/Notes";
import addNote from "@/components/AddNote";
import editBug from "@/components/EditBug";

export default {
  name: "bug",
  data() {
    return {
      edit: false
    };
  },
  mounted() {
    this.$store.dispatch("setActiveBug", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  methods: {
    closeBug() {
      if (confirm("Are You Sure You Want To Close This Bug?")) {
        this.$store.dispatch("closeBug", this.$route.params.id);
      }
    },
    showEditBug() {
      return (this.edit = true);
    },
    hideEditBug() {
      return (this.edit = false);
    },
    getClass() {
      return {
        red: this.bug.closed,
        green: !this.bug.closed
      };
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
    },
    lastModified() {
      let lastMod = new Date(this.bug.updatedAt);
      return lastMod.toLocaleDateString();
    }
  },

  components: {
    top,
    notes,
    addNote,
    editBug
  }
};
</script>

<style>
.red {
  color: red;
}

.green {
  color: green;
}
</style>
