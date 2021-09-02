import HomepageMain from "../../components/Homepage/Main"
import HomepageSidebar from "../../components/Homepage/Sidebar"
import { NextPage } from "next"
import styles from '../../styles/Homepage.module.css'

const Homepage: NextPage = () => {
  return(
    <main className={styles.main}>
      <div className={styles.container}>
        <HomepageSidebar />
        <HomepageMain />
      </div>
    </main>
  )
}

export default Homepage
