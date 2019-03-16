var I18N = {
    'numberToString': function(num) {
        return ('' + num).split('')
            .map(function(c) {
                return '0123456789' [c];
            }).join('');
    },
    'tileText': function(value) {
        var text = "           ";
        var log2 = function(n) {
            var ret = 0;
            while (n > 1) ret++, n >>= 1;
            return ret;
        }
        return text[log2(value)] || '';
    },
    'won': '沙漏都给你～',
    'lose': '薯片被吃完了！',
}