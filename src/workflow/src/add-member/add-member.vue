<template>
  <MemberList :disabled="disabled" :errorImg="errorImg">
    <template v-if="data && data.length">
      <MemberListItem
        v-for="(item, i) in data"
        :label="getPropData(item, 'label')"
        :avatar="getPropData(item, 'icon')"
        :disabled="getPropData(item, 'disabled')"
        :key="i"
        @click.native="onClickItem($event, item, i)"
        @click-close-icon="onClickCloseIcon($event, item, i)"
      ></MemberListItem>
    </template>
    <div
      @click="onClickAddItem"
      class="flow-member-contact"
    >
      
      <Contact class="flow-member-contact-icon"/>
      <span v-if="!required" class="flow-member-contact-dot">*</span>
    </div>
  </MemberList>
</template>

<script>
import { getPropData } from '../utils.js';
import Contact from './../svg/contact.vue';
import MemberListItem from './member-list-item.vue';
import MemberList from './member-list.vue';

export default {
  name: 'FlowAddMember',
  components: {
    MemberList,
    MemberListItem,
    Contact
  },
  props: {
    props: {
      type: Object,
      default() {
        return {
          icon: 'imgurl',
          label: 'name',
          disabled: 'disabled'
        };
      }
    },
    required: {
      type: Boolean
    },
    size: {
      type: String
    },
    data: {
      type: Array
    },
    disabled: Boolean,
    errorImg: String
  },
  methods: {
    getPropData(data = {}, prop) {
      const props = this.props;
      return getPropData(data, props, prop);
    },
    onClickAddItem(event) {
      if (this.disabled) return;
      this.$emit('click-add', event);
    },
    onClickItem(event, item, index) {
      if (this.disabled) return;
      this.$emit('click-item', event, item, index);
    },
    onClickCloseIcon(event, item, index) {
      if (this.disabled) return;
      this.$emit('click-close-icon', event, item, index);
    }
  }
};
</script>
