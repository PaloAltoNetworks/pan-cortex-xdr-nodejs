# XDR PRO API NodeJS/TypeScript Client Library
NodeJS / Javascript / TypeScript language binding for the XDR PRO API

Main use benefits (besides the 1:1 mapping)
* implements the Advanced API KEY nonce process
* auto-completion and type safety if using a TypeScript editor

## Installation
Get the module from the public NPM repository

```bash
npm i @paloaltonetworks/pan-cortex-xdr
```

## The XdrApi object
this object provides namespaces to reach XDR PRO API's
* **IncidentApi**: to deal with incidents and alerts
* **AlertApi**: to push alerts from third party sources
* **EndpointApi**: to interface with endpoints
* **DeviceControlApi**: to manage device control features
* **HashExceptionApi**: to manage file hash exceptions
* **AuditsApi**: to retrieve audit reports
* **DistributionsApi**: to manage endpoint package distributions

## Geting Started
Just obtain a XdrApi object by calling the top level `createXdrApi()` function
export.

### Passing API KEY material from environmental variables
Set the following environmental variables before calling `createXdrApi()`
* `PAN_API_KEY_ID`: API KEY identifier
* `PAN_XDR_FQDN`: FQDN of the XDR PRO instance
* either `PAN_ADV_API_KEY` or `PAN_BASIC_API_KEY` based on the type of API KEY being
  used

### Passing API KEY material explicitly
Use an object with the following attributes as the first argument to
`createXdrApi(data)`
* `apiKey`: string
* `apiKeyId`: string
* `isAdvancedKey`: boolean
* `xdrBaseFqdn`: string

## Code example
TypeScript code example
```typescript
import * as xdr from '@paloaltonetworks/pan-cortex-xdr'

async function main(xdrapi: xdr.XdrApi) {
    const response = await xdrapi.incident.get([{
        field: 'alert_sources',
        operator: 'in',
        value: ['XDR Analytics BIOC']
    }])
    console.log(JSON.stringify(response, undefined, 1))
}

const apiKey = 'JxBIx....GkyG'
const apiKeyId = '18'
const xdrBaseFqdn = 'illicium-industrial.xdr.us.paloaltonetworks.com'

const xdrapi = xdr.createXdrApi({
    apiKey,
    apiKeyId,
    xdrBaseFqdn,
})

main(xdrapi).then(console.log, console.error).finally(xdrapi.close)
```