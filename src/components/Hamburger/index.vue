<template>
  <div class="hamburger fs-icon-spread-left fs-icon" @click="toggleClick" />
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
  font-size: 18px;

  transform: rotate(180deg);
  transition: 0.38s;
  transform-origin: 50% 50%;
}
.hamburger.is-active {
  transform: rotate(0deg);
}
</style>
