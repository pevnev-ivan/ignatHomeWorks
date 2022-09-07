import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import f from '../h3/Greeting.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Error!'

    const showAlert = () => {
        if (error) {
            alert('Введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>

            <h1>HomeWork 4</h1>

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={f.Greeting__inpt}
                    spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={f.Greeting__inpt + ' ' + s.blackUnderline} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton className={f.Greeting__btn}>
                    Default button
                </SuperButton>

                <SuperButton
                    className={f.Greeting__btn}
                    red// пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    Colored button {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton
                    className={f.Greeting__btn}
                    disabled
                >
                    Disabled button
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}

                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
