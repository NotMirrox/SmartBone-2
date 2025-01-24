export function GetPoolSize(): void;

interface Property {
	Color3: Color3;
	Transparency: number;
	AlwaysOnTop: boolean;
}
export function PopProperty<T extends keyof Property>(property: T): Property[T];
export function PushProperty<T extends keyof Property>(
	property: T,
	value: Property[T],
): void;

export function SetStyle(
	color?: Color3,
	transparency?: number,
	alwaysOnTop?: boolean,
): void;
export function DoCleaning(): void;
export function ScheduleCleaning(): void;
export function AddDebrisInSeconds(seconds: number, callback: () => void): void;
export function AddDebrisInFrames(Frames: number, callback: () => void): void;

type Lerpable = CFrame | Color3 | UDim2 | Vector2 | Vector3 | number;
export function TweenProperties<T extends Record<string, Lerpable>>(
	properties: T,
	goal: T,
	tweenInfo: TweenInfo,
): () => void;

export function Init(): void;
export function SetEnabled(value: boolean): void;
export function RemoveAdornments(): void;

export as namespace Ceive;
