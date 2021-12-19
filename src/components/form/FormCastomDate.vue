<template>
  <input
    v-if="inputHide"
    class="form__custom-date"
    type="text"
    name="custom"
    placeholder="Ориентировочное время прибытия в свободной форме"
  />
</template>

<script>
import {ref} from 'vue'
export default {
  props: ['inputHide'],
  setup(props, context) {
    return ref(props.inputHide)
  },
}
</script>
