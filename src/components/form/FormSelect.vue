<template>
  <Multiselect
    v-model="select.value"
    v-bind="select"
    :options="select.options"
  />
</template>
<!-- <script setup>
import Multiselect from '@vueform/multiselect'
import {ref, onMounted} from 'vue'
</script> -->

<script>
import Multiselect from '@vueform/multiselect'

export default {
  components: {
    Multiselect,
  },
  // data: () => ({

  // }),
  setup() {
    return {
      select: {
        mode: 'tags',
        options: [
          {value: 'batman', label: 'Batman'},
          {value: 'robin', label: 'Robin'},
          {value: 'joker', label: 'Joker'},
        ],
        placeholder: 'Выберете место',
        searchable: true,
        createTag: true,
        canClear: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.multiselect {
  width: 72%;
  margin: 0;
  @include welcome-form-input();
  justify-content: flex-start;
  &-options {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.multiselect.is-active {
  border: solid #328bc3 1px;
  outline: 0;
  box-shadow: 0 0 3px #328bc3 inset;
}
</style>
