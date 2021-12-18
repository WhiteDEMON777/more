<script setup>
import Button from '../Button.vue'
// import '@/composables/components/useComponentTheme'
import Logo from '@/assets/image/icon/logo1.svg'
</script>

<template>
  <nav class="topbar">
    <div class="topbar__container">
      <div class="topbar__logo">
        <Logo />
      </div>
      <ul class="topbar__controls">
        <li>
          <a href="#" class="link--disable">Избранное (0)</a>
        </li>
        <li>
          <a href="#">Войти</a>
        </li>
        <li>
          <Button primary>Сдать жилье</Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/bootstrap/bootstrap-grid.scss';
.topbar {
  box-shadow: -1px 0 2px #ccc;
  &__container {
    @include make-container();
    @include make-container-max-widths();
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      margin: auto;
      text-align: center;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  &__logo {
    width: 142px;
    height: 44px;
    margin-top: 4px;
    display: flex;
  }
  &__controls {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    li {
      @include media-breakpoint-down(sm) {
        display: block;
        margin-top: 10px;
        margin-left: 0;
      }
      display: inline-block;
      margin-left: 39px;
    }
  }
}
</style>
