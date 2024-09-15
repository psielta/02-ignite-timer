import { createContext, useRef, useState } from "react";
import { Cycle } from "../pages/Home/types/Cycles";

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  intervalRef: React.MutableRefObject<number | undefined>;
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>;
  cycles: Cycle[];
  setCycles: React.Dispatch<React.SetStateAction<Cycle[]>>;
  setActiveCycleId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  // const [cycles, setCycles] = useReducer(() => {}, [])

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

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
        setCycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
