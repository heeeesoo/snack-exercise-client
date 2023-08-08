import {create} from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
    token: string;
    memberId: number;
    memberName: string;
};
  
type Actions = {
    setToken: (newToken: string) => void; 
    setMemberId: (newMemberId: number) => void;
    setMemberName: (newMemberName: string) => void;
    removeTokenMemId: () => void;
};

const initialState: State = {
    token: '',
    memberId: -1,
    memberName: ''
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
        setMemberName: (newMemberName: string) => {
          set({ memberName: newMemberName });
        },
        removeTokenMemId: () => set({ token: '' , memberId: -1, memberName: '' })
      }),
      { name: "user", storage: createJSONStorage(() => localStorage) }
    )
);

// const TokenStore = create<State & Actions>((set) => ({
//     ...initialState,
    // increment: () => set((state) => ({ count: state.count + 1 })),
    // decrement: () => set((state) => ({ count: state.count - 1 })),
    // resetCounterStore: () => set(initialState),
// }));


export default TokenStore;