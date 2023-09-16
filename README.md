Hola, como andan?
Soy Andres Richardson, y estoy desarrollando la pagina web de tipo e-commerce respectiva a la comercializacion de arreglos florales, como parte de un emprendimiento personal real junto a mi madre, el cual ya se encuentra activo y cuyo nombre es ‘Enjoying Deco’ - @enjoyingdeco’.
El objetivo del Proyecto es poder aplicar en este sitio las distintas tecnologias y recursos vistos durante la cursada, para luego poder publicarla y darle uso con fines de negocios.

Proyecto:
1)	Instalacion de Visual Studio Code (VSC).
2)	Instalacion de node.js -> version estable.
3)	Instalacion de Git Bash Here.
4)	Descarga de React.
o	Crear carpeta* para alojar la carpeta del Proyecto.
	Git bash here -> npm i -g create-react-app
	Git Bash Here -> npx create-react-app @nombreDelProyecto -> se crea carpeta de Proyecto en carpeta* original.

5)	En carpeta de Proyecto -> Git Bash Here -> code .   -> se abre VSC.
6)	Abro terminal de VSC -> npm start
7)	Creacion de carpeta ‘Public’ -> inserter archive ‘index.html’
o	Se cambia en archivo ‘index.html’:
<link rel="icon" href="%PUBLIC_URL%/logoEnj.png" />
<title>@EnjoyingDeco</title>  

	

8)	Creacion de carpetas:
o	‘src’
	‘assets’
•	‘css’
•	‘images’
	‘components’

9)	Creacion de Repositorio remote – Git Hub.
o	Gitub.com -> sign in.
o	New repository -> colocarl nombre de Pr ->  /nombreProyecto  -> ‘Crear’
o	Copiar direccion ‘https’


10)	Creacion de Repositorio Local.
o	En carpeta de Pr -> abro Git Bash Here.
	git init
	git config - - global user.name “nombreDeCuentaUsuarioGitHub
	git config - - global user.email “emailDeCuentaUsuarioGitHub’’

11)	Conexion de Repositorio Local con Repositorio Remoto
o	En carpeta de Pr -> abro Git Bash Here
	git remote add original linkCopiadoDeRepoRemoto
	git remote -v

12)	Incluir archivos a Repositorio Local.
o	git add .
o	git status
o	git commit -m “nombreDelCommit”
o	git log
o	git push origin master

13)	Clonacion de Repositorio Remoto a nuevo Repositorio Local (1ra vez)
o	Creacion de carpeta* Local -> abro Git Bash Here.
o	git clone linkCopiadoDeRepoRemoto
o	Genercion automatica de Carpeta de Repo Local dentro de Carpeta* original.
o	En carpeta de Pr -> abro Git Bash Here
	npm  start
o	Si existe error: ‘react script is not recognized’:
o	npm install react-scripts –save
o	Instalacion de dependencias necesarias
o	npm install
o	npm start



14)	Incluir archivos a Repositorio Local creado desde Repositorio Remoto.
o	En carpeta de Pr -> abro Git Bash Here
o	git pull origin master.

Instalaciones dentro de proyecto en VSC – Dependecias/Librerias.
o	npm install react -router-dom
o	npm install prop-types –save
o	Version utilizada de React: 18.2.0
o	Firebase:10.3.1
o	@google-cloud/firestore
o	prop-types
o	styled-components (comentado finalmente).
o	Bootstrap (a utilizar en proximos commits).
o	cors
o	react-loaders-kit
o	react-pdf (descarga de detalle de compra a pdf)
o	szhsin/react-accordion (acordion generado en footer)
o	tailwindcss
