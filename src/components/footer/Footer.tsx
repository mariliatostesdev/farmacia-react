import {
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
} from '@phosphor-icons/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {
	const { usuario, handleLogout } = useContext(AuthContext);

	let footerComponent;

	let data = new Date().getFullYear();

	if (usuario.token !== '') {
		footerComponent = (
			<>
				<div className="flex justify-center bg-[#FF4C4F] text-white w-full">
					<div className="container flex items-center justify-between py-4">
						<p className="text-xl font-medium">
							React Farmácia | Copyright: {data}
						</p>
						<div className="flex gap-2 items-center">
							<LinkedinLogo
								size={48}
								weight="bold"
								className="hover:text-[#4a52bb] cursor-pointer"
							/>
							<InstagramLogo
								size={48}
								weight="bold"
								className="hover:text-[#4a52bb] cursor-pointer"
							/>
							<FacebookLogo
								size={48}
								weight="bold"
								className="hover:text-[#4a52bb] cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</>
		);
	}

	return <>{footerComponent}</>;
}

export default Footer;
