class Session{
	constructor(arg) { }
	
	setSession(key,value){
		uni.setStorageSync(key,value);
	}
	getSession(key){
		return uni.getStorageSync(key);
	}
	clearSession(key){
		uni.removeStorageSync(key); 
	}
}

var session= new Session()

export default session 
