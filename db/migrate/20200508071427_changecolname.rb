class Changecolname < ActiveRecord::Migration[5.2]
  def change
    rename_column :assets, :ticker, :symbol
  end
end
