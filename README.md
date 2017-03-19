# OAuth 2
 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.

 It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user account. 

# OAuth Roles
OAuth defines four roles:
- Resource Owner
- Client
- Resource Server
- Authorization Server

# Abstract Protocol Flow
![alt text](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)
# Application Registration :
 register your application with the service. This is done through a registration form in the "developer" or "API" 
- Application Name
- Application Website
- Redirect URI or Callback URL



### redirect uri :
service will redirect user after authorize or (deny) ,and therefore the part of ypur app will andle authorization codes or access token.

# Client ID and Client Secret
Once your application is registered, the service will issue "client credentials" in the form of a client identifier and a client secret. The Client ID is a publicly exposed string that is used by the service API to identify the application, and is also used to build authorization URLs that are presented to users. The Client Secret is used to authenticate the identity of the application to the service API when the application requests to access a user's account, and must be kept private between the application and the API.



# Authorization Grant
In the Abstract Protocol Flow above, the first four steps cover obtaining an authorization grant and access token. The authorization grant type depends on the method used by the application to request authorization, and the grant types supported by the API. OAuth 2 defines four grant types, each of which is useful in different cases:

- Authorization Code: used with server-side Applications

- Implicit: used with Mobile Apps or Web Applications (applications that run on the user's device)
- Resource Owner Password Credentials: used with trusted - - Applications, such as those owned by the service itself

- Client Credentials: used with Applications API access
