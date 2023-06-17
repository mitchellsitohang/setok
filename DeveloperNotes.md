 # Developer notes
 
 ## Generate api services Angular 
 ng-openapi-gen --input ..\setok-dotnet\setok.webapi\swagger.yml --output src/app/api

 ## dotnet cli
 update: dotnet ef database update 
 migrations: dotnet ef migrations add [migration name]

 # TROUBLESHOOTING

## Microsoft.EntityFrameworkCore.DbUpdateException: 
Try to migrate first, by running this command in setok.db project: dotnet ef database update 

Could be that migrations are failing, you can resolve this quickly by deleting localdb.
Currently this is accepted, but should look for better alternative.
1. C:\Users\{userName}\AppData\Local => delete setok.db files, all you see.
