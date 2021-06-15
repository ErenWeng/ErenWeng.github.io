---
title: Vue 導入 TypeScript
description: 在 Vue 中使用 TypeScript 的基本認識
img: https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png
alt: javascript
createdAt: 2021-03-05 20:34:05 +0800
tags:
  - vue
  - typescript
---

# Vue3 + TypeScript

## TypeScript 的漸進式型別系統

首先要了解語言的型別系統：

- 動態語言（Dynamically typed）：程式'運行'時，變數的型別會根據值本身來判斷。例：javascript
- 靜態語言（Statically typed）：程式'編譯'時，根據程式裡所宣告的型別來判斷。

而後衍生出了兩者特色的系統：

- 漸進式型別系統（Gradual Typing）：程式'編譯'時，便會自主監控變數型別，那些沒有宣告型別的變數則會在程式裡自行推斷，會在型別錯誤時提出警告。如：TypeScript

## 值得在專案中使用 Typescript 嗎？

這個問題就像每次導入新技術一樣需要評估：

1. 為什麼要使用呢？使用之後要改善什麼？
2. 團隊需要花多少時間學習？
3. 程式碼的量（codebase）有多大？（畢竟大的專案塞這麼多的型別宣告不是一件容易的事情）

## vue + typeScript 的設定起手式：

- 在使用 Vue CLI 時就有 typescript 的選項可以勾選

然後就可以看到多一個檔案 `shims-vue.d.ts`：用來協助 typescript 對 `*.vue` 的支援

- 安裝在已經存在的專案

在終端機跑這行

```bash
`vue add typescript`
```

## 開始使用 TypeScript

- 注意！我要寫 TypeScript 囉

當我們要使用 TypeScript 時，我們需要對每個組件（SFC, single file component）聲明

在 export 的時候要使用 `defineComponent` 方法，並且在 script 加上 `lang="ts"`。

同時注意：因為 TypeScript 不能辨認路徑開頭 `@`，所以在引入 component 時要使用 `..`

```javascript
<script lang="ts">
import { defineComponent } from 'vue'

import EventCard from '../components/EventCard.vue'

export default defineComponent({
  name: 'componentName',
  components: {
    EventCard
  },
  ...
})
</script>
```

## 基本型別介紹

JS common type:

- String
- Number
- Boolean
- Array
- Function
- Object

TS provide type:

- any: 指定為所有型別，基本上跟不要檢查型別是一樣的意思
- tuple: 定義固定數量的一個數組
  （例如：RGB color `[number, number, number]`）
- enum: 以自訂名稱定義數值
  (`enum ArrowKeys { UP = 1, Down = 2, Left = 3, Right = 4 }`)

### string, number, boolean

- 不贅述

### Array

- 你必須注意陣列裡有什麼

```typescript
const list: string[] = ['apples', 'bananas', 'cherries']
```

### Function

- 除了 function 本身，參數也需要宣告型別，所以箭號函式是不能省略括號的

以下寫法都可以，我自己是比較習慣第一種寫法，第二種要把冒號寫在前面時常讓我感到困惑

```typescript
const generateFullName = (firstName: string, lastName: string): string => {
  return firstName + ' ' + lastName
}

const generateFullName: (firstName: string, lastName: string) => string {
  return firstName + ' ' + lastName
}
```

### Object

- TypeScript 宣告的物件長得像是物件，但其實不是，而且注意結尾是使用冒號 `;` 而不是逗號 `,`

```typescript
const person: {
  name: string
  age: number
  activeAvenger: boolean
  powers: string[]
} = {
  name: 'Peter Parker',
  age: 20,
  activeAvenger: true,
  powers: ['wall-crawl', 'spider-sense'],
}
```

## 使用型別別名 (type alias) 和介面(Interface) 來定義型別

- type 的使用可以表示任何型別

```typescript
type buttonType = 'primary'

const buttonStyles: buttonType = 'primary'
```

- 多個 type (using Union Operator | )

```typescript
type buttonType = 'primary' | 'secondary' | 'success' | 'danger'

const buttonStyles: buttonType = 'secondary'
```

- interface 只適用於 Object 型別

```typescript
interface Hero = {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
}

let person: Hero = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense']
}
```

- 可結合 type 和 interfaces

```typescript
type ComicUniverse = 'Marvel' | 'DC'

interface Hero = {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
    universe: ComicUniverse;
}

let person: Hero = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense'],
    universe: 'Marvel'
}
```

## 型別斷言 (type assertion)

1. 看到 ... as xxx，就是「我斷言他出來的結果會是 xxx 型別」，如果變數的結果型別不同就會報錯

```typescript
interface TodoItem {
  label: string
  completed: boolean
}

const futureTodoItem = {} as TodoItem
futureTodoItem.label = 'Install VueDX extension'
futureTodoItem.completed = true
```

2. <型別> 變數，另一個寫法

```typescript
interface TodoItem {
  label: string
  completed: boolean
}

const futureTodoItem = <TodoItem>{}
futureTodoItem.label = 'Install VueDX extension'
futureTodoItem.completed = true
```

## 泛用型別 (<>)

泛用型別可以將型別參數化，以下範例中的 T 如同參數一樣可以是任何東西

```typescript
type TodoItem<T> = <T>
```

---

## 使用範例

### Data 與 custom type

types.ts

```typescript
export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}
```

EventDetails.vue

```typescript
import { EventItem } from '../types'
```

### Props 與 custom type

- 注意：如果需要客製化泛用型別，需要 import PropType

```typescript
import { PropType } from 'vue'
import { EventItem } from '../types'

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
})
```

### Computed 與 custom type

```typescript
import { PropType } from 'vue'
import { EventItem } from '../types'

export default defineComponent({
  data() {
    return {
      events: [] as EventItem[],
    }
  },
  computed: {
    firstEvent(): EventItem {
      return this.events[0]
    },
  },
})
```

### Methods 與 custom type

add type if applicable

```typescript
import { PropType } from 'vue'
import { EventItem } from '../types'

export default defineComponent({
  data() {
    return {
      events: [] as EventItem[],
    }
  },
  methods: {
    addEventItem(newEvent: EventItem) {
      this.events.push(newEvent)
    },
    secondEvent(): EventItem {
      return this.events[1]
    },
  },
})
```

### 在 Vue3 composition API 中使用 typeScript

```typescript
import { defineComponent, reactive, toRefs } from 'vue'
import { TodoItem } from '../types'

export default defineComponent({
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'personal'
      } as TodoItem,
      taskItems: [] as TodoItem[],
      listFilter: 'all'
    })

    const filteredTasks = computed(() => {
      if (state.listFilter === 'complete') {
        return state.taskItems.filter(
          (item: TodoItem) => item.isComplete === true
        )
      } else if (state.listFilter === 'incomplete') {
        return state.taskItems.filter(
          (item: TodoItem) => item.isComplete === false
        )
      } else {
        return state.taskItems
      }
    })

    const addTask = () => {
      state.taskItems.push(state.newTask)
    }

    return {
      ...toRefs(state),
      addTask
      filteredTasks
    }
  }
})
```
