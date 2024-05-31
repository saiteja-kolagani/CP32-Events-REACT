// Write your code here
import './index.css'

const constantRegistrationStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="yet-to-register-image"
      />
      <h2 className="registered-text">
        You have already registered for the event
      </h2>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-image"
      />
      <h2 className="registered-text">Registrations Are Closed Now!</h2>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderRegistrationStatus = () => {
    switch (status) {
      case constantRegistrationStatus.initial:
        return (
          <p className="text-no-active-amount">
            Click on an event, to view its registration details
          </p>
        )
      case constantRegistrationStatus.yetToRegister:
        return renderYetToRegister()
      case constantRegistrationStatus.registered:
        return renderRegistered()
      case constantRegistrationStatus.registrationClosed:
        return renderRegistrationsClosed()
      default:
        return null
    }
  }

  return (
    <div className="bg-registration-container">
      {renderRegistrationStatus()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
