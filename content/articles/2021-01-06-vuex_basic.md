---
title: Vuex 基本概念
description: Vue 的狀態管理模式 Vuex
img: https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vue_icon_130078.png
alt: vue
createdAt: 2021-01-06 20:34:05 +0800
tags:
  - vue
---

# Vuex

狀態管理模式，可以集中管理所有組件狀態，並且能使狀態以可預測的方式變化，從 Vue devtools extension 可觀察。

## 安裝

NPM

```bash
npm install vuex --save
```

yarn

```bash
yarn add vuex
```

引入：

src/main.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

（NUXT.js 直接內建 store，不需要另外安裝）

## 狀態管理

- 狀態單向模式

原本的狀態是放在各自的檔案中，這樣的單向數據模式包括：

- state：狀態的來源
- view：狀態的顯示
- actions：使用者與狀態互動產生的變化

<img src="https://vuex.vuejs.org/flow.png" width="50%" height="50%" />
<!-- ![image alt](https://vuex.vuejs.org/flow.png) -->

但多個組件共享狀態會變得很複雜且難以維護，所以就把狀態抽出來，借鑑於 Redux、flux、The Elm Architecture，寫出專給 Vue 用的狀態管理模式 Vuex，適用於需要更好的共用及管理狀態的大型專案。

### Vuex 狀態共用模式

Vuex 共用狀態的核心就是 store，可以想像就是放置狀態的倉庫（綠色虛線），物流過程如下：

<img src="https://vuex.vuejs.org/vuex.png" width="85%" height="85%" />
<!-- ![Vuex 概念圖](https://vuex.vuejs.org/vuex.png) -->

1. 當組件需要狀態回應時，會向 store 發出狀態調度(dispach)請求給 Actions。
2. Actions 接到的狀態索取或變更，來源除了組件外，也能來自後端或其他 API，也可以在這調用非同步 API。
3. Actions 送出索取及變更描述(commit)給 Mutations，告知什麼時候需要狀態及狀態改變。
4. Mutations 可以做狀態改變，同時可以使用 Vue Devtools 觀察到狀態變化。
5. Mutations 將變化(mutate)傳給 State。
6. State 將狀態傳給組件，讓組件可以調用渲染(render)

（要完成一個 store 的狀態顯示至少要有 state 和 mutations）

## 核心概念

### Store 核心概念

store 在檔案中的結構：

- state：狀態來源
- getters：將各 state 統一做計算處理，類似於 vue 的 computed，store 的計算屬性
- mutations：狀態變更
- actions：類似於 mutation，但不直接變更狀態，而是接收需求及非同步事件
- modules：將 store 分類、模組化
