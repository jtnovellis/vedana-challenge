# Vedana Solutions - React Developer challenge

## Description

Technical challenge for react developers applicants for Vedana

Deployment

[TaskDo App](https://vedana-challenge.vercel.app)

## Requirements

To run this project in a local server you need to install some libraries and technologies

- Node.js

[In this link you can download it just in case you do not have it yet](https://nodejs.org/es/download/)

## Setting

To run de project you need to follow the steps below:

1. Clone the GibHub project with the follow command:

```
git clone <repo link>
```

2. Go to directory

```
cd vedana-challenge

```

3. Install all dependencies

```
npm install
npm run dev
```

3. Run the project in your local

```
npm run dev
```

## Solucion de preguntas

1. Las desiciones fueron tomadas teniendo en cuenta las especificacines técnicas que requería la prueba.
   Para los estilos decidí utilizar el framework Tailwind debido a la practicidad y velocidad que ofrece
   en el tiempo de desarrollo. Por otro lado, posee unos estandares de normalización para todos los navegadores.
   Para la optimización del uso del almacenamiento de información del en el Local Storage, utilicé la librería
   "localforage" por su versatilidad con navegadores sin soporte para IndexedDB or WebSQL.

2. Por mejorar, están los filtros y la forma en como se están manejando los estados de los componentes, puede
   ser mucho más optimo para mejorar en temas de performance. Y la funcionalidad de editar las tareas, la cual
   no alcance por temas de tiempo. Como mejora final, implementaria testing para salvaguardar la calidad del
   código.

3. Para mejorar la aplicación, se tendrían que generer nuevas funcionalidades para que los usuarios puedan tener
   una mejor experiencia, entre esas sería mayor maleabilidad con las tareas y la posibilidad de poder autenticarse
   pensando en escalar el proyecto para muchos usuarios.
