<template>
  <input :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  padding: 5px;
  width: 100%;
  border: 1px solid #808080;
  border-radius: 5px;
}
</style>
