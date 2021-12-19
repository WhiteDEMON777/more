<!-- <script setup>
import '@/composables/components/useButtonProps'
</script> -->
<template>
  <a href="#" :class="classes">
    <slot />
  </a>
</template>
<script>
import '@/composables/components/useButtonProps.js'
export default {
  setup(props) {},
}
</script>

<style lang="scss" scoped>
.button,
a.button {
  display: inline-block;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  line-height: 1.2rem;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  padding: 5px 10px;

  &--primary {
    background-color: $color-primary;
    color: #fff;
  }

  &--accent {
    background-color: $color-accent;
    color: #fff;
  }

  &--large {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }

  &--cat {
    width: 300px;
    display: block;
    margin: 3rem auto;
  }
}
</style>
