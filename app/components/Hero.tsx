import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const TextInBold = ({
	className,
	...props
}: ComponentPropsWithoutRef<"span">) => {
	return (
		<span
			className={cn(
				"bg-accent/30 font-mono font-bold border border-accent p-1 rounded-sm text-primary",
				className,
			)}
			{...props}
		/>
	);
};

export const Hero = () => {
	return (
		<Section className="flex max-md:flex-col items-start gap-4">
			<div className="flex-[3] flex flex-col gap-2 width-full">
				<h2 className="font-bold text-5xl text-primary">Marina Massot</h2>
				<h3 className="font-bold text-3xl">Développeuse web fullstack</h3>
				<p className="text-lg text-muted-foreground mt-4">
					En pleine reconversion professionnelle vers le{" "}
					<TextInBold>développement web fullstack</TextInBold>, je suis une
					développeuse web en devenir, animée par une soif d'apprendre
					constante. Je me forme activement aux technologies telles que{" "}
					<TextInBold>React.JS</TextInBold> et <TextInBold>Next.js</TextInBold>{" "}
					pour le front-end, ainsi qu'à
					<TextInBold>Node.js</TextInBold> et{" "}
					<TextInBold>Express.js</TextInBold> pour le back-end. Je développe
					également mes compétences dans la gestion de bases de données
					relationnelles avec <TextInBold>MySQL</TextInBold>. Ce portfolio présente mes projets en cours
					d'apprentissage et témoigne de ma motivation à acquérir et à mettre en
					œuvre mes compétences pour créer des solutions web complètes
				</p>
			</div>
			<div className="flex-[2] max-md:m-auto ml-auto">
				<img
					src="/images/marina-pic.png"
					alt="Marina-Massot"
					className="w-full height-auto max-w-sm max-md:w-56 m-auto"
				/>
			</div>
		</Section>
	);
};
