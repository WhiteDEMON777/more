<script setup>
import BaseTitle from '../components/base/BaseTitle.vue'
</script>
<template>
  <div class="welcome">
    <BaseTitle big
      >Жилье для отдыха на Чёрном и<br />
      Азовском море без посредников</BaseTitle
    >
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/bootstrap/bootstrap-grid.scss';
@mixin welcome-form-input() {
  border-radius: 2px;
  border: 1px solid #1e8bc3;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  padding: 15px 8px;
  height: 55px;
}
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

  &-form {
    @include make-container-max-widths();
    @include media-breakpoint-down(md) {
      margin: auto;
      margin-top: -119px;
      width: 300px;
      height: 267px;
    }
    margin: -129px auto 3rem auto;
    width: 548px;
    height: 205px;
    position: relative !important;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    background-color: #ffffff;
    padding: 35px 22px 22px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__place {
      @include welcome-form-input();
      flex-basis: 362px;
    }
    &__button {
      padding: 12px 28px;
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;

      &--desktop {
        @include media-breakpoint-down(md) {
          display: none;
        }
      }
      &--mobile {
        @include media-breakpoint-up(md) {
          display: none;
        }
      }
    }
    &__checkin {
      @include media-breakpoint-down(md) {
        margin-right: 0px;
        width: 110px;
        background-position: 64px;
      }
      @include welcome-form-input();
      margin-right: 37px;
      width: 144px;
      margin-top: 21px;
      background-image: url('../img/in.svg');
      background-repeat: no-repeat;
      background-position: 95px;
    }
    &__departure {
      @include media-breakpoint-down(md) {
        margin-right: 0;
        width: 107px;
        background-position: 64px;
      }
      @include welcome-form-input();
      margin-right: 37px;
      width: 144px;
      margin-top: 21px;
      background-image: url('../img/out.svg');
      background-repeat: no-repeat;
      background-position: 91px;
    }
    &__guest {
      @include media-breakpoint-down(md) {
        width: 110px;
        background-position: 74px;
      }
      @include welcome-form-input();
      width: 123px;
      margin-top: 21px;
      background-image: url('../img/guest.svg');
      background-repeat: no-repeat;
      background-position: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__checkbox {
      color: #242429;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      margin-top: 14px;
      display: flex;
      align-items: center;
      &-check {
        width: 17px;
        height: 17px;
      }
    }
    &__incognito {
      margin-top: 10px;
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #328bc3;
      border-bottom: 1px dashed;
      cursor: pointer;
    }
    &__custom-date {
      @include welcome-form-input();
      width: 70%;
      margin-top: 21px;
      display: none;
    }

    @include media-breakpoint-down(xs) {
      width: 100%;
      margin-top: 0;
    }
  }
}
</style>
