<template>
  <div class="bugs col-12">
    <table class="table table-striped ">
      <thead>
        <tr>
          <th>Title</th>
          <th>Completed</th>
          <th>Reported By</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs" :key="bug.id">
          <router-link :to="{ name: 'bug', params: { id: bug.id } }">
            <td>{{ bug.title }}</td>
          </router-link>
          <td>{{ bug.closed }}</td>
          <td>{{ bug.reportedBy }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "bugs",
  props: ["bugData"],
  methods: {
    loadDetails() {}
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>

<style></style>
