import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type Mission = {
  groupId: number;
  missionId: number;
  exerciseId: number;
};

type State = {
  missions: Mission[];
};

type Actions = {
  addMission: (mission: Mission) => void;
  removeMissionByGroupId: (groupId: number) => void;
  removeMissions: () => void;
};

const initialState: State = {
  missions: []
};

const MissionStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      addMission: (newMission: Mission) => {
        set((state) => ({
          missions: [...state.missions, newMission]
        }));
      },
      removeMissionByGroupId: (groupId: number) => {
        set((state) => ({
          missions: state.missions.filter((mission) => mission.groupId !== groupId)
        }));
      },
      removeMissions: () => set({ missions: [] }),
    }),
    { name: "mission", storage: createJSONStorage(() => localStorage) }
  )
);

export default MissionStore;
