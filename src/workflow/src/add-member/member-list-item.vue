<script>
import { SlotsMixin } from "../mixins/slots";
import { isDef } from "../utils";

export default {
  name: "MemberListItem",
  mixins: [SlotsMixin],
  inject: {
    memberList: {
      default: null,
    },
  },
  props: {
    disabled: Boolean,
    label: String,
    avatar: String,
  },
  data() {
    return {
      loadError: false,
    };
  },
  methods: {
    getProp(key) {
      if (isDef(this[key])) {
        return this[key];
      }

      if (this.memberList && isDef(this.memberList[key])) {
        return this.memberList[key];
      }
    },
    genAvatar() {
      if (this.slots("avatar") || this.avatar) {
        const errorImg = this.getProp("errorImg");
        return (
          this.slots("avatar") || (
            <div class="flow-member-list-item-avatar">
              {this.loadError && errorImg ? <img src={errorImg} /> : null}
              <img src={this.avatar} onError={this.onLoadError} />
            </div>
          )
        );
      }
    },

    onLoadError() {
      this.loadError = true;
    },

    genLabel() {
      if (this.slots("label") || this.label) {
        return (
          <div class="flow-member-list-item-label">
            {this.slots("label") || this.label}
          </div>
        );
      }
    },

    genCloseIcon() {
      const disabled = this.getProp("disabled");
      if (!disabled) {
        return (
          <div
            class="flow-member-list-item__close"
            onClick={this.onClickCloseIcon}
          >
            <i class="el-icon-error" />
          </div>
        );
      }
    },

    onClickCloseIcon(event) {
      this.$emit("click-close-icon", event);
    },
  },
  render() {
    return (
      <div class="flow-member-list-item">
        {this.genAvatar()}
        {this.genLabel()}
        {this.genCloseIcon()}
      </div>
    );
  },
};
</script>

