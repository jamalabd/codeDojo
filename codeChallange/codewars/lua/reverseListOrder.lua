local solution = {}

function solution.reverse(array)
  local reversed = {}

  -- traverse from right to left inserting from left to right:
  for i = #array, 1, -1 do
    table.insert(reversed, array[i])
  end

  return reversed
end

return solution