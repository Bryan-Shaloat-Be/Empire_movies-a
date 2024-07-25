const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {sql, poolPromise} = require('D:/Usuario Cat/Desktop/PPXP/Practicas-Angular/Empire_movies/empire_movies-a/Server/app/models/DB.js');

exports.register = async(req, res) => {
    console.log("Received data:", req.body);
    const {userName, mail, password, preferences} = req.body; // registro de usuarios 
    try {
        
        const pool = await poolPromise;
        //const hashedPassword = await bcrypt.hash(U_password, 10);

        const result = await pool.request()
            .input('U_Name', sql.NVarChar, userName)  // recordatorio: importante el nombre de las variables para la trasmision de datos
            .input('Mail', sql.NVarChar, mail)
            .input('U_password', sql.NVarChar,password)
            .input('Preferences',sql.NVarChar, preferences)
            .query(`
                
                INSERT INTO users (U_Name, Mail, U_password, Preferences) 
                VALUES (@U_Name, @Mail, @U_Password, @Preferences);
            
                `)
            res.status(201).send({message: 'user adding succesfully', data: result});
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

