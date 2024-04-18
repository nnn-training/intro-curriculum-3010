'use strict';
// task.jsファイルをtasksBackUpに内容保管してから削除
const fs = require('node:fs');
const fileName = './tasks.json';
const tasksBackUp = JSON.parse(fs.readFileSync(fileName, 'utf8'));
fs.unlinkSync(fileName);

const todo = require('./index.js');
const assert = require('node:assert');
const test = require('node:test');

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

// tasksBackUpの内容をtask.jsファイルに復元（遅延無しだとindex.jsに[]を上書きされる？）
setTimeout( () => {fs.writeFileSync(fileName, JSON.stringify(tasksBackUp), 'utf8')}, 100);