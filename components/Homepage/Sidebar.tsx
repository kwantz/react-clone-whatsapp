import HomepageSidebarChats from './SidebarChats'
import HomepageSidebarHeader from './SidebarHeader'
import HomepageSidebarSearch from './SidebarSearch'
import { NextPage } from "next";
import styles from '../../styles/HomepageSidebar.module.css'

const HomepageSidebar: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomepageSidebarHeader />
      <HomepageSidebarSearch />
      <div className={styles.container__chats__overflow}>
        <HomepageSidebarChats />
        <HomepageSidebarChats />
        <HomepageSidebarChats />
        <HomepageSidebarChats />
        <HomepageSidebarChats />
        <HomepageSidebarChats />
        <HomepageSidebarChats />
      </div>
    </div>
  )
}

export default HomepageSidebar
