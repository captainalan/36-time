const thirty_six = require('./em-time');

test('00:00:00 in emTime is 00:00:00', () => {
    expect(thirty_six.emTime('00:00:00')).toBe('00:00:00');
});

test('00:00:30 in emTime is 00:00:24', () => {
    expect(thirty_six.emTime('00:00:30')).toBe('00:00:24');
});

test('00:01:00 in emTime is 00:00:52', () => {
    expect(thirty_six.emTime('00:01:00')).toBe('00:00:52');
});

test('14:36:31 in emTime is 33:52:51', () => {
    expect(thirty_six.emTime('14:36:31')).toBe('33:52:51');
});

test('02:05:05 in emTime is 03:04:32', () => {
    expect(thirty_six.emTime('02:05:05')).toBe('03:04:32');
});

test('04:10:10 in emTime is 10:13:05', () => {
    expect(thirty_six.emTime('04:10:10')).toBe('10:13:05');
});

test('06:15:15 in emTime is 13:21:42', () => {
    expect(thirty_six.emTime('06:15:15')).toBe('13:21:42');
});

test('08:20:20 in emTime is 20:30:14 ', () => {
    expect(thirty_six.emTime('08:20:20')).toBe('20:30:14');
});

test('10:25:25 in emTime is 23:34:51', () => {
    expect(thirty_six.emTime('10:25:25')).toBe('23:34:51');
});

test('12:30:30 in emTime is 30:43:24 ', () => {
    expect(thirty_six.emTime('12:30:30')).toBe('30:43:24');
});
