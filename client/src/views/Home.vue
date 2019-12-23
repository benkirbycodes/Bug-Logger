<template>
  <div class="home container-fluid">
    <top />
    <div class="row">
      <div class="col">
        <add-bug />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import top from "@/components/Top";
import addBug from "@/components/AddBug";

export default {
  name: "home",
  components: {
    top,
    addBug
  }
};
</script>
