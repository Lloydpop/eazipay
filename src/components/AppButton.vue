<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    @click="click"
  >
    <template v-if="disabled">
      <p>loading...</p>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>
<script>
import classnames from "classnames";

export default {
  name: "AppButton",

  data() {
    return {
      classnames,
    };
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
    },
    disabled: Boolean,
    isFullWidth: Boolean,
  },
  methods: {
    handleClick() {
      if (!this.disabled && this.listeners.click) {
        this.$emit("click");
      }
    },
  },
  computed: {
    buttonClasses() {
      return classnames(
        "flex justify-center rounded-[20px] border  py-[10px] px-6 text-md items-center font-medium shadow-sm disabled:cursor-not-allowed",
        {
          "bg-[#11453B] text-white disabled:opacity-50 shadow-2xl":
            this.variant === "primary",
          "bg-[#D9EBCD] text-primary rounded-[30px]":
            this.variant === "secondary",
          "bg-red-600 text-white hover:bg-red-500": this.variant === "danger",
          "bg-green-600 text-white hover:bg-green-500":
            this.variant === "success",
          "bg-transparent text-gray-500 border-[#11453B]  border hover:bg-gray-50":
            this.variant === "outline",
          "bg-gray-700 text-white": this.variant === "black",
          "bg-transparent !border-0 shadow-none":
            this.variant === "transparent",
          "w-full": this.isFullWidth,
        }
      );
    },
  },
};
</script>
