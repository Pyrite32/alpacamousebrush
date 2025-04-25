import BrushInspector from "../features/editor/BrushInspector/BrushInspector";
import BrushPreview from "../features/editor/BrushPreview/BrushPreview";
import PreviewCanvas from "../features/editor/PreviewCanvas/PreviewCanvas";

export default function Page() {
  return (
    <main className="h-full bg-amber-100 flex"> 
      <div className="w-9/12 mx-auto h-8/12 my-auto grid grid-cols-2 grid-rows-3 gap-2">
        <section className="row-span-3 h-full bg-slate-300">
          <BrushInspector />
          S
        </section>
        <section className="row-span-1">
          <BrushPreview />
        </section>
        <section className="row-span-2 bg-amber-200">
          <PreviewCanvas />
        </section>
      </div>
    </main>
  );
}