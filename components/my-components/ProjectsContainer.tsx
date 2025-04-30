"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const projectsData = [
    {
        title: "GO Apprendre Transmettre",
        description:
            "Site web de mise en relation pour l'échange de savoirs, intégrant une BDD, un moteur de recherche avancé, des filtres dynamiques et des fonctionnalités de gestion d'annonces (creation/MAJ)",
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
        title: "Destination Finale",
        description:
            "Site proposant des recommandations personnalisé́es d'activité́s de voyage en Europe avec une interface utilisateur intuitive.",
        imageUrl: "/images/destination-finale.png",
        stack: "HTML, CSS, JavaScript",
        link: "https://github.com/AudeNec/destination-finale.git",
    },
    {
        title: "One coffin a day, get the pleasure everyday",
        description:
            "Le seul comparateur de cercueils en ligne avec barre de recherche et filtres pour trouver le modèle parfait... pour l'éternité.",
        imageUrl: "/images/one-coffin.png",
        stack: "React, TypeScript",
        link: "https://github.com/MarinaMassot/soloRushReact.git",
    },

];

export function ProjectsContainer() {
    const cardRefs = React.useRef<HTMLDivElement[]>([]);

    return (
        <Carousel className="w-full" >
            <CarouselContent className="-ml-1 h-full">
                {projectsData.map((project, index) => (
                    <CarouselItem key={project.title} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div
                            className="p-1"
                            ref={(el) => {
                                if (el) {
                                    cardRefs.current[index] = el;
                                }
                            }}
                        >
                            <Card className="flex flex-col shadow-lg">
                                <CardContent> 
                                <a href={project.link} target="_blank" rel="noreferrer" className="">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="h-full w-full mb-4"
                                        />
                                    </a>
                                    <h3 className="text-2xl font-bold mb-4 h-fit">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg mb-4 text-justify">{project.description}</p>
                                    <p className="text-mg italic mb-4">{project.stack}</p>
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