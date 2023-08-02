// CounterStore.tsx
import {create} from "zustand";

type State = {
    count: number;
};

type Actions = {
    increment: () => void;
    decrement: () => void;
    resetCounterStore: () => void;
};

const initialState: State = {
    count: 0,
};

const CounterStore = create<State & Actions>((set) => ({
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCounterStore: () => set(initialState),
}));

export default CounterStore;