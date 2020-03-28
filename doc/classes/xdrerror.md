[@paloaltonetworks/pan-cortex-xdr](../README.md) › [XdrError](xdrerror.md)

# Class: XdrError <**E**>

## Type parameters

▪ **E**: *[GeneralXdrError](../README.md#generalxdrerror)*

## Hierarchy

* [Error](xdrerror.md#static-error)

  ↳ **XdrError**

## Index

### Constructors

* [constructor](xdrerror.md#constructor)

### Properties

* [api](xdrerror.md#api)
* [message](xdrerror.md#message)
* [name](xdrerror.md#name)
* [reply](xdrerror.md#optional-reply)
* [stack](xdrerror.md#optional-stack)
* [status_code](xdrerror.md#status_code)
* [Error](xdrerror.md#static-error)

## Constructors

###  constructor

\+ **new XdrError**(`api`: [XdrApis](../README.md#xdrapis), `msg`: string, `status_code`: number, `err?`: E): *[XdrError](xdrerror.md)*

Defined in src/xdrerror.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`api` | [XdrApis](../README.md#xdrapis) |
`msg` | string |
`status_code` | number |
`err?` | E |

**Returns:** *[XdrError](xdrerror.md)*

## Properties

###  api

• **api**: *[XdrApis](../README.md#xdrapis)*

Defined in src/xdrerror.ts:52

___

###  message

• **message**: *string*

*Inherited from [XdrError](xdrerror.md).[message](xdrerror.md#message)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [XdrError](xdrerror.md).[name](xdrerror.md#name)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` reply

• **reply**? : *E*

Defined in src/xdrerror.ts:53

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [XdrError](xdrerror.md).[stack](xdrerror.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status_code

• **status_code**: *number*

Defined in src/xdrerror.ts:54

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984
