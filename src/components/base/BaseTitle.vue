<script setup>
import '@/composables/components/useTitle'
</script>
<template>
  <div :class="title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/bootstrap/bootstrap-grid.scss';
.title {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;
  position: relative;
  width: 100%;
  margin-top: 7rem;

  @include media-breakpoint-down(md) {
    font-size: 2.5rem;
  }
  @include media-breakpoint-down(sm) {
    font-size: 2rem;
    padding: 1rem;
  }
  @include media-breakpoint-down(xs) {
    font-size: 1.5rem;
    line-height: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
