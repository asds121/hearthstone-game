[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/base.types](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\> = `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

Defined in: [src/types/base.types.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/base.types.ts#L44)

## Type Parameters

### T

`T`
