import RandomNumber from "@/components/RandomNumber";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  test("by default, number data value should be zero", () => {
    let wrapper = mount(RandomNumber);

    expect(wrapper.vm.randomNumber).toBe(0);
  });
  test("if button is clicked, randomNumber should be between 1 and 10", async () => {
    let wrapper = mount(RandomNumber);

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.randomNumber).toBeGreaterThanOrEqual(1);
    expect(wrapper.vm.randomNumber).toBeLessThanOrEqual(10);
  });
  test("if button is clicked, randomNumber should be between 200 and 300", async () => {
    let wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300,
      },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.randomNumber).toBeGreaterThanOrEqual(200);
    expect(wrapper.vm.randomNumber).toBeLessThanOrEqual(300);
  });
});
