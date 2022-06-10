import * as SQLite from 'react-native-sqlite-storage'

/* ======= Passo 1 BD ======*/
export const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => { },
    error => { console.log(error) }
);

