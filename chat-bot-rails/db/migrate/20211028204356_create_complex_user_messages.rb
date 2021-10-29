class CreateComplexUserMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :complex_user_messages do |t|
      t.string :message
      t.integer :chat_id

      t.timestamps
    end
  end
end
