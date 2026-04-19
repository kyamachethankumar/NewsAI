// Simple test script for the News API
const http = require('http');

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function runTests() {
  console.log('🧪 Testing News API Endpoints\n');

  try {
    // Test root endpoint
    console.log('1️⃣  Testing GET /');
    const rootRes = await makeRequest('/');
    console.log(`   Status: ${rootRes.status}`);
    console.log(`   Response:`, JSON.stringify(rootRes.data, null, 2));
    console.log('');

    // Test news endpoint with defaults
    console.log('2️⃣  Testing GET /news (defaults: us, general)');
    const newsRes = await makeRequest('/news');
    console.log(`   Status: ${newsRes.status}`);
    console.log(`   Articles count: ${newsRes.data.articles?.length || 0}`);
    if (newsRes.data.articles?.length > 0) {
      console.log(`   First article:`, JSON.stringify(newsRes.data.articles[0], null, 2));
    }
    console.log('');

    // Test with custom parameters
    console.log('3️⃣  Testing GET /news?country=gb&category=technology');
    const customRes = await makeRequest('/news?country=gb&category=technology');
    console.log(`   Status: ${customRes.status}`);
    console.log(`   Articles count: ${customRes.data.articles?.length || 0}`);
    console.log('');

    console.log('✅ Tests completed!');

  } catch (error) {
    console.error('❌ Error during testing:', error.message);
  }

  process.exit(0);
}

// Wait a bit for server to start, then run tests
setTimeout(runTests, 2000);
