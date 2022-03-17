module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'acac58b46bdea0868d9307119e256b12'),
  },
});
