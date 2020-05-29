class Watchlistitem < ApplicationRecord
  validates :list_id, uniqueness: { scope: [:ticker] }


  belongs_to :watchlist,
  class_name: 'Watchlist',
  foreign_key: 'list_id'
end
