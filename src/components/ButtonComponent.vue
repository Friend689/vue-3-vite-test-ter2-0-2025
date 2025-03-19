<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button"
  },
  label: {
    type: String,
    default: "Далее"
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const btnDisabled = computed(() => {
  if (props.loading) {
    return true
  }
  return props.disabled
})
</script>

<template>
  <button :type="type" class="btn" :class="{ 'loading ': loading }" :disabled="btnDisabled">
    <template v-if="loading"><span class="loader"></span></template>
    <template v-else>{{ label }}</template>
  </button>
</template>

<style scoped>
.btn {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #cfe8cf;

  &:hover {
    background-color: #99d597;
    color: white;
  }

  &:active {
    background-color: #95d393;
  }

  &:disabled {
    background-color: #ededed;
    cursor: not-allowed;
    color: #767676;
  }

  &.loading {
    position: relative;
    background-color: #d0d0d0;
    cursor: not-allowed;
    padding: 8px 30px 5px 30px;

    .loader {
      width: 20px;
      height: 20px;
      border: 3px solid #767676;
      border-bottom-color: white;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>