module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'w9wPIB6EwQIMU1KZpGgmXw=='), // Zamenite vrednost sa vašim generisanim ključem
    },
  },
});
