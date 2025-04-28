import PegboardContainer from "../../../../../components/PegboardContainer/PegboardContainer";
import TextInput from "../../../../../components/Prototype/TextInput";

export default function GeneralCategory() {
    return (
        <PegboardContainer width={"80%"} className="mx-auto">
            <section className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <TextInput forID="brush-width" />
                </div>
            </section>
            Generala
        </PegboardContainer>
    );
}