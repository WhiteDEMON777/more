<template>
  <div @click="link" class="form__incognito form__incognito--show-custom">
    Точная дата не известна
  </div>
</template>

<script>
import {computed, ref} from 'vue'
export default {
  setup(props, context) {
    console.log('context', context)
    let inputShow = ref(false)
    const i = computed((b) => {
      const link = (e) => {
        inputShow = !inputShow
      }
      b = link
    })
    const g = context.emit('input-show', i.value)
    console.log('props.g', i.value)
    console.log('inputShow', inputShow)
    return {g}
  },
}
</script>
