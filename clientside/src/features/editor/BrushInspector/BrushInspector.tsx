import BrushInspectorTabSelection from "./Category/BrushInspectorTabSelection/BrushInspectorTabSelection";

export default function BrushInspector() {
    return (
        <article className="bg-slate-500 h-full">
            <h2>
                INSPECTOR
            </h2>
            <section>
                <BrushInspectorTabSelection />
                
            </section>
        </article>
    );
}