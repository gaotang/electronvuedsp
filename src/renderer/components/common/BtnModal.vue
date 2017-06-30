<template>
  <span>
    <Button :type="currentType" :size="btnSize" :icon="btnIcon" @click="handlerClick">{{ btnText }}</Button>
    <Modal v-model="currentValue" :title="title" @on-ok="handlerOk" @on-cancel="handlerCancel" :mask-closable="false">
      <slot></slot>
    </Modal>
  </span>
</template>

<script>
import { oneOf } from '@/utils/assist'

export default {
  name: 'btnmodal',
  props: {
    title: {
      type: String,
      default: ''
    },
    btnSize: {
      type: String,
      validator (value) {
        return oneOf(value, ['small', 'large']);
      }
    },
    btnIcon: {
      type: String,
      default: ''
    },
    btnType: {
      type: String,
      default: 'default',
      validator(value) {
        return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
      }
    },
    btnText: {
      type: String,
      default: ''
    },
    value: Boolean
  },
  data() {
    return {
      currentType: this.btnType,
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handlerClick() {
      this.currentValue = true
      this.$emit('input', this.currentValue)
    },
    handlerOk(event) {
      this.$emit('on-oK', event)
    },
    handlerCancel(event) {
      this.$emit('onCancel', event)
    }
  }
}
</script>
