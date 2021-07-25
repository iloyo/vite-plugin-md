<template>
  <Md />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Md from "./vue3.md";

export default defineComponent({
  name: "App",
  components: { Md },
});
</script>
