class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.integer :user_id, null: false
      t.string :ticker, null: false
  

      t.timestamps
    end

    add_index :assets, :user_id
  end
end
