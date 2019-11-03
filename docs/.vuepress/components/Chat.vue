<template>
    <div class="chat">
        <div v-for="msg in msgList" class="bubble-wrapper" :class="msg.position">
            <div class="bubble">
                <p v-html="msg.msg.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;')"></p>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Chat",
        props: {
            // TODO 怎么传参
            msgList: {
                type: Array,
                default: () => {
                    return [
                        {
                            "position": "right",
                            "msg": "启用功能1"
                        },
                        {
                            "position": "left",
                            "msg": "启用成功"
                        },
                        {
                            "position": "right",
                            "msg": "停用功能1"
                        },
                        {
                            "position": "left",
                            "msg": "停用成功"
                        }
                    ]
                }
            }
        }
    };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    .chat {
        background-color: #eee;
        width: calc(100% - 10px);
        margin: 17px auto;
        padding: 28px 20px;
        border-radius: 14px;
    }

    .chat:first-child {
        margin-top: 0;
    }

    .chat:last-child {
        margin-bottom: 0;
    }

    .chat p {
        line-height: 1.5;
    }

    .chat h2 {
        margin-top: 0;
    }

    .chat p:last-child {
        margin: 0;
    }


    .bubble-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 18px;
        margin-bottom: 18px;
    }

    .bubble-wrapper:first-child {
        margin-top: 0;
    }

    .bubble-wrapper:last-child {
        margin-bottom: 0;
    }

    .bubble-wrapper.right {
        align-items: flex-end;
    }

    .bubble {
        min-height: 20px;
        max-width: 80%;
        color: white;
        background-color: #409EFF;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        word-wrap: break-word;
        word-break: break-all;
        padding: 12px 18px;
        border-radius: 3px 14px 14px 14px;
    }

    .bubble-wrapper.right .bubble {
        color: white;
        background-color: #67C23A;
        border-top-left-radius: 14px;
        border-top-right-radius: 3px;
    }

</style>
