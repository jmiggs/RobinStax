class Removeassetsfromusers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :assets , :string

  end
end
