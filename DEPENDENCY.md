# 依存関係の例

参考：[プログラムの依存関係とモジュール構成のこと](https://qiita.com/wm3/items/2c90bfd9e973d368ebd8)

## 依存関係 OK パターン

```mermaid
stateDiagram
  direction LR
  main.js --> sub1.js
  sub1.js --> sub2.js
```

```typescript
// main.js
import sub1 from "sub1";  // <=== sub1 に依存

function main() {
      :
}
```

```typescript
// sub1.js
import sub2 from "sub2";  // <=== sub2 に依存

function sub1() {
      :
}
```

```typescript
// sub2.js
function sub2() {
      :
}
```

## 依存関係 NG パターン

```mermaid
stateDiagram
  direction LR
  main.js --> sub1.js
  sub1.js --> sub2.js
  sub2.js --> main.js
```

```typescript
// sub2.js
import main from "main";  // <=== main に依存

function sub2() {
      :
}
```

## 依存関係 OK パターン

```mermaid
stateDiagram
  direction LR
  main.js --> sub1.js
  main.js --> sub2.js
  sub1.js --> sub4.js
  sub2.js --> sub5.js
  sub2.js --> sub3.js
  sub3.js --> sub6.js
```

## 依存関係 NG パターン

```mermaid
stateDiagram
  direction LR
  main.js --> sub1.js
  main.js --> sub2.js
  main.js --> sub3.js
  sub1.js --> sub4.js
  sub2.js --> sub5.js
  sub3.js --> sub6.js
  sub4.js --> sub5.js
  sub6.js --> sub5.js
  sub1.js --> sub2.js
  sub6.js --> main.js
  sub3.js --> sub4.js
  sub5.js --> main.js
  sub4.js --> main.js
```
