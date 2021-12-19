<script setup>
import BaseTitle from '../components/base/BaseTitle.vue'
import Form from '../components/form/Form.vue'
</script>
<template>
  <div class="welcome">
    <BaseTitle big
      >Жилье для отдыха на Чёрном и<br />
      Азовском море без посредников</BaseTitle
    >
  </div>
  <Form />
</template>

<style lang="scss" scoped>
.welcome {
  min-width: 100%;
  padding: 0;
  height: 468px;
  background-image: url('@/assets/image/picture/more.png');
  background-size: cover;
  position: relative;

  @include media-breakpoint-down(xs) {
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
