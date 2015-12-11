/* eslint-disable max-len */
import tape from 'tape';
import convert from '../index';

tape('smart-encoding-convert', (t) => {
    // detected: encoding = KOI8-R, confidence = 0.38
    const strGbk = '测试';
    const rawGbk = '\xb2\xe2\xca\xd4';

    // detected: encoding = Big5, confidence = 0.99
    const strBig5 = '次常用國字標準字體表';
    const rawBig5 = '\xA6\xB8\xB1\x60\xA5\xCE\xB0\xEA\xA6\x72\xBC\xD0\xB7\xC7\xA6\x72\xC5\xE9\xAA\xED';

    t.equal(strBig5, convert(rawBig5).toString(), 'no parameters with fallback');
    t.equal(strGbk, convert(rawGbk, { from: 'gb2312' }).toString(), 'from encoding');
    t.equal(strGbk, convert(rawGbk, { from: 'gb2312', to: 'utf8' }).toString('utf8'), 'to encoding');
    t.equal(strGbk, convert(rawGbk, { mightFrom: 'gb2312' }).toString(), 'mightFrom');

    t.notEqual(strGbk, convert(rawGbk, { minConfidence: 0.2, mightFrom: 'gb2312' }).toString(), 'minConfidence');

    t.end();
});
