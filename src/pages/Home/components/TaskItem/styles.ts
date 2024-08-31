import styled from "styled-components";

export const Task = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  padding: 1rem;
  background-color: ${(props) => props.theme["gray-500"]};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-400"]};

  button:last-child {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: ${(props) => props.theme["gray-300"]};
    border: 0;
    transition:
      color 200ms,
      background-color 200ms;

    &:hover {
      color: ${(props) => props.theme["red-500"]};
      background-color: ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      cursor: pointer;
    }

    &:focus {
      outline: 0;
      border-radius: 4px;
      box-shadow: 0 0 0 1px ${(props) => props.theme["purple-300"]};
    }
  }
`;

interface TaskDescriptionProps {
  finished: boolean;
}

export const TaskDescription = styled.p<TaskDescriptionProps>`
  flex: 1;
  font-size: 1rem;
  color: ${(props) =>
    props.finished ? props.theme["gray-300"] : props.theme["gray-100"]};
  text-decoration: ${(props) => (props.finished ? "line-through" : "none")};
  line-height: 1.4;
`;

const BaseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  border: 0;
  outline: 0;

  background-color: transparent;
  color: ${(props) => props.theme["gray-100"]};
  transition:
    background-color 100ms,
    opacity 100ms;

  cursor: pointer;
`;

export const PendingButton = styled(BaseButton)`
  border: 2px solid ${(props) => props.theme["blue-300"]};

  &:hover {
    background-color: ${(props) => props.theme["blue-600"]};
    opacity: 0.2;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["blue-300"]};
  }
`;

export const FinishedButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["purple-600"]};

  &:hover {
    background-color: ${(props) => props.theme["purple-300"]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["purple-300"]};
  }
`;
