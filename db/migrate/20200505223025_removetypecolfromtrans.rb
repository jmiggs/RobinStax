class Removetypecolfromtrans < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :type, :string
    add_column :transactions, :transtype, :string
  end
end
