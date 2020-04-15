run development env:
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

drop migration
npx sequelize-cli db:migrate:undo:all

add geo data
./getgeo.sh -u gug007 -h 127.0.0.1 -p 5432
