import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Spacing } from "./Spacing";

export const AboutContainer = ({ className }: { className?: string }) => {
	return (
		<div>
			<Section className={`w-full ${className} flex gap-4`}>
				<Card className="flex-1 flex gap-1 items-center"> 
					<img className="rounded-full w-10 h-10" src="/images/apprentissage-adaptatif.png" title="apprentissage-adaptatif-icône" alt="Apprentissage adaptatif icônes créées par Dewi Sari - Flaticon"/>
					<p>Adaptable</p> </Card>
					<Card className="flex-1 flex gap-1 items-center"> 
					<img className="w-10 h-10" src="/images/la-vitesse.png" title="la-vitesse-icône" alt="La vitesse icônes crées par Smashicons - Flaticon"/>
					<p>Dynamique</p> </Card><Card className="flex-1 flex gap-1 items-center"> 
					<img className="w-10 h-10" src="/images/apprentissage-autonome.png" title="apprentissage-autonome-icône" alt="Apprentissage adaptatif icônes créées par FreePik - Flaticon"/>
					<p>Autonome</p> </Card>
			</Section>
			<Spacing size="sm" />
			<Section>
				<Card className="flex-1 p-10">
					<h2 className="text-2xl font-bold"> Mes expériences professionnelles significatives</h2>					
					<ul className="list-disc pl-4">
						<li className="mt-4">
							<strong>
								Chef de projet SEO & Traffic manager / Chargée de mission
								marketing & communication
							</strong>
							- Eres Group (05/2022 - 11/2024)
							<ul className="list-disc pl-4">
								<li>
									Administration du site vitrine (wordpress) en collaboration
									avec l’équipe PO et UI/UX
								</li>
								<li>
									Webanalytics : mise en place d’analyses de statistiques & mise
									en place de Dashboard (excel / google data studio)
								</li>
								<li>Suivi et analyse des donné́es</li>
								<li>
									Actions SEO/SEA pour l'amé́lioration du positionnement sur les
									mots-clé́s straté́giques (actions sur le SEO technique, on-page
									et off-page, mise en place et suivi des campagnes SEA).
								</li>
								<li>Stratégie Social Media / Relation media</li>
								<li>Stratégie éditoriale</li>
								<li>
									Participation aux diffé́rents travaux et analyses dans le cadre
									de la restructuration du marketing straté́gique et opé́rationnel
								</li>
							</ul>
						</li>
						<li className="mt-4">
							<strong>Conseillère patrimoniale</strong> - Société Générale/Banque Populaire (11/2017 – 11/2021)</li>
					</ul>
				</Card>
			</Section>
		</div>
	);
};
