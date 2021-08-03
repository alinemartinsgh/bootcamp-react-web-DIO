import React, { Fragment } from 'react';
//import Twitter from './Twitter';

/* class App extends Component {

  state = {
    loading: false,
    activated: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      activated: false
    })
  }

  render() {

    const posts = [{
      title: 'qlqr coisa',
      description: 'outra coisa'
    },
    {
      title: 'qlqr outra coisa',
      description: 'outra outra coisa'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {this.state.activated && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
} */

const store = [{
  type: 'Roupa'
}, {
  type: 'Calçado'
},
{
  type: 'Camiseta'
}]

function Column({ type }) {
  return(
    <tr>
      <td>{type}</td>
    </tr>
  )
 }


function App() {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>
  )

  return (
    <table>
      {store.map(renderColumns)}
    </table>
  )
}

export default App;
