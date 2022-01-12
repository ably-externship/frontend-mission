import { shallowMount, mount } from '@vue/test-utils'
import RotateText from '@/components/RotateText.vue'

describe('RotateText.vue', () => {
  it('renders text type input', () => {
    const testText = 'test'
    const wrapper = shallowMount(RotateText, {
      props: { testText },
    })

    expect(wrapper.find('[data-test="text-input-customInput"]').exists()).toBe(true)
  })
  it('RotateText logic test', () => {
    const defaultText = '123456'
    const wrapper = shallowMount(RotateText, {
      props: { defaultText },
    })
    const rotateButton = wrapper.find('button')
    rotateButton.trigger('click')
    expect(wrapper.vm.inputText).toMatch('234561')
  })
})
