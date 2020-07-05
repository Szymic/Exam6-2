import { ADD_ROCKET, REMOVE_ROCKET } from "../redux/actions";
import reducer from "../redux/reducer";

describe("Zadanie 2", () => {


  it("ADD_ROCKET action is defined", () => {
    expect(typeof ADD_ROCKET).toBe("string");
  });

  it("REMOVE_ROCKET action is defined", () => {
    expect(typeof REMOVE_ROCKET).toBe("string");
  });

  it("reducer has empty array as inital state", () => {
    expect(reducer(undefined, {})).toEqual([])
  });

  it("reducer adds rocket on ADD_ROCKET action", () => {
    expect(reducer(undefined, { type: ADD_ROCKET })).toEqual([
      { launched: false, counter: 5 }
    ])
  });

  it("reducer adds rocket on ADD_ROCKET action", () => {
    const state = [{ launched: false, counter: 5 }, { launched: false, counter: 5 }];

    expect(reducer(state, { type: REMOVE_ROCKET })).toHaveLength(1)
  });

});
