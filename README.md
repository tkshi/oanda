# Oanda API sample with Node.js
## Usage
`npm i --save npm install oanda-adapter --save`

Edit `main.js` to set own `ACCESS_TOKEN` and `ACCOUNT_ID`.
`node main.js`

You will get result like this.
```
{ instrument: 'EUR_USD',
  time: Mon Feb 08 2016 13:25:58 GMT+0900 (JST),
  bid: 1.11338,
  ask: 1.11343 }
{ instrument: 'EUR_USD',
  time: Mon Feb 08 2016 13:25:59 GMT+0900 (JST),
  bid: 1.11339,
  ask: 1.11344 }
{ instrument: 'EUR_USD',
  time: Mon Feb 08 2016 13:26:02 GMT+0900 (JST),
  bid: 1.11342,
  ask: 1.11347 }
{ instrument: 'EUR_USD',
  time: Mon Feb 08 2016 13:26:03 GMT+0900 (JST),
  bid: 1.11345,
  ask: 1.1135 }
```

enjoy!
