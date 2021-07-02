

# Momos
For limit of time, I cannot do E2E test for Frontend, I only include a small unit test in `/apps/backend/test`

For install please use following command:
```
npm install
```
Folder structure (important only):
```
project
│   README.md 
│   package.json
│
└───apps
│   │
│   └───backend (backend code)
│   │
│   └───frontend (frontend code)
│   
└───libs
    │
    └───types (containt all types)
    │
    └───constants (containt all constant)

```
The structure above is a NX project for monorepo (For more detail: https://nx.dev/)
## Backend
Tech stack: *express*, *jest*, *axios*

For start server please use following command:
```
npm run nx -- serve backend 
```
## Frontend
Tech stack: *react*, *react-route-dom*, *axios*
For start server please use following command:
```
npm run nx -- serve frontend 
```
Please view the website at: `http://localhost:4200`
