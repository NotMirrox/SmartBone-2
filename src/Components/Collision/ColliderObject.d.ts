import type { ColliderTable } from "../..";
import type Collider from "./Collider";

declare class ColliderObject {
	public readonly Destroyed: boolean;
	public readonly Colliders: Collider[];

	constructor(colliderTable: ColliderTable, object: BasePart);

	GetObject(): BasePart;
	GetCollisions(
		point: Vector3,
		radius: number,
	): { ClosestPoint: Vector3; Normal: Vector3 }[];
	Step(): void;
	DrawDebug(
		FILL_COLLIDERS: boolean,
		SHOW_INFLUENCE: boolean,
		SHOW_AWAKE: boolean,
		SHOW_BROADPHASE: boolean,
	): void;
	Destroy(): void;
}

export = ColliderObject;
