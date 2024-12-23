import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function saveProject() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      !title.trim().length ||
      !description.trim().length ||
      !dueDate.trim().length
    ) {
      modalRef.current.open();
      return;
    }
    console.log({ title, description, dueDate });
    onAdd({ title, description, dueDate });
  }

  function cancelProject() {
    onCancel();
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={cancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={saveProject}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due date" />
        </div>
      </div>
    </>
  );
}
