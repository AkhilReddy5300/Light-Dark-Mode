import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode', card: 'card-container', head: 'header'}

  changeBtn = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState(prevState => ({
        mode: 'Dark Mode',
        card: 'card-container-2',
        head: 'header-2',
      }))
    } else {
      this.setState(prevState => ({
        mode: 'Light Mode',
        card: 'card-container',
        head: 'header',
      }))
    }
  }

  render() {
    const {mode, card, head} = this.state
    return (
      <div className="bg-cont">
        <div className={card}>
          <h1 className={head}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.changeBtn}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
