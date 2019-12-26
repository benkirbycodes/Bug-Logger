<template>
  <div class="note">
    <p>{{noteData.content}}</p>
    <p>{{noteData.reportedBy}}</p>
  </div>
</template>

<script>
export default {
  name: "note",
  props: ["noteData"]
};
</script>

<style>
</style>