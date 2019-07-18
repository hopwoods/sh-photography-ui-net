const dev = {
  apiGateway: {
    URL: 'https://localhost:44398/api'
  }
};

const prod = {
  apiGateway: {
    URL: 'https://sh-photography.azurewebsites.net/api'
  }
};

const config = process.env.NODE_ENV === 'production'
  ? prod
  : dev;

export default config;