import React, {Component} from 'react'


export default class Receiver extends Component{

    constructor() {
        super();

        this.state = {
            value: '10'
        };

        this.onValueChange = (e) => {
            this.setState({
                value: e.target.value
            })
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onMoneyCheck(this.state.value);
            this.props.notify(`You send ${this.props.toPounds(this.state.value)}`);
        };


    }

    render(){

        return (
            <form className="form-group container"
                  onSubmit={this.onSubmit}
            >
                <label htmlFor="moneySelect">Insert money</label>
                <select multiple="" className="form-control" id="moneySelect" onChange={this.onValueChange}>
                    <option value={10}>10p</option>
                    <option value={20}>20p</option>
                    <option value={50}>50p</option>
                    <option value={100}>1 &#xa3;</option>
                    <option value={200}>2 &#xa3;</option>
                </select>
                <button className="btn btn-secondary">
                        Send money
                </button>
            </form>

        )
    }
};
