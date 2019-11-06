# BOTML

## 介绍

机器人标记语言(botml)是一种用于创建机器人消息的语言，可在词库、欢迎语中使用，在发送时会自动解析。

基本语法：`<标签 属性名1="属性值1" 属性名2="属性值2"/>`

注意：标签中的`<`和`/>`一定是**成对**出现的，不要漏了标签结束的`/`。

## 常用标签

### at

标签：`<at />`

解释：@某人。

| 属性 | 解释 | 必填 |
|---|---|---|
| qq | 被at的QQ | 是 |

- 示例1

需求：@875543533

<Chat
:msgList="[
    {
        'msg':'.问：1答：&ltat qq=&quot875543533&quot/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.1',
        'position':'right'
    },
    {
        'msg':'@李政',
        'position':'left'
    }
]"/>

### speech

标签：`<speech />`

解释：自动生成语音。

| 属性 | 解释 | 必填 | 默认 |
|---|---|---|---|
| text | 语音内容 | 是 | 无 |
| voice | 发音人 | 否 | aiqi |
| volume | 音量 | 否 | 50 |
| speech_rate | 音量 | 否 | 语速 |
| pitch_rate | 语调 | 否 | 0 |

- 示例1

需求：生成"123"的语音，音量80

<Chat
:msgList="[
    {
        'msg':'.问：1答：&ltspeech text=&quot123&quot volume=&quot80&quot/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.1',
        'position':'right'
    },
    {
        'msg':'[语音](内容是123，音量是80)',
        'position':'left'
    }
]"/>

### cubepic

标签：`<cubepic />`

解释：自动生成魔方图。

| 属性 | 解释 | 必填 | 默认 |
|---|---|---|---|
| alg | 公式 | 否 | 无 |
| case | 情况 | 否 | 无 |
| pzl | 几阶 | 否 | 3 |
| view | 视角 | 否 | trans |
| bg | 背景色 | 否 | black |
| arw | 箭头 | 否 | 无 |

**alg和case必须选择一个填写。**

**arw表示箭头指向**

以3阶U面为例，U面分为U0,U1,U2,U3,U4,U5,U6,U7,U8

<table>
<tr>
<td>U0</td><td>U1</td><td>U2</td>
</tr>
<tr>
<td>U3</td><td>U4</td><td>U5</td>
</tr>
<tr>
<td>U6</td><td>U7</td><td>U8</td>
</tr>
</table>

arw="U0U1,U3U8"表示两个箭头

1. 第1行第1列->第1行第2列

2. 第2行第1列->第3行第3列


- 示例1

需求：执行`R U R' U'`后，4阶的图

<Chat
:msgList="[
    {
        'msg':'.问：1答：&ltcubepic alg=&quotR U R\' U\'&quot pzl=&quot4&quot/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.1',
        'position':'right'
    },
    {
        'msg':'[图片]',
        'position':'left'
    }
]"/>

- 示例2

需求：执行`R U' R U R U R U' R' U' R2`后，3阶的平面图

<Chat
:msgList="[
    {
        'msg':'.问：1答：&ltcubepic alg=&quotR U\' R U R U R U\' R\' U\' R2&quot view=&quotplan&quot/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.1',
        'position':'right'
    },
    {
        'msg':'[图片]',
        'position':'left'
    }
]"/>

### next

标签：`<next/>`

解释：将消息分为多条发送(最多3条)。

- 示例1

需求：先发送123，再发送456

<Chat
:msgList="[
    {
        'msg':'.问：1答：123&ltnext/&gt456',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.1',
        'position':'right'
    },
    {
        'msg':'123',
        'position':'left'
    },
    {
        'msg':'456',
        'position':'left'
    }
]"/>

### sleep

标签：`<sleep />`

解释：延迟发送消息(单位毫秒，最多5秒)。

| 属性 | 解释 | 必填 | 默认 |
|---|---|---|---|
| time | 时间 | 是 | 无 |

- 示例1

需求：1.5秒后发送123

<Chat
:msgList="[
    {
        'msg':'.问：1答：&ltsleep time=&quot1500&quot/&gt123',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.1',
        'position':'right'
    },
    {
        'msg':'(这里等了1.5秒)',
        'position':'left'
    },
    {
        'msg':'123',
        'position':'left'
    },
]"/>
