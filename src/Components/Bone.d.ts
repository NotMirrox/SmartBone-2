import type ImOverlay from "../Dependencies/CeiveImOverlay";
import type BoneTree from "./BoneTree";
import type ColliderObject from "./Collision/ColliderObject";

declare class IBone {
	public readonly Bone: Bone;
	public readonly ParentIndex: number;
	public readonly HeirarchyLength: number;
	public readonly RootPart: BasePart;
	public readonly RootBone: Bone;
	public readonly AnimatedWorldCFrame: CFrame;
	public readonly TransformOffset: CFrame;
	public readonly LocalTransformOffset: CFrame;
	public readonly RestPosition: Vector3;
	public readonly CalculatedWorldCFrame: CFrame;

	public Transform: CFrame;
	public LocalTransform: CFrame;
	public Radius: number;
	public Friction: number;
	public RotationLimit: number;
	public Force?: Vector3;
	public Gravity?: Vector3;
	public SolvedAnimatedCFrame: boolean;
	public HasChild: boolean;
	public StartingCFrame: CFrame;
	public Position: Vector3;
	public LastPosition: Vector3;
	public WeldPosition: Vector3;
	public WeldCFrame: CFrame;
	public ActiveWeld: boolean;
	public RigidWeld: boolean;
	public Anchored: boolean;
	public AxisLocked: [boolean, boolean, boolean];
	public XAxisLimits: NumberRange;
	public YAxisLimits: NumberRange;
	public ZAxisLimits: NumberRange;
	public IsSkippingUpdates: boolean;
	public CollisionHits: BasePart[];
	public FreeLength: number;
	public Weight: number;

	constructor(bone: Bone, rootBone: Bone, rootPart: BasePart);

	ClipVelocity(position: Vector3, vector: Vector3): void;
	PreUpdate(boneTree: BoneTree): void;
	StepPhysics(boneTree: BoneTree, force: Vector3, delta: number): void;
	Constrain(
		boneTree: BoneTree,
		colliderObject: ColliderObject,
		delta: number,
	): void;
	SkipUpdate(): void;
	SolveTransform(boneTree: BoneTree, delta: number): void;
	ApplyTransform(boneTree: BoneTree): void;
	DrawDebug(
		boneTree: BoneTree,
		DRAW_CONTACTS: boolean,
		DRAW_PHYSICAL_BONE: boolean,
		DRAW_BONE: boolean,
		DRAW_AXIS_LIMITS: boolean,
		DRAW_ROTATION_LIMIT: boolean,
	): void;
	DrawOverlay(overlay: ImOverlay): void;
}

export = IBone;
