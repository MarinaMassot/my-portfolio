import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const Menu = () => {
	return (
		<div className="fixed bottom-50 left-1/2 -translate-x-1/2 z-10 max-w-md">
			<Section>
				<Card className="backdrop-blur-sm">
					<ul className="flex items-center gap-4 pl-10 pr-10">
										<a href="https://github.com/marinamassot">
											<GithubIcon size={60} className="text-foreground"/>
										</a>
										<a href="https://linkedin.com/in/marinamassot">
											<LinkedinIcon size={60} className="text-foreground"/>
										</a>
									</ul>
					
					</Card>
			</Section>
		</div>
	);
};
