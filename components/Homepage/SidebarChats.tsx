import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import { NextPage } from "next";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/HomepageSidebar.module.css'

const HomepageSidebarChats: NextPage = () => {
  const url = "https://i.pravatar.cc/45/?img=1"
  return (
    <div className={styles.container__chats}>
      <div className={styles.container__chats__avatar}>
        <Image
          width="45"
          height="45"
          alt="avatar"
          src={url}
          loader={() => url}
          className={styles.container__chats__avatar__img}
        />
      </div>
      <div className={styles.container__chats__room}>
        <div className={styles.container__chats__name}>Room name Room name Room name Room name</div>
        <div className={styles.container__chats__message}>Last message Last message Last message</div>
      </div>
    </div>
  )
}

export default HomepageSidebarChats
