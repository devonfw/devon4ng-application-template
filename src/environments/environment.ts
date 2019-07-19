export const environment: {
  production: boolean;
  restPathRoot: string;
  restServiceRoot: string;
  security: 'csrf' | 'jwt';
} = {
  production: false,
  restPathRoot: 'http://localhost:8080/',
  restServiceRoot: 'http://localhost:8080/services/rest/',
  security: 'csrf',
};
