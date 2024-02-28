import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioCategoria() {
	let navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	async function buscarPorId(id: string) {
		await buscar(`/categorias/${id}`, setCategoria, {
			headers: {
				Authorization: token,
			},
		});
	}

	useEffect(() => {
		if (token === '') {
			toastAlerta('Você precisa estar logado', 'info');
			navigate('/');
		}
	}, [token]);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		});

		console.log(JSON.stringify(categoria));
	}

	function retornar() {
		navigate(`/categorias`);
	}

	async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria, {
					headers: {
						Authorization: token,
					},
				});

				toastAlerta('Categoria atualizada com sucesso', 'sucesso');
				retornar();
			} catch (error: any) {
				if (error.toString().includes('403')) {
					toastAlerta('O token expirou, favor logar novamente', 'info');
					handleLogout();
				} else {
					toastAlerta('Erro ao atualizar a Categoria', 'erro');
				}
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria, {
					headers: {
						Authorization: token,
					},
				});
				toastAlerta('Categoria cadastrada com sucesso', 'sucesso');
				retornar();
			} catch (error: any) {
				if (error.toString().includes('403')) {
					toastAlerta('O token expirou, favor logar novamente', 'info');
					handleLogout();
				} else {
					toastAlerta('Erro ao cadastrar a Categoria', 'erro');
				}
			}
		}

		retornar();
	}

	return (
		<div className="container flex flex-col items-center justify-center mx-auto">
			<h1 className="text-4xl text-center my-8">
				{id !== undefined ? 'Editar categoria' : 'Cadastrar categoria'}
			</h1>

			<form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
				<div className="flex flex-col gap-2 mb-8">
					<label htmlFor="descricao">Descrição da categoria</label>
					<input
						value={categoria.descricao}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						type="text"
						placeholder="Descrição"
						name="descricao"
						className="border-2 border-slate-700 rounded p-2"
					/>
				</div>
				<button
					className="rounded text-white bg-[#4a52bb] hover:bg-[#313893] w-1/4 py-2 mx-auto block"
					type="submit"
				>
					{id !== undefined ? 'Editar' : 'Cadastrar'}
				</button>
			</form>
		</div>
	);
}

export default FormularioCategoria;
