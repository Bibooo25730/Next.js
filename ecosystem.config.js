module.exports = {
  apps : [{
    script: 'npm start',
  }],
  deploy : {
    production : {
      key  : '',
      user : 'Bibooo', //SSH_USERNAME
      host : '162.14.108.172',
      ref  : 'origin/main',
      repo : 'git@github.com:Bibooo25730/Next.js.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'sourch ~/.nvm/nvm.sh &&  npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    }
  }
};
