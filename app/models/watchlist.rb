class Watchlist < ApplicationRecord
  belongs_to :user
  
  has_many :watchlistitems,
  foreign_key: 'list_id',
  class_name: 'Watchlistitem'

end
