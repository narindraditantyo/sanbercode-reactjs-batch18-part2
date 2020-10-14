import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tugas13 = () => {
    const [daftarHargaBuah, setDaftarHargaBuah] = useState(null)
    const [input, setInput] = useState({ nama: "", harga: "", berat: 0, id: null })

    useEffect(() => {
        if (daftarHargaBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    let daftarHargaBuah = res.data
                    setDaftarHargaBuah(
                        daftarHargaBuah.map(buah => {
                            return { id: buah.id, nama: buah.nama, harga: buah.harga, berat: buah.berat }
                        })
                    )
                })
        }
    }, [daftarHargaBuah])

    const submitForm = (event) => {
        event.preventDefault()

        let nama = input.nama
        let harga = input.harga

        if (input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}`, { nama, harga, berat: input.berat })
                .then(res => {
                    setDaftarHargaBuah([...daftarHargaBuah, {
                        id: res.data.id,
                        nama,
                        harga,
                        berat: input.berat
                    }])
                }
                )
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/contestants/${input.id}`, { nama, harga, berat: input.berat })
                .then(() => {
                    var dataHargaBuah = daftarHargaBuah.find(el => el.id === input.id)
                    dataHargaBuah.nama = nama
                    dataHargaBuah.harga = harga
                    dataHargaBuah.berat = input.berat
                    setDaftarHargaBuah([...daftarHargaBuah])

                }
            )
        }

        setInput({ id: null, nama: "", harga: "", berat: 0 })
    }

    const handleDelete = (event) => {
        var idHargaBuah = parseInt(event.target.value);
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}`)
            .then(res => {
                var dataHargaBuah = daftarHargaBuah.filter(i => i.id !== idHargaBuah);
                setDaftarHargaBuah(dataHargaBuah);
            })
    }

    const handlechange = (event) => {
        let typeOfInput = event.target.name

        switch (typeOfInput) {
            case "nama":
                {
                    setInput({ ...input, nama: event.target.value });
                    break
                }
            case "harga":
                {
                    setInput({ ...input, harga: event.target.value });
                    break
                }
            case "berat":
                {
                    setInput({ ...input, berat: event.target.value });
                    break
                }
            default: { break; }
        }
    }

    const handleEdit = (event) => {
        var idHargaBuah = parseInt(event.target.value);
        var buah = daftarHargaBuah.find(i => i.id === idHargaBuah);

        setInput({ id: idHargaBuah, nama: buah.nama, harga: buah.harga, berat: buah.berat });
    }

    return (
        <div>
            <>
                {/* Forms */}
                <h1 style={{ "text-align": "center" }}>Input Data Buah</h1>
                <form onSubmit={submitForm}>
                    <table style={{ width: "20%", "margin-left": "auto", "margin-right": "auto" }}>
                        <tr>
                            <td style={{ width: "50%", "font-berat": "bold", "font-size": "16px" }}><label>Nama</label></td>
                            <td style={{ width: "50%" }}><input type="text" name="nama" value={input.nama} onChange={handlechange} /></td>
                        </tr>
                        <tr>
                            <td style={{ "font-berat": "bold", "font-size": "16px" }}><label>Harga</label> </td>
                            <td><input type="text" name="harga" value={input.harga} onChange={handlechange} /></td>
                        </tr>
                        <tr>
                            <td style={{ "font-berat": "bold", "font-size": "16px" }}><label>Berat</label> </td>
                            <td><input type="text" name="berat" value={input.berat} onChange={handlechange} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: "center", height: "4rem" }}><button>Masukkan Data</button></td>
                        </tr>
                    </table>
                </form>

                {/* Table */}
                <h1 style={{ "text-align": "center" }}>Tabel Harga Buah</h1>
                <table style={{ "border": "1px solid black", width: "60%", "margin-left": "auto", "margin-right": "auto" }}>
                    <thead style={{ "text-align": "center", background: "grey" }}>
                        <tr>
                            <td>Nama</td>
                            <td>Harga</td>
                            <td>Berat</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            daftarHargaBuah !== null && (daftarHargaBuah.map((buah, index) => {
                                return (
                                    <tr key={index} style={{ background: "orange" }}>
                                        <td style={{ width: "30%" }}>{index.nama}</td>
                                        <td style={{ width: "20%" }}>{index.harga}</td>
                                        <td style={{ width: "20%" }}>{(index.berat) / 1000} kg</td>
                                        <td style={{ width: "15%", textAlign: "center" }}>
                                            <button onClick={handleEdit} value={buah.id}>Edit</button>
                                            <button onClick={handleDelete} value={buah.id}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>
                </table>
            </>
        </div>
    )
}

export default Tugas13;