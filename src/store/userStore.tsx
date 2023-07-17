import {create} from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

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

const useUserStore = create<State & Actions>()(
    persist(
        (set) => ({
            ...initialState,
            userLogin: () => set((state) => ({ isLogin: true })),
            userLogout: () => set((state) => ({ isLogin: false })),
        }),
        {name : "global", storage: createJSONStorage(() => sessionStorage)}
    )
);

export default useUserStore;