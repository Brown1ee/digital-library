import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .modal-content{
    background-color: ${({ theme }) => theme.body};
  }
  .navbar-light .navbar-text a {
      color: ${({ theme }) => theme.text};
  }
  .card{
    background-color:${({ theme }) => theme.body};
  }
  .bg-light{
    background-color:${({ theme }) => theme.nav} !important;
  }

  .btn-primary{
    border: none;
    color: ${({ theme }) => theme.buttonText};
    background-color:${({ theme }) => theme.button};

  }
  a:hover{
    text-decoration: none;
  }
  .btn-primary:hover{
      border: none;
    color: ${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.button};
  }
  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active{
    border: none;
    color: ${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.button};
  }
  .btn-primary.focus, .btn-primary:focus{
    border: none !important;
    color: ${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.button};
  }
`;
