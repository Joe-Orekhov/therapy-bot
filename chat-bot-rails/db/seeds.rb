# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ robot_id: 1, name: 'Star Wars' }, { robot_id: 1, name: 'Lord of the Rings' }])
#   Character.create(robot_id: 1, name: 'Luke', movie: movies.first)
Robot.create(name: "POOP")

puts "Developing Negative Felling..."
Feeling.create(robot_id: 1, name: "sad", idacator: 0)
Feeling.create(robot_id: 1, name: "anger", idacator: 0)
Feeling.create(robot_id: 1, name: "fear", idacator: 0)
Feeling.create(robot_id: 1, name: "shame", idacator: 0)
Feeling.create(robot_id: 1, name: "depress", idacator: 0)
Feeling.create(robot_id: 1, name: "upset", idacator: 0)
Feeling.create(robot_id: 1, name: "worse", idacator: 0)
Feeling.create(robot_id: 1, name: "anxious", idacator: 0)
Feeling.create(robot_id: 1, name: "overwhelm", idacator: 0)
Feeling.create(robot_id: 1, name: "hopeless", idacator: 0)
Feeling.create(robot_id: 1, name: "down", idacator: 0)
Feeling.create(robot_id: 1, name: "debilitat", idacator: 0)
Feeling.create(robot_id: 1, name: "defeat", idacator: 0)
puts "Developing Neutral Feelings..."
Feeling.create(robot_id: 1, name:"ok", idacator: 1)
Feeling.create(robot_id: 1, name:"alright", idacator: 1)
Feeling.create(robot_id: 1, name:"good", idacator: 1)
Feeling.create(robot_id: 1, name:"fine", idacator: 1)
Feeling.create(robot_id: 1, name:"idk", idacator: 1)
puts "Developing Positive Feelings..."
Feeling.create(robot_id: 1, name:"joy", idacator: 2)
Feeling.create(robot_id: 1, name:"love", idacator: 2)
Feeling.create(robot_id: 1, name:"happy", idacator: 2)
Feeling.create(robot_id: 1, name:"excited", idacator: 2)
Feeling.create(robot_id: 1, name:"better", idacator: 2)
Feeling.create(robot_id: 1, name:"excited", idacator: 2)
Feeling.create(robot_id: 1, name:"hopful", idacator: 2)
Feeling.create(robot_id: 1, name:"thankful", idacator: 2)
Feeling.create(robot_id: 1, name:"amazing", idacator: 2)
Feeling.create(robot_id: 1, name:"awsome", idacator: 2)
Feeling.create(robot_id: 1, name:"brave", idacator: 2)
Feeling.create(robot_id: 1, name:"confident", idacator: 2)
puts "FEELINGS DEVELOPED!!"
puts "I am now self aware"

Appointment.create(user_id: 1, robot_id: 1, questionnaire: "BOP", review: 'COW')
Chat.create(appointment_id: 1, is_user: true, message: "HELLO")
User.create(name: "POOP", username:"POOP", password: "POOP")