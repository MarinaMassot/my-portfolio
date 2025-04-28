import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import { ProjectsContainer } from "./ProjectsContainer";
import { AboutContainer } from "./AboutContainer";
import { ContactCard } from "./ContactCard";

export const ContentContainer = () => {
	return (
		<>
		<Section className="text-3xl font-bold">Projets</Section>
		<Spacing size="sm" />
			<Section className="flex max-md:flex-col items-start gap-4">
				<Card className="flex-[4] w-full p-15">
					<ProjectsContainer className="w-full"/>
				</Card>
			</Section>
<Spacing size="md" />
			<Section className="text-3xl font-bold">À propos de moi</Section>
		<Spacing size="sm" />
			<Section>
				<div className="flex-[2] flex flex-col gap-4">
					<Card className="p-15 flex-1"> <AboutContainer className="w-full"/></Card>
					<Spacing size="md" />
				</div>
			</Section>
			<Section className="text-3xl font-bold">Contacte-moi</Section>
					<Spacing size="sm" />
			<Section className="flex max-md:flex-col items-start gap-4">
					<Card className="p-15 flex-1"> <ContactCard/></Card>
					</Section>
					</>
	);
};
