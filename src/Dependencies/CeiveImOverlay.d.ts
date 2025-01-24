declare class ImOverlay {
	public DefaultY: number;
	public TextSize: number;
	public BackFrame: Frame;
	public ListLayout: UIListLayout;
	public DidUpdate: boolean;

	constructor(defaultY?: number, textSize?: number, UseInset?: boolean);

	Begin(text: string, backgroundColor?: Color3, textColor?: Color3): void;
	End(): void;
	Text(text: string, backgroundColor?: Color3, textColor?: Color3): void;
	Render(): void;
	Destroy(): void;
}

export = ImOverlay;
