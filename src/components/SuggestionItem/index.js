import './index.css'

const CreateSuggestion = props => {
  const {details, onClickFun} = props
  const text = details.suggestion
  const onSearch = () => {
    onClickFun(text)
  }

  return (
    <li className="li">
      <div className="box">
        <p className="text">{details.suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onSearch}
        />
      </div>
    </li>
  )
}
export default CreateSuggestion
