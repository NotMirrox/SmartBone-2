import type ColliderObject from "./ColliderObject";

declare class Collider {
	public Type: string;
	public Scale: Vector3;
	public Offset: Vector3;
	public Rotation: Vector3;
	public PreviousScale: Vector3;
	public PreviousOffset: Vector3;
	public PreviousRotation: Vector3;
	public InNarrowphase: boolean;
	public ObjectConnection: RBXScriptConnection;
	public Transform: CFrame;
	public Size: Vector3;
	public GUID: string;

	SetObject(object: BasePart): void;
	UpdateTransform(): void;
	GetClosestPoint(point: Vector3, radius: number): Vector3 | undefined;
	Step(): void;
	DrawDebug(
		colliderObject: ColliderObject,
		FILL_COLLIDER: boolean,
		SHOW_INFLUENCE: boolean,
		SHOW_AWAKE: boolean,
		SHOW_BROADPHASE: boolean,
	): void;
	Destroy(): void;
}

export = Collider;
