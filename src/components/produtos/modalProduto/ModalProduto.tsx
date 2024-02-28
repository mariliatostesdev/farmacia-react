import React from 'react';
import FormularioProduto from '../formularioProduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css';

function ModalProduto() {
	return (
		<>
			<Popup
				trigger={
					<button className="border rounded px-4 hover:bg-[#4a52bb] hover:text-white hover:underline">
						Novo produto
					</button>
				}
				modal
			>
				<div>
					<FormularioProduto />
				</div>
			</Popup>
		</>
	);
}

export default ModalProduto;
