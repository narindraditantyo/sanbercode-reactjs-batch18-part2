import React from 'react';

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class Tugas10 extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ "text-align": "center" }}>Tabel Harga Buah</h1>
                <>
                    <table style={{ "border": "1px solid black", width: "60%", "margin-left": "auto", "margin-right": "auto" }}>
                        <thead style={{ "text-align": "center", background: "grey" }}>
                            <tr>
                                <td>Nama</td>
                                <td>Harga</td>
                                <td>Berat</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataHargaBuah.map(buah => {
                                return (
                                    <tr style={{ background: "orange" }}>
                                        <td style={{ width: "30%" }}>{buah.nama}</td>
                                        <td style={{ width: "20%" }}>{buah.harga}</td>
                                        <td style={{ width: "20%" }}>{(buah.berat)/1000} kg</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                </>
            </div>
        );
    }
}

export default Tugas10;