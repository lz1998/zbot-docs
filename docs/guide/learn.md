# 学习

## 介绍

本功能可以设置自定义指令。

[可以使用BOTML语言](/appendices/botml.md)


## 特殊含义表

::: v-pre
内容 | 含义
:---: | :---:
`{{senderId}}` | 发送者QQ
:::

## 使用方法

### 新增/修改指令

指令：`.问：{指令}答：{回复内容}`
    
解释：设置机器人指令。

权限：群主/管理员。

- 示例1

需求：收到`.123`，回复`456`

<Chat
:msgList="[
    {
        'msg':'.问：123答：456',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.123',
        'position':'right'
    },
    {
        'msg':'456',
        'position':'left'
    }
]"/>


- 示例2

需求：收到`.at我`，自动@发送者

<Chat
:msgList="[
    {
        'msg':'.问：at我答：&ltat qq=&quot{{senderId}}&quot/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.at我',
        'position':'right'
    },
    {
        'msg':'@发送者',
        'position':'left'
    }
]"/>

### 设置指令不回复

指令：`.问：{指令}答：<null/>`
    
解释：设置指令不回复。

权限：群主/管理员。

<Chat
:msgList="[
    {
        'msg':'.问：cfop答：&ltnull/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.cfop',
        'position':'right'
    }
]"/>



### 指令恢复默认

指令：`.问：{指令}答：<default/>`
    
解释：指令恢复默认。

权限：群主/管理员。

<Chat
:msgList="[
    {
        'msg':'.问：cfop答：&ltdefault/&gt',
        'position':'right'
    },
    {
        'msg':'已学会',
        'position':'left'
    },
    {
        'msg':'.cfop',
        'position':'right'
    },
    {
        'msg':'[图片(默认cfop)]',
        'position':'left'
    }
]"/>

## 执行顺序说明

1. 收到一条指令，查询本群指令库
2. 如果指令没有设置，或设置为`<default/>`，查询默认设置
3. 如果设置为`<null/>`，不发送
4. 替换回复中的特殊含义
5. 解析botxml
6. 发送消息
