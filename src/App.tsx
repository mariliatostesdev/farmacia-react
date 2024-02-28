import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './paginas/cadastro/Cadastro';
import Navbar from './components/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';

import Perfil from './paginas/perfil/Perfil';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import ListaProdutosEditaveis from './components/produtos/listaProdutos/ListaProdutosEditaveis';
import ListaCategoriasEditaveis from './components/categorias/listaCategorias/ListaCategoriasEditaveis';

function App() {
	return (
		<>
			<AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<div className="min-h-[91.5vh]">
						<Navbar />
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/home" element={<Home />} />
							<Route path="/categorias" element={<ListaCategorias />} />
							<Route
								path="/categoriasEditaveis"
								element={<ListaCategoriasEditaveis />}
							/>
							<Route
								path="/cadastroCategoria"
								element={<FormularioCategoria />}
							/>
							<Route
								path="/editarCategoria/:id"
								element={<FormularioCategoria />}
							/>
							<Route
								path="/deletarCategoria/:id"
								element={<DeletarCategoria />}
							/>
							{/* {['/produtos', 'produtos/all'].map((path) => (
								<Route path={path} element={<ListaProdutos />} />
							))} */}

							<Route path="/produtos" element={<ListaProdutos />} />
							<Route
								path="/produtosEditaveis"
								element={<ListaProdutosEditaveis />}
							/>
							<Route path="/cadastroProduto" element={<FormularioProduto />} />
							<Route
								path="/editarProduto/:id"
								element={<FormularioProduto />}
							/>
							<Route path="/deletarProduto/:id" element={<DeletarProduto />} />
							<Route path="/perfil" element={<Perfil />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
