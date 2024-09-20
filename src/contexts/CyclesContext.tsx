import { createContext, useReducer, useRef, useState } from "react";
import { Cycle } from "../pages/Home/types/Cycles";
import { cyclesReducer, CyclesState, IActionCycle } from "../reducers/cycles";

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  intervalRef: React.MutableRefObject<number | undefined>;
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>;
  cycles: Cycle[];
  dispatch: React.Dispatch<IActionCycle>;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycleState, dispatch] = useReducer<
    React.Reducer<CyclesState, IActionCycle>
  >(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);
  const activeCycle = cycleState.cycles.find(
    (cycle: Cycle) => cycle.id === cycleState.activeCycleId
  );

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId: cycleState.activeCycleId,
        amountSecondsPassed,
        intervalRef,
        setAmountSecondsPassed,
        cycles: cycleState.cycles,
        dispatch,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
