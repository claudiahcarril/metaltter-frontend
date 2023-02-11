import { RouteLocation } from "vue-router";

const haveTokenGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
        next()
    } else {
        next({ name: 'login' })
    }
}

export default haveTokenGuard