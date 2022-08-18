import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src={'/img/logo.svg'}
        alt={'Imagem de um atomo e react avancado escrito ao lado.'}
      />
      <S.Title>React Avancado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS, Styled Components
      </S.Description>
      <S.Illustration
        src={'/img/hero-illustration.svg'}
        alt={'Um desenvolvedor de frente pra uma tela com codigos'}
      />
    </S.Wrapper>
  )
}

export default Main
