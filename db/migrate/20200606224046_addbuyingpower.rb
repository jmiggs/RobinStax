class Addbuyingpower < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :buying_power, :integer
  end
end
