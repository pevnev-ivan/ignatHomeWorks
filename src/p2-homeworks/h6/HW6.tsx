import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from '../h3/Greeting.module.css'
import f from '../../p1-main/m1-ui/u1-app/containers.module.css'
function HW6() {
    const [value, setValue] = useState<string>('Editable Span & local storage')

    useEffect(() => {
        setValue(restoreState('editable-span-value', value))
    }, [])

    useEffect(() => {
        saveState<string>('editable-span-value', value)
    }, [value])

    const clear = () => {
        localStorage.clear()
        setValue('Editable Span & local storage')
    }

    return (
        <div className={f.affairs__container}>
            <h1>homeworks 6</h1>

            {/*should work (должно работать)*/}
            <div >
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : value}}
                    inputClassName={s.Editable__Span}

                />
            </div>
            <SuperButton
                className={s.Greeting__btn}
                onClick={clear}>clear local storage</SuperButton>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}

        </div>
    )
}

export default HW6
