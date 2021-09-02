import { faCircleNotch, faCommentDots, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import { NextPage } from "next";
import styles from '../../styles/HomepageSidebar.module.css'

const HomepageSidebarHeader: NextPage = () => {
  const url = "https://i.pravatar.cc/45/?img=68"
  return (
    <header className={styles.container__header}>
      <Image
        className={styles.container__avatar}
        width="45"
        height="45"
        alt="avatar"
        src={url}
        loader={() => url}
      />
      <div>
        <FontAwesomeIcon className={styles.container__icons} icon={faCircleNotch} />
        <FontAwesomeIcon className={styles.container__icons} icon={faCommentDots} />
        <FontAwesomeIcon className={styles.container__icons} icon={faEllipsisV} />
      </div>
    </header>
  )
}

export default HomepageSidebarHeader
