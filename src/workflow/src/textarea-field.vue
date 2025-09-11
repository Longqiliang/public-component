<template>
  <Form-item>
    <div class="flow-textarea">
      <el-input
        v-bind="$attrs"
        v-on="$listeners"
        :autosize="{ minRows: 5 }"
        type="textarea"
      >
      </el-input>
      <div class="flow-textarea-extra">
        <div
          @click.stop="handleClick"
          class="flow-textarea-label content-center flow-textarea-left"
        >
          <slot name="label">
            <span>{{ label }}</span>
            <i
              class="flow-textarea-icon flow-textarea__caret el-icon-arrow-up"
              :class="{ 'is-reverse': visible }"
            ></i>
          </slot>

          <zx-select
            :value="option"
            @change="handleChange"
            :options="options"
            :props="props"
            ref="select"
            class="flow-textarea-select"
          ></zx-select>
        </div>
        <div class="flow-textarea-right">
          <Save />
        </div>
      </div>
    </div>
  </Form-item>
</template>

<script>
import Save from "./svg/save.vue";
export default {
  components: {
    Save,
  },
  props: {
    label: String,
    options: { type: Array },
    props: { type: Object },
  },
  data() {
    return {
      option: "",
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
      const selectEl = this.$refs.select.getSelectEl();
      if (this.visible) {
        selectEl?.toggleMenu();
      } else {
        selectEl?.blur();
      }
    },
    handleChange(v) {
      // this.$emit('change', v);
      this.visible = !this.visible;
      this.$emit("input", v);
    },
  },
};
</script>
