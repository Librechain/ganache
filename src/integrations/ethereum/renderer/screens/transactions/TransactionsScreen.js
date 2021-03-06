import React, { Component } from "react";
import connect from "../../../../../renderer/screens/helpers/connect";
import * as Transactions from "../../../common/redux/transactions/actions";
import RecentTransactions from "./RecentTransactions";
import TxCard from "./TxCard";

class TransactionsScreen extends Component {
  componentDidMount() {
    this.props.dispatch(Transactions.requestPage());
  }

  componentWillUnmount() {
    this.props.dispatch(Transactions.clearTransactionsInView());
  }

  render() {
    var content;
    if (this.props.match.params.transactionHash != null) {
      content = <TxCard transactionHash={this.props.match.params.transactionHash} />;
    } else {
      content = (
        <RecentTransactions scrollPosition={this.props.scrollPosition} />
      );
    }
    return <div className="TransactionsScreen">{content}</div>;
  }
}

export default connect(TransactionsScreen);
