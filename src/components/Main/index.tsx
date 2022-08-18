import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS, Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src={'/img/logo.svg'}
        alt={'Imagem de um atomo e react avancado escrito ao lado.'}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src={'/img/hero-illustration.svg'}
        alt={'Um desenvolvedor de frente pra uma tela com codigos'}
      />
    </S.Wrapper>
  )
}

export default Main
