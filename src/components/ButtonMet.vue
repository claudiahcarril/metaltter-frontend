<template>
    <button type="submit" @click="(click)" class="btn btn-outline-success">
        <slot name="left-icon"></slot>
        <slot name="right-text"></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'ButtonMet',
    setup() {
        const click = ref<string>('');
        return{
            click,
        }
    }
})
</script>


<style scoped>

.btn-outline-success {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background-color: black;
    border: none;
    height: 25px;
    min-width: 95px;
    padding: 10px 15px 10px 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    color: white;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
}


.btn-outline-success:hover {
    transform: scale(1.1);
}


.btn-outline-success:active {
    background-color: white;
    color: black;
}

</style>