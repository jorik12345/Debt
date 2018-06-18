<template>
  <b-container class="fluid">
      <b-row class="mt-4">
          <b-col sm="12">
            <h3>Debts</h3>
            <ul class="list-group" v-if="debts.length > 0">
               <li class="list-group-item" v-for="debt in debts" v-if="!debt.payed">
                <h6 align="left">
                  {{ debt.name }}
                  <div class="float-right">
                    <b-badge variant="primary">&euro;{{ debt.amount }}</b-badge>
                    <b-badge variant="secondary">Week {{ debt.week }}</b-badge>
                    <font-awesome-icon :icon="check" class="payed" @click="setPayed(debt,true)"/>
                  </div>
                </h6>
              </li>
            </ul>
            <p v-else>Good job. You have no debts</p>
          </b-col>
          <b-col sm="12" class="mt-4">
            <h3>No debts</h3>
            <ul class="list-group">
              <li class="list-group-item" v-for="debt in debts" v-if="debt.payed">
                <h6 :class="{ispayed: debt.payed}">
                  {{ debt.name }}
                  <div class="float-right">
                    <b-badge variant="primary">&euro;{{ debt.amount }}</b-badge>
                    <b-badge variant="secondary">Week {{ debt.week }}</b-badge>
                    <font-awesome-icon :icon="undo" class="undo" @click="setPayed(debt,false)"/>
                    <font-awesome-icon :icon="times" class="remove" @click="removeDebt(debt['.key'])"/>
                  </div>
                </h6>
              </li>
            </ul>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import { db } from '../firebase'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faUndo from '@fortawesome/fontawesome-free-solid/faUndo'

export default {
  name: 'Debts',
  components: {
    FontAwesomeIcon, faTimes
  },
  computed: {
    times () {
      return faTimes
    },
    check () {
      return faCheck
    },
    undo () {
      return faUndo
    }
  },
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
      db.ref('debts').child(key)
        .remove();
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
