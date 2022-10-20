'use strict';
// const todo = require('./index.js');
const assert = require('assert');
const fs = require('fs');
//unlinkSync を用いることで、 非同期処理でも順序を制御し、tasks.json ファイルが削除された後テストを実行できます。
fs.unlinkSync('./tasks.json');
const todo = require('./index.js'); // 削除してから読み込み

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
