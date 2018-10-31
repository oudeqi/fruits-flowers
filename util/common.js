const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const random = function generateMixed (n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        let id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res
};

const promisic = function (func) {
    return function (params={}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res)=>{
                    resolve(res)
                },
                fail: (error)=>{
                    reject(error)
                }
            });
            func(args)
        })
    }
};

const formatTime = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n
}

export { random, promisic, formatTime }