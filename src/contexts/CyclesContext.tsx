import { createContext, useReducer, useRef, useState } from "react";
import { Cycle } from "../pages/Home/types/Cycles";

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  intervalRef: React.MutableRefObject<number | undefined>;
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>;
  cycles: Cycle[];
  dispatch: React.Dispatch<IActionCycle>;
  setActiveCycleId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface IActionCycle {
  service: "ADD" | "INTERRUPT" | "FINISH";
  idCycle: string | null;
  Cycle?: Cycle;
}

export function CyclesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycles, dispatch] = useReducer(
    (state: Cycle[], action: IActionCycle) => {
      switch (action.service) {
        case "ADD":
          if (!action.Cycle) {
            throw new Error("Cycle is undefined");
          }
          return [...state, action.Cycle];
        case "INTERRUPT":
          return state.map((cycle) => {
            if (cycle.id === action.idCycle) {
              return {
                ...cycle,
                interruptedDate: new Date(),
              };
            }
            return cycle;
          });
        case "FINISH":
          return state.map((cycle) => {
            if (cycle.id === action.idCycle) {
              return {
                ...cycle,
                finishedDate: new Date(),
              };
            }
            return cycle;
          });
        default:
          return state;
      }
    },
    []
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId);

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        intervalRef,
        amountSecondsPassed,
        setAmountSecondsPassed,
        activeCycleId,
        setActiveCycleId,
        cycles,
        dispatch,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
