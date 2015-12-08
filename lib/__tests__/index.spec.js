/* eslint-disable max-len */
import tape from 'tape';
import convert from '../index';

tape('gb2312', (t) => {
    const str = '测试';
    const raw = '\xb2\xe2\xca\xd4';

    t.equal(str, convert(raw, { from: 'gb2312' }).toString());
    t.equal(str, convert(raw, { mightFrom: 'gb2312' }).toString());
    t.notEqual(str, convert(raw, { minConfidence: 0.2 }).toString());

    t.equal(true, convert(raw, { to: 'utf-8' }).isEncoding('utf8'));
});
