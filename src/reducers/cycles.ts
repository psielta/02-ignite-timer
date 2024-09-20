import { Cycle } from "../pages/Home/types/Cycles";

export interface IActionCycle {
  service: "ADD" | "INTERRUPT" | "FINISH";
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
    case "ADD":
      if (!action.Cycle) {
        throw new Error("Cycle is undefined");
      }
      return {
        activeCycleId: action.activeCycleId,
        cycles: [...state.cycles, action.Cycle],
      };
    case "INTERRUPT":
      return {
        activeCycleId: null,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.idCycle) {
            return {
              ...cycle,
              interruptedDate: new Date(),
            };
          }
          return cycle;
        }),
      };
    case "FINISH":
      return {
        activeCycleId: null,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.idCycle) {
            return {
              ...cycle,
              finishedDate: new Date(),
            };
          }
          return cycle;
        }),
      };
    default:
      return state;
  }
};
