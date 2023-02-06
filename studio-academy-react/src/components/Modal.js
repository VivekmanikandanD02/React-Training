function Modal(props){
 let {children, close, ...rest } = props; 
    if(!children){
        children = <p>This is an example modal</p>;
    }
 return (
    <div id="modal-dialog" {...rest}> 
        <div className="flex flex-col justify-center items-center">
            {children}
            <button onClick={close}>Close Modal</button>
        </div>
    </div>
 );
}

export default Modal;