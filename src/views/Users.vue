<template>
  <v-container>
    <v-layout justify-content-center>
      <v-flex xs12 md6>
        <v-card bg-variant="white" text-variant="dark" title="Add a debt user" align="center">
            <v-card-title class="text-center">
            <div>
                <b-form>
                    <b-input-group prepend="Name">
                        <b-form-input v-model="name"
                        type="text"
                        placeholder="Name">
                        </b-form-input>
                    </b-input-group>
                    <b-input-group prepend="&euro;" class="mt-4">
                        <b-form-input v-model="email"
                        type="text"
                        placeholder="Email">
                        </b-form-input>
                    </b-input-group>
                    <b-button variant="success" class="mt-4" @click="saveUser">Save user</b-button>
                </b-form>
            </div>
            </v-card-title>
        </v-card>
      </v-flex>  

        <v-flex xs12 md6>
            <h3>Users</h3>
            <ul class="list-group">
                <li class="list-group-item" v-for="user in users">
                <h6 align="left">
                    {{ user.name }} - {{ user.email }}
                    <div class="float-right">
                        <font-awesome-icon :icon="check" @click="removeUser(user['.key'])"/>
                    </div>
                </h6>
                </li>
            </ul>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {db} from '../firebase'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

export default {
  name: 'Users',
  data() {
    return {
      users: {},
      name: '',
      email: ''
    };
  },
  computed: {
    times () {
      return faTimes
    }
  },
  methods: {
    removeUser(key){
      db.ref('users').child(key)
        .remove();
    },
    saveUser(){
      db.ref('users').push({
        name: this.name,    
        email: this.email
      });

      this.name = '';
      this.email = '';
    }
  },
  firebase: {
    users: {
      source: db.ref('users'),
      cancelCallBack(err) {
        console.log(err);
      }
    }
  }
};
</script>
