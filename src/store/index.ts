import { Met } from '@/models/mets'
import { createStore } from 'vuex'
import metsModule from './mets'
import usersModule from './users'


export interface IState {
  authProduct: Met | null,
}



export default createStore({
  modules: {
    mets: metsModule,
    users: usersModule
  }
})
