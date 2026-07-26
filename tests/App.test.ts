import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('should render the heading', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('You did it!')
  })
})
