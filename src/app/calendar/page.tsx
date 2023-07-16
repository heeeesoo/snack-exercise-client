// CounterStore.tsx
import {create} from "zustand";

type State = {
    isLogin: boolean;
};

type Actions = {
    userLogin: () => void;
    userLogout: () => void;
};

const initialState: State = {
    isLogin: false,
};

const useUserStore = create<State & Actions>((set) => ({
    ...initialState,
    userLogin: () => set((state) => ({ isLogin: true })),
    userLogout: () => set((state) => ({ isLogin: false })),
}));

export default useUserStore;