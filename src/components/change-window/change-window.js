import React, { Component, Fragment } from 'react';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const ChangeWindow = ({ change, toPounds, getChange }) => {
    return (
        <Fragment>
            <h3 className="container">Take your change!</h3>
            <div className="container jumbotron">
                <p>{change === 0 ? 'There are no change...' : getChange(change).map(([coin, count]) => `${count} x £${coin}`).join(" + ")}</p>
            </div>
        </Fragment>
    );
};

class ChangeWindowContainer extends Component {


    render() {
        const { loading, error, change, toPounds, getChange } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <ChangeWindow
            change={change}
            toPounds={toPounds}
            getChange={getChange}
        />;
    }
}

export default ChangeWindowContainer;