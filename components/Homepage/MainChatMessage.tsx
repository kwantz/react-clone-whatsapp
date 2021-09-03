import React, { MutableRefObject, useEffect, useRef } from "react";

import { NextPage } from "next";
import styles from '../../styles/HomepageMainChat.module.css'

type AuthorProps = {
  id: number
  name: string
}

type ChatProps = {
  sentAt: string
  message: string
  author: AuthorProps
}

type TestingProps = {
  messagesEnd: HTMLDivElement
}

class Chat extends React.Component<ChatProps> {
  constructor(props: ChatProps) {
    super(props)
  }

  render() {
    const authorName = (this.props.author.id === 1) ? this.props.author.name : 'You'
    const sentAtDate = new Date(this.props.sentAt)
    const sentAt = `${sentAtDate.getHours()}:${sentAtDate.getMinutes()}`
    const classMain = (this.props.author.id === 1)
      ? styles.container__chats__message
      : styles.container__chats__message__self
    return (
      <div className={styles.container__chats__main}>
        <div className={classMain}>
          <div className={styles.container__chats__author}>{authorName}</div>
          <div className={styles.container__chats__body}>{this.props.message}</div>
          <div className={styles.container__chats__sentat}>{sentAt}</div>
        </div>
      </div>
    )
  }
}

class HomepageMainChatMessage extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      messagesEnd: null
    }

    this.getRef = this.getRef.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const {messagesEnd} = this.state as TestingProps
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  getRef(el: HTMLDivElement) {
    this.setState({messagesEnd: el});
  }

  render() {
    const chats: ChatProps[] = [
      {
        sentAt: new Date().toISOString(),
        message: 'Hey, how are you?',
        author: {
          id: 1,
          name: 'Andi'
        }
      },
      {
        sentAt: new Date().toISOString(),
        message: 'Fine. you?',
        author: {
          id: 2,
          name: 'Budi'
        }
      },
      {
        sentAt: new Date().toISOString(),
        message: 'I\'m fine too. Thank\'s',
        author: {
          id: 1,
          name: 'Andi'
        }
      },
      {
        sentAt: new Date().toISOString(),
        message: 'Wanna play on my home?',
        author: {
          id: 1,
          name: 'Andi'
        }
      },
      {
        sentAt: new Date().toISOString(),
        message: 'Sure, on the way.',
        author: {
          id: 2,
          name: 'Budi'
        }
      }
    ]
    return (
      <div className={styles.container__chats}>
        { chats.map((chat, idx) => {
            return (
              <Chat
                key={idx}
                author={chat.author}
                sentAt={chat.sentAt}
                message={chat.message}
              />
            )
          })
        }
        <div ref={this.getRef} />
      </div>
    )
  }
}
export default HomepageMainChatMessage;
