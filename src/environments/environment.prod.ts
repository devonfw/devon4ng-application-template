export const environment: {
  production: boolean;
  restPathRoot: string;
  restServiceRoot: string;
  security: 'csrf' | 'jwt';
} = {
  production: false,
  restPathRoot: 'http://localhost:8081/demo-server/',
  restServiceRoot: 'http://localhost:8081/demo-server/services/rest/',
  security: 'csrf',
};
