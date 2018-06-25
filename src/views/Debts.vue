<template>
  <div>
    <v-expansion-panel>
      <span class="display-1 p-2">In Debt</span>
      <v-expansion-panel-content v-for="(debt,i) in debts" :key="i" v-if="!debt.payed" expand-icon="mdi-menu-down">
        <div slot="header">
          <span class="title v-align-center d-inline-block pt-2">{{ debt.name }}</span>
          <v-chip color="primary" text-color="white" class="right caption">&euro;{{ debt.amount }}</v-chip>
          <v-chip color="secondary" text-color="white" class="right caption">Week {{ debt.week }}</v-chip>
        </div>
        <div transition="slide-y-transition">
          <v-layout>
            <v-flex xs4 class="ml-2 left">
              <v-btn block color="green" dark class="p-0" @click="setPayed(debt,true)">
                <v-icon>check</v-icon>
                <span>Payed!</span>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="ml-2 left">
              <v-btn block color="blue" dark class="p-0" @click="sendTikkie">
                <v-icon>send</v-icon>
                <span>Send Tikkie</span>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="ml-2 left">
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
import jwt from 'jsonwebtoken'

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
    },
    getAccessToken(){
      var fs = require('fs');
      let algo='RS256';
      let payload = {
        nbf:Math.floor(Date.now() / 1000),
              exp:Math.floor(Date.now() / 1000) + 300,
              sub:'DLjpQoVpzPshdnwIJEMXnTUhGzGrCG2m',
              iss:'me',
              aud:'https://auth-sandbox.abnamro.com/oauth/token'
      };

      // sign with RSA SHA256
      let cert = fs.readFileSync('/private_rsa.pem');  // get private key
      jwt.sign(payload, cert, { algorithm: algo},function(error,token){
      console.log(token);
      });
    },
    sendTikkie(user){
      this.getAccessToken()
      //bxy1VQxAH0wL2uJE0VYsI9GmwfAacSGa

      //vMpRZ7mOVN1OEJxT

      // axios.defaults.baseURL = 'https://api.abnamro.com/v1/tikkie';
      // axios.defaults.baseURL = 'https://api-sandbox.abnamro.com/v1/tikkie';
      // axios.defaults.headers.common['Authorization'] = 'Bearer bxy1VQxAH0wL2uJE0VYsI9GmwfAacSGa';
      // axios.defaults.headers.common['API-Key'] = 'application/json';
      // axios.defaults.headers.post['Content-Type'] = 'vMpRZ7mOVN1OEJxT';

      // axios.post('/platforms', {
      //   email: 'jorikrovers@ziggo.nl',
      //   name: 'Jorik Rovers',
      //   phoneNumber: '0648323684',
      //   platformUsage: 'PAYMENT_REQUEST_FOR_MYSELF'
      // }).then(function (result){
      //   console.log(result)
      // });
      

      // create platform

      // Create User

      // Get Users

      // Create Payment Request
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
