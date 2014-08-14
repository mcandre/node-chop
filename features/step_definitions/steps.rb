Given(/^the program has finished$/) do
  @cucumber = `npm test`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  expect(lines.length).to eq(11)

  expect(lines[-7]).to eq('Howdy')
  expect(lines[-6]).to eq('Howdy!')
  expect(lines[-5 .. -4].join("\n")).to eq("Howdy!\n")
  expect(lines[-3]).to eq("Howdy!\r")
  expect(lines[-2]).to eq('Howdy!')
  expect(lines[-1]).to eq('Howdy!')
end
