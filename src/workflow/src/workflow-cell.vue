<template>
  <div
    class="workflow-cell"
    :class="{
      'is-required': required,
    }"
  >
    <div class="workflow-cell-title">
      <div class="workflow-cell-label" v-if="label || $slots.label">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WorkflowCell",
  props: {
    required: {
      type: Boolean,
      default: undefined,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.workflow-cell {
  padding: 10px 20px;

  &.is-required {
    .workflow-cell-label {
      &::before {
        color: #ff414b;
        content: '*';
      }
    }
  }
}
</style>