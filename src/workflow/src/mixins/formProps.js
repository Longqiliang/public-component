export default {
  data() {
    return {
      emptyText: '- -'
    };
  },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    requireMessage: String,
    size: String,
    bottomTips: String,
  },
  computed: {
    formProps() {
      const {
        label,
        labelWidth,
        prop,
        required,
        rules,
        error,
        validateStatus,
        inlineMessage,
        showMessage,
        requireMessage,
        size,
        bottomTips
      } = this;
      return {
        label,
        labelWidth,
        prop,
        required,
        rules,
        error,
        validateStatus,
        inlineMessage,
        showMessage,
        requireMessage,
        size,
        bottomTips,
      };
    }
  }
};
