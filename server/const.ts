export const HTTP_SUCCESS_CODE = 200
const SUCCESS_CODE = 0
const ERROR_CODE = 1

class Protocol<T>{
	constructor(public code: number, public msg?: string, public data?: T) { }

	getCode(): number{
		return this.code || 0;
	}
	getMsg(): string{
		return this.msg || ''
	}
	getData(): T | null {
		return this.data ? this.data : null 
	}
}

export class SuccessProtocol<T=any> extends Protocol<T> {
	constructor(data: T, msg?: string) {
		super(SUCCESS_CODE, msg, data);
	}
}

export class ErrorProtocol extends Protocol<null> {
	constructor(code: number = ERROR_CODE, msg?: string) {
		super(code, msg, null);
	}
}

// 页面错误状态
export class PageCode {
	static ERROR_404_PAGE() {
		return {
			pageError: true
		};
	}
	static ERROR_500_PAGE() {
		return {
			page500Error: true
		};
	}
	static ERROR_H5_404_PAGE() {
		return {
			pageH5Error: true
		};
	}
}