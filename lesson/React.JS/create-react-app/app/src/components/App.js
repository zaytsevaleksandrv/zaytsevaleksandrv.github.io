import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../data'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    }

    render() {
        const { reverted } = this.state
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name</h1>
                    <button className={'btn btn-md'} onClick = {this.revert}>Revert</button>
                </div>
                <ArticleList articles = {reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App