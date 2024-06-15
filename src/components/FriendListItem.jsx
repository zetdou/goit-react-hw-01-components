import { Component } from "react"; 
import PropTypes from "prop-types";
import styles from "../styles/FriendListItem.module.css";

export default class FriendList extends Component {
    static PropTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    };

    render() {
        const { avatar, name, isOnline } = this.props;

        return (
            <li className={styles.item}>
                <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{name}</p>
            </li>
        )
    }
}