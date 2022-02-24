'use strict';
const fs = require('fs');
const todo = require('./index.js');
const assert = require('assert');

fs.unlink('./tasks.json', err => {
  // ファイルが削除されなかった場合
  if (err) {
    // ERRログを出力して処理を抜ける
    console.error(err);
    return false;
  }

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
});
