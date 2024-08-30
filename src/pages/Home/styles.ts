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
  background-color: ${props=>props.theme["gray-700"]};
`;

export const Main = styled.main`
  width: min(100%, 736px);
  padding-inline: .5rem;
  height: 60%;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    gap: .5rem;
    margin-top: -1.6875rem;
    margin-bottom: 4rem;

    input {
      flex: 1;

      padding: 1rem;
      border: 0;
      border-radius: 8px;

      background-color: ${props => props.theme["gray-500"]};
      color: ${props => props.theme["gray-100"]};
      line-height: 1.4;
      font-size: 1rem;

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props=>props.theme["purple-600"]};
      }
    }

    button {
      padding: 1rem;
      border-radius: 8px;
      border: 0;
      outline: 0;

      color: ${props => props.theme["gray-100"]};
      background-color: ${props => props.theme["blue-600"]};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.4;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      transition: background-color 200ms;

      &:disabled {
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        cursor: pointer;
        background-color: ${props => props.theme["blue-300"]};
      }

      &:not(:disabled):focus {
        box-shadow: 0 0 0 2px ${props=>props.theme["blue-300"]};
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
  "blue": "blue-600",
  "purple": "purple-600"
} as const;

interface TasksListCounterProps {
  titleColor: keyof typeof TITLE_COLORS
}

export const TasksListCounter = styled.p<TasksListCounterProps>`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${props => props.theme[TITLE_COLORS[props.titleColor]]};

  display: flex;
  align-items: center;
  gap: .5rem;

  span {
    font-size: 0.75rem;
    color: ${props=>props.theme["gray-100"]};
    background-color: ${props => props.theme["gray-400"]};
    padding: 0.125rem .5rem;
    border-radius: 200px;
  }
`;

export const Tasks = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 25rem;

  margin-top: 1.5rem;

  overflow: auto;
`;

export const Task = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  padding: 1rem;
  background-color: ${props => props.theme["gray-500"]};
  border-radius: 8px;
  border: 1px solid ${props => props.theme["gray-400"]};

  button:last-child {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: ${props => props.theme["gray-300"]};
    border: 0;
    transition: color 200ms, background-color 200ms;

    &:hover {
      color: ${props => props.theme["red-500"]};
      background-color: ${props => props.theme["gray-400"]};
      border-radius: 4px;
      cursor: pointer;
    }

    &:focus {
      outline: 0;
      border-radius: 4px;
      box-shadow: 0 0 0 1px ${props => props.theme["purple-300"]}
    }
  }
`;


interface TaskDescriptionProps {
  finished: boolean
}

export const TaskDescription = styled.p<TaskDescriptionProps>`
  flex: 1;
  font-size: 1rem;
  color: ${props => props.finished ? props.theme["gray-300"] : props.theme["gray-100"]};
  text-decoration: ${props => props.finished ? "line-through" : "none"};
  line-height: 1.4;
`;

const BaseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  border: 0;
  outline: 0;

  background-color: transparent;
  color: ${props => props.theme["gray-100"]};
  transition: background-color 100ms, opacity 100ms;

  cursor: pointer;
`;

export const PendingButton = styled(BaseButton)`
  border: 2px solid ${props => props.theme["blue-300"]};

  &:hover {
    background-color: ${props => props.theme["blue-600"]};
    opacity: .2;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme["blue-300"]};
  }
`;

export const FinishedButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme["purple-600"]};

  &:hover {
    background-color: ${props => props.theme["purple-300"]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme["purple-300"]};
  }
`;
