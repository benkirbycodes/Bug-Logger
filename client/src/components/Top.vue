<template>
  <div class="top bg-info p-3 row">
    <div class="col-6">
      <h1>Bug Tracker</h1>
    </div>
    <div class="col-6">
      <button class="v" @click="openAddBugForm">Report A Bug</button>
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
