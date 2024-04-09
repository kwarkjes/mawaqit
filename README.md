# Mawaqit Client

## Usage

First make sure to install the dependecy `npm install mawaqit`

### How to get your API access token

All the mawaqit API communication requires an access token. Therefore you need to fetch yours before you can make any calls

```javascript

import { Client } from 'mawaqit';

const client = new Client();
const token = await client.login('your-email-address@example.com','yourTopSecretPassword');
console.log('YOUR TOKEN IS =>', token);
// outputs: aabaaed1-11bb-2222-accc-abcd1234efgh
```

### Use your API access token

Now that you have saved your token someowhere safe, you can pass it to the client to start making calls

```javascript

import { Client } from 'mawaqit';

const { getMosquesByCountryCode } = new Client('aabaaed1-11bb-2222-accc-abcd1234efgh');
const dutchMosques = await getMosquesByCountryCode('NL');

console.log(dutchMosques)
```

## What's wrapped?

### `getPrayerTimeByMosqueUUID`

#### params
- `uuid`: the uuid of the mosque you want to fetch

#### Example

```javascript
const { getPrayerTimeByMosqueUUID } = new Client('aabaaed1-11bb-2222-accc-abcd1234efgh');
const mosqueArrahmaan = await getPrayerTimeByMosqueUUID('ab52acf6-dc6a-4bc6-b9f7-184b7f874bf1');
```

-------

### `getWeatherByMosqueUUID`

#### params
- `uuid`: the uuid of the mosque you want to fetch the weather for

#### Example

```javascript
const { getWeatherByMosqueUUID } = new Client('aabaaed1-11bb-2222-accc-abcd1234efgh');
const weatherMosqueArrahmaan = await getWeatherByMosqueUUID('ab52acf6-dc6a-4bc6-b9f7-184b7f874bf1');
```

-------

### `getMosquesByCoordinates`

#### params
- `coordinates`: an object with the structure `{ lon: 'xxx', lat: 'yyy' }`

#### Example

```javascript
const { getMosquesByCoordinates } = new Client('aabaaed1-11bb-2222-accc-abcd1234efgh');
const mosquesInMyArea = await getMosquesByCoordinates({ lon: '5.403610', lat: '51.421310' });
```

-------

### `getMosquesByCountryCode`

#### params
- `countryCode`: a string that represents a country code (exampes: 'NL', 'FR', 'MA', 'US')

#### Example

```javascript
const { getMosquesByCountryCode } = new Client('aabaaed1-11bb-2222-accc-abcd1234efgh');
const mosquesInTheUSA = await getMosquesByCountryCode('Us');
```
