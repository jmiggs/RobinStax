class Transaction < ApplicationRecord
  validates :users_id, :assets_id, :amount, :transtype, presence: true

end
