/* eslint-disable max-len */
import tape from 'blue-tape';
import convert from '../index';

tape('gb2312', (t) => {
    const str = '测试';
    const raw = '\xb2\xe2\xca\xd4';

    t.equal(str, convert(raw, { from: 'gb2312' }).toString(), 'from encoding');
    t.equal(str, convert(raw, { mightFrom: 'gb2312' }).toString(), 'mightFrom');
    t.notEqual(str, convert(raw, { minConfidence: 0.2 }).toString(), 'minConfidence');

    t.equal(str, convert(raw, { from: 'gb2312', to: 'utf8' }).toString('utf8'), 'to encoding');

    t.end();
});
