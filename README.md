# Vue-Tail-Pinia-Router4-Starter

--- 
## Technical Details
- tailwindcss 3.1.8 (Not Latest Ver.)
- typescript support
- vue router 4 support
- vue composition api
- pinia state management
- fs folder organized

--- 

## Tip: 
   - changed default tsconfig.json
   - WebStorm npm toolkit must require the name of the project same as the name in the package.json file.
   - attached with Dockerfile and nginx configuration to contacting cicd pipeline
   - remember to change the port to running the project !

---

## Setup

### Starting up

```bash
git clone ...
yarn install # install the dependencies
npm run dev # run the development environment
# change the port to running the project
vim Dockerfile
vim nginx/nginx.conf

```

### Releasing Versions

- recommend to use WebStorm to release with the visualized git version control dashboard.
```bash
git git checkout -b release/version-number
git remote add release <url>/release/version-number
# delete the dist folder ignoring in the .gitignore file
vim .gitignore
npm run build 
git add .
git push release version-number
```

