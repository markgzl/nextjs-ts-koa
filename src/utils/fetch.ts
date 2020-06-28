import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";



interface IFetchProps {
	url: string,
  method: "get"| "post",
  data?: any,
  headers?: any
}

function fetch<T>(config: IFetchProps){
	return new Promise<T>((resolve, reject)=>{
		axios({
			url: config.url,
			method: config.method,
			data: config.data
		}).then((response)=>{
			return response.data
		}).catch((error) => {
			console.log("请求错误链接为---- "+ config.url  );
			resolve(error);
		});
	})
}

export const getData = async <T>(url: string) => {
	return await fetch({url, method: 'get'})
}