import { forwardRef, useImperativeHandle, useRef } from "react";

//forwardRef is used when we need to forward refs to other component as the name suggests, it'll have a special 2nd argument ref which contains the reference

//useImperativeHandle hook will be used to expose callable functions within the component while using forwardRef
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
