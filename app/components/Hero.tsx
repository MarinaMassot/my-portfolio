import { Section } from "./Section"

export const Hero = () => {
  return <Section className="flex max-lg:flex-col items-start">
	<div className="flex-[2]">
		<h2>Marina Massot</h2>
		<h3>Développeuse web fullstack</h3>
		<p>J'allie une expérience en SEO, marketing et gestion de projets à une expertise en conseil
client, acquise au cours de 6 ans en tant que conseillère patrimoniale.
Aujourd’hui, j’ai à cœur de créer des interfaces utilisateurs intuitives et optimisées
pour le web. Ma polyvalence et mon sens de la stratégie sont des atouts pour
accompagner vos projets avec précision et innovation.</p>
	</div>
	<div className="flex-[1]">
		<img src="/images/marina-massot.jpeg" alt="Marina-Massot" className="w-full height-auto"/>
	</div>
  </Section>
}