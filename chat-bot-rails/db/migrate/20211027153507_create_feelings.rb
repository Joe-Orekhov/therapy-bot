class CreateFeelings < ActiveRecord::Migration[6.1]
  def change
    create_table :feelings do |t|
      t.string :name
      t.integer :idacator
      t.integer :robot_id

      t.timestamps
    end
  end
end
