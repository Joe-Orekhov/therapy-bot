# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ robot_id: 1, name: 'Star Wars' }, { robot_id: 1, name: 'Lord of the Rings' }])
#   Character.create(robot_id: 1, name: 'Luke', movie: movies.first)

puts "RESTTING"
User.delete_all
Robot.delete_all
Feeling.delete_all
Chat.delete_all
Appointment.delete_all

roboto = Robot.create(name: "ROBOTO")

user1 = User.create(name: "POOP", username:"POOP", password: "POOP")

puts "Developing Negative Felling..."
Feeling.create(robot_id: roboto.id, name: "sad", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "anger", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "fear", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "shame", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "depress", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "upset", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "worse", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "anxious", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "overwhelm", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "hopeless", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "down", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "debilitat", idacator: 0)
Feeling.create(robot_id: roboto.id, name: "defeat", idacator: 0)
puts "Developing Neutral Feelings..."
Feeling.create(robot_id: roboto.id, name:"ok", idacator: 1)
Feeling.create(robot_id: roboto.id, name:"alright", idacator: 1)
Feeling.create(robot_id: roboto.id, name:"good", idacator: 1)
Feeling.create(robot_id: roboto.id, name:"fine", idacator: 1)
Feeling.create(robot_id: roboto.id, name:"idk", idacator: 1)
puts "Developing Positive Feelings..."
Feeling.create(robot_id: roboto.id, name:"joy", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"love", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"happy", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"excited", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"better", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"excited", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"hopful", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"thankful", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"amazing", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"awsome", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"brave", idacator: 2)
Feeling.create(robot_id: roboto.id, name:"confident", idacator: 2)
puts "FEELINGS DEVELOPED!!"
puts "I am now self aware"

appo1 = Appointment.create(user_id: user1.id, robot_id: roboto.id, questionnaire: "BOP", review: 'COW')

Chat.create(appointment_id: appo1.id, is_user: false, message: "Hey, #{user1.username}, how are you doing today?")





puts "I SHOULD BE WORKING"