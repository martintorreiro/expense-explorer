import { useRef, useEffect } from 'react';
import { Root } from 'react-dom/client';
import { PopUpStyle } from './popUp.styled.component';
export interface PopUpProps  {
    children:  JSX.Element  ,
    root: Root
  }

const PopUp = ({children, root}:PopUpProps) => {

    const ref = useRef<HTMLDivElement>(null)

    const callback = () => {
        root.unmount();
        document.querySelector('#popUp')?.remove()
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

    useEffect(()=>{
        const clear = setTimeout(()=>{
            handleClose()
        }, 1800)

        return ()=>clearTimeout(clear)

    },[]) 

    

return (
    <PopUpStyle  >
        <div className='modalContainer' ref = {ref}>     
                
            <main className='children'>
                {children}
            </main>

            <button onClick={handleClose} className='closeButton'>
                x
            </button>

        </div>
    </PopUpStyle>
)
}

export default PopUp 

