import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { store } from './store/store.ts';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { PREFIX } from './helpers/API.ts';

import { Layout } from './layout/Menu/Layout.tsx';
import { AuthLayout } from './layout/Auth/AuthLayout.tsx';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error as ErropPage } from './pages/Error/Error.tsx';
import { Product } from './pages/Product/Product.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Register } from './pages/Register/Register.tsx';
import { Success } from './pages/Success/Success.tsx';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><Layout /></RequireAuth>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
			},
			{
				path: '/success',
				element: <Success />
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 2000);
						})
					});
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}, 
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '*',
		element: <ErropPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
