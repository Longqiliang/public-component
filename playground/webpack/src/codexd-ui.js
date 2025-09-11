import CustomPicker from 'codexd-ui/lib/custom-picker.js';
import FormItem from 'codexd-ui/lib/form-item.js';
import Form from 'codexd-ui/lib/form.js';
import Icon from 'codexd-ui/lib/icon.js';
import RadioField from 'codexd-ui/lib/radio-field.js';
import SelectField from 'codexd-ui/lib/select-field.js';
import Select from 'codexd-ui/lib/select.js';
import Table from 'codexd-ui/lib/table.js';
import xss from 'codexd-ui/lib/xss';
import InputField from 'codexd-ui/packages/input-field/index.js';

const components = [
  Table,
  Form,
  FormItem,
  Select,
  SelectField,
  InputField,
  CustomPicker,
  RadioField,
  Icon
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$xss = xss;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};

