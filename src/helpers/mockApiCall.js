import { axiosWithAuth } from './axiosWithAuth';

export const fetchBubbles = () => {
    return axiosWithAuth()
        .get('/colors')
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log('error in sample call', err)
            return err
        })
}