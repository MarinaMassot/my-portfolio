import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export const Header = () => {
	return (
		<header className="sticky top-0 py-4">
			<Section className="flex items-baseline">
				<h1 className="text-4xl font-bold text-primary-foreground">marinamassot.com</h1>
				<div className="flex-1" />
				<ul>
					<Button className="size-6" variant="outline">
						<img src="my-portfolio/app/icons/github-icon.svg" alt="Github" className="w-4 h-4" />
					</Button>
				</ul>
			</Section>
		</header>
	);
};