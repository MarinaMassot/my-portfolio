import { Section } from "./Section";
import { ThemeToogle } from "./ThemeToogle";

export const Header = () => {
	return (
		<header className="top-0 ">
			<Section className="flex items-center">
				<img src="/favicon.ico" alt="Logo" className="w-32 h-32 rounded-full" />
				<div className="flex-1" />
				<ThemeToogle />
			</Section>
		</header>
	);
};