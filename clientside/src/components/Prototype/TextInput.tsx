interface TextInputProps {
    forID: string
    friendlyName?: string
}

export default function TextInput({forID, friendlyName}: TextInputProps) {
    return (
        <>
            <label htmlFor={forID}>{friendlyName ?? forID}</label>
            <input id={forID} type="text" className="" defaultValue="Name" />
        </>
    );
}