# 欢迎

## 介绍

本功能可以设置新人入群时自动发送的消息。

[可以使用BOTML语言](/appendices/botml.md)


## 特殊含义表

::: v-pre
内容 | 含义
:---: | :---:
`{{userId}}` | 进群者QQ
`{{operatorId}}` | 批准者QQ
:::

## 使用方法

### 设置欢迎

指令：`.设置欢迎{内容}`
    
解释：设置新人入群时自动发送的消息。

权限：群主/管理员。
    
<Chat
:msgList="[
    {
        'msg':'.设置欢迎&ltat qq=&quot{{userId}}&quot/&gt欢迎大佬',
        'position':'right'
    },
    {
        'msg':'设置成功',
        'position':'left'
    }
]"/>

### 查看欢迎

指令：`.查看欢迎`
    
解释：测试查看欢迎，如有使用特殊含义，进群者QQ和审批者QQ都是发送者。

权限：群主/管理员。
    
<Chat
:msgList="[
    {
        'msg':'.查看欢迎',
        'position':'right'
    },
    {
        'msg':'@进群者 欢迎大佬',
        'position':'left'
    }
]"/>

