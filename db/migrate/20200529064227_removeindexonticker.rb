class Removeindexonticker < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlistitems, :ticker
  end
end
