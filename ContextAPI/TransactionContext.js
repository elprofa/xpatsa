import Reac, {createContext, useState} from 'react';

export const TransactionContext = createContext();



const TransactionProvider = (props) => {
    const [paysO, setPaysO] = useState('luouis')
    const [paysD, setPaysD] = useState('hebre')
    const transaction = {
        paysDorigine: paysO,
        paysDestinataire: paysD,
        moyenDepayement: 0,
        montantEnvoye: 0,
        frais: 0,
        totalPayer: 0,
        montantRecu: 0
    }

    const changePaysO = e => {
        console.log(e.target.value);
        console.log(transaction);
        setPaysO(e.target.value);
    };
    const changePaysD = e => {
        console.log(e.target.value);
        console.log(transaction);
        setPaysO(e.target.value);
    };
    return (
        <TransactionContext.Provider value={{ transaction, changePaysO, changePaysD}}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionProvider
