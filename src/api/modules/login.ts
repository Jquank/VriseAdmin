import $http from '@/utils/http'
// import type { UserInfo } from '@/types/model/login'

export const getToken = () => {
    return '123'
}
export const getUserInfo = (info: Record<string, any>) => {
    return $http.ex('/api/xxx').then(() => {
        return {
            username: info.username,
            roles: info.username === 'admin' ? ['All'] : ['MenuAuth', 'ButtonAuth']
        }
    })
}
