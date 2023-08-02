import {create} from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
    token: string;
    memberId: number;
};
  
type Actions = {
    setToken: (newToken: string) => void; 
    setMemberId: (newMemberId: number) => void;
};

const initialState: State = {
    token: '',
    memberId: 0
};
  
// token 저장
const TokenStore = create<State & Actions>()(
    persist(
      (set) => ({
        ...initialState,
        setToken: (newToken: string) => {
          set({ token: newToken });
        },
        setMemberId: (newMemberId: number) => {
          set({ memberId: newMemberId });
        },
      }),
      { name: "global", storage: createJSONStorage(() => sessionStorage) }
    )
);

// const TokenStore = create<State & Actions>((set) => ({
//     ...initialState,
    // increment: () => set((state) => ({ count: state.count + 1 })),
    // decrement: () => set((state) => ({ count: state.count - 1 })),
    // resetCounterStore: () => set(initialState),
// }));


export default TokenStore;