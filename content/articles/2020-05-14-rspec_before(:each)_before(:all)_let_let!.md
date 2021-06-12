---
title: Rspec 中 before(:each), before(:all), let, let!的區別
description: 幾個 Rails 測試裡容易搞混的方法
img: https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
alt: rails
createdAt: 2020-05-14 16:45:54 +0800
tags:
  - rails
---

## `let` 和 `let!` 的區別

在寫測試時如果遇到需要重複使用的參數，可以用 let 把參數一次寫在最前面

> Note that let is lazy-evaluated (惰性求值) : it is not evaluated until the first time. the method it defines is invoked. You can use let! to force the method's invocation before each example.[Project: RSpec Core 3.9](https://relishapp.com/rspec/rspec-core/v/3-9/docs/helper-methods/let-and-let#use-%60let%60-to-define-memoized-helper-method)

> let creates lazily-evaluated local variables. This means that let() is not evaluated until the method that it formed is run for the first time.[RSpec Let vs Before](https://dzone.com/articles/rspec-let-vs-before)

也就是說兩者差別在於：

- `let`：當參數/變數在某 example 內被呼叫才會觸發

- `let!`：在每個 example 內都會事先觸發

[原始碼](https://github.com/rspec/rspec-core/blob/master/lib/rspec/core/memoized_helpers.rb)

## `before(:each)` 和 `before(:all)`的區別

> before(:example) # run before each example
>
> before(:context) # run one time only, before all of the examples in a group
>
> Note: the :example and :context scopes are also available as :each and :all, respectively. Use whichever you prefer.
>
> [`before` and `after` hooks](https://relishapp.com/rspec/rspec-core/v/3-9/docs/hooks/before-and-after-hooks)

- before(:each) / before(:example)：在每個 example 內都會事先觸發，但不像 let 限於變數的定義

- before(:all) / before(:context)：在所有的 example block 開始前觸發，然而所產生的範圍會影響所有的 specs

[原始碼](https://github.com/rspec/rspec-core/blob/master/lib/rspec/core/hooks.rb)

- 注意：
  不要在 before 的 block 內使用 let，因為這就是 let! 在做的事情
