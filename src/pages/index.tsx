import styles from '../../styles/Home.module.css'

type Props = {
  title?: string
}

const foo = 'bla'

export default function Home({ title = 'React Avancado!' }: Props) {
  return <div className={styles.container}>{title}</div>
}
