# smart-encoding

Inspired by [buffer-encoding](https://github.com/fritx/buffer-encoding), but with clearer interface and `minConfidence` support.

## Install

`npm install smart-decode`

## Usage

```javascript
import fs from 'fs';
import convert from 'smart-encoding';

var buf = fs.readFileSync('someFile');

var buf1 = convert(buf);
var buf2 = convert(buf, { minConfidence: 0.96, mightFrom: 'gb2312'});
var buf3 = convert(buf, { from: 'gb2312', to: 'utf-8' });
```

```typescript
convert: (buf: Buffer, opts: ConvertOptions) => Buffer
```

## Options

- `minConfidence`: If [jschardet](https://github.com/aadsm/jschardet/) detects a buffer with confidence less than `minConfidence`, the detected encoding would be overridden by the `mightFrom` options. Default is `0.96`.
- `mightFrom`: If the detected confidence is less than `minConfidence`, it will use this option as the incoming buffer's encoding. Default is `utf-8`.
- `to`: To which encoding the original buffer should convert. Default is `utf-8`.
- `from`: If present, there would be no auto-detect process and this option would be set as the incoming buffer's encoding. Default is `undefined`.
