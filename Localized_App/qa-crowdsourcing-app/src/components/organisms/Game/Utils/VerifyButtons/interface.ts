export interface IProps {
	children: string;
	onApprove: () => void;
	onDecline: () => void;
	approveEmoji: string;
	declineEmoji: string;
}
