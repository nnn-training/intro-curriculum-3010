'use strict';
// const todo = require('./index.js');
const assert = require('assert');

// テストの前に永続化されているファイルを消す
const fs = require('fs');
fs.unlinkSync('./tasks.json'); // ファイルを消す(JSON内に記載されているリストを削除している)
// unlinkSync後に index.js を読み込ませるというのが出てきませんでした。
const todo = require('./index.js');


// add と list のテスト
todo.add('ノートを買う');
todo.add('鉛筆を買う');
assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

// done と donelist のテスト
todo.done('鉛筆を買う');
assert.deepStrictEqual(todo.list(), ['ノートを買う']);
assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う']);

// del のテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.donelist(), []);

console.log('テストが正常に完了しました');
