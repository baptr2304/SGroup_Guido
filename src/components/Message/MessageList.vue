<script setup lang="ts">
const user = {
    avt: 'https://i.pinimg.com/736x/74/f4/f5/74f4f548392fbdafbe8a5d9764c83eaf.jpg',
}
const messages = [
    {
        id: 1,
        avt: '',
        sender: 'Nguyễn Văn A',
        infoJob: 'Hướng dẫn viên địa phương, theo giờ, tại điểm,',
        content: 'Hello, how are you?',
        timestamp: new Date(),
        status: true,
    },
    {
        id: 2,
        avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBXJakNG_BstBpXFy9S4bjeX8r7F58dGxn4-TS7uP9A&s',
        sender: 'Nguyễn Văn B',
        infoJob: 'Hướng dẫn viên tại điểm',
        content: 'im okayy, im fine , kìn chá na, kìn cha na, teng neng neng neng neng ',
        timestamp: new Date(),
        status: true,
    },
    {
        id: 3,
        avt: 'https://i.imgflip.com/2/7llvbo.jpg',
        sender: 'Nguyễn Văn C',
        infoJob: 'Hướng dẫn viên tại điểm',
        content: 'ku mê na han ra sa sa kítt',
        timestamp: new Date(),
        status: true,
    },
    {
        id: 4,
        avt: 'https://i.imgflip.com/2/6vv897.jpg',
        sender: 'Nguyễn Văn D',
        infoJob: 'Hướng dẫn viên tại điểm',
        content: 'ku mê na han ra sa sa kítt',
        timestamp: new Date(),
        status: false,
    },
    {
        id: 5,
        avt: '',
        sender: 'Nguyễn Văn E',
        infoJob: 'Hướng dẫn viên tại điểm',
        content: 'ku mê na han ra sa sa kítt',
        timestamp: new Date(),
        status: false,
    },
    {
        id: 6,
        avt: '',
        sender: 'Nguyễn Văn F',
        infoJob: 'Hướng dẫn viên tại điểm',
        content: 'ku mê na han ra sa sa kítt',
        timestamp: new Date(),
        status: false,
    },
    {
        id: 7,
        avt: '',
        sender: 'Nguyễn Văn G',
        infoJob: 'Hướng dẫn viên tại điểm',
        content: 'ku mê na han ra sa sa kítt',
        timestamp: new Date(),
        status: false,
    },

]

function formatTimestamp(timestamp: Date): string {
    const date = timestamp.getDate()
    const month = timestamp.getMonth() + 1
    const year = timestamp.getFullYear()
    return `${date}/${month}/${year}`
}
function getSenderAvt(message:
    {
        avt: string
        sender: string
    }): string {
    if (message.avt) {
        return message.avt
    }
    else {
        const words = message.sender.split(' ')
        return message.sender.charAt(0) + words[words.length - 1].charAt(0)
    }
}
</script>

<template>
    <div :class="$style.messageListWrapper">
        <div :class="$style.messageListHeader">
            <div :class="$style.messageBtn">
                <img :class="$style.messageUserAvt" :src="user.avt" alt="">
                <div :class="$style.messageBtnAdd">
                    <div :class="$style.iconPlus">
                        <el-icon>
                            <Plus />
                        </el-icon>
                    </div>
                </div>
            </div>
            <div :class="$style.messageTitleHeader">
                Messages
            </div>
            <div :class="$style.messageSearch">
                <div :class="$style.messageSearchBox">
                    <div :class="$style.iconSearch">
                        <el-icon>
                            <Search />
                        </el-icon>
                    </div>

                    <input type="text" placeholder="Search">
                </div>
                <div :class="$style.messageFilterBtn">
                    <!-- icon filter -->
                </div>
            </div>
        </div>
        <div :class="$style.messageListBody">
            <div v-for="message in messages" :key="message.id" :class="$style.messageListItem">
                <div :class="$style.messageItem">
                    <div :class="$style.messageItemAvt">
                        <div :class="$style.senderAvtContainer">
                            <div :class="$style.senderStatus">
                                <div v-if="message.status === true" :class="$style.statusActive" />
                                <div v-else="message.status = false" :class="$style.statusAbsent" />
                            </div>
                            <div :class="$style.senderAvt">
                                <img v-if="message.avt" :src="getSenderAvt(message)" alt="Avatar"
                                    :class="$style.senderAvtImage">
                                <div v-else="message.avt = ''" :class="$style.senderAvtText">
                                    {{ getSenderAvt(message) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.messageItemInfo">
                        <div :class="$style.infoSender">
                            {{ message.sender }}
                        </div>
                        <div :class="$style.infoJob">
                            {{ message.infoJob }}
                        </div>
                        <div :class="$style.infoMessage">
                            <div :class="$style.senderName">
                                {{ message.sender }}:&nbsp;
                            </div>
                            <div :class="$style.content">
                                {{ message.content }}
                            </div>
                        </div>
                    </div>
                    <div :class="$style.messageItemDate">
                        {{ formatTimestamp(message.timestamp) }}
                    </div>
                </div>
                <div :class="$style.line" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.messageListWrapper {}

.messageListHeader {
    padding: 1.5rem 1rem;
}

.messageBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.messageUserAvt {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}

.messageBtnAdd {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: solid var(--color-primary) 1px;
    cursor: pointer;
    transition-duration: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--color-primary);
    }
}

.iconPlus {
    color: var(--color-primary);
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
        color: white;
    }
}

.messageTitleHeader {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 0;
    color: var(--color-primary-dark);
}

.messageSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.messageSearchBox {
    width: 83%;
    border-radius: 9999px;
    padding: 0.5rem;
    background-color: #fff;
    border: 1px solid #a7c6e6;
    transition: .15s ease-in-out;
    cursor: text;
    display: flex;

    &:hover {
        border: solid 1px var(--color-primary);
    }

    input {
        border: none;
        outline: none;
        background-color: #ffff;

        &::placeholder {
            color: #a4aec6;
        }
    }


}

.iconSearch {
    width: 1rem;
    height: 1rem;
    color: #a4aec6;
}

.messageFilterBtn {
    cursor: pointer;
    transition-duration: 300ms;
    outline: none;
    border-radius: 50%;
    box-sizing: border-box;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    border: solid var(--color-primary) 1px;

    &:hover {
        background-color: var(--color-primary);
    }
}

.messageListBody {}

.messageListItem {
    display: flex;
    flex-direction: column;
}

.messageItem {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.messageItemAvt {
    width: 22%;
    padding-left: 1rem;
    box-sizing: border-box;
    display: flex;
}

.senderAvtContainer {
    position: relative;
    width: 3.125rem;
    height: 3.125rem;

}

.senderAvt {}

.senderAvtImage {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    margin: auto;
}

.senderAvtText {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    background-color: var(--color-primary-light);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: white;
}

.senderStatus {
    position: absolute;
    top: 0;
    left: 0;
}

.statusActive {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: green;
    border: #ffffff 2px solid;
}

.statusAbsent {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: rgb(195, 219, 195);
    border: #ffffff 2px solid;
}

.messageItemInfo {
    width: 58%;
    font-size: 0.875rem;
}

.infoSender {
    font-size: 1rem;
    color: var(--color-primary-dark);
    font-weight: 600;
}

.infoJob {
    color: #a2c1dd;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-top: 0.3rem;
}

.infoMessage {
    display: flex;
    margin-top: 0.3rem;
    color: #6992b5;
}

.senderName {
    white-space: nowrap;
}

.content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.messageItemDate {
    width: 20%;
    align-self: flex-start;
    font-size: 0.875rem;
    color: #a2c1dd;
    padding-right: 1rem;
}

.line {
    border-bottom: 0.5px solid #dcdee1;
    width: 78%;
    align-self: flex-end;
    margin: 0.625rem 0;
}
</style>
