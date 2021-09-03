import { faEllipsisV, faPaperclip, faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import { NextPage } from "next";
import styles from '../../styles/HomepageMain.module.css'

const HomepageMainHeader: NextPage = () => {
  const url = "https://i.pravatar.cc/45/?img=1"
  return (
    <header className={styles.container__header}>
      <div className={styles.container__room}>
        <div className={styles.container__room__avatar}>
          <Image
            width="45"
            height="45"
            alt="avatar"
            src={url}
            loader={() => url}
            className={styles.container__room__avatar__img}
          />
        </div>
        <div className={styles.container__room__detail}>
          <div className={styles.container__room__name}>Room name</div>
          <div className={styles.container__room__message}>Last message</div>
        </div>
      </div>
      <div className={styles.container__header__right}>
        <FontAwesomeIcon className={styles.container__icons} icon={faSearch} />
        <FontAwesomeIcon className={styles.container__icons} icon={faPaperclip} />
        <FontAwesomeIcon className={styles.container__icons} icon={faEllipsisV} />
      </div>
    </header>
  )
}

export default HomepageMainHeader
