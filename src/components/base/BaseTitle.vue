<script setup>
import '@/composables/components/useTitle'
</script>
<template>
  <div :class="title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
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
  &--medium {
    margin: 2rem 0;
    @include title(1);
  }
  &--small {
    @include title(0.8);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  &--container {
    @include make-container();
    @include make-container-max-widths();
  }
  &--mt {
    margin-top: 2rem;
  }
  &--mb {
    margin-bottom: 2rem;
  }
}
</style>
