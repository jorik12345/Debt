<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-card bg-variant="white" text-variant="dark" title="Add a debt" align="center">
        <b-card-body class="text-center">
          <div>
              <b-form>
                <b-input-group prepend="Week">
                    <b-form-input v-model="week"
                    type="text"
                    placeholder="Week number">
                    </b-form-input>
                </b-input-group>
                <b-input-group prepend="€" class="mt-4">
                    <b-form-input v-model="amount"
                    type="text"
                    placeholder="Amount">
                    </b-form-input>
                </b-input-group>
                <!-- <b-form-input v-model="name"
                    type="text"
                    placeholder="Name"
                    class="mt-4">
                    </b-form-input> -->
                  <b-form-select v-model="name" class="mt-4">
                    <option value="">Select user</option>
                    <option v-for="user in users" :value="user.name">{{ user.name }}</option>
                  </b-form-select>
                <b-button variant="success" class="mt-4" @click="saveDebt">Save debt</b-button>
              </b-form>
          </div>
        </b-card-body>
      </b-card>
    </b-row>
  </b-container>
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
      source: db.ref('users')
    }
  }
};
</script>
