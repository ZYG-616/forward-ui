import type { ExtractPropTypes, Component, PropType } from 'vue'
import { Loading } from '@element-plus/icons-vue';
import Button from './button.vue'

export const buttonTypes = [
  'primary',
  'success',
  'warning',
  'info',
  'danger',
] as const
export const buttonSizes = ['', 'default', 'small', 'large'] as const
import '@vue/runtime-core'
export const buttonProps = {
  size: {
    type: String,
    validator(value: typeof buttonSizes[number]) {
      return buttonSizes.includes(value)
    },
    default: '',
  },
  type: {
    type: String,
    validator(value: typeof buttonTypes[number]) {
      return buttonTypes.includes(value)
    },
    // default: '',
  },
  plain: Boolean,
  text: Boolean,
  bg: Boolean,
  link: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: [String, Object, Function] as PropType<string | Component>,
  loadingIcon: {
    type: [String, Object, Function] as PropType<string | Component>,
    default: () => Loading,
  },
} as const

export type ButtonPropsType = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
