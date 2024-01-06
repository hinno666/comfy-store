type Props = {
    label: string;
    name: string;
    type: string;
    defaultValue?: string;
}

export const FormInput = ({ label, name, type, defaultValue }: Props) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className="input input-bordered"
            />
        </label>
    )
}
