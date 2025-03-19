<script setup>
const value = defineModel();

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "Placeholder"
  },
  type: {
    type: String,
    default: "text"
  },
  name: {
    type: String,
    default: "input"
  },
  errors: {
    type: Array,
    default: []
  },
})

const getErrorText = () => {
  if (props.errors.length) {
    return props.errors.join(' ');
  }
}

</script>

<template>
  <div class="wrap__input">
    <label v-if="title !== ''" :for="name">{{ title }}</label>
    <input :type="type" :name="name" :placeholder="placeholder" v-model="value" />
    <p if="errors.length" class="error-message" :title="getErrorText()">{{ getErrorText() }}</p>
  </div>
</template>

<style scoped>
.wrap__input {
  display: flex;
  flex-direction: column;
  text-align: start;
}

input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 7px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #000;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
    opacity: 1;
  }

  &:focus::placeholder {
    color: transparent;
  }
}


label {
  display: block;
  margin-top: 10px;
  color: red;
  font-size: 14px;
}

.error-message {
  max-width: 300px;
  margin-left: 5px;
  color: red;
  font-size: 14px;
  margin-top: 5px;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}
</style>