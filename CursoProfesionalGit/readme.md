# Curso Profesional de Git y GitHub
Aqui se suben los apuntes sobre el curso de gut de manera profesional y aprendiendo de manera mas profesional en el desarrollo.

Git es un controlador de verisones que solo nos ayuda a tener un mejor control sobre nuestros archivos

GitHub es el servicio de la nuve donde se suben ya sea de manera privada o publica los repositorios y es echo por Microsoft

Para manejarlo es nesesario saber los camandos basicos de la terminal para moverse dentro de un enterno

**ls** : muestra la lista de los archivos

**cd** : este es el que realiza el cambio de las capetas

**pwd** : nos muestra la ruta en la que estamos actualmente

**touch** : crea los archivos indicando el nombre y su extension ya sea .excel .js .html ... etc.

**cat** : ve todo los datos del archivo

**history** : ve todo el histrial que hemos echos en la terminal

**rm** : elemina los archivos que le indiquemos **tener mucho cuidado ya que puede eleminar el disco duro o hasta el sistema**

# Linea de comando de Git basicos

A continuacion se muestra la linea de comandos basicos y mas utilizados dentro del enetorno de desarrrollo

* **git init** : inicia en la carpeta que te encuentras los cambios

* **git add** : agrega los archivos que deseamos agregar y escuchar

* **git -m commit** : se agrega los comentarios de los cambios realizados dentro de los archivos

* **git show** : muestra todo el historico de cambios y quien realizo los cambios, mostrando el ultimo comit y ve las lineas que se modificaron, realizando un trazi

* **git log** : muestra un historial de todas las personas que realizaron un cambio


* **git diff** : realiza las comparaciones entre un comit y otro, osea entre la antigua y reciente

* **git reset 0b0b040b83d8a819394454c993221e8f5a1d3789 --hard**: este hace que regrese una version anterior o una version que deseo, pero tener cuidado porque borra todos los cambios que haya echo, ayudando a volver en el tiempo, el comando es peligroso

* **git pull** descarga todos los cambios

# Que es el stading?

Es la memoria ram y es un lugar temporal donde se veran los cambios. 

# Ramas en Git?

Se revisan temas sobre las ramas y lo iportante de utilizarlos en un desarrollo.

Las ramas sirven principalmente para no afectar a la rama maestra.

* **git branch** : crea nuevas ramas a partir de la master

* **git switch** : cambio de una rama a la otra

* **git merge** : unse mi rama a lo que es mi rama que quiero que se una como master 

Cunaod creemos de un local a la nube y queremos vincular puede surgir un error como **fatal: refusing to merge unrelated hitories** , se puede corregir con  **git pull origin main --allow-unrelated-histories**
