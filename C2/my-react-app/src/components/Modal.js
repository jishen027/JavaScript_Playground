import './Modal.css'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {props.children}
        <button onClick={props.handleClose}>Close</button>
      </div>
    </div>
  ), document.body)
}
