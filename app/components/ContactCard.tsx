import { Card } from "@/components/ui/card";

export const ContactCard = () => {
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<Card className="fit-content p-4">
				<h2 className="text-1xl font-bold">marina.massot1@gmail.com</h2>
				<a
					href="mailto:marina.massot1@gmail.com"
					className="text-lg text-primary"
				>
					Envoie-moi un mail 💻
				</a>
			</Card>
			<Card className="fit-content p-4">
				<h2 className="text-1xl font-bold">06.09.46.00.02</h2>
				<a href="tel:+33609460002" className="text-lg text-primary">
					Envoie-moi un message 📱
				</a>
			</Card>
		</div>
	);
};
