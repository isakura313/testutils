// Imports
import { createLocalVue, mount } from '@vue/test-utils'
import AppBtn from '../../src/AppBtn.vue';
import Vuetify from 'vuetify'

// Utilities

describe('AppBtn.vue', () => {
  // DO NOT use Vuetify on the localInstance
  // This is bootstrapped in the jest setup
  // file located in ./tests/setup.js
  //
  // localVue.use(Vuetify)

  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should work', async () => {
    const wrapper = mount(AppBtn, {
      localVue,
      vuetify,
      propsData: { title: 'Foobar' },
    })
    const button = wrapper.find('#btn')
    const input = wrapper.find("#login")
    expect(input.text()).toContain('')
    input.element.value = 'hello'
    input.trigger('input')
    // wrapper.setData({login: 'hello'})
    expect(input.element.value).toBe('hello')
    expect(button.text()).toContain('Action')

    await button.trigger('click')
  
    expect(button.text()).toContain('Action')
  })
})