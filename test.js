//********  ＜練習問題＞ fs.unlink()を使ったコード *********//

//jsonファイルをテストの前に削除する処理を追加（削除した場合も元々存在しない場合も同期的にコールバック関数に渡され、index.jsを読み込む）
'use strict';
const assert = require('assert');
const fs = require('fs');　　　　　　 　 //ファイルシステムのモジュールの読み込み
fs.unlink('./tasks.json', err => {  　 //unlink(path,callback関数)は第一引数に削除するファイルへのパス、第二引数はファイルが存在しない時のエラーオブジェクト
  const todo = require('./index.js');　//jsonファイルが存在しない場合、index.jsを読み込む

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

//********** ＜練習問題＞unlinkSync()と try-finally文を使ったコード（動作確認済み）***********//

'use strict';
const assert = require('assert');
const fs = require('fs');
try {
  fs.unlinkSync('./tasks.json');  //ファイルを削除する関数（引数はファイルへのパス）
} finally {                       //削除でもエラーでもindex.jsを読み込みたいのでcatch()を書かずfinallyのみ
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
};