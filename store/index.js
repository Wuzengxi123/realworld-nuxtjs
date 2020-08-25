// 服务端读取cookie的包cookieparser
const cookieparser = process.server?require('cookieparser'):undefined

// 服务端渲染的期间运行的是一个实例
// 防止数据的冲突，务必要把state对象 定义成一个函数  返回该数据对象
export const state = () => {
    return {
        //存储登录信息
        user: null
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data;
    }
}


export const actions = {
    /*
     nuxtServerInit是一个特殊的action方法只会在服务端运行，
     这个actions会在服务端渲染期间自动调用，作用是初始化容器数据，
     传递数据给客户端使用
   */
    nuxtServerInit({ commit }, { req }) {
        let user = null
        // 请求头里面有cookie
        if (req.headers.cookie) {
            // 使用Cookieparser把cookie字符串转化为JavaScript对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
                // console.log(user)
            } catch (err) {
                // No valid cookie found
            }
            // 提交mutation，修改状态
            commit('setUser', user)
        }
    }
}