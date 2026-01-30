
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ask_users
 * 
 */
export type ask_users = $Result.DefaultSelection<Prisma.$ask_usersPayload>
/**
 * Model ask_tournaments
 * 
 */
export type ask_tournaments = $Result.DefaultSelection<Prisma.$ask_tournamentsPayload>
/**
 * Model countries
 * 
 */
export type countries = $Result.DefaultSelection<Prisma.$countriesPayload>
/**
 * Model states
 * 
 */
export type states = $Result.DefaultSelection<Prisma.$statesPayload>
/**
 * Model cities
 * 
 */
export type cities = $Result.DefaultSelection<Prisma.$citiesPayload>
/**
 * Model ask_tournament_enquiries
 * 
 */
export type ask_tournament_enquiries = $Result.DefaultSelection<Prisma.$ask_tournament_enquiriesPayload>
/**
 * Model ask_sports_enquiries
 * 
 */
export type ask_sports_enquiries = $Result.DefaultSelection<Prisma.$ask_sports_enquiriesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const player_gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type player_gender = (typeof player_gender)[keyof typeof player_gender]

}

export type player_gender = $Enums.player_gender

export const player_gender: typeof $Enums.player_gender

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ask_users
 * const ask_users = await prisma.ask_users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ask_users
   * const ask_users = await prisma.ask_users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ask_users`: Exposes CRUD operations for the **ask_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ask_users
    * const ask_users = await prisma.ask_users.findMany()
    * ```
    */
  get ask_users(): Prisma.ask_usersDelegate<ExtArgs>;

  /**
   * `prisma.ask_tournaments`: Exposes CRUD operations for the **ask_tournaments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ask_tournaments
    * const ask_tournaments = await prisma.ask_tournaments.findMany()
    * ```
    */
  get ask_tournaments(): Prisma.ask_tournamentsDelegate<ExtArgs>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.countriesDelegate<ExtArgs>;

  /**
   * `prisma.states`: Exposes CRUD operations for the **states** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.states.findMany()
    * ```
    */
  get states(): Prisma.statesDelegate<ExtArgs>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<ExtArgs>;

  /**
   * `prisma.ask_tournament_enquiries`: Exposes CRUD operations for the **ask_tournament_enquiries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ask_tournament_enquiries
    * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findMany()
    * ```
    */
  get ask_tournament_enquiries(): Prisma.ask_tournament_enquiriesDelegate<ExtArgs>;

  /**
   * `prisma.ask_sports_enquiries`: Exposes CRUD operations for the **ask_sports_enquiries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ask_sports_enquiries
    * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findMany()
    * ```
    */
  get ask_sports_enquiries(): Prisma.ask_sports_enquiriesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ask_users: 'ask_users',
    ask_tournaments: 'ask_tournaments',
    countries: 'countries',
    states: 'states',
    cities: 'cities',
    ask_tournament_enquiries: 'ask_tournament_enquiries',
    ask_sports_enquiries: 'ask_sports_enquiries'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ask_users" | "ask_tournaments" | "countries" | "states" | "cities" | "ask_tournament_enquiries" | "ask_sports_enquiries"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ask_users: {
        payload: Prisma.$ask_usersPayload<ExtArgs>
        fields: Prisma.ask_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ask_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ask_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>
          }
          findFirst: {
            args: Prisma.ask_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ask_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>
          }
          findMany: {
            args: Prisma.ask_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>[]
          }
          create: {
            args: Prisma.ask_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>
          }
          createMany: {
            args: Prisma.ask_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ask_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>
          }
          update: {
            args: Prisma.ask_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>
          }
          deleteMany: {
            args: Prisma.ask_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ask_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ask_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_usersPayload>
          }
          aggregate: {
            args: Prisma.Ask_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsk_users>
          }
          groupBy: {
            args: Prisma.ask_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ask_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ask_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Ask_usersCountAggregateOutputType> | number
          }
        }
      }
      ask_tournaments: {
        payload: Prisma.$ask_tournamentsPayload<ExtArgs>
        fields: Prisma.ask_tournamentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ask_tournamentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ask_tournamentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>
          }
          findFirst: {
            args: Prisma.ask_tournamentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ask_tournamentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>
          }
          findMany: {
            args: Prisma.ask_tournamentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>[]
          }
          create: {
            args: Prisma.ask_tournamentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>
          }
          createMany: {
            args: Prisma.ask_tournamentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ask_tournamentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>
          }
          update: {
            args: Prisma.ask_tournamentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>
          }
          deleteMany: {
            args: Prisma.ask_tournamentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ask_tournamentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ask_tournamentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournamentsPayload>
          }
          aggregate: {
            args: Prisma.Ask_tournamentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsk_tournaments>
          }
          groupBy: {
            args: Prisma.ask_tournamentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ask_tournamentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ask_tournamentsCountArgs<ExtArgs>
            result: $Utils.Optional<Ask_tournamentsCountAggregateOutputType> | number
          }
        }
      }
      countries: {
        payload: Prisma.$countriesPayload<ExtArgs>
        fields: Prisma.countriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findFirst: {
            args: Prisma.countriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findMany: {
            args: Prisma.countriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          create: {
            args: Prisma.countriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          createMany: {
            args: Prisma.countriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.countriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          update: {
            args: Prisma.countriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          deleteMany: {
            args: Prisma.countriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.countriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.countriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.countriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      states: {
        payload: Prisma.$statesPayload<ExtArgs>
        fields: Prisma.statesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          findFirst: {
            args: Prisma.statesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          findMany: {
            args: Prisma.statesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>[]
          }
          create: {
            args: Prisma.statesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          createMany: {
            args: Prisma.statesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.statesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          update: {
            args: Prisma.statesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          deleteMany: {
            args: Prisma.statesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.statesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statesPayload>
          }
          aggregate: {
            args: Prisma.StatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStates>
          }
          groupBy: {
            args: Prisma.statesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.statesCountArgs<ExtArgs>
            result: $Utils.Optional<StatesCountAggregateOutputType> | number
          }
        }
      }
      cities: {
        payload: Prisma.$citiesPayload<ExtArgs>
        fields: Prisma.citiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findFirst: {
            args: Prisma.citiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findMany: {
            args: Prisma.citiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          create: {
            args: Prisma.citiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          createMany: {
            args: Prisma.citiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.citiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          update: {
            args: Prisma.citiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          deleteMany: {
            args: Prisma.citiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.citiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.citiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.citiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      ask_tournament_enquiries: {
        payload: Prisma.$ask_tournament_enquiriesPayload<ExtArgs>
        fields: Prisma.ask_tournament_enquiriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ask_tournament_enquiriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ask_tournament_enquiriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>
          }
          findFirst: {
            args: Prisma.ask_tournament_enquiriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ask_tournament_enquiriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>
          }
          findMany: {
            args: Prisma.ask_tournament_enquiriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>[]
          }
          create: {
            args: Prisma.ask_tournament_enquiriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>
          }
          createMany: {
            args: Prisma.ask_tournament_enquiriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ask_tournament_enquiriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>
          }
          update: {
            args: Prisma.ask_tournament_enquiriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>
          }
          deleteMany: {
            args: Prisma.ask_tournament_enquiriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ask_tournament_enquiriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ask_tournament_enquiriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_tournament_enquiriesPayload>
          }
          aggregate: {
            args: Prisma.Ask_tournament_enquiriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsk_tournament_enquiries>
          }
          groupBy: {
            args: Prisma.ask_tournament_enquiriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ask_tournament_enquiriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ask_tournament_enquiriesCountArgs<ExtArgs>
            result: $Utils.Optional<Ask_tournament_enquiriesCountAggregateOutputType> | number
          }
        }
      }
      ask_sports_enquiries: {
        payload: Prisma.$ask_sports_enquiriesPayload<ExtArgs>
        fields: Prisma.ask_sports_enquiriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ask_sports_enquiriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ask_sports_enquiriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>
          }
          findFirst: {
            args: Prisma.ask_sports_enquiriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ask_sports_enquiriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>
          }
          findMany: {
            args: Prisma.ask_sports_enquiriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>[]
          }
          create: {
            args: Prisma.ask_sports_enquiriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>
          }
          createMany: {
            args: Prisma.ask_sports_enquiriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ask_sports_enquiriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>
          }
          update: {
            args: Prisma.ask_sports_enquiriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>
          }
          deleteMany: {
            args: Prisma.ask_sports_enquiriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ask_sports_enquiriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ask_sports_enquiriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ask_sports_enquiriesPayload>
          }
          aggregate: {
            args: Prisma.Ask_sports_enquiriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsk_sports_enquiries>
          }
          groupBy: {
            args: Prisma.ask_sports_enquiriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ask_sports_enquiriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ask_sports_enquiriesCountArgs<ExtArgs>
            result: $Utils.Optional<Ask_sports_enquiriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Ask_usersCountOutputType
   */

  export type Ask_usersCountOutputType = {
    ask_tournaments: number
  }

  export type Ask_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | Ask_usersCountOutputTypeCountAsk_tournamentsArgs
  }

  // Custom InputTypes
  /**
   * Ask_usersCountOutputType without action
   */
  export type Ask_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ask_usersCountOutputType
     */
    select?: Ask_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ask_usersCountOutputType without action
   */
  export type Ask_usersCountOutputTypeCountAsk_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_tournamentsWhereInput
  }


  /**
   * Count Type CountriesCountOutputType
   */

  export type CountriesCountOutputType = {
    ask_tournaments: number
  }

  export type CountriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | CountriesCountOutputTypeCountAsk_tournamentsArgs
  }

  // Custom InputTypes
  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesCountOutputType
     */
    select?: CountriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountAsk_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_tournamentsWhereInput
  }


  /**
   * Count Type StatesCountOutputType
   */

  export type StatesCountOutputType = {
    ask_tournaments: number
  }

  export type StatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | StatesCountOutputTypeCountAsk_tournamentsArgs
  }

  // Custom InputTypes
  /**
   * StatesCountOutputType without action
   */
  export type StatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatesCountOutputType
     */
    select?: StatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatesCountOutputType without action
   */
  export type StatesCountOutputTypeCountAsk_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_tournamentsWhereInput
  }


  /**
   * Count Type CitiesCountOutputType
   */

  export type CitiesCountOutputType = {
    ask_tournaments: number
  }

  export type CitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | CitiesCountOutputTypeCountAsk_tournamentsArgs
  }

  // Custom InputTypes
  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitiesCountOutputType
     */
    select?: CitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeCountAsk_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_tournamentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ask_users
   */

  export type AggregateAsk_users = {
    _count: Ask_usersCountAggregateOutputType | null
    _avg: Ask_usersAvgAggregateOutputType | null
    _sum: Ask_usersSumAggregateOutputType | null
    _min: Ask_usersMinAggregateOutputType | null
    _max: Ask_usersMaxAggregateOutputType | null
  }

  export type Ask_usersAvgAggregateOutputType = {
    id: number | null
  }

  export type Ask_usersSumAggregateOutputType = {
    id: number | null
  }

  export type Ask_usersMinAggregateOutputType = {
    id: number | null
    name: string | null
    country_code: string | null
    phone: string | null
    email: string | null
    password: string | null
    otp_verified: boolean | null
    otp: string | null
    otp_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ask_usersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country_code: string | null
    phone: string | null
    email: string | null
    password: string | null
    otp_verified: boolean | null
    otp: string | null
    otp_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ask_usersCountAggregateOutputType = {
    id: number
    name: number
    country_code: number
    phone: number
    email: number
    password: number
    otp_verified: number
    otp: number
    otp_expires_at: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ask_usersAvgAggregateInputType = {
    id?: true
  }

  export type Ask_usersSumAggregateInputType = {
    id?: true
  }

  export type Ask_usersMinAggregateInputType = {
    id?: true
    name?: true
    country_code?: true
    phone?: true
    email?: true
    password?: true
    otp_verified?: true
    otp?: true
    otp_expires_at?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ask_usersMaxAggregateInputType = {
    id?: true
    name?: true
    country_code?: true
    phone?: true
    email?: true
    password?: true
    otp_verified?: true
    otp?: true
    otp_expires_at?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ask_usersCountAggregateInputType = {
    id?: true
    name?: true
    country_code?: true
    phone?: true
    email?: true
    password?: true
    otp_verified?: true
    otp?: true
    otp_expires_at?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ask_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_users to aggregate.
     */
    where?: ask_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_users to fetch.
     */
    orderBy?: ask_usersOrderByWithRelationInput | ask_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ask_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ask_users
    **/
    _count?: true | Ask_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ask_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ask_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ask_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ask_usersMaxAggregateInputType
  }

  export type GetAsk_usersAggregateType<T extends Ask_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateAsk_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsk_users[P]>
      : GetScalarType<T[P], AggregateAsk_users[P]>
  }




  export type ask_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_usersWhereInput
    orderBy?: ask_usersOrderByWithAggregationInput | ask_usersOrderByWithAggregationInput[]
    by: Ask_usersScalarFieldEnum[] | Ask_usersScalarFieldEnum
    having?: ask_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ask_usersCountAggregateInputType | true
    _avg?: Ask_usersAvgAggregateInputType
    _sum?: Ask_usersSumAggregateInputType
    _min?: Ask_usersMinAggregateInputType
    _max?: Ask_usersMaxAggregateInputType
  }

  export type Ask_usersGroupByOutputType = {
    id: number
    name: string | null
    country_code: string
    phone: string | null
    email: string | null
    password: string
    otp_verified: boolean
    otp: string | null
    otp_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Ask_usersCountAggregateOutputType | null
    _avg: Ask_usersAvgAggregateOutputType | null
    _sum: Ask_usersSumAggregateOutputType | null
    _min: Ask_usersMinAggregateOutputType | null
    _max: Ask_usersMaxAggregateOutputType | null
  }

  type GetAsk_usersGroupByPayload<T extends ask_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ask_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ask_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ask_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Ask_usersGroupByOutputType[P]>
        }
      >
    >


  export type ask_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country_code?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    otp_verified?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ask_tournaments?: boolean | ask_users$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | Ask_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ask_users"]>


  export type ask_usersSelectScalar = {
    id?: boolean
    name?: boolean
    country_code?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    otp_verified?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ask_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | ask_users$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | Ask_usersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ask_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ask_users"
    objects: {
      ask_tournaments: Prisma.$ask_tournamentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      country_code: string
      phone: string | null
      email: string | null
      password: string
      otp_verified: boolean
      otp: string | null
      otp_expires_at: Date | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["ask_users"]>
    composites: {}
  }

  type ask_usersGetPayload<S extends boolean | null | undefined | ask_usersDefaultArgs> = $Result.GetResult<Prisma.$ask_usersPayload, S>

  type ask_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ask_usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ask_usersCountAggregateInputType | true
    }

  export interface ask_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ask_users'], meta: { name: 'ask_users' } }
    /**
     * Find zero or one Ask_users that matches the filter.
     * @param {ask_usersFindUniqueArgs} args - Arguments to find a Ask_users
     * @example
     * // Get one Ask_users
     * const ask_users = await prisma.ask_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ask_usersFindUniqueArgs>(args: SelectSubset<T, ask_usersFindUniqueArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ask_users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ask_usersFindUniqueOrThrowArgs} args - Arguments to find a Ask_users
     * @example
     * // Get one Ask_users
     * const ask_users = await prisma.ask_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ask_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, ask_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ask_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_usersFindFirstArgs} args - Arguments to find a Ask_users
     * @example
     * // Get one Ask_users
     * const ask_users = await prisma.ask_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ask_usersFindFirstArgs>(args?: SelectSubset<T, ask_usersFindFirstArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ask_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_usersFindFirstOrThrowArgs} args - Arguments to find a Ask_users
     * @example
     * // Get one Ask_users
     * const ask_users = await prisma.ask_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ask_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, ask_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ask_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ask_users
     * const ask_users = await prisma.ask_users.findMany()
     * 
     * // Get first 10 Ask_users
     * const ask_users = await prisma.ask_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ask_usersWithIdOnly = await prisma.ask_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ask_usersFindManyArgs>(args?: SelectSubset<T, ask_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ask_users.
     * @param {ask_usersCreateArgs} args - Arguments to create a Ask_users.
     * @example
     * // Create one Ask_users
     * const Ask_users = await prisma.ask_users.create({
     *   data: {
     *     // ... data to create a Ask_users
     *   }
     * })
     * 
     */
    create<T extends ask_usersCreateArgs>(args: SelectSubset<T, ask_usersCreateArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ask_users.
     * @param {ask_usersCreateManyArgs} args - Arguments to create many Ask_users.
     * @example
     * // Create many Ask_users
     * const ask_users = await prisma.ask_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ask_usersCreateManyArgs>(args?: SelectSubset<T, ask_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ask_users.
     * @param {ask_usersDeleteArgs} args - Arguments to delete one Ask_users.
     * @example
     * // Delete one Ask_users
     * const Ask_users = await prisma.ask_users.delete({
     *   where: {
     *     // ... filter to delete one Ask_users
     *   }
     * })
     * 
     */
    delete<T extends ask_usersDeleteArgs>(args: SelectSubset<T, ask_usersDeleteArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ask_users.
     * @param {ask_usersUpdateArgs} args - Arguments to update one Ask_users.
     * @example
     * // Update one Ask_users
     * const ask_users = await prisma.ask_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ask_usersUpdateArgs>(args: SelectSubset<T, ask_usersUpdateArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ask_users.
     * @param {ask_usersDeleteManyArgs} args - Arguments to filter Ask_users to delete.
     * @example
     * // Delete a few Ask_users
     * const { count } = await prisma.ask_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ask_usersDeleteManyArgs>(args?: SelectSubset<T, ask_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ask_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ask_users
     * const ask_users = await prisma.ask_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ask_usersUpdateManyArgs>(args: SelectSubset<T, ask_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ask_users.
     * @param {ask_usersUpsertArgs} args - Arguments to update or create a Ask_users.
     * @example
     * // Update or create a Ask_users
     * const ask_users = await prisma.ask_users.upsert({
     *   create: {
     *     // ... data to create a Ask_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ask_users we want to update
     *   }
     * })
     */
    upsert<T extends ask_usersUpsertArgs>(args: SelectSubset<T, ask_usersUpsertArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ask_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_usersCountArgs} args - Arguments to filter Ask_users to count.
     * @example
     * // Count the number of Ask_users
     * const count = await prisma.ask_users.count({
     *   where: {
     *     // ... the filter for the Ask_users we want to count
     *   }
     * })
    **/
    count<T extends ask_usersCountArgs>(
      args?: Subset<T, ask_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ask_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ask_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ask_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ask_usersAggregateArgs>(args: Subset<T, Ask_usersAggregateArgs>): Prisma.PrismaPromise<GetAsk_usersAggregateType<T>>

    /**
     * Group by Ask_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ask_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ask_usersGroupByArgs['orderBy'] }
        : { orderBy?: ask_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ask_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsk_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ask_users model
   */
  readonly fields: ask_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ask_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ask_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ask_tournaments<T extends ask_users$ask_tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, ask_users$ask_tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ask_users model
   */ 
  interface ask_usersFieldRefs {
    readonly id: FieldRef<"ask_users", 'Int'>
    readonly name: FieldRef<"ask_users", 'String'>
    readonly country_code: FieldRef<"ask_users", 'String'>
    readonly phone: FieldRef<"ask_users", 'String'>
    readonly email: FieldRef<"ask_users", 'String'>
    readonly password: FieldRef<"ask_users", 'String'>
    readonly otp_verified: FieldRef<"ask_users", 'Boolean'>
    readonly otp: FieldRef<"ask_users", 'String'>
    readonly otp_expires_at: FieldRef<"ask_users", 'DateTime'>
    readonly created_at: FieldRef<"ask_users", 'DateTime'>
    readonly updated_at: FieldRef<"ask_users", 'DateTime'>
    readonly deleted_at: FieldRef<"ask_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ask_users findUnique
   */
  export type ask_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * Filter, which ask_users to fetch.
     */
    where: ask_usersWhereUniqueInput
  }

  /**
   * ask_users findUniqueOrThrow
   */
  export type ask_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * Filter, which ask_users to fetch.
     */
    where: ask_usersWhereUniqueInput
  }

  /**
   * ask_users findFirst
   */
  export type ask_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * Filter, which ask_users to fetch.
     */
    where?: ask_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_users to fetch.
     */
    orderBy?: ask_usersOrderByWithRelationInput | ask_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_users.
     */
    cursor?: ask_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_users.
     */
    distinct?: Ask_usersScalarFieldEnum | Ask_usersScalarFieldEnum[]
  }

  /**
   * ask_users findFirstOrThrow
   */
  export type ask_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * Filter, which ask_users to fetch.
     */
    where?: ask_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_users to fetch.
     */
    orderBy?: ask_usersOrderByWithRelationInput | ask_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_users.
     */
    cursor?: ask_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_users.
     */
    distinct?: Ask_usersScalarFieldEnum | Ask_usersScalarFieldEnum[]
  }

  /**
   * ask_users findMany
   */
  export type ask_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * Filter, which ask_users to fetch.
     */
    where?: ask_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_users to fetch.
     */
    orderBy?: ask_usersOrderByWithRelationInput | ask_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ask_users.
     */
    cursor?: ask_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_users.
     */
    skip?: number
    distinct?: Ask_usersScalarFieldEnum | Ask_usersScalarFieldEnum[]
  }

  /**
   * ask_users create
   */
  export type ask_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a ask_users.
     */
    data: XOR<ask_usersCreateInput, ask_usersUncheckedCreateInput>
  }

  /**
   * ask_users createMany
   */
  export type ask_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ask_users.
     */
    data: ask_usersCreateManyInput | ask_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ask_users update
   */
  export type ask_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a ask_users.
     */
    data: XOR<ask_usersUpdateInput, ask_usersUncheckedUpdateInput>
    /**
     * Choose, which ask_users to update.
     */
    where: ask_usersWhereUniqueInput
  }

  /**
   * ask_users updateMany
   */
  export type ask_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ask_users.
     */
    data: XOR<ask_usersUpdateManyMutationInput, ask_usersUncheckedUpdateManyInput>
    /**
     * Filter which ask_users to update
     */
    where?: ask_usersWhereInput
  }

  /**
   * ask_users upsert
   */
  export type ask_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the ask_users to update in case it exists.
     */
    where: ask_usersWhereUniqueInput
    /**
     * In case the ask_users found by the `where` argument doesn't exist, create a new ask_users with this data.
     */
    create: XOR<ask_usersCreateInput, ask_usersUncheckedCreateInput>
    /**
     * In case the ask_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ask_usersUpdateInput, ask_usersUncheckedUpdateInput>
  }

  /**
   * ask_users delete
   */
  export type ask_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
    /**
     * Filter which ask_users to delete.
     */
    where: ask_usersWhereUniqueInput
  }

  /**
   * ask_users deleteMany
   */
  export type ask_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_users to delete
     */
    where?: ask_usersWhereInput
  }

  /**
   * ask_users.ask_tournaments
   */
  export type ask_users$ask_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    where?: ask_tournamentsWhereInput
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    cursor?: ask_tournamentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * ask_users without action
   */
  export type ask_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_users
     */
    select?: ask_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_usersInclude<ExtArgs> | null
  }


  /**
   * Model ask_tournaments
   */

  export type AggregateAsk_tournaments = {
    _count: Ask_tournamentsCountAggregateOutputType | null
    _avg: Ask_tournamentsAvgAggregateOutputType | null
    _sum: Ask_tournamentsSumAggregateOutputType | null
    _min: Ask_tournamentsMinAggregateOutputType | null
    _max: Ask_tournamentsMaxAggregateOutputType | null
  }

  export type Ask_tournamentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    country_id: number | null
    state_id: number | null
    city_id: number | null
    participation_limit: number | null
    publish_status: number | null
  }

  export type Ask_tournamentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    country_id: bigint | null
    state_id: bigint | null
    city_id: bigint | null
    participation_limit: number | null
    publish_status: number | null
  }

  export type Ask_tournamentsMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    sport_id: string | null
    user_id: number | null
    name: string | null
    slug_name: string | null
    description: string | null
    content: string | null
    tournament_type: string | null
    startdate: Date | null
    enddate: Date | null
    address: string | null
    country_id: bigint | null
    state_id: bigint | null
    city_id: bigint | null
    bannerimage: string | null
    thumbnail: string | null
    url: string | null
    brochure: string | null
    prize: string | null
    fees: string | null
    organizer_name: string | null
    participation_limit: number | null
    publish_status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ask_tournamentsMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    sport_id: string | null
    user_id: number | null
    name: string | null
    slug_name: string | null
    description: string | null
    content: string | null
    tournament_type: string | null
    startdate: Date | null
    enddate: Date | null
    address: string | null
    country_id: bigint | null
    state_id: bigint | null
    city_id: bigint | null
    bannerimage: string | null
    thumbnail: string | null
    url: string | null
    brochure: string | null
    prize: string | null
    fees: string | null
    organizer_name: string | null
    participation_limit: number | null
    publish_status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ask_tournamentsCountAggregateOutputType = {
    id: number
    uuid: number
    sport_id: number
    user_id: number
    name: number
    slug_name: number
    description: number
    content: number
    tournament_type: number
    startdate: number
    enddate: number
    address: number
    country_id: number
    state_id: number
    city_id: number
    bannerimage: number
    thumbnail: number
    url: number
    brochure: number
    prize: number
    fees: number
    organizer_name: number
    participation_limit: number
    publish_status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ask_tournamentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    country_id?: true
    state_id?: true
    city_id?: true
    participation_limit?: true
    publish_status?: true
  }

  export type Ask_tournamentsSumAggregateInputType = {
    id?: true
    user_id?: true
    country_id?: true
    state_id?: true
    city_id?: true
    participation_limit?: true
    publish_status?: true
  }

  export type Ask_tournamentsMinAggregateInputType = {
    id?: true
    uuid?: true
    sport_id?: true
    user_id?: true
    name?: true
    slug_name?: true
    description?: true
    content?: true
    tournament_type?: true
    startdate?: true
    enddate?: true
    address?: true
    country_id?: true
    state_id?: true
    city_id?: true
    bannerimage?: true
    thumbnail?: true
    url?: true
    brochure?: true
    prize?: true
    fees?: true
    organizer_name?: true
    participation_limit?: true
    publish_status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ask_tournamentsMaxAggregateInputType = {
    id?: true
    uuid?: true
    sport_id?: true
    user_id?: true
    name?: true
    slug_name?: true
    description?: true
    content?: true
    tournament_type?: true
    startdate?: true
    enddate?: true
    address?: true
    country_id?: true
    state_id?: true
    city_id?: true
    bannerimage?: true
    thumbnail?: true
    url?: true
    brochure?: true
    prize?: true
    fees?: true
    organizer_name?: true
    participation_limit?: true
    publish_status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ask_tournamentsCountAggregateInputType = {
    id?: true
    uuid?: true
    sport_id?: true
    user_id?: true
    name?: true
    slug_name?: true
    description?: true
    content?: true
    tournament_type?: true
    startdate?: true
    enddate?: true
    address?: true
    country_id?: true
    state_id?: true
    city_id?: true
    bannerimage?: true
    thumbnail?: true
    url?: true
    brochure?: true
    prize?: true
    fees?: true
    organizer_name?: true
    participation_limit?: true
    publish_status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ask_tournamentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_tournaments to aggregate.
     */
    where?: ask_tournamentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournaments to fetch.
     */
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ask_tournamentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ask_tournaments
    **/
    _count?: true | Ask_tournamentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ask_tournamentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ask_tournamentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ask_tournamentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ask_tournamentsMaxAggregateInputType
  }

  export type GetAsk_tournamentsAggregateType<T extends Ask_tournamentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAsk_tournaments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsk_tournaments[P]>
      : GetScalarType<T[P], AggregateAsk_tournaments[P]>
  }




  export type ask_tournamentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_tournamentsWhereInput
    orderBy?: ask_tournamentsOrderByWithAggregationInput | ask_tournamentsOrderByWithAggregationInput[]
    by: Ask_tournamentsScalarFieldEnum[] | Ask_tournamentsScalarFieldEnum
    having?: ask_tournamentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ask_tournamentsCountAggregateInputType | true
    _avg?: Ask_tournamentsAvgAggregateInputType
    _sum?: Ask_tournamentsSumAggregateInputType
    _min?: Ask_tournamentsMinAggregateInputType
    _max?: Ask_tournamentsMaxAggregateInputType
  }

  export type Ask_tournamentsGroupByOutputType = {
    id: number
    uuid: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description: string | null
    content: string | null
    tournament_type: string | null
    startdate: Date | null
    enddate: Date | null
    address: string | null
    country_id: bigint
    state_id: bigint
    city_id: bigint
    bannerimage: string | null
    thumbnail: string | null
    url: string | null
    brochure: string | null
    prize: string | null
    fees: string | null
    organizer_name: string | null
    participation_limit: number | null
    publish_status: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Ask_tournamentsCountAggregateOutputType | null
    _avg: Ask_tournamentsAvgAggregateOutputType | null
    _sum: Ask_tournamentsSumAggregateOutputType | null
    _min: Ask_tournamentsMinAggregateOutputType | null
    _max: Ask_tournamentsMaxAggregateOutputType | null
  }

  type GetAsk_tournamentsGroupByPayload<T extends ask_tournamentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ask_tournamentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ask_tournamentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ask_tournamentsGroupByOutputType[P]>
            : GetScalarType<T[P], Ask_tournamentsGroupByOutputType[P]>
        }
      >
    >


  export type ask_tournamentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    sport_id?: boolean
    user_id?: boolean
    name?: boolean
    slug_name?: boolean
    description?: boolean
    content?: boolean
    tournament_type?: boolean
    startdate?: boolean
    enddate?: boolean
    address?: boolean
    country_id?: boolean
    state_id?: boolean
    city_id?: boolean
    bannerimage?: boolean
    thumbnail?: boolean
    url?: boolean
    brochure?: boolean
    prize?: boolean
    fees?: boolean
    organizer_name?: boolean
    participation_limit?: boolean
    publish_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    country?: boolean | countriesDefaultArgs<ExtArgs>
    state?: boolean | statesDefaultArgs<ExtArgs>
    city?: boolean | citiesDefaultArgs<ExtArgs>
    user?: boolean | ask_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ask_tournaments"]>


  export type ask_tournamentsSelectScalar = {
    id?: boolean
    uuid?: boolean
    sport_id?: boolean
    user_id?: boolean
    name?: boolean
    slug_name?: boolean
    description?: boolean
    content?: boolean
    tournament_type?: boolean
    startdate?: boolean
    enddate?: boolean
    address?: boolean
    country_id?: boolean
    state_id?: boolean
    city_id?: boolean
    bannerimage?: boolean
    thumbnail?: boolean
    url?: boolean
    brochure?: boolean
    prize?: boolean
    fees?: boolean
    organizer_name?: boolean
    participation_limit?: boolean
    publish_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ask_tournamentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | countriesDefaultArgs<ExtArgs>
    state?: boolean | statesDefaultArgs<ExtArgs>
    city?: boolean | citiesDefaultArgs<ExtArgs>
    user?: boolean | ask_usersDefaultArgs<ExtArgs>
  }

  export type $ask_tournamentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ask_tournaments"
    objects: {
      country: Prisma.$countriesPayload<ExtArgs>
      state: Prisma.$statesPayload<ExtArgs>
      city: Prisma.$citiesPayload<ExtArgs>
      user: Prisma.$ask_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      sport_id: string
      user_id: number
      name: string
      slug_name: string
      description: string | null
      content: string | null
      tournament_type: string | null
      startdate: Date | null
      enddate: Date | null
      address: string | null
      country_id: bigint
      state_id: bigint
      city_id: bigint
      bannerimage: string | null
      thumbnail: string | null
      url: string | null
      brochure: string | null
      prize: string | null
      fees: string | null
      organizer_name: string | null
      participation_limit: number | null
      publish_status: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["ask_tournaments"]>
    composites: {}
  }

  type ask_tournamentsGetPayload<S extends boolean | null | undefined | ask_tournamentsDefaultArgs> = $Result.GetResult<Prisma.$ask_tournamentsPayload, S>

  type ask_tournamentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ask_tournamentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ask_tournamentsCountAggregateInputType | true
    }

  export interface ask_tournamentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ask_tournaments'], meta: { name: 'ask_tournaments' } }
    /**
     * Find zero or one Ask_tournaments that matches the filter.
     * @param {ask_tournamentsFindUniqueArgs} args - Arguments to find a Ask_tournaments
     * @example
     * // Get one Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ask_tournamentsFindUniqueArgs>(args: SelectSubset<T, ask_tournamentsFindUniqueArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ask_tournaments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ask_tournamentsFindUniqueOrThrowArgs} args - Arguments to find a Ask_tournaments
     * @example
     * // Get one Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ask_tournamentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ask_tournamentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ask_tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournamentsFindFirstArgs} args - Arguments to find a Ask_tournaments
     * @example
     * // Get one Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ask_tournamentsFindFirstArgs>(args?: SelectSubset<T, ask_tournamentsFindFirstArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ask_tournaments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournamentsFindFirstOrThrowArgs} args - Arguments to find a Ask_tournaments
     * @example
     * // Get one Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ask_tournamentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ask_tournamentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ask_tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournamentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.findMany()
     * 
     * // Get first 10 Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ask_tournamentsWithIdOnly = await prisma.ask_tournaments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ask_tournamentsFindManyArgs>(args?: SelectSubset<T, ask_tournamentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ask_tournaments.
     * @param {ask_tournamentsCreateArgs} args - Arguments to create a Ask_tournaments.
     * @example
     * // Create one Ask_tournaments
     * const Ask_tournaments = await prisma.ask_tournaments.create({
     *   data: {
     *     // ... data to create a Ask_tournaments
     *   }
     * })
     * 
     */
    create<T extends ask_tournamentsCreateArgs>(args: SelectSubset<T, ask_tournamentsCreateArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ask_tournaments.
     * @param {ask_tournamentsCreateManyArgs} args - Arguments to create many Ask_tournaments.
     * @example
     * // Create many Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ask_tournamentsCreateManyArgs>(args?: SelectSubset<T, ask_tournamentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ask_tournaments.
     * @param {ask_tournamentsDeleteArgs} args - Arguments to delete one Ask_tournaments.
     * @example
     * // Delete one Ask_tournaments
     * const Ask_tournaments = await prisma.ask_tournaments.delete({
     *   where: {
     *     // ... filter to delete one Ask_tournaments
     *   }
     * })
     * 
     */
    delete<T extends ask_tournamentsDeleteArgs>(args: SelectSubset<T, ask_tournamentsDeleteArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ask_tournaments.
     * @param {ask_tournamentsUpdateArgs} args - Arguments to update one Ask_tournaments.
     * @example
     * // Update one Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ask_tournamentsUpdateArgs>(args: SelectSubset<T, ask_tournamentsUpdateArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ask_tournaments.
     * @param {ask_tournamentsDeleteManyArgs} args - Arguments to filter Ask_tournaments to delete.
     * @example
     * // Delete a few Ask_tournaments
     * const { count } = await prisma.ask_tournaments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ask_tournamentsDeleteManyArgs>(args?: SelectSubset<T, ask_tournamentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ask_tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournamentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ask_tournamentsUpdateManyArgs>(args: SelectSubset<T, ask_tournamentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ask_tournaments.
     * @param {ask_tournamentsUpsertArgs} args - Arguments to update or create a Ask_tournaments.
     * @example
     * // Update or create a Ask_tournaments
     * const ask_tournaments = await prisma.ask_tournaments.upsert({
     *   create: {
     *     // ... data to create a Ask_tournaments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ask_tournaments we want to update
     *   }
     * })
     */
    upsert<T extends ask_tournamentsUpsertArgs>(args: SelectSubset<T, ask_tournamentsUpsertArgs<ExtArgs>>): Prisma__ask_tournamentsClient<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ask_tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournamentsCountArgs} args - Arguments to filter Ask_tournaments to count.
     * @example
     * // Count the number of Ask_tournaments
     * const count = await prisma.ask_tournaments.count({
     *   where: {
     *     // ... the filter for the Ask_tournaments we want to count
     *   }
     * })
    **/
    count<T extends ask_tournamentsCountArgs>(
      args?: Subset<T, ask_tournamentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ask_tournamentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ask_tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ask_tournamentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ask_tournamentsAggregateArgs>(args: Subset<T, Ask_tournamentsAggregateArgs>): Prisma.PrismaPromise<GetAsk_tournamentsAggregateType<T>>

    /**
     * Group by Ask_tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournamentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ask_tournamentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ask_tournamentsGroupByArgs['orderBy'] }
        : { orderBy?: ask_tournamentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ask_tournamentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsk_tournamentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ask_tournaments model
   */
  readonly fields: ask_tournamentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ask_tournaments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ask_tournamentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends countriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, countriesDefaultArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    state<T extends statesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, statesDefaultArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    city<T extends citiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, citiesDefaultArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends ask_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ask_usersDefaultArgs<ExtArgs>>): Prisma__ask_usersClient<$Result.GetResult<Prisma.$ask_usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ask_tournaments model
   */ 
  interface ask_tournamentsFieldRefs {
    readonly id: FieldRef<"ask_tournaments", 'Int'>
    readonly uuid: FieldRef<"ask_tournaments", 'String'>
    readonly sport_id: FieldRef<"ask_tournaments", 'String'>
    readonly user_id: FieldRef<"ask_tournaments", 'Int'>
    readonly name: FieldRef<"ask_tournaments", 'String'>
    readonly slug_name: FieldRef<"ask_tournaments", 'String'>
    readonly description: FieldRef<"ask_tournaments", 'String'>
    readonly content: FieldRef<"ask_tournaments", 'String'>
    readonly tournament_type: FieldRef<"ask_tournaments", 'String'>
    readonly startdate: FieldRef<"ask_tournaments", 'DateTime'>
    readonly enddate: FieldRef<"ask_tournaments", 'DateTime'>
    readonly address: FieldRef<"ask_tournaments", 'String'>
    readonly country_id: FieldRef<"ask_tournaments", 'BigInt'>
    readonly state_id: FieldRef<"ask_tournaments", 'BigInt'>
    readonly city_id: FieldRef<"ask_tournaments", 'BigInt'>
    readonly bannerimage: FieldRef<"ask_tournaments", 'String'>
    readonly thumbnail: FieldRef<"ask_tournaments", 'String'>
    readonly url: FieldRef<"ask_tournaments", 'String'>
    readonly brochure: FieldRef<"ask_tournaments", 'String'>
    readonly prize: FieldRef<"ask_tournaments", 'String'>
    readonly fees: FieldRef<"ask_tournaments", 'String'>
    readonly organizer_name: FieldRef<"ask_tournaments", 'String'>
    readonly participation_limit: FieldRef<"ask_tournaments", 'Int'>
    readonly publish_status: FieldRef<"ask_tournaments", 'Int'>
    readonly created_at: FieldRef<"ask_tournaments", 'DateTime'>
    readonly updated_at: FieldRef<"ask_tournaments", 'DateTime'>
    readonly deleted_at: FieldRef<"ask_tournaments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ask_tournaments findUnique
   */
  export type ask_tournamentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * Filter, which ask_tournaments to fetch.
     */
    where: ask_tournamentsWhereUniqueInput
  }

  /**
   * ask_tournaments findUniqueOrThrow
   */
  export type ask_tournamentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * Filter, which ask_tournaments to fetch.
     */
    where: ask_tournamentsWhereUniqueInput
  }

  /**
   * ask_tournaments findFirst
   */
  export type ask_tournamentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * Filter, which ask_tournaments to fetch.
     */
    where?: ask_tournamentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournaments to fetch.
     */
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_tournaments.
     */
    cursor?: ask_tournamentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_tournaments.
     */
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * ask_tournaments findFirstOrThrow
   */
  export type ask_tournamentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * Filter, which ask_tournaments to fetch.
     */
    where?: ask_tournamentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournaments to fetch.
     */
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_tournaments.
     */
    cursor?: ask_tournamentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_tournaments.
     */
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * ask_tournaments findMany
   */
  export type ask_tournamentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * Filter, which ask_tournaments to fetch.
     */
    where?: ask_tournamentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournaments to fetch.
     */
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ask_tournaments.
     */
    cursor?: ask_tournamentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournaments.
     */
    skip?: number
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * ask_tournaments create
   */
  export type ask_tournamentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ask_tournaments.
     */
    data: XOR<ask_tournamentsCreateInput, ask_tournamentsUncheckedCreateInput>
  }

  /**
   * ask_tournaments createMany
   */
  export type ask_tournamentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ask_tournaments.
     */
    data: ask_tournamentsCreateManyInput | ask_tournamentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ask_tournaments update
   */
  export type ask_tournamentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ask_tournaments.
     */
    data: XOR<ask_tournamentsUpdateInput, ask_tournamentsUncheckedUpdateInput>
    /**
     * Choose, which ask_tournaments to update.
     */
    where: ask_tournamentsWhereUniqueInput
  }

  /**
   * ask_tournaments updateMany
   */
  export type ask_tournamentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ask_tournaments.
     */
    data: XOR<ask_tournamentsUpdateManyMutationInput, ask_tournamentsUncheckedUpdateManyInput>
    /**
     * Filter which ask_tournaments to update
     */
    where?: ask_tournamentsWhereInput
  }

  /**
   * ask_tournaments upsert
   */
  export type ask_tournamentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ask_tournaments to update in case it exists.
     */
    where: ask_tournamentsWhereUniqueInput
    /**
     * In case the ask_tournaments found by the `where` argument doesn't exist, create a new ask_tournaments with this data.
     */
    create: XOR<ask_tournamentsCreateInput, ask_tournamentsUncheckedCreateInput>
    /**
     * In case the ask_tournaments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ask_tournamentsUpdateInput, ask_tournamentsUncheckedUpdateInput>
  }

  /**
   * ask_tournaments delete
   */
  export type ask_tournamentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    /**
     * Filter which ask_tournaments to delete.
     */
    where: ask_tournamentsWhereUniqueInput
  }

  /**
   * ask_tournaments deleteMany
   */
  export type ask_tournamentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_tournaments to delete
     */
    where?: ask_tournamentsWhereInput
  }

  /**
   * ask_tournaments without action
   */
  export type ask_tournamentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
  }


  /**
   * Model countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type CountriesSumAggregateOutputType = {
    id: bigint | null
    status: number | null
  }

  export type CountriesMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    iso_2: string | null
    iso_3: string | null
    phone_code: string | null
    currency: string | null
    flag: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    iso_2: string | null
    iso_3: string | null
    phone_code: string | null
    currency: string | null
    flag: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    name: number
    iso_2: number
    iso_3: number
    phone_code: number
    currency: number
    flag: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    name?: true
    iso_2?: true
    iso_3?: true
    phone_code?: true
    currency?: true
    flag?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    name?: true
    iso_2?: true
    iso_3?: true
    phone_code?: true
    currency?: true
    flag?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    name?: true
    iso_2?: true
    iso_3?: true
    phone_code?: true
    currency?: true
    flag?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to aggregate.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type countriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countriesWhereInput
    orderBy?: countriesOrderByWithAggregationInput | countriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: countriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    id: bigint
    name: string
    iso_2: string | null
    iso_3: string | null
    phone_code: string | null
    currency: string | null
    flag: string | null
    status: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends countriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type countriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso_2?: boolean
    iso_3?: boolean
    phone_code?: boolean
    currency?: boolean
    flag?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ask_tournaments?: boolean | countries$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countries"]>


  export type countriesSelectScalar = {
    id?: boolean
    name?: boolean
    iso_2?: boolean
    iso_3?: boolean
    phone_code?: boolean
    currency?: boolean
    flag?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type countriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | countries$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $countriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "countries"
    objects: {
      ask_tournaments: Prisma.$ask_tournamentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      iso_2: string | null
      iso_3: string | null
      phone_code: string | null
      currency: string | null
      flag: string | null
      status: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type countriesGetPayload<S extends boolean | null | undefined | countriesDefaultArgs> = $Result.GetResult<Prisma.$countriesPayload, S>

  type countriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<countriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface countriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['countries'], meta: { name: 'countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {countriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countriesFindUniqueArgs>(args: SelectSubset<T, countriesFindUniqueArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {countriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countriesFindUniqueOrThrowArgs>(args: SelectSubset<T, countriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countriesFindFirstArgs>(args?: SelectSubset<T, countriesFindFirstArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countriesFindFirstOrThrowArgs>(args?: SelectSubset<T, countriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends countriesFindManyArgs>(args?: SelectSubset<T, countriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Countries.
     * @param {countriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends countriesCreateArgs>(args: SelectSubset<T, countriesCreateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {countriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countriesCreateManyArgs>(args?: SelectSubset<T, countriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Countries.
     * @param {countriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends countriesDeleteArgs>(args: SelectSubset<T, countriesDeleteArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Countries.
     * @param {countriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countriesUpdateArgs>(args: SelectSubset<T, countriesUpdateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {countriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countriesDeleteManyArgs>(args?: SelectSubset<T, countriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countriesUpdateManyArgs>(args: SelectSubset<T, countriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {countriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends countriesUpsertArgs>(args: SelectSubset<T, countriesUpsertArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countriesCountArgs>(
      args?: Subset<T, countriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends countriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countriesGroupByArgs['orderBy'] }
        : { orderBy?: countriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, countriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the countries model
   */
  readonly fields: countriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ask_tournaments<T extends countries$ask_tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, countries$ask_tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the countries model
   */ 
  interface countriesFieldRefs {
    readonly id: FieldRef<"countries", 'BigInt'>
    readonly name: FieldRef<"countries", 'String'>
    readonly iso_2: FieldRef<"countries", 'String'>
    readonly iso_3: FieldRef<"countries", 'String'>
    readonly phone_code: FieldRef<"countries", 'String'>
    readonly currency: FieldRef<"countries", 'String'>
    readonly flag: FieldRef<"countries", 'String'>
    readonly status: FieldRef<"countries", 'Int'>
    readonly created_at: FieldRef<"countries", 'DateTime'>
    readonly updated_at: FieldRef<"countries", 'DateTime'>
    readonly deleted_at: FieldRef<"countries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * countries findUnique
   */
  export type countriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findUniqueOrThrow
   */
  export type countriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findFirst
   */
  export type countriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findFirstOrThrow
   */
  export type countriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findMany
   */
  export type countriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries create
   */
  export type countriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * The data needed to create a countries.
     */
    data: XOR<countriesCreateInput, countriesUncheckedCreateInput>
  }

  /**
   * countries createMany
   */
  export type countriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries update
   */
  export type countriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * The data needed to update a countries.
     */
    data: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
    /**
     * Choose, which countries to update.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries updateMany
   */
  export type countriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
  }

  /**
   * countries upsert
   */
  export type countriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * The filter to search for the countries to update in case it exists.
     */
    where: countriesWhereUniqueInput
    /**
     * In case the countries found by the `where` argument doesn't exist, create a new countries with this data.
     */
    create: XOR<countriesCreateInput, countriesUncheckedCreateInput>
    /**
     * In case the countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
  }

  /**
   * countries delete
   */
  export type countriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter which countries to delete.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries deleteMany
   */
  export type countriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countriesWhereInput
  }

  /**
   * countries.ask_tournaments
   */
  export type countries$ask_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    where?: ask_tournamentsWhereInput
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    cursor?: ask_tournamentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * countries without action
   */
  export type countriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
  }


  /**
   * Model states
   */

  export type AggregateStates = {
    _count: StatesCountAggregateOutputType | null
    _avg: StatesAvgAggregateOutputType | null
    _sum: StatesSumAggregateOutputType | null
    _min: StatesMinAggregateOutputType | null
    _max: StatesMaxAggregateOutputType | null
  }

  export type StatesAvgAggregateOutputType = {
    id: number | null
    country_id: number | null
    status: number | null
  }

  export type StatesSumAggregateOutputType = {
    id: bigint | null
    country_id: bigint | null
    status: number | null
  }

  export type StatesMinAggregateOutputType = {
    id: bigint | null
    country_id: bigint | null
    name: string | null
    code: string | null
    slug: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type StatesMaxAggregateOutputType = {
    id: bigint | null
    country_id: bigint | null
    name: string | null
    code: string | null
    slug: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type StatesCountAggregateOutputType = {
    id: number
    country_id: number
    name: number
    code: number
    slug: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type StatesAvgAggregateInputType = {
    id?: true
    country_id?: true
    status?: true
  }

  export type StatesSumAggregateInputType = {
    id?: true
    country_id?: true
    status?: true
  }

  export type StatesMinAggregateInputType = {
    id?: true
    country_id?: true
    name?: true
    code?: true
    slug?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type StatesMaxAggregateInputType = {
    id?: true
    country_id?: true
    name?: true
    code?: true
    slug?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type StatesCountAggregateInputType = {
    id?: true
    country_id?: true
    name?: true
    code?: true
    slug?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type StatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which states to aggregate.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned states
    **/
    _count?: true | StatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatesMaxAggregateInputType
  }

  export type GetStatesAggregateType<T extends StatesAggregateArgs> = {
        [P in keyof T & keyof AggregateStates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStates[P]>
      : GetScalarType<T[P], AggregateStates[P]>
  }




  export type statesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statesWhereInput
    orderBy?: statesOrderByWithAggregationInput | statesOrderByWithAggregationInput[]
    by: StatesScalarFieldEnum[] | StatesScalarFieldEnum
    having?: statesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatesCountAggregateInputType | true
    _avg?: StatesAvgAggregateInputType
    _sum?: StatesSumAggregateInputType
    _min?: StatesMinAggregateInputType
    _max?: StatesMaxAggregateInputType
  }

  export type StatesGroupByOutputType = {
    id: bigint
    country_id: bigint
    name: string
    code: string | null
    slug: string | null
    status: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: StatesCountAggregateOutputType | null
    _avg: StatesAvgAggregateOutputType | null
    _sum: StatesSumAggregateOutputType | null
    _min: StatesMinAggregateOutputType | null
    _max: StatesMaxAggregateOutputType | null
  }

  type GetStatesGroupByPayload<T extends statesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatesGroupByOutputType[P]>
            : GetScalarType<T[P], StatesGroupByOutputType[P]>
        }
      >
    >


  export type statesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_id?: boolean
    name?: boolean
    code?: boolean
    slug?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ask_tournaments?: boolean | states$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | StatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["states"]>


  export type statesSelectScalar = {
    id?: boolean
    country_id?: boolean
    name?: boolean
    code?: boolean
    slug?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type statesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | states$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | StatesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $statesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "states"
    objects: {
      ask_tournaments: Prisma.$ask_tournamentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      country_id: bigint
      name: string
      code: string | null
      slug: string | null
      status: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["states"]>
    composites: {}
  }

  type statesGetPayload<S extends boolean | null | undefined | statesDefaultArgs> = $Result.GetResult<Prisma.$statesPayload, S>

  type statesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<statesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatesCountAggregateInputType | true
    }

  export interface statesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['states'], meta: { name: 'states' } }
    /**
     * Find zero or one States that matches the filter.
     * @param {statesFindUniqueArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statesFindUniqueArgs>(args: SelectSubset<T, statesFindUniqueArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one States that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {statesFindUniqueOrThrowArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statesFindUniqueOrThrowArgs>(args: SelectSubset<T, statesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindFirstArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statesFindFirstArgs>(args?: SelectSubset<T, statesFindFirstArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first States that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindFirstOrThrowArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statesFindFirstOrThrowArgs>(args?: SelectSubset<T, statesFindFirstOrThrowArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.states.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.states.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statesWithIdOnly = await prisma.states.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends statesFindManyArgs>(args?: SelectSubset<T, statesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a States.
     * @param {statesCreateArgs} args - Arguments to create a States.
     * @example
     * // Create one States
     * const States = await prisma.states.create({
     *   data: {
     *     // ... data to create a States
     *   }
     * })
     * 
     */
    create<T extends statesCreateArgs>(args: SelectSubset<T, statesCreateArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many States.
     * @param {statesCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const states = await prisma.states.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statesCreateManyArgs>(args?: SelectSubset<T, statesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a States.
     * @param {statesDeleteArgs} args - Arguments to delete one States.
     * @example
     * // Delete one States
     * const States = await prisma.states.delete({
     *   where: {
     *     // ... filter to delete one States
     *   }
     * })
     * 
     */
    delete<T extends statesDeleteArgs>(args: SelectSubset<T, statesDeleteArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one States.
     * @param {statesUpdateArgs} args - Arguments to update one States.
     * @example
     * // Update one States
     * const states = await prisma.states.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statesUpdateArgs>(args: SelectSubset<T, statesUpdateArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more States.
     * @param {statesDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.states.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statesDeleteManyArgs>(args?: SelectSubset<T, statesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const states = await prisma.states.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statesUpdateManyArgs>(args: SelectSubset<T, statesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one States.
     * @param {statesUpsertArgs} args - Arguments to update or create a States.
     * @example
     * // Update or create a States
     * const states = await prisma.states.upsert({
     *   create: {
     *     // ... data to create a States
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the States we want to update
     *   }
     * })
     */
    upsert<T extends statesUpsertArgs>(args: SelectSubset<T, statesUpsertArgs<ExtArgs>>): Prisma__statesClient<$Result.GetResult<Prisma.$statesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.states.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends statesCountArgs>(
      args?: Subset<T, statesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatesAggregateArgs>(args: Subset<T, StatesAggregateArgs>): Prisma.PrismaPromise<GetStatesAggregateType<T>>

    /**
     * Group by States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends statesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statesGroupByArgs['orderBy'] }
        : { orderBy?: statesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, statesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the states model
   */
  readonly fields: statesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for states.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ask_tournaments<T extends states$ask_tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, states$ask_tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the states model
   */ 
  interface statesFieldRefs {
    readonly id: FieldRef<"states", 'BigInt'>
    readonly country_id: FieldRef<"states", 'BigInt'>
    readonly name: FieldRef<"states", 'String'>
    readonly code: FieldRef<"states", 'String'>
    readonly slug: FieldRef<"states", 'String'>
    readonly status: FieldRef<"states", 'Int'>
    readonly created_at: FieldRef<"states", 'DateTime'>
    readonly updated_at: FieldRef<"states", 'DateTime'>
    readonly deleted_at: FieldRef<"states", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * states findUnique
   */
  export type statesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states findUniqueOrThrow
   */
  export type statesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states findFirst
   */
  export type statesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * states findFirstOrThrow
   */
  export type statesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * states findMany
   */
  export type statesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: statesOrderByWithRelationInput | statesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing states.
     */
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * states create
   */
  export type statesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * The data needed to create a states.
     */
    data: XOR<statesCreateInput, statesUncheckedCreateInput>
  }

  /**
   * states createMany
   */
  export type statesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many states.
     */
    data: statesCreateManyInput | statesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * states update
   */
  export type statesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * The data needed to update a states.
     */
    data: XOR<statesUpdateInput, statesUncheckedUpdateInput>
    /**
     * Choose, which states to update.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states updateMany
   */
  export type statesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update states.
     */
    data: XOR<statesUpdateManyMutationInput, statesUncheckedUpdateManyInput>
    /**
     * Filter which states to update
     */
    where?: statesWhereInput
  }

  /**
   * states upsert
   */
  export type statesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * The filter to search for the states to update in case it exists.
     */
    where: statesWhereUniqueInput
    /**
     * In case the states found by the `where` argument doesn't exist, create a new states with this data.
     */
    create: XOR<statesCreateInput, statesUncheckedCreateInput>
    /**
     * In case the states was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statesUpdateInput, statesUncheckedUpdateInput>
  }

  /**
   * states delete
   */
  export type statesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
    /**
     * Filter which states to delete.
     */
    where: statesWhereUniqueInput
  }

  /**
   * states deleteMany
   */
  export type statesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which states to delete
     */
    where?: statesWhereInput
  }

  /**
   * states.ask_tournaments
   */
  export type states$ask_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    where?: ask_tournamentsWhereInput
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    cursor?: ask_tournamentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * states without action
   */
  export type statesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the states
     */
    select?: statesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statesInclude<ExtArgs> | null
  }


  /**
   * Model cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id: number | null
    state_id: number | null
    leagues_allowed: number | null
    status: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id: bigint | null
    state_id: bigint | null
    leagues_allowed: number | null
    status: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id: bigint | null
    state_id: bigint | null
    name: string | null
    slug: string | null
    leagues_allowed: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: bigint | null
    state_id: bigint | null
    name: string | null
    slug: string | null
    leagues_allowed: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    state_id: number
    name: number
    slug: number
    leagues_allowed: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id?: true
    state_id?: true
    leagues_allowed?: true
    status?: true
  }

  export type CitiesSumAggregateInputType = {
    id?: true
    state_id?: true
    leagues_allowed?: true
    status?: true
  }

  export type CitiesMinAggregateInputType = {
    id?: true
    state_id?: true
    name?: true
    slug?: true
    leagues_allowed?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    state_id?: true
    name?: true
    slug?: true
    leagues_allowed?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    state_id?: true
    name?: true
    slug?: true
    leagues_allowed?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to aggregate.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type citiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithAggregationInput | citiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id: bigint
    state_id: bigint
    name: string
    slug: string | null
    leagues_allowed: number
    status: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_id?: boolean
    name?: boolean
    slug?: boolean
    leagues_allowed?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ask_tournaments?: boolean | cities$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>


  export type citiesSelectScalar = {
    id?: boolean
    state_id?: boolean
    name?: boolean
    slug?: boolean
    leagues_allowed?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type citiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ask_tournaments?: boolean | cities$ask_tournamentsArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $citiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cities"
    objects: {
      ask_tournaments: Prisma.$ask_tournamentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      state_id: bigint
      name: string
      slug: string | null
      leagues_allowed: number
      status: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = $Result.GetResult<Prisma.$citiesPayload, S>

  type citiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface citiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cities'], meta: { name: 'cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citiesFindUniqueArgs>(args: SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citiesFindFirstArgs>(args?: SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends citiesFindManyArgs>(args?: SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends citiesCreateArgs>(args: SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citiesCreateManyArgs>(args?: SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends citiesDeleteArgs>(args: SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citiesUpdateArgs>(args: SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citiesDeleteManyArgs>(args?: SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citiesUpdateManyArgs>(args: SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends citiesUpsertArgs>(args: SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends citiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citiesGroupByArgs['orderBy'] }
        : { orderBy?: citiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cities model
   */
  readonly fields: citiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ask_tournaments<T extends cities$ask_tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, cities$ask_tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_tournamentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cities model
   */ 
  interface citiesFieldRefs {
    readonly id: FieldRef<"cities", 'BigInt'>
    readonly state_id: FieldRef<"cities", 'BigInt'>
    readonly name: FieldRef<"cities", 'String'>
    readonly slug: FieldRef<"cities", 'String'>
    readonly leagues_allowed: FieldRef<"cities", 'Int'>
    readonly status: FieldRef<"cities", 'Int'>
    readonly created_at: FieldRef<"cities", 'DateTime'>
    readonly updated_at: FieldRef<"cities", 'DateTime'>
    readonly deleted_at: FieldRef<"cities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findMany
   */
  export type citiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities create
   */
  export type citiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to create a cities.
     */
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }

  /**
   * cities createMany
   */
  export type citiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities update
   */
  export type citiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to update a cities.
     */
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
  }

  /**
   * cities upsert
   */
  export type citiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The filter to search for the cities to update in case it exists.
     */
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     */
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }

  /**
   * cities delete
   */
  export type citiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter which cities to delete.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: citiesWhereInput
  }

  /**
   * cities.ask_tournaments
   */
  export type cities$ask_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournaments
     */
    select?: ask_tournamentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ask_tournamentsInclude<ExtArgs> | null
    where?: ask_tournamentsWhereInput
    orderBy?: ask_tournamentsOrderByWithRelationInput | ask_tournamentsOrderByWithRelationInput[]
    cursor?: ask_tournamentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ask_tournamentsScalarFieldEnum | Ask_tournamentsScalarFieldEnum[]
  }

  /**
   * cities without action
   */
  export type citiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
  }


  /**
   * Model ask_tournament_enquiries
   */

  export type AggregateAsk_tournament_enquiries = {
    _count: Ask_tournament_enquiriesCountAggregateOutputType | null
    _avg: Ask_tournament_enquiriesAvgAggregateOutputType | null
    _sum: Ask_tournament_enquiriesSumAggregateOutputType | null
    _min: Ask_tournament_enquiriesMinAggregateOutputType | null
    _max: Ask_tournament_enquiriesMaxAggregateOutputType | null
  }

  export type Ask_tournament_enquiriesAvgAggregateOutputType = {
    id: number | null
    mark_as_read: number | null
    tournament_id: number | null
  }

  export type Ask_tournament_enquiriesSumAggregateOutputType = {
    id: number | null
    mark_as_read: number | null
    tournament_id: number | null
  }

  export type Ask_tournament_enquiriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    description: string | null
    mark_as_read: number | null
    tournament_id: number | null
    gender: $Enums.player_gender | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ask_tournament_enquiriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    description: string | null
    mark_as_read: number | null
    tournament_id: number | null
    gender: $Enums.player_gender | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ask_tournament_enquiriesCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    description: number
    mark_as_read: number
    tournament_id: number
    gender: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ask_tournament_enquiriesAvgAggregateInputType = {
    id?: true
    mark_as_read?: true
    tournament_id?: true
  }

  export type Ask_tournament_enquiriesSumAggregateInputType = {
    id?: true
    mark_as_read?: true
    tournament_id?: true
  }

  export type Ask_tournament_enquiriesMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    description?: true
    mark_as_read?: true
    tournament_id?: true
    gender?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ask_tournament_enquiriesMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    description?: true
    mark_as_read?: true
    tournament_id?: true
    gender?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ask_tournament_enquiriesCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    description?: true
    mark_as_read?: true
    tournament_id?: true
    gender?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ask_tournament_enquiriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_tournament_enquiries to aggregate.
     */
    where?: ask_tournament_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournament_enquiries to fetch.
     */
    orderBy?: ask_tournament_enquiriesOrderByWithRelationInput | ask_tournament_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ask_tournament_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournament_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournament_enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ask_tournament_enquiries
    **/
    _count?: true | Ask_tournament_enquiriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ask_tournament_enquiriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ask_tournament_enquiriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ask_tournament_enquiriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ask_tournament_enquiriesMaxAggregateInputType
  }

  export type GetAsk_tournament_enquiriesAggregateType<T extends Ask_tournament_enquiriesAggregateArgs> = {
        [P in keyof T & keyof AggregateAsk_tournament_enquiries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsk_tournament_enquiries[P]>
      : GetScalarType<T[P], AggregateAsk_tournament_enquiries[P]>
  }




  export type ask_tournament_enquiriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_tournament_enquiriesWhereInput
    orderBy?: ask_tournament_enquiriesOrderByWithAggregationInput | ask_tournament_enquiriesOrderByWithAggregationInput[]
    by: Ask_tournament_enquiriesScalarFieldEnum[] | Ask_tournament_enquiriesScalarFieldEnum
    having?: ask_tournament_enquiriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ask_tournament_enquiriesCountAggregateInputType | true
    _avg?: Ask_tournament_enquiriesAvgAggregateInputType
    _sum?: Ask_tournament_enquiriesSumAggregateInputType
    _min?: Ask_tournament_enquiriesMinAggregateInputType
    _max?: Ask_tournament_enquiriesMaxAggregateInputType
  }

  export type Ask_tournament_enquiriesGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    email: string | null
    description: string | null
    mark_as_read: number | null
    tournament_id: number
    gender: $Enums.player_gender | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Ask_tournament_enquiriesCountAggregateOutputType | null
    _avg: Ask_tournament_enquiriesAvgAggregateOutputType | null
    _sum: Ask_tournament_enquiriesSumAggregateOutputType | null
    _min: Ask_tournament_enquiriesMinAggregateOutputType | null
    _max: Ask_tournament_enquiriesMaxAggregateOutputType | null
  }

  type GetAsk_tournament_enquiriesGroupByPayload<T extends ask_tournament_enquiriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ask_tournament_enquiriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ask_tournament_enquiriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ask_tournament_enquiriesGroupByOutputType[P]>
            : GetScalarType<T[P], Ask_tournament_enquiriesGroupByOutputType[P]>
        }
      >
    >


  export type ask_tournament_enquiriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    description?: boolean
    mark_as_read?: boolean
    tournament_id?: boolean
    gender?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["ask_tournament_enquiries"]>


  export type ask_tournament_enquiriesSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    description?: boolean
    mark_as_read?: boolean
    tournament_id?: boolean
    gender?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $ask_tournament_enquiriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ask_tournament_enquiries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      email: string | null
      description: string | null
      mark_as_read: number | null
      tournament_id: number
      gender: $Enums.player_gender | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["ask_tournament_enquiries"]>
    composites: {}
  }

  type ask_tournament_enquiriesGetPayload<S extends boolean | null | undefined | ask_tournament_enquiriesDefaultArgs> = $Result.GetResult<Prisma.$ask_tournament_enquiriesPayload, S>

  type ask_tournament_enquiriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ask_tournament_enquiriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ask_tournament_enquiriesCountAggregateInputType | true
    }

  export interface ask_tournament_enquiriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ask_tournament_enquiries'], meta: { name: 'ask_tournament_enquiries' } }
    /**
     * Find zero or one Ask_tournament_enquiries that matches the filter.
     * @param {ask_tournament_enquiriesFindUniqueArgs} args - Arguments to find a Ask_tournament_enquiries
     * @example
     * // Get one Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ask_tournament_enquiriesFindUniqueArgs>(args: SelectSubset<T, ask_tournament_enquiriesFindUniqueArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ask_tournament_enquiries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ask_tournament_enquiriesFindUniqueOrThrowArgs} args - Arguments to find a Ask_tournament_enquiries
     * @example
     * // Get one Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ask_tournament_enquiriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ask_tournament_enquiriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ask_tournament_enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournament_enquiriesFindFirstArgs} args - Arguments to find a Ask_tournament_enquiries
     * @example
     * // Get one Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ask_tournament_enquiriesFindFirstArgs>(args?: SelectSubset<T, ask_tournament_enquiriesFindFirstArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ask_tournament_enquiries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournament_enquiriesFindFirstOrThrowArgs} args - Arguments to find a Ask_tournament_enquiries
     * @example
     * // Get one Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ask_tournament_enquiriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ask_tournament_enquiriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ask_tournament_enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournament_enquiriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findMany()
     * 
     * // Get first 10 Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ask_tournament_enquiriesWithIdOnly = await prisma.ask_tournament_enquiries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ask_tournament_enquiriesFindManyArgs>(args?: SelectSubset<T, ask_tournament_enquiriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ask_tournament_enquiries.
     * @param {ask_tournament_enquiriesCreateArgs} args - Arguments to create a Ask_tournament_enquiries.
     * @example
     * // Create one Ask_tournament_enquiries
     * const Ask_tournament_enquiries = await prisma.ask_tournament_enquiries.create({
     *   data: {
     *     // ... data to create a Ask_tournament_enquiries
     *   }
     * })
     * 
     */
    create<T extends ask_tournament_enquiriesCreateArgs>(args: SelectSubset<T, ask_tournament_enquiriesCreateArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ask_tournament_enquiries.
     * @param {ask_tournament_enquiriesCreateManyArgs} args - Arguments to create many Ask_tournament_enquiries.
     * @example
     * // Create many Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ask_tournament_enquiriesCreateManyArgs>(args?: SelectSubset<T, ask_tournament_enquiriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ask_tournament_enquiries.
     * @param {ask_tournament_enquiriesDeleteArgs} args - Arguments to delete one Ask_tournament_enquiries.
     * @example
     * // Delete one Ask_tournament_enquiries
     * const Ask_tournament_enquiries = await prisma.ask_tournament_enquiries.delete({
     *   where: {
     *     // ... filter to delete one Ask_tournament_enquiries
     *   }
     * })
     * 
     */
    delete<T extends ask_tournament_enquiriesDeleteArgs>(args: SelectSubset<T, ask_tournament_enquiriesDeleteArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ask_tournament_enquiries.
     * @param {ask_tournament_enquiriesUpdateArgs} args - Arguments to update one Ask_tournament_enquiries.
     * @example
     * // Update one Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ask_tournament_enquiriesUpdateArgs>(args: SelectSubset<T, ask_tournament_enquiriesUpdateArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ask_tournament_enquiries.
     * @param {ask_tournament_enquiriesDeleteManyArgs} args - Arguments to filter Ask_tournament_enquiries to delete.
     * @example
     * // Delete a few Ask_tournament_enquiries
     * const { count } = await prisma.ask_tournament_enquiries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ask_tournament_enquiriesDeleteManyArgs>(args?: SelectSubset<T, ask_tournament_enquiriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ask_tournament_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournament_enquiriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ask_tournament_enquiriesUpdateManyArgs>(args: SelectSubset<T, ask_tournament_enquiriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ask_tournament_enquiries.
     * @param {ask_tournament_enquiriesUpsertArgs} args - Arguments to update or create a Ask_tournament_enquiries.
     * @example
     * // Update or create a Ask_tournament_enquiries
     * const ask_tournament_enquiries = await prisma.ask_tournament_enquiries.upsert({
     *   create: {
     *     // ... data to create a Ask_tournament_enquiries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ask_tournament_enquiries we want to update
     *   }
     * })
     */
    upsert<T extends ask_tournament_enquiriesUpsertArgs>(args: SelectSubset<T, ask_tournament_enquiriesUpsertArgs<ExtArgs>>): Prisma__ask_tournament_enquiriesClient<$Result.GetResult<Prisma.$ask_tournament_enquiriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ask_tournament_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournament_enquiriesCountArgs} args - Arguments to filter Ask_tournament_enquiries to count.
     * @example
     * // Count the number of Ask_tournament_enquiries
     * const count = await prisma.ask_tournament_enquiries.count({
     *   where: {
     *     // ... the filter for the Ask_tournament_enquiries we want to count
     *   }
     * })
    **/
    count<T extends ask_tournament_enquiriesCountArgs>(
      args?: Subset<T, ask_tournament_enquiriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ask_tournament_enquiriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ask_tournament_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ask_tournament_enquiriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ask_tournament_enquiriesAggregateArgs>(args: Subset<T, Ask_tournament_enquiriesAggregateArgs>): Prisma.PrismaPromise<GetAsk_tournament_enquiriesAggregateType<T>>

    /**
     * Group by Ask_tournament_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_tournament_enquiriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ask_tournament_enquiriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ask_tournament_enquiriesGroupByArgs['orderBy'] }
        : { orderBy?: ask_tournament_enquiriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ask_tournament_enquiriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsk_tournament_enquiriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ask_tournament_enquiries model
   */
  readonly fields: ask_tournament_enquiriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ask_tournament_enquiries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ask_tournament_enquiriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ask_tournament_enquiries model
   */ 
  interface ask_tournament_enquiriesFieldRefs {
    readonly id: FieldRef<"ask_tournament_enquiries", 'Int'>
    readonly name: FieldRef<"ask_tournament_enquiries", 'String'>
    readonly phone: FieldRef<"ask_tournament_enquiries", 'String'>
    readonly email: FieldRef<"ask_tournament_enquiries", 'String'>
    readonly description: FieldRef<"ask_tournament_enquiries", 'String'>
    readonly mark_as_read: FieldRef<"ask_tournament_enquiries", 'Int'>
    readonly tournament_id: FieldRef<"ask_tournament_enquiries", 'Int'>
    readonly gender: FieldRef<"ask_tournament_enquiries", 'player_gender'>
    readonly created_at: FieldRef<"ask_tournament_enquiries", 'DateTime'>
    readonly updated_at: FieldRef<"ask_tournament_enquiries", 'DateTime'>
    readonly deleted_at: FieldRef<"ask_tournament_enquiries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ask_tournament_enquiries findUnique
   */
  export type ask_tournament_enquiriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_tournament_enquiries to fetch.
     */
    where: ask_tournament_enquiriesWhereUniqueInput
  }

  /**
   * ask_tournament_enquiries findUniqueOrThrow
   */
  export type ask_tournament_enquiriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_tournament_enquiries to fetch.
     */
    where: ask_tournament_enquiriesWhereUniqueInput
  }

  /**
   * ask_tournament_enquiries findFirst
   */
  export type ask_tournament_enquiriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_tournament_enquiries to fetch.
     */
    where?: ask_tournament_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournament_enquiries to fetch.
     */
    orderBy?: ask_tournament_enquiriesOrderByWithRelationInput | ask_tournament_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_tournament_enquiries.
     */
    cursor?: ask_tournament_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournament_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournament_enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_tournament_enquiries.
     */
    distinct?: Ask_tournament_enquiriesScalarFieldEnum | Ask_tournament_enquiriesScalarFieldEnum[]
  }

  /**
   * ask_tournament_enquiries findFirstOrThrow
   */
  export type ask_tournament_enquiriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_tournament_enquiries to fetch.
     */
    where?: ask_tournament_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournament_enquiries to fetch.
     */
    orderBy?: ask_tournament_enquiriesOrderByWithRelationInput | ask_tournament_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_tournament_enquiries.
     */
    cursor?: ask_tournament_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournament_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournament_enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_tournament_enquiries.
     */
    distinct?: Ask_tournament_enquiriesScalarFieldEnum | Ask_tournament_enquiriesScalarFieldEnum[]
  }

  /**
   * ask_tournament_enquiries findMany
   */
  export type ask_tournament_enquiriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_tournament_enquiries to fetch.
     */
    where?: ask_tournament_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_tournament_enquiries to fetch.
     */
    orderBy?: ask_tournament_enquiriesOrderByWithRelationInput | ask_tournament_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ask_tournament_enquiries.
     */
    cursor?: ask_tournament_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_tournament_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_tournament_enquiries.
     */
    skip?: number
    distinct?: Ask_tournament_enquiriesScalarFieldEnum | Ask_tournament_enquiriesScalarFieldEnum[]
  }

  /**
   * ask_tournament_enquiries create
   */
  export type ask_tournament_enquiriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * The data needed to create a ask_tournament_enquiries.
     */
    data: XOR<ask_tournament_enquiriesCreateInput, ask_tournament_enquiriesUncheckedCreateInput>
  }

  /**
   * ask_tournament_enquiries createMany
   */
  export type ask_tournament_enquiriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ask_tournament_enquiries.
     */
    data: ask_tournament_enquiriesCreateManyInput | ask_tournament_enquiriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ask_tournament_enquiries update
   */
  export type ask_tournament_enquiriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * The data needed to update a ask_tournament_enquiries.
     */
    data: XOR<ask_tournament_enquiriesUpdateInput, ask_tournament_enquiriesUncheckedUpdateInput>
    /**
     * Choose, which ask_tournament_enquiries to update.
     */
    where: ask_tournament_enquiriesWhereUniqueInput
  }

  /**
   * ask_tournament_enquiries updateMany
   */
  export type ask_tournament_enquiriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ask_tournament_enquiries.
     */
    data: XOR<ask_tournament_enquiriesUpdateManyMutationInput, ask_tournament_enquiriesUncheckedUpdateManyInput>
    /**
     * Filter which ask_tournament_enquiries to update
     */
    where?: ask_tournament_enquiriesWhereInput
  }

  /**
   * ask_tournament_enquiries upsert
   */
  export type ask_tournament_enquiriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * The filter to search for the ask_tournament_enquiries to update in case it exists.
     */
    where: ask_tournament_enquiriesWhereUniqueInput
    /**
     * In case the ask_tournament_enquiries found by the `where` argument doesn't exist, create a new ask_tournament_enquiries with this data.
     */
    create: XOR<ask_tournament_enquiriesCreateInput, ask_tournament_enquiriesUncheckedCreateInput>
    /**
     * In case the ask_tournament_enquiries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ask_tournament_enquiriesUpdateInput, ask_tournament_enquiriesUncheckedUpdateInput>
  }

  /**
   * ask_tournament_enquiries delete
   */
  export type ask_tournament_enquiriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
    /**
     * Filter which ask_tournament_enquiries to delete.
     */
    where: ask_tournament_enquiriesWhereUniqueInput
  }

  /**
   * ask_tournament_enquiries deleteMany
   */
  export type ask_tournament_enquiriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_tournament_enquiries to delete
     */
    where?: ask_tournament_enquiriesWhereInput
  }

  /**
   * ask_tournament_enquiries without action
   */
  export type ask_tournament_enquiriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_tournament_enquiries
     */
    select?: ask_tournament_enquiriesSelect<ExtArgs> | null
  }


  /**
   * Model ask_sports_enquiries
   */

  export type AggregateAsk_sports_enquiries = {
    _count: Ask_sports_enquiriesCountAggregateOutputType | null
    _avg: Ask_sports_enquiriesAvgAggregateOutputType | null
    _sum: Ask_sports_enquiriesSumAggregateOutputType | null
    _min: Ask_sports_enquiriesMinAggregateOutputType | null
    _max: Ask_sports_enquiriesMaxAggregateOutputType | null
  }

  export type Ask_sports_enquiriesAvgAggregateOutputType = {
    id: number | null
  }

  export type Ask_sports_enquiriesSumAggregateOutputType = {
    id: number | null
  }

  export type Ask_sports_enquiriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    organization: string | null
    sport_id: string | null
    description: string | null
  }

  export type Ask_sports_enquiriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    organization: string | null
    sport_id: string | null
    description: string | null
  }

  export type Ask_sports_enquiriesCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    organization: number
    sport_id: number
    description: number
    _all: number
  }


  export type Ask_sports_enquiriesAvgAggregateInputType = {
    id?: true
  }

  export type Ask_sports_enquiriesSumAggregateInputType = {
    id?: true
  }

  export type Ask_sports_enquiriesMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    organization?: true
    sport_id?: true
    description?: true
  }

  export type Ask_sports_enquiriesMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    organization?: true
    sport_id?: true
    description?: true
  }

  export type Ask_sports_enquiriesCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    organization?: true
    sport_id?: true
    description?: true
    _all?: true
  }

  export type Ask_sports_enquiriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_sports_enquiries to aggregate.
     */
    where?: ask_sports_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_sports_enquiries to fetch.
     */
    orderBy?: ask_sports_enquiriesOrderByWithRelationInput | ask_sports_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ask_sports_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_sports_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_sports_enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ask_sports_enquiries
    **/
    _count?: true | Ask_sports_enquiriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ask_sports_enquiriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ask_sports_enquiriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ask_sports_enquiriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ask_sports_enquiriesMaxAggregateInputType
  }

  export type GetAsk_sports_enquiriesAggregateType<T extends Ask_sports_enquiriesAggregateArgs> = {
        [P in keyof T & keyof AggregateAsk_sports_enquiries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsk_sports_enquiries[P]>
      : GetScalarType<T[P], AggregateAsk_sports_enquiries[P]>
  }




  export type ask_sports_enquiriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ask_sports_enquiriesWhereInput
    orderBy?: ask_sports_enquiriesOrderByWithAggregationInput | ask_sports_enquiriesOrderByWithAggregationInput[]
    by: Ask_sports_enquiriesScalarFieldEnum[] | Ask_sports_enquiriesScalarFieldEnum
    having?: ask_sports_enquiriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ask_sports_enquiriesCountAggregateInputType | true
    _avg?: Ask_sports_enquiriesAvgAggregateInputType
    _sum?: Ask_sports_enquiriesSumAggregateInputType
    _min?: Ask_sports_enquiriesMinAggregateInputType
    _max?: Ask_sports_enquiriesMaxAggregateInputType
  }

  export type Ask_sports_enquiriesGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string | null
    organization: string | null
    sport_id: string | null
    description: string | null
    _count: Ask_sports_enquiriesCountAggregateOutputType | null
    _avg: Ask_sports_enquiriesAvgAggregateOutputType | null
    _sum: Ask_sports_enquiriesSumAggregateOutputType | null
    _min: Ask_sports_enquiriesMinAggregateOutputType | null
    _max: Ask_sports_enquiriesMaxAggregateOutputType | null
  }

  type GetAsk_sports_enquiriesGroupByPayload<T extends ask_sports_enquiriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ask_sports_enquiriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ask_sports_enquiriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ask_sports_enquiriesGroupByOutputType[P]>
            : GetScalarType<T[P], Ask_sports_enquiriesGroupByOutputType[P]>
        }
      >
    >


  export type ask_sports_enquiriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    organization?: boolean
    sport_id?: boolean
    description?: boolean
  }, ExtArgs["result"]["ask_sports_enquiries"]>


  export type ask_sports_enquiriesSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    organization?: boolean
    sport_id?: boolean
    description?: boolean
  }


  export type $ask_sports_enquiriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ask_sports_enquiries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string | null
      organization: string | null
      sport_id: string | null
      description: string | null
    }, ExtArgs["result"]["ask_sports_enquiries"]>
    composites: {}
  }

  type ask_sports_enquiriesGetPayload<S extends boolean | null | undefined | ask_sports_enquiriesDefaultArgs> = $Result.GetResult<Prisma.$ask_sports_enquiriesPayload, S>

  type ask_sports_enquiriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ask_sports_enquiriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ask_sports_enquiriesCountAggregateInputType | true
    }

  export interface ask_sports_enquiriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ask_sports_enquiries'], meta: { name: 'ask_sports_enquiries' } }
    /**
     * Find zero or one Ask_sports_enquiries that matches the filter.
     * @param {ask_sports_enquiriesFindUniqueArgs} args - Arguments to find a Ask_sports_enquiries
     * @example
     * // Get one Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ask_sports_enquiriesFindUniqueArgs>(args: SelectSubset<T, ask_sports_enquiriesFindUniqueArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ask_sports_enquiries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ask_sports_enquiriesFindUniqueOrThrowArgs} args - Arguments to find a Ask_sports_enquiries
     * @example
     * // Get one Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ask_sports_enquiriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ask_sports_enquiriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ask_sports_enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_sports_enquiriesFindFirstArgs} args - Arguments to find a Ask_sports_enquiries
     * @example
     * // Get one Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ask_sports_enquiriesFindFirstArgs>(args?: SelectSubset<T, ask_sports_enquiriesFindFirstArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ask_sports_enquiries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_sports_enquiriesFindFirstOrThrowArgs} args - Arguments to find a Ask_sports_enquiries
     * @example
     * // Get one Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ask_sports_enquiriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ask_sports_enquiriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ask_sports_enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_sports_enquiriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findMany()
     * 
     * // Get first 10 Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ask_sports_enquiriesWithIdOnly = await prisma.ask_sports_enquiries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ask_sports_enquiriesFindManyArgs>(args?: SelectSubset<T, ask_sports_enquiriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ask_sports_enquiries.
     * @param {ask_sports_enquiriesCreateArgs} args - Arguments to create a Ask_sports_enquiries.
     * @example
     * // Create one Ask_sports_enquiries
     * const Ask_sports_enquiries = await prisma.ask_sports_enquiries.create({
     *   data: {
     *     // ... data to create a Ask_sports_enquiries
     *   }
     * })
     * 
     */
    create<T extends ask_sports_enquiriesCreateArgs>(args: SelectSubset<T, ask_sports_enquiriesCreateArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ask_sports_enquiries.
     * @param {ask_sports_enquiriesCreateManyArgs} args - Arguments to create many Ask_sports_enquiries.
     * @example
     * // Create many Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ask_sports_enquiriesCreateManyArgs>(args?: SelectSubset<T, ask_sports_enquiriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ask_sports_enquiries.
     * @param {ask_sports_enquiriesDeleteArgs} args - Arguments to delete one Ask_sports_enquiries.
     * @example
     * // Delete one Ask_sports_enquiries
     * const Ask_sports_enquiries = await prisma.ask_sports_enquiries.delete({
     *   where: {
     *     // ... filter to delete one Ask_sports_enquiries
     *   }
     * })
     * 
     */
    delete<T extends ask_sports_enquiriesDeleteArgs>(args: SelectSubset<T, ask_sports_enquiriesDeleteArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ask_sports_enquiries.
     * @param {ask_sports_enquiriesUpdateArgs} args - Arguments to update one Ask_sports_enquiries.
     * @example
     * // Update one Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ask_sports_enquiriesUpdateArgs>(args: SelectSubset<T, ask_sports_enquiriesUpdateArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ask_sports_enquiries.
     * @param {ask_sports_enquiriesDeleteManyArgs} args - Arguments to filter Ask_sports_enquiries to delete.
     * @example
     * // Delete a few Ask_sports_enquiries
     * const { count } = await prisma.ask_sports_enquiries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ask_sports_enquiriesDeleteManyArgs>(args?: SelectSubset<T, ask_sports_enquiriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ask_sports_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_sports_enquiriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ask_sports_enquiriesUpdateManyArgs>(args: SelectSubset<T, ask_sports_enquiriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ask_sports_enquiries.
     * @param {ask_sports_enquiriesUpsertArgs} args - Arguments to update or create a Ask_sports_enquiries.
     * @example
     * // Update or create a Ask_sports_enquiries
     * const ask_sports_enquiries = await prisma.ask_sports_enquiries.upsert({
     *   create: {
     *     // ... data to create a Ask_sports_enquiries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ask_sports_enquiries we want to update
     *   }
     * })
     */
    upsert<T extends ask_sports_enquiriesUpsertArgs>(args: SelectSubset<T, ask_sports_enquiriesUpsertArgs<ExtArgs>>): Prisma__ask_sports_enquiriesClient<$Result.GetResult<Prisma.$ask_sports_enquiriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ask_sports_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_sports_enquiriesCountArgs} args - Arguments to filter Ask_sports_enquiries to count.
     * @example
     * // Count the number of Ask_sports_enquiries
     * const count = await prisma.ask_sports_enquiries.count({
     *   where: {
     *     // ... the filter for the Ask_sports_enquiries we want to count
     *   }
     * })
    **/
    count<T extends ask_sports_enquiriesCountArgs>(
      args?: Subset<T, ask_sports_enquiriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ask_sports_enquiriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ask_sports_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ask_sports_enquiriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ask_sports_enquiriesAggregateArgs>(args: Subset<T, Ask_sports_enquiriesAggregateArgs>): Prisma.PrismaPromise<GetAsk_sports_enquiriesAggregateType<T>>

    /**
     * Group by Ask_sports_enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ask_sports_enquiriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ask_sports_enquiriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ask_sports_enquiriesGroupByArgs['orderBy'] }
        : { orderBy?: ask_sports_enquiriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ask_sports_enquiriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsk_sports_enquiriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ask_sports_enquiries model
   */
  readonly fields: ask_sports_enquiriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ask_sports_enquiries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ask_sports_enquiriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ask_sports_enquiries model
   */ 
  interface ask_sports_enquiriesFieldRefs {
    readonly id: FieldRef<"ask_sports_enquiries", 'Int'>
    readonly name: FieldRef<"ask_sports_enquiries", 'String'>
    readonly phone: FieldRef<"ask_sports_enquiries", 'String'>
    readonly email: FieldRef<"ask_sports_enquiries", 'String'>
    readonly organization: FieldRef<"ask_sports_enquiries", 'String'>
    readonly sport_id: FieldRef<"ask_sports_enquiries", 'String'>
    readonly description: FieldRef<"ask_sports_enquiries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ask_sports_enquiries findUnique
   */
  export type ask_sports_enquiriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_sports_enquiries to fetch.
     */
    where: ask_sports_enquiriesWhereUniqueInput
  }

  /**
   * ask_sports_enquiries findUniqueOrThrow
   */
  export type ask_sports_enquiriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_sports_enquiries to fetch.
     */
    where: ask_sports_enquiriesWhereUniqueInput
  }

  /**
   * ask_sports_enquiries findFirst
   */
  export type ask_sports_enquiriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_sports_enquiries to fetch.
     */
    where?: ask_sports_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_sports_enquiries to fetch.
     */
    orderBy?: ask_sports_enquiriesOrderByWithRelationInput | ask_sports_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_sports_enquiries.
     */
    cursor?: ask_sports_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_sports_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_sports_enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_sports_enquiries.
     */
    distinct?: Ask_sports_enquiriesScalarFieldEnum | Ask_sports_enquiriesScalarFieldEnum[]
  }

  /**
   * ask_sports_enquiries findFirstOrThrow
   */
  export type ask_sports_enquiriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_sports_enquiries to fetch.
     */
    where?: ask_sports_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_sports_enquiries to fetch.
     */
    orderBy?: ask_sports_enquiriesOrderByWithRelationInput | ask_sports_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ask_sports_enquiries.
     */
    cursor?: ask_sports_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_sports_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_sports_enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ask_sports_enquiries.
     */
    distinct?: Ask_sports_enquiriesScalarFieldEnum | Ask_sports_enquiriesScalarFieldEnum[]
  }

  /**
   * ask_sports_enquiries findMany
   */
  export type ask_sports_enquiriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * Filter, which ask_sports_enquiries to fetch.
     */
    where?: ask_sports_enquiriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ask_sports_enquiries to fetch.
     */
    orderBy?: ask_sports_enquiriesOrderByWithRelationInput | ask_sports_enquiriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ask_sports_enquiries.
     */
    cursor?: ask_sports_enquiriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ask_sports_enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ask_sports_enquiries.
     */
    skip?: number
    distinct?: Ask_sports_enquiriesScalarFieldEnum | Ask_sports_enquiriesScalarFieldEnum[]
  }

  /**
   * ask_sports_enquiries create
   */
  export type ask_sports_enquiriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * The data needed to create a ask_sports_enquiries.
     */
    data: XOR<ask_sports_enquiriesCreateInput, ask_sports_enquiriesUncheckedCreateInput>
  }

  /**
   * ask_sports_enquiries createMany
   */
  export type ask_sports_enquiriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ask_sports_enquiries.
     */
    data: ask_sports_enquiriesCreateManyInput | ask_sports_enquiriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ask_sports_enquiries update
   */
  export type ask_sports_enquiriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * The data needed to update a ask_sports_enquiries.
     */
    data: XOR<ask_sports_enquiriesUpdateInput, ask_sports_enquiriesUncheckedUpdateInput>
    /**
     * Choose, which ask_sports_enquiries to update.
     */
    where: ask_sports_enquiriesWhereUniqueInput
  }

  /**
   * ask_sports_enquiries updateMany
   */
  export type ask_sports_enquiriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ask_sports_enquiries.
     */
    data: XOR<ask_sports_enquiriesUpdateManyMutationInput, ask_sports_enquiriesUncheckedUpdateManyInput>
    /**
     * Filter which ask_sports_enquiries to update
     */
    where?: ask_sports_enquiriesWhereInput
  }

  /**
   * ask_sports_enquiries upsert
   */
  export type ask_sports_enquiriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * The filter to search for the ask_sports_enquiries to update in case it exists.
     */
    where: ask_sports_enquiriesWhereUniqueInput
    /**
     * In case the ask_sports_enquiries found by the `where` argument doesn't exist, create a new ask_sports_enquiries with this data.
     */
    create: XOR<ask_sports_enquiriesCreateInput, ask_sports_enquiriesUncheckedCreateInput>
    /**
     * In case the ask_sports_enquiries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ask_sports_enquiriesUpdateInput, ask_sports_enquiriesUncheckedUpdateInput>
  }

  /**
   * ask_sports_enquiries delete
   */
  export type ask_sports_enquiriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
    /**
     * Filter which ask_sports_enquiries to delete.
     */
    where: ask_sports_enquiriesWhereUniqueInput
  }

  /**
   * ask_sports_enquiries deleteMany
   */
  export type ask_sports_enquiriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ask_sports_enquiries to delete
     */
    where?: ask_sports_enquiriesWhereInput
  }

  /**
   * ask_sports_enquiries without action
   */
  export type ask_sports_enquiriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ask_sports_enquiries
     */
    select?: ask_sports_enquiriesSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Ask_usersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country_code: 'country_code',
    phone: 'phone',
    email: 'email',
    password: 'password',
    otp_verified: 'otp_verified',
    otp: 'otp',
    otp_expires_at: 'otp_expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ask_usersScalarFieldEnum = (typeof Ask_usersScalarFieldEnum)[keyof typeof Ask_usersScalarFieldEnum]


  export const Ask_tournamentsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    sport_id: 'sport_id',
    user_id: 'user_id',
    name: 'name',
    slug_name: 'slug_name',
    description: 'description',
    content: 'content',
    tournament_type: 'tournament_type',
    startdate: 'startdate',
    enddate: 'enddate',
    address: 'address',
    country_id: 'country_id',
    state_id: 'state_id',
    city_id: 'city_id',
    bannerimage: 'bannerimage',
    thumbnail: 'thumbnail',
    url: 'url',
    brochure: 'brochure',
    prize: 'prize',
    fees: 'fees',
    organizer_name: 'organizer_name',
    participation_limit: 'participation_limit',
    publish_status: 'publish_status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ask_tournamentsScalarFieldEnum = (typeof Ask_tournamentsScalarFieldEnum)[keyof typeof Ask_tournamentsScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iso_2: 'iso_2',
    iso_3: 'iso_3',
    phone_code: 'phone_code',
    currency: 'currency',
    flag: 'flag',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const StatesScalarFieldEnum: {
    id: 'id',
    country_id: 'country_id',
    name: 'name',
    code: 'code',
    slug: 'slug',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type StatesScalarFieldEnum = (typeof StatesScalarFieldEnum)[keyof typeof StatesScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id: 'id',
    state_id: 'state_id',
    name: 'name',
    slug: 'slug',
    leagues_allowed: 'leagues_allowed',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const Ask_tournament_enquiriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    description: 'description',
    mark_as_read: 'mark_as_read',
    tournament_id: 'tournament_id',
    gender: 'gender',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ask_tournament_enquiriesScalarFieldEnum = (typeof Ask_tournament_enquiriesScalarFieldEnum)[keyof typeof Ask_tournament_enquiriesScalarFieldEnum]


  export const Ask_sports_enquiriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    organization: 'organization',
    sport_id: 'sport_id',
    description: 'description'
  };

  export type Ask_sports_enquiriesScalarFieldEnum = (typeof Ask_sports_enquiriesScalarFieldEnum)[keyof typeof Ask_sports_enquiriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'player_gender'
   */
  export type Enumplayer_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'player_gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ask_usersWhereInput = {
    AND?: ask_usersWhereInput | ask_usersWhereInput[]
    OR?: ask_usersWhereInput[]
    NOT?: ask_usersWhereInput | ask_usersWhereInput[]
    id?: IntFilter<"ask_users"> | number
    name?: StringNullableFilter<"ask_users"> | string | null
    country_code?: StringFilter<"ask_users"> | string
    phone?: StringNullableFilter<"ask_users"> | string | null
    email?: StringNullableFilter<"ask_users"> | string | null
    password?: StringFilter<"ask_users"> | string
    otp_verified?: BoolFilter<"ask_users"> | boolean
    otp?: StringNullableFilter<"ask_users"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }

  export type ask_usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    country_code?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    otp_verified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ask_tournaments?: ask_tournamentsOrderByRelationAggregateInput
  }

  export type ask_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: ask_usersWhereInput | ask_usersWhereInput[]
    OR?: ask_usersWhereInput[]
    NOT?: ask_usersWhereInput | ask_usersWhereInput[]
    name?: StringNullableFilter<"ask_users"> | string | null
    country_code?: StringFilter<"ask_users"> | string
    password?: StringFilter<"ask_users"> | string
    otp_verified?: BoolFilter<"ask_users"> | boolean
    otp?: StringNullableFilter<"ask_users"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_users"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }, "id" | "phone" | "email">

  export type ask_usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    country_code?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    otp_verified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ask_usersCountOrderByAggregateInput
    _avg?: ask_usersAvgOrderByAggregateInput
    _max?: ask_usersMaxOrderByAggregateInput
    _min?: ask_usersMinOrderByAggregateInput
    _sum?: ask_usersSumOrderByAggregateInput
  }

  export type ask_usersScalarWhereWithAggregatesInput = {
    AND?: ask_usersScalarWhereWithAggregatesInput | ask_usersScalarWhereWithAggregatesInput[]
    OR?: ask_usersScalarWhereWithAggregatesInput[]
    NOT?: ask_usersScalarWhereWithAggregatesInput | ask_usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ask_users"> | number
    name?: StringNullableWithAggregatesFilter<"ask_users"> | string | null
    country_code?: StringWithAggregatesFilter<"ask_users"> | string
    phone?: StringNullableWithAggregatesFilter<"ask_users"> | string | null
    email?: StringNullableWithAggregatesFilter<"ask_users"> | string | null
    password?: StringWithAggregatesFilter<"ask_users"> | string
    otp_verified?: BoolWithAggregatesFilter<"ask_users"> | boolean
    otp?: StringNullableWithAggregatesFilter<"ask_users"> | string | null
    otp_expires_at?: DateTimeNullableWithAggregatesFilter<"ask_users"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ask_users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ask_users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ask_users"> | Date | string | null
  }

  export type ask_tournamentsWhereInput = {
    AND?: ask_tournamentsWhereInput | ask_tournamentsWhereInput[]
    OR?: ask_tournamentsWhereInput[]
    NOT?: ask_tournamentsWhereInput | ask_tournamentsWhereInput[]
    id?: IntFilter<"ask_tournaments"> | number
    uuid?: StringFilter<"ask_tournaments"> | string
    sport_id?: StringFilter<"ask_tournaments"> | string
    user_id?: IntFilter<"ask_tournaments"> | number
    name?: StringFilter<"ask_tournaments"> | string
    slug_name?: StringFilter<"ask_tournaments"> | string
    description?: StringNullableFilter<"ask_tournaments"> | string | null
    content?: StringNullableFilter<"ask_tournaments"> | string | null
    tournament_type?: StringNullableFilter<"ask_tournaments"> | string | null
    startdate?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    enddate?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    address?: StringNullableFilter<"ask_tournaments"> | string | null
    country_id?: BigIntFilter<"ask_tournaments"> | bigint | number
    state_id?: BigIntFilter<"ask_tournaments"> | bigint | number
    city_id?: BigIntFilter<"ask_tournaments"> | bigint | number
    bannerimage?: StringNullableFilter<"ask_tournaments"> | string | null
    thumbnail?: StringNullableFilter<"ask_tournaments"> | string | null
    url?: StringNullableFilter<"ask_tournaments"> | string | null
    brochure?: StringNullableFilter<"ask_tournaments"> | string | null
    prize?: StringNullableFilter<"ask_tournaments"> | string | null
    fees?: StringNullableFilter<"ask_tournaments"> | string | null
    organizer_name?: StringNullableFilter<"ask_tournaments"> | string | null
    participation_limit?: IntNullableFilter<"ask_tournaments"> | number | null
    publish_status?: IntFilter<"ask_tournaments"> | number
    created_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    country?: XOR<CountriesRelationFilter, countriesWhereInput>
    state?: XOR<StatesRelationFilter, statesWhereInput>
    city?: XOR<CitiesRelationFilter, citiesWhereInput>
    user?: XOR<Ask_usersRelationFilter, ask_usersWhereInput>
  }

  export type ask_tournamentsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    sport_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    slug_name?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    tournament_type?: SortOrderInput | SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    bannerimage?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    brochure?: SortOrderInput | SortOrder
    prize?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    organizer_name?: SortOrderInput | SortOrder
    participation_limit?: SortOrderInput | SortOrder
    publish_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    country?: countriesOrderByWithRelationInput
    state?: statesOrderByWithRelationInput
    city?: citiesOrderByWithRelationInput
    user?: ask_usersOrderByWithRelationInput
  }

  export type ask_tournamentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    slug_name?: string
    country_id?: bigint | number
    state_id?: bigint | number
    city_id?: bigint | number
    AND?: ask_tournamentsWhereInput | ask_tournamentsWhereInput[]
    OR?: ask_tournamentsWhereInput[]
    NOT?: ask_tournamentsWhereInput | ask_tournamentsWhereInput[]
    sport_id?: StringFilter<"ask_tournaments"> | string
    user_id?: IntFilter<"ask_tournaments"> | number
    name?: StringFilter<"ask_tournaments"> | string
    description?: StringNullableFilter<"ask_tournaments"> | string | null
    content?: StringNullableFilter<"ask_tournaments"> | string | null
    tournament_type?: StringNullableFilter<"ask_tournaments"> | string | null
    startdate?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    enddate?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    address?: StringNullableFilter<"ask_tournaments"> | string | null
    bannerimage?: StringNullableFilter<"ask_tournaments"> | string | null
    thumbnail?: StringNullableFilter<"ask_tournaments"> | string | null
    url?: StringNullableFilter<"ask_tournaments"> | string | null
    brochure?: StringNullableFilter<"ask_tournaments"> | string | null
    prize?: StringNullableFilter<"ask_tournaments"> | string | null
    fees?: StringNullableFilter<"ask_tournaments"> | string | null
    organizer_name?: StringNullableFilter<"ask_tournaments"> | string | null
    participation_limit?: IntNullableFilter<"ask_tournaments"> | number | null
    publish_status?: IntFilter<"ask_tournaments"> | number
    created_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    country?: XOR<CountriesRelationFilter, countriesWhereInput>
    state?: XOR<StatesRelationFilter, statesWhereInput>
    city?: XOR<CitiesRelationFilter, citiesWhereInput>
    user?: XOR<Ask_usersRelationFilter, ask_usersWhereInput>
  }, "id" | "uuid" | "slug_name" | "country_id" | "state_id" | "city_id">

  export type ask_tournamentsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    sport_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    slug_name?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    tournament_type?: SortOrderInput | SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    bannerimage?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    brochure?: SortOrderInput | SortOrder
    prize?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    organizer_name?: SortOrderInput | SortOrder
    participation_limit?: SortOrderInput | SortOrder
    publish_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ask_tournamentsCountOrderByAggregateInput
    _avg?: ask_tournamentsAvgOrderByAggregateInput
    _max?: ask_tournamentsMaxOrderByAggregateInput
    _min?: ask_tournamentsMinOrderByAggregateInput
    _sum?: ask_tournamentsSumOrderByAggregateInput
  }

  export type ask_tournamentsScalarWhereWithAggregatesInput = {
    AND?: ask_tournamentsScalarWhereWithAggregatesInput | ask_tournamentsScalarWhereWithAggregatesInput[]
    OR?: ask_tournamentsScalarWhereWithAggregatesInput[]
    NOT?: ask_tournamentsScalarWhereWithAggregatesInput | ask_tournamentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ask_tournaments"> | number
    uuid?: StringWithAggregatesFilter<"ask_tournaments"> | string
    sport_id?: StringWithAggregatesFilter<"ask_tournaments"> | string
    user_id?: IntWithAggregatesFilter<"ask_tournaments"> | number
    name?: StringWithAggregatesFilter<"ask_tournaments"> | string
    slug_name?: StringWithAggregatesFilter<"ask_tournaments"> | string
    description?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    content?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    tournament_type?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    startdate?: DateTimeNullableWithAggregatesFilter<"ask_tournaments"> | Date | string | null
    enddate?: DateTimeNullableWithAggregatesFilter<"ask_tournaments"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    country_id?: BigIntWithAggregatesFilter<"ask_tournaments"> | bigint | number
    state_id?: BigIntWithAggregatesFilter<"ask_tournaments"> | bigint | number
    city_id?: BigIntWithAggregatesFilter<"ask_tournaments"> | bigint | number
    bannerimage?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    url?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    brochure?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    prize?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    fees?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    organizer_name?: StringNullableWithAggregatesFilter<"ask_tournaments"> | string | null
    participation_limit?: IntNullableWithAggregatesFilter<"ask_tournaments"> | number | null
    publish_status?: IntWithAggregatesFilter<"ask_tournaments"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"ask_tournaments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ask_tournaments"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ask_tournaments"> | Date | string | null
  }

  export type countriesWhereInput = {
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    id?: BigIntFilter<"countries"> | bigint | number
    name?: StringFilter<"countries"> | string
    iso_2?: StringNullableFilter<"countries"> | string | null
    iso_3?: StringNullableFilter<"countries"> | string | null
    phone_code?: StringNullableFilter<"countries"> | string | null
    currency?: StringNullableFilter<"countries"> | string | null
    flag?: StringNullableFilter<"countries"> | string | null
    status?: IntFilter<"countries"> | number
    created_at?: DateTimeNullableFilter<"countries"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"countries"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"countries"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }

  export type countriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iso_2?: SortOrderInput | SortOrder
    iso_3?: SortOrderInput | SortOrder
    phone_code?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    flag?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ask_tournaments?: ask_tournamentsOrderByRelationAggregateInput
  }

  export type countriesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    name?: StringFilter<"countries"> | string
    iso_2?: StringNullableFilter<"countries"> | string | null
    iso_3?: StringNullableFilter<"countries"> | string | null
    phone_code?: StringNullableFilter<"countries"> | string | null
    currency?: StringNullableFilter<"countries"> | string | null
    flag?: StringNullableFilter<"countries"> | string | null
    status?: IntFilter<"countries"> | number
    created_at?: DateTimeNullableFilter<"countries"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"countries"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"countries"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }, "id">

  export type countriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iso_2?: SortOrderInput | SortOrder
    iso_3?: SortOrderInput | SortOrder
    phone_code?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    flag?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: countriesCountOrderByAggregateInput
    _avg?: countriesAvgOrderByAggregateInput
    _max?: countriesMaxOrderByAggregateInput
    _min?: countriesMinOrderByAggregateInput
    _sum?: countriesSumOrderByAggregateInput
  }

  export type countriesScalarWhereWithAggregatesInput = {
    AND?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    OR?: countriesScalarWhereWithAggregatesInput[]
    NOT?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"countries"> | bigint | number
    name?: StringWithAggregatesFilter<"countries"> | string
    iso_2?: StringNullableWithAggregatesFilter<"countries"> | string | null
    iso_3?: StringNullableWithAggregatesFilter<"countries"> | string | null
    phone_code?: StringNullableWithAggregatesFilter<"countries"> | string | null
    currency?: StringNullableWithAggregatesFilter<"countries"> | string | null
    flag?: StringNullableWithAggregatesFilter<"countries"> | string | null
    status?: IntWithAggregatesFilter<"countries"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"countries"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"countries"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"countries"> | Date | string | null
  }

  export type statesWhereInput = {
    AND?: statesWhereInput | statesWhereInput[]
    OR?: statesWhereInput[]
    NOT?: statesWhereInput | statesWhereInput[]
    id?: BigIntFilter<"states"> | bigint | number
    country_id?: BigIntFilter<"states"> | bigint | number
    name?: StringFilter<"states"> | string
    code?: StringNullableFilter<"states"> | string | null
    slug?: StringNullableFilter<"states"> | string | null
    status?: IntFilter<"states"> | number
    created_at?: DateTimeNullableFilter<"states"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"states"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"states"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }

  export type statesOrderByWithRelationInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ask_tournaments?: ask_tournamentsOrderByRelationAggregateInput
  }

  export type statesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: statesWhereInput | statesWhereInput[]
    OR?: statesWhereInput[]
    NOT?: statesWhereInput | statesWhereInput[]
    country_id?: BigIntFilter<"states"> | bigint | number
    name?: StringFilter<"states"> | string
    code?: StringNullableFilter<"states"> | string | null
    slug?: StringNullableFilter<"states"> | string | null
    status?: IntFilter<"states"> | number
    created_at?: DateTimeNullableFilter<"states"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"states"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"states"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }, "id">

  export type statesOrderByWithAggregationInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: statesCountOrderByAggregateInput
    _avg?: statesAvgOrderByAggregateInput
    _max?: statesMaxOrderByAggregateInput
    _min?: statesMinOrderByAggregateInput
    _sum?: statesSumOrderByAggregateInput
  }

  export type statesScalarWhereWithAggregatesInput = {
    AND?: statesScalarWhereWithAggregatesInput | statesScalarWhereWithAggregatesInput[]
    OR?: statesScalarWhereWithAggregatesInput[]
    NOT?: statesScalarWhereWithAggregatesInput | statesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"states"> | bigint | number
    country_id?: BigIntWithAggregatesFilter<"states"> | bigint | number
    name?: StringWithAggregatesFilter<"states"> | string
    code?: StringNullableWithAggregatesFilter<"states"> | string | null
    slug?: StringNullableWithAggregatesFilter<"states"> | string | null
    status?: IntWithAggregatesFilter<"states"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"states"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"states"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"states"> | Date | string | null
  }

  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id?: BigIntFilter<"cities"> | bigint | number
    state_id?: BigIntFilter<"cities"> | bigint | number
    name?: StringFilter<"cities"> | string
    slug?: StringNullableFilter<"cities"> | string | null
    leagues_allowed?: IntFilter<"cities"> | number
    status?: IntFilter<"cities"> | number
    created_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }

  export type citiesOrderByWithRelationInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ask_tournaments?: ask_tournamentsOrderByRelationAggregateInput
  }

  export type citiesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    state_id?: BigIntFilter<"cities"> | bigint | number
    name?: StringFilter<"cities"> | string
    slug?: StringNullableFilter<"cities"> | string | null
    leagues_allowed?: IntFilter<"cities"> | number
    status?: IntFilter<"cities"> | number
    created_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    ask_tournaments?: Ask_tournamentsListRelationFilter
  }, "id">

  export type citiesOrderByWithAggregationInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: citiesCountOrderByAggregateInput
    _avg?: citiesAvgOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
    _sum?: citiesSumOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    OR?: citiesScalarWhereWithAggregatesInput[]
    NOT?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"cities"> | bigint | number
    state_id?: BigIntWithAggregatesFilter<"cities"> | bigint | number
    name?: StringWithAggregatesFilter<"cities"> | string
    slug?: StringNullableWithAggregatesFilter<"cities"> | string | null
    leagues_allowed?: IntWithAggregatesFilter<"cities"> | number
    status?: IntWithAggregatesFilter<"cities"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"cities"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"cities"> | Date | string | null
  }

  export type ask_tournament_enquiriesWhereInput = {
    AND?: ask_tournament_enquiriesWhereInput | ask_tournament_enquiriesWhereInput[]
    OR?: ask_tournament_enquiriesWhereInput[]
    NOT?: ask_tournament_enquiriesWhereInput | ask_tournament_enquiriesWhereInput[]
    id?: IntFilter<"ask_tournament_enquiries"> | number
    name?: StringFilter<"ask_tournament_enquiries"> | string
    phone?: StringNullableFilter<"ask_tournament_enquiries"> | string | null
    email?: StringNullableFilter<"ask_tournament_enquiries"> | string | null
    description?: StringNullableFilter<"ask_tournament_enquiries"> | string | null
    mark_as_read?: IntNullableFilter<"ask_tournament_enquiries"> | number | null
    tournament_id?: IntFilter<"ask_tournament_enquiries"> | number
    gender?: Enumplayer_genderNullableFilter<"ask_tournament_enquiries"> | $Enums.player_gender | null
    created_at?: DateTimeNullableFilter<"ask_tournament_enquiries"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_tournament_enquiries"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_tournament_enquiries"> | Date | string | null
  }

  export type ask_tournament_enquiriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    mark_as_read?: SortOrderInput | SortOrder
    tournament_id?: SortOrder
    gender?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type ask_tournament_enquiriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ask_tournament_enquiriesWhereInput | ask_tournament_enquiriesWhereInput[]
    OR?: ask_tournament_enquiriesWhereInput[]
    NOT?: ask_tournament_enquiriesWhereInput | ask_tournament_enquiriesWhereInput[]
    name?: StringFilter<"ask_tournament_enquiries"> | string
    phone?: StringNullableFilter<"ask_tournament_enquiries"> | string | null
    email?: StringNullableFilter<"ask_tournament_enquiries"> | string | null
    description?: StringNullableFilter<"ask_tournament_enquiries"> | string | null
    mark_as_read?: IntNullableFilter<"ask_tournament_enquiries"> | number | null
    tournament_id?: IntFilter<"ask_tournament_enquiries"> | number
    gender?: Enumplayer_genderNullableFilter<"ask_tournament_enquiries"> | $Enums.player_gender | null
    created_at?: DateTimeNullableFilter<"ask_tournament_enquiries"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_tournament_enquiries"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_tournament_enquiries"> | Date | string | null
  }, "id">

  export type ask_tournament_enquiriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    mark_as_read?: SortOrderInput | SortOrder
    tournament_id?: SortOrder
    gender?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ask_tournament_enquiriesCountOrderByAggregateInput
    _avg?: ask_tournament_enquiriesAvgOrderByAggregateInput
    _max?: ask_tournament_enquiriesMaxOrderByAggregateInput
    _min?: ask_tournament_enquiriesMinOrderByAggregateInput
    _sum?: ask_tournament_enquiriesSumOrderByAggregateInput
  }

  export type ask_tournament_enquiriesScalarWhereWithAggregatesInput = {
    AND?: ask_tournament_enquiriesScalarWhereWithAggregatesInput | ask_tournament_enquiriesScalarWhereWithAggregatesInput[]
    OR?: ask_tournament_enquiriesScalarWhereWithAggregatesInput[]
    NOT?: ask_tournament_enquiriesScalarWhereWithAggregatesInput | ask_tournament_enquiriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ask_tournament_enquiries"> | number
    name?: StringWithAggregatesFilter<"ask_tournament_enquiries"> | string
    phone?: StringNullableWithAggregatesFilter<"ask_tournament_enquiries"> | string | null
    email?: StringNullableWithAggregatesFilter<"ask_tournament_enquiries"> | string | null
    description?: StringNullableWithAggregatesFilter<"ask_tournament_enquiries"> | string | null
    mark_as_read?: IntNullableWithAggregatesFilter<"ask_tournament_enquiries"> | number | null
    tournament_id?: IntWithAggregatesFilter<"ask_tournament_enquiries"> | number
    gender?: Enumplayer_genderNullableWithAggregatesFilter<"ask_tournament_enquiries"> | $Enums.player_gender | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ask_tournament_enquiries"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ask_tournament_enquiries"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ask_tournament_enquiries"> | Date | string | null
  }

  export type ask_sports_enquiriesWhereInput = {
    AND?: ask_sports_enquiriesWhereInput | ask_sports_enquiriesWhereInput[]
    OR?: ask_sports_enquiriesWhereInput[]
    NOT?: ask_sports_enquiriesWhereInput | ask_sports_enquiriesWhereInput[]
    id?: IntFilter<"ask_sports_enquiries"> | number
    name?: StringFilter<"ask_sports_enquiries"> | string
    phone?: StringFilter<"ask_sports_enquiries"> | string
    email?: StringNullableFilter<"ask_sports_enquiries"> | string | null
    organization?: StringNullableFilter<"ask_sports_enquiries"> | string | null
    sport_id?: StringNullableFilter<"ask_sports_enquiries"> | string | null
    description?: StringNullableFilter<"ask_sports_enquiries"> | string | null
  }

  export type ask_sports_enquiriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    sport_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type ask_sports_enquiriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ask_sports_enquiriesWhereInput | ask_sports_enquiriesWhereInput[]
    OR?: ask_sports_enquiriesWhereInput[]
    NOT?: ask_sports_enquiriesWhereInput | ask_sports_enquiriesWhereInput[]
    name?: StringFilter<"ask_sports_enquiries"> | string
    phone?: StringFilter<"ask_sports_enquiries"> | string
    email?: StringNullableFilter<"ask_sports_enquiries"> | string | null
    organization?: StringNullableFilter<"ask_sports_enquiries"> | string | null
    sport_id?: StringNullableFilter<"ask_sports_enquiries"> | string | null
    description?: StringNullableFilter<"ask_sports_enquiries"> | string | null
  }, "id">

  export type ask_sports_enquiriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    sport_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ask_sports_enquiriesCountOrderByAggregateInput
    _avg?: ask_sports_enquiriesAvgOrderByAggregateInput
    _max?: ask_sports_enquiriesMaxOrderByAggregateInput
    _min?: ask_sports_enquiriesMinOrderByAggregateInput
    _sum?: ask_sports_enquiriesSumOrderByAggregateInput
  }

  export type ask_sports_enquiriesScalarWhereWithAggregatesInput = {
    AND?: ask_sports_enquiriesScalarWhereWithAggregatesInput | ask_sports_enquiriesScalarWhereWithAggregatesInput[]
    OR?: ask_sports_enquiriesScalarWhereWithAggregatesInput[]
    NOT?: ask_sports_enquiriesScalarWhereWithAggregatesInput | ask_sports_enquiriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ask_sports_enquiries"> | number
    name?: StringWithAggregatesFilter<"ask_sports_enquiries"> | string
    phone?: StringWithAggregatesFilter<"ask_sports_enquiries"> | string
    email?: StringNullableWithAggregatesFilter<"ask_sports_enquiries"> | string | null
    organization?: StringNullableWithAggregatesFilter<"ask_sports_enquiries"> | string | null
    sport_id?: StringNullableWithAggregatesFilter<"ask_sports_enquiries"> | string | null
    description?: StringNullableWithAggregatesFilter<"ask_sports_enquiries"> | string | null
  }

  export type ask_usersCreateInput = {
    name?: string | null
    country_code: string
    phone?: string | null
    email?: string | null
    password: string
    otp_verified?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsCreateNestedManyWithoutUserInput
  }

  export type ask_usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    country_code: string
    phone?: string | null
    email?: string | null
    password: string
    otp_verified?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type ask_usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    otp_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUpdateManyWithoutUserNestedInput
  }

  export type ask_usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    otp_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ask_usersCreateManyInput = {
    id?: number
    name?: string | null
    country_code: string
    phone?: string | null
    email?: string | null
    password: string
    otp_verified?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    otp_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    otp_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsCreateInput = {
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    country: countriesCreateNestedOneWithoutAsk_tournamentsInput
    state: statesCreateNestedOneWithoutAsk_tournamentsInput
    city: citiesCreateNestedOneWithoutAsk_tournamentsInput
    user: ask_usersCreateNestedOneWithoutAsk_tournamentsInput
  }

  export type ask_tournamentsUncheckedCreateInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    state_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: countriesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    state?: statesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    city?: citiesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    user?: ask_usersUpdateOneRequiredWithoutAsk_tournamentsNestedInput
  }

  export type ask_tournamentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsCreateManyInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    state_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type countriesCreateInput = {
    id: bigint | number
    name: string
    iso_2?: string | null
    iso_3?: string | null
    phone_code?: string | null
    currency?: string | null
    flag?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsCreateNestedManyWithoutCountryInput
  }

  export type countriesUncheckedCreateInput = {
    id: bigint | number
    name: string
    iso_2?: string | null
    iso_3?: string | null
    phone_code?: string | null
    currency?: string | null
    flag?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countriesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    iso_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3?: NullableStringFieldUpdateOperationsInput | string | null
    phone_code?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUpdateManyWithoutCountryNestedInput
  }

  export type countriesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    iso_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3?: NullableStringFieldUpdateOperationsInput | string | null
    phone_code?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type countriesCreateManyInput = {
    id: bigint | number
    name: string
    iso_2?: string | null
    iso_3?: string | null
    phone_code?: string | null
    currency?: string | null
    flag?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type countriesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    iso_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3?: NullableStringFieldUpdateOperationsInput | string | null
    phone_code?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type countriesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    iso_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3?: NullableStringFieldUpdateOperationsInput | string | null
    phone_code?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type statesCreateInput = {
    id: bigint | number
    country_id: bigint | number
    name: string
    code?: string | null
    slug?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsCreateNestedManyWithoutStateInput
  }

  export type statesUncheckedCreateInput = {
    id: bigint | number
    country_id: bigint | number
    name: string
    code?: string | null
    slug?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedCreateNestedManyWithoutStateInput
  }

  export type statesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUpdateManyWithoutStateNestedInput
  }

  export type statesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedUpdateManyWithoutStateNestedInput
  }

  export type statesCreateManyInput = {
    id: bigint | number
    country_id: bigint | number
    name: string
    code?: string | null
    slug?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type statesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type statesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesCreateInput = {
    id: bigint | number
    state_id: bigint | number
    name: string
    slug?: string | null
    leagues_allowed?: number
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsCreateNestedManyWithoutCityInput
  }

  export type citiesUncheckedCreateInput = {
    id: bigint | number
    state_id: bigint | number
    name: string
    slug?: string | null
    leagues_allowed?: number
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedCreateNestedManyWithoutCityInput
  }

  export type citiesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    leagues_allowed?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUpdateManyWithoutCityNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    leagues_allowed?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ask_tournaments?: ask_tournamentsUncheckedUpdateManyWithoutCityNestedInput
  }

  export type citiesCreateManyInput = {
    id: bigint | number
    state_id: bigint | number
    name: string
    slug?: string | null
    leagues_allowed?: number
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type citiesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    leagues_allowed?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    leagues_allowed?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournament_enquiriesCreateInput = {
    name: string
    phone?: string | null
    email?: string | null
    description?: string | null
    mark_as_read?: number | null
    tournament_id: number
    gender?: $Enums.player_gender | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournament_enquiriesUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    description?: string | null
    mark_as_read?: number | null
    tournament_id: number
    gender?: $Enums.player_gender | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournament_enquiriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mark_as_read?: NullableIntFieldUpdateOperationsInput | number | null
    tournament_id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumplayer_genderFieldUpdateOperationsInput | $Enums.player_gender | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournament_enquiriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mark_as_read?: NullableIntFieldUpdateOperationsInput | number | null
    tournament_id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumplayer_genderFieldUpdateOperationsInput | $Enums.player_gender | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournament_enquiriesCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    description?: string | null
    mark_as_read?: number | null
    tournament_id: number
    gender?: $Enums.player_gender | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournament_enquiriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mark_as_read?: NullableIntFieldUpdateOperationsInput | number | null
    tournament_id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumplayer_genderFieldUpdateOperationsInput | $Enums.player_gender | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournament_enquiriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mark_as_read?: NullableIntFieldUpdateOperationsInput | number | null
    tournament_id?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumplayer_genderFieldUpdateOperationsInput | $Enums.player_gender | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_sports_enquiriesCreateInput = {
    name: string
    phone: string
    email?: string | null
    organization?: string | null
    sport_id?: string | null
    description?: string | null
  }

  export type ask_sports_enquiriesUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    organization?: string | null
    sport_id?: string | null
    description?: string | null
  }

  export type ask_sports_enquiriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sport_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ask_sports_enquiriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sport_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ask_sports_enquiriesCreateManyInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    organization?: string | null
    sport_id?: string | null
    description?: string | null
  }

  export type ask_sports_enquiriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sport_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ask_sports_enquiriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    sport_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Ask_tournamentsListRelationFilter = {
    every?: ask_tournamentsWhereInput
    some?: ask_tournamentsWhereInput
    none?: ask_tournamentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ask_tournamentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ask_usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country_code?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    otp_verified?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ask_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country_code?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    otp_verified?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country_code?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    otp_verified?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CountriesRelationFilter = {
    is?: countriesWhereInput
    isNot?: countriesWhereInput
  }

  export type StatesRelationFilter = {
    is?: statesWhereInput
    isNot?: statesWhereInput
  }

  export type CitiesRelationFilter = {
    is?: citiesWhereInput
    isNot?: citiesWhereInput
  }

  export type Ask_usersRelationFilter = {
    is?: ask_usersWhereInput
    isNot?: ask_usersWhereInput
  }

  export type ask_tournamentsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    sport_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    slug_name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    tournament_type?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    address?: SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    bannerimage?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    brochure?: SortOrder
    prize?: SortOrder
    fees?: SortOrder
    organizer_name?: SortOrder
    participation_limit?: SortOrder
    publish_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_tournamentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    participation_limit?: SortOrder
    publish_status?: SortOrder
  }

  export type ask_tournamentsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    sport_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    slug_name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    tournament_type?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    address?: SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    bannerimage?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    brochure?: SortOrder
    prize?: SortOrder
    fees?: SortOrder
    organizer_name?: SortOrder
    participation_limit?: SortOrder
    publish_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_tournamentsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    sport_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    slug_name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    tournament_type?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    address?: SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    bannerimage?: SortOrder
    thumbnail?: SortOrder
    url?: SortOrder
    brochure?: SortOrder
    prize?: SortOrder
    fees?: SortOrder
    organizer_name?: SortOrder
    participation_limit?: SortOrder
    publish_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_tournamentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    country_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    participation_limit?: SortOrder
    publish_status?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type countriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    phone_code?: SortOrder
    currency?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type countriesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type countriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    phone_code?: SortOrder
    currency?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type countriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso_2?: SortOrder
    iso_3?: SortOrder
    phone_code?: SortOrder
    currency?: SortOrder
    flag?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type countriesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type statesCountOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type statesAvgOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    status?: SortOrder
  }

  export type statesMaxOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type statesMinOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type statesSumOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    status?: SortOrder
  }

  export type citiesCountOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type citiesAvgOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type citiesSumOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    leagues_allowed?: SortOrder
    status?: SortOrder
  }

  export type Enumplayer_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.player_gender | Enumplayer_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.player_gender[] | null
    notIn?: $Enums.player_gender[] | null
    not?: NestedEnumplayer_genderNullableFilter<$PrismaModel> | $Enums.player_gender | null
  }

  export type ask_tournament_enquiriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    description?: SortOrder
    mark_as_read?: SortOrder
    tournament_id?: SortOrder
    gender?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_tournament_enquiriesAvgOrderByAggregateInput = {
    id?: SortOrder
    mark_as_read?: SortOrder
    tournament_id?: SortOrder
  }

  export type ask_tournament_enquiriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    description?: SortOrder
    mark_as_read?: SortOrder
    tournament_id?: SortOrder
    gender?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_tournament_enquiriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    description?: SortOrder
    mark_as_read?: SortOrder
    tournament_id?: SortOrder
    gender?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ask_tournament_enquiriesSumOrderByAggregateInput = {
    id?: SortOrder
    mark_as_read?: SortOrder
    tournament_id?: SortOrder
  }

  export type Enumplayer_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.player_gender | Enumplayer_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.player_gender[] | null
    notIn?: $Enums.player_gender[] | null
    not?: NestedEnumplayer_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.player_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumplayer_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumplayer_genderNullableFilter<$PrismaModel>
  }

  export type ask_sports_enquiriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    organization?: SortOrder
    sport_id?: SortOrder
    description?: SortOrder
  }

  export type ask_sports_enquiriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ask_sports_enquiriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    organization?: SortOrder
    sport_id?: SortOrder
    description?: SortOrder
  }

  export type ask_sports_enquiriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    organization?: SortOrder
    sport_id?: SortOrder
    description?: SortOrder
  }

  export type ask_sports_enquiriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ask_tournamentsCreateNestedManyWithoutUserInput = {
    create?: XOR<ask_tournamentsCreateWithoutUserInput, ask_tournamentsUncheckedCreateWithoutUserInput> | ask_tournamentsCreateWithoutUserInput[] | ask_tournamentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutUserInput | ask_tournamentsCreateOrConnectWithoutUserInput[]
    createMany?: ask_tournamentsCreateManyUserInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ask_tournamentsCreateWithoutUserInput, ask_tournamentsUncheckedCreateWithoutUserInput> | ask_tournamentsCreateWithoutUserInput[] | ask_tournamentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutUserInput | ask_tournamentsCreateOrConnectWithoutUserInput[]
    createMany?: ask_tournamentsCreateManyUserInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ask_tournamentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutUserInput, ask_tournamentsUncheckedCreateWithoutUserInput> | ask_tournamentsCreateWithoutUserInput[] | ask_tournamentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutUserInput | ask_tournamentsCreateOrConnectWithoutUserInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutUserInput | ask_tournamentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ask_tournamentsCreateManyUserInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutUserInput | ask_tournamentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutUserInput | ask_tournamentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutUserInput, ask_tournamentsUncheckedCreateWithoutUserInput> | ask_tournamentsCreateWithoutUserInput[] | ask_tournamentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutUserInput | ask_tournamentsCreateOrConnectWithoutUserInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutUserInput | ask_tournamentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ask_tournamentsCreateManyUserInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutUserInput | ask_tournamentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutUserInput | ask_tournamentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type countriesCreateNestedOneWithoutAsk_tournamentsInput = {
    create?: XOR<countriesCreateWithoutAsk_tournamentsInput, countriesUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: countriesCreateOrConnectWithoutAsk_tournamentsInput
    connect?: countriesWhereUniqueInput
  }

  export type statesCreateNestedOneWithoutAsk_tournamentsInput = {
    create?: XOR<statesCreateWithoutAsk_tournamentsInput, statesUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: statesCreateOrConnectWithoutAsk_tournamentsInput
    connect?: statesWhereUniqueInput
  }

  export type citiesCreateNestedOneWithoutAsk_tournamentsInput = {
    create?: XOR<citiesCreateWithoutAsk_tournamentsInput, citiesUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAsk_tournamentsInput
    connect?: citiesWhereUniqueInput
  }

  export type ask_usersCreateNestedOneWithoutAsk_tournamentsInput = {
    create?: XOR<ask_usersCreateWithoutAsk_tournamentsInput, ask_usersUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: ask_usersCreateOrConnectWithoutAsk_tournamentsInput
    connect?: ask_usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type countriesUpdateOneRequiredWithoutAsk_tournamentsNestedInput = {
    create?: XOR<countriesCreateWithoutAsk_tournamentsInput, countriesUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: countriesCreateOrConnectWithoutAsk_tournamentsInput
    upsert?: countriesUpsertWithoutAsk_tournamentsInput
    connect?: countriesWhereUniqueInput
    update?: XOR<XOR<countriesUpdateToOneWithWhereWithoutAsk_tournamentsInput, countriesUpdateWithoutAsk_tournamentsInput>, countriesUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type statesUpdateOneRequiredWithoutAsk_tournamentsNestedInput = {
    create?: XOR<statesCreateWithoutAsk_tournamentsInput, statesUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: statesCreateOrConnectWithoutAsk_tournamentsInput
    upsert?: statesUpsertWithoutAsk_tournamentsInput
    connect?: statesWhereUniqueInput
    update?: XOR<XOR<statesUpdateToOneWithWhereWithoutAsk_tournamentsInput, statesUpdateWithoutAsk_tournamentsInput>, statesUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type citiesUpdateOneRequiredWithoutAsk_tournamentsNestedInput = {
    create?: XOR<citiesCreateWithoutAsk_tournamentsInput, citiesUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAsk_tournamentsInput
    upsert?: citiesUpsertWithoutAsk_tournamentsInput
    connect?: citiesWhereUniqueInput
    update?: XOR<XOR<citiesUpdateToOneWithWhereWithoutAsk_tournamentsInput, citiesUpdateWithoutAsk_tournamentsInput>, citiesUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type ask_usersUpdateOneRequiredWithoutAsk_tournamentsNestedInput = {
    create?: XOR<ask_usersCreateWithoutAsk_tournamentsInput, ask_usersUncheckedCreateWithoutAsk_tournamentsInput>
    connectOrCreate?: ask_usersCreateOrConnectWithoutAsk_tournamentsInput
    upsert?: ask_usersUpsertWithoutAsk_tournamentsInput
    connect?: ask_usersWhereUniqueInput
    update?: XOR<XOR<ask_usersUpdateToOneWithWhereWithoutAsk_tournamentsInput, ask_usersUpdateWithoutAsk_tournamentsInput>, ask_usersUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ask_tournamentsCreateNestedManyWithoutCountryInput = {
    create?: XOR<ask_tournamentsCreateWithoutCountryInput, ask_tournamentsUncheckedCreateWithoutCountryInput> | ask_tournamentsCreateWithoutCountryInput[] | ask_tournamentsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCountryInput | ask_tournamentsCreateOrConnectWithoutCountryInput[]
    createMany?: ask_tournamentsCreateManyCountryInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ask_tournamentsCreateWithoutCountryInput, ask_tournamentsUncheckedCreateWithoutCountryInput> | ask_tournamentsCreateWithoutCountryInput[] | ask_tournamentsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCountryInput | ask_tournamentsCreateOrConnectWithoutCountryInput[]
    createMany?: ask_tournamentsCreateManyCountryInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutCountryInput, ask_tournamentsUncheckedCreateWithoutCountryInput> | ask_tournamentsCreateWithoutCountryInput[] | ask_tournamentsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCountryInput | ask_tournamentsCreateOrConnectWithoutCountryInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutCountryInput | ask_tournamentsUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ask_tournamentsCreateManyCountryInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutCountryInput | ask_tournamentsUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutCountryInput | ask_tournamentsUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutCountryInput, ask_tournamentsUncheckedCreateWithoutCountryInput> | ask_tournamentsCreateWithoutCountryInput[] | ask_tournamentsUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCountryInput | ask_tournamentsCreateOrConnectWithoutCountryInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutCountryInput | ask_tournamentsUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ask_tournamentsCreateManyCountryInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutCountryInput | ask_tournamentsUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutCountryInput | ask_tournamentsUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type ask_tournamentsCreateNestedManyWithoutStateInput = {
    create?: XOR<ask_tournamentsCreateWithoutStateInput, ask_tournamentsUncheckedCreateWithoutStateInput> | ask_tournamentsCreateWithoutStateInput[] | ask_tournamentsUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutStateInput | ask_tournamentsCreateOrConnectWithoutStateInput[]
    createMany?: ask_tournamentsCreateManyStateInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<ask_tournamentsCreateWithoutStateInput, ask_tournamentsUncheckedCreateWithoutStateInput> | ask_tournamentsCreateWithoutStateInput[] | ask_tournamentsUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutStateInput | ask_tournamentsCreateOrConnectWithoutStateInput[]
    createMany?: ask_tournamentsCreateManyStateInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUpdateManyWithoutStateNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutStateInput, ask_tournamentsUncheckedCreateWithoutStateInput> | ask_tournamentsCreateWithoutStateInput[] | ask_tournamentsUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutStateInput | ask_tournamentsCreateOrConnectWithoutStateInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutStateInput | ask_tournamentsUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ask_tournamentsCreateManyStateInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutStateInput | ask_tournamentsUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutStateInput | ask_tournamentsUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutStateInput, ask_tournamentsUncheckedCreateWithoutStateInput> | ask_tournamentsCreateWithoutStateInput[] | ask_tournamentsUncheckedCreateWithoutStateInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutStateInput | ask_tournamentsCreateOrConnectWithoutStateInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutStateInput | ask_tournamentsUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: ask_tournamentsCreateManyStateInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutStateInput | ask_tournamentsUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutStateInput | ask_tournamentsUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type ask_tournamentsCreateNestedManyWithoutCityInput = {
    create?: XOR<ask_tournamentsCreateWithoutCityInput, ask_tournamentsUncheckedCreateWithoutCityInput> | ask_tournamentsCreateWithoutCityInput[] | ask_tournamentsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCityInput | ask_tournamentsCreateOrConnectWithoutCityInput[]
    createMany?: ask_tournamentsCreateManyCityInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<ask_tournamentsCreateWithoutCityInput, ask_tournamentsUncheckedCreateWithoutCityInput> | ask_tournamentsCreateWithoutCityInput[] | ask_tournamentsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCityInput | ask_tournamentsCreateOrConnectWithoutCityInput[]
    createMany?: ask_tournamentsCreateManyCityInputEnvelope
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
  }

  export type ask_tournamentsUpdateManyWithoutCityNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutCityInput, ask_tournamentsUncheckedCreateWithoutCityInput> | ask_tournamentsCreateWithoutCityInput[] | ask_tournamentsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCityInput | ask_tournamentsCreateOrConnectWithoutCityInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutCityInput | ask_tournamentsUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ask_tournamentsCreateManyCityInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutCityInput | ask_tournamentsUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutCityInput | ask_tournamentsUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<ask_tournamentsCreateWithoutCityInput, ask_tournamentsUncheckedCreateWithoutCityInput> | ask_tournamentsCreateWithoutCityInput[] | ask_tournamentsUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ask_tournamentsCreateOrConnectWithoutCityInput | ask_tournamentsCreateOrConnectWithoutCityInput[]
    upsert?: ask_tournamentsUpsertWithWhereUniqueWithoutCityInput | ask_tournamentsUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ask_tournamentsCreateManyCityInputEnvelope
    set?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    disconnect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    delete?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    connect?: ask_tournamentsWhereUniqueInput | ask_tournamentsWhereUniqueInput[]
    update?: ask_tournamentsUpdateWithWhereUniqueWithoutCityInput | ask_tournamentsUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ask_tournamentsUpdateManyWithWhereWithoutCityInput | ask_tournamentsUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
  }

  export type NullableEnumplayer_genderFieldUpdateOperationsInput = {
    set?: $Enums.player_gender | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumplayer_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.player_gender | Enumplayer_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.player_gender[] | null
    notIn?: $Enums.player_gender[] | null
    not?: NestedEnumplayer_genderNullableFilter<$PrismaModel> | $Enums.player_gender | null
  }

  export type NestedEnumplayer_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.player_gender | Enumplayer_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.player_gender[] | null
    notIn?: $Enums.player_gender[] | null
    not?: NestedEnumplayer_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.player_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumplayer_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumplayer_genderNullableFilter<$PrismaModel>
  }

  export type ask_tournamentsCreateWithoutUserInput = {
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    country: countriesCreateNestedOneWithoutAsk_tournamentsInput
    state: statesCreateNestedOneWithoutAsk_tournamentsInput
    city: citiesCreateNestedOneWithoutAsk_tournamentsInput
  }

  export type ask_tournamentsUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    state_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsCreateOrConnectWithoutUserInput = {
    where: ask_tournamentsWhereUniqueInput
    create: XOR<ask_tournamentsCreateWithoutUserInput, ask_tournamentsUncheckedCreateWithoutUserInput>
  }

  export type ask_tournamentsCreateManyUserInputEnvelope = {
    data: ask_tournamentsCreateManyUserInput | ask_tournamentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ask_tournamentsUpsertWithWhereUniqueWithoutUserInput = {
    where: ask_tournamentsWhereUniqueInput
    update: XOR<ask_tournamentsUpdateWithoutUserInput, ask_tournamentsUncheckedUpdateWithoutUserInput>
    create: XOR<ask_tournamentsCreateWithoutUserInput, ask_tournamentsUncheckedCreateWithoutUserInput>
  }

  export type ask_tournamentsUpdateWithWhereUniqueWithoutUserInput = {
    where: ask_tournamentsWhereUniqueInput
    data: XOR<ask_tournamentsUpdateWithoutUserInput, ask_tournamentsUncheckedUpdateWithoutUserInput>
  }

  export type ask_tournamentsUpdateManyWithWhereWithoutUserInput = {
    where: ask_tournamentsScalarWhereInput
    data: XOR<ask_tournamentsUpdateManyMutationInput, ask_tournamentsUncheckedUpdateManyWithoutUserInput>
  }

  export type ask_tournamentsScalarWhereInput = {
    AND?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
    OR?: ask_tournamentsScalarWhereInput[]
    NOT?: ask_tournamentsScalarWhereInput | ask_tournamentsScalarWhereInput[]
    id?: IntFilter<"ask_tournaments"> | number
    uuid?: StringFilter<"ask_tournaments"> | string
    sport_id?: StringFilter<"ask_tournaments"> | string
    user_id?: IntFilter<"ask_tournaments"> | number
    name?: StringFilter<"ask_tournaments"> | string
    slug_name?: StringFilter<"ask_tournaments"> | string
    description?: StringNullableFilter<"ask_tournaments"> | string | null
    content?: StringNullableFilter<"ask_tournaments"> | string | null
    tournament_type?: StringNullableFilter<"ask_tournaments"> | string | null
    startdate?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    enddate?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    address?: StringNullableFilter<"ask_tournaments"> | string | null
    country_id?: BigIntFilter<"ask_tournaments"> | bigint | number
    state_id?: BigIntFilter<"ask_tournaments"> | bigint | number
    city_id?: BigIntFilter<"ask_tournaments"> | bigint | number
    bannerimage?: StringNullableFilter<"ask_tournaments"> | string | null
    thumbnail?: StringNullableFilter<"ask_tournaments"> | string | null
    url?: StringNullableFilter<"ask_tournaments"> | string | null
    brochure?: StringNullableFilter<"ask_tournaments"> | string | null
    prize?: StringNullableFilter<"ask_tournaments"> | string | null
    fees?: StringNullableFilter<"ask_tournaments"> | string | null
    organizer_name?: StringNullableFilter<"ask_tournaments"> | string | null
    participation_limit?: IntNullableFilter<"ask_tournaments"> | number | null
    publish_status?: IntFilter<"ask_tournaments"> | number
    created_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ask_tournaments"> | Date | string | null
  }

  export type countriesCreateWithoutAsk_tournamentsInput = {
    id: bigint | number
    name: string
    iso_2?: string | null
    iso_3?: string | null
    phone_code?: string | null
    currency?: string | null
    flag?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type countriesUncheckedCreateWithoutAsk_tournamentsInput = {
    id: bigint | number
    name: string
    iso_2?: string | null
    iso_3?: string | null
    phone_code?: string | null
    currency?: string | null
    flag?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type countriesCreateOrConnectWithoutAsk_tournamentsInput = {
    where: countriesWhereUniqueInput
    create: XOR<countriesCreateWithoutAsk_tournamentsInput, countriesUncheckedCreateWithoutAsk_tournamentsInput>
  }

  export type statesCreateWithoutAsk_tournamentsInput = {
    id: bigint | number
    country_id: bigint | number
    name: string
    code?: string | null
    slug?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type statesUncheckedCreateWithoutAsk_tournamentsInput = {
    id: bigint | number
    country_id: bigint | number
    name: string
    code?: string | null
    slug?: string | null
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type statesCreateOrConnectWithoutAsk_tournamentsInput = {
    where: statesWhereUniqueInput
    create: XOR<statesCreateWithoutAsk_tournamentsInput, statesUncheckedCreateWithoutAsk_tournamentsInput>
  }

  export type citiesCreateWithoutAsk_tournamentsInput = {
    id: bigint | number
    state_id: bigint | number
    name: string
    slug?: string | null
    leagues_allowed?: number
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type citiesUncheckedCreateWithoutAsk_tournamentsInput = {
    id: bigint | number
    state_id: bigint | number
    name: string
    slug?: string | null
    leagues_allowed?: number
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type citiesCreateOrConnectWithoutAsk_tournamentsInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutAsk_tournamentsInput, citiesUncheckedCreateWithoutAsk_tournamentsInput>
  }

  export type ask_usersCreateWithoutAsk_tournamentsInput = {
    name?: string | null
    country_code: string
    phone?: string | null
    email?: string | null
    password: string
    otp_verified?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_usersUncheckedCreateWithoutAsk_tournamentsInput = {
    id?: number
    name?: string | null
    country_code: string
    phone?: string | null
    email?: string | null
    password: string
    otp_verified?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_usersCreateOrConnectWithoutAsk_tournamentsInput = {
    where: ask_usersWhereUniqueInput
    create: XOR<ask_usersCreateWithoutAsk_tournamentsInput, ask_usersUncheckedCreateWithoutAsk_tournamentsInput>
  }

  export type countriesUpsertWithoutAsk_tournamentsInput = {
    update: XOR<countriesUpdateWithoutAsk_tournamentsInput, countriesUncheckedUpdateWithoutAsk_tournamentsInput>
    create: XOR<countriesCreateWithoutAsk_tournamentsInput, countriesUncheckedCreateWithoutAsk_tournamentsInput>
    where?: countriesWhereInput
  }

  export type countriesUpdateToOneWithWhereWithoutAsk_tournamentsInput = {
    where?: countriesWhereInput
    data: XOR<countriesUpdateWithoutAsk_tournamentsInput, countriesUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type countriesUpdateWithoutAsk_tournamentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    iso_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3?: NullableStringFieldUpdateOperationsInput | string | null
    phone_code?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type countriesUncheckedUpdateWithoutAsk_tournamentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    iso_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3?: NullableStringFieldUpdateOperationsInput | string | null
    phone_code?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type statesUpsertWithoutAsk_tournamentsInput = {
    update: XOR<statesUpdateWithoutAsk_tournamentsInput, statesUncheckedUpdateWithoutAsk_tournamentsInput>
    create: XOR<statesCreateWithoutAsk_tournamentsInput, statesUncheckedCreateWithoutAsk_tournamentsInput>
    where?: statesWhereInput
  }

  export type statesUpdateToOneWithWhereWithoutAsk_tournamentsInput = {
    where?: statesWhereInput
    data: XOR<statesUpdateWithoutAsk_tournamentsInput, statesUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type statesUpdateWithoutAsk_tournamentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type statesUncheckedUpdateWithoutAsk_tournamentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUpsertWithoutAsk_tournamentsInput = {
    update: XOR<citiesUpdateWithoutAsk_tournamentsInput, citiesUncheckedUpdateWithoutAsk_tournamentsInput>
    create: XOR<citiesCreateWithoutAsk_tournamentsInput, citiesUncheckedCreateWithoutAsk_tournamentsInput>
    where?: citiesWhereInput
  }

  export type citiesUpdateToOneWithWhereWithoutAsk_tournamentsInput = {
    where?: citiesWhereInput
    data: XOR<citiesUpdateWithoutAsk_tournamentsInput, citiesUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type citiesUpdateWithoutAsk_tournamentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    leagues_allowed?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUncheckedUpdateWithoutAsk_tournamentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    leagues_allowed?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_usersUpsertWithoutAsk_tournamentsInput = {
    update: XOR<ask_usersUpdateWithoutAsk_tournamentsInput, ask_usersUncheckedUpdateWithoutAsk_tournamentsInput>
    create: XOR<ask_usersCreateWithoutAsk_tournamentsInput, ask_usersUncheckedCreateWithoutAsk_tournamentsInput>
    where?: ask_usersWhereInput
  }

  export type ask_usersUpdateToOneWithWhereWithoutAsk_tournamentsInput = {
    where?: ask_usersWhereInput
    data: XOR<ask_usersUpdateWithoutAsk_tournamentsInput, ask_usersUncheckedUpdateWithoutAsk_tournamentsInput>
  }

  export type ask_usersUpdateWithoutAsk_tournamentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    otp_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_usersUncheckedUpdateWithoutAsk_tournamentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    otp_verified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsCreateWithoutCountryInput = {
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    state: statesCreateNestedOneWithoutAsk_tournamentsInput
    city: citiesCreateNestedOneWithoutAsk_tournamentsInput
    user: ask_usersCreateNestedOneWithoutAsk_tournamentsInput
  }

  export type ask_tournamentsUncheckedCreateWithoutCountryInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    state_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsCreateOrConnectWithoutCountryInput = {
    where: ask_tournamentsWhereUniqueInput
    create: XOR<ask_tournamentsCreateWithoutCountryInput, ask_tournamentsUncheckedCreateWithoutCountryInput>
  }

  export type ask_tournamentsCreateManyCountryInputEnvelope = {
    data: ask_tournamentsCreateManyCountryInput | ask_tournamentsCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type ask_tournamentsUpsertWithWhereUniqueWithoutCountryInput = {
    where: ask_tournamentsWhereUniqueInput
    update: XOR<ask_tournamentsUpdateWithoutCountryInput, ask_tournamentsUncheckedUpdateWithoutCountryInput>
    create: XOR<ask_tournamentsCreateWithoutCountryInput, ask_tournamentsUncheckedCreateWithoutCountryInput>
  }

  export type ask_tournamentsUpdateWithWhereUniqueWithoutCountryInput = {
    where: ask_tournamentsWhereUniqueInput
    data: XOR<ask_tournamentsUpdateWithoutCountryInput, ask_tournamentsUncheckedUpdateWithoutCountryInput>
  }

  export type ask_tournamentsUpdateManyWithWhereWithoutCountryInput = {
    where: ask_tournamentsScalarWhereInput
    data: XOR<ask_tournamentsUpdateManyMutationInput, ask_tournamentsUncheckedUpdateManyWithoutCountryInput>
  }

  export type ask_tournamentsCreateWithoutStateInput = {
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    country: countriesCreateNestedOneWithoutAsk_tournamentsInput
    city: citiesCreateNestedOneWithoutAsk_tournamentsInput
    user: ask_usersCreateNestedOneWithoutAsk_tournamentsInput
  }

  export type ask_tournamentsUncheckedCreateWithoutStateInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsCreateOrConnectWithoutStateInput = {
    where: ask_tournamentsWhereUniqueInput
    create: XOR<ask_tournamentsCreateWithoutStateInput, ask_tournamentsUncheckedCreateWithoutStateInput>
  }

  export type ask_tournamentsCreateManyStateInputEnvelope = {
    data: ask_tournamentsCreateManyStateInput | ask_tournamentsCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type ask_tournamentsUpsertWithWhereUniqueWithoutStateInput = {
    where: ask_tournamentsWhereUniqueInput
    update: XOR<ask_tournamentsUpdateWithoutStateInput, ask_tournamentsUncheckedUpdateWithoutStateInput>
    create: XOR<ask_tournamentsCreateWithoutStateInput, ask_tournamentsUncheckedCreateWithoutStateInput>
  }

  export type ask_tournamentsUpdateWithWhereUniqueWithoutStateInput = {
    where: ask_tournamentsWhereUniqueInput
    data: XOR<ask_tournamentsUpdateWithoutStateInput, ask_tournamentsUncheckedUpdateWithoutStateInput>
  }

  export type ask_tournamentsUpdateManyWithWhereWithoutStateInput = {
    where: ask_tournamentsScalarWhereInput
    data: XOR<ask_tournamentsUpdateManyMutationInput, ask_tournamentsUncheckedUpdateManyWithoutStateInput>
  }

  export type ask_tournamentsCreateWithoutCityInput = {
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    country: countriesCreateNestedOneWithoutAsk_tournamentsInput
    state: statesCreateNestedOneWithoutAsk_tournamentsInput
    user: ask_usersCreateNestedOneWithoutAsk_tournamentsInput
  }

  export type ask_tournamentsUncheckedCreateWithoutCityInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    state_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsCreateOrConnectWithoutCityInput = {
    where: ask_tournamentsWhereUniqueInput
    create: XOR<ask_tournamentsCreateWithoutCityInput, ask_tournamentsUncheckedCreateWithoutCityInput>
  }

  export type ask_tournamentsCreateManyCityInputEnvelope = {
    data: ask_tournamentsCreateManyCityInput | ask_tournamentsCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type ask_tournamentsUpsertWithWhereUniqueWithoutCityInput = {
    where: ask_tournamentsWhereUniqueInput
    update: XOR<ask_tournamentsUpdateWithoutCityInput, ask_tournamentsUncheckedUpdateWithoutCityInput>
    create: XOR<ask_tournamentsCreateWithoutCityInput, ask_tournamentsUncheckedCreateWithoutCityInput>
  }

  export type ask_tournamentsUpdateWithWhereUniqueWithoutCityInput = {
    where: ask_tournamentsWhereUniqueInput
    data: XOR<ask_tournamentsUpdateWithoutCityInput, ask_tournamentsUncheckedUpdateWithoutCityInput>
  }

  export type ask_tournamentsUpdateManyWithWhereWithoutCityInput = {
    where: ask_tournamentsScalarWhereInput
    data: XOR<ask_tournamentsUpdateManyMutationInput, ask_tournamentsUncheckedUpdateManyWithoutCityInput>
  }

  export type ask_tournamentsCreateManyUserInput = {
    id?: number
    uuid?: string
    sport_id: string
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    state_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: countriesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    state?: statesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    city?: citiesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
  }

  export type ask_tournamentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsCreateManyCountryInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    state_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsUpdateWithoutCountryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: statesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    city?: citiesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    user?: ask_usersUpdateOneRequiredWithoutAsk_tournamentsNestedInput
  }

  export type ask_tournamentsUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsCreateManyStateInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    city_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsUpdateWithoutStateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: countriesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    city?: citiesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    user?: ask_usersUpdateOneRequiredWithoutAsk_tournamentsNestedInput
  }

  export type ask_tournamentsUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsCreateManyCityInput = {
    id?: number
    uuid?: string
    sport_id: string
    user_id: number
    name: string
    slug_name: string
    description?: string | null
    content?: string | null
    tournament_type?: string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    address?: string | null
    country_id: bigint | number
    state_id: bigint | number
    bannerimage?: string | null
    thumbnail?: string | null
    url?: string | null
    brochure?: string | null
    prize?: string | null
    fees?: string | null
    organizer_name?: string | null
    participation_limit?: number | null
    publish_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ask_tournamentsUpdateWithoutCityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: countriesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    state?: statesUpdateOneRequiredWithoutAsk_tournamentsNestedInput
    user?: ask_usersUpdateOneRequiredWithoutAsk_tournamentsNestedInput
  }

  export type ask_tournamentsUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ask_tournamentsUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    sport_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_type?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: BigIntFieldUpdateOperationsInput | bigint | number
    bannerimage?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    brochure?: NullableStringFieldUpdateOperationsInput | string | null
    prize?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_name?: NullableStringFieldUpdateOperationsInput | string | null
    participation_limit?: NullableIntFieldUpdateOperationsInput | number | null
    publish_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Ask_usersCountOutputTypeDefaultArgs instead
     */
    export type Ask_usersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ask_usersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountriesCountOutputTypeDefaultArgs instead
     */
    export type CountriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatesCountOutputTypeDefaultArgs instead
     */
    export type StatesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CitiesCountOutputTypeDefaultArgs instead
     */
    export type CitiesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CitiesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ask_usersDefaultArgs instead
     */
    export type ask_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ask_usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ask_tournamentsDefaultArgs instead
     */
    export type ask_tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ask_tournamentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use countriesDefaultArgs instead
     */
    export type countriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = countriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statesDefaultArgs instead
     */
    export type statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = statesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use citiesDefaultArgs instead
     */
    export type citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = citiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ask_tournament_enquiriesDefaultArgs instead
     */
    export type ask_tournament_enquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ask_tournament_enquiriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ask_sports_enquiriesDefaultArgs instead
     */
    export type ask_sports_enquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ask_sports_enquiriesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}