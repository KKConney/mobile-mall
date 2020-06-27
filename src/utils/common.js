const local_get = (key) => {
	return window.localStorage.getItem(key)
}

const local_set = (key, data) => {
	return window.localStorage.setItem(key, JSON.stringify(data))
}

const local_remove = (key) => {
	return window.localStorage.removeItem(key)
}

const randomString = (len) => {
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	var tempLen = chars.length, tempStr='';
	for(var i=0; i<len; ++i){
		tempStr += chars.charAt(Math.floor(Math.random() * tempLen ));
	}
	return tempStr;
}

const priceFilter = a => {
	let num = Number(a);
	if(!num) {//等于0
		return num+'.00';
	} else {
		//不等于0
		num = Math.round((num) * 100) / 10000;
		num = num.toFixed(2);
		num += '';//转成字符串
		var reg = num.indexOf('.') >- 1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;//千分符的正则
		return num.replace(reg, '$1,')//千分位格式化
	}
}

const priceFormat = (number, decimals, dec_point, thousands_sep) => {
	/*
　　 * 参数说明：
　　 * number：要格式化的数字
　　 * decimals：保留几位小数
　　 * dec_point：小数点符号
　　 * thousands_sep：千分位符号
　　 * */
	number = (number + '').replace(/[^0-9+-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function(n, prec) {
			var k = Math.pow(10, prec);
			return '' + Math.ceil(n * k) / k;
		};
	
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	var re = /(-?\d+)(\d{3})/;
	while(re.test(s[0])) {
		s[0] = s[0].replace(re, "$1" + sep + "$2");
	}
	
	if((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}

const rPriceFormat = e => {
	return parseFloat(e.replace(/[^\d\.-]/g, ""));
}

export default {
	local_get,
	local_set,
	local_remove,
	randomString,
	priceFilter,
	priceFormat,
	rPriceFormat
}
