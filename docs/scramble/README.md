# 打乱

## 介绍

本功能可以根据发出的指令给出魔方的打乱公式，方便群内多人PK。

指令和魔方种类对应如下：

| 指令 | 魔方种类 |
|---|---|
| .2 | 2阶魔方 |
| .3 | 3阶魔方 |
| .4 | 4阶魔方 |
| .5 | 5阶魔方 |
| .py | 金字塔魔方 |
| .sk | 斜转魔方 |
| .cl | 魔表魔方 |
| .sq | SQ1魔方 |

## 使用方法

### 获取2阶魔方打乱

指令：`.2`
    
解释：获取2阶魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.2',
        'position':'right'
    },
    {
        'msg':'2阶\nU\' R\' F\' U2 F U R\' F U\' R U',
        'position':'left'
    }
]"/>


### 获取3阶魔方打乱

指令：`.3`
    
解释：获取3阶魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.3',
        'position':'right'
    },
    {
        'msg':'3阶\nU2 R2 B2 U2 R2 B L2 B2 R\' B\' F\' D\' B2 R F\' D\' U\' B2 L\'',
        'position':'left'
    }
]"/>

### 获取4阶魔方打乱

指令：`.4`
    
解释：获取4阶魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.4',
        'position':'right'
    },
    {
        'msg':'4阶\nB2 D2 F\' D2 B\' U2 F2 D F\' R\' B\' F2 R2 F U\' L2 F2 L2 Fw2 R\' F\' Rw2 D2 F L B\' Rw2 D2 R B Uw L\' F2 Uw\' L2 Uw2 Rw U Fw\' B Rw2 Uw\' R\'',
        'position':'left'
    }
]"/>


### 获取5阶魔方打乱

指令：`.5`
    
解释：获取5阶魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.5',
        'position':'right'
    },
    {
        'msg':'5阶\nU\' Fw\' L Bw\' F\' U2 Fw Lw\' Dw\' Fw Lw\' R2 Bw\' Lw L2 Dw L2 B Dw\' Fw\' D\' F Dw2 F\' U Dw\' R Fw B2 L Rw Lw B\' Uw D2 F2 Fw2 D Dw2 R Lw Uw Bw2 B Fw\' D2 L R Rw F\' Bw B\' Lw U2 Dw2 Bw2 B\' Dw2 U Bw2',
        'position':'left'
    }
]"/>

### 获取金字塔魔方打乱

指令：`.py`
    
解释：获取金字塔魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.py',
        'position':'right'
    },
    {
        'msg':'pyram\nU R\' B\' U\' R\' B R L U\' R\' U u b',
        'position':'left'
    }
]"/>

### 获取斜转魔方打乱

指令：`.sk`
    
解释：获取斜转魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.sk',
        'position':'right'
    },
    {
        'msg':'skewb\nL U B\' L R\' U\' B U\' R U B',
        'position':'left'
    }
]"/>

### 获取魔表魔方打乱

指令：`.cl`
    
解释：获取魔表魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.cl',
        'position':'right'
    },
    {
        'msg':'clock\nUR5- DR3+ DL2- UL1+ U2+ R5+ D3+ L6+ ALL5- y2 U5- R1+ D6+ L2- ALL4- DR',
        'position':'left'
    }
]"/>

### 获取SQ-1魔方打乱

指令：`.sq`
    
解释：获取SQ-1魔方打乱。
    
<Chat
:msgList="[
    {
        'msg':'.sq',
        'position':'right'
    },
    {
        'msg':'sq1\n(4,3) / (-3,0) / (0,3) / (-3,-3) / (-1,-4) / (-2,0) / (-3,0) / (-1,0) / (-2,-3) / (3,0) / (4,0) / (0,-3) / (-2,0)',
        'position':'left'
    }
]"/>
