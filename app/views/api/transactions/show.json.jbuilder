json.array! @num_shares do |share|
  json.symbol share.symbol
  json.amount share.amount
end
