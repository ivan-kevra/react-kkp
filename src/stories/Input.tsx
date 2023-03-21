type InputPropsType = {
    value?: string
    onChange?: () => void
}

export const Input = (props: InputPropsType) => <input value={props.value}/>