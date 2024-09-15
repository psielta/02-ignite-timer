import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./style";
import { CyclesContext } from "../../contexts/CyclesContext";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      {/* <pre>{JSON.stringify(cycles, null, 2)}</pre> */}
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 2</td>
              <td>50 minutos</td>
              <td>13:00</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 3</td>
              <td>30 minutos</td>
              <td>14:00</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr> */}
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{cycle.startDate.toLocaleTimeString()}</td>
                  <td>
                    {cycle.finishedDate ? (
                      <Status statusColor="green">Concluído</Status>
                    ) : cycle.interruptedDate ? (
                      <Status statusColor="red">Interrompido</Status>
                    ) : (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
