export default function RadioButton ({className, name, title, arrayInput}:{ className:string, name: string, title: string, arrayInput:Array<string | any>}) {

    return (
        <div className={className}>
            <p>{title}</p>
            {arrayInput.map(({label,id, ...props}) => (
                <div key={id}>
                    <label> 
                    {label}
                    <input type="radio" name={name} {...props}></input>
                    </label>
                </div>
            ))}
        </div>
    )
}