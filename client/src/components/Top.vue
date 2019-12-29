<template>
  <div class="top bg-dark text-white p-3 row">
    <div class="col-4">
      <h1>
        Bug
        <i class="fa fa-bug"></i> Tracker
      </h1>
    </div>
    <div class="col-4">
      <router-link to="/">
        <h3>Home</h3>
      </router-link>
    </div>
    <div class="col-4">
      <button class="btn btn-outline-light btn-lg" @click="openAddBugForm">Report A Bug</button>
    </div>
  </div>
</template>

<script>
//TODO Using a static addBug form for now, come back to this when hooking up modals.
export default {
  name: "top",

  methods: {
    openAddBugForm() {}
  }
};
</script>

<style></style>
