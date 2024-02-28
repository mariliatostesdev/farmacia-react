import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCategoria.css';
import FormularioCategoria from '../../categorias/formularioCategoria/FormularioCategoria';

function ModalCategoria() {
	return (
		<>
			<Popup
				trigger={
					<button className="border rounded px-4 hover:bg-[#4a52bb] hover:text-white hover:underline">
						Nova categoria
					</button>
				}
				modal
			>
				<div>
					<FormularioCategoria />
				</div>
			</Popup>
		</>
	);
}

export default ModalCategoria;
