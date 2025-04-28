export default function BrushInspectorTabSelection() {
    return (
        <div className="relative w-11/12 mx-auto mb-3">
            <ul className="flex flex-row justify-between">
                <li>
                    <h4>
                        General
                    </h4>
                </li>
                <li>
                    <h4>
                        Pressure
                    </h4>
                </li>
                <li>
                    <h4>
                        Graphics
                    </h4>
                </li>
                <li>
                    <h4>
                        Overlay
                    </h4>
                </li>
                <li>
                    <h4>
                        Misc.
                    </h4>
                </li>
            </ul>
            <hr className="absolute -bottom-1 w-full border-b-black" />
        </div>
    );
}