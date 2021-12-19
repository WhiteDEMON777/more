<template>
  <v-date-picker
    mode="date"
    is-required
    :popover="{placement: 'bottom'}"
    v-model="date"
  >
    <template v-slot="{inputValue, togglePopover}">
      <input
        id="date"
        class="form__checkin"
        :value="inputValue"
        @click="togglePopover()"
        placeholder="Выезд"
        autocomplete="off"
      />
    </template>
  </v-date-picker>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.form__checkin {
  @include media-breakpoint-down(md) {
    margin-right: 0px;
    width: 110px;
    background-position: 64px;
  }
  @include welcome-form-input();
  margin-right: 37px;
  width: 144px;
  margin-top: 21px;
  background-image: url('@/assets/image/icon/in.svg');
  background-repeat: no-repeat;
  background-position: 95px;
}
</style>
