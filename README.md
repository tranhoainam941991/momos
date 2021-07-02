

# Momos
**For limit of time, I cannot do E2E test for Frontend, I only include a small unit test in `/apps/backend/test` **

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
## Backend
For start server please use following command:
```
npm run nx -- serve backend 
```
## Frontend
For start server please use following command:
```
npm run nx -- serve frontend 
```