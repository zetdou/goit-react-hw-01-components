import { Component } from "react";
import PropTypes from "prop-types"

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
            <section className="statistics">
                {title && <h2 className="title">{title}</h2>}
                <ul className="stat-list">
                    {stats.map(stat => (
                        <li key={stat.id} className="item">
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}</span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }    
}