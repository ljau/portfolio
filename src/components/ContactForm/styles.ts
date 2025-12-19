import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  border-radius: 6px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #4f46e5;
  }
`;