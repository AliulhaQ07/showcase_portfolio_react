import React from 'react';
import Button from "../components/Button.jsx";
import profile from '../assets/profile.png';
import profile2 from '../assets/Profile2.png';
import profile3 from '../assets/images/profileimg.png';

const Home = () => {
	return (
		<div className="h-auto sm:h-[80dvh] flex items-center justify-center font-montserrat antialiased  ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full px-6 ">
				{/* LEFT SIDE */}
				<div className="flex flex-col gap-4 items-start justify-center text-gray-800 mt-10">
					<div>
						<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
							Hi, I'm Ali Zia
						</h3>
						<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
							Frontend Developer
						</p>
					</div>

					<p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600">
						High-level experience in web design and development knowledge,
						producing quality work.
					</p>
					<div className='flex gap-4'>
						<Button text={'Contact Me'}/>
						<Button text={'Download Cv'}/>
					</div>

				</div>

				{/* RIGHT SIDE */}
				<div className="flex items-center justify-center">
					<img
						src={profile3}
						alt="profile"
						className="rounded-lg h-full sm:h-96 w-auto object-cover "
					/>
				</div>
			</div>
		</div>);
};

export default Home;
