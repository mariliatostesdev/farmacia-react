import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import { toastAlerta } from '../../../utils/toastAlerta';
import Home from '../../../paginas/home/Home';
import ModalCategoria from '../modalCategoria/ModalCategoria';

function ListaCategoriasEditaveis() {
	const [categorias, setCategorias] = useState<Categoria[]>([]);

	let navigate = useNavigate();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	async function buscarCategorias() {
		try {
			await buscar('/categorias', setCategorias, {
				headers: { Authorization: token },
			});
		} catch (error: any) {
			if (error.toString().includes('403')) {
				toastAlerta('O token expirou, favor logar novamente', 'info');
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === '') {
			toastAlerta('Você precisa estar logado', 'info');
			navigate('/login');
		}
	}, [token]);

	useEffect(() => {
		buscarCategorias();
	}, [categorias.length]);
	return (
		<>
			{categorias.length === 0 && (
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
						<Link to="/categorias">
							<button className="rounded bg-white text-[#313893] hover:underline py-2 px-4">
								Ver categorias
							</button>
						</Link>

						<ModalCategoria />
					</div>
				</div>
			</div>
			<hr />
			<div className="flex justify-center w-full ">
				<div className="container grid my-10 flex justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-10">
					{categorias.map((categoria) => (
						<>
							<CardCategorias categoria={categoria} />
						</>
					))}
				</div>
			</div>
		</>
	);
}

export default ListaCategoriasEditaveis;
