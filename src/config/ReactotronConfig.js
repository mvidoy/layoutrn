import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron
    //Solução para conectar Reactotron ao Emulador (Android) - Osvaldo
    //https://github.com/infinitered/reactotron/issues/431
    //shivam-aditya comentou on 26 Sep 2017
        .configure({
            host: '192.168.0.35', // IP da máquina local (Osvaldo)
        })
        .useReactNative()
        .connect();
    tron.clear();
    console.tron = tron;
}