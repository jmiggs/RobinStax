class Transaction < ApplicationRecord
  validates :user_id, :asset_id, :amount, :transtype, presence: true


  belongs_to :user


  belongs_to :asset


  
end
