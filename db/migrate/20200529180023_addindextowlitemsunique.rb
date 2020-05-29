class Addindextowlitemsunique < ActiveRecord::Migration[5.2]
  def change
    add_index :watchlistitems, [:list_id, :ticker], unique: true
  end
end
