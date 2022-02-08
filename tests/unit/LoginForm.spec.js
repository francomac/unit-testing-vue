import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  test("emits an event with user data payload", () => {
    let wrapper = mount(LoginForm);
    let nameInput = wrapper.find("[data-testid='nameInput']"); // Find text input

    nameInput.setValue("francomac"); // Set value for text input
    wrapper.trigger("submit"); // Simulate form submission

    // Assert event has been emitted
    let formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    // Assert payload is correct
    const expectedPayload = { name: "francomac" };
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload);
  });
});
