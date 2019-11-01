<template>
    <div class="chat">
        <section>
            <div v-for="msg in msgList" class="bubble-wrapper" :class="msg.position">
                <div class="bubble">
                    <p v-html="msg.msg.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;')"></p>
                </div>
            </div>
        </section>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Chat",
        props: {
            msgList: {
                type: Array,
                default: () => {
                    return [
                        {
                            "position": "right",
                            "msg": ".赛事 1"
                        },
                        {
                            "position": "left",
                            "msg": "2019WCA泉州魔方公开赛\n2019-08-25\n福建泉州丰泽区东海大街嘉吉北路1号东海湾实验学校大礼堂\nhttps://cubingchina.com/competition/Quanzhou-Open-2019"
                        },
                        {
                            "position": "right",
                            "msg": ".赛事 1"
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

    section {
        background-color: #eee;
        width: calc(100% - 10px);
        margin: 17px auto;
        padding: 28px 20px;
        border-radius: 14px;
    }

    section:first-child {
        margin-top: 0;
    }

    section:last-child {
        margin-bottom: 0;
    }

    section p {
        line-height: 1.5;
    }

    section h2 {
        margin-top: 0;
    }

    section p:last-child {
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
