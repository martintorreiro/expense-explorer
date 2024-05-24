import React, {useRef} from 'react';
import { Root } from 'react-dom/client';
import { ModalStyle } from './modal.styled.component';
import useClickOutside from '@/hooks/useClickOutside';
export interface childrenProps  {
    children:  JSX.Element   ,
    root: Root
  }

const Modal = ({children, root}:childrenProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const callback = () => {
        root.unmount();
        document.querySelector('#modal')?.remove()
        if(ref.current){
            ref.current.removeEventListener('animationend',callback)
        }
    }

    const handleClose = () => {
        if(ref.current){
            ref.current.classList.add('fadeOut')
            ref.current.addEventListener('animationend',callback,{once:true})
        }
    }  



    useClickOutside({ref:ref, callback:handleClose})

    const clon = React.cloneElement(children, {closeModal:()=>handleClose()})
    

return (
    <ModalStyle  >
        <div className='modalContainer' ref = {ref}>
            
            {clon}
           
        </div>
    </ModalStyle>
)
}

export default Modal 

