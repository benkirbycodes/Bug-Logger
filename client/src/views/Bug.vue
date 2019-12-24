<template>
  <div class="bug"></div>
</template>

<script>
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("setActiveBug", this.$route.params.id);
  }
};
</script>

<style></style>
