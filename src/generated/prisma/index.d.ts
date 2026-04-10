
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VendorProfile
 * 
 */
export type VendorProfile = $Result.DefaultSelection<Prisma.$VendorProfilePayload>
/**
 * Model GalleryPhoto
 * 
 */
export type GalleryPhoto = $Result.DefaultSelection<Prisma.$GalleryPhotoPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model InquiryResponse
 * 
 */
export type InquiryResponse = $Result.DefaultSelection<Prisma.$InquiryResponsePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model SavedVendor
 * 
 */
export type SavedVendor = $Result.DefaultSelection<Prisma.$SavedVendorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  COUPLE: 'COUPLE',
  VENDOR: 'VENDOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VendorCategory: {
  VENUE: 'VENUE',
  PHOTOGRAPHER: 'PHOTOGRAPHER',
  CATERER: 'CATERER',
  FLORIST: 'FLORIST',
  DJ_ENTERTAINMENT: 'DJ_ENTERTAINMENT',
  MAKEUP_HAIR: 'MAKEUP_HAIR',
  WEDDING_PLANNER: 'WEDDING_PLANNER'
};

export type VendorCategory = (typeof VendorCategory)[keyof typeof VendorCategory]


export const PriceRange: {
  BUDGET: 'BUDGET',
  MID: 'MID',
  PREMIUM: 'PREMIUM',
  LUXURY: 'LUXURY'
};

export type PriceRange = (typeof PriceRange)[keyof typeof PriceRange]


export const InquiryStatus: {
  PENDING: 'PENDING',
  REPLIED: 'REPLIED',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  CANCELLED: 'CANCELLED'
};

export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VendorCategory = $Enums.VendorCategory

export const VendorCategory: typeof $Enums.VendorCategory

export type PriceRange = $Enums.PriceRange

export const PriceRange: typeof $Enums.PriceRange

export type InquiryStatus = $Enums.InquiryStatus

export const InquiryStatus: typeof $Enums.InquiryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorProfile`: Exposes CRUD operations for the **VendorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorProfiles
    * const vendorProfiles = await prisma.vendorProfile.findMany()
    * ```
    */
  get vendorProfile(): Prisma.VendorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryPhoto`: Exposes CRUD operations for the **GalleryPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryPhotos
    * const galleryPhotos = await prisma.galleryPhoto.findMany()
    * ```
    */
  get galleryPhoto(): Prisma.GalleryPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiryResponse`: Exposes CRUD operations for the **InquiryResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InquiryResponses
    * const inquiryResponses = await prisma.inquiryResponse.findMany()
    * ```
    */
  get inquiryResponse(): Prisma.InquiryResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedVendor`: Exposes CRUD operations for the **SavedVendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedVendors
    * const savedVendors = await prisma.savedVendor.findMany()
    * ```
    */
  get savedVendor(): Prisma.SavedVendorDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    VendorProfile: 'VendorProfile',
    GalleryPhoto: 'GalleryPhoto',
    Inquiry: 'Inquiry',
    InquiryResponse: 'InquiryResponse',
    Review: 'Review',
    SavedVendor: 'SavedVendor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vendorProfile" | "galleryPhoto" | "inquiry" | "inquiryResponse" | "review" | "savedVendor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VendorProfile: {
        payload: Prisma.$VendorProfilePayload<ExtArgs>
        fields: Prisma.VendorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findFirst: {
            args: Prisma.VendorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findMany: {
            args: Prisma.VendorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          create: {
            args: Prisma.VendorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          createMany: {
            args: Prisma.VendorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          delete: {
            args: Prisma.VendorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          update: {
            args: Prisma.VendorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          deleteMany: {
            args: Prisma.VendorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          upsert: {
            args: Prisma.VendorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          aggregate: {
            args: Prisma.VendorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorProfile>
          }
          groupBy: {
            args: Prisma.VendorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileCountAggregateOutputType> | number
          }
        }
      }
      GalleryPhoto: {
        payload: Prisma.$GalleryPhotoPayload<ExtArgs>
        fields: Prisma.GalleryPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          findFirst: {
            args: Prisma.GalleryPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          findMany: {
            args: Prisma.GalleryPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>[]
          }
          create: {
            args: Prisma.GalleryPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          createMany: {
            args: Prisma.GalleryPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>[]
          }
          delete: {
            args: Prisma.GalleryPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          update: {
            args: Prisma.GalleryPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          deleteMany: {
            args: Prisma.GalleryPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>[]
          }
          upsert: {
            args: Prisma.GalleryPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          aggregate: {
            args: Prisma.GalleryPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryPhoto>
          }
          groupBy: {
            args: Prisma.GalleryPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryPhotoCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      InquiryResponse: {
        payload: Prisma.$InquiryResponsePayload<ExtArgs>
        fields: Prisma.InquiryResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>
          }
          findFirst: {
            args: Prisma.InquiryResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>
          }
          findMany: {
            args: Prisma.InquiryResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>[]
          }
          create: {
            args: Prisma.InquiryResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>
          }
          createMany: {
            args: Prisma.InquiryResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>[]
          }
          delete: {
            args: Prisma.InquiryResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>
          }
          update: {
            args: Prisma.InquiryResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>
          }
          deleteMany: {
            args: Prisma.InquiryResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquiryResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>[]
          }
          upsert: {
            args: Prisma.InquiryResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryResponsePayload>
          }
          aggregate: {
            args: Prisma.InquiryResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiryResponse>
          }
          groupBy: {
            args: Prisma.InquiryResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryResponseCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryResponseCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      SavedVendor: {
        payload: Prisma.$SavedVendorPayload<ExtArgs>
        fields: Prisma.SavedVendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedVendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedVendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>
          }
          findFirst: {
            args: Prisma.SavedVendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedVendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>
          }
          findMany: {
            args: Prisma.SavedVendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>[]
          }
          create: {
            args: Prisma.SavedVendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>
          }
          createMany: {
            args: Prisma.SavedVendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedVendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>[]
          }
          delete: {
            args: Prisma.SavedVendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>
          }
          update: {
            args: Prisma.SavedVendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>
          }
          deleteMany: {
            args: Prisma.SavedVendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedVendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedVendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>[]
          }
          upsert: {
            args: Prisma.SavedVendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedVendorPayload>
          }
          aggregate: {
            args: Prisma.SavedVendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedVendor>
          }
          groupBy: {
            args: Prisma.SavedVendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedVendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedVendorCountArgs<ExtArgs>
            result: $Utils.Optional<SavedVendorCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vendorProfile?: VendorProfileOmit
    galleryPhoto?: GalleryPhotoOmit
    inquiry?: InquiryOmit
    inquiryResponse?: InquiryResponseOmit
    review?: ReviewOmit
    savedVendor?: SavedVendorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedVendors: number
    sentInquiries: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedVendors?: boolean | UserCountOutputTypeCountSavedVendorsArgs
    sentInquiries?: boolean | UserCountOutputTypeCountSentInquiriesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedVendorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type VendorProfileCountOutputType
   */

  export type VendorProfileCountOutputType = {
    photos: number
    inquiries: number
    savedBy: number
    reviews: number
  }

  export type VendorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | VendorProfileCountOutputTypeCountPhotosArgs
    inquiries?: boolean | VendorProfileCountOutputTypeCountInquiriesArgs
    savedBy?: boolean | VendorProfileCountOutputTypeCountSavedByArgs
    reviews?: boolean | VendorProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfileCountOutputType
     */
    select?: VendorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryPhotoWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedVendorWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type InquiryCountOutputType
   */

  export type InquiryCountOutputType = {
    responses: number
  }

  export type InquiryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | InquiryCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * InquiryCountOutputType without action
   */
  export type InquiryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryCountOutputType
     */
    select?: InquiryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InquiryCountOutputType without action
   */
  export type InquiryCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    savedVendors?: boolean | User$savedVendorsArgs<ExtArgs>
    sentInquiries?: boolean | User$sentInquiriesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    savedVendors?: boolean | User$savedVendorsArgs<ExtArgs>
    sentInquiries?: boolean | User$sentInquiriesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vendorProfile: Prisma.$VendorProfilePayload<ExtArgs> | null
      savedVendors: Prisma.$SavedVendorPayload<ExtArgs>[]
      sentInquiries: Prisma.$InquiryPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorProfile<T extends User$vendorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorProfileArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedVendors<T extends User$savedVendorsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedVendorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInquiries<T extends User$sentInquiriesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vendorProfile
   */
  export type User$vendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    where?: VendorProfileWhereInput
  }

  /**
   * User.savedVendors
   */
  export type User$savedVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    where?: SavedVendorWhereInput
    orderBy?: SavedVendorOrderByWithRelationInput | SavedVendorOrderByWithRelationInput[]
    cursor?: SavedVendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedVendorScalarFieldEnum | SavedVendorScalarFieldEnum[]
  }

  /**
   * User.sentInquiries
   */
  export type User$sentInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VendorProfile
   */

  export type AggregateVendorProfile = {
    _count: VendorProfileCountAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  export type VendorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    slug: string | null
    businessName: string | null
    category: $Enums.VendorCategory | null
    location: string | null
    bio: string | null
    priceRange: $Enums.PriceRange | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    slug: string | null
    businessName: string | null
    category: $Enums.VendorCategory | null
    location: string | null
    bio: string | null
    priceRange: $Enums.PriceRange | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorProfileCountAggregateOutputType = {
    id: number
    userId: number
    slug: number
    businessName: number
    category: number
    location: number
    bio: number
    priceRange: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    slug?: true
    businessName?: true
    category?: true
    location?: true
    bio?: true
    priceRange?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    slug?: true
    businessName?: true
    category?: true
    location?: true
    bio?: true
    priceRange?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    slug?: true
    businessName?: true
    category?: true
    location?: true
    bio?: true
    priceRange?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfile to aggregate.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorProfiles
    **/
    _count?: true | VendorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorProfileMaxAggregateInputType
  }

  export type GetVendorProfileAggregateType<T extends VendorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorProfile[P]>
      : GetScalarType<T[P], AggregateVendorProfile[P]>
  }




  export type VendorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorProfileWhereInput
    orderBy?: VendorProfileOrderByWithAggregationInput | VendorProfileOrderByWithAggregationInput[]
    by: VendorProfileScalarFieldEnum[] | VendorProfileScalarFieldEnum
    having?: VendorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorProfileCountAggregateInputType | true
    _min?: VendorProfileMinAggregateInputType
    _max?: VendorProfileMaxAggregateInputType
  }

  export type VendorProfileGroupByOutputType = {
    id: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: VendorProfileCountAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  type GetVendorProfileGroupByPayload<T extends VendorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
        }
      >
    >


  export type VendorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slug?: boolean
    businessName?: boolean
    category?: boolean
    location?: boolean
    bio?: boolean
    priceRange?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | VendorProfile$photosArgs<ExtArgs>
    inquiries?: boolean | VendorProfile$inquiriesArgs<ExtArgs>
    savedBy?: boolean | VendorProfile$savedByArgs<ExtArgs>
    reviews?: boolean | VendorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slug?: boolean
    businessName?: boolean
    category?: boolean
    location?: boolean
    bio?: boolean
    priceRange?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slug?: boolean
    businessName?: boolean
    category?: boolean
    location?: boolean
    bio?: boolean
    priceRange?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    slug?: boolean
    businessName?: boolean
    category?: boolean
    location?: boolean
    bio?: boolean
    priceRange?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "slug" | "businessName" | "category" | "location" | "bio" | "priceRange" | "isApproved" | "createdAt" | "updatedAt", ExtArgs["result"]["vendorProfile"]>
  export type VendorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | VendorProfile$photosArgs<ExtArgs>
    inquiries?: boolean | VendorProfile$inquiriesArgs<ExtArgs>
    savedBy?: boolean | VendorProfile$savedByArgs<ExtArgs>
    reviews?: boolean | VendorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VendorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      photos: Prisma.$GalleryPhotoPayload<ExtArgs>[]
      inquiries: Prisma.$InquiryPayload<ExtArgs>[]
      savedBy: Prisma.$SavedVendorPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      slug: string
      businessName: string
      category: $Enums.VendorCategory
      location: string
      bio: string
      priceRange: $Enums.PriceRange
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendorProfile"]>
    composites: {}
  }

  type VendorProfileGetPayload<S extends boolean | null | undefined | VendorProfileDefaultArgs> = $Result.GetResult<Prisma.$VendorProfilePayload, S>

  type VendorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorProfileCountAggregateInputType | true
    }

  export interface VendorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorProfile'], meta: { name: 'VendorProfile' } }
    /**
     * Find zero or one VendorProfile that matches the filter.
     * @param {VendorProfileFindUniqueArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorProfileFindUniqueArgs>(args: SelectSubset<T, VendorProfileFindUniqueArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorProfileFindUniqueOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorProfileFindFirstArgs>(args?: SelectSubset<T, VendorProfileFindFirstArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany()
     * 
     * // Get first 10 VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorProfileFindManyArgs>(args?: SelectSubset<T, VendorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorProfile.
     * @param {VendorProfileCreateArgs} args - Arguments to create a VendorProfile.
     * @example
     * // Create one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.create({
     *   data: {
     *     // ... data to create a VendorProfile
     *   }
     * })
     * 
     */
    create<T extends VendorProfileCreateArgs>(args: SelectSubset<T, VendorProfileCreateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorProfiles.
     * @param {VendorProfileCreateManyArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorProfileCreateManyArgs>(args?: SelectSubset<T, VendorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorProfiles and returns the data saved in the database.
     * @param {VendorProfileCreateManyAndReturnArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorProfile.
     * @param {VendorProfileDeleteArgs} args - Arguments to delete one VendorProfile.
     * @example
     * // Delete one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.delete({
     *   where: {
     *     // ... filter to delete one VendorProfile
     *   }
     * })
     * 
     */
    delete<T extends VendorProfileDeleteArgs>(args: SelectSubset<T, VendorProfileDeleteArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorProfile.
     * @param {VendorProfileUpdateArgs} args - Arguments to update one VendorProfile.
     * @example
     * // Update one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorProfileUpdateArgs>(args: SelectSubset<T, VendorProfileUpdateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorProfiles.
     * @param {VendorProfileDeleteManyArgs} args - Arguments to filter VendorProfiles to delete.
     * @example
     * // Delete a few VendorProfiles
     * const { count } = await prisma.vendorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorProfileDeleteManyArgs>(args?: SelectSubset<T, VendorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorProfileUpdateManyArgs>(args: SelectSubset<T, VendorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles and returns the data updated in the database.
     * @param {VendorProfileUpdateManyAndReturnArgs} args - Arguments to update many VendorProfiles.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorProfile.
     * @param {VendorProfileUpsertArgs} args - Arguments to update or create a VendorProfile.
     * @example
     * // Update or create a VendorProfile
     * const vendorProfile = await prisma.vendorProfile.upsert({
     *   create: {
     *     // ... data to create a VendorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorProfile we want to update
     *   }
     * })
     */
    upsert<T extends VendorProfileUpsertArgs>(args: SelectSubset<T, VendorProfileUpsertArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileCountArgs} args - Arguments to filter VendorProfiles to count.
     * @example
     * // Count the number of VendorProfiles
     * const count = await prisma.vendorProfile.count({
     *   where: {
     *     // ... the filter for the VendorProfiles we want to count
     *   }
     * })
    **/
    count<T extends VendorProfileCountArgs>(
      args?: Subset<T, VendorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorProfileAggregateArgs>(args: Subset<T, VendorProfileAggregateArgs>): Prisma.PrismaPromise<GetVendorProfileAggregateType<T>>

    /**
     * Group by VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileGroupByArgs} args - Group by arguments.
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
      T extends VendorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorProfileGroupByArgs['orderBy'] }
        : { orderBy?: VendorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorProfile model
   */
  readonly fields: VendorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends VendorProfile$photosArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inquiries<T extends VendorProfile$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends VendorProfile$savedByArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends VendorProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VendorProfile model
   */
  interface VendorProfileFieldRefs {
    readonly id: FieldRef<"VendorProfile", 'String'>
    readonly userId: FieldRef<"VendorProfile", 'String'>
    readonly slug: FieldRef<"VendorProfile", 'String'>
    readonly businessName: FieldRef<"VendorProfile", 'String'>
    readonly category: FieldRef<"VendorProfile", 'VendorCategory'>
    readonly location: FieldRef<"VendorProfile", 'String'>
    readonly bio: FieldRef<"VendorProfile", 'String'>
    readonly priceRange: FieldRef<"VendorProfile", 'PriceRange'>
    readonly isApproved: FieldRef<"VendorProfile", 'Boolean'>
    readonly createdAt: FieldRef<"VendorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"VendorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorProfile findUnique
   */
  export type VendorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findUniqueOrThrow
   */
  export type VendorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findFirst
   */
  export type VendorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findFirstOrThrow
   */
  export type VendorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findMany
   */
  export type VendorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfiles to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile create
   */
  export type VendorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorProfile.
     */
    data: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
  }

  /**
   * VendorProfile createMany
   */
  export type VendorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorProfile createManyAndReturn
   */
  export type VendorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile update
   */
  export type VendorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorProfile.
     */
    data: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
    /**
     * Choose, which VendorProfile to update.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile updateMany
   */
  export type VendorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to update.
     */
    limit?: number
  }

  /**
   * VendorProfile updateManyAndReturn
   */
  export type VendorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile upsert
   */
  export type VendorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorProfile to update in case it exists.
     */
    where: VendorProfileWhereUniqueInput
    /**
     * In case the VendorProfile found by the `where` argument doesn't exist, create a new VendorProfile with this data.
     */
    create: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
    /**
     * In case the VendorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
  }

  /**
   * VendorProfile delete
   */
  export type VendorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter which VendorProfile to delete.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile deleteMany
   */
  export type VendorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfiles to delete
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to delete.
     */
    limit?: number
  }

  /**
   * VendorProfile.photos
   */
  export type VendorProfile$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    where?: GalleryPhotoWhereInput
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    cursor?: GalleryPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * VendorProfile.inquiries
   */
  export type VendorProfile$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * VendorProfile.savedBy
   */
  export type VendorProfile$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    where?: SavedVendorWhereInput
    orderBy?: SavedVendorOrderByWithRelationInput | SavedVendorOrderByWithRelationInput[]
    cursor?: SavedVendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedVendorScalarFieldEnum | SavedVendorScalarFieldEnum[]
  }

  /**
   * VendorProfile.reviews
   */
  export type VendorProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * VendorProfile without action
   */
  export type VendorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
  }


  /**
   * Model GalleryPhoto
   */

  export type AggregateGalleryPhoto = {
    _count: GalleryPhotoCountAggregateOutputType | null
    _min: GalleryPhotoMinAggregateOutputType | null
    _max: GalleryPhotoMaxAggregateOutputType | null
  }

  export type GalleryPhotoMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    url: string | null
    publicId: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type GalleryPhotoMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    url: string | null
    publicId: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type GalleryPhotoCountAggregateOutputType = {
    id: number
    vendorId: number
    url: number
    publicId: number
    isPrimary: number
    createdAt: number
    _all: number
  }


  export type GalleryPhotoMinAggregateInputType = {
    id?: true
    vendorId?: true
    url?: true
    publicId?: true
    isPrimary?: true
    createdAt?: true
  }

  export type GalleryPhotoMaxAggregateInputType = {
    id?: true
    vendorId?: true
    url?: true
    publicId?: true
    isPrimary?: true
    createdAt?: true
  }

  export type GalleryPhotoCountAggregateInputType = {
    id?: true
    vendorId?: true
    url?: true
    publicId?: true
    isPrimary?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryPhoto to aggregate.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryPhotos
    **/
    _count?: true | GalleryPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryPhotoMaxAggregateInputType
  }

  export type GetGalleryPhotoAggregateType<T extends GalleryPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryPhoto[P]>
      : GetScalarType<T[P], AggregateGalleryPhoto[P]>
  }




  export type GalleryPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryPhotoWhereInput
    orderBy?: GalleryPhotoOrderByWithAggregationInput | GalleryPhotoOrderByWithAggregationInput[]
    by: GalleryPhotoScalarFieldEnum[] | GalleryPhotoScalarFieldEnum
    having?: GalleryPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryPhotoCountAggregateInputType | true
    _min?: GalleryPhotoMinAggregateInputType
    _max?: GalleryPhotoMaxAggregateInputType
  }

  export type GalleryPhotoGroupByOutputType = {
    id: string
    vendorId: string
    url: string
    publicId: string
    isPrimary: boolean
    createdAt: Date
    _count: GalleryPhotoCountAggregateOutputType | null
    _min: GalleryPhotoMinAggregateOutputType | null
    _max: GalleryPhotoMaxAggregateOutputType | null
  }

  type GetGalleryPhotoGroupByPayload<T extends GalleryPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryPhotoGroupByOutputType[P]>
        }
      >
    >


  export type GalleryPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryPhoto"]>

  export type GalleryPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryPhoto"]>

  export type GalleryPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryPhoto"]>

  export type GalleryPhotoSelectScalar = {
    id?: boolean
    vendorId?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
  }

  export type GalleryPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "url" | "publicId" | "isPrimary" | "createdAt", ExtArgs["result"]["galleryPhoto"]>
  export type GalleryPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type GalleryPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type GalleryPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $GalleryPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryPhoto"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      url: string
      publicId: string
      isPrimary: boolean
      createdAt: Date
    }, ExtArgs["result"]["galleryPhoto"]>
    composites: {}
  }

  type GalleryPhotoGetPayload<S extends boolean | null | undefined | GalleryPhotoDefaultArgs> = $Result.GetResult<Prisma.$GalleryPhotoPayload, S>

  type GalleryPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryPhotoCountAggregateInputType | true
    }

  export interface GalleryPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryPhoto'], meta: { name: 'GalleryPhoto' } }
    /**
     * Find zero or one GalleryPhoto that matches the filter.
     * @param {GalleryPhotoFindUniqueArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryPhotoFindUniqueArgs>(args: SelectSubset<T, GalleryPhotoFindUniqueArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryPhotoFindUniqueOrThrowArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoFindFirstArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryPhotoFindFirstArgs>(args?: SelectSubset<T, GalleryPhotoFindFirstArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoFindFirstOrThrowArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryPhotos
     * const galleryPhotos = await prisma.galleryPhoto.findMany()
     * 
     * // Get first 10 GalleryPhotos
     * const galleryPhotos = await prisma.galleryPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryPhotoWithIdOnly = await prisma.galleryPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryPhotoFindManyArgs>(args?: SelectSubset<T, GalleryPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryPhoto.
     * @param {GalleryPhotoCreateArgs} args - Arguments to create a GalleryPhoto.
     * @example
     * // Create one GalleryPhoto
     * const GalleryPhoto = await prisma.galleryPhoto.create({
     *   data: {
     *     // ... data to create a GalleryPhoto
     *   }
     * })
     * 
     */
    create<T extends GalleryPhotoCreateArgs>(args: SelectSubset<T, GalleryPhotoCreateArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryPhotos.
     * @param {GalleryPhotoCreateManyArgs} args - Arguments to create many GalleryPhotos.
     * @example
     * // Create many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryPhotoCreateManyArgs>(args?: SelectSubset<T, GalleryPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryPhotos and returns the data saved in the database.
     * @param {GalleryPhotoCreateManyAndReturnArgs} args - Arguments to create many GalleryPhotos.
     * @example
     * // Create many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryPhotos and only return the `id`
     * const galleryPhotoWithIdOnly = await prisma.galleryPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryPhoto.
     * @param {GalleryPhotoDeleteArgs} args - Arguments to delete one GalleryPhoto.
     * @example
     * // Delete one GalleryPhoto
     * const GalleryPhoto = await prisma.galleryPhoto.delete({
     *   where: {
     *     // ... filter to delete one GalleryPhoto
     *   }
     * })
     * 
     */
    delete<T extends GalleryPhotoDeleteArgs>(args: SelectSubset<T, GalleryPhotoDeleteArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryPhoto.
     * @param {GalleryPhotoUpdateArgs} args - Arguments to update one GalleryPhoto.
     * @example
     * // Update one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryPhotoUpdateArgs>(args: SelectSubset<T, GalleryPhotoUpdateArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryPhotos.
     * @param {GalleryPhotoDeleteManyArgs} args - Arguments to filter GalleryPhotos to delete.
     * @example
     * // Delete a few GalleryPhotos
     * const { count } = await prisma.galleryPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryPhotoDeleteManyArgs>(args?: SelectSubset<T, GalleryPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryPhotoUpdateManyArgs>(args: SelectSubset<T, GalleryPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryPhotos and returns the data updated in the database.
     * @param {GalleryPhotoUpdateManyAndReturnArgs} args - Arguments to update many GalleryPhotos.
     * @example
     * // Update many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryPhotos and only return the `id`
     * const galleryPhotoWithIdOnly = await prisma.galleryPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryPhoto.
     * @param {GalleryPhotoUpsertArgs} args - Arguments to update or create a GalleryPhoto.
     * @example
     * // Update or create a GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.upsert({
     *   create: {
     *     // ... data to create a GalleryPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryPhoto we want to update
     *   }
     * })
     */
    upsert<T extends GalleryPhotoUpsertArgs>(args: SelectSubset<T, GalleryPhotoUpsertArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoCountArgs} args - Arguments to filter GalleryPhotos to count.
     * @example
     * // Count the number of GalleryPhotos
     * const count = await prisma.galleryPhoto.count({
     *   where: {
     *     // ... the filter for the GalleryPhotos we want to count
     *   }
     * })
    **/
    count<T extends GalleryPhotoCountArgs>(
      args?: Subset<T, GalleryPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryPhotoAggregateArgs>(args: Subset<T, GalleryPhotoAggregateArgs>): Prisma.PrismaPromise<GetGalleryPhotoAggregateType<T>>

    /**
     * Group by GalleryPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoGroupByArgs} args - Group by arguments.
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
      T extends GalleryPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryPhotoGroupByArgs['orderBy'] }
        : { orderBy?: GalleryPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryPhoto model
   */
  readonly fields: GalleryPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GalleryPhoto model
   */
  interface GalleryPhotoFieldRefs {
    readonly id: FieldRef<"GalleryPhoto", 'String'>
    readonly vendorId: FieldRef<"GalleryPhoto", 'String'>
    readonly url: FieldRef<"GalleryPhoto", 'String'>
    readonly publicId: FieldRef<"GalleryPhoto", 'String'>
    readonly isPrimary: FieldRef<"GalleryPhoto", 'Boolean'>
    readonly createdAt: FieldRef<"GalleryPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryPhoto findUnique
   */
  export type GalleryPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto findUniqueOrThrow
   */
  export type GalleryPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto findFirst
   */
  export type GalleryPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryPhotos.
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryPhotos.
     */
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * GalleryPhoto findFirstOrThrow
   */
  export type GalleryPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryPhotos.
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryPhotos.
     */
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * GalleryPhoto findMany
   */
  export type GalleryPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhotos to fetch.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryPhotos.
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryPhotos.
     */
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * GalleryPhoto create
   */
  export type GalleryPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryPhoto.
     */
    data: XOR<GalleryPhotoCreateInput, GalleryPhotoUncheckedCreateInput>
  }

  /**
   * GalleryPhoto createMany
   */
  export type GalleryPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryPhotos.
     */
    data: GalleryPhotoCreateManyInput | GalleryPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryPhoto createManyAndReturn
   */
  export type GalleryPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryPhotos.
     */
    data: GalleryPhotoCreateManyInput | GalleryPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryPhoto update
   */
  export type GalleryPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryPhoto.
     */
    data: XOR<GalleryPhotoUpdateInput, GalleryPhotoUncheckedUpdateInput>
    /**
     * Choose, which GalleryPhoto to update.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto updateMany
   */
  export type GalleryPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryPhotos.
     */
    data: XOR<GalleryPhotoUpdateManyMutationInput, GalleryPhotoUncheckedUpdateManyInput>
    /**
     * Filter which GalleryPhotos to update
     */
    where?: GalleryPhotoWhereInput
    /**
     * Limit how many GalleryPhotos to update.
     */
    limit?: number
  }

  /**
   * GalleryPhoto updateManyAndReturn
   */
  export type GalleryPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * The data used to update GalleryPhotos.
     */
    data: XOR<GalleryPhotoUpdateManyMutationInput, GalleryPhotoUncheckedUpdateManyInput>
    /**
     * Filter which GalleryPhotos to update
     */
    where?: GalleryPhotoWhereInput
    /**
     * Limit how many GalleryPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryPhoto upsert
   */
  export type GalleryPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryPhoto to update in case it exists.
     */
    where: GalleryPhotoWhereUniqueInput
    /**
     * In case the GalleryPhoto found by the `where` argument doesn't exist, create a new GalleryPhoto with this data.
     */
    create: XOR<GalleryPhotoCreateInput, GalleryPhotoUncheckedCreateInput>
    /**
     * In case the GalleryPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryPhotoUpdateInput, GalleryPhotoUncheckedUpdateInput>
  }

  /**
   * GalleryPhoto delete
   */
  export type GalleryPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter which GalleryPhoto to delete.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto deleteMany
   */
  export type GalleryPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryPhotos to delete
     */
    where?: GalleryPhotoWhereInput
    /**
     * Limit how many GalleryPhotos to delete.
     */
    limit?: number
  }

  /**
   * GalleryPhoto without action
   */
  export type GalleryPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    guestCount: number | null
  }

  export type InquirySumAggregateOutputType = {
    guestCount: number | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    coupleId: string | null
    vendorId: string | null
    message: string | null
    eventDate: Date | null
    guestCount: number | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    coupleId: string | null
    vendorId: string | null
    message: string | null
    eventDate: Date | null
    guestCount: number | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    coupleId: number
    vendorId: number
    message: number
    eventDate: number
    guestCount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    guestCount?: true
  }

  export type InquirySumAggregateInputType = {
    guestCount?: true
  }

  export type InquiryMinAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    message?: true
    eventDate?: true
    guestCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    message?: true
    eventDate?: true
    guestCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    message?: true
    eventDate?: true
    guestCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    coupleId: string
    vendorId: string
    message: string
    eventDate: Date
    guestCount: number | null
    status: $Enums.InquiryStatus
    createdAt: Date
    updatedAt: Date
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    message?: boolean
    eventDate?: boolean
    guestCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    responses?: boolean | Inquiry$responsesArgs<ExtArgs>
    _count?: boolean | InquiryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    message?: boolean
    eventDate?: boolean
    guestCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    message?: boolean
    eventDate?: boolean
    guestCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectScalar = {
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    message?: boolean
    eventDate?: boolean
    guestCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coupleId" | "vendorId" | "message" | "eventDate" | "guestCount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["inquiry"]>
  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    responses?: boolean | Inquiry$responsesArgs<ExtArgs>
    _count?: boolean | InquiryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type InquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {
      couple: Prisma.$UserPayload<ExtArgs>
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
      responses: Prisma.$InquiryResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coupleId: string
      vendorId: string
      message: string
      eventDate: Date
      guestCount: number | null
      status: $Enums.InquiryStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries and returns the data updated in the database.
     * @param {InquiryUpdateManyAndReturnArgs} args - Arguments to update many Inquiries.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, InquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    couple<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends Inquiry$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Inquiry$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'String'>
    readonly coupleId: FieldRef<"Inquiry", 'String'>
    readonly vendorId: FieldRef<"Inquiry", 'String'>
    readonly message: FieldRef<"Inquiry", 'String'>
    readonly eventDate: FieldRef<"Inquiry", 'DateTime'>
    readonly guestCount: FieldRef<"Inquiry", 'Int'>
    readonly status: FieldRef<"Inquiry", 'InquiryStatus'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry updateManyAndReturn
   */
  export type InquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry.responses
   */
  export type Inquiry$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    where?: InquiryResponseWhereInput
    orderBy?: InquiryResponseOrderByWithRelationInput | InquiryResponseOrderByWithRelationInput[]
    cursor?: InquiryResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryResponseScalarFieldEnum | InquiryResponseScalarFieldEnum[]
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
  }


  /**
   * Model InquiryResponse
   */

  export type AggregateInquiryResponse = {
    _count: InquiryResponseCountAggregateOutputType | null
    _min: InquiryResponseMinAggregateOutputType | null
    _max: InquiryResponseMaxAggregateOutputType | null
  }

  export type InquiryResponseMinAggregateOutputType = {
    id: string | null
    inquiryId: string | null
    message: string | null
    senderRole: $Enums.Role | null
    createdAt: Date | null
  }

  export type InquiryResponseMaxAggregateOutputType = {
    id: string | null
    inquiryId: string | null
    message: string | null
    senderRole: $Enums.Role | null
    createdAt: Date | null
  }

  export type InquiryResponseCountAggregateOutputType = {
    id: number
    inquiryId: number
    message: number
    senderRole: number
    createdAt: number
    _all: number
  }


  export type InquiryResponseMinAggregateInputType = {
    id?: true
    inquiryId?: true
    message?: true
    senderRole?: true
    createdAt?: true
  }

  export type InquiryResponseMaxAggregateInputType = {
    id?: true
    inquiryId?: true
    message?: true
    senderRole?: true
    createdAt?: true
  }

  export type InquiryResponseCountAggregateInputType = {
    id?: true
    inquiryId?: true
    message?: true
    senderRole?: true
    createdAt?: true
    _all?: true
  }

  export type InquiryResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InquiryResponse to aggregate.
     */
    where?: InquiryResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryResponses to fetch.
     */
    orderBy?: InquiryResponseOrderByWithRelationInput | InquiryResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InquiryResponses
    **/
    _count?: true | InquiryResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryResponseMaxAggregateInputType
  }

  export type GetInquiryResponseAggregateType<T extends InquiryResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiryResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiryResponse[P]>
      : GetScalarType<T[P], AggregateInquiryResponse[P]>
  }




  export type InquiryResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryResponseWhereInput
    orderBy?: InquiryResponseOrderByWithAggregationInput | InquiryResponseOrderByWithAggregationInput[]
    by: InquiryResponseScalarFieldEnum[] | InquiryResponseScalarFieldEnum
    having?: InquiryResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryResponseCountAggregateInputType | true
    _min?: InquiryResponseMinAggregateInputType
    _max?: InquiryResponseMaxAggregateInputType
  }

  export type InquiryResponseGroupByOutputType = {
    id: string
    inquiryId: string
    message: string
    senderRole: $Enums.Role
    createdAt: Date
    _count: InquiryResponseCountAggregateOutputType | null
    _min: InquiryResponseMinAggregateOutputType | null
    _max: InquiryResponseMaxAggregateOutputType | null
  }

  type GetInquiryResponseGroupByPayload<T extends InquiryResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryResponseGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryResponseGroupByOutputType[P]>
        }
      >
    >


  export type InquiryResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inquiryId?: boolean
    message?: boolean
    senderRole?: boolean
    createdAt?: boolean
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiryResponse"]>

  export type InquiryResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inquiryId?: boolean
    message?: boolean
    senderRole?: boolean
    createdAt?: boolean
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiryResponse"]>

  export type InquiryResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inquiryId?: boolean
    message?: boolean
    senderRole?: boolean
    createdAt?: boolean
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiryResponse"]>

  export type InquiryResponseSelectScalar = {
    id?: boolean
    inquiryId?: boolean
    message?: boolean
    senderRole?: boolean
    createdAt?: boolean
  }

  export type InquiryResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inquiryId" | "message" | "senderRole" | "createdAt", ExtArgs["result"]["inquiryResponse"]>
  export type InquiryResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }
  export type InquiryResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }
  export type InquiryResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiry?: boolean | InquiryDefaultArgs<ExtArgs>
  }

  export type $InquiryResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InquiryResponse"
    objects: {
      inquiry: Prisma.$InquiryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inquiryId: string
      message: string
      senderRole: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["inquiryResponse"]>
    composites: {}
  }

  type InquiryResponseGetPayload<S extends boolean | null | undefined | InquiryResponseDefaultArgs> = $Result.GetResult<Prisma.$InquiryResponsePayload, S>

  type InquiryResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryResponseCountAggregateInputType | true
    }

  export interface InquiryResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InquiryResponse'], meta: { name: 'InquiryResponse' } }
    /**
     * Find zero or one InquiryResponse that matches the filter.
     * @param {InquiryResponseFindUniqueArgs} args - Arguments to find a InquiryResponse
     * @example
     * // Get one InquiryResponse
     * const inquiryResponse = await prisma.inquiryResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryResponseFindUniqueArgs>(args: SelectSubset<T, InquiryResponseFindUniqueArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InquiryResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryResponseFindUniqueOrThrowArgs} args - Arguments to find a InquiryResponse
     * @example
     * // Get one InquiryResponse
     * const inquiryResponse = await prisma.inquiryResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InquiryResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseFindFirstArgs} args - Arguments to find a InquiryResponse
     * @example
     * // Get one InquiryResponse
     * const inquiryResponse = await prisma.inquiryResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryResponseFindFirstArgs>(args?: SelectSubset<T, InquiryResponseFindFirstArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InquiryResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseFindFirstOrThrowArgs} args - Arguments to find a InquiryResponse
     * @example
     * // Get one InquiryResponse
     * const inquiryResponse = await prisma.inquiryResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InquiryResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InquiryResponses
     * const inquiryResponses = await prisma.inquiryResponse.findMany()
     * 
     * // Get first 10 InquiryResponses
     * const inquiryResponses = await prisma.inquiryResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryResponseWithIdOnly = await prisma.inquiryResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryResponseFindManyArgs>(args?: SelectSubset<T, InquiryResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InquiryResponse.
     * @param {InquiryResponseCreateArgs} args - Arguments to create a InquiryResponse.
     * @example
     * // Create one InquiryResponse
     * const InquiryResponse = await prisma.inquiryResponse.create({
     *   data: {
     *     // ... data to create a InquiryResponse
     *   }
     * })
     * 
     */
    create<T extends InquiryResponseCreateArgs>(args: SelectSubset<T, InquiryResponseCreateArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InquiryResponses.
     * @param {InquiryResponseCreateManyArgs} args - Arguments to create many InquiryResponses.
     * @example
     * // Create many InquiryResponses
     * const inquiryResponse = await prisma.inquiryResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryResponseCreateManyArgs>(args?: SelectSubset<T, InquiryResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InquiryResponses and returns the data saved in the database.
     * @param {InquiryResponseCreateManyAndReturnArgs} args - Arguments to create many InquiryResponses.
     * @example
     * // Create many InquiryResponses
     * const inquiryResponse = await prisma.inquiryResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InquiryResponses and only return the `id`
     * const inquiryResponseWithIdOnly = await prisma.inquiryResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InquiryResponse.
     * @param {InquiryResponseDeleteArgs} args - Arguments to delete one InquiryResponse.
     * @example
     * // Delete one InquiryResponse
     * const InquiryResponse = await prisma.inquiryResponse.delete({
     *   where: {
     *     // ... filter to delete one InquiryResponse
     *   }
     * })
     * 
     */
    delete<T extends InquiryResponseDeleteArgs>(args: SelectSubset<T, InquiryResponseDeleteArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InquiryResponse.
     * @param {InquiryResponseUpdateArgs} args - Arguments to update one InquiryResponse.
     * @example
     * // Update one InquiryResponse
     * const inquiryResponse = await prisma.inquiryResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryResponseUpdateArgs>(args: SelectSubset<T, InquiryResponseUpdateArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InquiryResponses.
     * @param {InquiryResponseDeleteManyArgs} args - Arguments to filter InquiryResponses to delete.
     * @example
     * // Delete a few InquiryResponses
     * const { count } = await prisma.inquiryResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryResponseDeleteManyArgs>(args?: SelectSubset<T, InquiryResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InquiryResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InquiryResponses
     * const inquiryResponse = await prisma.inquiryResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryResponseUpdateManyArgs>(args: SelectSubset<T, InquiryResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InquiryResponses and returns the data updated in the database.
     * @param {InquiryResponseUpdateManyAndReturnArgs} args - Arguments to update many InquiryResponses.
     * @example
     * // Update many InquiryResponses
     * const inquiryResponse = await prisma.inquiryResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InquiryResponses and only return the `id`
     * const inquiryResponseWithIdOnly = await prisma.inquiryResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InquiryResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, InquiryResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InquiryResponse.
     * @param {InquiryResponseUpsertArgs} args - Arguments to update or create a InquiryResponse.
     * @example
     * // Update or create a InquiryResponse
     * const inquiryResponse = await prisma.inquiryResponse.upsert({
     *   create: {
     *     // ... data to create a InquiryResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InquiryResponse we want to update
     *   }
     * })
     */
    upsert<T extends InquiryResponseUpsertArgs>(args: SelectSubset<T, InquiryResponseUpsertArgs<ExtArgs>>): Prisma__InquiryResponseClient<$Result.GetResult<Prisma.$InquiryResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InquiryResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseCountArgs} args - Arguments to filter InquiryResponses to count.
     * @example
     * // Count the number of InquiryResponses
     * const count = await prisma.inquiryResponse.count({
     *   where: {
     *     // ... the filter for the InquiryResponses we want to count
     *   }
     * })
    **/
    count<T extends InquiryResponseCountArgs>(
      args?: Subset<T, InquiryResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InquiryResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryResponseAggregateArgs>(args: Subset<T, InquiryResponseAggregateArgs>): Prisma.PrismaPromise<GetInquiryResponseAggregateType<T>>

    /**
     * Group by InquiryResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryResponseGroupByArgs} args - Group by arguments.
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
      T extends InquiryResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryResponseGroupByArgs['orderBy'] }
        : { orderBy?: InquiryResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InquiryResponse model
   */
  readonly fields: InquiryResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InquiryResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inquiry<T extends InquiryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InquiryDefaultArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InquiryResponse model
   */
  interface InquiryResponseFieldRefs {
    readonly id: FieldRef<"InquiryResponse", 'String'>
    readonly inquiryId: FieldRef<"InquiryResponse", 'String'>
    readonly message: FieldRef<"InquiryResponse", 'String'>
    readonly senderRole: FieldRef<"InquiryResponse", 'Role'>
    readonly createdAt: FieldRef<"InquiryResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InquiryResponse findUnique
   */
  export type InquiryResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * Filter, which InquiryResponse to fetch.
     */
    where: InquiryResponseWhereUniqueInput
  }

  /**
   * InquiryResponse findUniqueOrThrow
   */
  export type InquiryResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * Filter, which InquiryResponse to fetch.
     */
    where: InquiryResponseWhereUniqueInput
  }

  /**
   * InquiryResponse findFirst
   */
  export type InquiryResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * Filter, which InquiryResponse to fetch.
     */
    where?: InquiryResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryResponses to fetch.
     */
    orderBy?: InquiryResponseOrderByWithRelationInput | InquiryResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InquiryResponses.
     */
    cursor?: InquiryResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryResponses.
     */
    distinct?: InquiryResponseScalarFieldEnum | InquiryResponseScalarFieldEnum[]
  }

  /**
   * InquiryResponse findFirstOrThrow
   */
  export type InquiryResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * Filter, which InquiryResponse to fetch.
     */
    where?: InquiryResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryResponses to fetch.
     */
    orderBy?: InquiryResponseOrderByWithRelationInput | InquiryResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InquiryResponses.
     */
    cursor?: InquiryResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryResponses.
     */
    distinct?: InquiryResponseScalarFieldEnum | InquiryResponseScalarFieldEnum[]
  }

  /**
   * InquiryResponse findMany
   */
  export type InquiryResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * Filter, which InquiryResponses to fetch.
     */
    where?: InquiryResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryResponses to fetch.
     */
    orderBy?: InquiryResponseOrderByWithRelationInput | InquiryResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InquiryResponses.
     */
    cursor?: InquiryResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryResponses.
     */
    distinct?: InquiryResponseScalarFieldEnum | InquiryResponseScalarFieldEnum[]
  }

  /**
   * InquiryResponse create
   */
  export type InquiryResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a InquiryResponse.
     */
    data: XOR<InquiryResponseCreateInput, InquiryResponseUncheckedCreateInput>
  }

  /**
   * InquiryResponse createMany
   */
  export type InquiryResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InquiryResponses.
     */
    data: InquiryResponseCreateManyInput | InquiryResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InquiryResponse createManyAndReturn
   */
  export type InquiryResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * The data used to create many InquiryResponses.
     */
    data: InquiryResponseCreateManyInput | InquiryResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InquiryResponse update
   */
  export type InquiryResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a InquiryResponse.
     */
    data: XOR<InquiryResponseUpdateInput, InquiryResponseUncheckedUpdateInput>
    /**
     * Choose, which InquiryResponse to update.
     */
    where: InquiryResponseWhereUniqueInput
  }

  /**
   * InquiryResponse updateMany
   */
  export type InquiryResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InquiryResponses.
     */
    data: XOR<InquiryResponseUpdateManyMutationInput, InquiryResponseUncheckedUpdateManyInput>
    /**
     * Filter which InquiryResponses to update
     */
    where?: InquiryResponseWhereInput
    /**
     * Limit how many InquiryResponses to update.
     */
    limit?: number
  }

  /**
   * InquiryResponse updateManyAndReturn
   */
  export type InquiryResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * The data used to update InquiryResponses.
     */
    data: XOR<InquiryResponseUpdateManyMutationInput, InquiryResponseUncheckedUpdateManyInput>
    /**
     * Filter which InquiryResponses to update
     */
    where?: InquiryResponseWhereInput
    /**
     * Limit how many InquiryResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InquiryResponse upsert
   */
  export type InquiryResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the InquiryResponse to update in case it exists.
     */
    where: InquiryResponseWhereUniqueInput
    /**
     * In case the InquiryResponse found by the `where` argument doesn't exist, create a new InquiryResponse with this data.
     */
    create: XOR<InquiryResponseCreateInput, InquiryResponseUncheckedCreateInput>
    /**
     * In case the InquiryResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryResponseUpdateInput, InquiryResponseUncheckedUpdateInput>
  }

  /**
   * InquiryResponse delete
   */
  export type InquiryResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
    /**
     * Filter which InquiryResponse to delete.
     */
    where: InquiryResponseWhereUniqueInput
  }

  /**
   * InquiryResponse deleteMany
   */
  export type InquiryResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InquiryResponses to delete
     */
    where?: InquiryResponseWhereInput
    /**
     * Limit how many InquiryResponses to delete.
     */
    limit?: number
  }

  /**
   * InquiryResponse without action
   */
  export type InquiryResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryResponse
     */
    select?: InquiryResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryResponse
     */
    omit?: InquiryResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryResponseInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    coupleId: string | null
    vendorId: string | null
    rating: number | null
    body: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    coupleId: string | null
    vendorId: string | null
    rating: number | null
    body: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    coupleId: number
    vendorId: number
    rating: number
    body: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    rating?: true
    body?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    rating?: true
    body?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    rating?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    coupleId: string
    vendorId: string
    rating: number
    body: string
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    rating?: boolean
    body?: boolean
    createdAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    rating?: boolean
    body?: boolean
    createdAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    rating?: boolean
    body?: boolean
    createdAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    rating?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coupleId" | "vendorId" | "rating" | "body" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      couple: Prisma.$UserPayload<ExtArgs>
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coupleId: string
      vendorId: string
      rating: number
      body: string
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    couple<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly coupleId: FieldRef<"Review", 'String'>
    readonly vendorId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly body: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model SavedVendor
   */

  export type AggregateSavedVendor = {
    _count: SavedVendorCountAggregateOutputType | null
    _min: SavedVendorMinAggregateOutputType | null
    _max: SavedVendorMaxAggregateOutputType | null
  }

  export type SavedVendorMinAggregateOutputType = {
    id: string | null
    coupleId: string | null
    vendorId: string | null
    savedAt: Date | null
  }

  export type SavedVendorMaxAggregateOutputType = {
    id: string | null
    coupleId: string | null
    vendorId: string | null
    savedAt: Date | null
  }

  export type SavedVendorCountAggregateOutputType = {
    id: number
    coupleId: number
    vendorId: number
    savedAt: number
    _all: number
  }


  export type SavedVendorMinAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    savedAt?: true
  }

  export type SavedVendorMaxAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    savedAt?: true
  }

  export type SavedVendorCountAggregateInputType = {
    id?: true
    coupleId?: true
    vendorId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedVendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedVendor to aggregate.
     */
    where?: SavedVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedVendors to fetch.
     */
    orderBy?: SavedVendorOrderByWithRelationInput | SavedVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedVendors
    **/
    _count?: true | SavedVendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedVendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedVendorMaxAggregateInputType
  }

  export type GetSavedVendorAggregateType<T extends SavedVendorAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedVendor[P]>
      : GetScalarType<T[P], AggregateSavedVendor[P]>
  }




  export type SavedVendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedVendorWhereInput
    orderBy?: SavedVendorOrderByWithAggregationInput | SavedVendorOrderByWithAggregationInput[]
    by: SavedVendorScalarFieldEnum[] | SavedVendorScalarFieldEnum
    having?: SavedVendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedVendorCountAggregateInputType | true
    _min?: SavedVendorMinAggregateInputType
    _max?: SavedVendorMaxAggregateInputType
  }

  export type SavedVendorGroupByOutputType = {
    id: string
    coupleId: string
    vendorId: string
    savedAt: Date
    _count: SavedVendorCountAggregateOutputType | null
    _min: SavedVendorMinAggregateOutputType | null
    _max: SavedVendorMaxAggregateOutputType | null
  }

  type GetSavedVendorGroupByPayload<T extends SavedVendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedVendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedVendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedVendorGroupByOutputType[P]>
            : GetScalarType<T[P], SavedVendorGroupByOutputType[P]>
        }
      >
    >


  export type SavedVendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    savedAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedVendor"]>

  export type SavedVendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    savedAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedVendor"]>

  export type SavedVendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    savedAt?: boolean
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedVendor"]>

  export type SavedVendorSelectScalar = {
    id?: boolean
    coupleId?: boolean
    vendorId?: boolean
    savedAt?: boolean
  }

  export type SavedVendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coupleId" | "vendorId" | "savedAt", ExtArgs["result"]["savedVendor"]>
  export type SavedVendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type SavedVendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type SavedVendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    couple?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $SavedVendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedVendor"
    objects: {
      couple: Prisma.$UserPayload<ExtArgs>
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coupleId: string
      vendorId: string
      savedAt: Date
    }, ExtArgs["result"]["savedVendor"]>
    composites: {}
  }

  type SavedVendorGetPayload<S extends boolean | null | undefined | SavedVendorDefaultArgs> = $Result.GetResult<Prisma.$SavedVendorPayload, S>

  type SavedVendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedVendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedVendorCountAggregateInputType | true
    }

  export interface SavedVendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedVendor'], meta: { name: 'SavedVendor' } }
    /**
     * Find zero or one SavedVendor that matches the filter.
     * @param {SavedVendorFindUniqueArgs} args - Arguments to find a SavedVendor
     * @example
     * // Get one SavedVendor
     * const savedVendor = await prisma.savedVendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedVendorFindUniqueArgs>(args: SelectSubset<T, SavedVendorFindUniqueArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedVendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedVendorFindUniqueOrThrowArgs} args - Arguments to find a SavedVendor
     * @example
     * // Get one SavedVendor
     * const savedVendor = await prisma.savedVendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedVendorFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedVendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedVendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorFindFirstArgs} args - Arguments to find a SavedVendor
     * @example
     * // Get one SavedVendor
     * const savedVendor = await prisma.savedVendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedVendorFindFirstArgs>(args?: SelectSubset<T, SavedVendorFindFirstArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedVendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorFindFirstOrThrowArgs} args - Arguments to find a SavedVendor
     * @example
     * // Get one SavedVendor
     * const savedVendor = await prisma.savedVendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedVendorFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedVendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedVendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedVendors
     * const savedVendors = await prisma.savedVendor.findMany()
     * 
     * // Get first 10 SavedVendors
     * const savedVendors = await prisma.savedVendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedVendorWithIdOnly = await prisma.savedVendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedVendorFindManyArgs>(args?: SelectSubset<T, SavedVendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedVendor.
     * @param {SavedVendorCreateArgs} args - Arguments to create a SavedVendor.
     * @example
     * // Create one SavedVendor
     * const SavedVendor = await prisma.savedVendor.create({
     *   data: {
     *     // ... data to create a SavedVendor
     *   }
     * })
     * 
     */
    create<T extends SavedVendorCreateArgs>(args: SelectSubset<T, SavedVendorCreateArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedVendors.
     * @param {SavedVendorCreateManyArgs} args - Arguments to create many SavedVendors.
     * @example
     * // Create many SavedVendors
     * const savedVendor = await prisma.savedVendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedVendorCreateManyArgs>(args?: SelectSubset<T, SavedVendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedVendors and returns the data saved in the database.
     * @param {SavedVendorCreateManyAndReturnArgs} args - Arguments to create many SavedVendors.
     * @example
     * // Create many SavedVendors
     * const savedVendor = await prisma.savedVendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedVendors and only return the `id`
     * const savedVendorWithIdOnly = await prisma.savedVendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedVendorCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedVendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedVendor.
     * @param {SavedVendorDeleteArgs} args - Arguments to delete one SavedVendor.
     * @example
     * // Delete one SavedVendor
     * const SavedVendor = await prisma.savedVendor.delete({
     *   where: {
     *     // ... filter to delete one SavedVendor
     *   }
     * })
     * 
     */
    delete<T extends SavedVendorDeleteArgs>(args: SelectSubset<T, SavedVendorDeleteArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedVendor.
     * @param {SavedVendorUpdateArgs} args - Arguments to update one SavedVendor.
     * @example
     * // Update one SavedVendor
     * const savedVendor = await prisma.savedVendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedVendorUpdateArgs>(args: SelectSubset<T, SavedVendorUpdateArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedVendors.
     * @param {SavedVendorDeleteManyArgs} args - Arguments to filter SavedVendors to delete.
     * @example
     * // Delete a few SavedVendors
     * const { count } = await prisma.savedVendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedVendorDeleteManyArgs>(args?: SelectSubset<T, SavedVendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedVendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedVendors
     * const savedVendor = await prisma.savedVendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedVendorUpdateManyArgs>(args: SelectSubset<T, SavedVendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedVendors and returns the data updated in the database.
     * @param {SavedVendorUpdateManyAndReturnArgs} args - Arguments to update many SavedVendors.
     * @example
     * // Update many SavedVendors
     * const savedVendor = await prisma.savedVendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedVendors and only return the `id`
     * const savedVendorWithIdOnly = await prisma.savedVendor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedVendorUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedVendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedVendor.
     * @param {SavedVendorUpsertArgs} args - Arguments to update or create a SavedVendor.
     * @example
     * // Update or create a SavedVendor
     * const savedVendor = await prisma.savedVendor.upsert({
     *   create: {
     *     // ... data to create a SavedVendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedVendor we want to update
     *   }
     * })
     */
    upsert<T extends SavedVendorUpsertArgs>(args: SelectSubset<T, SavedVendorUpsertArgs<ExtArgs>>): Prisma__SavedVendorClient<$Result.GetResult<Prisma.$SavedVendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedVendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorCountArgs} args - Arguments to filter SavedVendors to count.
     * @example
     * // Count the number of SavedVendors
     * const count = await prisma.savedVendor.count({
     *   where: {
     *     // ... the filter for the SavedVendors we want to count
     *   }
     * })
    **/
    count<T extends SavedVendorCountArgs>(
      args?: Subset<T, SavedVendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedVendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedVendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedVendorAggregateArgs>(args: Subset<T, SavedVendorAggregateArgs>): Prisma.PrismaPromise<GetSavedVendorAggregateType<T>>

    /**
     * Group by SavedVendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedVendorGroupByArgs} args - Group by arguments.
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
      T extends SavedVendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedVendorGroupByArgs['orderBy'] }
        : { orderBy?: SavedVendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedVendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedVendor model
   */
  readonly fields: SavedVendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedVendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedVendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    couple<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedVendor model
   */
  interface SavedVendorFieldRefs {
    readonly id: FieldRef<"SavedVendor", 'String'>
    readonly coupleId: FieldRef<"SavedVendor", 'String'>
    readonly vendorId: FieldRef<"SavedVendor", 'String'>
    readonly savedAt: FieldRef<"SavedVendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedVendor findUnique
   */
  export type SavedVendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * Filter, which SavedVendor to fetch.
     */
    where: SavedVendorWhereUniqueInput
  }

  /**
   * SavedVendor findUniqueOrThrow
   */
  export type SavedVendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * Filter, which SavedVendor to fetch.
     */
    where: SavedVendorWhereUniqueInput
  }

  /**
   * SavedVendor findFirst
   */
  export type SavedVendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * Filter, which SavedVendor to fetch.
     */
    where?: SavedVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedVendors to fetch.
     */
    orderBy?: SavedVendorOrderByWithRelationInput | SavedVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedVendors.
     */
    cursor?: SavedVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedVendors.
     */
    distinct?: SavedVendorScalarFieldEnum | SavedVendorScalarFieldEnum[]
  }

  /**
   * SavedVendor findFirstOrThrow
   */
  export type SavedVendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * Filter, which SavedVendor to fetch.
     */
    where?: SavedVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedVendors to fetch.
     */
    orderBy?: SavedVendorOrderByWithRelationInput | SavedVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedVendors.
     */
    cursor?: SavedVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedVendors.
     */
    distinct?: SavedVendorScalarFieldEnum | SavedVendorScalarFieldEnum[]
  }

  /**
   * SavedVendor findMany
   */
  export type SavedVendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * Filter, which SavedVendors to fetch.
     */
    where?: SavedVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedVendors to fetch.
     */
    orderBy?: SavedVendorOrderByWithRelationInput | SavedVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedVendors.
     */
    cursor?: SavedVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedVendors.
     */
    distinct?: SavedVendorScalarFieldEnum | SavedVendorScalarFieldEnum[]
  }

  /**
   * SavedVendor create
   */
  export type SavedVendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedVendor.
     */
    data: XOR<SavedVendorCreateInput, SavedVendorUncheckedCreateInput>
  }

  /**
   * SavedVendor createMany
   */
  export type SavedVendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedVendors.
     */
    data: SavedVendorCreateManyInput | SavedVendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedVendor createManyAndReturn
   */
  export type SavedVendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * The data used to create many SavedVendors.
     */
    data: SavedVendorCreateManyInput | SavedVendorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedVendor update
   */
  export type SavedVendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedVendor.
     */
    data: XOR<SavedVendorUpdateInput, SavedVendorUncheckedUpdateInput>
    /**
     * Choose, which SavedVendor to update.
     */
    where: SavedVendorWhereUniqueInput
  }

  /**
   * SavedVendor updateMany
   */
  export type SavedVendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedVendors.
     */
    data: XOR<SavedVendorUpdateManyMutationInput, SavedVendorUncheckedUpdateManyInput>
    /**
     * Filter which SavedVendors to update
     */
    where?: SavedVendorWhereInput
    /**
     * Limit how many SavedVendors to update.
     */
    limit?: number
  }

  /**
   * SavedVendor updateManyAndReturn
   */
  export type SavedVendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * The data used to update SavedVendors.
     */
    data: XOR<SavedVendorUpdateManyMutationInput, SavedVendorUncheckedUpdateManyInput>
    /**
     * Filter which SavedVendors to update
     */
    where?: SavedVendorWhereInput
    /**
     * Limit how many SavedVendors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedVendor upsert
   */
  export type SavedVendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedVendor to update in case it exists.
     */
    where: SavedVendorWhereUniqueInput
    /**
     * In case the SavedVendor found by the `where` argument doesn't exist, create a new SavedVendor with this data.
     */
    create: XOR<SavedVendorCreateInput, SavedVendorUncheckedCreateInput>
    /**
     * In case the SavedVendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedVendorUpdateInput, SavedVendorUncheckedUpdateInput>
  }

  /**
   * SavedVendor delete
   */
  export type SavedVendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
    /**
     * Filter which SavedVendor to delete.
     */
    where: SavedVendorWhereUniqueInput
  }

  /**
   * SavedVendor deleteMany
   */
  export type SavedVendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedVendors to delete
     */
    where?: SavedVendorWhereInput
    /**
     * Limit how many SavedVendors to delete.
     */
    limit?: number
  }

  /**
   * SavedVendor without action
   */
  export type SavedVendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedVendor
     */
    select?: SavedVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedVendor
     */
    omit?: SavedVendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedVendorInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    slug: 'slug',
    businessName: 'businessName',
    category: 'category',
    location: 'location',
    bio: 'bio',
    priceRange: 'priceRange',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorProfileScalarFieldEnum = (typeof VendorProfileScalarFieldEnum)[keyof typeof VendorProfileScalarFieldEnum]


  export const GalleryPhotoScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    url: 'url',
    publicId: 'publicId',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
  };

  export type GalleryPhotoScalarFieldEnum = (typeof GalleryPhotoScalarFieldEnum)[keyof typeof GalleryPhotoScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    coupleId: 'coupleId',
    vendorId: 'vendorId',
    message: 'message',
    eventDate: 'eventDate',
    guestCount: 'guestCount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const InquiryResponseScalarFieldEnum: {
    id: 'id',
    inquiryId: 'inquiryId',
    message: 'message',
    senderRole: 'senderRole',
    createdAt: 'createdAt'
  };

  export type InquiryResponseScalarFieldEnum = (typeof InquiryResponseScalarFieldEnum)[keyof typeof InquiryResponseScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    coupleId: 'coupleId',
    vendorId: 'vendorId',
    rating: 'rating',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SavedVendorScalarFieldEnum: {
    id: 'id',
    coupleId: 'coupleId',
    vendorId: 'vendorId',
    savedAt: 'savedAt'
  };

  export type SavedVendorScalarFieldEnum = (typeof SavedVendorScalarFieldEnum)[keyof typeof SavedVendorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VendorCategory'
   */
  export type EnumVendorCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VendorCategory'>
    


  /**
   * Reference to a field of type 'VendorCategory[]'
   */
  export type ListEnumVendorCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VendorCategory[]'>
    


  /**
   * Reference to a field of type 'PriceRange'
   */
  export type EnumPriceRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceRange'>
    


  /**
   * Reference to a field of type 'PriceRange[]'
   */
  export type ListEnumPriceRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceRange[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'InquiryStatus'
   */
  export type EnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus'>
    


  /**
   * Reference to a field of type 'InquiryStatus[]'
   */
  export type ListEnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableScalarRelationFilter, VendorProfileWhereInput> | null
    savedVendors?: SavedVendorListRelationFilter
    sentInquiries?: InquiryListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorProfile?: VendorProfileOrderByWithRelationInput
    savedVendors?: SavedVendorOrderByRelationAggregateInput
    sentInquiries?: InquiryOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableScalarRelationFilter, VendorProfileWhereInput> | null
    savedVendors?: SavedVendorListRelationFilter
    sentInquiries?: InquiryListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorProfileWhereInput = {
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    id?: StringFilter<"VendorProfile"> | string
    userId?: StringFilter<"VendorProfile"> | string
    slug?: StringFilter<"VendorProfile"> | string
    businessName?: StringFilter<"VendorProfile"> | string
    category?: EnumVendorCategoryFilter<"VendorProfile"> | $Enums.VendorCategory
    location?: StringFilter<"VendorProfile"> | string
    bio?: StringFilter<"VendorProfile"> | string
    priceRange?: EnumPriceRangeFilter<"VendorProfile"> | $Enums.PriceRange
    isApproved?: BoolFilter<"VendorProfile"> | boolean
    createdAt?: DateTimeFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VendorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: GalleryPhotoListRelationFilter
    inquiries?: InquiryListRelationFilter
    savedBy?: SavedVendorListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type VendorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    businessName?: SortOrder
    category?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    priceRange?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    photos?: GalleryPhotoOrderByRelationAggregateInput
    inquiries?: InquiryOrderByRelationAggregateInput
    savedBy?: SavedVendorOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type VendorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    slug?: string
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    businessName?: StringFilter<"VendorProfile"> | string
    category?: EnumVendorCategoryFilter<"VendorProfile"> | $Enums.VendorCategory
    location?: StringFilter<"VendorProfile"> | string
    bio?: StringFilter<"VendorProfile"> | string
    priceRange?: EnumPriceRangeFilter<"VendorProfile"> | $Enums.PriceRange
    isApproved?: BoolFilter<"VendorProfile"> | boolean
    createdAt?: DateTimeFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VendorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: GalleryPhotoListRelationFilter
    inquiries?: InquiryListRelationFilter
    savedBy?: SavedVendorListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId" | "slug">

  export type VendorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    businessName?: SortOrder
    category?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    priceRange?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorProfileCountOrderByAggregateInput
    _max?: VendorProfileMaxOrderByAggregateInput
    _min?: VendorProfileMinOrderByAggregateInput
  }

  export type VendorProfileScalarWhereWithAggregatesInput = {
    AND?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    OR?: VendorProfileScalarWhereWithAggregatesInput[]
    NOT?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VendorProfile"> | string
    userId?: StringWithAggregatesFilter<"VendorProfile"> | string
    slug?: StringWithAggregatesFilter<"VendorProfile"> | string
    businessName?: StringWithAggregatesFilter<"VendorProfile"> | string
    category?: EnumVendorCategoryWithAggregatesFilter<"VendorProfile"> | $Enums.VendorCategory
    location?: StringWithAggregatesFilter<"VendorProfile"> | string
    bio?: StringWithAggregatesFilter<"VendorProfile"> | string
    priceRange?: EnumPriceRangeWithAggregatesFilter<"VendorProfile"> | $Enums.PriceRange
    isApproved?: BoolWithAggregatesFilter<"VendorProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VendorProfile"> | Date | string
  }

  export type GalleryPhotoWhereInput = {
    AND?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    OR?: GalleryPhotoWhereInput[]
    NOT?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    id?: StringFilter<"GalleryPhoto"> | string
    vendorId?: StringFilter<"GalleryPhoto"> | string
    url?: StringFilter<"GalleryPhoto"> | string
    publicId?: StringFilter<"GalleryPhoto"> | string
    isPrimary?: BoolFilter<"GalleryPhoto"> | boolean
    createdAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type GalleryPhotoOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type GalleryPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    OR?: GalleryPhotoWhereInput[]
    NOT?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    vendorId?: StringFilter<"GalleryPhoto"> | string
    url?: StringFilter<"GalleryPhoto"> | string
    publicId?: StringFilter<"GalleryPhoto"> | string
    isPrimary?: BoolFilter<"GalleryPhoto"> | boolean
    createdAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type GalleryPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryPhotoCountOrderByAggregateInput
    _max?: GalleryPhotoMaxOrderByAggregateInput
    _min?: GalleryPhotoMinOrderByAggregateInput
  }

  export type GalleryPhotoScalarWhereWithAggregatesInput = {
    AND?: GalleryPhotoScalarWhereWithAggregatesInput | GalleryPhotoScalarWhereWithAggregatesInput[]
    OR?: GalleryPhotoScalarWhereWithAggregatesInput[]
    NOT?: GalleryPhotoScalarWhereWithAggregatesInput | GalleryPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    vendorId?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    url?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    publicId?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    isPrimary?: BoolWithAggregatesFilter<"GalleryPhoto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GalleryPhoto"> | Date | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    coupleId?: StringFilter<"Inquiry"> | string
    vendorId?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    eventDate?: DateTimeFilter<"Inquiry"> | Date | string
    guestCount?: IntNullableFilter<"Inquiry"> | number | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    couple?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
    responses?: InquiryResponseListRelationFilter
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    message?: SortOrder
    eventDate?: SortOrder
    guestCount?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    couple?: UserOrderByWithRelationInput
    vendor?: VendorProfileOrderByWithRelationInput
    responses?: InquiryResponseOrderByRelationAggregateInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    coupleId?: StringFilter<"Inquiry"> | string
    vendorId?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    eventDate?: DateTimeFilter<"Inquiry"> | Date | string
    guestCount?: IntNullableFilter<"Inquiry"> | number | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
    couple?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
    responses?: InquiryResponseListRelationFilter
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    message?: SortOrder
    eventDate?: SortOrder
    guestCount?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _avg?: InquiryAvgOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
    _sum?: InquirySumOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inquiry"> | string
    coupleId?: StringWithAggregatesFilter<"Inquiry"> | string
    vendorId?: StringWithAggregatesFilter<"Inquiry"> | string
    message?: StringWithAggregatesFilter<"Inquiry"> | string
    eventDate?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    guestCount?: IntNullableWithAggregatesFilter<"Inquiry"> | number | null
    status?: EnumInquiryStatusWithAggregatesFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
  }

  export type InquiryResponseWhereInput = {
    AND?: InquiryResponseWhereInput | InquiryResponseWhereInput[]
    OR?: InquiryResponseWhereInput[]
    NOT?: InquiryResponseWhereInput | InquiryResponseWhereInput[]
    id?: StringFilter<"InquiryResponse"> | string
    inquiryId?: StringFilter<"InquiryResponse"> | string
    message?: StringFilter<"InquiryResponse"> | string
    senderRole?: EnumRoleFilter<"InquiryResponse"> | $Enums.Role
    createdAt?: DateTimeFilter<"InquiryResponse"> | Date | string
    inquiry?: XOR<InquiryScalarRelationFilter, InquiryWhereInput>
  }

  export type InquiryResponseOrderByWithRelationInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    message?: SortOrder
    senderRole?: SortOrder
    createdAt?: SortOrder
    inquiry?: InquiryOrderByWithRelationInput
  }

  export type InquiryResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryResponseWhereInput | InquiryResponseWhereInput[]
    OR?: InquiryResponseWhereInput[]
    NOT?: InquiryResponseWhereInput | InquiryResponseWhereInput[]
    inquiryId?: StringFilter<"InquiryResponse"> | string
    message?: StringFilter<"InquiryResponse"> | string
    senderRole?: EnumRoleFilter<"InquiryResponse"> | $Enums.Role
    createdAt?: DateTimeFilter<"InquiryResponse"> | Date | string
    inquiry?: XOR<InquiryScalarRelationFilter, InquiryWhereInput>
  }, "id">

  export type InquiryResponseOrderByWithAggregationInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    message?: SortOrder
    senderRole?: SortOrder
    createdAt?: SortOrder
    _count?: InquiryResponseCountOrderByAggregateInput
    _max?: InquiryResponseMaxOrderByAggregateInput
    _min?: InquiryResponseMinOrderByAggregateInput
  }

  export type InquiryResponseScalarWhereWithAggregatesInput = {
    AND?: InquiryResponseScalarWhereWithAggregatesInput | InquiryResponseScalarWhereWithAggregatesInput[]
    OR?: InquiryResponseScalarWhereWithAggregatesInput[]
    NOT?: InquiryResponseScalarWhereWithAggregatesInput | InquiryResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InquiryResponse"> | string
    inquiryId?: StringWithAggregatesFilter<"InquiryResponse"> | string
    message?: StringWithAggregatesFilter<"InquiryResponse"> | string
    senderRole?: EnumRoleWithAggregatesFilter<"InquiryResponse"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"InquiryResponse"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    coupleId?: StringFilter<"Review"> | string
    vendorId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    body?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    couple?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    rating?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    couple?: UserOrderByWithRelationInput
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coupleId_vendorId?: ReviewCoupleIdVendorIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    coupleId?: StringFilter<"Review"> | string
    vendorId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    body?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    couple?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id" | "coupleId_vendorId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    rating?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    coupleId?: StringWithAggregatesFilter<"Review"> | string
    vendorId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    body?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type SavedVendorWhereInput = {
    AND?: SavedVendorWhereInput | SavedVendorWhereInput[]
    OR?: SavedVendorWhereInput[]
    NOT?: SavedVendorWhereInput | SavedVendorWhereInput[]
    id?: StringFilter<"SavedVendor"> | string
    coupleId?: StringFilter<"SavedVendor"> | string
    vendorId?: StringFilter<"SavedVendor"> | string
    savedAt?: DateTimeFilter<"SavedVendor"> | Date | string
    couple?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type SavedVendorOrderByWithRelationInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    savedAt?: SortOrder
    couple?: UserOrderByWithRelationInput
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type SavedVendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coupleId_vendorId?: SavedVendorCoupleIdVendorIdCompoundUniqueInput
    AND?: SavedVendorWhereInput | SavedVendorWhereInput[]
    OR?: SavedVendorWhereInput[]
    NOT?: SavedVendorWhereInput | SavedVendorWhereInput[]
    coupleId?: StringFilter<"SavedVendor"> | string
    vendorId?: StringFilter<"SavedVendor"> | string
    savedAt?: DateTimeFilter<"SavedVendor"> | Date | string
    couple?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id" | "coupleId_vendorId">

  export type SavedVendorOrderByWithAggregationInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedVendorCountOrderByAggregateInput
    _max?: SavedVendorMaxOrderByAggregateInput
    _min?: SavedVendorMinOrderByAggregateInput
  }

  export type SavedVendorScalarWhereWithAggregatesInput = {
    AND?: SavedVendorScalarWhereWithAggregatesInput | SavedVendorScalarWhereWithAggregatesInput[]
    OR?: SavedVendorScalarWhereWithAggregatesInput[]
    NOT?: SavedVendorScalarWhereWithAggregatesInput | SavedVendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedVendor"> | string
    coupleId?: StringWithAggregatesFilter<"SavedVendor"> | string
    vendorId?: StringWithAggregatesFilter<"SavedVendor"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedVendor"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    savedVendors?: SavedVendorCreateNestedManyWithoutCoupleInput
    sentInquiries?: InquiryCreateNestedManyWithoutCoupleInput
    reviews?: ReviewCreateNestedManyWithoutCoupleInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    savedVendors?: SavedVendorUncheckedCreateNestedManyWithoutCoupleInput
    sentInquiries?: InquiryUncheckedCreateNestedManyWithoutCoupleInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    savedVendors?: SavedVendorUpdateManyWithoutCoupleNestedInput
    sentInquiries?: InquiryUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUpdateManyWithoutCoupleNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    savedVendors?: SavedVendorUncheckedUpdateManyWithoutCoupleNestedInput
    sentInquiries?: InquiryUncheckedUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileCreateInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    photos?: GalleryPhotoCreateNestedManyWithoutVendorInput
    inquiries?: InquiryCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoUncheckedCreateNestedManyWithoutVendorInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    photos?: GalleryPhotoUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUncheckedUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileCreateManyInput = {
    id?: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoCreateInput = {
    id?: string
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutPhotosInput
  }

  export type GalleryPhotoUncheckedCreateInput = {
    id?: string
    vendorId: string
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type GalleryPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type GalleryPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoCreateManyInput = {
    id?: string
    vendorId: string
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type GalleryPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateInput = {
    id?: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    couple: UserCreateNestedOneWithoutSentInquiriesInput
    vendor: VendorProfileCreateNestedOneWithoutInquiriesInput
    responses?: InquiryResponseCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUncheckedCreateInput = {
    id?: string
    coupleId: string
    vendorId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: InquiryResponseUncheckedCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutSentInquiriesNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutInquiriesNestedInput
    responses?: InquiryResponseUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: InquiryResponseUncheckedUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryCreateManyInput = {
    id?: string
    coupleId: string
    vendorId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryResponseCreateInput = {
    id?: string
    message: string
    senderRole?: $Enums.Role
    createdAt?: Date | string
    inquiry: InquiryCreateNestedOneWithoutResponsesInput
  }

  export type InquiryResponseUncheckedCreateInput = {
    id?: string
    inquiryId: string
    message: string
    senderRole?: $Enums.Role
    createdAt?: Date | string
  }

  export type InquiryResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inquiry?: InquiryUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type InquiryResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inquiryId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryResponseCreateManyInput = {
    id?: string
    inquiryId: string
    message: string
    senderRole?: $Enums.Role
    createdAt?: Date | string
  }

  export type InquiryResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inquiryId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    body: string
    createdAt?: Date | string
    couple: UserCreateNestedOneWithoutReviewsInput
    vendor: VendorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    coupleId: string
    vendorId: string
    rating: number
    body: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutReviewsNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    coupleId: string
    vendorId: string
    rating: number
    body: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedVendorCreateInput = {
    id?: string
    savedAt?: Date | string
    couple: UserCreateNestedOneWithoutSavedVendorsInput
    vendor: VendorProfileCreateNestedOneWithoutSavedByInput
  }

  export type SavedVendorUncheckedCreateInput = {
    id?: string
    coupleId: string
    vendorId: string
    savedAt?: Date | string
  }

  export type SavedVendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutSavedVendorsNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedVendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedVendorCreateManyInput = {
    id?: string
    coupleId: string
    vendorId: string
    savedAt?: Date | string
  }

  export type SavedVendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedVendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VendorProfileNullableScalarRelationFilter = {
    is?: VendorProfileWhereInput | null
    isNot?: VendorProfileWhereInput | null
  }

  export type SavedVendorListRelationFilter = {
    every?: SavedVendorWhereInput
    some?: SavedVendorWhereInput
    none?: SavedVendorWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput
    some?: InquiryWhereInput
    none?: InquiryWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SavedVendorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumVendorCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorCategory | EnumVendorCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorCategoryFilter<$PrismaModel> | $Enums.VendorCategory
  }

  export type EnumPriceRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceRangeFilter<$PrismaModel> | $Enums.PriceRange
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GalleryPhotoListRelationFilter = {
    every?: GalleryPhotoWhereInput
    some?: GalleryPhotoWhereInput
    none?: GalleryPhotoWhereInput
  }

  export type GalleryPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    businessName?: SortOrder
    category?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    priceRange?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    businessName?: SortOrder
    category?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    priceRange?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    businessName?: SortOrder
    category?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    priceRange?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVendorCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorCategory | EnumVendorCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorCategoryWithAggregatesFilter<$PrismaModel> | $Enums.VendorCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVendorCategoryFilter<$PrismaModel>
    _max?: NestedEnumVendorCategoryFilter<$PrismaModel>
  }

  export type EnumPriceRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceRangeWithAggregatesFilter<$PrismaModel> | $Enums.PriceRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceRangeFilter<$PrismaModel>
    _max?: NestedEnumPriceRangeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VendorProfileScalarRelationFilter = {
    is?: VendorProfileWhereInput
    isNot?: VendorProfileWhereInput
  }

  export type GalleryPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type InquiryResponseListRelationFilter = {
    every?: InquiryResponseWhereInput
    some?: InquiryResponseWhereInput
    none?: InquiryResponseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InquiryResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    message?: SortOrder
    eventDate?: SortOrder
    guestCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryAvgOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    message?: SortOrder
    eventDate?: SortOrder
    guestCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    message?: SortOrder
    eventDate?: SortOrder
    guestCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquirySumOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type InquiryScalarRelationFilter = {
    is?: InquiryWhereInput
    isNot?: InquiryWhereInput
  }

  export type InquiryResponseCountOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    message?: SortOrder
    senderRole?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    message?: SortOrder
    senderRole?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryResponseMinOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    message?: SortOrder
    senderRole?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReviewCoupleIdVendorIdCompoundUniqueInput = {
    coupleId: string
    vendorId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    rating?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    rating?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    rating?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type SavedVendorCoupleIdVendorIdCompoundUniqueInput = {
    coupleId: string
    vendorId: string
  }

  export type SavedVendorCountOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedVendorMaxOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedVendorMinOrderByAggregateInput = {
    id?: SortOrder
    coupleId?: SortOrder
    vendorId?: SortOrder
    savedAt?: SortOrder
  }

  export type VendorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type SavedVendorCreateNestedManyWithoutCoupleInput = {
    create?: XOR<SavedVendorCreateWithoutCoupleInput, SavedVendorUncheckedCreateWithoutCoupleInput> | SavedVendorCreateWithoutCoupleInput[] | SavedVendorUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutCoupleInput | SavedVendorCreateOrConnectWithoutCoupleInput[]
    createMany?: SavedVendorCreateManyCoupleInputEnvelope
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutCoupleInput = {
    create?: XOR<InquiryCreateWithoutCoupleInput, InquiryUncheckedCreateWithoutCoupleInput> | InquiryCreateWithoutCoupleInput[] | InquiryUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutCoupleInput | InquiryCreateOrConnectWithoutCoupleInput[]
    createMany?: InquiryCreateManyCoupleInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCoupleInput = {
    create?: XOR<ReviewCreateWithoutCoupleInput, ReviewUncheckedCreateWithoutCoupleInput> | ReviewCreateWithoutCoupleInput[] | ReviewUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCoupleInput | ReviewCreateOrConnectWithoutCoupleInput[]
    createMany?: ReviewCreateManyCoupleInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VendorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type SavedVendorUncheckedCreateNestedManyWithoutCoupleInput = {
    create?: XOR<SavedVendorCreateWithoutCoupleInput, SavedVendorUncheckedCreateWithoutCoupleInput> | SavedVendorCreateWithoutCoupleInput[] | SavedVendorUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutCoupleInput | SavedVendorCreateOrConnectWithoutCoupleInput[]
    createMany?: SavedVendorCreateManyCoupleInputEnvelope
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutCoupleInput = {
    create?: XOR<InquiryCreateWithoutCoupleInput, InquiryUncheckedCreateWithoutCoupleInput> | InquiryCreateWithoutCoupleInput[] | InquiryUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutCoupleInput | InquiryCreateOrConnectWithoutCoupleInput[]
    createMany?: InquiryCreateManyCoupleInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCoupleInput = {
    create?: XOR<ReviewCreateWithoutCoupleInput, ReviewUncheckedCreateWithoutCoupleInput> | ReviewCreateWithoutCoupleInput[] | ReviewUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCoupleInput | ReviewCreateOrConnectWithoutCoupleInput[]
    createMany?: ReviewCreateManyCoupleInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type SavedVendorUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<SavedVendorCreateWithoutCoupleInput, SavedVendorUncheckedCreateWithoutCoupleInput> | SavedVendorCreateWithoutCoupleInput[] | SavedVendorUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutCoupleInput | SavedVendorCreateOrConnectWithoutCoupleInput[]
    upsert?: SavedVendorUpsertWithWhereUniqueWithoutCoupleInput | SavedVendorUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: SavedVendorCreateManyCoupleInputEnvelope
    set?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    disconnect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    delete?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    update?: SavedVendorUpdateWithWhereUniqueWithoutCoupleInput | SavedVendorUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: SavedVendorUpdateManyWithWhereWithoutCoupleInput | SavedVendorUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: SavedVendorScalarWhereInput | SavedVendorScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<InquiryCreateWithoutCoupleInput, InquiryUncheckedCreateWithoutCoupleInput> | InquiryCreateWithoutCoupleInput[] | InquiryUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutCoupleInput | InquiryCreateOrConnectWithoutCoupleInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutCoupleInput | InquiryUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: InquiryCreateManyCoupleInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutCoupleInput | InquiryUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutCoupleInput | InquiryUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<ReviewCreateWithoutCoupleInput, ReviewUncheckedCreateWithoutCoupleInput> | ReviewCreateWithoutCoupleInput[] | ReviewUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCoupleInput | ReviewCreateOrConnectWithoutCoupleInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCoupleInput | ReviewUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: ReviewCreateManyCoupleInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCoupleInput | ReviewUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCoupleInput | ReviewUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VendorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type SavedVendorUncheckedUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<SavedVendorCreateWithoutCoupleInput, SavedVendorUncheckedCreateWithoutCoupleInput> | SavedVendorCreateWithoutCoupleInput[] | SavedVendorUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutCoupleInput | SavedVendorCreateOrConnectWithoutCoupleInput[]
    upsert?: SavedVendorUpsertWithWhereUniqueWithoutCoupleInput | SavedVendorUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: SavedVendorCreateManyCoupleInputEnvelope
    set?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    disconnect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    delete?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    update?: SavedVendorUpdateWithWhereUniqueWithoutCoupleInput | SavedVendorUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: SavedVendorUpdateManyWithWhereWithoutCoupleInput | SavedVendorUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: SavedVendorScalarWhereInput | SavedVendorScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<InquiryCreateWithoutCoupleInput, InquiryUncheckedCreateWithoutCoupleInput> | InquiryCreateWithoutCoupleInput[] | InquiryUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutCoupleInput | InquiryCreateOrConnectWithoutCoupleInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutCoupleInput | InquiryUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: InquiryCreateManyCoupleInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutCoupleInput | InquiryUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutCoupleInput | InquiryUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCoupleNestedInput = {
    create?: XOR<ReviewCreateWithoutCoupleInput, ReviewUncheckedCreateWithoutCoupleInput> | ReviewCreateWithoutCoupleInput[] | ReviewUncheckedCreateWithoutCoupleInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCoupleInput | ReviewCreateOrConnectWithoutCoupleInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCoupleInput | ReviewUpsertWithWhereUniqueWithoutCoupleInput[]
    createMany?: ReviewCreateManyCoupleInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCoupleInput | ReviewUpdateWithWhereUniqueWithoutCoupleInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCoupleInput | ReviewUpdateManyWithWhereWithoutCoupleInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVendorProfileInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type GalleryPhotoCreateNestedManyWithoutVendorInput = {
    create?: XOR<GalleryPhotoCreateWithoutVendorInput, GalleryPhotoUncheckedCreateWithoutVendorInput> | GalleryPhotoCreateWithoutVendorInput[] | GalleryPhotoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutVendorInput | GalleryPhotoCreateOrConnectWithoutVendorInput[]
    createMany?: GalleryPhotoCreateManyVendorInputEnvelope
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutVendorInput = {
    create?: XOR<InquiryCreateWithoutVendorInput, InquiryUncheckedCreateWithoutVendorInput> | InquiryCreateWithoutVendorInput[] | InquiryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutVendorInput | InquiryCreateOrConnectWithoutVendorInput[]
    createMany?: InquiryCreateManyVendorInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type SavedVendorCreateNestedManyWithoutVendorInput = {
    create?: XOR<SavedVendorCreateWithoutVendorInput, SavedVendorUncheckedCreateWithoutVendorInput> | SavedVendorCreateWithoutVendorInput[] | SavedVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutVendorInput | SavedVendorCreateOrConnectWithoutVendorInput[]
    createMany?: SavedVendorCreateManyVendorInputEnvelope
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutVendorInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GalleryPhotoUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<GalleryPhotoCreateWithoutVendorInput, GalleryPhotoUncheckedCreateWithoutVendorInput> | GalleryPhotoCreateWithoutVendorInput[] | GalleryPhotoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutVendorInput | GalleryPhotoCreateOrConnectWithoutVendorInput[]
    createMany?: GalleryPhotoCreateManyVendorInputEnvelope
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<InquiryCreateWithoutVendorInput, InquiryUncheckedCreateWithoutVendorInput> | InquiryCreateWithoutVendorInput[] | InquiryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutVendorInput | InquiryCreateOrConnectWithoutVendorInput[]
    createMany?: InquiryCreateManyVendorInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type SavedVendorUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SavedVendorCreateWithoutVendorInput, SavedVendorUncheckedCreateWithoutVendorInput> | SavedVendorCreateWithoutVendorInput[] | SavedVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutVendorInput | SavedVendorCreateOrConnectWithoutVendorInput[]
    createMany?: SavedVendorCreateManyVendorInputEnvelope
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumVendorCategoryFieldUpdateOperationsInput = {
    set?: $Enums.VendorCategory
  }

  export type EnumPriceRangeFieldUpdateOperationsInput = {
    set?: $Enums.PriceRange
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutVendorProfileNestedInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    upsert?: UserUpsertWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorProfileInput, UserUpdateWithoutVendorProfileInput>, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type GalleryPhotoUpdateManyWithoutVendorNestedInput = {
    create?: XOR<GalleryPhotoCreateWithoutVendorInput, GalleryPhotoUncheckedCreateWithoutVendorInput> | GalleryPhotoCreateWithoutVendorInput[] | GalleryPhotoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutVendorInput | GalleryPhotoCreateOrConnectWithoutVendorInput[]
    upsert?: GalleryPhotoUpsertWithWhereUniqueWithoutVendorInput | GalleryPhotoUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: GalleryPhotoCreateManyVendorInputEnvelope
    set?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    disconnect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    delete?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    update?: GalleryPhotoUpdateWithWhereUniqueWithoutVendorInput | GalleryPhotoUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: GalleryPhotoUpdateManyWithWhereWithoutVendorInput | GalleryPhotoUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutVendorNestedInput = {
    create?: XOR<InquiryCreateWithoutVendorInput, InquiryUncheckedCreateWithoutVendorInput> | InquiryCreateWithoutVendorInput[] | InquiryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutVendorInput | InquiryCreateOrConnectWithoutVendorInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutVendorInput | InquiryUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: InquiryCreateManyVendorInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutVendorInput | InquiryUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutVendorInput | InquiryUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type SavedVendorUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SavedVendorCreateWithoutVendorInput, SavedVendorUncheckedCreateWithoutVendorInput> | SavedVendorCreateWithoutVendorInput[] | SavedVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutVendorInput | SavedVendorCreateOrConnectWithoutVendorInput[]
    upsert?: SavedVendorUpsertWithWhereUniqueWithoutVendorInput | SavedVendorUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SavedVendorCreateManyVendorInputEnvelope
    set?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    disconnect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    delete?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    update?: SavedVendorUpdateWithWhereUniqueWithoutVendorInput | SavedVendorUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SavedVendorUpdateManyWithWhereWithoutVendorInput | SavedVendorUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SavedVendorScalarWhereInput | SavedVendorScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorInput | ReviewUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorInput | ReviewUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorInput | ReviewUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GalleryPhotoUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<GalleryPhotoCreateWithoutVendorInput, GalleryPhotoUncheckedCreateWithoutVendorInput> | GalleryPhotoCreateWithoutVendorInput[] | GalleryPhotoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutVendorInput | GalleryPhotoCreateOrConnectWithoutVendorInput[]
    upsert?: GalleryPhotoUpsertWithWhereUniqueWithoutVendorInput | GalleryPhotoUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: GalleryPhotoCreateManyVendorInputEnvelope
    set?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    disconnect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    delete?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    update?: GalleryPhotoUpdateWithWhereUniqueWithoutVendorInput | GalleryPhotoUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: GalleryPhotoUpdateManyWithWhereWithoutVendorInput | GalleryPhotoUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<InquiryCreateWithoutVendorInput, InquiryUncheckedCreateWithoutVendorInput> | InquiryCreateWithoutVendorInput[] | InquiryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutVendorInput | InquiryCreateOrConnectWithoutVendorInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutVendorInput | InquiryUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: InquiryCreateManyVendorInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutVendorInput | InquiryUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutVendorInput | InquiryUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type SavedVendorUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SavedVendorCreateWithoutVendorInput, SavedVendorUncheckedCreateWithoutVendorInput> | SavedVendorCreateWithoutVendorInput[] | SavedVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SavedVendorCreateOrConnectWithoutVendorInput | SavedVendorCreateOrConnectWithoutVendorInput[]
    upsert?: SavedVendorUpsertWithWhereUniqueWithoutVendorInput | SavedVendorUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SavedVendorCreateManyVendorInputEnvelope
    set?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    disconnect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    delete?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    connect?: SavedVendorWhereUniqueInput | SavedVendorWhereUniqueInput[]
    update?: SavedVendorUpdateWithWhereUniqueWithoutVendorInput | SavedVendorUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SavedVendorUpdateManyWithWhereWithoutVendorInput | SavedVendorUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SavedVendorScalarWhereInput | SavedVendorScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorInput | ReviewUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorInput | ReviewUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorInput | ReviewUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VendorProfileCreateNestedOneWithoutPhotosInput = {
    create?: XOR<VendorProfileCreateWithoutPhotosInput, VendorProfileUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutPhotosInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type VendorProfileUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<VendorProfileCreateWithoutPhotosInput, VendorProfileUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutPhotosInput
    upsert?: VendorProfileUpsertWithoutPhotosInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutPhotosInput, VendorProfileUpdateWithoutPhotosInput>, VendorProfileUncheckedUpdateWithoutPhotosInput>
  }

  export type UserCreateNestedOneWithoutSentInquiriesInput = {
    create?: XOR<UserCreateWithoutSentInquiriesInput, UserUncheckedCreateWithoutSentInquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInquiriesInput
    connect?: UserWhereUniqueInput
  }

  export type VendorProfileCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<VendorProfileCreateWithoutInquiriesInput, VendorProfileUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutInquiriesInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type InquiryResponseCreateNestedManyWithoutInquiryInput = {
    create?: XOR<InquiryResponseCreateWithoutInquiryInput, InquiryResponseUncheckedCreateWithoutInquiryInput> | InquiryResponseCreateWithoutInquiryInput[] | InquiryResponseUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryResponseCreateOrConnectWithoutInquiryInput | InquiryResponseCreateOrConnectWithoutInquiryInput[]
    createMany?: InquiryResponseCreateManyInquiryInputEnvelope
    connect?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
  }

  export type InquiryResponseUncheckedCreateNestedManyWithoutInquiryInput = {
    create?: XOR<InquiryResponseCreateWithoutInquiryInput, InquiryResponseUncheckedCreateWithoutInquiryInput> | InquiryResponseCreateWithoutInquiryInput[] | InquiryResponseUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryResponseCreateOrConnectWithoutInquiryInput | InquiryResponseCreateOrConnectWithoutInquiryInput[]
    createMany?: InquiryResponseCreateManyInquiryInputEnvelope
    connect?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InquiryStatus
  }

  export type UserUpdateOneRequiredWithoutSentInquiriesNestedInput = {
    create?: XOR<UserCreateWithoutSentInquiriesInput, UserUncheckedCreateWithoutSentInquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInquiriesInput
    upsert?: UserUpsertWithoutSentInquiriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInquiriesInput, UserUpdateWithoutSentInquiriesInput>, UserUncheckedUpdateWithoutSentInquiriesInput>
  }

  export type VendorProfileUpdateOneRequiredWithoutInquiriesNestedInput = {
    create?: XOR<VendorProfileCreateWithoutInquiriesInput, VendorProfileUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutInquiriesInput
    upsert?: VendorProfileUpsertWithoutInquiriesInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutInquiriesInput, VendorProfileUpdateWithoutInquiriesInput>, VendorProfileUncheckedUpdateWithoutInquiriesInput>
  }

  export type InquiryResponseUpdateManyWithoutInquiryNestedInput = {
    create?: XOR<InquiryResponseCreateWithoutInquiryInput, InquiryResponseUncheckedCreateWithoutInquiryInput> | InquiryResponseCreateWithoutInquiryInput[] | InquiryResponseUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryResponseCreateOrConnectWithoutInquiryInput | InquiryResponseCreateOrConnectWithoutInquiryInput[]
    upsert?: InquiryResponseUpsertWithWhereUniqueWithoutInquiryInput | InquiryResponseUpsertWithWhereUniqueWithoutInquiryInput[]
    createMany?: InquiryResponseCreateManyInquiryInputEnvelope
    set?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    disconnect?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    delete?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    connect?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    update?: InquiryResponseUpdateWithWhereUniqueWithoutInquiryInput | InquiryResponseUpdateWithWhereUniqueWithoutInquiryInput[]
    updateMany?: InquiryResponseUpdateManyWithWhereWithoutInquiryInput | InquiryResponseUpdateManyWithWhereWithoutInquiryInput[]
    deleteMany?: InquiryResponseScalarWhereInput | InquiryResponseScalarWhereInput[]
  }

  export type InquiryResponseUncheckedUpdateManyWithoutInquiryNestedInput = {
    create?: XOR<InquiryResponseCreateWithoutInquiryInput, InquiryResponseUncheckedCreateWithoutInquiryInput> | InquiryResponseCreateWithoutInquiryInput[] | InquiryResponseUncheckedCreateWithoutInquiryInput[]
    connectOrCreate?: InquiryResponseCreateOrConnectWithoutInquiryInput | InquiryResponseCreateOrConnectWithoutInquiryInput[]
    upsert?: InquiryResponseUpsertWithWhereUniqueWithoutInquiryInput | InquiryResponseUpsertWithWhereUniqueWithoutInquiryInput[]
    createMany?: InquiryResponseCreateManyInquiryInputEnvelope
    set?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    disconnect?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    delete?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    connect?: InquiryResponseWhereUniqueInput | InquiryResponseWhereUniqueInput[]
    update?: InquiryResponseUpdateWithWhereUniqueWithoutInquiryInput | InquiryResponseUpdateWithWhereUniqueWithoutInquiryInput[]
    updateMany?: InquiryResponseUpdateManyWithWhereWithoutInquiryInput | InquiryResponseUpdateManyWithWhereWithoutInquiryInput[]
    deleteMany?: InquiryResponseScalarWhereInput | InquiryResponseScalarWhereInput[]
  }

  export type InquiryCreateNestedOneWithoutResponsesInput = {
    create?: XOR<InquiryCreateWithoutResponsesInput, InquiryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: InquiryCreateOrConnectWithoutResponsesInput
    connect?: InquiryWhereUniqueInput
  }

  export type InquiryUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<InquiryCreateWithoutResponsesInput, InquiryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: InquiryCreateOrConnectWithoutResponsesInput
    upsert?: InquiryUpsertWithoutResponsesInput
    connect?: InquiryWhereUniqueInput
    update?: XOR<XOR<InquiryUpdateToOneWithWhereWithoutResponsesInput, InquiryUpdateWithoutResponsesInput>, InquiryUncheckedUpdateWithoutResponsesInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type VendorProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<VendorProfileCreateWithoutReviewsInput, VendorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutReviewsInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<VendorProfileCreateWithoutReviewsInput, VendorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutReviewsInput
    upsert?: VendorProfileUpsertWithoutReviewsInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutReviewsInput, VendorProfileUpdateWithoutReviewsInput>, VendorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutSavedVendorsInput = {
    create?: XOR<UserCreateWithoutSavedVendorsInput, UserUncheckedCreateWithoutSavedVendorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedVendorsInput
    connect?: UserWhereUniqueInput
  }

  export type VendorProfileCreateNestedOneWithoutSavedByInput = {
    create?: XOR<VendorProfileCreateWithoutSavedByInput, VendorProfileUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutSavedByInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedVendorsNestedInput = {
    create?: XOR<UserCreateWithoutSavedVendorsInput, UserUncheckedCreateWithoutSavedVendorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedVendorsInput
    upsert?: UserUpsertWithoutSavedVendorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedVendorsInput, UserUpdateWithoutSavedVendorsInput>, UserUncheckedUpdateWithoutSavedVendorsInput>
  }

  export type VendorProfileUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<VendorProfileCreateWithoutSavedByInput, VendorProfileUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutSavedByInput
    upsert?: VendorProfileUpsertWithoutSavedByInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutSavedByInput, VendorProfileUpdateWithoutSavedByInput>, VendorProfileUncheckedUpdateWithoutSavedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVendorCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorCategory | EnumVendorCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorCategoryFilter<$PrismaModel> | $Enums.VendorCategory
  }

  export type NestedEnumPriceRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceRangeFilter<$PrismaModel> | $Enums.PriceRange
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumVendorCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorCategory | EnumVendorCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorCategory[] | ListEnumVendorCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorCategoryWithAggregatesFilter<$PrismaModel> | $Enums.VendorCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVendorCategoryFilter<$PrismaModel>
    _max?: NestedEnumVendorCategoryFilter<$PrismaModel>
  }

  export type NestedEnumPriceRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceRangeWithAggregatesFilter<$PrismaModel> | $Enums.PriceRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceRangeFilter<$PrismaModel>
    _max?: NestedEnumPriceRangeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorProfileCreateWithoutUserInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoCreateNestedManyWithoutVendorInput
    inquiries?: InquiryCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoUncheckedCreateNestedManyWithoutVendorInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutUserInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
  }

  export type SavedVendorCreateWithoutCoupleInput = {
    id?: string
    savedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutSavedByInput
  }

  export type SavedVendorUncheckedCreateWithoutCoupleInput = {
    id?: string
    vendorId: string
    savedAt?: Date | string
  }

  export type SavedVendorCreateOrConnectWithoutCoupleInput = {
    where: SavedVendorWhereUniqueInput
    create: XOR<SavedVendorCreateWithoutCoupleInput, SavedVendorUncheckedCreateWithoutCoupleInput>
  }

  export type SavedVendorCreateManyCoupleInputEnvelope = {
    data: SavedVendorCreateManyCoupleInput | SavedVendorCreateManyCoupleInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutCoupleInput = {
    id?: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutInquiriesInput
    responses?: InquiryResponseCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUncheckedCreateWithoutCoupleInput = {
    id?: string
    vendorId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: InquiryResponseUncheckedCreateNestedManyWithoutInquiryInput
  }

  export type InquiryCreateOrConnectWithoutCoupleInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutCoupleInput, InquiryUncheckedCreateWithoutCoupleInput>
  }

  export type InquiryCreateManyCoupleInputEnvelope = {
    data: InquiryCreateManyCoupleInput | InquiryCreateManyCoupleInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCoupleInput = {
    id?: string
    rating: number
    body: string
    createdAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutCoupleInput = {
    id?: string
    vendorId: string
    rating: number
    body: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutCoupleInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCoupleInput, ReviewUncheckedCreateWithoutCoupleInput>
  }

  export type ReviewCreateManyCoupleInputEnvelope = {
    data: ReviewCreateManyCoupleInput | ReviewCreateManyCoupleInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutUserInput = {
    update: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type VendorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUncheckedUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type SavedVendorUpsertWithWhereUniqueWithoutCoupleInput = {
    where: SavedVendorWhereUniqueInput
    update: XOR<SavedVendorUpdateWithoutCoupleInput, SavedVendorUncheckedUpdateWithoutCoupleInput>
    create: XOR<SavedVendorCreateWithoutCoupleInput, SavedVendorUncheckedCreateWithoutCoupleInput>
  }

  export type SavedVendorUpdateWithWhereUniqueWithoutCoupleInput = {
    where: SavedVendorWhereUniqueInput
    data: XOR<SavedVendorUpdateWithoutCoupleInput, SavedVendorUncheckedUpdateWithoutCoupleInput>
  }

  export type SavedVendorUpdateManyWithWhereWithoutCoupleInput = {
    where: SavedVendorScalarWhereInput
    data: XOR<SavedVendorUpdateManyMutationInput, SavedVendorUncheckedUpdateManyWithoutCoupleInput>
  }

  export type SavedVendorScalarWhereInput = {
    AND?: SavedVendorScalarWhereInput | SavedVendorScalarWhereInput[]
    OR?: SavedVendorScalarWhereInput[]
    NOT?: SavedVendorScalarWhereInput | SavedVendorScalarWhereInput[]
    id?: StringFilter<"SavedVendor"> | string
    coupleId?: StringFilter<"SavedVendor"> | string
    vendorId?: StringFilter<"SavedVendor"> | string
    savedAt?: DateTimeFilter<"SavedVendor"> | Date | string
  }

  export type InquiryUpsertWithWhereUniqueWithoutCoupleInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutCoupleInput, InquiryUncheckedUpdateWithoutCoupleInput>
    create: XOR<InquiryCreateWithoutCoupleInput, InquiryUncheckedCreateWithoutCoupleInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutCoupleInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutCoupleInput, InquiryUncheckedUpdateWithoutCoupleInput>
  }

  export type InquiryUpdateManyWithWhereWithoutCoupleInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutCoupleInput>
  }

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    OR?: InquiryScalarWhereInput[]
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    coupleId?: StringFilter<"Inquiry"> | string
    vendorId?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    eventDate?: DateTimeFilter<"Inquiry"> | Date | string
    guestCount?: IntNullableFilter<"Inquiry"> | number | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCoupleInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCoupleInput, ReviewUncheckedUpdateWithoutCoupleInput>
    create: XOR<ReviewCreateWithoutCoupleInput, ReviewUncheckedCreateWithoutCoupleInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCoupleInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCoupleInput, ReviewUncheckedUpdateWithoutCoupleInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCoupleInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCoupleInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    coupleId?: StringFilter<"Review"> | string
    vendorId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    body?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutVendorProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    savedVendors?: SavedVendorCreateNestedManyWithoutCoupleInput
    sentInquiries?: InquiryCreateNestedManyWithoutCoupleInput
    reviews?: ReviewCreateNestedManyWithoutCoupleInput
  }

  export type UserUncheckedCreateWithoutVendorProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    savedVendors?: SavedVendorUncheckedCreateNestedManyWithoutCoupleInput
    sentInquiries?: InquiryUncheckedCreateNestedManyWithoutCoupleInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type UserCreateOrConnectWithoutVendorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
  }

  export type GalleryPhotoCreateWithoutVendorInput = {
    id?: string
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type GalleryPhotoUncheckedCreateWithoutVendorInput = {
    id?: string
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type GalleryPhotoCreateOrConnectWithoutVendorInput = {
    where: GalleryPhotoWhereUniqueInput
    create: XOR<GalleryPhotoCreateWithoutVendorInput, GalleryPhotoUncheckedCreateWithoutVendorInput>
  }

  export type GalleryPhotoCreateManyVendorInputEnvelope = {
    data: GalleryPhotoCreateManyVendorInput | GalleryPhotoCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutVendorInput = {
    id?: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    couple: UserCreateNestedOneWithoutSentInquiriesInput
    responses?: InquiryResponseCreateNestedManyWithoutInquiryInput
  }

  export type InquiryUncheckedCreateWithoutVendorInput = {
    id?: string
    coupleId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: InquiryResponseUncheckedCreateNestedManyWithoutInquiryInput
  }

  export type InquiryCreateOrConnectWithoutVendorInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutVendorInput, InquiryUncheckedCreateWithoutVendorInput>
  }

  export type InquiryCreateManyVendorInputEnvelope = {
    data: InquiryCreateManyVendorInput | InquiryCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type SavedVendorCreateWithoutVendorInput = {
    id?: string
    savedAt?: Date | string
    couple: UserCreateNestedOneWithoutSavedVendorsInput
  }

  export type SavedVendorUncheckedCreateWithoutVendorInput = {
    id?: string
    coupleId: string
    savedAt?: Date | string
  }

  export type SavedVendorCreateOrConnectWithoutVendorInput = {
    where: SavedVendorWhereUniqueInput
    create: XOR<SavedVendorCreateWithoutVendorInput, SavedVendorUncheckedCreateWithoutVendorInput>
  }

  export type SavedVendorCreateManyVendorInputEnvelope = {
    data: SavedVendorCreateManyVendorInput | SavedVendorCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutVendorInput = {
    id?: string
    rating: number
    body: string
    createdAt?: Date | string
    couple: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutVendorInput = {
    id?: string
    coupleId: string
    rating: number
    body: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput>
  }

  export type ReviewCreateManyVendorInputEnvelope = {
    data: ReviewCreateManyVendorInput | ReviewCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorProfileInput = {
    update: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type UserUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedVendors?: SavedVendorUpdateManyWithoutCoupleNestedInput
    sentInquiries?: InquiryUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUpdateManyWithoutCoupleNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedVendors?: SavedVendorUncheckedUpdateManyWithoutCoupleNestedInput
    sentInquiries?: InquiryUncheckedUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type GalleryPhotoUpsertWithWhereUniqueWithoutVendorInput = {
    where: GalleryPhotoWhereUniqueInput
    update: XOR<GalleryPhotoUpdateWithoutVendorInput, GalleryPhotoUncheckedUpdateWithoutVendorInput>
    create: XOR<GalleryPhotoCreateWithoutVendorInput, GalleryPhotoUncheckedCreateWithoutVendorInput>
  }

  export type GalleryPhotoUpdateWithWhereUniqueWithoutVendorInput = {
    where: GalleryPhotoWhereUniqueInput
    data: XOR<GalleryPhotoUpdateWithoutVendorInput, GalleryPhotoUncheckedUpdateWithoutVendorInput>
  }

  export type GalleryPhotoUpdateManyWithWhereWithoutVendorInput = {
    where: GalleryPhotoScalarWhereInput
    data: XOR<GalleryPhotoUpdateManyMutationInput, GalleryPhotoUncheckedUpdateManyWithoutVendorInput>
  }

  export type GalleryPhotoScalarWhereInput = {
    AND?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
    OR?: GalleryPhotoScalarWhereInput[]
    NOT?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
    id?: StringFilter<"GalleryPhoto"> | string
    vendorId?: StringFilter<"GalleryPhoto"> | string
    url?: StringFilter<"GalleryPhoto"> | string
    publicId?: StringFilter<"GalleryPhoto"> | string
    isPrimary?: BoolFilter<"GalleryPhoto"> | boolean
    createdAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
  }

  export type InquiryUpsertWithWhereUniqueWithoutVendorInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutVendorInput, InquiryUncheckedUpdateWithoutVendorInput>
    create: XOR<InquiryCreateWithoutVendorInput, InquiryUncheckedCreateWithoutVendorInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutVendorInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutVendorInput, InquiryUncheckedUpdateWithoutVendorInput>
  }

  export type InquiryUpdateManyWithWhereWithoutVendorInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutVendorInput>
  }

  export type SavedVendorUpsertWithWhereUniqueWithoutVendorInput = {
    where: SavedVendorWhereUniqueInput
    update: XOR<SavedVendorUpdateWithoutVendorInput, SavedVendorUncheckedUpdateWithoutVendorInput>
    create: XOR<SavedVendorCreateWithoutVendorInput, SavedVendorUncheckedCreateWithoutVendorInput>
  }

  export type SavedVendorUpdateWithWhereUniqueWithoutVendorInput = {
    where: SavedVendorWhereUniqueInput
    data: XOR<SavedVendorUpdateWithoutVendorInput, SavedVendorUncheckedUpdateWithoutVendorInput>
  }

  export type SavedVendorUpdateManyWithWhereWithoutVendorInput = {
    where: SavedVendorScalarWhereInput
    data: XOR<SavedVendorUpdateManyMutationInput, SavedVendorUncheckedUpdateManyWithoutVendorInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutVendorInput, ReviewUncheckedUpdateWithoutVendorInput>
    create: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutVendorInput, ReviewUncheckedUpdateWithoutVendorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutVendorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutVendorInput>
  }

  export type VendorProfileCreateWithoutPhotosInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    inquiries?: InquiryCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutPhotosInput = {
    id?: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inquiries?: InquiryUncheckedCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutPhotosInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutPhotosInput, VendorProfileUncheckedCreateWithoutPhotosInput>
  }

  export type VendorProfileUpsertWithoutPhotosInput = {
    update: XOR<VendorProfileUpdateWithoutPhotosInput, VendorProfileUncheckedUpdateWithoutPhotosInput>
    create: XOR<VendorProfileCreateWithoutPhotosInput, VendorProfileUncheckedCreateWithoutPhotosInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutPhotosInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutPhotosInput, VendorProfileUncheckedUpdateWithoutPhotosInput>
  }

  export type VendorProfileUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    inquiries?: InquiryUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inquiries?: InquiryUncheckedUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutSentInquiriesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    savedVendors?: SavedVendorCreateNestedManyWithoutCoupleInput
    reviews?: ReviewCreateNestedManyWithoutCoupleInput
  }

  export type UserUncheckedCreateWithoutSentInquiriesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    savedVendors?: SavedVendorUncheckedCreateNestedManyWithoutCoupleInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type UserCreateOrConnectWithoutSentInquiriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInquiriesInput, UserUncheckedCreateWithoutSentInquiriesInput>
  }

  export type VendorProfileCreateWithoutInquiriesInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    photos?: GalleryPhotoCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutInquiriesInput = {
    id?: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoUncheckedCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutInquiriesInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutInquiriesInput, VendorProfileUncheckedCreateWithoutInquiriesInput>
  }

  export type InquiryResponseCreateWithoutInquiryInput = {
    id?: string
    message: string
    senderRole?: $Enums.Role
    createdAt?: Date | string
  }

  export type InquiryResponseUncheckedCreateWithoutInquiryInput = {
    id?: string
    message: string
    senderRole?: $Enums.Role
    createdAt?: Date | string
  }

  export type InquiryResponseCreateOrConnectWithoutInquiryInput = {
    where: InquiryResponseWhereUniqueInput
    create: XOR<InquiryResponseCreateWithoutInquiryInput, InquiryResponseUncheckedCreateWithoutInquiryInput>
  }

  export type InquiryResponseCreateManyInquiryInputEnvelope = {
    data: InquiryResponseCreateManyInquiryInput | InquiryResponseCreateManyInquiryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentInquiriesInput = {
    update: XOR<UserUpdateWithoutSentInquiriesInput, UserUncheckedUpdateWithoutSentInquiriesInput>
    create: XOR<UserCreateWithoutSentInquiriesInput, UserUncheckedCreateWithoutSentInquiriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInquiriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInquiriesInput, UserUncheckedUpdateWithoutSentInquiriesInput>
  }

  export type UserUpdateWithoutSentInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    savedVendors?: SavedVendorUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUpdateManyWithoutCoupleNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    savedVendors?: SavedVendorUncheckedUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type VendorProfileUpsertWithoutInquiriesInput = {
    update: XOR<VendorProfileUpdateWithoutInquiriesInput, VendorProfileUncheckedUpdateWithoutInquiriesInput>
    create: XOR<VendorProfileCreateWithoutInquiriesInput, VendorProfileUncheckedCreateWithoutInquiriesInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutInquiriesInput, VendorProfileUncheckedUpdateWithoutInquiriesInput>
  }

  export type VendorProfileUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    photos?: GalleryPhotoUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUncheckedUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type InquiryResponseUpsertWithWhereUniqueWithoutInquiryInput = {
    where: InquiryResponseWhereUniqueInput
    update: XOR<InquiryResponseUpdateWithoutInquiryInput, InquiryResponseUncheckedUpdateWithoutInquiryInput>
    create: XOR<InquiryResponseCreateWithoutInquiryInput, InquiryResponseUncheckedCreateWithoutInquiryInput>
  }

  export type InquiryResponseUpdateWithWhereUniqueWithoutInquiryInput = {
    where: InquiryResponseWhereUniqueInput
    data: XOR<InquiryResponseUpdateWithoutInquiryInput, InquiryResponseUncheckedUpdateWithoutInquiryInput>
  }

  export type InquiryResponseUpdateManyWithWhereWithoutInquiryInput = {
    where: InquiryResponseScalarWhereInput
    data: XOR<InquiryResponseUpdateManyMutationInput, InquiryResponseUncheckedUpdateManyWithoutInquiryInput>
  }

  export type InquiryResponseScalarWhereInput = {
    AND?: InquiryResponseScalarWhereInput | InquiryResponseScalarWhereInput[]
    OR?: InquiryResponseScalarWhereInput[]
    NOT?: InquiryResponseScalarWhereInput | InquiryResponseScalarWhereInput[]
    id?: StringFilter<"InquiryResponse"> | string
    inquiryId?: StringFilter<"InquiryResponse"> | string
    message?: StringFilter<"InquiryResponse"> | string
    senderRole?: EnumRoleFilter<"InquiryResponse"> | $Enums.Role
    createdAt?: DateTimeFilter<"InquiryResponse"> | Date | string
  }

  export type InquiryCreateWithoutResponsesInput = {
    id?: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    couple: UserCreateNestedOneWithoutSentInquiriesInput
    vendor: VendorProfileCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateWithoutResponsesInput = {
    id?: string
    coupleId: string
    vendorId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryCreateOrConnectWithoutResponsesInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutResponsesInput, InquiryUncheckedCreateWithoutResponsesInput>
  }

  export type InquiryUpsertWithoutResponsesInput = {
    update: XOR<InquiryUpdateWithoutResponsesInput, InquiryUncheckedUpdateWithoutResponsesInput>
    create: XOR<InquiryCreateWithoutResponsesInput, InquiryUncheckedCreateWithoutResponsesInput>
    where?: InquiryWhereInput
  }

  export type InquiryUpdateToOneWithWhereWithoutResponsesInput = {
    where?: InquiryWhereInput
    data: XOR<InquiryUpdateWithoutResponsesInput, InquiryUncheckedUpdateWithoutResponsesInput>
  }

  export type InquiryUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutSentInquiriesNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    savedVendors?: SavedVendorCreateNestedManyWithoutCoupleInput
    sentInquiries?: InquiryCreateNestedManyWithoutCoupleInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    savedVendors?: SavedVendorUncheckedCreateNestedManyWithoutCoupleInput
    sentInquiries?: InquiryUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type VendorProfileCreateWithoutReviewsInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    photos?: GalleryPhotoCreateNestedManyWithoutVendorInput
    inquiries?: InquiryCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoUncheckedCreateNestedManyWithoutVendorInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutVendorInput
    savedBy?: SavedVendorUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutReviewsInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutReviewsInput, VendorProfileUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    savedVendors?: SavedVendorUpdateManyWithoutCoupleNestedInput
    sentInquiries?: InquiryUpdateManyWithoutCoupleNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    savedVendors?: SavedVendorUncheckedUpdateManyWithoutCoupleNestedInput
    sentInquiries?: InquiryUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type VendorProfileUpsertWithoutReviewsInput = {
    update: XOR<VendorProfileUpdateWithoutReviewsInput, VendorProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<VendorProfileCreateWithoutReviewsInput, VendorProfileUncheckedCreateWithoutReviewsInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutReviewsInput, VendorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    photos?: GalleryPhotoUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUncheckedUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutVendorNestedInput
    savedBy?: SavedVendorUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutSavedVendorsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    sentInquiries?: InquiryCreateNestedManyWithoutCoupleInput
    reviews?: ReviewCreateNestedManyWithoutCoupleInput
  }

  export type UserUncheckedCreateWithoutSavedVendorsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    sentInquiries?: InquiryUncheckedCreateNestedManyWithoutCoupleInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCoupleInput
  }

  export type UserCreateOrConnectWithoutSavedVendorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedVendorsInput, UserUncheckedCreateWithoutSavedVendorsInput>
  }

  export type VendorProfileCreateWithoutSavedByInput = {
    id?: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    photos?: GalleryPhotoCreateNestedManyWithoutVendorInput
    inquiries?: InquiryCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutSavedByInput = {
    id?: string
    userId: string
    slug: string
    businessName: string
    category: $Enums.VendorCategory
    location: string
    bio: string
    priceRange: $Enums.PriceRange
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoUncheckedCreateNestedManyWithoutVendorInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutSavedByInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutSavedByInput, VendorProfileUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedVendorsInput = {
    update: XOR<UserUpdateWithoutSavedVendorsInput, UserUncheckedUpdateWithoutSavedVendorsInput>
    create: XOR<UserCreateWithoutSavedVendorsInput, UserUncheckedCreateWithoutSavedVendorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedVendorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedVendorsInput, UserUncheckedUpdateWithoutSavedVendorsInput>
  }

  export type UserUpdateWithoutSavedVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    sentInquiries?: InquiryUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUpdateManyWithoutCoupleNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    sentInquiries?: InquiryUncheckedUpdateManyWithoutCoupleNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCoupleNestedInput
  }

  export type VendorProfileUpsertWithoutSavedByInput = {
    update: XOR<VendorProfileUpdateWithoutSavedByInput, VendorProfileUncheckedUpdateWithoutSavedByInput>
    create: XOR<VendorProfileCreateWithoutSavedByInput, VendorProfileUncheckedCreateWithoutSavedByInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutSavedByInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutSavedByInput, VendorProfileUncheckedUpdateWithoutSavedByInput>
  }

  export type VendorProfileUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    photos?: GalleryPhotoUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    category?: EnumVendorCategoryFieldUpdateOperationsInput | $Enums.VendorCategory
    location?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    priceRange?: EnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUncheckedUpdateManyWithoutVendorNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type SavedVendorCreateManyCoupleInput = {
    id?: string
    vendorId: string
    savedAt?: Date | string
  }

  export type InquiryCreateManyCoupleInput = {
    id?: string
    vendorId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyCoupleInput = {
    id?: string
    vendorId: string
    rating: number
    body: string
    createdAt?: Date | string
  }

  export type SavedVendorUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedVendorUncheckedUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedVendorUncheckedUpdateManyWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutInquiriesNestedInput
    responses?: InquiryResponseUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: InquiryResponseUncheckedUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateManyWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutCoupleInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoCreateManyVendorInput = {
    id?: string
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type InquiryCreateManyVendorInput = {
    id?: string
    coupleId: string
    message: string
    eventDate: Date | string
    guestCount?: number | null
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedVendorCreateManyVendorInput = {
    id?: string
    coupleId: string
    savedAt?: Date | string
  }

  export type ReviewCreateManyVendorInput = {
    id?: string
    coupleId: string
    rating: number
    body: string
    createdAt?: Date | string
  }

  export type GalleryPhotoUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutSentInquiriesNestedInput
    responses?: InquiryResponseUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: InquiryResponseUncheckedUpdateManyWithoutInquiryNestedInput
  }

  export type InquiryUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedVendorUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutSavedVendorsNestedInput
  }

  export type SavedVendorUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedVendorUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couple?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    coupleId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryResponseCreateManyInquiryInput = {
    id?: string
    message: string
    senderRole?: $Enums.Role
    createdAt?: Date | string
  }

  export type InquiryResponseUpdateWithoutInquiryInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryResponseUncheckedUpdateWithoutInquiryInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryResponseUncheckedUpdateManyWithoutInquiryInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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