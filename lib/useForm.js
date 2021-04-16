import { useEffect } from 'react';
import {useState} from 'react';
import {airtelMoneyFees,deductionFrais,calculateTotal,calculateFees,getResult, getRate} from '../components/shared/utils/utils.js';

export default function useForm(initial={}) {

    function handleChange(e){
        let {value,name,type,id}=e.target;
        if (type==="number") {
            value=parseInt(value);
        }
        
        if((name==="paid") && (type==="select-one"))
        {
            value=Boolean(value);
        }

        // pour le formulaire save transaction
        if(id=="transactionTo" ||
         id=="transactionFrom" || 
         id=="transactionSent" || 
         id=="transactionModalite" || 
         id=="transactionReceived"
          )
        {
            let sent=document.getElementById("transactionSent");
            let received=document.getElementById("transactionReceived");
            let to=document.getElementById("transactionTo");
            let from=document.getElementById("transactionFrom");

            // fetch rate from the API by elprofa
            let rate=getRate(from.value,to.value,sent.value);
            const promise = Promise.resolve(rate);
            promise.then((valeur) => {
                //Mise de l'etat "rate"
                //console.log(ot);
                document.getElementById("appercuTaux").innerHTML="t = "+valeur;

                console.log(sent.value,received.value,to.value,valeur);

            });
            
             // elprofa want to display transaction fees
            let fees=calculateFees(sent.value,"",from.value,to.value);
            document.getElementById("transactionFees").setAttribute("value",parseInt(fees));

            

            let resultat=getResult(from.value,to.value,parseInt(sent.value));
            const primise1 = Promise.resolve(resultat);
            primise1.then((valeur) => {
            
            document.getElementById("transactionReceived").value=Math.floor(valeur);
            //  Update contexte API currency
            
            let modalite=document.getElementById("transactionModalite").value;
            if(modalite=="ESPECE")
            {
                
                document.getElementById("transactionOtherFees").setAttribute("value",0);
                console.log("espece")
                document.getElementById("transactionOtherFees").setAttribute("value",0);
                let total=calculateTotal(parseInt(fees),parseInt(sent.value)); 
                // affecter le total par default 
                document.getElementById("transactionTotal").setAttribute("value",parseInt(total));
            }else
            {
                let am=airtelMoneyFees(sent.value);

                document.getElementById("transactionOtherFees").setAttribute("value",am);

                let total=calculateTotal(parseInt(fees),parseInt(sent.value)); 
                // affecter le total par default 
                document.getElementById("transactionTotal").setAttribute("value",parseInt(total)+parseInt(am));
            }

            });
            // console.log(document.getElementById("transactionFees"))
            // console.log(document.getElementById("transactionFees").setAttribute('value', fees));

            document.getElementById("transactionSentDevise").innerHTML=from.value;
            document.getElementById("transactionReceivedDevise").innerHTML=to.value;
            document.getElementById("transactionFeesDevise").innerHTML=from.value;
            document.getElementById("transactionOtherFeesDevise").innerHTML=from.value;
            document.getElementById("transactionTotalDevise").innerHTML=from.value;
        }

        // pour le formulaire update transaction

        if(id=="transactionTo1" ||
         id=="transactionFrom1" || 
         id=="transactionSent1" || 
         id=="transactionModalite1" || 
         id=="transactionReceived1"
          )
        {
            let sent=document.getElementById("transactionSent1");
            let received=document.getElementById("transactionReceived1");
            let to=document.getElementById("transactionTo1");
            let from=document.getElementById("transactionFrom1");

            // fetch rate from the API by elprofa
            let rate=getRate(from.value,to.value,sent.value);
            const promise = Promise.resolve(rate);
            promise.then((valeur) => {
                //Mise de l'etat "rate"
                //console.log(ot);
                document.getElementById("appercuTaux1").innerHTML="t = "+valeur;

                console.log(sent.value,received.value,to.value,valeur);

            });
            
             // elprofa want to display transaction fees
            let fees=calculateFees(sent.value,"",from.value,to.value);
            document.getElementById("transactionFees1").setAttribute("value",parseInt(fees));

            

            let resultat=getResult(from.value,to.value,parseInt(sent.value));
            const primise1 = Promise.resolve(resultat);
            primise1.then((valeur) => {
            
            document.getElementById("transactionReceived1").value=Math.floor(valeur);
            //  Update contexte API currency
            
            let modalite=document.getElementById("transactionModalite1").value;
            if(modalite=="ESPECE")
            {
                
                document.getElementById("transactionOtherFees1").setAttribute("value",0);
                // console.log("espece")
                document.getElementById("transactionOtherFees1").setAttribute("value",0);
                let total=calculateTotal(parseInt(fees),parseInt(sent.value)); 
                // affecter le total par default 
                document.getElementById("transactionTotal1").setAttribute("value",parseInt(total));
            }else
            {
                let am=airtelMoneyFees(sent.value);

                document.getElementById("transactionOtherFees1").setAttribute("value",am);

                let total=calculateTotal(parseInt(fees),parseInt(sent.value)); 
                // affecter le total par default 
                document.getElementById("transactionTotal1").setAttribute("value",parseInt(total)+parseInt(am));
            }

            });
            // console.log(document.getElementById("transactionFees"))
            // console.log(document.getElementById("transactionFees").setAttribute('value', fees));

            document.getElementById("transactionSentDevise1").innerHTML=from.value;
            document.getElementById("transactionReceivedDevise1").innerHTML=to.value;
            document.getElementById("transactionFeesDevise1").innerHTML=from.value;
            document.getElementById("transactionOtherFeesDevise1").innerHTML=from.value;
            document.getElementById("transactionTotalDevise1").innerHTML=from.value;
        }
        

        if(type==='file'){
            [value]=e.target.files;
        }
        setInputs({
            ...inputs,

            [name]:value
        });
    }

    function resetForm(){
        setInputs(initial);
    }

    function clearForm(){
        const blankState=Object.fromEntries(Object.entries(inputs).map(([key,value])=>[key,'']));
        setInputs(blankState);
    }

    
    const [inputs, setInputs] = useState(initial);
    const initialValues=Object.values(initial).join('');
    
    useEffect(()=>{
        setInputs(initial);
    },[initialValues]);


    return {
        inputs,
        handleChange,
        resetForm,
        clearForm,
    }
    
}
