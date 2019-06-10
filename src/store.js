import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appFields: [
      {comp:"CardName", name:"Salutation",    required:false},
      {comp:"CardName", name:"First Name",    required:true},
      {comp:"CardName", name:"Last Name",     required:true},
      {comp:"CardName", name:"Company",       required:false},

      {comp:"CardPhone", name:"Phone Number",  required:false},
      {comp:"CardPhone", name:"Extension",     required:false},
      {comp:"CardPhone", name:"Type",          required:false},
      {comp:"CardPhone", name:"Primary Phone", required:false},

      {comp:"CardEmail", name:"Email Address", required:false},
      {comp:"CardEmail", name:"Primary Email", required:false},

      {comp:"CardAddMailing", name:"Street Address", required:false},
      {comp:"CardAddMailing", name:"City",           required:false},
      {comp:"CardAddMailing", name:"State",          required:false},
      {comp:"CardAddMailing", name:"Zip",            required:false},

      {comp:"CardAddBilling", name:"Street Address", required:false},
      {comp:"CardAddBilling", name:"City",           required:false},
      {comp:"CardAddBilling", name:"State",          required:false},
      {comp:"CardAddBilling", name:"Zip",            required:false},
    ],
  playSound: 0,
  primaryPhone: 0,
  primaryEmail: 0,
  usStates: ["AK Alaska", "AL Alabama", "AR Arkansas", "AZ Arizona", "CA California", "CO Colorado", "CT Connecticut", "DC District of Columbia", "DE Delaware", "FL Florida", "GA Georgia", "HI Hawaii", "IA Iowa", "ID Idaho", "IL Illinois", "IN Indiana", "KS Kansas", "KY Kentucky", "LA Louisiana", "MA Massachusetts", "MD Maryland", "ME Maine", "MI Michigan", "MN Minnesota", "MO Missouri", "MS Mississippi", "MT Montana", "NC North Carolina", "ND North Dakota", "NE Nebraska", "NH New Hampshire", "NJ New Jersey", "NM New Mexico", "NV Nevada", "NY New York", "OH Ohio", "OK Oklahoma", "OR Oregon", "PA Pennsylvania", "PR Puerto Rico", "RI Rhode Island", "SC South Carolina", "SD South Dakota", "TN Tennessee", "TX Texas", "UT Utah", "VA Virginia", "VT Vermont", "WA Washington", "WI Wisconsin", "WV West Virginia", "WY Wyoming"],
  },
  mutations: {
    setSound(state, payload){
      state.playSound = payload;
    }
  },
  actions: {

  },
});
