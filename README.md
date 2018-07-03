# Data Dashboard

Este aplicación está dirigido a Training Managers de Laboratoria. Proporciona información en tiempo real de su propia base de datos, desplegada en tablas, gráficas y porcentajes, para facilitar el acceso y manipulación de ésta información.

Mediante esta aplicación el usuario podrá ver y manipular data de forma fácil y rápida, mediante pestañas dentro de la página para facilitar la navegación y evitar el uso de muchas pestañas en el navegador.

## Analisis de Usuario

Sabemos que nuestro usuario será Training Manager de Laboratoria, de habla hispana y con conocimientos intermedios a avanzados de computación.
Mediante encuestas y entrevistas, sabemos que actualmente maneja data con aplicaciones que le generan frustración por falta de una buena visualización de los datos, lenta navegación y diseño poco atractivo.

Asi también, determinamos que la mejor manera de mostrar esta data es mediante poco texto, números llamativos, gráficas y una buena alineación de éstas ultimas.

Nuestra encuesta la pueden encontrar [aquí](https://goo.gl/forms/VIoqdTJAbr6Yt1qp1).

A continuación, mostramos los resultados de esta encuesta:

15 personas contestaron la encuesta, en un rango de edad de 22 a 33 años, en su mayoría mujeres.
En su mayoria, utilizan de uno a dos programas para manejar data todos los días.

### Rango de Edad
![img](https://raw.githubusercontent.com/Hensgrej/cdmx-2018-06-bc-core-am-data-dashboard/master/Media%20README/rangoEdad.PNG "Rango de Edad")
### Como los usuarios ven los programas que utilizan actualmente
![img](https://raw.githubusercontent.com/Hensgrej/cdmx-2018-06-bc-core-am-data-dashboard/master/Media%20README/visualizacion-programas.PNG "Visualizacion programa actual")
### Respuesta a pregunta "¿Cómo sería el programa ideal?"
![img](https://raw.githubusercontent.com/Hensgrej/cdmx-2018-06-bc-core-am-data-dashboard/master/Media%20README/respuestaprogramaideal.PNG "Programa Ideal")

# Sintesis del Analisis de Usuario
Para poder recolectar datos acerca de posibles usuarios, creamos una serie de preguntas orientadas
al uso, manejo y visualización de programas de productividad, en especial aquellos que manejan
gran cantidad de data.

Entrevistamos a 15, donde 10 fueron mujeres y 5 fueron hombres.
Con edades desde 22 años a 33 años, hispanohablantes, con conocimiento intermedio-avanzado
de computación. 

Mediante nuestras entrevistas, pudimos rescatar los siguientes datos:
- La mayoría de las personas que utilizan herramientas para manejar data utilizan Excel y Spreadsheets
- Se reconoce que lo que menos les agrada es la dificultad de leer data especifica y que no esten condensadas.
- La mayoría busca un ambiente de trabajo limpio, manejo rápido y eficaz de datos y visualización condensada.
- Predomina la preferencia por colores claros, con dos colores principales y fondo blanco o gris.
- Se prefiere visualizar mucha información de forma rápida, poder modificarla y rápido acceso a diferentes partes de la página.

## Diseño
Nos basamos exclusivamente en [este artículo](https://medium.com/laboratoria/laboratoria-renueva-su-marca-1665e9fa8956) de Medium donde nos explican el nuevo diseño de Laboratoria.
Ya que esta página web va dirigida a staff de Laboratoria, decidimos mantener un diseño semejante al de la marca. 
Dejamos de lado el color rosado, ya que aunque usamos la misma paleta de colores que Laboratoria, como distribuimos estos colores no deja espacio para un tercer color dominante. 

En la siguiente imagen podemos ver la pagina inicial del programa, con su paleta de colores, fuentes e imagenes usadas.
![img](https://raw.githubusercontent.com/Hensgrej/cdmx-2018-06-bc-core-am-data-dashboard/master/Media%20README/prototipo1.PNG "Pagina Inicial de Prototipo con Paleta de Colores")

Decidimos que los corchetes fueran una gran parte del diseño y que se vean en cualquier parte de la página, ya que pensamos que es algo que representa no solo la marca, sino lo que las alumnas aprenden día a día.

Para facilitar la navegación, utilizamos tabs y botones que ocultan o muestran diferentes elementos de la página, para evitar refrescar constantemente o tener que utilizar diferentes pestañas. Una paginación estará presente en cada parte de la página para que el usuario pueda moverse a diferentes secciones sin tener que empezar desde el inicio.

![img](https://raw.githubusercontent.com/Hensgrej/cdmx-2018-06-bc-core-am-data-dashboard/master/Media%20README/prototipoPerfil.PNG "Perfil de Estudiante")

Preferímos mostrar los datos en tablas, haciendo enfasis con un texto más grande en vez de gráficas o barras de progreso, ya que el número es facil de leer y se entiende de forma instantanea.

![img](https://raw.githubusercontent.com/Hensgrej/cdmx-2018-06-bc-core-am-data-dashboard/master/Media%20README/prototipoEstudiantes.PNG "Vista general de todas las estudiantes, mostrado en tablas")




# Funcionalidad

### Diagrama de Flujo
![img]()
### Razonamiento

Requerimientos según los test unitarios:
   - debería exponer función computeStudentsStats en objeto global
   - debería exponer función computeGenerationsStats en objeto global
   - debería exponer función sortStudents en objeto global
   - debería exponer función filterStudents en objeto global


Al entrar a la página:

- El usuario verá una categoría llamada Sede
- Al clickear esta categoría, podrá ver una subcategoría llamada Generaciones
- Dentro de Generaciones, encontrará los siguientes datos de estudiantes:
  - Nombre
  - Email
  - Sede
  - Generaciones

Una subcategoría llamada Stats con lo siguiente:
  - Status
  - Porcentaje de Completado
  - Temario
  - Dentro de Temario:
      - Porcentaje de Completado del Tema especifico
      - Porcentaje de Duracion
      - Dentro de cada tema:
        - Porcentaje de Completado
        - Descripcion del Tema
        - Duración.

Al tener esto, el usuario podrá buscar items especificos dentro de Generaciones
así como ordenar subcategorías (Ejemplo: ordenar estudiantes por nombre).

Asi también, podrá filtrar las generaciones:
    - Sede
    - Generacion
    - Promedio de Porcentaje de Completado
    - Numero de estudiantes de la generacion

Llenaremos todas estas categorias mediante una [base de datos](https://api.myjson.com/bins/13lpdy).
Buscaremos dentro de la misma lo que necesitamos para llenar estas categorias
y que el usuario pueda filtrar los datos buscando por categorias puntuales.
