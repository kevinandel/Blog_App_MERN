import React from "react";

function ConfirmModal({ show, onClose, onConfirm }) {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to delete this post?</h3>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">
            Yes
          </button>
          <button onClick={onClose} className="cancel-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
