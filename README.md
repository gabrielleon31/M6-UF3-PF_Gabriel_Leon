# Documentació de l’arquitectura i ús del Context

## Arquitectura de components

```
<App>
  └─ <ThemeProvider>
       └─ <UserProvider>
            └─ <Layout>
                 ├─ <Sidebar>
                 │    ├─ <NewUserForm />
                 │    ├─ <UserList />
                 │    ├─ <UserInfo />
                 │    └─ <ThemeToggle />
                 └─ <Main>
                      ├─ <Main />
                      └─ <TaskSection>
                           ├─ <NewTaskForm />
                           ├─ <TaskList />
                           └─ <TaskItem />
```
- **App**: punt d’entrada que engloba els Providers.
- **Layout**: distribueix la interfície en Sidebar i Main.
- Components dins de **Sidebar** i **Main** són petits i reutilitzables.

## Ús del Context

### ThemeContext
- **Propòsit**: gestionar el tema (clar/ fosc) de la UI.
- **Elements**:
  - `theme` (state): valor actual (`'light'` o `'dark'`).
  - `toggleTheme()` (funció): alterna el tema.
- **Efecte**: un `useEffect` aplica la classe corresponent al `<body>`.

### UserContext
- **Propòsit**: emmagatzemar la llista d’usuaris i les seves tasques.
- **Elements**:
  - `users` (state): array d’objectes `{ name, tasks }`.
  - `selectedIndex` (state): usuari actiu o `null`.
  - Funcions:
    - `addUser(name)`
    - `selectUser(idx)` / `deselectUser()`
    - `addTask(text)`
    - `toggleTask(idx)`
    - `editTask(idx, newText)`
    - `deleteTask(idx)`
- Les funcions modifiquen l’estat de manera immutable (map, filter).
