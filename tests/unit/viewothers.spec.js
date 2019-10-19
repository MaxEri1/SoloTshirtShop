import { mount } from '@vue/test-utils'
import OtherShirts from '@/components/OtherShirts.vue'

describe('View others shirts', () =>{
    test('is a Vue instance', () => {
        const wrapper = mount(OtherShirts)
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    test('View others shirts', () =>{
        const wrapper = mount(OthersShirts)
        wrapper.vm.setViewOtherShirts('TShirt1')
        expect(wrapper.vm.OtherShirts.viewOthers).toEqual('TShirt1')

    })
})