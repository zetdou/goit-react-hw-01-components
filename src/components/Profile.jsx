import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Profile.module.css";

export default class Profile extends Component {
  static defaultProps = {};

  static propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      likes: PropTypes.number,
    }),
  };

  render() {
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={this.props.avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{this.props.username}</p>
          <p className={styles.tag}>{this.props.tag}</p>
          <p className={styles.location}>{this.props.location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{this.props.stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{this.props.stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}
