

## Inicializacion del proyeto

` npx createreact-app 2021netflix --temmplate redux

### Proceso de limpieza

### Impportar librerias

material-ui/core, axios, firebase, react-router-dom, react-uuid, styled components

### app.js - layout inicial

- Creamos las rutas
- Renderizamos Login o al resto de la App condiconal a la existencia de  un usuario

### Estilos
- Utilizamos useStyles para crear una infrastructura que nos permita asignar estilo a cada uno de los componentes.

### Crear las carpetas de componetes :  Pages

-Creamos  la infraestructura basica  de los componentes de que representan una pagina: Home, Login, Profile, Paypal, SignUp.

## Esttilos  en los componentes  de pages

- Patron para añadir la infrastructura de estilo a todos los componentes de la pagina:
Banner, Header, Plans, Rown.

### Estilos  en los componentes de la carperta components

-Creamos  la infraestructura basica del resto de componentes.

### Comoenzamos a trabajar el componente Header

- Importamos el logo
- Añdimos al AppBar una clase trasparent condicional. Esta clase se activa si la variable show = true.
- La variable show se convierte en true, cuando hacemos un scroll vertical de mas de 100px.
- Para escuchar cuando el usuario hace scroll vertical, añadimos un evenListener al objeto window.
- El eventListener esta activo una sola vez cada vez que resfrescamos la pagina (useEffect con []).
- Una vez montado el componente, hay que limpiarlo para que no nos quede colgado el evenListener.
- Añadimos las rutas tanto como para el logo como al Avatar.

### Comenzamos a trabajar en el Banner
 
 - Hemos  importado un pedazode  imagen como backgroundImage.
 - En React, tenemos  que acompañar las  background-position con estilos como object-fit, background-size y background-position.
 - Hemos posicionado el titulo de la peli, unos botones, y la description.
 - Como la descripcion viene de la API, tenemos que truncarla para asegurarnos de que nos cabe. Para ello, hemos declarado  la funcion truncate.
 - Hemos añadido un div vacio, que oscurece la imagen hasta fusionarla con el resto del  UI,  que es oscuro. 


- "Funciona todo menos el truncate de la (1:50:30) y tampoco cambia  si pongo 60  y no recorta nada en la funcion. Continuo para no clavarme en el lugar.


### Comenzamos a trabajar en el Login

- Hemos creado un boton con styled-components y le hemos  llamado netflixBotton. Este boton esta totalmente  customizado  y prodemos variar su lomngitud, color y estilos, pasandoles props
- Styled components para variar los esttilos del  imput o del boton, pero para su posicionamientos, le damos  una clase normal.
-hemos cread un input personalizado en Style components.  Le hemos llamado NetfflixInput. Como Inputstate era  ya  un componente de material ui, pues lo hemos llamado styled(InputBase). Si hubiera sido un input de base styled.input``. 



**No puedo importar la imagen del backgroundImage para el banner del login. Lo dejo como esta para continuar con el proyecto. Falta corregir el tamaño de del logo de netflix y la altura del cartel del medio.

### Comenzamos a trabajar en el Profile

- hemos trabajado en la distribucion.
- <Plans> Texto</plans>`
 const Plans = ({children}) => { return () }`
- Pasar props a los styled componets. 
- En el caso de que el componente no sea binario, P. ej que el tamaño sea pequeño, grande o mediano, entonces lo solucionamos con una funcion o  un switch


***Tengo Problemas  con el Header  por que  se queda en la parte izquierda de la patalla como con la Typography h3 de "edit profile" por lo tanto probe sacando  afuera al Header y quedo como esta en el video pero no me funciono hacer lo mismo con el h3 por que todo los  itmes se pegan a la izquierda de la pantalla. Buscar solucion para eso. Tambien tengo Problemas  con el tamaño del boton de premiun.



### Signup

- Renderizado condicional. Hemos creado  una variable signIn.
- si la variable es falsa despegamo el formulario.


**** Continuo conlos problemas de poner el banner en la pagina signUp. Todo los botones estan  en el lado  izquierdo de la  pagina.  y Me salio chico el boton de subcribirse.