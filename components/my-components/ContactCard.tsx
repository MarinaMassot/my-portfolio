import { PhoneIcon } from "@/app/icons/PhoneIcon";
import { PlaneIcon } from "@/app/icons/PlaneIcon";
import { Card } from "@/components/ui/card";

export const ContactCard = () => {
	return (
		<div className="flex gap-4 w-full md:flex-row flex-col items-center">
			<Card className="p-4 items-center lg:w-1/2">
				<PlaneIcon size={60} />
				<a
					href="mailto:marina.massot1@gmail.com"
					className="text-2xl font-bold text-primary"
				>
					marina.massot1@gmail.com
				</a>
			</Card>
			<Card className="p-4 items-center lg:w-1/2">
				<PhoneIcon size={60} />
				<a className="text-2xl font-bold text-primary" href="tel:+33609460002">
				06.09.46.00.02
				</a>
			</Card>
		</div>
	);
};
