class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :robot_id
      t.string :questionnaire
      t.string :review

      t.timestamps
    end
  end
end
