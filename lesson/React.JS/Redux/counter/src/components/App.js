import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import {createStore} from 'redux'

const initialState = { count: 0 };

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.amount };
            break;
        case 'RESET':
            return initialState;
            break;
        case 'DECREMENT':
            return { count: state.count - action.amount };
            break;
        default:
            return state;
    }
}

function increment(amount) {
    return { type: 'INCREMENT', amount }
}

function decrement(amount) {
    return { type: 'DECREMENT', amount }
}

function reset() {
    return { type: 'RESET' };
}

const store = createStore(reducer, initialState);

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    increment() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(increment(amount));
    }

    decrement() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(decrement(amount));
    }

    reset() {
        store.dispatch(reset());
    }

    render() {
        const count = store.getState().count;
        return (
            <div>
                <span>{count}</span>

                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.reset}>R</button>
                    <button onClick={this.increment}>+</button>
                </div>

                <input type="text" ref="amount" defaultValue="1"/>
            </div>
        )
    }
}