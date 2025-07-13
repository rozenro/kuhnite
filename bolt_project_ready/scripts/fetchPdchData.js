import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchPDChData() {
  try {
    const response = await fetch('https://rosi.bg/pdch-ploskosti-108/');
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const products = [];
    
    $('.product-layout').each((i, element) => {
      const name = $(element).find('.name a').text().trim();
      const price = $(element).find('.price').text().trim();
      const image = $(element).find('.image img').attr('src');
      const description = $(element).find('.description').text().trim();
      
      products.push({
        name,
        price,
        image,
        description
      });
    });
    
    const data = { products, lastUpdated: new Date().toISOString() };
    
    await fs.writeFile(
      path.join(__dirname, '../src/data/pdch-data.json'),
      JSON.stringify(data, null, 2)
    );
    
    console.log('PDCh data updated successfully');
  } catch (error) {
    console.error('Error fetching PDCh data:', error);
  }
}

fetchPDChData();