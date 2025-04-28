interface SelectionProps {
    forID: string
    friendlyName?: string
    options?: string[]
}

export default function SelectionProps({forID, friendlyName, options}: SelectionProps) {
    return (
        <>
            <label htmlFor={forID}>{friendlyName ?? forID}</label>
            <select id={forID} name="friendlyName" className="" defaultValue="Name" >
                {options?.map(item => (
                    <option>{item}</option>
                ))}
            </select>
        </>
    );
}