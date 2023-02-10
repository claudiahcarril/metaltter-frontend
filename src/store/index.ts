import { createStore } from 'vuex'
import loginModule from './login'
import { IUserState } from './login/state'
import metsModule from './mets'
import { IMetState } from './mets/state'
import usersModule from './users'


export interface IState {
  login: IUserState,
  mets: IMetState
}



export default createStore({
  modules: {
    mets: metsModule,
    users: usersModule,
    login: loginModule,
  }
})
