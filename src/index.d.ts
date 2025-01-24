import type BoneTree from "./Components/BoneTree";
import type ColliderObject from "./Components/Collision/ColliderObject";
import type ImOverlay from "./Dependencies/CeiveImOverlay";

declare class SmartBone {
	public readonly ID: string;
	public BoneTrees: BoneTree[];
	public ColliderObjects: ColliderObject[];
	public ShouldDestroy: boolean;

	DrawOverlay(overlay: ImOverlay): void;
	LoadObject(object: BasePart): void;
	LoadColliderModule(colliderModule: ModuleScript, object: BasePart): void;
	LoadRawCollider(colliderData: ColliderTable, object: BasePart): void;
	SkipUpdate(): void;
	StepBoneTrees(delta: number): void;
	DrawDebug(
		DRAW_COLLIDERS: boolean,
		DRAW_CONTACTS: boolean,
		DRAW_PHYSICAL_BONE: boolean,
		DRAW_BONE: boolean,
		DRAW_AXIS_LIMITS: boolean,
		DRAW_ROOT_PART: boolean,
		DRAW_FILL_COLLIDERS: boolean,
		DRAW_COLLIDER_INFLUENCE: boolean,
		DRAW_COLLIDER_AWAKE: boolean,
		DRAW_COLLIDER_BROADPHASE: boolean,
		DRAW_BOUNDING_BOX: boolean,
		DRAW_ROTATION_LIMITS: boolean,
		DRAW_ACCELERATION_INFO: boolean,
	): void;
	Destroy(): void;
}

export declare function Start(): {
	Stop: () => void;
};

export type ColliderTable = {
	Type: string;
	ScaleX: number;
	ScaleY: number;
	ScaleZ: number;
	OffsetX: number;
	OffsetY: number;
	OffsetZ: number;
	RotationX: number;
	RotationY: number;
	RotationZ: number;
}[];

export as namespace SmartBone;
