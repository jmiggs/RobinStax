class CreateWatchlistitems < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlistitems do |t|
      t.string :ticker, null: false
      t.integer :list_id, null: false

      t.timestamps
    end

    add_index :watchlistitems, :list_id
    add_index :watchlistitems, :ticker, unique: true

  end
end
