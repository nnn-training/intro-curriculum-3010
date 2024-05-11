'use strict';
const assert = require('node:assert');
const test = require('node:test');

//　テストの前に永続化されているファイルを消す
const fs = require('node:fs');
fs.unlinkSync('./tasks.json');
const todo = require('./index.js');

test('addとlistのテスト', () => {
  todo.add('ノートを買う');
  todo.add('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
});

test('doneとdonelistのテスト', () => {
  todo.done('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う']);
  assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う']);
});

test('delのテスト', () => {
  todo.del('ノートを買う');
  todo.del('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), []);
  assert.deepStrictEqual(todo.donelist(), []);
});

console.log('テストが正常に完了しました');