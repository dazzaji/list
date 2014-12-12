	var user = [
		{
			id: 1,
			name: "Jane Smith",
			email:"jane.smith@gmail.com",
			password:"",
			dateCreated:"01/03/14",
			items: [2,3],
			categories: [1,3]
		},
		{
			id: 2,
			name: "Jim Smith",
			email:"jim.smith@gmail.com",
			password:"",
			dateCreated:"12/04/14",
			items: [1,2,3],
			categories: [1,3,5]
		},
		{
			id:3,
			name: "BBC",
			email:"info@bbc.co.uk",
			password:"",
			dateCreated:"12/04/14",
			items:[]
		},
		{
			id:4,
			name: "Food Dudes",
			email:"hi@fooddudes.com",
			password:"",
			dateCreated:"12/04/14",
			items:[],
			maker: true
		},
		{
			id:5,
			name: "Khan Academy",
			email:"info@khanacademy.com",
			password:"",
			dateCreated:"12/04/14",
			items:[],
			maker: true
		}
	];

	var photo = [
		{
			id: "1",
			itemId: 1,
			userId:1,
			photoUrl: "http://examplepic.com",
			dateCreated:""
		},
		{
			id: "2",
			itemId: 4,
			userId:1,
			photoUrl: "http://examplepic.com",
			dateCreated:""
		},
		{
			id: "2",
			itemId: 4,
			userId:5,
			photoUrl: "http://examplepic.com",
			dateCreated:""
		}
	];

	var category = [
		{
			id: "1",
			name: "Parks"
		},
		{
			id: "2",
			name: "Design"
		},
		{
			id: "3",
			name: "Food"
		},
		{
			id:"4",
			name:"People"		
		},
		{
			id:"5",
			name:"Fandom"
		}
	];

	var item = [
		{
			id: 1,
			name: "Turkey Dinner",
			category: 3,
			userId: 3,
			user: "BBC",
			exampleUrl: ""	
		},
		{
			id: 2,
			name: "Rusted Pipes",
			category: 2,
			userId: 5,
			user: "Khan Academy",
			exampleUrl: ""
		},
		{
			id: 3,
			name: "Sailor Uniform",
			category: 2,
			userId: 4,
			user: "Food Dudes",
			exampleUrl: ""
		},
		{
			id: 4,
			name: "A Valley",
			category: 1,
			userId: 3,
			user: "BBC",
			exampleUrl:""
		},
		{
			id: 5,
			name: "Lasagna",
			category: 2,
			userId: 4,
			user: "Food Dudes",
			exampleUrl:""	
		}
	];

	var items = [
	];

	module.exports = {
		user: user,
		photo: photo,
		category: category,
		item: item,
		items: items
	};







