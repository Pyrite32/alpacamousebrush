import BrushInspectorTabSelection from "./Category/BrushInspectorTabSelection/BrushInspectorTabSelection";
import GeneralCategory from "./Category/GeneralCategory/GeneralCategory";

export default function BrushInspector() {
    return (
        <article className="bg-slate-500 h-full">
            <h2>
                INSPECTOR
            </h2>
            <section>
                <BrushInspectorTabSelection />
                <GeneralCategory />
            </section>
        </article>
    );
}