import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import IndexPage from '@/pages/index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('IndexPage', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        episodes: {
          state: {
            currentEpisode: null,
          },
        },
      },
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(IndexPage, {
      store,
      localVue,
      stubs: { NuxtLink: RouterLinkStub },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
