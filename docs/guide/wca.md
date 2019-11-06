# WCA

## 介绍

本功能可以根据`WCA ID`或`关键词`来查询WCA成绩。

## 使用方法
### 根据WCA ID精确查询

指令：`.wca{WCA ID}`
    
解释：查询WCA ID为2016LIZH03的选手。
    
<Chat
:msgList="[
    {
        'msg':'.wca 2016LIZH03',
        'position':'right'
    },
    {
        'msg':'Zheng Li (李政)\n2016LIZH03,China,Male\n333 16.16|19.36\n222 4.30|5.61\n444 1:34.11\n333fm 47\n333oh 20.48|25.82\nclock 21.49|35.01\npyram 6.12|7.84\nskewb 10.05|16.14',
        'position':'left'
    }
]"/>

### 根据关键词查询
    
指令：`.wca{关键词1}{空格}{关键词2}...`

解释：查询名字或ID中包含 `李政`、`2016`、`LIZH`的选手。

::: warning 注意
如果有多个结果，回复前五个人的`WCA ID`和`姓名`
:::

<Chat
:msgList="[
    {
        'msg':'.wca2016 LIZH',
        'position':'right'
    },
    {
        'msg':'11 items\n2016LIZH01|Zhirui Li (李祉睿)\n2016LIZH02|Zhuoliang Li (李卓亮)\n2016LIZH03|Zheng Li (李政)\n2016LIZH04|Zhen Li (李圳)\n2016LIZH05|Zhi Li (李志)\n...',
        'position':'left'
    }
]"/>
    

