import { Component } from "react";
import PropTypes from "prop-types"
import styles from "../styles/Statistics.module.css";

export default class Statistics extends Component {
    static defaultProps = {
        title: "",
    };

    static PropTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            })
        ).isRequired,
    };

    render() {
        const { title, stats } = this.props;

        return (
            <section className={styles.statistics}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <ul className={styles.statList}>
                    {stats.map(stat => (
                        <li key={stat.id} className={styles.item}>
                            <span className={styles.label}>{stat.label}</span>
                            <span className={styles.percentage}>{stat.percentage}</span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }    
}