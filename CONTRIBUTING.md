### To contribute
You will need node, npm and yarn.

You can use the install script for nvm installation:  

    `$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`
 
 Check the nvm version:  
 
    ` $ nvm --version`

Install the latest long term support (LTS):  

    ` $ nvm install --lts`
    
So if the latest LTS version of Node is 10.15.3:
    
     ` $ nvm install 10.15.3`
     
Setup this version as default:

    ` $ nvm use <node-version>`
    
npm is installed as a package with node. Check your version:

    ` $ npm -v`
    
And to upgrade npm:

      ` $ npm install -g npm@latest`
      
 To install yarn:
    
    ` $ npm install -g yarn`
    
 ### Now that you have everthing you need, it's important to verify your changes before pushing to master. To locally view the effects of your changes on the website. simply run:
 
    ` $ yarn start`
    
This will start the server on your localhost port 300. If the local version of the website you see works fine and does as it should, you can go ahead and push to master.
Otherwise, try to fix the bugs and maybe holler at freddie
 


