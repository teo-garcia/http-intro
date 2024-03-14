# Max PID

> ⚠️ Siempre desde la carpeta del proyecto (revisar la ruta en la que esta la terminal)

## 1. npm --init --yes

1.1 Este comando crea el package.json \n
1.2 Habilita la instalacion de librerias externas (No las que trae Node por defecto) \n

## 2. npm i pslist

2.1 Instala pslist para obtener la lista de procesos

## 3. Habilitar el tipo de módulo en package.json

3.1 Abre tu archivo package.json \n
3.2 Asegúrate de que la propiedad "type" esté establecida en "module". Si no está presente, agrégala con el valor "module"

## 4. Importar los módulos necesarios

```javascript
import http from "http";
import psList from "ps-list";
```

## 5. Definir el puerto del servidor

```javascript
const port = 3000;
```

## 6. Crear el servidor HTTP

```javascript
const server = http.createServer(async (req, res) => {
  // Lógica del servidor aquí
});
```

## 7. Definir la ruta para obtener el PID máximo

```javascript
if (req.url === "/max-pid" && req.method === "GET") {
  // Lógica para manejar la solicitud aquí
}
```

## 8. Obtener el proceso con el mayor uso de CPU

```javascript
const getMaxUsageProcess = async () => {
  // Lógica para obtener el proceso con el mayor uso de CPU aquí
};
```

## 9. Escribir la respuesta

```javascript
const maxUsageProcess = await getMaxUsageProcess();

res.writeHead(200, { "Content-Type": "text/plain" });
res.write(JSON.stringify(maxUsageProcess));
res.end();
```

## 10. Escuchar el puerto y lanzar el servidor

```javascript
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🚀`);
});
```
