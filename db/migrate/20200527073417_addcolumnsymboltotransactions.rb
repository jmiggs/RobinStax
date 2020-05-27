class Addcolumnsymboltotransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :symbol, :string
  end
end
