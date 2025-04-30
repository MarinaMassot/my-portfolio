import { Section } from "../../components/my-components/Section";
import { ThemeToogle } from "../../components/my-components/ThemeToogle";

export const Header = () => {

	return (
		<header className="w-full top-0">
			<Section className="flex items-center">
				<div className="flex-1" />
				<ThemeToogle size="	xl" />
			</Section>
		</header>
	);
};