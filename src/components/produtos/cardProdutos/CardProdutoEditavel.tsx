import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutoPropsEditavel {
	product: Produto;
}

function CardProdutoEditavel({ product }: CardProdutoPropsEditavel) {
	return (
		<div className="border-slate-400 border flex flex-col rounded-lg overflow-hidden justify-between w-80 sm:w-80 md:w-72 ">
			<div className="flex flex-col h-full">
				<img
					src={product.foto}
					className="content-center w-2/3 self-center py-4"
				></img>
				<header className="bg-[#fff] text-slate-700 font-bold uppercase text-lg w-full flex flex-col text-center">
					<h2 className="max-w-fit self-center">{product.nome}</h2>
				</header>
				<div className="px-4 pb-4 py-0 grid justify-items-center gap-2 h-full">
					<p className="pb-2 text-sm text-slate-600 max-w-fit">
						{product.categoria?.descricao}
					</p>
					<p className="font-bold max-w-fit text-xl ">R${product.preco}</p>
					<p className="text-sm text-slate-600 max-w-fit self-center text-center">
						{product.descricao}
					</p>
					<div className="flex justify-between items-center gap-5 hidden">
						<div className="py-2">
							<Link
								to={`/`}
								className="text-white bg-green-500 hover:bg-green-600 px-10 py-2 rounded-md flex content-center justify-center cursor-pointer md:px-8"
							>
								<button className="font-bold">Comprar</button>
							</Link>
						</div>
						<div className="py-2">
							<Link
								to={`/`}
								className="text-white bg-slate-400 hover:bg-slate-500 px-2 py-2 rounded-md flex content-center justify-center h-fit cursor-pointer
                                "
							>
								<button className="font-medium">+ Carrinho</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex">
				<Link
					to={`/editarProduto/${product.id}`}
					className="w-full  text-white bg-[#4a52bb] hover:bg-[#313893] flex items-center justify-center py-2"
				>
					<button>Editar</button>
				</Link>
				<Link
					to={`/deletarProduto/${product.id}`}
					className="text-white bg-[#FF4C4F] hover:bg-[#B91C1C] w-full flex items-center justify-center"
				>
					<button>Deletar</button>
				</Link>
			</div>
		</div>
	);
}

export default CardProdutoEditavel;
