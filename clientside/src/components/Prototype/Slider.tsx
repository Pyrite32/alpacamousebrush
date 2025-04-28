interface SliderProps {
    forID: string
    friendlyName?: string
}

export default function Slider({forID, friendlyName}: SliderProps) {
    return (
        <>
            <label htmlFor={forID}>{friendlyName ?? forID}</label>
            <progress id={forID} className="" defaultValue={50} max="100" />
        </>
    );
}