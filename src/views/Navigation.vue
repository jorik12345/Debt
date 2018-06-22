<template>
    <div class="text-xs-center">
        <v-bottom-nav :value="true" absolute color="transparent" shift>
        <v-badge color="blue" overlap>
            <span slot="badge">{{ debts.length }}</span>
            <v-btn flat color="teal" href="#/">
                <span>Debts</span>
                <v-icon>list</v-icon>
            </v-btn>
        </v-badge>
        <v-btn flat color="teal" href="#/adddebt">
            <span>Add Debt</span>
            <v-icon>add</v-icon>
        </v-btn>
        <v-btn flat color="teal" href="#/users">
            <span>Users</span>
            <v-icon>person</v-icon>
        </v-btn>
        </v-bottom-nav>
    </div>
</template>

<script>
import { db } from '../firebase'

export default {
    name: 'Navbar',

    data(){
        return {
            debts: {}
        }
    },

    firebase: {
      debts: {
        source: db.ref('debts')
      }
    }
}
</script>

<style>
.navigation {
    justify-content: center;
}
</style>

