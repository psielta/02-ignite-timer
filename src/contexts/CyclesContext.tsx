import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { Cycle } from "../pages/Home/types/Cycles";
import { cyclesReducer, CyclesState, IActionCycle } from "../reducers/cycles";
import { differenceInSeconds } from "date-fns";

const NM_LOCAL_STORAGE = "@ignite-timer-v1:cycles-state";

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

function init(initialState: CyclesState): CyclesState {
  const storedStateAsJSON = localStorage.getItem(
    "@ignite-timer:cycles-state-1.0.0"
  );
  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON);
  }
  return initialState;
}

export function CyclesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycleState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(NM_LOCAL_STORAGE);
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );

  useEffect(() => {
    const stateJsON = JSON.stringify(cycleState);
    localStorage.setItem(NM_LOCAL_STORAGE, stateJsON);
  }, [cycleState]);

  const intervalRef = useRef<number | undefined>(undefined);
  const activeCycle = cycleState.cycles.find(
    (cycle: Cycle) => cycle.id === cycleState.activeCycleId
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });
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
