class Watchlistitem < ApplicationRecord
  belongs_to :watchlist,
  class_name: 'Watchlist',
  foreign_key: 'list_id'
end
