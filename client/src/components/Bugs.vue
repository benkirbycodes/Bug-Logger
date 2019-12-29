<template>
  <tr class="bugs">
    <router-link :to="{ name: 'bug', params: { id: bugData.id } }">
      <td>{{ bugData.title }}</td>
    </router-link>
    <td v-bind:class="getClass()">{{ status }}</td>
    <td>{{ bugData.reportedBy }}</td>
    <td>{{ lastModified }}</td>
  </tr>
</template>

<script>
export default {
  name: "bugs",
  props: ["bugData"],
  methods: {
    getClass() {
      return {
        red: this.bugData.closed,
        green: !this.bugData.closed
      };
    }
  },
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

<style>
.red {
  color: red;
}

.green {
  color: green;
}
</style>
