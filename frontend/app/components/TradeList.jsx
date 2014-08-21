/** @jsx React.DOM */

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var TradeRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.trade.type}</td>
                <td><Link to="tradeDetails" tradeId={this.props.trade.id}>
                {this.props.trade.description}</Link></td>
                <td>{this.props.trade.price} ETH</td>
                <td>{this.props.trade.counterpartyId?<Link to="contacts">{this.props.trade.counterparty}</Link>:'Not claimed'}</td>
                <td>{this.props.trade.status}</td>
                <td>{this.props.trade.expiration}</td>
            </tr>
        );
    }
});

var TradeList = React.createClass({
    render: function() {
        var tradeListNodes = this.props.tradeList.map(function (trade) {
            return (
                <TradeRow key={trade.id} trade={trade} />
            );
        });
        return (
            <table className="tradeList table table-striped">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Counterparty</th>
                        <th>Status</th>
                        <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                    {tradeListNodes}
                </tbody>
            </table>
        );
    }
});

module.exports = TradeList;