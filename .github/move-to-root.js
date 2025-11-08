const fs = require('fs');
const path = require('path');

// Файлы и папки для копирования из app/ в корень
const itemsToMove = [
  'app.vue',
  'error.vue',
  'assets',
  'components',
  'composables',
  'layouts',
  'middleware',
  'pages',
  'plugins',
  'providers',
  'stores',
];

// Копируем каждый элемент
itemsToMove.forEach((item) => {
  const source = path.join('app', item);
  const destination = item;

  if (fs.existsSync(source)) {
    if (fs.statSync(source).isDirectory()) {
      copyFolderSync(source, destination);
    } else {
      fs.copyFileSync(source, destination);
    }
    console.log(`✓ Copied ${source} to ${destination}`);
  }
});

function copyFolderSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyFolderSync(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

console.log('✅ All files moved to root directory');
