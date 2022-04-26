import React, {useState} from 'react';
import './PaletaLista.css';
import { paletas } from '../src/mocks/paletas';

function PaletaLista() {
    const [paletaSelecionada, setPaletaSelecionada] = useState({});

    const adicionarItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
    }

    const removerItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1 }
        setPaletaSelecionada({...paletaSelecionada, ...paleta});
    }
    
    const removeButton = (canRender, index) =>
	    Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);


    
    const badgeCounter = (canRender, index) =>
	    Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>);


    return (
        <div className="PaletaLista">
        {paletas.map((paleta, index) =>
            <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
                {badgeCounter(paletaSelecionada[index], index)}
                
                <div>
                        <div className="PaletaListaItem__titulo"> Doce de Leite com Doce de Leite </div>
                        <div className="PaletaListaItem__preco">R$ 10,00</div>
                        <div className="PaletaListaItem__descricao"> Quam vulputate dignissim suspendisse in est ante in nibh mauris.  </div>
                        <div className="PaletaListaItem__acoes Acoes">
                        <button className={`Acoes__adicionar ${!paletaSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>

                        {removeButton(paletaSelecionada[index], index)}
                        </div>
                    </div>
                    <img className="PaletaListaItem__foto" src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
            </div>
        )}
        </div>
    )   
 
}

  
  export default PaletaLista;
