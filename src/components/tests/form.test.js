import React from "react";
import NoteForm from "../note/NoteForm";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Note form", () => {
  it("should have disabled submit button until form is filled", () => {
    const form = mount(<NoteForm/>);

    expect(form.find("#createNoteButton").first()).toBeDisabled();

    // fill form inputs
    form
      .find("#noteCreateTitle")
      .first()
      .simulate("change", { target: { value: "abc" } });
    form
      .find("#noteCreateBody")
      .first()
      .simulate("change", { target: { value: "abc" } });

    expect(form.find("#createNoteButton").first()).not.toBeDisabled();
  });
});
