import React, { useState, createContext } from 'react';

export const ContextBuah = createContext();

export const ProviderBuah = props => {
    const [buah, setBuah] = useState([
        { id: 0, nama: '', harga: 0, berat: 0 }
    ]);
    const [newBuah, setNewBuah] = useState(
        { id: 0, nama: '', harga: 0, berat: 0 }
    );
    const [index, setIndex] = useState(-1);
    const [submitted, setSubmitted] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <ContextBuah.Provider value={
            {
                buahState: [buah, setBuah],
                newBuahState: [newBuah, setNewBuah],
                indexState: [index, setIndex],
                submittedState: [submitted, setSubmitted],
                disabledState: [disabled, setDisabled],
                loadingState: [loading, setLoading]
            }
        }>
            {props.children}
        </ContextBuah.Provider>
    );
}