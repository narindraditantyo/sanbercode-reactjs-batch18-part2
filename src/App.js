import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<form>
				<h1>Form Pembelian Buah</h1>
				<ul className="FormContainer">
					<li className="FormList">
						<label>Nama Pelanggan</label>
						<input type="text" />
					</li>
					<li className="FormList">
						<label>Daftar Item</label>
						<div className="CheckboxList">
							<ul className="CheckboxGroup">
								<li>
									<input type="checkbox" name="buah" />
									<label>Semangka</label>
								</li>
								<li>
									<input type="checkbox" name="buah" />
									<label>Jeruk</label>
								</li>
								<li>
									<input type="checkbox" name="buah" />
									<label>Nanas</label>
								</li>
								<li>
									<input type="checkbox" name="buah" />
									<label>Salak</label>
								</li>
								<li>
									<input type="checkbox" name="buah" />
									<label>Anggur</label>
								</li>
							</ul>
						</div>
					</li>
					<li className="FormList">
						<button type="submit">Kirim</button>
					</li>
				</ul>
			</form>
		</div>
	);
}

export default App;
