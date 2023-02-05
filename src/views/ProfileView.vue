
<template>
    <NavBarPublic />

    <div>
        {{ user}}
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
import useUsers from '@/composable/useUsers';

export default defineComponent({
    name: 'ProfilePublic',
    components: {
        NavBarPublic,
    },

    props: {
        id: {
            type: String,
            required: true
        },
    },
    
    setup(props) {
        const { user, fetchUserById } = useUsers()
        console.log(props.id)
        
        fetchUserById(props.id)
        console.log(user)


        return {
            user,
            

        }
    }

    
})
</script>

