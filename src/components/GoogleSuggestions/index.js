import {Component} from 'react'
import './index.css'
import CreateSuggestion from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionsList: this.props}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickFun = text => {
    this.setState({searchInput: text})
  }

  render() {
    const {suggestionsList} = this.state
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google"
            alt="google logo"
          />
        </div>
        <div className="search-box-container">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="magnifier"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>

          <ul>
            {searchResult.map(each => (
              <CreateSuggestion
                id={each.id}
                details={each}
                onClickFun={this.onClickFun}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
