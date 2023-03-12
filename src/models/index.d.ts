import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBuilds = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Builds, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly game_id: string;
  readonly player_color: string;
  readonly turn_number: number;
  readonly resource: string;
  readonly roll_value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBuilds = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Builds, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly game_id: string;
  readonly player_color: string;
  readonly turn_number: number;
  readonly resource: string;
  readonly roll_value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Builds = LazyLoading extends LazyLoadingDisabled ? EagerBuilds : LazyBuilds

export declare const Builds: (new (init: ModelInit<Builds>) => Builds) & {
  copyOf(source: Builds, mutator: (draft: MutableModel<Builds>) => MutableModel<Builds> | void): Builds;
}

type EagerRolls = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rolls, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly game_id: string;
  readonly turn_number: number;
  readonly red_value: number;
  readonly yellow_value: number;
  readonly die_color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRolls = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rolls, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly game_id: string;
  readonly turn_number: number;
  readonly red_value: number;
  readonly yellow_value: number;
  readonly die_color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rolls = LazyLoading extends LazyLoadingDisabled ? EagerRolls : LazyRolls

export declare const Rolls: (new (init: ModelInit<Rolls>) => Rolls) & {
  copyOf(source: Rolls, mutator: (draft: MutableModel<Rolls>) => MutableModel<Rolls> | void): Rolls;
}

type EagerPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly game_id: string;
  readonly player_name: string;
  readonly player_color: string;
  readonly seat_number: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly game_id: string;
  readonly player_name: string;
  readonly player_color: string;
  readonly seat_number: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Players = LazyLoading extends LazyLoadingDisabled ? EagerPlayers : LazyPlayers

export declare const Players: (new (init: ModelInit<Players>) => Players) & {
  copyOf(source: Players, mutator: (draft: MutableModel<Players>) => MutableModel<Players> | void): Players;
}

type EagerGames = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Games, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly game_variant: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGames = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Games, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly game_variant: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Games = LazyLoading extends LazyLoadingDisabled ? EagerGames : LazyGames

export declare const Games: (new (init: ModelInit<Games>) => Games) & {
  copyOf(source: Games, mutator: (draft: MutableModel<Games>) => MutableModel<Games> | void): Games;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}