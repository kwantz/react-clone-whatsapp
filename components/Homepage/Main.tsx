import HomepageMainChatMessage from "./MainChatMessage";
import HomepageMainFooter from "./MainFooter";
import HomepageMainHeader from "./MainHeader";
import { NextPage } from "next";
import styles from '../../styles/HomepageMain.module.css'

const HomepageMain: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomepageMainHeader />
      <HomepageMainChatMessage />
      <HomepageMainFooter />
    </div>
  )
}

export default HomepageMain
