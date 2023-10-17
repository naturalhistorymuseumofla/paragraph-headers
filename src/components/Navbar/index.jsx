import styles from './navbar.module.css'
import Button from '../Button'

export default function Navbar() { 
  return (
    <div className={styles.navbar}>
      <Button> Hello! </Button>
    </div>
  )
}