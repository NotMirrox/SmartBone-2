import type IBone from "./Bone";
import type ColliderObject from "./Collision/ColliderObject";

interface Settings {
	Debug?: boolean;
	Damping: number;
	Stiffness: number;
	Inertia: number;
	Elasticity: number;
	Gravity: Vector3;
	Force: Vector3;
	Constraint: "Spring" | "Distance" | "Rope";
	WindType: "Sine" | "Noise" | "Hybrid";
	MatchWorkspaceWind: boolean;
	WindInfluence: number;
	ColliderKey?: string;
	AnchorDepth: number;
	AnchorsRotate: boolean;
	UpdateRate: number;
	ActivationDistance: number;
	ThrottleDistance: number;

	WindStrength: number;
	WindSpeed: number;
	WindDirection: Vector3;
}

declare class BoneTree {
	public readonly WindOffset: number;
	public readonly Root: IBone;
	public readonly RootPart: BasePart;
	public readonly RootPartSize: Vector3;
	public readonly UpdateRate: number;
	public readonly InView: boolean;
	public readonly BoundingBoxCFrame: CFrame;
	public readonly BoundingBoxSize: Vector3;
	public readonly AccumulatedDelta: number;
	public readonly Destroyed: boolean;
	public readonly IsSkippingUpdates: boolean;
	public readonly InWorkspace: boolean;
	public readonly Force: Vector3;

	public Bones: IBone[];
	public Settings: Settings;
	public ObjectMove: Vector3;
	public ObjectVelocity: Vector3;
	public ObjectPreviousPosition: Vector3;

	constructor(rootBone: IBone, rootPart: BasePart, settings: Settings);

	UpdateBoundingBox(): void;
	UpdateThrottling(rootPosition: Vector3): void;
	PreUpdate(delta: number): void;
	StepPhysics(delta: number): void;
	Constrain(colliderObjects: ColliderObject[]): void;
	SkipUpdate(): void;
	SolveTransform(delta: number): void;
	ApplyTransform(): void;
	DrawDebug(
		DRAW_CONTACTS: boolean,
		DRAW_PHYSICAL_BONE: boolean,
		DRAW_BONE: boolean,
		DRAW_AXIS_LIMITS: boolean,
		DRAW_ROOT_PART: boolean,
		DRAW_BOUNDING_BOX: boolean,
		DRAW_ROTATION_LIMITS: boolean,
		DRAW_ACCELERATION_INFO: boolean,
	): void;
}

export = BoneTree;
