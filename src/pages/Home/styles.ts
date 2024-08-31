import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4.5rem 0 5rem;
  width: 100%;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const Main = styled.main`
  width: min(100%, 736px);
  padding-inline: 0.5rem;
  height: 60%;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    gap: 0.5rem;
    margin-top: -1.6875rem;
    margin-bottom: 4rem;

    input {
      flex: 1;

      padding: 1rem;
      border: 0;
      border-radius: 8px;

      background-color: ${(props) => props.theme["gray-500"]};
      color: ${(props) => props.theme["gray-100"]};
      line-height: 1.4;
      font-size: 1rem;

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["purple-600"]};
      }
    }

    button {
      padding: 1rem;
      border-radius: 8px;
      border: 0;
      outline: 0;

      color: ${(props) => props.theme["gray-100"]};
      background-color: ${(props) => props.theme["blue-600"]};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.4;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: background-color 200ms;

      &:disabled {
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        cursor: pointer;
        background-color: ${(props) => props.theme["blue-300"]};
      }

      &:not(:disabled):focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-300"]};
      }
    }
  }
`;

export const TodoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TITLE_COLORS = {
  blue: "blue-600",
  purple: "purple-600",
} as const;

interface TasksListCounterProps {
  titleColor: keyof typeof TITLE_COLORS;
}

export const TasksListCounter = styled.p<TasksListCounterProps>`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${(props) => props.theme[TITLE_COLORS[props.titleColor]]};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-100"]};
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 0.125rem 0.5rem;
    border-radius: 200px;
  }
`;

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 25rem;

  margin-top: 1.5rem;

  overflow: auto;
`;
