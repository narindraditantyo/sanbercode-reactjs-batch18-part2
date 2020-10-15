import React, { useContext } from 'react';
import { ProviderBuah, ContextBuah } from './contextBuah';
import FormBuah from './formBuah';
import TableBuah from './tableBuah';

const Tugas14 = () => {
    return (
        <ProviderBuah>
            <FormBuah />
            <TableBuah />
        </ProviderBuah>
    );
}

export default Tugas14;