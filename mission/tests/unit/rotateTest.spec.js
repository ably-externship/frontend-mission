import { shallowMount } from '@vue/test-utils';
import RotateText from '@/components/RotateText.vue';

describe('RotateText.vue', () => {
  it('RotateText test', () => {
    const defaultText = '123456';
    const wrapper = shallowMount(RotateText, {
      props: { defaultText },
    });
    const rotateButton = wrapper.find('button');
    rotateButton.trigger('click');
    expect(wrapper.vm.inputText).toMatch('234561');
  });
});
