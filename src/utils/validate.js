import * as _ from 'lodash';
import { hasV } from './tool';

export const validateUsername = (rule, value, callback) => {
    if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'));
    } else {
        callback();
    }
};
export const validatePass = (rule, value, callback) => {
    if (value.length < 3) {
        callback(new Error('密码不能小于3位'));
    } else {
        callback();
    }
};

export const validateName = (rule, value, callback) => {
    if (!isvalidName(value)) {
        callback(new Error('名称长度最少为3,最大为40'));
    } else {
        callback();
    }
};

export const validateText = (rule, value, callback) => {
    if (!isvalidUsername(value)) {
        callback(new Error('字段长度最少为3'));
    } else {
        callback();
    }
};

export const validateString = (rule, value, callback) => {
    if (!isvalidString(value)) {
        callback(new Error('字段不能为空'));
    } else {
        callback();
    }
};

export const validateNotNull = (rule, value, callback) => {
    if (!isvalidNotNull(value)) {
        callback(new Error('字段不能为空'));
    } else {
        callback();
    }
};

export const validateCompleteTime = (rule, value, callback) => {
    if (!isvalidCompleteTime(value)) {
        callback(new Error('请填写完整日期'));
    } else {
        callback();
    }
};

export const validateNumber = (rule, value, callback) => {
    if (!isvalidNumber(value)) {
        callback(new Error('请输入数字'));
    } else {
        callback();
    }
};

export const validateSlider = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请通过人机检测'));
    } else {
        callback();
    }
};

export const vadidatePassed = (rule, value, callback) => {
    callback();
};

// -----------------------------------------------------------------------

export function isvalidCompleteTime(value) {
    if (value && value.length && value.length > 'YYYY-MM-DD HH:mm:ss'.length + 'undefined'.length) {
        return true;
    } else {
        return false;
    }
}

export function isvalidString(str) {
    if (hasV(str) && _.isString(str)) {
        return true;
    } else {
        return false;
    }
}

export function isvalidNotNull(a) {
    return hasV(a);
}

export function isvalidUsername(str) {
    // const valid_map = ['admin', 'test']
    // return valid_map.indexOf(str.trim()) >= 0
    return str.trim().length >= 3;
}

export function isvalidName(str) {
    // const valid_map = ['admin', 'test']
    // return valid_map.indexOf(str.trim()) >= 0
    return str.trim().length >= 3 && str.trim().length <= 40;
}

export function isvalidNumber(str) {
    try {
        const num = str * 1;
        if (_.isNumber) {
            return true;
        }
    } catch (e) {
        return false;
    }
    return false;
}

/* 合法uri*/
export function validateURL(textval) {
    const urlregex =
        /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}

/* 小写字母*/
export function validateLowerCase(str) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
}

/* 大小写字母*/
export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
}

export const checkPic = (file) => {
    let fileTypes = ['application/pdf'];
    const isLt10M = file.size / 1024 / 1024 < 10;
    const isPDF = fileTypes.includes(file.type);
    if (true && !isPDF) {
        // if (!isJPG && !isPDF) {
        return Promise.reject('文件必须为pdf格式!');
    }
    if (!isLt10M) {
        return Promise.reject('文件大小必须小于10M!');
    }
    return Promise.resolve();
};
