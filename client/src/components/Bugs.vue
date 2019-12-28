<template>
  <tr class="bugs">
    <router-link :to="{ name: 'bug', params: { id: bugData.id } }">
      <td>{{ bugData.title }}</td>
    </router-link>
    <td>{{ status }}</td>
    <td>{{ bugData.reportedBy }}</td>
    <td>{{ lastModified }}</td>
  </tr>
</template>

<script>
export default {
  name: "bugs",
  props: ["bugData"],
  methods: {},
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    status() {
      if (this.bugData.closed) {
        return "Closed";
      } else return "Open";
    },
    lastModified() {
      let lastMod = new Date(this.bugData.updatedAt);
      return lastMod.toLocaleDateString();
    }
  }
};
</script>

<style></style>
