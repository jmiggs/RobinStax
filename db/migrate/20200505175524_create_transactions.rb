class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
        t.belongs_to :users
        t.belongs_to :assets
        t.integer :amount, null: false
        t.string :type, null: false 

      t.timestamps
    end
  end
end
