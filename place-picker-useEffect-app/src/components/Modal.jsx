import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById("modal")
//   );
// });

function Modal({ isOpen, children, onClose }) {
  const dialog = useRef();

  //Instead of using ref prop and useImperativeHandle, we can use useEffect to achieve the same result like below
  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]); // Here open is a prop that is passed to the Modal component and it is a dependency of the useEffect hook here

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {isOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
