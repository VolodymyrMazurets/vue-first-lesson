<template>
  <button class="app-button"  @click="() => $emit('click')">
    <slot />
  </button>
</template>
<script>
export default {
  name: "AppButton",
//   props: {
//     label: {
//       type: String,
//       required: true
//     }
//   }
};
</script>
<style lang="scss">
$style: app-button;
.#{$style} {
  border: 1px solid green;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: red;
  background-color: aqua;
}
</style>