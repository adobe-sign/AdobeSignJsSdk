# Overview
This sample uses the OAuth workflow to generate access token and use it to create a group.

>**Note:** This OAuth sample does not depict ideal way to do client side exchange of auth code & access token. It is recommended to be done by a web server.
 Also, Sample shows how to refresh access token everytime but there is no need for refresh access token every time.

## Running the sample CreateGroupWithOAuthWorkFlowUsingServer 

Steps to get the OAuth code, fetch the access token and create the group.
    

1.  Run HTTPS Server
    
    Configure & start the HTTPS server using steps given `AdobeSignNodeJsSdk/README.md`. 
    
2.  Open the following link in your browser and replace the serverPort. 
    ```
    https://{serverAddress}:{serverPort}/browser/rest-api-sample/api/oAuth/CreateGroupWithOAuthWorkflow.html
    
    ```

3.  Provide the user credentials to generate the OAuth code which will be used to fetch the access token and create a group using 
    the access token. To get the credentials,
    
    **3.1** Go to the Adobe Sign Web App.
    
    **3.2** Under the accounts tab, go to Adobe Sign API.
    
    **3.3** Click on API Applications.
    
    **3.4** Select the application.
    
    **3.5** Click on Configure OAuth for Application to get user credentials.
    
4. Following are the credentials 

    **4.1** client_id - You can get the client id from the Configure OAuth from Application tab.
    
    **4.2** client_secret - You can get the client secret from the Configure OAuth from Application tab.

    **4.3** scopes - Provide the scopes as per your requirements. Make sure scopes are enabled with correct modifier in the Configure OAuth 
    for Application tab. The scopes are given in the following format.
    ```
    scope1:modifier1 scope2:modifier2 like as follows
    user_login:self user_write:account
    
    ```

    **4.4** redirect_uri - Please make sure you have also added the Redirect URI in the application configuration on the Adobe Sign WebApp as follows.
    
    ```
    https://{serverAddress}:{serverPort}/browser/rest-api-sample/api/oAuth/redirectUri
    
    ```
        
5.  When you submit your client_id, redirect_uri & scopes, it takes you to the Adobe Sign login page if you are not
    already logged in and ask you to grant access to the application.
    
6.  If the request is successful, browser is redirected to
    ```
        https://{serverAddress}:{serverPort}/browser/rest-api-sample/api/oAuth/redirectUri
    ```
   here on submitting client_id, client_secret & scopes you can see the group Id of the newly created group. 
  
