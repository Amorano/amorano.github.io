const fs = require('fs');
const path = require('path');

function generateGalleryData() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const outputPath = path.join(process.cwd(), 'components', 'gallery-data.json');

  // Read the images directory
  const files = fs.readdirSync(imagesDir);

  // Filter for image files
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  // Generate gallery items
  const galleryItems = imageFiles.map((file, index) => {
    // Remove file extension
    const nameWithoutExt = path.parse(file).name;

    // Remove numbered suffix if it exists (e.g., " (1)", " (2)", etc.)
    const cleanName = nameWithoutExt.replace(/\s*\(\d+\)$/, '');

    // Split the filename by hyphens
    const parts = cleanName.split('-');

    // First part is the title
    const title = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

    // Rest of the parts become tags, excluding any numbered suffixes
    const tags = parts.slice(1).map(tag =>
      tag.charAt(0).toUpperCase() + tag.slice(1)
    );

    return {
      id: index + 1,
      title,
      imageUrl: `/images/${file}`, // Keep original filename for image path
      tags
    };
  });

  // Create components directory if it doesn't exist
  const componentsDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir);
  }

  // Write the data to a JSON file
  fs.writeFileSync(outputPath, JSON.stringify(galleryItems, null, 2));
  console.log(`Generated gallery data with ${galleryItems.length} items`);

  // Log some examples to show the cleaning in action
  console.log('\nExample items:');
  const examples = galleryItems.slice(0, 3);
  examples.forEach(item => {
    console.log({
      title: item.title,
      tags: item.tags,
      imageUrl: item.imageUrl
    });
  });
}

generateGalleryData();