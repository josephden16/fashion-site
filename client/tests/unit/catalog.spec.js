import { shallowMount } from '@vue/test-utils'
import ProductSection from "../../src/components/ProductSection";

describe('ProductSection.vue', () => {
  it('renders props.msg when passed', () => {
    const dataObject = {
        title: "Fashion",
        lead: "Metiers d'Art 2017/2018",
        url: "/fashion",
        content: "",
        className: "product-section fashion",
    }
    const wrapper = shallowMount(ProductSection, {
      propsData: { dataObject }
    })
    expect(wrapper.text()).toMatch("Fashion  Metiers d'Art 2017/2018  See more")
  })
})
