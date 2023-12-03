const paypalClientId = process.env.PAYPAL_CLIENT_ID || 'ENUBNe7Ji1ZIWJEd1Kdco6xaA0dJEpYR3HHcoai6HMxmuLDI2g1nRQYATyCPYtChQL8o399iCYoalhV7';
const paypalSecret = process.env.PAYPAL_SECRET || 'ENUBNe7Ji1ZIWJEd1Kdco6xaA0dJEpYR3HHcoai6HMxmuLDI2g1nRQYATyCPYtChQL8o399iCYoalhV7';

const environment = new config.SandboxEnvironment(paypalClientId, paypalSecret);
const client = new config.PayPalHttpClient(environment);
const policies = {
  'script-src': ["'self'", 'https://www.paypal.com', 'https://www.paypalobjects.com'],
  'style-src': ["'self'", 'https://www.paypalobjects.com'],
  'img-src': ["'self'", 'https://www.paypalobjects.com'],
 };
 
 module.exports = Object.entries(policies)
  .map(([key, value]) => {
     if (Array.isArray(value)) {
       return `${key} ${value.join(' ')}`;
     }
     return '';
  })
  .join('; ');
