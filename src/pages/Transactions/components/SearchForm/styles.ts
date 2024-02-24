import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.gray_900};
    color: ${({ theme }) => theme.gray_300};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.gray_500};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.green_300};
    color: ${({ theme }) => theme.green_300};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    transition: all 0.1s;

    &:hover {
      background: ${({ theme }) => theme.green_500};
      border-color: ${({ theme }) => theme.green_500};
      color: ${({ theme }) => theme.white};
    }
  }
`
