class Adduniquetowl < ActiveRecord::Migration[5.2]
  def change
    add_index :watchlists, :name, unique: true
  end
end
