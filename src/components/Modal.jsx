import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return (
    <div>
      {createPortal(
        <dialog
          ref={dialog}
          className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
          {children}
          <form method="dialog" className="flex">
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ml-auto mt-4">
              close
            </button>
          </form>
        </dialog>,
        document.getElementById("modal-root")
      )}
    </div>
  )
})

export default Modal
