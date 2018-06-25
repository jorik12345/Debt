<template>
  <div>
    <v-expansion-panel>
      <span class="display-1 p-2">Payed</span>
      <v-expansion-panel-content v-for="(debt,i) in debts" :key="i" v-if="debt.payed" expand-icon="mdi-menu-down">
        <div slot="header">
          <span class="title v-align-center d-inline-block pt-2">{{ debt.name }}</span>
          <v-chip color="primary" text-color="white" class="right caption">&euro;{{ debt.amount }}</v-chip>
          <v-chip color="secondary" text-color="white" class="right caption">Week {{ debt.week }}</v-chip>
        </div>
        <div transition="slide-y-transition">
          <v-layout>
            <v-flex xs6 class="ml-2 text-xs-center left">
              <v-btn block color="green" dark class="p-0" @click="setPayed(debt,false)">
                <v-icon>undo</v-icon>
                <span>Restore</span>
              </v-btn>
            </v-flex>
            <v-flex xs6 class="ml-2 text-xs-center left">
              <v-btn block color="red" dark class="p-0" @click="removeDebt(debt['.key'])">
                <v-icon>delete</v-icon>
                <span>Remove</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
  
</template>

<script>
import { db } from '../firebase'
import axios from 'axios'

export default {
  name: 'Debts',
  data(){
    return {
      debts: {}
    };
  },
  methods: {
    setPayed(item,state){
      const copy = []
      copy.name = item.name
      copy.week = item.week
      copy.amount = item.amount
      copy.payed = state
      db.ref('debts').child(item['.key'])
        .set(copy)
    },
    removeDebt(key){
      this.$dialog.confirm('Are you sure you want to delete this?')
      .then(function () {
        db.ref('debts').child(key)
          .remove();
      })
      .catch(function () {
        console.log('Saved by the button!')
      });
    }
  },
  firebase: {
    debts: {
      source: db.ref('debts')
        .orderByChild('week')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .payed:hover {
    color: green;
    cursor:pointer;
  }

  .remove:hover {
    color: red;
    cursor:pointer;
  }

  .undo:hover {
    color: blue;
    cursor:pointer;
  }
</style>
