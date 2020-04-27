class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :name

      t.timestamps
    end
  end
end
