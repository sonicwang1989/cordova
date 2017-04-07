@each off 
echo install npm plugins
npm install

echo install bower plugins
bower install

echo copy file to www
cd node_modules/.bin
gulp default

echo init completed
pause
