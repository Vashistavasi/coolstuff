# Coolstuff Portfolio Site

This repository contains a personal portfolio website built with a **Spring Boot** backend and an **Angular** frontend. The site will include a home page displaying articles (for now pulled from placeholders) and an about page. The project structure follows best practices for combining Angular and Spring Boot into a single repository: separate `backend` and `frontend` folders help keep the code organized. According to Bootify's recommendations, Angular's client code normally resides in a `src/` folder, but moving the frontend into a dedicated folder keeps the multi‑module project consistent【502989602532700†L92-L102】. When you run `ng new`, Angular CLI generates a skeleton application inside the `src/` folder of a new workspace【895014145925050†L59-L67】.

## Backend (`backend`)

* Built with **Spring Boot** 3 and Java 17.
* Exposes REST endpoints:
  * `GET /api/articles` – returns a list of article objects; currently hard‑coded placeholders.
  * `GET /api/about` – returns basic “about me” information.
* See [`backend/pom.xml`](backend/pom.xml) for Maven configuration.

## Frontend (`frontend`)

The frontend will be an Angular SPA. This repository includes a starter structure:

* `package.json` defines Angular and build dependencies.
* `angular.json` configures the Angular CLI build and development server.
* Source files live under `frontend/src`. Main entry points include:
  * `src/index.html` – root HTML file that bootstraps the Angular app.
  * `src/main.ts` – entry point that bootstraps `AppModule`.
  * `src/app/app.module.ts` – defines the root Angular module and routes.
  * `src/app/home` and `src/app/about` – components for the home and about pages.

To build and serve the frontend locally you will need to install Node.js (≥ 18) and the Angular CLI. Once dependencies are installed, run:

```bash
cd frontend
npm install
npm start
```

The `build` script in `package.json` outputs the production build into the `backend/src/main/resources/static` directory, allowing the Angular app to be served by Spring Boot.

## Deployment & CI/CD

Later, you can configure a GitHub Actions workflow to build both the backend and frontend, copy the artifacts to an Azure Ubuntu VM via SSH, and run deployment scripts. For copying files via SSH in a GitHub Actions workflow, you can use actions like [`appleboy/scp-action`](https://github.com/appleboy/scp-action). The README for `appleboy/scp-action` shows a simple example where the action copies local files to a remote server using secrets for host, username, password and port【174358878617835†L58-L79】. You can also execute remote commands via `appleboy/ssh-action`; its quick‑start example shows how to run a command on a remote host by specifying the host, username, password (or SSH key) and script【439214097572005†L178-L199】.

For SSL setup on your Azure VM, the Azure OSS Developer Support blog outlines how to install Certbot via snap and create a Let’s Encrypt certificate for your domain using `sudo certbot --nginx -d yourcustomdomain.com -d www.yourcustomdomain.com`【863964802187865†L109-L115】. After obtaining the certificate, you’ll need to update your Nginx configuration to use the generated `fullchain.pem` and `privkey.pem` files and reload Nginx【863964802187865†L190-L205】. Ensure your domain’s DNS A record points to the VM’s public IP and that ports 80 and 443 are open【863964802187865†L132-L157】.

## Notes

* Replace the placeholder article data and about information with actual content from your LinkedIn articles and bio.
* Update any configuration values as needed (for example, customizing Maven group/artifact IDs).
* This project is a starting point; further enhancements like database integration, form validation, or styling can be added later.
