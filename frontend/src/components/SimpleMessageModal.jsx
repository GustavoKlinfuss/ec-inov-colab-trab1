import React from "react";

const SimpleMessageModal = (props) => {
    return (<div className="modal">
        <div className="modal-content">
          <h1>{props.title}</h1>
          <p>{props.message}</p>
        </div>
      </div>)
}

export default SimpleMessageModal;