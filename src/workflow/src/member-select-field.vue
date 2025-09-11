<template>
  <div class="member-select-field">
    <FormItem v-bind="formProps">
      <template slot="label">
        <div class="member-select-title">
          <span>{{ label }}</span>
          <div class="member-select-label" v-if="showSelectLen">
            <span>共</span>
            <span class="member-select-num">{{ selectLen }}</span>
            <span>人</span>
          </div>
        </div>
      </template>
      <!-- <MemberSelect
      :title="getTitle"
      :multiple="multiple"
      :data="data"
      v-bind="$attrs"
      v-on="$listeners"
    /> -->

      <FlowAddMember
        :data="value"
        :props="memeberProps"
        :disabled="disabled"
        :errorImg="defaultImg"
        @click-add="handleShow"
        @click-close-icon="handleRemove"
        class="member-select"
      ></FlowAddMember>
    </FormItem>
    <el-dialog
      :title="getTitle"
      :visible.sync="visible"
      append-to-body
      @close="handleClose"
      height="70vh"
    >
      <zx-custom-picker
        ref="memberPicker"
        :lazy="lazy"
        :multiple="multiple"
        :data="data"
        :props="props"
        :typeProps="typeProps"
        :defaultImg="defaultImg"
        :type="type"
        :check-strictly="true"
        v-model="select"
        v-bind="$attrs"
      ></zx-custom-picker>
      <div slot="footer" class="dialog-footer">
        <button
          class="zx-page-button zx-page-button--primary"
          @click="handleSubmit"
        >
          确 定
        </button>
        <button class="zx-page-button" @click="handleClose">取消</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// TODO: el-tree 中的 el-checkbox 勾选时会dispatch el-form-item的change事件，从而触发el-form 的表单校验。
// 现直接将Dialog移至form-item外解决该问题

import { cloneDeep, isEqual } from 'lodash-es';
import FlowAddMember from './add-member/add-member.vue';
import { defaultImg, getImgUrl } from './images/index.js';
import Emitter from './mixins/emitter.js';
import FormProps from './mixins/formProps.js';
export default {
  name: 'MemberSelectField',
  inheritAttrs: false,
  components: {
    FlowAddMember
  },
  mixins: [FormProps, Emitter],
  props: {
    title: String,
    multiple: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    value: {
      type: Array
    },
    lazy: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default() {
        return {
          icon: 'imgurl',
          label: 'name',
          disabled: 'disabled',
          children: 'children',
          type: 'item'
        };
      }
    },
    typeProps: {
      type: Object,
      default() {
        return {
          user: 'user',
          department: 'dept',
          group: 'group',
          role: 'post',
          organization: 'dept'
        };
      }
    },
    type: {
      type: Array,
      default() {
        return ['user', 'post', 'group'];
      }
    }
  },
  computed: {
    getTitle() {
      return this.title || (this.label ? `选择${this.label}` : '');
    },
    showSelectLen() {
      return this.multiple && this.selectLen;
    },
    selectLen() {
      return this.value && this.value.length;
    }
  },

  watch: {
    value: {
      handler(v, o) {
        if (Array.isArray(v)) {
          const data = this.multiple ? v : v[0];
          if (!isEqual(this.select, data)) {
            this.select = data ? cloneDeep(data) : null;
          }
        }

        if (!isEqual(v, o) && this.validateEvent) {
          this.broadcast('ElFormItem', 'el.form.change', v);
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      visible: false,
      select: null,
      memeberProps: {
        icon: getImgUrl('imgurl'),
        label: 'name'
      },
      defaultImg
    };
  },
  methods: {
    handleShow() {
      this.visible = true;
    },
    handleRemove(item, index) {
      if (this.multiple) {
        this.select.splice(index, 1);
      } else {
        this.select = null;
      }
      const data = this.select || [];
      this.handleInput(data);
      this.handleChange(data);
    },
    handleInput(data) {
      this.$emit('input', data);
    },
    handleChange(data) {
      this.$emit('change', data);
    },
    handleSubmit() {
      const select = this.multiple ? this.select : [this.select];
      this.handleInput(select);
      this.handleChange(select);
      this.handleClose();
    },
    handleClose() {
      this.visible = false;
    }
  }
};
</script>
