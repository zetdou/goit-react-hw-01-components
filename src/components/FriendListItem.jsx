import { Component } from "react"; 
import PropTypes from "prop-types";

export default class FriendList extends Component {
    static PropTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    };

    render() {
        const { avatar, name, isOnline } = this.props;

        return (
            <li className="item">
                <span className={`status ${isOnline ? "online" : "offline"}`}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        )
    }
}