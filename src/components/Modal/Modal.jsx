// import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modals } from "./Modal.styled";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleCloseByKey);
    return () => {
      window.removeEventListener("keydown", handleCloseByKey);
    };
  });

  const handleCloseByKey = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleCloseByBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseByBackdrop}>
      <Modals>{children}</Modals>
    </Overlay>,
    modalRoot
  );
}

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleCloseByKey);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleCloseByKey);
//   }

//   handleCloseByKey = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   handleCloseByBackdrop = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleCloseByBackdrop}>
//         <Modals>{this.props.children}</Modals>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
