import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { link } from "fs";

const projectsData = [
	{
		title: "GO Apprendre Transmettre",
		description:
			"Développement d'un site web de mise en relation pour l'échange gratuit de savoirs, intégrant une BDD, un moteur de recherche avancé, des filtres dynamiques et des fonctionnalités de gestion d'annonces (création et mise à jour.",
		imageUrl: "/images/go-apprendre-transmettre.png",
		stack: "React, TypeScript, ExpressJS, MySQL",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P3-goat.git",
	},
	{
		title: "Qui veut debugger des millions",
		description:
			"Développement d'un site web de quiz interactifs, exploitant une API pour générer des questions, avec des options de filtrage par thé́matique et niveau de difficulté.",
		imageUrl: "/images/qui-veut-debugger-des-millions.png",
		stack: "React, TypeScript",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P2-LesPerses.git",
	},
	{
		title: "Destination Finale ",
		description:
			"Site proposant des recommandations personnalisé́es d'activité́s de voyage en Europe avec une interface utilisateur intuitive.",
		imageUrl: "/images/destination-finale.png",
		stack: "HTML, CSS, JavaScript",
		link: "https://github.com/AudeNec/destination-finale.git",
	},
];

export function ProjectsContainer({ className }: { className?: string }) {
	return (
		<Carousel className={`w-full ${className}`}>
			<CarouselContent className="-ml-1">
				{projectsData.map((project, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Card>
								<CardContent className="aspect-square items-center justify-center p-6 h-full">
									<a href={project.link} target="_blank">
										<img
											src={project.imageUrl}
											alt={project.title}
											className="object-cover w-full h-auto max-h-[33%] rounded-md"
										/>
									</a>
									<h3 className="font-semibold text-lg mt-4">
										{project.title}
									</h3>
									<p className="text-ml h-[33%]">{project.description}</p>
									<p className="text-sm text-gray-500 mt-20">{project.stack}</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
