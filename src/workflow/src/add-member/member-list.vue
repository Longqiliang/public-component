<template>
  <div class="flow-member-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  provide() {
    return {
      memberList: this
    };
  },
  props: {
    disabled: Boolean,
    errorImg: String
  }
};
</script>
