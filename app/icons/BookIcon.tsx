import type { ComponentPropsWithoutRef } from "react";

export const BookIcon = (props:ComponentPropsWithoutRef<"svg"> & {size?: number}) => {

	return (
		<svg
			width={props.size}
			height={props.size}
			viewBox="0 0 24 24"
			version="1.1"
			preserveAspectRatio="xMidYMid"
			{...props}
		>
			<title>Phone Icon</title>
			<g>
			<path d="M17,0H7C4.243,0,2,2.243,2,5v15c0,2.206,1.794,4,4,4h11c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,5v11H8V2h4V10.347c0,.623,.791,.89,1.169,.395l1.331-1.743,1.331,1.743c.378,.495,1.169,.228,1.169-.395V2c1.654,0,3,1.346,3,3ZM6,2.184v13.816c-.732,0-1.409,.212-2,.556V5c0-1.302,.839-2.402,2-2.816Zm11,19.816H6c-2.629-.047-2.627-3.954,0-4h14v1c0,1.654-1.346,3-3,3Z" fill="CurrentColor"/>
			</g>
		</svg>
	);
};
