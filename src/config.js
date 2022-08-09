const api = {
	url: "https://www.omdbapi.com",
	key: "e50b7182",
};

export const authUsers = [
	{
		id: "1001",
		username: "admin",
		name: "Admin",
		pass: "1234",
	},
	{
		id: "1002",
		username: "bruno",
		name: "Bruno Díaz",
		pass: "1234",
	},
	{
		id: "1003",
		username: "linder",
		name: "Linder Hassinger",
		pass: "1234",
	},
	{
		id: "1004",
		username: "andres",
		name: "Andres Taboada",
		pass: "1234",
	},
];

const Config = {
	authUsers,
	api,
};

export default Config;
