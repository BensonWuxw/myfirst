/**
 * 修改body中定义的颜色变量值
*/
export const changeStyle = (obj:any)=>{
    for(let key in obj){
        document.getElementsByTagName('body')[0].style.setProperty(`--${key}`, obj[key]);
    }
}

/**
 * 获取特定格式时间 formatterType 时间格式类型 time 要转换格式的时间  beforeDayNumber 前X天时间
 * */ 
export const getFixedFromatterTime = (formatterType?: number, time?: string, beforeDayNumber?: number) => {
    let currentTime: any = new Date().getTime();
    if (!!time) {
        currentTime = new Date(time).getTime()
    }
    if (!!beforeDayNumber) {
        currentTime += beforeDayNumber * 24 * 60 * 60 * 1000
    }
    let outputTime = new Date(currentTime);
    let Y: string | number = outputTime.getFullYear();
    let M: string | number = outputTime.getMonth() + 1;
    let D: string | number = outputTime.getDate();
    let h: string | number = outputTime.getHours();
    let m: string | number = outputTime.getMinutes();
    let s: string | number = outputTime.getSeconds();
    M = M > 10 ? M : "0" + M;
    D = D > 10 ? D : "0" + D;
    h = h > 10 ? h : "0" + h;
    m = m > 10 ? m : "0" + m;
    s = s > 10 ? s : "0" + s;
    if (formatterType === 1) {
        return `${Y}-${M}-${D} ${h}:${m}:${s}`
    }
}

/**
 * 下载文件
 * */ 
export const downloadFiles = (fileName: string, data: any, type: string, fileType: string) => {
    let a = document.createElement('a');
    let url = window.URL.createObjectURL(new Blob([data], {type: type}));
    a.href = url;
    a.download = `${fileName}.${fileType}`;
    a.click();
    window.URL.revokeObjectURL(url);
}