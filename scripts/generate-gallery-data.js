const fs = require('fs');
const path = require('path');

function generateGalleryData() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const outputPath = path.join(process.cwd(), 'data', 'gallery-data.json');

  // Read existing gallery data
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    console.log(`Found ${existingData.length} existing entries`);
  } catch (error) {
    console.log('No existing gallery data found, will create new file');
  }

  // Create a map of existing entries by filename
  const existingMap = new Map(
    existingData.map(item => [item.imageUrl.replace('/images/', ''), item])
  );

  // Get list of image files
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  // Track new entries
  const newEntries = [];

  // Process each image file
  imageFiles.forEach(file => {
    if (!existingMap.has(file)) {
      newEntries.push({
        id: existingData.length + newEntries.length + 1,
        title: "NEEDS_TITLE",
        imageUrl: `/images/${file}`,
        tags: ["NEEDS_TAGS"]
      });
    }
  });

  if (newEntries.length > 0) {
    console.log('\nNew entries created for:');
    newEntries.forEach(entry => console.log(entry.imageUrl));
  }

  // Combine existing and new entries
  const allEntries = [...existingData, ...newEntries];

  // Write the updated data
  fs.writeFileSync(outputPath, JSON.stringify(allEntries, null, 2));
  console.log(`\nTotal entries: ${allEntries.length}`);
  console.log(`New entries added: ${newEntries.length}`);
}

generateGalleryData();