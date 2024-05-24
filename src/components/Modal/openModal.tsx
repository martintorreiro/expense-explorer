import {Suspense, lazy} from 'react';
import {createRoot} from 'react-dom/client';
 
const openModal = (children:JSX.Element) => {
    const Modal = lazy(()=>import('./Modal'));
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    const container = document.querySelector(`#main`)
    container&&container.appendChild(modalDiv)

    const root = createRoot(modalDiv);
    console.log(children)
    root.render(
        <Suspense fallback={<div>Loading...</div>}>
            <Modal root={root} >
                {children}
            </Modal >
        </Suspense>
    )

}

export default openModal;