import { Met } from '@/models/mets'
import { createStore } from 'vuex'
import metsModule from './mets'


export interface IState {
  authProduct: Met | null,
}



export default createStore({
  modules: {
    mets: metsModule,
  }
})
