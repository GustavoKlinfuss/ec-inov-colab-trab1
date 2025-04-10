function mapUserToResponse(usersDbOutpput){
    return usersDbOutpput.map(x => mapDbUserToOutputUser(x));
}
  
function mapDbUserToOutputUser(x) {
    return {
      id: x.Id,
      name: x.Name,
      username: x.Username,
      email: x.Email,
      address: {
        street: x.AddressStreet,
        suite: x.AddressSuite,
        city: x.AddressCity,
        zipcode: x.AddressZipCode,
        geo: {
          lat: x.AddressGeoLat,
          lng: x.AddressGeoLng
        }
      },
      phone: x.Phone,
      website: x.WebSite,
      company: {
        name: x.CompanyName,
        catchPhrase: x.CompanyCatchPhrase,
        bs: x.CompanyBs
      }
    }
}

function validate(name, username, email, phone, website, company, street, suite, city, zipcode, geo)
{
  if (!name || name === "")
    return "Nome é obrigatório";
  if (name.length > 40)
    return "Nome deve ter no máximo 40 caracteres";
  
  if (!username || username === "")
    return "Nome de usuário é obrigatório";
  if (username.length > 255)
    return "Nome de usuário deve ter no máximo 255 caracteres";

  if (!email || email === "")
    return "Email é obrigatório";
  if (email.length > 255)
    return "Email deve ter no máximo 255 caracteres";

  if (!phone || phone === "")
    return "Telefone é obrigatório";
  if (phone.length > 60)
    return "Telefone deve ter no máximo 60 caracteres";

  if (website.length > 255)
    return "Website deve ter no máximo 255 caracteres";

  if (company.name.length > 255)
    return "Nome da empresa deve ter no máximo 255 caracteres";
  if (company.catchPhrase.length > 255)
    return "Frase de captura deve ter no máximo 255 caracteres";
  if (company.bs.length > 255)
    return "BS da empresa deve ter no máximo 255 caracteres";
  if (street.length > 255)
    return "Rua deve ter no máximo 255 caracteres";
  if (suite.length > 255)
    return "Número deve ter no máximo 255 caracteres";
  if (city.length > 255)
    return "Cidade deve ter no máximo 255 caracteres";
  if (zipcode.length > 255)
    return "Código postal deve ter no máximo 255 caracteres";
  if (geo.lat.length > 255)
    return "Geolocalizacao Latitude deve ter no máximo 255 caracteres";
  if (geo.lng.length > 255)
    return "Geolocalizacao Longitude deve ter no máximo 255 caracteres";

  return null;
}


module.exports = {
    mapUserToResponse,
    mapDbUserToOutputUser,
    validate
}