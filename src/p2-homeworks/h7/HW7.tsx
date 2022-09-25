import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
// import s from '../h3/Greeting.module.css'
import f from '../../p1-main/m1-ui/u1-app/containers.module.css'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, setValue] = useState(arr[1])

    return (
        <div className={f.affairs__container}>

            <h1>HomeWork 7</h1>

            {/*should work*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    setValue={setValue}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    setValue={setValue}
                />
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}

        </div>
    )
}

export default HW7
