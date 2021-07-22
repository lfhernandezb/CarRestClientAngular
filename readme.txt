# ambiente

Luiss-iMac:silas-rest lfhernandez$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 9.1.7
Node: 12.13.0
OS: darwin x64

Angular: 
... 
Ivy Workspace: 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.901.7
@angular-devkit/core         9.1.7
@angular-devkit/schematics   9.1.7
@schematics/angular          9.1.7
@schematics/update           0.901.7
rxjs                         6.5.4
    
Luiss-iMac:silas-rest lfhernandez$ 


ng new car-rest-client
cd car-rest-client/

ng generate module layout
cd src/app/layout/
ng generate component layout
ng generate component header
ng generate component footer

cd ../../../
ng generate module usuarios
cd src/app/usuarios/
ng generate service usuario
ng generate component usuario-list
ng generate component usuario-detail
ng generate module usuarios-routing

cd ../../../
ng generate module vehiculos
cd src/app/vehiculos/
ng generate service vehiculo
ng generate component vehiculo-list
ng generate component vehiculo-detail
ng generate module vehiculos-routing

cd ../../../
ng generate component login
ng generate service auth
ng generate interface login
ng generate guard auth

cd ../../../
cd src/app/
ng generate component page-not-found

# instalar dependencia

sudo npm install -g @angular/common

# para correr app
ng serve

# para paginacion

#npm install jw-angular-pagination
npm install ngx-pagination --save
