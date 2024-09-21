import { Play, PauseCircle } from "phosphor-react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { Cycle } from "./types/Cycles";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { EnumActionCycles } from "../../reducers/cycles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(5, "Tamanho minimo 05 caracteres"),
  minutesAmount: zod.number().min(1).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const {
    activeCycle,
    setAmountSecondsPassed,
    intervalRef,
    cycles,
    dispatch,
    activeCycleId,
  } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  console.log(cycles);

  const { handleSubmit, watch } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({
      service: EnumActionCycles.ADD_NEW_CYCLE,
      Cycle: newCycle,
      idCycle: null,
      activeCycleId: newCycle.id,
    });
    setAmountSecondsPassed(0);
  }

  function handleInterruptCycle() {
    dispatch({
      service: EnumActionCycles.INTERRUPT_CURRENT_CYCLE,
      idCycle: activeCycleId,
      activeCycleId: null,
    });
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <PauseCircle size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
