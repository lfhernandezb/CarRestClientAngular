ng new car-rest-client
cd car-rest-client/
ng generate module usuarios
cd src/app/usuarios/
ng generate service usuario
ng generate service usuarios
ng generate component usuario
ng generate component usuarios
ng generate module usuarios-routing

cd ../../../
ng generate module vehiculos
cd src/app/vehiculos/
ng generate service vehiculo

# instalar dependencia

sudo npm install -g @angular/common

# para correr app
ng serve

# para paginacion

#npm install jw-angular-pagination
npm install ngx-pagination --save
