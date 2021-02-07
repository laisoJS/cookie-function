# Cookie function
## How tu use it?
****it's simple, let's detail everything point by point****


------------

### create a cookie :
Use the function setCookie to create a new cookie,
In this function you will need: a name, a value (a expiration date, a path of the cookie, domain and secure).

- __name__: The name of the cookie (Need to be a string).
- __value__: The value of the cookie.
- __expires__: The expiry date of the cookie,
	By default it's the end of the current session.
- __path__: The path where the cookie is valid,
	By default it's the path of the calling document.
- __domain__: The domain were the cookie is valid,
	By default it's the domain of the calling document.
- __secure__: The secure need to be a boolean to indicating if the cookie transmission requires a secure transmission.

------------

### get a gookie
Use the function getCookie to get the value of a specified cookie.
In this function you need the name of the desired cookie.

It return a string containing the value of the specified cookie.
If the cookie does not exist it return `null`

------------

### delete a cookie
Use the function delCookie to delete the specified cookie.
In this function you will need a name the path and the domain.

- __name__: The name of the cookie you went to delete.
- __path__: The path of the cookie must be same as path used to create cookie
- __domain__: The domain of the cookie must be same as domain used to create cookie
