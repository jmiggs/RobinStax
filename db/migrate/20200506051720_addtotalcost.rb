class Addtotalcost < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :totalcost, :integer
  end
end
