import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3.5rem 2rem;

  animation: topToBot 1s ease-in;

  > .titles {
    text-align: center;
    > h1 {
      font-size: 2rem;
      font-weight: 300;
      font-family: ${props => props.theme.FONTS.Primary};
    }
    > p {
      padding-top: 0.5rem;
      font-weight: bold;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS['blue-sky']};
    }
  }

  .image {
    display: none;
  }

  > .form {
    width: 100%;
    border-radius: 0.8rem;
  }

  /* desktop */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    padding: 0 2rem 0 1rem;

    grid-template-areas:
      'null  titles titles'
      'contact form form';

    .image {
      display: block;

      /* Corrige o problema do footer entrar na imagem */
      img {
        width: 99% !important;
      }
    }

    > .titles {
      grid-area: titles;
      text-align: left;
      > h1 {
        font-size: 3.2rem;
        font-weight: 300;
        font-family: ${props => props.theme.FONTS.Primary};
      }
      > p {
        padding: 1.6rem 0 0.7rem 0;
        font-weight: bold;
        font-size: 2rem;

        color: ${({ theme }) => theme.COLORS['blue-sky']};
      }
    }
    > .form {
      grid-area: form;
      border-radius: 0.8rem;
      padding-bottom: 2rem;
    }

    > .contact {
      display: flex;
      flex-direction: column;
      grid-area: contact;
      position: relative;
      justify-content: space-between;

      /* Esse aside é o ContactBlock */
      aside {
        padding-left: 2rem;
      }
    }
  }

  @keyframes topToBot {
    from {
      opacity: 0;
      transform: translateY(-80px);
    }
    to {
      opacity: 1;
    }
  }
`
