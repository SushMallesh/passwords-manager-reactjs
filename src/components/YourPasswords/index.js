import './index.css'

const YourPasswords = props => {
  const {webDetails, onDeletePasswordItem, isChecked} = props
  const {id, website, username, initialClassName, password} = webDetails
  const initial = username.slice(0, 1).toUpperCase()

  const onDeleteItem = () => {
    onDeletePasswordItem(id)
  }

  const maskedPassword =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  return (
    <li className="website-list-item">
      <p className={`initial-container ${initialClassName}`}>{initial}</p>
      <div className="details-card">
        <p>{website}</p>
        <p>{username}</p>
        {isChecked && <p>{password}</p>}
        {!isChecked && (
          <img className="masked-password" src={maskedPassword} alt="stars" />
        )}
      </div>
      <button
        testid="delete"
        onClick={onDeleteItem}
        className="delete-button"
        type="button"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default YourPasswords
