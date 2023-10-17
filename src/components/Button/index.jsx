import styles from './button.module.css'
import { useStore } from '@/store'

export default function Button({ children }) { 
  const toggle = useStore((state) => state.toggle)
  const isAltered = useStore((state) => state.isAltered)
  return (
    <button onClick={toggle} className={styles.button}>
      {isAltered ? 'Altered' : 'Original'}
    </button>
  )
}