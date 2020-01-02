<template>
  <div class="bug-top bg-dark text-white p-3 row">
    <div class="col-4">
      <h1>
        Bug
        <i class="fa fa-bug"></i> Tracker
      </h1>
    </div>
    <div class="col-4"></div>
    <div class="col-4">
      <router-link to="/">
        <button class="btn btn-outline-light btn-lg">Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "bugTop",
  methods: {}
};
</script>

<style></style>
