import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ContextBuah } from './contextBuah';

function FormBuah() {
    const { buahState, newBuahState, indexState, submittedState, disabledState, loadingState } = useContext(ContextBuah);

    const [buah, setBuah] = buahState;
    const [newBuah, setNewBuah] = newBuahState;
    const [index, setIndex] = indexState;
    const [submitted, setSubmitted] = submittedState;
    const [disabled, setDisabled] = disabledState;
    const [loading, setLoading] = loadingState;

    const handleChange = (event) => {
        let formBuahNew = { ...newBuah };
        formBuahNew[event.target.nama] = event.target.value;
        setNewBuah(formBuahNew);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit ', newBuah);
        if (index === -1) {
            setDisabled(true);
            axios.post('http://backendexample.sanbercloud.com/api/fruits', newBuah)
                .then(res => {
                    setSubmitted(submitted + 1);
                    console.log('submitted');
                    setNewBuah([
                        { id: 0, nama: '', harga: 0, berat: 0 }
                    ]);
                    setDisabled(false);
                })
        } else {
            console.log('updated');
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${newBuah.id}`, newBuah)
                .then(res => {
                    console.log('updated');
                    setNewBuah([
                        { id: 0, nama: '', harga: 0, berat: 0 }
                    ]);
                    setSubmitted(submitted + 1);
                })
        }
        setIndex(-1);
    }

    useEffect(() => {
        axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then(res => {
                setBuah(res.data);
                setLoading(false);
            })
    }, [submitted]);

    return (
        <div>
            <form className='container' onSubmit={handleSubmit}>
                <h1>Form Pembelian Buah</h1>
                <table className='form-center'>
                    <tbody>
                        <tr>
                            <td>Nama Buah</td>
                            <td>&nbsp;</td>
                            <td><input
                                type='text'
                                name='nama'
                                id='nama'
                                className='form-control'
                                value={newBuah.nama || ''}
                                onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Harga</td>
                            <td>&nbsp;</td>
                            <td><input
                                type='number'
                                name='harga'
                                id='harga'
                                className='form-control'
                                value={newBuah.harga || ''}
                                onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Berat</td>
                            <td>&nbsp;</td>
                            <td><input
                                type='number'
                                name='berat'
                                id='berat'
                                className='form-control'
                                value={newBuah.berat || ''}
                                onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    type='submit'
                                    className='btn'
                                    disabled={disabled ? true : false}>Kirim</button>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default FormBuah;