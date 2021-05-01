

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