import {ActionType, reducer, StateType} from './reducer';

const state: StateType = {
    collapsed: false
};

const action: ActionType = {
    type: "TOGGLE-COLLAPSED"
};


test('reducer should toggle collapsed', () => {
    const newState = reducer(state, action);
    expect(newState.collapsed).toBe(true);
});