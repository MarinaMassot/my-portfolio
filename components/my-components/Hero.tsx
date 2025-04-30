import type { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "../../app/icons/GithubIcon";
import { LinkedinIcon } from "../../app/icons/LinkedinIcon";
import { Button } from "@/components/ui/button";
import { Spacing } from "./Spacing";
import Image from "next/image";


const TextInBold = ({
	className,
	...props
}: ComponentPropsWithoutRef<"span">) => {
	return (
		<span
			className={cn(
				"bg-accent/90 font-mono font-bold border border-accent p-1 rounded-sm text-primary",
				className,
			)}
			{...props}
		/>
	);
};

export const Hero = () => {
	return (
		<Section className="flex max-md:flex-col items-start">
			<div className="flex-[3] flex flex-col gap-2 width-full">
				<h2 className="font-bold text-6xl text-primary font-mono">Marina Massot</h2>
				<ul className="flex items-center gap-2">
					<a href="https://github.com/marinamassot">
						<GithubIcon size={60} className="text-foreground" />
					</a>
					<a href="https://linkedin.com/in/marinamassot">
						<LinkedinIcon size={60} className="text-foreground" />
					</a>
				</ul>
				<div className="flex-[2] max-md:m-auto ml-auto md:hidden">
			<Image
    width={500}
    height={500}
    src="/images/marina-pic.png"
    alt="Marina-Massot"
    className="w-full height-auto max-w-sm max-md:w-56 m-auto"
/>
			</div>
				<Spacing size="sm" />
				<h3 className="font-bold text-3xl font-mono">Développeuse web fullstack</h3>
				<Spacing size="sm" />
				<p className="text-xl text-muted-foreground mt-4 font-poppins text-justify md:w-4/5">
						En reconversion professionnelle dans le{" "}
					<TextInBold>développement web fullstack</TextInBold>, je suis passionnée et me forme activement aux technologies telles que{" "}
					<TextInBold>React.JS</TextInBold> et <TextInBold>Next.js</TextInBold>{" "}
					pour le front-end, ainsi qu&rsquo;à
					<TextInBold>Node.js</TextInBold> et{" "}
					<TextInBold>Express.js</TextInBold> pour le back-end. Je développe
					également mes compétences dans la gestion de bases de données
					relationnelles avec <TextInBold>MySQL</TextInBold>. Ce portfolio présente mes projets en cours
					d&rsquo;apprentissage et témoigne de ma motivation à acquérir et à mettre en
					œuvre mes compétences pour créer des solutions web complètes.
					Actuellement je travaille sur <TextInBold> <a href="https://github.com/SolesApp">SoleApp</a></TextInBold>, Un site comparatif intuitif pour les passionnés de basketball.Les maquettes sont en cours de conception.
				</p>
				<Button asChild className="text-2xl text-bold m-6 p-8 fit-content">
					<a
						href="/cv-marina-massot.pdf"
						target="_blank"
						rel="noreferrer"
						download="cv-marina-massot.pdf"
					>
						Télécharge mon CV
					</a>
				</Button>
			</div>
			<div className="flex-[2] max-md:m-auto ml-auto hidden md:block">
			<Image
    width={500}
    height={500}
    src="/images/marina-pic.png"
    alt="Marina-Massot"
    className="w-full height-auto max-w-sm max-md:w-56 m-auto"
/>
			</div>
		</Section>
	);
};
