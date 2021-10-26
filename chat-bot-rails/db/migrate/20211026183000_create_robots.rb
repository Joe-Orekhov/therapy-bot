class CreateRobots < ActiveRecord::Migration[6.1]
  def change
    create_table :robots do |t|
      t.string :name

      t.timestamps
    end
  end
end
