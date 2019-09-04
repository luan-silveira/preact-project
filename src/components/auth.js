const KEY = 'authenticated';

export function isAuthenticated(){
	return localStorage.getItem(KEY);
}

export function setAuthenticated(auth){
	localStorage.setItem(KEY, !!auth);
}

export function logout(){
	localStorage.removeItem(KEY);
}