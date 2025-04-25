import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import { ProjectsContainer } from "./ProjectsContainer";
import { AboutContainer } from "./AboutContainer";

export const ContentContainer = () => {
	return (
		<>
			<Section className="flex max-md:flex-col items-start gap-4">
				<Card className="flex-[4] w-full p-4">
					{" "}
					Projets{" "}
					<ProjectsContainer className="w-full"/>
				</Card>
			</Section>
<Spacing size="md" />
			<Section>
				<div className="flex-[2] flex flex-col gap-4">
					<Card className="p-4 flex-1">A propos de moi <AboutContainer className="w-full"/></Card>
					<Card className="p-4 flex-1">Contacte-moi</Card>
				</div>
			</Section>
		</>
	);
};
