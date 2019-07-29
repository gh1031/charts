<template>
  <Form
    class="my-form"
    :label-width="80"
  >
    <FormItem :label="label">
      <template v-if="type === 'input'">
        <Input
          v-model="formValue"
        />
      </template>
      <template v-if="type === 'select'">
        <Select />
      </template>
      <template v-if="type === 'radio'">
        <RadioGroup
          v-for="option in options"
          :key="option.value"
        >
          <Radio>{{ option.value }}</Radio>
        </RadioGroup>
      </template>
    </FormItem>
  </Form>
</template>

<script>
import { returnEmptyArray } from 'client/utils/lang';

export default {
  props: {
    pLabel: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'input',
    },
    options: {
      type: Array,
      default: returnEmptyArray,
    }
  },
  data() {
    return {}
  },
  computed: {
    formValue: {
      get () {
        const { echartsConf } = this.$store.state;
        if (this.pLabel) {
          return echartsConf[this.pLabel][this.label]
        }
        return echartsConf[this.label] || ''
      }, 
      set (value) {
        this.$store.commit('changeEchartsConf', { pLabel: this.pLabel, label: this.label, value })
      }
    }
  },
  mounted() {
  },
  methods: {
    
  },
}
</script>

<style lang="less">
.my-form {
  .ivu-form-item {
    margin-bottom: 0;
  }
}
</style>