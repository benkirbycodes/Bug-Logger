<template>
  <tr class="bugs">
    <router-link :to="{ name: 'bug', params: { id: bugData.id } }">
      <td>{{ bugData.title }}</td>
    </router-link>
    <td>{{ bugData.closed }}</td>
    <td>{{ bugData.reportedBy }}</td>
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
    }
  }
};
</script>

<style></style>
