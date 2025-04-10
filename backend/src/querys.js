const insertUser = `
    INSERT INTO Usuarios(
        Name, Username, Email, AddressStreet, AddressSuite, AddressCity, AddressZipCode, AddressGeoLat, AddressGeoLng, Phone, WebSite, CompanyName, CompanyCatchPhrase, CompanyBs)
    VALUES(
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

const updateUserById = `
    UPDATE Usuarios SET
        Name = ?, 
        Username = ?, 
        Email = ?, 
        AddressStreet = ?, 
        AddressSuite = ?, 
        AddressCity = ?, 
        AddressZipCode = ?, 
        AddressGeoLat = ?, 
        AddressGeoLng = ?, 
        Phone = ?, 
        WebSite = ?,
        CompanyName = ?, 
        CompanyCatchPhrase = ?, 
        CompanyBs = ?
    WHERE
        Id = ?;
    `;

const deleteUserById = `
    DELETE FROM Usuarios
    WHERE Id = ?
    `;

const selectUserById = `SELECT * FROM Usuarios WHERE Id = ?;`
const selectUsers = `SELECT * FROM Usuarios;`;

module.exports = {
    insertUser,
    updateUserById,
    deleteUserById,
    selectUserById,
    selectUsers
}
