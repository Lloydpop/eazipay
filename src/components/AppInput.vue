<template>
  <div class="input-container">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      class="input-field rounded-lg"
    />
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    id: String,
    name: String,
    placeholder: String,
    value: String,
  },
};
</script>

<style scoped>
.input-container {
  margin-bottom: 16px;
}

.input-label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
  outline: 0;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}
</style>
