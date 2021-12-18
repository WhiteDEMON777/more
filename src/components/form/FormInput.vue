<script setup>
const inputValue = ref('')

const changeValue = (value) => {
  inputValue.value = value
}
</script>

<template>
  <input :value="inputValue" @input="changeValue" />
</template>
