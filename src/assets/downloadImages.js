const https = require("https");
const fs = require("fs");
const path = require("path");

const images = [
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    filename: "classroom.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    filename: "students.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    filename: "teacher.jpg",
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(__dirname, "images", filename));
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filename);
        reject(err);
      });
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    await downloadImage(image.url, image.filename);
  }
};

downloadAllImages()
  .then(() => {
    console.log("All images downloaded successfully");
  })
  .catch((err) => {
    console.error("Error downloading images:", err);
  });
