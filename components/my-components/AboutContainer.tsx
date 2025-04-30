import { Card } from "@/components/ui/card";
import { Section } from "../../components/my-components/Section";
import { Spacing } from "../../components/my-components/Spacing";
import { BookIcon } from "@/app/icons/BookIcon";
import { RocketIcon } from "@/app/icons/RocketIcon";
import { WheelIcon } from "@/app/icons/WheelIcon";

export const AboutContainer = () => {
	return (
		<div>
			<Section className="flex flex-wrap gap-4">
				<Card className="flex-1 gap-2 items-center font-bold text-2xl bg-background/100 border-zinc-700">
					<WheelIcon size={60} />
					<p>Adaptable</p>
				</Card>
				<Card className="flex-1 gap-2 items-center bg-background/100 font-bold text-2xl border-zinc-700">
					<RocketIcon size={60} />
					<p>Dynamique</p>
				</Card>
				<Card className="flex-1 gap-2 items-center font-bold text-2xl bg-background/100 border-zinc-700">
				<BookIcon size={60} />
					<p>Autonome</p>
				</Card>
			</Section>
			<Spacing size="sm" />
			<Section>
				<Card className=" p-2 md:p-10">
					<h2 className="text-2xl font-bold text-primary text-center md:text-3xl">
						{" "}
						Mes expériences professionnelles significatives
					</h2>
					<ul className="list-disc pl-4">
						<li className="mt-4 text-xl mb-6">
							<strong>
								Chef de projet SEO & Traffic manager / Chargée de mission
								marketing & communication
							</strong><br />
							Eres Group (05/2022 - 11/2024)
							<ul className="hidden md:block list-disc pl-4 text-lg mt-6">
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
									Actions SEO/SEA pour l&rsquo;amélioration du positionnement sur les
									mots-clés stratégiques (actions sur le SEO technique, on-page
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
						<li className="mt-4 text-xl">
							<strong>Conseillère patrimoniale</strong> Société
							Générale/Banque Populaire (11/2017 – 11/2021)
						</li>
					</ul>
				</Card>
			</Section>
		</div>
	);
};
