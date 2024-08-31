import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 1rem;

  border-top: 1px solid var(--gray-400);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  color: var(--gray-300);

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
