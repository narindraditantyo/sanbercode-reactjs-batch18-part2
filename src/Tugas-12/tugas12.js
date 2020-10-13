import React from 'react';

class Tugas12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daftarHargaBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            index: -1
        }

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(event) {
        let index = event.target.value;
        let buah = this.state.daftarHargaBuah[index];
        console.log(buah);
        this.setState({
            inputNama: buah.nama, inputHarga: buah.harga, inputBerat: buah.berat, index: index
        });
    }

    handleDelete(event) {
        let index = event.target.value;
        let buah = this.state.daftarHargaBuah;
        let editedBuah = buah[this.state.index];
        console.log(editedBuah);
        buah.splice(index, 1);
        if (editedBuah !== undefined) {
            var newindex = buah.findIndex((item) => item === editedBuah);
            console.log(newindex);
            this.setState({
                daftarHargaBuah: buah,
                index: newindex
            });
        }
        else {
            this.setState({
                daftarHargaBuah: buah
            });
        }
    }

    handleChange1(event) {
        this.setState({ inputNama: event.target.value });
    }

    handleChange2(event) {
        this.setState({ inputHarga: event.target.value });
    }

    handleChange3(event) {
        this.setState({ inputBerat: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.inputNama.replace(/\s/g, '') !== "" && this.state.inputHarga !== "" && this.state.inputBerat !== "") {
            let daftarBuah = this.state.daftarHargaBuah
            if (this.state.index === -1) {
                daftarBuah = [...daftarBuah, { nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat }]
            }
            else {
                daftarBuah[this.state.index] = { nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat }
            }
            console.log(daftarBuah)
            this.setState({
                daftarHargaBuah: daftarBuah,
                inputNama: "",
                inputHarga: "",
                inputBerat: "",
                index: -1
            })
        }
    }

    render() {
        return (
            <div>
                <>
                    {/* Forms */}
                    <h1 style={{ "text-align": "center" }}>Input Data Buah</h1>
                    <form onSubmit={this.handleSubmit}>
                        <table style={{ width: "20%", "margin-left": "auto", "margin-right": "auto" }}>
                            <tr>
                                <td style={{ width: "50%", "font-weight": "bold", "font-size": "16px" }}><label>Nama</label></td>
                                <td style={{ width: "50%" }}><input type="text" value={this.state.inputNama} onChange={this.handleChange1} /></td>
                            </tr>
                            <tr>
                                <td style={{ "font-weight": "bold", "font-size": "16px" }}><label>Harga</label> </td>
                                <td><input type="text" value={this.state.inputHarga} onChange={this.handleChange2} /></td>
                            </tr>
                            <tr>
                                <td style={{ "font-weight": "bold", "font-size": "16px" }}><label>Berat</label> </td>
                                <td><input type="text" value={this.state.inputBerat} onChange={this.handleChange3} /></td>
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
                                this.state.daftarHargaBuah.map((buah, index) => {
                                    return (
                                        <tr style={{ background: "orange" }}>
                                            <td style={{ width: "30%" }}>{buah.nama}</td>
                                            <td style={{ width: "20%" }}>{buah.harga}</td>
                                            <td style={{ width: "20%" }}>{(buah.berat) / 1000} kg</td>
                                            <td style={{ width: "15%", textAlign: "center" }}>
                                                <button onClick={this.handleEdit} value={index}>Edit</button>
                                                <button onClick={this.handleDelete} value={index}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
            </div>
        )
    }
}

export default Tugas12;