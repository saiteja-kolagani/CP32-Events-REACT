// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent

  const onTap = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button type="button" className="event-btn-container" onClick={onTap}>
        <img src={imageUrl} alt="event" className="image-event-item" />
        <p className="name-event-item">{name}</p>
        <p className="location-event-item">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
