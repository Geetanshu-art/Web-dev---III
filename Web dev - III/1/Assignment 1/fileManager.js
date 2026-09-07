const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

console.log('Starting file manager...');

function createFile() {
  fs.writeFile(filePath, 'Smart Utility Toolkit\nInitial file content.\n', (err) => {
    if (err) {
      console.log(`Create error: ${err.message}`);
      return;
    }
    console.log('1. File created successfully.');
    readFile();
  });
}

function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Read error: ${err.message}`);
      return;
    }
    console.log('2. File content:');
    console.log(data.trim());
    updateFile();
  });
}

function updateFile() {
  fs.appendFile(filePath, 'Updated content added using appendFile().\n', (err) => {
    if (err) {
      console.log(`Update error: ${err.message}`);
      return;
    }
    console.log('3. File updated successfully.');
    readUpdatedFile();
  });
}

function readUpdatedFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Read-after-update error: ${err.message}`);
      return;
    }
    console.log('4. Updated file content:');
    console.log(data.trim());
    deleteFile();
  });
}

function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(`Delete error: ${err.message}`);
      return;
    }
    console.log('5. File deleted successfully.');
    console.log('File manager finished.');
  });
}

createFile();
