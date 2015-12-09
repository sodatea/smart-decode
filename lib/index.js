/* eslint-disable no-magic-numbers, no-param-reassign */
import encoding from 'encoding';
import jschardet from 'jschardet';

function convert(buf, {
    minConfidence = 0.96,
    mightFrom = 'utf-8',
    to = 'utf-8',
    from
}) {
    if (!from) {
        const detected = jschardet.detect(buf);
        from = detected.confidence > minConfidence ? detected.encoding : mightFrom;
    }

    return encoding.convert(buf, to, from);
}

export default convert;
