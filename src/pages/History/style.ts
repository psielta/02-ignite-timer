import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  height: 100%;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  min-height: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-600"]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["gray-500"]};
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme["gray-600"]};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme["gray-400"]};
  }
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
const STATUS_COLOR = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`;
