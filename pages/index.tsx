import type { NextPage } from 'next'

import My_navbar from '../components/shared/my_navbar'
import styles from '../styles/Home.module.scss'
import AboutUs from './aboutUs'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AboutUs/>
   
    </div>
  )
}

export default Home
