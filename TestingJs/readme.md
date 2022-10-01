# Que es el Testing en Javascript
En el mundo actual las tecnologias con las que vivimos necesitan codigo, esto ha hecho que el desarrollo de software se haya vuelto industrial, donde contamos con procesos y herramientas, como el testing, que nos permiten entregar mas rapido proyectos de calidad a nuestros clientes reduciendo el riesgo de errores en produccion.

## ¿Por que hacer testing?

Normalmente hay cuatro fases en el desarrollo de software para crear un producto:

**Diseño ⇒ Desarrollo ⇒ Pruebas ⇒ Produccion**

En estas fases, detectar un error se vuelve cada vez mas costoso. Ahi es donde hacemos tecnicas para prevenir estas situaciones. El testing es la manera en la que nosotros gestionamos el riesgo y tratamos de evitar, en la medida de lo posible, los errores en el sistema.

## Gestionar riesgos como Google
1. **Analisis de codigo estatico**: Mientras desarrollamos vamos viendo nuestros resultados.
2. **Pruebas unitarias**: Nos aseguramos que el codigo funciona como queremos.
3. **Pruebas de integracion**: Verificar que varios elementos funcionan bien trabajando juntos.
4. **Revision de codigo**: Equipo o persona encargada de revisar el codigo de las demas personas.
5. **QA**: Equipos de creacion de pruebas automaticas o manuales.

__Lo importante con el testing es reducir los riesgo__

# La piramide de testing
La pirámide clásica del testing: (de menos a más costoso y tendría que haber más pruebas de las primeras que de las últimas)

* unit tests: se corren directamente al codigo
* integration tests: probamos dos funcionalidad
* end to end tests (e2e) : son las pruebas de punto a punto 
* ui test: emulan el dispositivo físico : emulanos los sistemas de cada uno

En javascript se recomienda en vez la pirámide el trofeo de tests:

* static tests: el tronco (el segundo mayor número de pruebas)
* unit tests: mismo num. de pruebas que e2e y menos que static e integration
* integration tests: el mayor número de pruebas debe ser aquí
* e2e tests: mismo tamaño que unit tests y menos que static e integration

# Deuda Técnica
Igual que en las finanzas, las deudas no son buenas ni malas, solo son una estrategia para alcanzar algo y luego se paga.

Haciendo pruebas se maneja el riesgo

* Diseño
* Desarrollo
* Pruebas
* Producción

El momento y pruebas dependen de la fase en la que se encuentra la compañía:

1. Tracción : lanza y no importa mucho el testing
2. Inflexión : llenamos sistemas de monitoreo, con las pruebas
3. Escala : 
4. Expansión

La deuda de deficiencia del desarrollador puede ser alta porque en la fase de tracción, la compañía busca velocidad > precisión , de modo que en esta etapa el testing no se valora, ya que buscan lanzar, lanzar, lanzar…

Cuando se entra a la fase de inflexión, hay más usuarios y se empiezan a escribir más pruebas, curando la deuda.