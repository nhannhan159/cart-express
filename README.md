# cart-express

# What did you implement:

	* Create default item on database.
	* When change item quantity, update shipping fee and total cost.
	* When change delivery location, update shipping fee and total cost.

# How did you implement it:

	* Technical stack: Nodejs.
	* Backend: Expressjs, Sequenlizejs(ORM), Marko(server side render).
	* Frontend: Marko(client side render), Materialize CSS, JQuery.

# Asumptions:

	* Supplier will have all destination correspond to delivery address, if missing the recored had correct destination on database, shipping fee will not calculate for this item.
	* Supplier will have unlimited items, prevent to get items from another suppliers.
	* All items in one supplier will be shipped in only one round.
	* Flat rate calculation for each item will base on weights of total selected quantity of this item.

# Step to run:

	1. Prerequisite: install Nodejs >= 8.0.0, MySQL >= 5.6.
	2. Run `npm install`.
	3. Create database schema `cartdb_dev`. 
	4. Change database config on `config/config.json`.
	5. Run `node_modules/.bin/sequelize db:migrate`.
	6. Run `node_modules/.bin/sequelize db:seed:all`.
	7. Run `npm start`.
	8. Server started on `http://localhost:3000`.
	9. Please also connect to internet because I used some libraries in CDN.

# Todos:

 - [ ] Write tests.
 - [ ] Add more detailed comments.
