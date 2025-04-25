import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { Section } from "./Section";

export const Header = () => {
	return (
		<header className="sticky top-0 py-4">
			<Section className="flex items-baseline">
				<h1 className="text-lg font-bold text-primary">marinamassot.com</h1>
				<div className="flex-1" />
				<ul className="flex items-center gap-2">
					<a href="https://github.com/marinamassot" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
						<GithubIcon size={16} className="text-foreground"/>
					</a>
					<a href="https://linkedin.com/in/marinamassot" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
						<LinkedinIcon size={16} className="text-foreground"/>
					</a>
				</ul>
			</Section>
		</header>
	);
};