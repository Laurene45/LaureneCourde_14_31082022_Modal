import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

/**
 * @description Modal
 *
 * @param   {string}  props.title
 * @param   {boolean}  props.show
 * @param   {function}  props.onClose
 * @param   {element}  props.children
 * @param   {element}  props.footer
 * @returns {Reactnode}  jsx injected in DOM
 */

const Modal = ({ show, title, children, footer, onClose }) => {
  const modal = (
    <div className="modal" data-testid="modal">
      <div className="modal-container">
        <h3 className="modal-title" data-testid="modal-title">{title}</h3>
        <p className="modal-body" data-testid="modal-body">{children}</p>
        <button
          className="modal-footer close-button"
          data-testid="close-button"
          onClick={() => {
            onClose();
          }}
        >
          {footer}
        </button>
      </div>
    </div>
  );

  return show ? ReactDOM.createPortal(modal, document.body) : null;
};

//il est parfois utile d’insérer un enfant à un autre emplacement du DOM
// React *ne crée pas* une nouvelle div, mais affiche les enfants dans le Domnode.
// Domnode peut être n’importe quel élément valide du DOM, peu importe sa position.

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]),
  footer: PropTypes.object,
};

export default Modal;