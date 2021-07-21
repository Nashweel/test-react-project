import React from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Logo from "./components/Logo"
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import Alert from "./components/Alert/Alert"
import Container from "./components/Container/Container"
import paintings from "./painting.json";
    
const colorPickerOptions = [
    { label: "red", color: "#F44336"},
    { label: "green", color: "#4CAF50"},
    { label: "blue", color: "#2196F3"},
    { label: "grey", color: "#607D8B"},
    { label: "pink", color: "#E91E63"},
    { label: "indigo", color: "#3F51B5"},
];

const App = () => {
    return (
<Container>
<Alert text = "Шеф все пропало!" type="success"/>
            <Alert text = "Шеф все пропало!" type="warning"/>
            <Alert text = "Шеф все пропало!" type="error"/>
            <Panel title="Последние новости">
                <p>Lorem ipsum ghbdk sfjdfgn s sjfdnfdjn dfjsn dskfn skg 
                    fkdsjnfkdsnfksdnfksdjfnksdjfn ksjdnf ksj fk snd ksfj sdkjf ns
                    f ndskfjn k jsf nkds jnfsk jsdnf kfn f dksjnf 
                </p>
                <a href=".">Читать...</a>
            </Panel>

            <Panel>
                <p>
                    Lorem fdsnf lsdn lkdslfndslf lkdfls nlsdnlflds l dlf n
                    okfpmwmf; wf owmf kew;mf;we mfwemfwemgnlr e mglr mhrthnteng 
                    geon ern lerng lern glrne glern g
                </p>

            </Panel>
     <Logo text = "Главный компонент-контейнер приложения"/>   
    <PaintingList paintings={paintings}/>
    <ColorPicker options = {colorPickerOptions}/>
    </Container>
    );
    }; 
export default App;