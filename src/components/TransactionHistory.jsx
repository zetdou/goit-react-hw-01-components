import { Component } from "react";
import PropTypes from "prop-types"
import styles from "../styles/TransactionHistory.module.css";

export default class TransactionHistory extends Component {
    
    static PropTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
                currency: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

    render() {
        const { items } = this.props;

        return (
            <table className={styles.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
