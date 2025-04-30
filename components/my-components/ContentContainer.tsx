import { Card } from "@/components/ui/card";
import { Section } from "../../components/my-components/Section";
import { Spacing } from "../../components/my-components/Spacing";
import { ProjectsContainer } from "../../components/my-components/ProjectsContainer";
import { AboutContainer } from "./AboutContainer";
import { ContactCard } from "./ContactCard";

export const ContentContainer = () => {
	return (
		<>
			<Section className="text-4xl font-bold font-mono text-primary">
				Projets
			</Section>
			<Spacing size="sm" />
			<Section className="flex max-md:flex-col items-start gap-4">
				<Card className="flex-[4] w-full p-15 border-0 bg-background/50">
					<ProjectsContainer />
				</Card>
			</Section>
			<Spacing size="md" />
			<Section className="text-4xl font-bold font-mono text-primary">
				À propos de moi
			</Section>
			<Spacing size="sm" />
			<Section>
				<div className="flex-[2] flex flex-col gap-4">
					<Card className="p-15 flex-1 border-0 bg-background/50">
						{" "}
						<AboutContainer />
					</Card>
					<Spacing size="md" />
				</div>
			</Section>
			<Section className="text-4xl font-bold font-mono text-primary">
				Contacte-moi
			</Section>
			<Spacing size="sm" />
			<Section className="flex-[2] flex flex-col gap-4">
				<Card className="p-15 flex-1 items-center border-0 bg-background/50">
					{" "}
					<ContactCard />
				</Card>
			</Section>
		</>
	);
};
