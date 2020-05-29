class Watchlist < ApplicationRecord
  validates :name, uniqueness: true
  validates :name, presence: true

  belongs_to :user
  
  has_many :watchlistitems,
  foreign_key: 'list_id',
  class_name: 'Watchlistitem'

end
