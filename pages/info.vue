<script lang="ts" setup>

    import { ref, onMounted, computed } from 'vue';;
    import type {HeroObj} from '@/../../interfaces/Common';
    const runtimeConfig = useRuntimeConfig();

    import axios from "axios";

    const getData = async (): Promise<void> => {
        await axios.get('https://jsonplaceholder.typicode.com/todos/').then((res) => {
            console.log(res);
        })
    }

    const apiUrl = ref(runtimeConfig.public.API_KEY);

    onMounted(() => {
        getData();
        console.log(runtimeConfig.public.API_KEY)
    })

    const handleMessage = () => {
        message.info("This is a normal message");
    }

</script>

<template>
    <div class="bg-red-500 mt-10">
        Hello {{ apiUrl }}
        <MyComponent />
        <p>{{ data }}</p>
        <a-button @click="handleMessage">
            button
        </a-button>
        <!-- <p v-for="(item, i) in data.data" :key="i" v-text="item.title"></p> -->
    </div>
</template>