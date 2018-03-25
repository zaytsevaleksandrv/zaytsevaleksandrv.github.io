import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }
    //!!!!!PureComponent только в нужном месте, например, как здесь

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'will receive');
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
                isOpen: nextProps.defaultOpen
            })
    }

    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const { article } = this.props;
        const { isOpen, count } = this.state;
        const width = { width: '50%' };
        const body = isOpen && <section className="card-text">{article.text}</section>;

        return (
            <div className="card mx-auto" style = {width}>
                <div className="card-header">
                    <h3 onClick={this.incrementCounter}>
                        {article.title}
                        {' '}{count}
                        <button onClick={this.handleClick} className="btn btn-primary btn-md float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h3>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article