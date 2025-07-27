This directory contains example nginx configuration files for the coolstuff project.

Files:
  - coolstuff_nginx.conf: Reverse proxy configuration for the Angular front-end and Spring Boot backend.
    * Serves the Angular build from the dist folder.
    * Proxies /api to the backend running on localhost:8080.
    * Adds WebSocket headers (Upgrade and Connection) so that WebSockets work correctly.

  - hello_nginx.conf: Simple hello-world server. When loaded, nginx listens on port 8081 and responds with "Hello World" to any request.

To use these files with the Homebrew nginx installation:
  1. Determine the Homebrew prefix for nginx: `brew --prefix nginx`.
  2. Copy the desired file(s) into the `$PREFIX/etc/nginx/servers/` directory. nginx will automatically load any files in this directory.
  3. Adjust the `root` path in coolstuff_nginx.conf so it points to the built Angular `dist` directory.
  4. Test the configuration: `nginx -t` and reload nginx.

These files are provided as examples. You should integrate them into your own repository and adjust paths as necessary.
