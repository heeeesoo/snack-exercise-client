import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type StateItem = {
  id: number;
  name: string;
};

type State = {
  arrGroup: StateItem[];
};

type Actions = {
  setGroup: (newArray: StateItem[]) => void; // Update the type here
  removeGroup: () => void;
};

const initialState: State = {
  arrGroup: []
};

// 그룹 name, id 저장
const GroupStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setGroup: (newArray: StateItem[]) => {
        set({ arrGroup: newArray });
      },
      removeGroup: () => {
        set({ arrGroup: [] });
      },
    }),
    { name: "global", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default GroupStore;
