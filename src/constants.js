const devEnv = {
  api: 'https://api.bitfinex.com/v2/'
}

const demoEnv = {
  api: ''
}

const prodEnv = {
  api: '',
}

var getEnv = (envType) => {
  return (envType === 'development') ? devEnv : (envType === 'demo') ? demoEnv : prodEnv
}

const Constants = {
  appName: 'reat-seed',
}

export const AppConstants = Object.assign({}, Constants, getEnv(process.env.NODE_ENV))

// export default AppConstants