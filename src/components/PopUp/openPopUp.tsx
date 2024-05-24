import {Suspense, lazy} from 'react';
import {createRoot} from 'react-dom/client';
 
const openPopUp = (children:JSX.Element) => {
    const PopUp = lazy(()=>import('./PopUp'));
    const modalDiv = document.createElement('div');
    modalDiv.id = 'popUp';
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<div>Loading...</div>}>
            <PopUp root={root} >
                {children}
            </PopUp >
        </Suspense>
    )

}

export default openPopUp;