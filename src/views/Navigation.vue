<template>
    <b-navbar class="navigation" toggleable="md" type="dark" variant="dark">

    <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->

    <!-- <b-collapse is-nav id="nav_collapse"> -->

        <b-navbar-nav>
        <b-nav-item href="#/">Debts <b-badge>{{ debts.length }}</b-badge></b-nav-item>
        <b-nav-item href="#/adddebt">Add new debt</b-nav-item>
        <b-nav-item href="#/users">Users</b-nav-item>
        </b-navbar-nav>

    <!-- </b-collapse> -->
    </b-navbar>
    
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

