<template>
  <div class="top bg-dark text-white p-3 row">
    <div class="col-4">
      <h1>
        Bug
        <i class="fa fa-bug"></i> Tracker
      </h1>
    </div>
    <div class="col-4"></div>
    <div class="col-4">
      <button class="btn btn-outline-light btn-lg" @click="showAdd">Report A Bug</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  methods: {
    showAdd() {
      this.$emit("clicked");
    }
  }
};
</script>

<style></style>
