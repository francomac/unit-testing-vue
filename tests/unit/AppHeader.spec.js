import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("if user is not logged in, do not show logout button", () => {
    let wrapper = mount(AppHeader);

    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("if user is logged in, show logout button", async() => {
    let wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });

    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
