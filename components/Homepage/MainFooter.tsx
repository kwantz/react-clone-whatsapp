import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { faGrin, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { DOMElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import styles from '../../styles/HomepageMain.module.css'

type Props = {
  message: string
}

class ChatActions extends React.Component<Props> {
  render() {
    return (this.props.message.length)
      ? (<FontAwesomeIcon className={styles.container__footer__icons} icon={faPaperPlane} />)
      : (<FontAwesomeIcon className={styles.container__footer__icons} icon={faMicrophone} />)
  }
}

class HomepageMainFooter extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {message: ''};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: any) {
    this.setState({message: event.target.value});
  }

  render() {
    const { message } = this.state as Props
    return (
      <footer className={styles.container__footer}>
        <FontAwesomeIcon className={styles.container__footer__icons} icon={faGrin} />
        <div className={styles.container__footer__chat}>
          <input
            className={styles.container__footer__chat__input}
            placeholder="Type a message"
            onChange={this.handleChange}
          />
        </div>
        <ChatActions message={message} />
      </footer>
    )
  }
}

export default HomepageMainFooter;
