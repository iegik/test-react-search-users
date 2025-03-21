type Geolocation = {
  "lat": `${number}`;
  "lng": `${number}`;
}

type Address = {
  "street": string;
    "suite": string;
    "city": string;
    "zipcode": `${number}-${number}`;
    "geo": Geolocation;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
