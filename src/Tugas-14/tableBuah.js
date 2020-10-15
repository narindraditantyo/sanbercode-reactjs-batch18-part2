import React, { useContext } from 'react';
import axios from 'axios';
import { ContextBuah } from './contextBuah';

const header = ['Nama', 'Harga', 'Berat'];

const TableBuah = () => {
    const { buahState, newBuahState, indexState, submittedState, disabledState, loadingState } = useContext(ContextBuah);

    const [buah, setBuah] = buahState;
    const [newBuah, setNewBuah] = newBuahState;
    const [index, setIndex] = indexState;
    const [submitted, setSubmitted] = submittedState;
    const [disabled, setDisabled] = disabledState;
    const [loading, setLoading] = loadingState;

    const handleEdit = (event) => {
        let formBuahNew = buah[event.target.value];
        setNewBuah(formBuahNew);
        setIndex(event.target.value);
    }

    const handleDelete = (event) => {
        let formBuahNew = buah[event.target.value];
        console.log(formBuahNew.id);
        setDisabled(true);
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${formBuahNew.id}`)
            .then(res => {
                console.log('deleted');
                setSubmitted(submitted + 1);
                setNewBuah([
                    { id: 0, name: '', price: 0, weight: 0 }
                ]);
                setDisabled(false);
            });
    }

    return (
        loading ?
            <>
                <br />
                <div className='loader'></div>
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            </>
            :
            <div>
                <h1 style={{ textAlign: 'center' }}>Tabel Harga Buah</h1>
                <table className='table-crud' id='table-crud'>
                    <thead>
                        <tr>
                            {header.map(head => {
                                return (
                                    <td key={head}>{head}</td>
                                )
                            })}
                            <td colSpan='2'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {buah.map((b, index) => {
                            let convBerat = b.berat / 1000;
                            return (
                                <tr key={b.id}>
                                    <td>{b.nama}</td>
                                    <td>{b.harga}</td>
                                    <td>{`${convBerat} kg`}</td>
                                    <td align='center'>
                                        <button
                                            className='btn-crud'
                                            onClick={handleEdit}
                                            value={index}
                                            title={`Edit Data ${b.nama}`}>
                                            Edit
                                        </button>
                                    </td>
                                    <td align='center'>
                                        <button
                                            className='btn-crud'
                                            onClick={handleDelete}
                                            value={index}
                                            title={`Delete Data ${b.nama}`}
                                            disabled={disabled ? true : false}>
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    )
}

export default TableBuah;