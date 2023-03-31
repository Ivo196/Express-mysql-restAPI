import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password:'Ivo15715915777#',
    port:'3306',
    database:'company'
})