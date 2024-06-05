import { Component } from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default class FriendList extends Component {
    
    static PropTypes = {
        friends: PropTypes.arrayOf(
            PropTypes.shape({
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired,
            })
        ).isRequired,
    };

    render() {
        const { friends } = this.props;

        return (
            <ul className="friend-list">
                {friends.map(friend => (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        );
    };
}