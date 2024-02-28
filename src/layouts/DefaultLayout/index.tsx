import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layout}>{children}</div>
    </div>
  )
}
