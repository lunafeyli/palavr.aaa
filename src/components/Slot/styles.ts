import { styled } from "@styles";

export const Container = styled("div", {
	height: 76,
	width: 64,
	border: "6px solid $slotBorder",
	borderRadius: 4,
	fontSize: 48,
	fontWeight: 600,
	color: "$white",
	$flex: {
		fullCenter: true,
	},
	textTransform: "uppercase",
	userSelect: "none",

	variants: {
		selected: {
			true: {
				borderBottomWidth: 12,
			},
		},
		status: {
			correct: {
				border: 0,
				background: "$right",
			},
			wrong: {
				border: 0,
				background: "$wrong",
			},
			place: {
				border: 0,
				background: "$place",
			},
		},
	},
});
