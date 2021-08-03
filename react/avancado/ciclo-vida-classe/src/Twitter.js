import React, { Component } from 'react';

class Twitter extends Component {

  state = {
    tweet: 'title'
  }

  componentDidMount() {
    const { posts, loading } = this.props
    console.log('componentDidMount', posts)
    console.log('componentDidMount: loading', loading)
  }

  componentDidUpdate(prevpros) {
    const { loading } = this.props
    if (this.props.loading !== prevpros.loading) {
      console.log('componentDidUpdate: loading', loading)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
  }

  tweet = () => {
    this.setState({
      tweet: true
    })
  }


  render() {
    const { posts } = this.props
    console.log('render', posts)
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        teste
      </div>
    )
  }
}

export default Twitter;