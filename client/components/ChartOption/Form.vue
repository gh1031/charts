<template>
  <Form
    class="my-form"
    :label-width="80"
  >
    <FormItem :label="label">
      <template v-if="type === 'input'">
        <Input
          v-model="formValue"
          :placeholder="config.placeholder"
        />
      </template>
      <template v-if="type === 'select'">
        <Select />
      </template>
      <template v-if="type === 'radio'">
        <RadioGroup
          v-for="option in config.options"
          :key="option.value"
          v-model="formValue"
        >
          <Radio
            :label="option.value"
          >
            {{ option.label }}
          </Radio>
        </RadioGroup>
      </template>
    </FormItem>
  </Form>
</template>

<script>
// import { returnEmptyArray } from 'client/utils/lang';

export default {
  props: {
    gLabel: {
      type: String,
      default: '',
    },
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
      default: 'input'
    },
    config: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {}
  },
  computed: {
    formValue: {
      get () {
        const { echartsConf } = this.$store.state;
        if (this.gLabel) {
          return echartsConf[this.gLabel][this.pLabel][this.label]
        }
        if (this.pLabel) {
          return echartsConf[this.pLabel][this.label]
        }
        return echartsConf[this.label] || ''
      }, 
      set (value) {
        this.$store.commit('changeEchartsConf', { gLabel: this.gLabel, pLabel: this.pLabel, label: this.label, value })
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