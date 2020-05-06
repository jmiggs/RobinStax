class Addindexticker < ActiveRecord::Migration[5.2]
  def change
    add_index :assets, :ticker, unique: true
  end
end
