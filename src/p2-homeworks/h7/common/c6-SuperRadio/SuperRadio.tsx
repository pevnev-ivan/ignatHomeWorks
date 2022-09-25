import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    name: string
    options?: Array<string>
    setValue?: (option: string) => void
    value: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, setValue,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let newOption = e.currentTarget.value
        setValue && setValue(newOption)

        // onChange, onChangeOption

    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label  key={name + '-' + i}>
            <input
                name={'test'}
                type={'radio'}
                value={o}
                checked={value === o}
                onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <div>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
