import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
