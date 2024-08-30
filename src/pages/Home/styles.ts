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

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme["blue-300"]};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${props=>props.theme["blue-300"]};
      }
    }
  }
`;