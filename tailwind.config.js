{
  "name": "paws-advisor-landing-page2",
  "version": "1.0.0",
  "description": "Halaman landing page untuk aplikasi The Paw Advisor.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite serve",
    "build": "vite build",
    "deploy": "gh-pages -d .",
    "build:css": "npx tailwindcss -i ./src/input.css -o ./src/output.css --config tailwind.config.js --minify"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/oksipituaja/Paws-Advisor-Landing-Page2.git"
  },
  "author": "oksipituaja",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/oksipituaja/Paws-Advisor-Landing-Page2/issues"
  },
  "homepage": "https://oksipituaja.github.io/Paws-Advisor-Landing-Page2/",
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "gh-pages": "^6.1.1",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "vite": "^5.1.4"
  },
  "dependencies": {}
}
