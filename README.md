Original tutorial: https://qiita.com/kaishuu0123/items/00b89e092f156a02a3e5
Google doc: https://docs.google.com/presentation/d/1IGQRNSIGhvXH9avdN83xDWDFSA2omn465c7LlR23oa4/edit?usp=sharing


Initialize the project
---
   Create a new application mydemo with parameter webpack=react
		rails new mydemo --webpack=react
		bundle install
	Create a controller Home with index page to display our application
		rails g controller Home index
	Modify app/views/home/index.html.erb, add following code
		<%= javascript_pack_tag 'hello_react' %>
	Start Rails server and webpack server
		rails s
		./bin/webpack-dev-server
		http://localhost:3000/home/index

Create a Rails API implementation (backend)
---
	Create a model task to store the data (title, description)
		rails g model task title:string description:string
		rails db:migrate
	Create a controller Tasks to deal with the model task 
		(add index, create, update, destroy functions)
		rails g controller Api::Tasks
	Modify config/routes.rb to map between HTTP verbs and URLs to controller actions
		namespace :api do
			resources :tasks
	  	end
	Register data manually to test the Rails API implementation
		rails c
		Task.create(title: "foo", description: "bar")
		http://localhost:3000/api/tasks

Implement React components (frontend)
---
	Add React components
		app/javascript/packs/application.js
		app/javascript/components/app.jsx
		app/javascript/components/header.jsx
		app/javascript/components/task-form.jsx
		app/javascript/components/task-row.jsx
		app/javascript/components/task-table.jsx
	Modify app/controllers/home_controller.rb
		class HomeController < ActionController::Base
	Modify app/controllers/application_controller.rb
		class ApplicationController < ActionController::API
	Modify app/views/home/index.html.erb
		<div id='example-app'></div>
		<%= javascript_pack_tag 'application' %>
