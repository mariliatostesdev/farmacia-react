import React, { useContext, useEffect } from 'react';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import { Link, useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../utils/toastAlerta';
import { AuthContext } from '../../contexts/AuthContext';
import './Home.css';
import homeImg from '../../assets/home.jpg';

function Home() {
	let navigate = useNavigate();

	const { usuario } = useContext(AuthContext);
	const token = usuario.token;

	useEffect(() => {
		if (usuario.token === '') {
			toastAlerta(
				'Erro de autenticação. Verifique as informações de login.',
				'erro'
			);
			navigate('/login');
		}
	}, [usuario.token]);

	return (
		<>
			<div className="flex h-[83.4vh] justify-center items-center home-img">
                <div className="text-6xl font-bold bg-slate-100 py-14 px-28 rounded-full items-center ">
                    <p className="">Bem-vindo à Farmácia React!</p>
                </div>
			</div>
		</>
	);
}

export default Home;
