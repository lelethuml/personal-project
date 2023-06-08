const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'Letsdoit!',
  port: 5432,
})

module.exports= pool


const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { firstName, lastName,idNumber, Gender,Email,Password,contactNumber,physicalAddress,postalCode,residenceAddress,taxNumber,basicMonthlyalary } = request.body
  
    pool.query('INSERT INTO users (firstName, lastName,idNumber, Gender,Email,Password,contactNumber,physicalAddress,postalCode,residenceAddress,taxNumber,basicMonthlyalary) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *', [firstName, lastName,idNumber, Gender,Email,Password,contactNumber,physicalAddress,postalCode,residenceAddress,taxNumber,basicMonthlyalary], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstName, lastName,idNumber, Gender,Email,Password,contactNumber,physicalAddress,postalCode,residenceAddress,taxNumber,basicMonthlyalary } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 ,id = $3',
      [firstName, lastName,idNumber, Gender,Email,Password,contactNumber,physicalAddress,postalCode,residenceAddress,taxNumber,basicMonthlyalary, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }

