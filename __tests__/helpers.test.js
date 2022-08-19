const {format_date} = require('../views/utils/helpers');
const {format_plural, format_url} = require("../views/utils/helpers");

test('format_date() returns a date string', () => {
    const date = new Date('03/20/2020 16:12:03');

    expect(format_date(date)).toBe('03-20-2020 16:12:03');
});

test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);

    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://ww.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});