import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'


const axiosInstance = axios.create({
    baseURL: "https://online-study-room-server.vercel.app",
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { user, logOut } = useContext(AuthContext)
    const [ready, setReady] = useState(false)

    // useEffect(() => {
    //     const token = user?.accessToken
    //     // const token = user?.getIdToken?.();

    //     //   intercept requests
    //     const requestInterceptor = axiosInstance.interceptors.request.use(config => {

    //         if(token){
    //             config.headers.Authorization = `Bearer ${token}`
    //         }
    //         return config
    //     })


    //     //   intercept responses
    //     const responseInterceptor = axiosInstance.interceptors.response.use(
    //         res => res,
    //         err => {
    //             if (err.status === 401 || err.status === 403) {
    //                 logOut()
    //                     .then(() => {
    //                         console.log(
    //                             `You are logged out because of an error with ${err.status} code.`
    //                         )
    //                     })
    //                     .catch(err => console.log(err))
    //             }
    //             return Promise.reject(err)
    //         }
    //     )
    //     return () => {
    //         axiosInstance.interceptors.request.eject(requestInterceptor)
    //         axiosInstance.interceptors.response.eject(responseInterceptor)
    //     }

    // }, [user?.accessToken, logOut])

    useEffect(() => {
    let requestInterceptor, responseInterceptor;

        const setInterceptors = async () => {
            const token = await user?.getIdToken?.()
            if (!token) return

            requestInterceptor = axiosInstance.interceptors.request.use(config => {
                config.headers.Authorization = `Bearer ${token}`
                return config
            })

            responseInterceptor = axiosInstance.interceptors.response.use(
                res => res,
                err => {
                    if (err?.response?.status === 401 || err?.response?.status === 403) {
                        logOut()
                            .then(() => {
                                console.log(`You were logged out due to a ${err.response.status} error.`)
                            })
                            .catch(console.log)
                    }
                    return Promise.reject(err)
                }
            )

            setReady(true)

            // return () => {
            //     axiosInstance.interceptors.request.eject(requestInterceptor)
            //     axiosInstance.interceptors.response.eject(responseInterceptor)
            // }
        }

        if (user) {
            setInterceptors()
        }
        return () => {
        if (requestInterceptor !== undefined) {
            axiosInstance.interceptors.request.eject(requestInterceptor);
        }
        if (responseInterceptor !== undefined) {
            axiosInstance.interceptors.response.eject(responseInterceptor);
        }
        }

}, [user, logOut])

return [axiosInstance, ready]
}

export default useAxiosSecure
