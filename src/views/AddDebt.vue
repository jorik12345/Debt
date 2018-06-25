<template>
  <v-container grid-list-md text-xs-center>
      <v-layout justify-center row wrap>
            <v-flex xs6>
              <v-card>
                <v-card-title>
                  <v-form>
                    <h2>Add debts</h2>
                    <v-flex xs12>
                      <v-text-field
                        name="week"
                        label="Week"
                        v-model="week"
                        mask="##"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        name="amount"
                        label="Amount"
                        prefix="€"
                        v-model="amount"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-select
                        v-model="name"
                        :items="users"
                        item-text="name"
                        item-value="name"
                        label="Select"
                        single-line>
                      </v-select>
                    </v-flex>

                    <v-btn class="mt-4 p-0" @click="saveDebt">Save debt</v-btn>
                </v-form>
              </v-card-title>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import {db} from '../firebase';

export default {
  name: 'AddDebt',
  data() {
    return {
      users: {},
      name: '',
      week: '',
      amount: ''
    };
  },
  methods: {
    saveDebt(){
      db.ref('debts').push({
        week: this.week,    
        name: this.name,    
        amount: this.amount,
        payed: false
      });

      this.week = '';
      this.name = '';
      this.amount = '';
    }
  },
  firebase: {
    debts: {
      source: db.ref('debts'),
      cancelCallBack(err) {
        console.log(err);
      }
    },
    users: {
      source: db.ref('users').orderByChild('name')
    }
  }
};
</script>

<style scoped>
  form {
    width: 100%;
  }
</style>
