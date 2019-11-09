# 开关

## 介绍

本功能可以控制 整体停用启用 或 单个功能停用启用。

本功能的所有功能名字是目录中的名字，字母全部是**小写**。

## 使用方法

### 整体启用

指令：`.启用回复`

解释：启用整体。

权限：群主/管理员。

<Chat
:msgList="[
    {
        'msg':'.启用回复',
        'position':'right'
    },
    {
        'msg':'启用成功',
        'position':'left'
    }
]"/>

### 整体停用

指令：`.停用回复`

解释：停用整体。

权限：群主/管理员。

<Chat
:msgList="[
    {
        'msg':'.停用回复',
        'position':'right'
    },
    {
        'msg':'停用成功',
        'position':'left'
    }
]"/>

### 启用某功能

指令：`.启用{功能名称}`

解释：启用功能。

权限：群主/管理员。

<Chat
:msgList="[
    {
        'msg':'.启用打乱',
        'position':'right'
    },
    {
        'msg':'启用成功',
        'position':'left'
    },
    {
        'msg':'.启用学习',
        'position':'right'
    },
    {
        'msg':'启用成功',
        'position':'left'
    }
]"/>

### 停用某功能

指令：`.停用{功能名称}`

解释：停用功能。

权限：群主/管理员。

<Chat
:msgList="[
    {
        'msg':'.停用打乱',
        'position':'right'
    },
    {
        'msg':'停用成功',
        'position':'left'
    },
    {
        'msg':'.停用学习',
        'position':'right'
    },
    {
        'msg':'停用成功',
        'position':'left'
    }
]"/>
