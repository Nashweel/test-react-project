import React from "react";
import Logo from "./components/Logo"
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel"
import paintings from "./painting.json"
    

const App = () => {
    return (
        <div>
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
    </div>
    );
    }; 
export default App;