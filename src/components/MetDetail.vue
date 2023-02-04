<template>
    <div class="met">
        <slot name="user-avatar"></slot>
        <div>
            <slot name="user-name"></slot>
            <slot name="date-created"></slot>
        </div>
        <slot name="username"></slot>
        <div class="user-message">
            <slot name="message"></slot>
            <slot name="kudos"></slot>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MetDetail',

    props: {
        postedBy: {type: Object, required: true},
        image: {type: String},
        message: {type: String, required: true},
        kudos: {type: Number, required: true},
        dateCreated: {type: Date, required: true},
    },

    setup() {


        return {}
    }



})
</script>




<style scoped>

</style>
