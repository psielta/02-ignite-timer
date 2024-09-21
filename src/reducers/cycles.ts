import { Cycle } from "../pages/Home/types/Cycles";
import { produce } from "immer";

export enum EnumActionCycles {
  ADD_NEW_CYCLE,
  INTERRUPT_CURRENT_CYCLE,
  MARK_CURRENT_CYCLE_AS_FINISHED,
}

export interface IActionCycle {
  service: EnumActionCycles;
  idCycle: string | null;
  Cycle?: Cycle;
  activeCycleId: string | null;
}

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export const cyclesReducer = (
  state: CyclesState,
  action: IActionCycle
): CyclesState => {
  switch (action.service) {
    case EnumActionCycles.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        if (!action.Cycle) {
          throw new Error("Cycle is undefined");
        }
        draft.cycles.push(action.Cycle);
        draft.activeCycleId = action.activeCycleId;
      });
    case EnumActionCycles.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId;
        });
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    case EnumActionCycles.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId;
        });
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    default:
      return state;
  }
};
