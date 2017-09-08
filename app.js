var express = require('express');
var request = require('request');
// var path = require('path');
// var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var http = require('http'); //httpモジュール呼び出し
var server = http.createServer(function (request, response) {
    // リクエストを受けると以下のレスポンスを送信する
    response.writeHead(200, {'Content-Type': 'text/plain'}); //レスポンスヘッダーに書き込み
    response.write('Hello World\n'); // レスポンスボディに「Hello World」を書き込み
    response.end(); // レスポンス送信を完了する
});
server.listen(process.env.PORT || 4400);