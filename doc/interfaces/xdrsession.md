[@paloaltonetworks/pan-cortex-xdr](../README.md) › [XdrSession](xdrsession.md)

# Interface: XdrSession

## Hierarchy

* **XdrSession**

## Index

### Properties

* [apiKey](xdrsession.md#apikey)
* [close](xdrsession.md#close)
* [h2session](xdrsession.md#h2session)
* [refreshSession](xdrsession.md#refreshsession)

### Methods

* [del](xdrsession.md#del)
* [get](xdrsession.md#get)
* [post](xdrsession.md#post)
* [put](xdrsession.md#put)

## Properties

###  apiKey

• **apiKey**: *[ApiKey](../README.md#apikey)*

Defined in src/http2client.ts:74

___

###  close

• **close**: *function*

Defined in src/http2client.ts:75

#### Type declaration:

▸ (): *Promise‹void›*

___

###  h2session

• **h2session**: *ClientHttp2Session | undefined*

Defined in src/http2client.ts:72

___

###  refreshSession

• **refreshSession**: *function*

Defined in src/http2client.ts:73

#### Type declaration:

▸ (): *Promise‹void›*

## Methods

###  del

▸ **del**<**R**, **E**>(`path`: string, `eBldr`: [ErrBldr](../README.md#errbldr)‹E›, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:77

**Type parameters:**

▪ **R**

▪ **E**: *[GeneralXdrError](../README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`eBldr` | [ErrBldr](../README.md#errbldr)‹E› |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  get

▸ **get**<**R**, **E**>(`path`: string, `eBldr`: [ErrBldr](../README.md#errbldr)‹E›, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:76

**Type parameters:**

▪ **R**

▪ **E**: *[GeneralXdrError](../README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`eBldr` | [ErrBldr](../README.md#errbldr)‹E› |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  post

▸ **post**<**T**, **R**, **E**>(`path`: string, `eBldr`: [ErrBldr](../README.md#errbldr)‹E›, `data`: T, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:78

**Type parameters:**

▪ **T**

▪ **R**

▪ **E**: *[GeneralXdrError](../README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`eBldr` | [ErrBldr](../README.md#errbldr)‹E› |
`data` | T |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*

___

###  put

▸ **put**<**T**, **R**, **E**>(`path`: string, `eBldr`: [ErrBldr](../README.md#errbldr)‹E›, `data`: T, `opts?`: http2.ClientSessionRequestOptions): *Promise‹object›*

Defined in src/http2client.ts:79

**Type parameters:**

▪ **T**

▪ **R**

▪ **E**: *[GeneralXdrError](../README.md#generalxdrerror)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`eBldr` | [ErrBldr](../README.md#errbldr)‹E› |
`data` | T |
`opts?` | http2.ClientSessionRequestOptions |

**Returns:** *Promise‹object›*
