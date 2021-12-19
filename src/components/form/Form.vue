<template>
  <form action="" class="form">
    <FormSelect />
    <Button>Найти</Button>
    <FormCalendar />
    <FormCalendar @input-shadow="inputShadowProp($event)" />
    <FormCastomDate :inputHide="inputHideProp" />
    <FormInput />
    <FormCheckbox />
  </form>
</template>
<script>
import FormSelect from './FormSelect.vue'
import Button from '../Button.vue'
import FormCalendar from './FormCalendar.vue'
import FormInput from './FormInput.vue'
import FormCastomDate from './FormCastomDate.vue'
import FormCheckbox from './FormCheckbox.vue'
import {computed} from '@vue/reactivity'
export default {
  components: {
    FormSelect,
    Button,
    FormCalendar,
    FormInput,
    FormCastomDate,
    FormCheckbox,
  },
  data() {
    return {
      inputHideProp: false,
    }
  },
  methods: {
    inputShadowProp(value) {
      this.inputHideProp = value
      console.log('this.inputHideProp', this.inputHideProp)
    },
  },
  setup(props, context) {
    // console.log('this.inputHideProp ', context.inputShadowProp)
  },
}
</script>
<style lang="scss" scoped>
.form {
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
    background-image: url('@/assets/image/icon/out.svg');
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
    background-image: url('@/assets/image/icon/guest.svg');
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
  }

  @include media-breakpoint-down(xs) {
    width: 100%;
    margin-top: 0;
  }
}
</style>
