import React from 'react'

const TestContext = React.createContext({
    labelPaysOrigine:"",
    updateLabelPaysOrigine: name=>{},
    labelPaysDestinataire:"",
    updateLabelPaysDestinataire:name=>{},
    TrBillingInformation:"",
    setBillingInformation:name=>{}
})

export const TestProvider = TestContext.Provider
export const TestConsumer = TestContext.Consumer

export default TestContext