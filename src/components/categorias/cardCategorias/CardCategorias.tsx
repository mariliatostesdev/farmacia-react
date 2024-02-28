import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
	categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
	return (
		<div className="border-slate-400 border flex flex-col rounded-2xl overflow-hidden text-center w-72 h-fit">
			<div className="">
				<p className="py-10 text-2xl bg-[#fff] text-slate-700 h-full">
					{categoria.descricao}
				</p>

				<Link
					to={`/`}
					className="bg-white pb-10 flex content-center justify-center h-fit cursor-pointer"
				>
					<button className="p-4 text-white bg-slate-400 hover:bg-slate-500 px-6 py-2 rounded-md flex  justify-center">
						Ver produtos
					</button>
				</Link>
			</div>

			<div className="flex">
				<Link
					to={`/editarCategoria/${categoria.id}`}
					className="w-full text-white bg-[#4a52bb] hover:bg-[#313893] flex items-center justify-center py-2"
				>
					<button>Editar</button>
				</Link>
				<Link
					to={`/deletarCategoria/${categoria.id}`}
					className="text-slate-100 bg-[#FF4C4F] hover:bg-[#B91C1C] w-full flex items-center justify-center"
				>
					<button>Deletar</button>
				</Link>
			</div>
		</div>
	);
}

export default CardCategorias;
