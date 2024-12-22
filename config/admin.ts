export default ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET', 'd6rmMZv7Qg1zv4aM+bhgpQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
