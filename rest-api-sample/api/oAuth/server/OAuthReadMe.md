# Overview
This sample uses the OAuth workflow to generate access token and use it to create a group.

**Note:**Please make sure if you are using IDE, you have made configuration changes as given in AdobeSignNodeJsSdk/README.

Running the sample CreateGroupWithOAuthWorkFlowUsingServer 
=====================================================

Steps to get the OAuth code, fetch the access token and create the group.
    
1.  Please generate a keystore and certificate files and store it at the location.
    `AdobeSignNodeJsSdk/rest-api-sample/api/oAuth/server/{keystore-file}`
    
    Following command can be used to generate the keystore and certificate files in the working directory.
    ```
     openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
    ```
    
    **Note:** Following parameters are used/generated in the above command
    The algorithm used here to generate the key pair is `RSA`.
    The keystore filename. Here it is `key.pem`.
    keysize - Keysize specifies the size of each key to be generated. Here it is `2048` bits.

2.  Provide the serverPort, name of keystore file and certificate file in config.json.

3.  Run the sample
     **From the IDE** - To setup the IDE, follow the steps given in the ReadMe.md file..
     After that right click on the file CreateGroupWithOAuthWorkFlowUsingServer.js, and select `Run` to run it.
        
3.  Open the following link in your browser and replace the serverPort. 
    ```
    https://localhost:{serverPort}
    ```

4.  Provide the user credentials to generate the OAuth code which will be used to fetch the access token and create a group using 
    the access token. To get the credentials,
    **4.1** Go to the Adobe Sign Web App.
    
    **4.2** Under the accounts tab, go to Adobe Sign API.
    
    **4.3** Click on API Applications.
    
    **4.4** Select the application.
    
    **4.5** Click on Configure OAuth for Application to get user credentials.
    
5. Following are the credentials 

    **5.1** client_id - You can get the client id from the Configure OAuth for Application tab.
    
    **5.2** client_secret - You can get the client secret from the Configure OAuth for Application tab.

    **5.3** scopes - Provide the scopes as per your requirements. Make sure scopes are enabled with correct modifier in the Configure OAuth 
    for Application tab. The scopes are given in the following format.
    ```
    scope1:modifier1 scope2:modifier2 like as follows
    user_login:self user_write:account
    ```

    **5.4** redirect_uri - Please make sure you have also added the Redirect URI in the application configuration on the Adobe Sign WebApp as follows.
    ```
    https://localhost:{serverPort}/redirectUri
    ```
        
6.  When you submit your client application credentials, it takes you to the Adobe Sign login page if you are not
    already logged in and ask you to grant access to the application.
    
7.  If the request is successful, control returns to the home page where you can see the group Id of the newly created group. 
  
8. The server stops after creating the group.
  
**Note:** If you try to run multiple instances of the server on the same port, it will give bind failure as port is already occupied.
