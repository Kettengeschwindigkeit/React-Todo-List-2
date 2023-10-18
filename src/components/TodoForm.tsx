// ================================================================================================================================================================================ with useRef()

import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className='input-field mt2'>
            <input type='text' id='title' ref={ref} onKeyPress={keyPressHandler} placeholder='Enter todo title' />
            <label htmlFor='title' className='active'>Enter todo title</label>
        </div>
    )
}

// ============================================================================================================================================================================== with useState()

// import React, { useState } from 'react'

// export const TodoForm: React.FC<{ onAdd(title: string): void }> = (props) => {
//     const [title, setTitle] = useState<string>('')

//     const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(event.target.value);
//     };

//     const keyPressHandler = (event: React.KeyboardEvent) => {
//         if (event.key === 'Enter') {
//             setTitle('')
//         }
//     }

//     return (
//         <div className='input-field mt2'>
//             <input type='text' id='title' value={title} onChange={changeHandler} onKeyPress={keyPressHandler} placeholder='Enter todo title' />
//             <label htmlFor='title' className='active'>Enter todo title</label>
//         </div>
//     )
// }
