class CreateChats < ActiveRecord::Migration[6.1]
  def change
    create_table :chats do |t|
      t.integer :appointment_id
      t.boolean :is_user
      t.string :message

      t.timestamps
    end
  end
end
