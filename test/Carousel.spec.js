/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import Carousel from '@/components/Carousel.vue'
import { describe,it,expect } from "vitest";
import { movies } from '@/data/movies';

describe("carousel",() => {
    it("should contain navigation button",() => {
        const wrapper = mount(Carousel);
        const navButton = wrapper.findAll('.navigation')
        expect(navButton.length).toBe(2)
    })

    it("should contain carousel slide",() => {
        const wrapper = mount(Carousel, {
            propsData: {
                items: movies
            }
        });
        const carouselSlide = wrapper.findAll('.carousel-slide')
        expect(carouselSlide.length).toBeGreaterThan(0)
    })

    it("should increment visibleSlide when clicking on right button and decrement on left",() => {
        const wrapper = mount(Carousel,{
            propsData: {
                items: movies
            }
        })
        const rightButton = wrapper.find('.right-button').trigger('click')
        expect(wrapper.vm.visibleSlide).toBe(1)

        const leftButton = wrapper.find('.left-button').trigger('click')
        expect(wrapper.vm.visibleSlide).toBe(0)
    })
})