import * as _sh from 'lodash';

export const day2miseconde = (num) => {
    return num * 86400000;
};

export const miseconde2day = (num) => {
    return num / 86400000;
};

export const hasCommon = (arr1, arr2) => {
    if (_sh.isArray(arr1) && _sh.isArray(arr2)) {
        let res = false;
        arr1.forEach((i) => {
            if (arr2.includes(i)) {
                res = true;
            }
        });
        return res;
    } else {
        return false;
    }
};

export const isIn = (arr, item) => {
    if (_sh.isArray(arr) && _sh.isObject(item)) {
        let itemIsIn = false;
        arr.forEach((i) => {
            if (i.id && item.id && (i.id == item.id || i.id == item)) {
                itemIsIn = true;
            }
        });
        return itemIsIn;
    } else {
        return false;
    }
};

export const isTrue = (data) => {
    if (hasV(data)) {
        if (data == true || data == '1' || data == 1 || data == '是' || data == 'yes' || data == 'YES') {
            return true;
        }
    }
    return false;
};

/**
 * 去掉首位的 特定字符串 例如 '/'
 * */
export const delSeperatorWrapper = (str, char = '/') => {
    let result = str;
    if (result.charAt(0) == char) {
        result = result.substring(1);
    }
    if (result.charAt(result.length - 1) == char) {
        result = result.substring(0, result.length - 2);
    }
    return result;
};

export const list2keyList = (list, keyName = 'key') => {
    return list.map((i) => {
        i[`${keyName}`] = _sh.uniqueId();
        return i;
    });
};
export const hasV = (value) => hasValue(value);
export const eqV = (value1, value2) => {
    if (hasValue(value1) && hasValue(value2)) {
        return value1 == value2;
    } else if (!hasValue(value1) && !hasValue(value2)) {
        return true;
    } else {
        return false;
    }
};
export const getV = (data, defaultValue) => {
    if (hasV(data)) return data;
    return defaultValue;
};
export const hasLV = (list) => {
    if (!_sh.isArray(list) || !list.length || list.length == 0) {
        return false;
    }
    for (let i = 0; i < list.length; i++) {
        if (!hasV(list[i])) {
            return false;
        }
    }
    return true;
};

/**
 * 配置类 转 精简数据格式
 * */
export const form2data = (form) => {
    let data = {};
    form.forEach((i) => {
        data[`${i.column}`] = i.model;
    });
    return data;
};

// ------------------ 内有猛虎 無需查看 ----------------------
export const hasValue = (value) => Base_HasValue(value);
function Base_HasValue(pValue) {
    if (null == pValue) {
        return false;
    } else if (_sh.isArray(pValue)) {
        if (pValue.length && pValue.length > 0) {
            return true;
        }
        return false;
    } else if (_sh.isBoolean(pValue)) {
        return true;
    } else if (_sh.isObject(pValue)) {
        if (Object.keys(pValue).length > 0) {
            return true;
        } else {
            return false;
        }
    } else if (_sh.isNumber(pValue)) {
        return true;
    } else if (_sh.isNull(pValue)) {
        return false;
    } else if (_sh.isDate(pValue)) {
        return true;
    } else if (_sh.isUndefined(pValue)) {
        return false;
    } else if (_sh.isString(pValue)) {
        if (_sh.trim(pValue) == '' || _sh.trim(pValue) == 'undefine' || _sh.trim(pValue) == 'null') {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function Base_getFileType(fileName) {
    let sInit = '';
    let array = fileName.split('.');
    if (Base_HasValue(array)) {
        sInit = array[array.length - 1];
    }

    return sInit;
}

function Base_getFileNameOnly(pFileName) {
    let fileName = pFileName;
    try {
        if (_sh.startsWith(fileName, 'http') || _sh.startsWith(fileName, 'https')) fileName = decodeURI(fileName);
        if (Base_HasValue(fileName)) {
            let fileType = Base_getFileType(fileName);
            fileName = _sh
                .chain(fileName)
                .split('/')
                .takeRight(1)
                .replace('.' + fileType, '')
                .split('_')
                .take(1)
                .join('')
                .value();
            if (Base_HasValue(fileType)) fileName = fileName + '.' + fileType;
        }
    } catch (e) {
        console.error(e);
    }
    return fileName;
}

function Base_filterData(pDatas, pCompareField, pCompareValue) {
    return _sh.filter(pDatas, (oneData) => {
        let found = false;
        let oneValue = _sh.get(oneData, pCompareField, null);
        if (Base_HasValue(oneValue)) {
            if (oneValue == pCompareValue) {
                found = true;
            }
        }
        return found;
    });
}

function Base_getArrayByPathArray(pData, pPath) {
    let result = [];
    _sh.each(pData, (oneData) => {
        result.push(_sh.get(oneData, pPath, null));
    });
    return result;
}

function Base_formatMainToEntity(_formJson, _formDatas) {
    let entity = {};
    _sh.each(_sh.get(_formJson, 'columns'), (item) => {
        const column = _sh.camelCase(_sh.get(item, 'column'));
        let value = _sh.get(_formDatas, _sh.get(item, 'column'));
        if (item.component == 'file') {
            value = JSON.stringify(value);
        }
        entity[column] = value;
        let columnGroup = _sh.get(item, 'columnGroup', null);
        _sh.each(columnGroup, (oneGroupColumn) => {
            const itemColumn = _sh.camelCase(_sh.get(oneGroupColumn, 'column'));
            let itemValue = _sh.get(_formDatas, _sh.get(oneGroupColumn, 'column'));
            if (oneGroupColumn.component == 'file') {
                itemValue = JSON.stringify(itemValue);
            }
            entity[itemColumn] = itemValue;
        });
    });
    return entity;
}

function Base_isArray(obj) {
    return Array.isArray(obj);
}

function Base_isObj(obj) {
    return typeof obj === 'object';
}

function Base_parse_str2obj(str) {
    let res;
    try {
        res = JSON.parse(JSON.stringify(str));
    } catch (e) {
        console.log(e);
    }
    return res;
}

function Base_String2Array(str) {
    if (typeof str !== 'string') return [];
    if (!Base_HasValue(str.trim())) return [];
    let res;
    try {
        res = JSON.parse(str);
    } catch (e) {
        console.log('error', e);
        res = [];
    }
    if (res === []) return [];
    if (Base_isArray(res)) return res;
    else return [];
}

/**
 * 只能传进来2个参数 {} []
 * */
function Base_del_bracket(str, bra = '{}') {
    return str.substring(str.indexOf(bra.charAt(0)) + 1, str.lastIndexOf(bra.charAt(1)) - 1);
}

function Base_String2Obj(str) {
    if (typeof str !== 'string') return {};
    if (!Base_HasValue(str.trim())) return {};

    let res;

    try {
        res = JSON.parse(str);
    } catch (e) {
        console.log('error', e);
        res = {};
    }
    if (res === {}) return {};
    if (Base_isObj(res)) return res;
    else return {};
}

function Base_setData(_this, _path, value) {
    const mainPath = _path[0];
    if (!Base_HasValue(mainPath)) {
        console.error('第一级路径必须设置。');
    }
    if (_path.length == 1) {
        _this.setData({
            [mainPath]: value,
        });
    } else {
        const otherPath = _sh.drop(_path);
        let oldData = _sh.get(_this.data, [mainPath]);
        oldData = _sh.set(oldData, otherPath, value);
        _this.setData({
            [mainPath]: oldData,
        });
    }
}

function Base_CaclTop(_this) {
    const query_navbar = _this.createSelectorQuery();
    query_navbar.select('#navbar').boundingClientRect();

    return new Promise((resolve, reject) => {
        query_navbar.exec((res) => {
            const navbar_height = res[0].height;
            resolve(navbar_height - 1 + 'px');
        });
    });
}
