import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProduto';
import { toastAlerta } from '../../../utils/toastAlerta';
import Home from '../../../paginas/home/Home';
import ModalProduto from '../modalProduto/ModalProduto';

function ListaProdutos() {
	const [produtos, setProdutos] = useState<Produto[]>([]);

	let navigate = useNavigate();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	useEffect(() => {
		if (token === '') {
			toastAlerta('Você precisa estar logado', 'info');
			navigate('/');
		}
	}, [token]);

	async function buscarProdutos() {
		try {
			await buscar('/produtos', setProdutos, {
				headers: {
					Authorization: token,
				},
			});
		} catch (error: any) {
			if (error.toString().includes('403')) {
				toastAlerta('O token expirou, favor logar novamente', 'info');
				handleLogout();
			}
		}
	}

	useEffect(() => {
		buscarProdutos();
	}, [produtos.length]);

	return (
		<>
			{produtos.length === 0 && (
				<Dna
					visible={true}
					height="200"
					width="200"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper mx-auto"
				/>
			)}
			<div className="flex flex-col justify-center items-center">
				<div className="container flex grid-cols text-black">
					<div className="flex gap-4 py-6">
						<Link to="/produtosEditaveis">
							<button className="rounded bg-white text-[#313893] hover:underline py-2 px-4">
								Editar produtos
							</button>
						</Link>
					</div>
				</div>
			</div>
			<hr />
			<div className="w-full flex justify-center">
				<div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
					{produtos.map((produto) => (
						<CardProduto key={produto.id} product={produto} />
					))}
				</div>
			</div>
		</>
	);
}

export default ListaProdutos;
