import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware"

type State = {
    bears: number;
};

type Actions = {
    increasePopulation: ()=>void;
    decreasePopulation: ()=>void;
    removeAllBears: () => void;
};

const TestStore = create<State & Actions>()(
    persist(
        (set) => ({
            bears: 0,
            increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
            decreasePopulation: () => set((state:any) => ({ bears: state.bears - 1 })),
            removeAllBears: () => set({ bears: 0 }),
        }),
    {name : "global", storage: createJSONStorage(() => sessionStorage)}
))

export default TestStore;