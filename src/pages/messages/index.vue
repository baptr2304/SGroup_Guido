<script setup>
import MessageList from '@/components/Message/MessageList.vue';
</script>
<template>
    <div>
        <div :class="$style.iconSearch">
            <el-icon>
                <Search />
            </el-icon>
        </div>
        <MessageList />
    </div>
</template>
<style lang="scss" module>
    .iconSearch{
        color: red;
    }
</style>