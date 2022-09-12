import React from "react";

import ReleaseBtn from "./Btn/ReleaseBtn";
import ProductFeatures from "../assets/desktop/image-keyboard.jpg";
// import Square from '../assets/shared/pattern-square.svg';
import ProductStyle from "../assets/desktop/image-phone-and-keyboard.jpg";
import DecoAndProduct from "../assets/desktop/image-glass-and-keyboard.jpg";
import IconCompatible from "../assets/shared/icon-compatible.svg";
import IconLight from "../assets/shared/icon-light.svg";
import IconBattery from "../assets/shared/icon-battery.svg";
import IconBluetooth from "../assets/shared/icon-bluetooth.svg";

import PreBtn from "./Btn/PreBtn";

const productDetails = [
	// { <img src={IconCompatible} alt="HIGHLY COMPATIBLE"/>

	//
	{
		icon: IconCompatible,
		title: `HIGHLY COMPATIBLE`,
		description:
			"Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
	},
	{
		icon: IconBluetooth,
		title: "WIRELESS WITH BLUETOOTH",
		description:
			"Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
	},
	{
		icon: IconBattery,
		title: "HIGH CAPACITY BATTERY",
		description:
			"Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
	},
	{
		icon: IconLight,
		title: "RGB BACKLIT MODES",
		description:
			"Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
	},
];

const Main = () => {
	return (
		<div className="flex flex-col lg:pt-[136px]">
			{/* 第一區塊 */}
			<div className="flex flex-col md:flex-row md:items-center">
				<div className=" w-full space-y-[32px] my-[64px]  text-left lg:pr-[130px]">
					<h1
						className="uppercase font-extrabold text-heading leading-heading 
                 "
					>
						Typemaster
						<br /> Keyboard
					</h1>
					<p className="text-secondary_light text-paragraph leading-paragraph">
						Improve your productivity and gaming without breaking the bank.
						Upgrade to a high quality mechanical typing experience.
					</p>
					<div className="flex ">
						<PreBtn bgcolor="primary" active="primary_active" />
						<ReleaseBtn />
					</div>
				</div>
				<div className="w-[calc(100%+24px)] ">
					{/* 視覺上方大圖 */}
					<img
						src={ProductFeatures}
						alt="Imagekeyboard"
						className="rounded-xl
                   
                   "
					></img>
				</div>
			</div>

			{/* 第二區塊 */}

			<div className="flex flex-wrap lg:flex-row justify-center items-center gap-x-5 mb-[122px]">
				<div className="w-full h-[193px] md:h-[320px] lg:h-[480px] flex flex-row md:mt-[24px]  space-x-[32px] md:space-x-[30px] lg:space-x-[30px] ">
					<div className=" h-full w-[129px] md:w-[214px] lg:w-[255px] relative rounded-xl overflow-hidden">
						<img
							src={ProductStyle}
							alt="PhoneAndKeyboard"
							className=" w-full h-full object-cover"
						></img>
						<div className="left-0 top-0   opacity-80 absolute h-[193px] md:h-[320px] lg:h-[480px] w-[129px] md:w-[214px] lg:w-[255px] bg-[#F16718]  " />
					</div>

					<div className="rounded-xl overflow-hidden h-full">
						<img
							src={DecoAndProduct}
							alt="glass-and-keyboard"
							className="h-full 	w-[220px] md:w-[445px] "
						></img>

						<div
							className="flex flex-col md:flex-row lg:flex-col items-center text-center md:text-left mt-[75px] 
					        lg:w-[255px] 
							"
						>
							<h2 className=" text-secondary uppercase font-extrabold text-4xl py-6 text-heading_secondary leading-heading_secondary w-[255px] md:w-[689px]">
								mechanical <br />
								wireless <br />
								Keyboard
							</h2>
							<p className="text-secondary_light text-paragraph leading-paragraph ">
								The Typemaster keyboard boasts top-notch build and practical
								design. It offers a wide variety of switches and keycaps, along
								with reliable wireless connectivity.
							</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row lg:flex-col items-center text-center md:text-left mt-[75px] lg:pl-[125px] ">
						<h2 className=" text-secondary uppercase font-extrabold text-4xl py-6 text-heading_secondary leading-heading_secondary md:w-[689px] lg:w-[255px]">
							mechanical wireless Keyboard
						</h2>
						<p className="text-secondary_light text-paragraph leading-paragraph">
							The Typemaster keyboard boasts top-notch build and practical
							design. It offers a wide variety of switches and keycaps, along
							with reliable wireless connectivity.
						</p>
					</div>
				</div>
			</div>

			{/* 第三區塊 */}
			<div
				className="flex flex-col items-center md:flex-wrap lg:flex-row lg:justify-between 
			mt-[122px] md:my-[142px] lg:mt-[168px] lg:mb-[128px] "
			>
				{productDetails.map(({ icon, title, description }) => (
					<div
						key={icon}
						className="h-[329px] md:h-[339px] md:w-[281px] lg:w-[255px] flex-row
                        justify-center items-center md:items-start md:text-left text-center "
					>
						<div className=" h-[65px] w-[65px] mb-[53px] flex justify-center items-center ">
							<img className="h-full w-full r md:flex-first" src={icon}></img>
						</div>
						<h3 className="text-heading_third leading-heading_third text-secondary font-bold py-2.5">
							{title}
						</h3>
						<p
							className="text-secondary_light text-paragraph leading-paragraph pt-[24px]
            "
						>
							{description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Main;
