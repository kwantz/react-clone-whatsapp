import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from "next";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/HomepageSidebar.module.css'

const HomepageSidebarSearch: NextPage = () => {
  return (
    <div className={styles.container__search}>
      <div className={styles.container__search__main}>
        <FontAwesomeIcon className={styles.container__search_icon} icon={faSearch} />
        <input className={styles.container__search__input} placeholder="Search or start new chat"/>
      </div>
    </div>
  )
}

export default HomepageSidebarSearch
