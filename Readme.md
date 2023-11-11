# Alquiler Autos

# Sistema de Gestión de Alquiler de Autos

## Descripción del Proyecto

Una empresa de alquiler de autos busca mejorar su sistema de gestión de alquileres y reservas para optimizar su proceso y brindar un mejor servicio a sus clientes. Actualmente, la empresa utiliza una base de datos MongoDB con tablas separadas para clientes, automóviles, alquileres y reservas. El principal desafío es la falta de integración entre estas tablas, lo que dificulta la gestión y seguimiento de los procesos, especialmente en la entrega y devolución de vehículos.

La solución propuesta consiste en desarrollar una aplicación web utilizando Node.js y Express para el backend. Se empleará una base de datos MongoDB para almacenar toda la información relacionada con clientes, automóviles, alquileres, reservas, sucursales y empleados. La aplicación proporcionará funcionalidades como registro de clientes, gestión de la disponibilidad de automóviles, alquileres, reservas y un sistema detallado de registro de entrega y devolución de vehículos. Además, se implementará un sistema de autenticación basado en JSON Web Tokens (JWT) para garantizar la seguridad de la información.

## Recursos Utilizados

- **Node.js y Express:** Utilizados para el desarrollo del backend de la aplicación.
- **MongoDB:** Base de datos utilizada para almacenar toda la información.
- **JWT (JSON Web Tokens):** Sistema de autenticación implementado para garantizar la seguridad de la información.

## Funcionalidades Implementadas

1. **Mostrar todos los clientes registrados en la base de datos.**
2. **Obtener todos los automóviles disponibles para alquiler.**
3. **Listar todos los alquileres activos junto con los datos de los clientes relacionados.**
4. **Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.**
5. **Obtener los detalles del alquiler con el ID_Alquiler específico.**
6. **Listar los empleados con el cargo de "Vendedor".**
7. **Mostrar la cantidad total de automóviles disponibles en cada sucursal.**
8. **Obtener el costo total de un alquiler específico.**
9. **Listar los clientes con el DNI específico.**
10. **Mostrar todos los automóviles con capacidad mayor a 5 personas.**
11. **Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.**
12. **Listar las reservas pendientes realizadas por un cliente específico.**
13. **Mostrar los empleados con cargo de "Gerente" o "Asistente".**
14. **Obtener los datos de los clientes que realizaron al menos un alquiler.**
15. **Listar todos los automóviles ordenados por marca y modelo.**
16. **Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.**
17. **Obtener la cantidad total de alquileres registrados en la base de datos.**
18. **Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.**
19. **Obtener los datos del cliente que realizó la reserva con [ID_Reserva_específico].**
19. **Validacion y authentificacion del usuario**

## Guía de Instalación y Uso

1. Clona el repositorio desde [https://github.com/DeibyAlexander/Alquiler_Autos].
2. Instala las dependencias usando 

        npm install

3. Configura la conexión a la base de datos MongoDB en el archivo de configuración.
4. Ejecuta la aplicación utilizando 
        
        npm run start

5. Accede a la aplicación a través de tu navegador web en [http://localhost:6655].



Esperamos que esta solución mejore significativamente la eficiencia y centralización de los procesos relacionados con el alquiler de autos para la empresa. ¡Gracias por tu contribución!

