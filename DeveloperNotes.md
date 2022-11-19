 # Developer notes
 
 ## Generate api services Angular 
 ng-openapi-gen --input ..\setok-dotnet\setok.webapi\swagger.yml --output src/app/api

 ## dotnet cli
 update: dotnet ef database update 
 migrations: dotnet ef migrations add [migration name]