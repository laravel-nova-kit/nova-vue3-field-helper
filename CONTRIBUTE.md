## Project setup
1. Create an `./auth.json` with your Nova 4 credentials:
```json
{
    "http-basic": {
        "nova.laravel.com": {
            "username": "<email>",
            "password": "<license>"
        }
    }
}
```
2. Execute `composer install` to install Laravel Nova in your `./vendor` directory.
3. Execute `yarn nova:install` to install Nova as a node dependency.
4. Execute `yarn install` to install all the other node dependencies.
5. Develop using `yarn watch` to build at every code change
6. When your code is ready to be deployed, execute `yarn build` to build dist files. 
